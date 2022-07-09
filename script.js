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


const personalMovie = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


 for (let i = 0; i < 2; i++) {
    const a = prompt(`Один из последних просмотреных фильмов`, ``);
    const b = prompt(`На сколько оцените его?`, ``);

    if (a != '' && b != '' && a.length < 50 && a != null && b != null){
      personalMovie.movies[a] = b;
      console.log('ok')
    } else {
      i--
      console.log('error')
    }

    
  }
 
 if (personalMovie.count < 10) {
  alert(`Просмотрено довольно мало фильмов`)
 } else if (personalMovie.count >= 10 && personalMovie.count <= 30) {
  alert(`Вы классический зритель`)
 } else  if (personalMovie.count > 30){
  alert(`Вы киноман`)
 } else {
  alert(`Произошла ошибка`)
 }
 

console.log(personalMovie);



// let result = "";
// let a = '*';
// for (let i = 1; i < 7; i++) {
//     for (let j = 0; j < i; j++) {
//       result += a;
//     }
//     result += '\n';
// }

// console.log(result);

// for (let i = 5; i <= 10; i++){
//   console.log(i)
// }

// first: for (let i = 20; i >= 10; i--) {        
//         if (i === 13) break first;
//         console.log(i);
// }

// for (let i = 2; i <= 10; i += 2) {
//   console.log(i)
// }

// let num = 2;

//  while (num <= 15) {
//   num++
//   if (num%2 === 0){
//     continue;
//   } else {
//     console.log(num)
//   }
  
//  }
// let num = 0
// let arr = [];
// for (let i = 5; i <= 10; i++) {
//   arr[num] = i;
//   num++
// }
// console.log(arr);

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < 7; i++) {
//   result[i] = arr[i]
// }
// console.log(result)

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// let arr = [];
// const a = ' - done';
// for (let j = 0; j < 5; j++) {
//   if (typeof data[j] === 'number') {
//     arr[j] = data[j] * 2;
//   } else  if (typeof string) {
//     arr[j] = data[j] + a;
//   }
// }
//    console.log(arr);

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];
// let num = 4;
// for (let i = 0; i < 5; i++) {
//   result[i] = data[num]
//   num--

// };
// console.log(result)

// const lines = 5;
// let result = '';

//  for (let i = 0; i <= lines; i++) {
//   for (let j = 0; j < lines - i; j++) {
//       result += " ";
//   }
//   for (let j = 0; j < 2 * i + 1; j++){
//     result += '*'
//   };

//   result += '\n'
  
//  }
//  console.log(result)
