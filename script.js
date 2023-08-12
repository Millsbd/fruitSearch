const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");
const sugList = document.querySelector(".list");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];
// // Is there a setting which will let me not have this vertical list happen when I use the prettier formatter?


function createItems(array, element) {
  if (array) {
    element.innerHTML = "";
    let innerElement = "";
    for(let itm of array){
      innerElement += `<li>${itm}</li>`
    }
    element.innerHTML = innerElement;
    // console.log(innerElement);
  }
}
// accepts an array and an element, checks the array and resets the html of the element. Loops through the array and for each item adds an li with the item name. Sets the innerHTML of the element equal to this new li. 

function filterArray(array, search) {
  return array.filter((itm) =>
    itm.toLowerCase().includes(search.toLowerCase())
  );
}
// accepts an array and a string (the search input), filters the array and only returns the values which include the search string. Takes case out of the equation. 

input.addEventListener('input', () => {
	const filterData = filterArray(fruit, input.value);
	// console.log(filterData)
	createItems(filterData, sugList);
});

// whenver something is typed in the searchbox triggers a function which assigns a varialble to the returned array from the filter array function. passes that array into the createItems function, which should make the list of possible searches below the box. 

suggestions.addEventListener('mouseover', function(){
  suggestions.setAttribute('class', 'ul li:hover');
})
// **REFACTOR AS ARROW FUNCTION**
suggestions.addEventListener('mouseover', () => suggestions.setAttribute('class', 'ul: li:hover'));

suggestions.addEventListener('click', function useSuggestion(evt){
  let seletctedVal = evt.target.textContent;
  input.value = seletctedVal;
  
})
// ***Trying to get the input value to be the clicked value, shows the li in the console correclty with the console.log but changed the input to 0 not the clicked fruit. Needed to do textContent instead of value, the value was giving the full li where the textContent is giving just the text. 
  

// **ALTENRNATE METHOD***
// ***ARROW REFACTORING PRACTICE***

const newFruit = fruit.map(function (idx) {
  return idx.toLowerCase();
});

const newArFruit = fruit.map(idx => idx.toLowerCase());
// need to change array to lowercase to match search function

function search(str) {
  let results = [];
  const look = str.toLowerCase();
  // change entered string to lowercase to match newFruit array
  results = [
    ...newFruit.filter(function (str) {
      return str.includes(look);
    }),
  ];
  return results;
}

let arSearch = (str) => {
  let arr = [];
  const lc = str.toLowerCase();
  arr = [
    ...newArFruit.filter(str => str.includes(lc))
  ]
  return arr;
}

// returns an array of all fruits matching the input string by spreading the lowercased fruit array, adding it into a new empty array, and filtering it to see what is included in the lower cased string. 

let makeElys = (arr,element) => {
  if(arr){
    element.innerText = "";
    for(let val of arr) {
      const liElement = document.createElement('li');
      liElement.innerText = val;
      element.appendChild(liElement);
    }
  }

}

input.addEventListener("input", function () {
  const userInput = search(input.value);
  console.log(userInput);
  showList(userInput, sugList);

  // is logging the reduced array based on user input when logged to console
});

input.addEventListener('input', () => {
  const userData = arSearch(input.value);
  makeElys(userData, sugList);
})




