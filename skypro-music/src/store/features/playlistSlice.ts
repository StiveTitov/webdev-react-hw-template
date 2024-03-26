import { TracksType } from "@/app/api/TrackApi";
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type TrackListType = {
    tracks: [] | TracksType[],
    isShuffled: boolean,
    shuffledTracks: [] | TracksType[],
    currentTrack: null | TracksType,
    isPlaying: boolean,
    
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
        nextTrack: (state) => {
            state.isPlaying = true;
            const currentTracks = state.isShuffled ? state.shuffledTracks : state.tracks;
            const currentTrackIndex = currentTracks.findIndex((item) => item.id === state.currentTrack?.id);
            const newTrack = currentTracks[currentTrackIndex + 1];
            if (!newTrack) {
                state.currentTrack = state.tracks[0]
            } else {
                state.currentTrack = newTrack;
            }
        },
        prevTrack: (state) => {
            state.isPlaying = true;
            const currentTracks = state.isShuffled ? state.shuffledTracks : state.tracks;
            const currentTrackIndex = currentTracks.findIndex((item) => item.id === state.currentTrack?.id);
            const newTrack = currentTracks[currentTrackIndex - 1];
            if (!newTrack) {
                state.currentTrack = state.tracks[[...state.tracks].length - 1]
            } else {
                state.currentTrack = newTrack;
            }
        }
    },
});

export const {
    setTracks,
    togglePlaying,
    toggleShuffled,
    setCurrentTrack,
    nextTrack,
    prevTrack
} = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;