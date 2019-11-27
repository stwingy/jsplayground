const selec = document.querySelector('main.main section h1');
//console.dir(selec);
selec.innerHTML = '<b>IMPORTANT</b> properties ';
selec.innerHTML += '<b> AND methods</b>';
const ul = document.querySelector('ul');
//console.log(ul.innerText);
const form = document.querySelector('form');
console.log(form.innerHTML);
const lis = document.querySelector('section ul');
console.log(lis.innerHTML);
const range = document.querySelector("input[type='range']");
console.log(range.value);
console.log(range.getAttribute('max'));
range.setAttribute('max', '2000');
console.log(range.getAttribute('max'));
let li = document.querySelector('li');
while (li !== null) {
	console.log(li.parentElement);
	li = li.parentElement;
}

const allLis = document.querySelectorAll('li');
for (let li of allLis) {
	console.log(li);
}
allLis.forEach((li, i) => {
	console.log(i);
});

const parent = document.querySelector('main section form');
const child = parent.querySelector("input[type='password']");
const newEl = document.createElement('input');
newEl.setAttribute('type', 'password');
newEl.setAttribute('placeholder', 'PASSSSSSSSS');
parent.insertBefore(newEl, child);
//newEl.remove();
//parent.removeChild(newEl);

const targ = document.querySelector('main section form');
const newh1 = document.createElement('h2');
const newP = document.createElement('p');
newP.innerHTML = 'here is your <b>form </b>axiosstuff';
newh1.innerText = 'Form stuff';
targ.prepend(newh1, newP);

// let headers = {
// 	'X-Auth-Token': 'ad5d4717a4ec4b40a38d86d4027455ed',
// 	Accepts: 'application/json',
// 	withCredentials: true
// };
// const f = async () => {
// 	try {
// 		const stuff = await axios.get('https://api.football-data.org/v2/competitions/CL/matches', headers);
// 		stuff.append('Access-Control-Allow-Origin', 'http://127.0.0.1:5500/index.html');
// 		console.log(stuff.json());
// 	} catch (error) {}
// };
// f();
const clicker = document.querySelector('#clicker');
clicker.innerText = 'Try Click Me';
function move() {
	let x = Math.floor(Math.random() * window.innerWidth);
	let y = Math.floor(Math.random() * window.innerHeight);
	this.style.left = `${x}px`;
	this.style.top = `${y}px`;
}
clicker.addEventListener('mouseover', move);
clicker.addEventListener('click', function() {
	this.innerText = 'YOUWIN';
	this.removeEventListener('mouseover', move);
});
