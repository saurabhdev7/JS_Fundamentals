/*

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;

*/

document.querySelector('.check').addEventListener('click', function () {
    console.log(document.querySelector('.guess').value);
});