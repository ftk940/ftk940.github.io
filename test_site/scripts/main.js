var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';


let myVariable;
myVariable = 'Bob';
myVariable;
let arr = [1, 'Bob', 'Steve', 10];
console.log(myVariable);
console.log(6 + 9);
console.log('Hello ' + 'world!');
console.log('apple'==='banana');
console.log('apple'!=='banana');


let id = 'a';
if(id === 'a')
  alert('The id is \"a\"\n');
else
  alert('The id is not \"a\"\n');


function gcd(a, b)
{
	if(a%b === 0)
		return b;
	else 
		return gcd(b, a%b);
}
console.log(gcd(82, 123));


document.querySelector('html').onclick = function() {alert('Ouch! Stop poking me!');}


let myImage = document.querySelector('img');
myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/blackcat.jfif')
		myImage.setAttribute('src', 'images/blackdog.jfif');
	else
		myImage.setAttribute('src', 'images/blackcat.jfif');
}


let myButton = document.querySelector('button');
myHeading = document.querySelector('h1');

function setUserName() 
{
	let myName = prompt('Please enter your name.');
	console.log(myName);
	console.log('the negation of myName is: '+!myName);
	//if(!myName || myName === null)  //what is the return value?
	//if(!myName) //one statement is enough
	//	setUserName();
	//else{
		localStorage.setItem('name', myName);
		myHeading.innerHTML = 'Mozilla is cool, ' + myName;		
	//}
}

if(!localStorage.getItem('name')) //what is the return value?
    setUserName();
else {
	let storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Mozilla is cool, '+storedName;
}

myButton.onclick = function() {setUserName();}
//negation of  '' or null is true
//negation of normal input(string) is false
//negation of normal number(ex. 7) is false 
//negation of 0 is true

console.log('apple')
console.log(!'apple');
console.log(7);
console.log(!7);
console.log('');
console.log(!'');
console.log(null);
console.log(!null);
console.log(0);
console.log(!0);