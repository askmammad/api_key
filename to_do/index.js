// let arr = [1, 2, 3];
// let newArr = arr;

// let sum = 0;

// for(let i = 1; i<9; i++){
//     sum=0;
//     for(let i=arr.length-3; i<arr.length; i++){
//         sum+=arr[i];
//     }
//     arr.push(sum);
// }
// console.log(arr);

// for (let i = 1; i<9; i++){
//     let b = newArr.reduce((item,sum)=>{
//         return item+sum;
//     },0)
//     arr.push(b);
//     newArr = arr.slice(-3);
// }

// console.log(arr);

// let user = {
//     name: "Mammad",
//     surname: "Askarov",
//     age: 15
// }

// let person = {};

// Object.assign(person,user);

// person.age = 18;

// console.log(person);
// console.log(user);

// let input = document.getElementById("input");
// let button = document.getElementById("button");
// let show = document.getElementById("show");
// let hide = document.getElementById("hide");
// function myFunc() {
//   if (input.type == "password" && input.value > 0) {
//     input.type = "text";
//     show.style.display = "none";
//     hide.style.display = "inline-block";
//   } else if (input.type == "text") {
//     input.type = "password";
//     show.style.display = "inline-block";
//     hide.style.display = "none";
//   }
// }


// let hello = document.getElementsByClassName("hello")[0];
// hello.style.color = "red";
// console.log(hello);

// let hi = document.querySelectorAll(".hello")[1];
// hi.style.color = "red";
// console.log(hi);

// console.log(Array.isArray(hello));
// console.log(Array.isArray(hi));

// // hello.splice(1,1);

// hi.splice(1,1)

// console.log(hello);
// console.log(hi);


// let form = document.querySelector("#form");
// let some = document.querySelector("#some");

// form.addEventListener("mouseover", myFunction);

// function myFunction(){
//   console.log("Hello");
// }

// some.addEventListener("mouseenter", myFunc);

// function myFunc(){
//   console.log("Hi");
// }

// const boxWrapper = document.getElementById("box-wrapper");

// const box = document.createElement("div");
// box.innerHTML = 'div <br> 5';
// box.style.backgroundColor = "orange";
// box.classList.add("box");
 
// boxWrapper.append(box); 
// // or
// boxWrapper.appendChild(box);
// //works

// boxWrapper.append("Not a box"); // Success
// boxWrapper.appendChild("Not a box"); // Error - It's not of type 'Node'

const API_KEY="f960bcba87999b57e43f2a3354fc3584";
async function getJSONData(){
    let input=document.getElementById("input").value;
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}`;
    let response=await fetch(`${url}`);
    let jsonData=await response.json();
    let data="";
    for (const key in jsonData) {
        data=`<div class="card" style="width: 18rem;">
        <div class="card-header">
          ${input}
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${jsonData.main.temp} F</li>
          <li class="list-group-item">${jsonData.weather[0].description}</li>
        </ul>
      </div>
        `
    }
    document.querySelector(".wrapper").innerHTML=data;
}
getJSONData()





