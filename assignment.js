/* 
Name: Guohui Wan
Date: Feb 20 , 2023
Section: CST 8285 section 304
Lab: lab 304
File: Assignment 1
Lab objective: Make 3 html pages of introduction, resume and courses.
*/

//create a function to search for specific class names
// first, we need to decalre variables and then we create a for loop to check from the first tag of 'h2'. 
//if we can find the course, then the index will be from [0]-[length], so will be > -1. 
function myFunction() {
  const input = document.getElementById('myInput');
  const filter = input.value.toLowerCase();
  const courses = document.getElementById("courses");
  const everyCourse = courses.getElementsByClassName('filterDiv');

  for (let i = 0; i < everyCourse.length; i++) {
    const a = everyCourse[i].querySelector("h2");
    const txtValue = a.textContent.toLowerCase();
    everyCourse[i].style.display = txtValue.indexOf(filter) > -1 ? "" : "none";
  }
}

//Then we create a function to select the level of the courses.
// first, we need to define if it is the all normal or reverse course. 
// when we want to show level1, level2, or all, we use item.classList.contains(a) || a === "all" == true
// when we want to show reverse order, we use reverse==true
// in the reverse function, we set the document to an array, then we can print in a reverse order.
function filterSelection(a, reverse) {
  const x = document.querySelectorAll(".filterDiv");
  x.forEach(item => {
    item.classList.add("show");
    if (item.classList.contains(a)||a == "all") {
      item.classList.remove("show");
    }}
  );
  if (reverse) {
    const courseList = document.querySelectorAll('.filterDiv');
    const reversedList = Array.from(courseList).reverse();
    const b = document.getElementById("courses");
    b.innerHTML = '';
    reversedList.forEach(course => b.appendChild(course));
  }
}

//this is the eventlistener for our buttons.
//when we want to call the function, we need to set the parameters.

const btnContainer = document.getElementById("myBtnContainer");
const btns = btnContainer.querySelectorAll("btn");
btns.forEach(btn => {
  btn.addEventListener("click", function() {
    const current = document.querySelector(".active");
    current.classList.remove("active");
    this.classList.add("active");
    filterSelection(this.dataset.filter, this.dataset.reverse === "true");
  });
});

        
