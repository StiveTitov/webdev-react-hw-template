import { TracksType } from "@/app/api/TrackApi";
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type TrackListType = {
    tracks: [] | TracksType[],
    isShuffled: boolean,
    shuffledTracks: [] | TracksType[],
    currentTrack: null | TracksType,
    isPlaying: boolean,
    filterOptions: {
        authors: string[],
        searchValue: string,
        years: string[],
        genres: string[],
    },
    filtredTracks: [] | TracksType[],
};

type SetCurrentTrackType = {
    currentTrack: TracksType,
    tracks: TracksType[],
}

const initialState: TrackListType = {
    tracks: [],
    isShuffled: false,
    shuffledTracks: [],
    currentTrack: null,
    isPlaying: false,
    filterOptions: {
        authors: [],
        searchValue: "",
        years:[],
        genres:[],
    },
    filtredTracks: [],
};
const playlistSlice = createSlice({
    name: "playlist",
    initialState,
    reducers: {
        setTracks: (state, action: PayloadAction<TracksType[]>) => {
            state.tracks = action.payload;
        },
        toggleShuffled: (state) => {
            state.isShuffled = !state.isShuffled;

        },
        togglePlaying: (state) => {
            state.isPlaying = !state.isPlaying;

        },

        setCurrentTrack: (state, action: PayloadAction<SetCurrentTrackType>) => {
            state.currentTrack = action.payload.currentTrack;
            state.tracks = action.payload.tracks;
            state.isPlaying = true;

            state.shuffledTracks = [...action.payload.tracks].sort(
                () => 0.5 - Math.random(),
            );
        },
        nextTrack: changeTrack(1),
        prevTrack: changeTrack(-1),

        setFilteredTracks: (
            state,
            action: PayloadAction<{
              authors?: string[];
              years?: string[];
              genre?: string[];
              searchValue?: string;
            }>
          ) => {
            state.filterOptions = {
              authors: action.payload.authors || state.filterOptions.authors,
              years: action.payload.years || state.filterOptions.years,
              genres: action.payload.genre || state.filterOptions.genres,
              searchValue: action.payload.searchValue || "",
            };
            state.filtredTracks = state.tracks.filter((track) => {
                const hasAuthor = state.filterOptions.authors.length !== 0;
                const hasYear = state.filterOptions.years.length !== 0;
                const hasGenre = state.filterOptions.genres.length !== 0;
        
                const isAuthors = hasAuthor ? state.filterOptions.authors.includes(track.author) : true
                const isGenres = hasGenre ? state.filterOptions.genres.includes(track.genre) : true
                const isYears = hasYear ? state.filterOptions.years.includes(track.release_date) : true
                const isSearchValueIncluded =
                  track.name
                    .toLowerCase()
                    .includes(state.filterOptions.searchValue.toLowerCase()); 
        
                return isAuthors && isGenres && isSearchValueIncluded && isYears
              });
    },
}});

function changeTrack(direction: number) {
    return (state: TrackListType) => {
        const currentTracks = state.isShuffled ? state.shuffledTracks : state.tracks;
        let newIndex = currentTracks.findIndex(item => item.id === state.currentTrack?.id) + direction;

        // Циклическое переключение
        newIndex = (newIndex + currentTracks.length) % currentTracks.length;

        state.currentTrack = currentTracks[newIndex];
        state.isPlaying = true;
    };
}

export const {
    setTracks,
    togglePlaying,
    toggleShuffled,
    setCurrentTrack,
    nextTrack,
    prevTrack,
    setFilteredTracks
} = playlistSlice.actions;

export const playlistReducer = playlistSlice.reducer;