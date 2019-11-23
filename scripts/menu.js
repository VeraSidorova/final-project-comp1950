// JavaScript Document

// Show / Hide Menu
const body = document.body;
const btn_menu = document.querySelector('.btn-menu');

const current_student = document.getElementById('current_student');
const prospective_student = document.getElementById('prospective_student');

const contact_form = document.getElementById('contact_form');
const login_form = document.getElementById('login_form');

// Click Handler
btn_menu.addEventListener('click', _ => { body.classList.toggle('show') });
btn_menu.addEventListener('mousedown', (e) => { e.preventDefault(); });

// If on Contact Form
if (contact_form != null){
    // Current/Prospective student handler
    current_student.addEventListener('change', _ => {
        document.getElementById('student_number').disabled = false;
        document.getElementById('student_number').required = true;
    });
    prospective_student.addEventListener('change', _ => {
        document.getElementById('student_number').value = '';
        document.getElementById('student_number').disabled = true;
        document.getElementById('student_number').required = false;
    });
    // Contact Form Submission
    contact_form.addEventListener('submit', (e) => { 
        e.preventDefault();
        alert("Form has been Submitted! Thank you");
        contact_form.reset();
    });
}

// If on Login Form
if (login_form != null){
    login_form.addEventListener('submit', (e) => { 
        e.preventDefault(); 
        alert("Login Successful!");
        login_form.reset();
    });
}