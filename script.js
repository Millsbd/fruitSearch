const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

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


function useSuggestions(array) {
  suggestions.innerHTML = "";
  let innerElement = "";
  for (let itm of array) {
    innerElement += `<li>${itm}</li>`
  }
  suggestions.innerHTML = innerElement;
}
// accepts an array and an element, checks the array and resets the html of the element. Loops through the array and for each item adds an li with the item name. Sets the innerHTML of the element equal to this new li. 

function search(array, str) {
  if(str === ''){
    return [];
  }
  return array.filter((itm) =>
    itm.toLowerCase().includes(str.toLowerCase())
  );
}
// accepts an array and a string (the search input), filters the array and only returns the values which include the search string. Takes case out of the equation. 

input.addEventListener('input', () => useSuggestions(search(fruit, input.value)));

// whenver something is typed in the searchbox triggers a function which assigns a varialble to the returned array from the filter array function. passes that array into the createItems function, which should make the list of possible searches below the box. 

suggestions.addEventListener('click', function (evt) {
  let seletctedVal = evt.target.textContent;
  input.value = seletctedVal;
  suggestions.innerHTML = '';
})
// ***Trying to get the input value to be the clicked value, shows the li in the console correclty with the console.log but changed the input to 0 not the clicked fruit. Needed to do textContent instead of value, the value was giving the full li where the textContent is giving just the text. 


