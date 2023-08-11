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



function createItems(array, element) {
  if (array) {
    element.innerHtml = "";
    let innerElement = "";
    for(let itm of array){
      innerElement += `<li>${itm}</li>`
    }
    element.innerHtml = innerElement;
    console.log(innerElement);
  }
}
// accepts an array and an element, checks the array and resets the html of the element. Loops through the array and for each item adds an li with the item name. Sets the innerHTML of the element equal to this new li. 

function filterArray(array, search) {
  return array.filter((itm) =>
    itm.toLowerCase().includes(search.toLowerCase())
  );
}
// accepts an array and a string (the search input), filters the array and only returns the values which include the search string. Takes case out of the equation. 

input.addEventListener('input', function(){
	const filterData = filterArray(fruit, input.value);
	console.log(filterData)
	createItems(filterData, sugList);
});

// whenver something is typed in the searchbox triggers a function which assigns a varialble to the returned array from the filter array function. passes that array into the createItems function, which should make the list of possible searches below the box. 

// ***This is not creating items, if I console.log filterData I see the array I want to make the list out of but nothing actually gets created***

// **ALTENRNATE METHOD***

// const newFruit = fruit.map(function (idx) {
//   return idx.toLowerCase();
// });
// // need to change array to lowercase to match search function

// function search(str) {
//   const results = [];
//   const look = str.toLowerCase();
//   // change entered string to lowercase to match newFruit array
//   results = [
//     ...newFruit.filter(function (str) {
//       return str.includes(look);
//     }),
//   ];
//   return results;
// }

// // returns an array of all fruits matching the input string

// function showList(arr, element) {
//   if (arr) {
//     element.innerText = "";
//     for (let val of arr) {
//       const liElement = document.createElement("li");
//       liElement.innerText = val;
//       element.appendChild(liElement);
//       return element;

//       // the val of the for of loop is not defined (can't be accessed) when I try to use it to set the li value at JS25
//     }
//   }
// }

// input.addEventListener("input", function () {
//   const userInput = search(input.value);
//   console.log(userInput);
//   showList(userInput, sugList);

//   // is logging the reduced array based on user input when logged to console
// });

// function searchHandler(e) {
//   search("e.target");
//   // console.log(results);
//   // TODO ** Search Function in Here **
// }

// function showSuggestions(results, inputVal) {
//   // TODO
// }

// function useSuggestion(e) {
//   // TODO
// }

// input.addEventListener("keyup", searchHandler);
// suggestions.addEventListener("click", useSuggestion);


