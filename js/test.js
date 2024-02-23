const countSpan = document.querySelector('.count_x');
const addBtn = document.querySelector('.x_add_btn');
const resentBtn = document.querySelector('.resent_btn');
const elInputX = document.querySelector('.input_x');
const calculateBtn = document.querySelector('.calculate_btn');
const sumView = document.querySelector('.sum_view');
const formulaViewTop = document.querySelectorAll('.formula_view_top');
const formulaViewBotton = document.querySelectorAll('.formula_view_bottom');

// y elements
const ycountSpan = document.querySelector('.count_y');
const yaddBtn = document.querySelector('.y_add_btn');
const elInputY = document.querySelector('.input_y');
const formulaViewSumX = document.querySelectorAll('.formula_view_sum_x');

const formulaViewSumY = document.querySelectorAll('.formula_view_sum_y');
const formulaViewTopY = document.querySelectorAll('.formula_view_top_y');
const formulaViewBottonY = document.querySelectorAll('.formula_view_bottom_y');


let arrX = [];
let arrY = [];
countSpan.textContent = arrX + 1;
ycountSpan.textContent = arrY + 1;

addBtn.addEventListener('click', (evt) => {
	evt.preventDefault();

	arrX.push(+elInputX.value);
	elInputX.value = '';
    formulaViewTop[0].innerHTML = '';

	formulaViewTop[1].innerHTML = '';

	countSpan.innerHTML = arrX.length + 1;
	arrX.forEach((el) => {
		formulaViewTop[0].innerHTML += `${el} +`;
		formulaViewTop[1].innerHTML += `${el} +`;
		formulaViewBotton[0].innerHTML = `/${arrX.length}`;
        formulaViewBotton[1].innerHTML = `/${arrX.length}`;
	});
	// ortacha x
	let sum = 0;
	arrX.map((el) => {
		sum += el;
	});
	formulaViewSumX[0].innerHTML = `- ${sum / arrX.length} `;
    formulaViewSumX[1].innerHTML = `- ${sum / arrX.length} `;
});

// y add
yaddBtn.addEventListener('click', (evt) => {
	evt.preventDefault();

	arrY.push(+elInputY.value);
	elInputY.value = '';

	formulaViewTopY[0].innerHTML = '';
	formulaViewTopY[1].innerHTML = '';
	ycountSpan.innerHTML = arrY.length + 1;
	arrY.forEach((el) => {
		formulaViewTopY[0].innerHTML += `${el} +`;
		formulaViewTopY[1].innerHTML += `${el} +`;
		formulaViewBottonY[0].innerHTML = `/${arrY.length}`;
        formulaViewBottonY[1].innerHTML = `/${arrY.length}`;
	});

	// ortacha y
	let sum = 0;
	arrY.map((el) => {
		sum += el;
	});
	formulaViewSumY[0].innerHTML = ` - ${sum / arrY.length} `;
    formulaViewSumY[1].innerHTML = ` - ${sum / arrY.length} `;
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
