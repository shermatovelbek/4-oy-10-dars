//1-masala

// let arr1 = [1 , 2 , 3 , 4 , 5];
// let arr2 = [6 , 7 , 8 , 9 , 10];
// let arr3 = [11 , 12 , 13 , 14 , 15];

// let all = arr3.concat(arr2 , arr1)
// console.log(all);

//2-masala

// function numbers(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 0 && arr[i] % 5 === 0) {
//         return i * i;
//       }
//     }
//     return 1; 
//   }
  
//   let arr = [1, 2, 3, 4, 5 , 6 , 7 , 8 , 9 , 10];
//   let result = numbers(arr);
//   console.log(result); 
  
//3-misol

// function numbers(arr) {
//     let sum = false;
//     arr.forEach((array) => {
//       if (array < 0 && !sum) {
//         console.log('Birinchi manfiy son: ', array);
//         sum = true;
//       }
//     });
//     if (!sum) {
//       console.log('Manfiy son topilmadi.');
//     }
//   }
  
//   let arr = [1, 2, -2, -1, 4];
//   numbers(arr);
  
//4-misol

function numbers(arr) {
    let counter = 0;
    arr.forEach((number) => {
      if (number % 2 !== 0 && number % 3 === 0) {
        counter++;
      }
    });
    console.log('Massivdagi toq hamda 3 ga karralilar soni: ', counter);
  }
  
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11 , 12];
  numbers(arr);
  