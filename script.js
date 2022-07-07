// "use strict";

// const storeName = `ATB`;
// let storeDescription = {
//     budget: 10000,
//     employees: [`Nazar`, `Lena`, `Igor`],
//     products: {
//         water: 16,
//         meat: 160,
//     },
//     open: true,
// };

// console.log(storeDescription[open]);


// const hello = 3
// alert(hello);

// prompt("hello", "");

const numberOfFilms = prompt(`Сколько фильмов вы уже посмотрели?`, ``);

const a = prompt(`Один из последних просмотреных фильмов`, ``);
const b = prompt(`На сколько оцените его?`, ``);
const c = prompt(`Один из последних просмотреных фильмов`, ``);
const d = prompt(`На сколько оцените его?`, ``);

const personalMovie = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

personalMovie.movies[a] = b;
personalMovie.movies[c] = d;

console.log(personalMovie);