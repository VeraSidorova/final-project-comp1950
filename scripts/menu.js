// JavaScript Document


//For menu

// Show / Hide Menu
const body = document.body;
const btn = document.querySelector('.btn-menu');

// Click Handler
btn.addEventListener('click', _ => { body.classList.toggle('show') });
btn.addEventListener('mousedown', (e) => { e.preventDefault(); });