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
//   for (let j = 0; j < 2 * i + 1; j+2){
//     result += '*'
//   };

//   result += '\n'
  
//  }
//  console.log(result)





// function sayHello(name) {
//   console.log(`Привет, ${name}!`);
// }
// sayHello(`Nazar`);


// function returnNeighboringNumbers(num) {
//   return [num - 1, num, num + 1]
  
// }
//  console.log(returnNeighboringNumbers(3))


//  // Вот тут полная хуйня и я скопировал с ответов этот код //
//  function getMathResult(num, times) {
//   if (typeof(times) !== 'number' || times <= 0) {
//       return num;
//   }

//   let str = '';

//   for (let i = 1; i <= times; i++) {
//       if (i === times) {
//           str += `${num * i}`;
//           // Тут без черточек в конце
//       } else {
//           str += `${num * i}---`;
//           // Это тоже самое, что и
//           // str = str + num * i + "---"
//       }
//   }

//   return str;
// }

// getMathResult(10, 5);

// function calculateVolumeAndArea(num) { 
//  if(typeof num === 'string' || num < 0 || num % 1 > 0 ){
//     console.log(`error`)
//  } else {
//     const volume = num*num*num;
//     const area = (num*num)*6;
//     console.log(volume, area);
//  }
//  }
// calculateVolumeAndArea(`9`);

// function getCoupeNumber(a) {
//    // 1. =0 || >36
//    // 2. typeoff !== Number || a < 0 || a % 1 > 0
//    //пишешь условия для 0 и > 35
//    if (a == 0 || a > 36) {
//       console.log(`Таких мест в вагоне не существует`);
//    } else if (typeof a === 'string' || a < 0 || a % 1 > 0) {
//       console.log(`Ошибка. Проверьте правильность введенного номера места`);
//    } else {
//    // Делишь вводное число на 4, целая часть это ответ
//       console.log(Math.ceil(a/4));
//    }
// }

// getCoupeNumber(77);
   
// function findMaxNumber(...rest) {
//    if (rest.length < 4) return 0;

//    for (let i = 0; i < rest.length; i++) {
//       if (typeof rest[i] !== 'number') return 0;
//    }

//    const a = Math.max(...rest);

//    if (isNaN(a)) {
//       return 0;
//    } else {
//       return a;
//    }


// }  
// console.log('findMaxNumber', findMaxNumber(6, 2, 4, 'ghj', 43, 6,22));



   // if(typeof num1 !== `number` || typeof num2 !== `number` || typeof num3 !== `number` ||
   //  typeof num4 !== `number` || num1 === `` || num2 === `` || num3 === `` || num4 === `` ) {

   //    console.log(`0`);

   // } else {
   //    console.log (Math.max(num1, num2, num3, num4));
   // }






// function getTimeFromMinutes (minutes) {
//    if(minutes < 0 || minutes > 600 || minutes % 1 > 0) {
//       console.log(`Ошибка, проверьте данные`);
//    } else {
//       let b
//       const hours = Math.floor(minutes/60);
//       const minut = minutes % 60
//       if (hours === 1){
//          b = `час`;
//       }
//       if (hours > 1 && hours < 5){
//          b = `часа`;
//       }
//       if (hours > 4 && hours < 11 || hours === 0){
//          b = `часов`;
//       }
//       console.log( `Это ${hours} ${b} и ${minut} минут` )
//    }
// }

// getTimeFromMinutes(58)



let key;
const personalPlanPeter = {
   name: "Peter",
   age: "29",
   skills: {
       languages: ['ru', 'eng'],
       programmingLangs: {
         js: '20%',
         php: '10%'
       },
       exp: '1 month'
   },
   showAgeAndLangs(personalPlanPeter) {
      let k;
      // for(key of personalPlanPeter.skills.languages){
      //    k += `${key} `
      // }
      let l = `Мне ${personalPlanPeter.age} и я владею языками: ${(personalPlanPeter.skills.languages).join(` `).toString().toUpperCase()}`
      return l;
   },
};

function showExperience(plan) {
   return plan.skills.exp;
}

function showProgrammingLangs(plan) { 
   let k =``;
   if (Object.keys(plan.skills.programmingLangs).length === 0) {
      return `\n`;
   } else {
      for(key in plan.skills.programmingLangs){
         k += `Язык ${key} изучен на ${plan.skills.programmingLangs[key]}`;
         k += `\n`;
      }    
      return k;  
   }
}

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));
console.log(showExperience(personalPlanPeter));
console.log(showProgrammingLangs(personalPlanPeter));


const family = ['Peter', 'Ann', 'Alex', 'Linda'];
function showFamily(arr) {
    if (arr.length === 0) {
      return `Семья пуста`;
    } else {
      return `Семья состоит из: ${(arr).join(' ')}`;
    }
}
console.log(showFamily(family))

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
function standardizeStrings(arr) {
   // let k = ``;
   //  for (let i = 0; i < arr.length; i++) {
   //    // k += arr[i];
   //    // k += `\n`;
   //  }
   //  return k.toLowerCase();
   favoriteCities.map(item => console.log(item.toLowerCase()))
}
console.log(standardizeStrings(favoriteCities));

const students = [ 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
let array = [];
function sortStudentsByGroups(arr) {
   const myArray = [...arr].sort();
   let list = [];
   const iteration = Math.ceil(myArray.length / 3);
   console.log('iteration', iteration)
   let j = 0
   for (let i = 0; i < iteration; i++) {
      let piece = myArray.slice(j, j+3)
      j+=3

      if (i+1 === iteration && piece.length < 3) {
         list[i] = `Оставшиеся студенты: ${piece.join(', ')}`;
         continue;
      } 

      if (i+1 === iteration && piece.length === 3) {
         list[i] = piece;
         list[i+1] = 'Оставшиеся студенты: -';
      }

      list[i] = piece;

    
   }

   console.log(list)
   
}
sortStudentsByGroups(students)  






// let numberOfFilms;

// function start() {
//   numberOfFilms = prompt(`Сколько фильмов вы уже посмотрели?`, ``);

//   while (numberOfFilms == ''  || numberOfFilms == null ||  isNaN(numberOfFilms)) {
//     numberOfFilms = prompt(`Сколько фильмов вы уже посмотрели?`, ``);
//   }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: true,
//     rememberMyFilms: function() {
//       for(let i = 0; i < 2; i++) {
//          const a = prompt(`Один из последних просмотренных фильмов?`, ``),
//                b = prompt(`На сколько оцените его?`, ``);
//          if (a != null && b != null && a != `` && b != `` && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//          } else { 
//             i--;
//          }
//       }
//     },
//     toggleVisibleMyDB: function () {
//        if (personalMovieDB.privat === false) {
//          personalMovieDB.privat = true;
//        } else {
//          personalMovieDB.privat = false;
//        }
//        return personalMovieDB;
//     },
// };



// personalMovieDB.rememberMyFilms(personalMovieDB);
// personalMovieDB.toggleVisibleMyDB (personalMovieDB);
 
// function showMyDB () {
//   if (personalMovieDB.privat === false) {
//     return personalMovieDB;
//   }
// }

// console.log(showMyDB());

// function detectPersonalLevel () {
//   if (personalMovieDB.count < 10) {
//   alert(`Просмотрено довольно мало фильмов`);
//  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//   alert(`Вы классический зритель`);
//  } else  if (personalMovieDB.count > 30){
//   alert(`Вы киноман`);
//  } else {
//   alert(`Произошла ошибка`);
//  }
// }

// detectPersonalLevel ();



// function writeYourGenres () {
//    for (let i = 0; i < 3; i++) {
//       const l = prompt(`Ваш любимый жанр под номером ${i+1}`);
//       if (l != null && l != ``) { 
//          personalMovieDB.genres[i] = l;  
//       } else {
//          i--;
//       }
//    }
// }
// writeYourGenres();

// (personalMovieDB.genres).forEach(function(item, i,){   
//     console.log(`Люмый жанр №${i+1} - это ${item}`);  
// });


      

