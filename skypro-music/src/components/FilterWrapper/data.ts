// это тестовые данные- заглушка для фильтра пока нет API


export const authors = [

    { id: 1, name: "John Doe" },

    { id: 2, name: "Jane Doe" },

    { id: 3, name: "John Smith" },

    { id: 4, name: "Jane Smith" },

    { id: 5, name: "John Johnson" },

    { id: 6, name: "John Doe" },

    { id: 7, name: "Jane Doe" },

    { id: 8, name: "John Smith" },

    { id: 9, name: "Jane Smith" },

    { id: 10, name: "John Johnson" },

    { id: 11, name: "John Doe" },

    { id: 12, name: "Jane Doe" },

    { id: 13, name: "John Smith" },

    { id: 14, name: "Jane Smith" },

    { id: 15, name: "John Johnson" },

    { id: 16, name: "John Doe" },

    { id: 17, name: "Jane Doe" },

    { id: 18, name: "John Smith" },

    { id: 19, name: "Jane Smith" },

    { id: 10, name: "John Johnson" },

];



export const years = [

    { id: 1, name: "2010" },

    { id: 2, name: "2011" },

    { id: 3, name: "2012" },

    { id: 4, name: "2013" },

    { id: 5, name: "2014" },

    { id: 6, name: "2015" },

    { id: 7, name: "2016" },

    { id: 8, name: "2017" },

];

export const genres = [

    { id: 1, name: "Action" },

    { id: 2, name: "Adventure" },

    { id: 3, name: "Comedy" },

    { id: 4, name: "Drama" },

    { id: 5, name: "Fantasy" },

];

const filters = [

    { title: "исполнителю", list: authors, key: "authors" },

    { title: "году выпуска", list: years, key: "years" }, // Исправлен опечатка в "years"

    { title: "жанру", list: genres, key: "genres" },

  ];