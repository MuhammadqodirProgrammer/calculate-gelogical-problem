const countSpan = document.querySelector('.count_x');
const addBtn = document.querySelector('.add_btn');
const resentBtn = document.querySelector('.resent_btn');
const calculateBtn = document.querySelector('.calculate_btn');
const elInputX = document.querySelector('.input_x');
const sumView = document.querySelector('.sum_view');
const formulaViewTop = document.querySelector('.formula_view_top');
const formulaViewBotton = document.querySelector('.formula_view_bottom');
let arrX = [];
countSpan.textContent = arrX + 1;

addBtn.addEventListener('click', (evt) => {
	evt.preventDefault();

	arrX.push(+elInputX.value);
	elInputX.value = '';
	formulaViewTop.innerHTML = '';
	countSpan.innerHTML = arrX.length + 1;
	arrX.forEach((el) => {
		formulaViewTop.innerHTML += `${el} +`;
		formulaViewBotton.innerHTML = `/${arrX.length}`;
	});
});

calculateBtn.addEventListener('click', (evt) => {
	evt.preventDefault();
	let sum = 0;
	arrX.map((el) => {
		sum += el;
	});
	sumView.innerHTML = `Natija: ${sum / arrX.length} `;
});

resentBtn.addEventListener('click', (evt) => {
	evt.preventDefault();
	arrX.length = 0;
	formulaViewTop.innerHTML = '';
	formulaViewBotton.innerHTML = '';
	sumView.innerHTML = '';

	console.log(arrX);
});
