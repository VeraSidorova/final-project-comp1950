// JavaScript Document


//For menu

// Show / Hide Menu
const body = document.body;
const btn = document.querySelector('.btn-menu');

const current_student = document.getElementById('current_student');
const prospective_student = document.getElementById('prospective_student');

const contact_form = document.getElementById('contact_form');
const contact_submit_btn = document.getElementById('contact_submit_btn');

const login_form = document.getElementById('login_form');
const login_submit_btn = document.getElementById('login_submit_btn'); 

// Click Handler
btn.addEventListener('click', _ => { body.classList.toggle('show') });
btn.addEventListener('mousedown', (e) => { e.preventDefault(); });

// Current/Prospective student handler
current_student.addEventListener('change', _ => {
    document.getElementById('student_number').disabled = false;
    document.getElementById('student_number').required = true;
})
prospective_student.addEventListener('change', _ => {
    document.getElementById('student_number').disabled = true;
    document.getElementById('student_number').required = false;
})

// Contact Form Submission
contact_form.addEventListener('submit', (e) => { e.preventDefault(); });
contact_submit_btn.addEventListener("click", _ => {
    contact_inputs = contact_form.getElementsByTagName('input');
    for (let i = 0; i < contact_inputs.length; i++) {
        if (!contact_inputs[i].checkValidity()) {
            alert("Please fill the form correctly");
            return;
        }
    }
    alert("Form Submitted! Thank you");
    contact_form.reset();
})

// Login Form Submission
login_form.addEventListener('submit', (e) => { e.preventDefault(); });
login_submit_btn.addEventListener("click", _ => {
    login_inputs = login_form.getElementsByTagName('input');
    for (let i = 0; i < login_inputs.length; i++) {
        if (!login_inputs[i].checkValidity()) {
            alert("Please fill the form correctly");
            return;
        }
    }
    alert("Login Successful!");
    login_form.reset();
})