// // var dropZone = document.getElementById('drop-zone');
// // var fileInput = document.getElementById('file-input');

// // // Add event listeners for drag events
// // dropZone.addEventListener('dragover', handleDragOver, false);
// // dropZone.addEventListener('dragleave', handleDragLeave, false);
// // dropZone.addEventListener('drop', handleFileSelect, false);

// // // Highlight drop zone when file is dragged over
// // function handleDragOver(event) {
// //   event.stopPropagation();
// //   event.preventDefault();
// // //   dropZone.classList.add('highlight');
// // }

// // // Remove highlight when file is dragged out of the drop zone
// // function handleDragLeave(event) {
// //   event.stopPropagation();
// //   event.preventDefault();
// // //   dropZone.classList.remove('highlight');
// // }

// // // Handle file selection after drop
// // function handleFileSelect(event) {
// //   event.stopPropagation();
// //   event.preventDefault();
// // //   dropZone.classList.remove('highlight');

// //   var files = event.dataTransfer.files; // Get the dropped files

// //   // Process each file
// //   for (var i = 0; i < files.length; i++) {
// //     uploadFile(files[i]); // Upload the file
// //   }
// // }

// // // Handle file selection from file input
// // fileInput.addEventListener('change', function(event) {
// //   var files = event.target.files; // Get the selected files

// //   // Process each file
// //   for (var i = 0; i < files.length; i++) {
// //     uploadFile(files[i]); // Upload the file
// //   }
// // });

// // // Upload file to the server (you can customize this function)
// // function uploadFile(file) {
// //   // Perform your file upload logic here
// //   console.log(file);
// // }

// //1
// const arr = [
//   [1, 2],
//   [3, 4],
// ];
// let arr1 = arr.flat();
// let sum = 0;
// for (let i = 0; i < arr1.length; i++) {
//   sum = arr1[i] + sum;
// }
// console.log(sum);

// //2
// let arr2 = [100, 50, 41, 200, 10, 3];
// arr2.sort((a, b) => a - b);
// console.log(arr2);

// //3
// let people = [
//   { name: "eldar", age: 19 },
//   { name: "mammad", age: 15 },
//   { name: "seymur", age: 12 },
//   { name: "lala", age: 20 },
// ];

// let results = people.filter((obj) => {
//   if (obj.age > 18) {
//     return obj;
//   }
// });
// console.log(results);

// let newNames = [];

// console.log(Object.values(results));

// //4
// function ReverseString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(ReverseString("Hello"));

// //5

// let newstr = "1.1.1.1";
// var somestr = newstr.split(".");
// var laststr = somestr.join("[.]");
// console.log(laststr);

// //6
// let text = "alice and bob love something";
// let newtext = text.split(" ");
// console.log(newtext.length);

// //7
// let k = 4;
// let text2 = "alice and bob love something";
// let newtext2 = text2.split(" ");
// let newstring = "";
// for (let i = 0; i < k; i++) {
//   newstring += " " + newtext2[i];
// }
// console.log(newstring);

// //8
// let strg = "USA";
// if (strg === strg.toLocaleUpperCase()) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// //9
// let strnum = "134";
// let strnum2 = "11";
// console.log(Number(strnum) + Number(strnum2));

// //10

// let text5 = "alice and bob love something";
// let newtext5 = text5.split(" ");
// console.log(newtext5[newtext5.length - 1].length);

// //11
// let sarah = [1, 2, 1];
// let sarahaygunsuz = [...sarah, ...sarah];
// console.log(sarahaygunsuz);

// //12
// // let a = 50;
// // let b = 100;

// // for(let i = a; i<b; i++){
// //   if(i%2==0){
// //     console.log(i);
// //   }
// // }

// //13

// let abc = 1234;
// let bca = abc / 1000;

let bmw = {
  model: "x5",
  color: "white",
  year: 2000,
};

let mersedes = {
  model: "S-class",
  color: "black",
  year: 2018,
};

let toyota = {
  model: "Camry",
  color: "red",
  year: 2015,
};

let select = document.getElementById("select");
let box = document.getElementById("container");

function printCar(obj) {
  let data = "";
  for (key in obj) {
    data += `<li>${key}: ${obj[key]}</li>`;
  }
  box.innerHTML = data;
}

function myFunction() {
  var selVal = select.value;
  if (selVal == 0) {
    printCar(bmw);
  } else if (selVal == 1) {
    printCar(mersedes);
  } else if (selVal == 2) {
    printCar(toyota);
  }
}
