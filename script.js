const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
const newFruit = fruit.map(function(idx){
	return idx.toLowerCase();
})
// need to change array to lowercase to match search function


function search(str) {
	const results = [];
	const look = str.toLowerCase();
// change entered string to lowercase to match newFruit array
	results.push(newFruit.filter(function(str){
		return str.includes(look);
	}))
	return results;
}
// returns an array of all fruits matching the input string

function showList(arr){
	for (let val of arr );{
		const liElement = document.createElement('li');
		liElement.innerText = val;
		suggestions.appendChild(liElement);

		// the val of the for of loop is not defined (can't be accessed) when I try to use it to set the li value at JS25
		
	}
}

input.addEventListener('input', function(){
	const userInput = search(input.value);
	console.log(userInput);
// is logging the reduced array based on user input when logged to console

})


function searchHandler(e) {
	search('e.target');
	// console.log(results);
	// TODO ** Search Function in Here **
}

function showSuggestions(results, inputVal) {

	// TODO
}

function useSuggestion(e) {
	// TODO
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
