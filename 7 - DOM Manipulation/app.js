// Step 1: Targeting elements (Selectors)

// 1. Old way 
// getElementByID, getElementsByClassName, getElementsByTagName

let elementWithID = document.getElementById("first-div");
console.log(elementWithID);

let elementsWithClass = document.getElementsByClassName("sample-div");
console.log(elementsWithClass);
console.log(elementsWithClass[0]);

let listItems = document.getElementsByTagName("li");
console.log("List Items: ", listItems);

// 2. New way 
// querySelector, querySelectorAll

// querySelector - first occurence of ANY target string
let orderedListItem = document.querySelector(".ordered-list");
console.log(orderedListItem);

let listItem = document.querySelector("li");
console.log(listItem);

// querySelectorAll - ALL occurences of the target string
orderedListItem = document.querySelectorAll("ordered-list");
console.log(orderedListItem);

listItem = document.querySelectorAll("li");
console.log(listItem);


// Step 2: Modification/Manipulation
// Changing CSS styles (.style.<property to change>)
let headings = document.querySelectorAll("h3");
console.log(headings[0]);
headings[0].style.color = "aqua";
headings[0].style.backgroundColor = "black";

// Looping through html element collections
headings.forEach(function(heading){
    heading.style.color = "brown";
    heading.style.backgroundColor = "bisque";
})

// update elements attributes
let dayNightIcon = document.querySelector("#day-night-icon");
console.log(dayNightIcon);

// setAttribute(name, value)
dayNightIcon.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/3688/3688129.png");

// getAttribute (name)
console.log(dayNightIcon.getAttribute("src"));

// Appending and Removing Elements

// Appending
/*
How to append
1. Create an element
2. Change its properties
3. Append to an existing element
*/

let parentElement = document.querySelector("#parent-element");
let newElement = document.createElement("div");
// Change it's properties
newElement.textContent = "Child Element";
parentElement.appendChild(newElement);

// Removing elements
let elementToRemove = document.querySelector("#element-to-be-removed");
elementToRemove.remove();

// Step 3: Event Listeners
let darkModeBtn = document.querySelector("#dark-mode-btn");

// Add Event Listener (event, function)
darkModeBtn.addEventListener("click", function(){
    let pageContainer = document.querySelector("#page-container");
    let pageModeText = document.querySelector("#page-mode-text");

    pageContainer.style.backgroundColor = "black";
    pageContainer.style.color = "bisque";

    pageModeText.textContent = "Dark Mode";
});