// JavaScript Document


//For menu

// Show / Hide Menu
const body = document.body;
const btn_menu = document.querySelector('.btn-menu');

const current_student = document.getElementById('current_student');
const prospective_student = document.getElementById('prospective_student');

const contact_form = document.getElementById('contact_form');
const contact_submit_btn = document.getElementById('contact_submit_btn');

const login_form = document.getElementById('login_form');
const login_submit_btn = document.getElementById('login_submit_btn'); 

// Click Handler
btn_menu.addEventListener('click', _ => { body.classList.toggle('show') });
btn_menu.addEventListener('mousedown', (e) => { e.preventDefault(); });

// Current/Prospective student handler
current_student.addEventListener('change', _ => {
    document.getElementById('student_number').disabled = false;
    document.getElementById('student_number').required = true;
})
prospective_student.addEventListener('change', _ => {
    document.getElementById('student_number').value = '';
    document.getElementById('student_number').disabled = true;
    document.getElementById('student_number').required = false;
})

// Contact Form Submission
contact_form.addEventListener('submit', (e) => { e.preventDefault(); });
contact_submit_btn.addEventListener("click", _ => {
    handle_form_submission(contact_form, "Form Submitted! Thank you");
})

// Login Form Submission
login_form.addEventListener('submit', (e) => { e.preventDefault(); });
login_submit_btn.addEventListener("click", _ => {
    handle_form_submission(login_form, "Login Successful!");
})

function handle_form_submission(myForm, successMsg) {
    form_inputs = myForm.getElementsByTagName('input');
    for (let i = 0; i < form_inputs.length; i++) {
        if (!form_inputs[i].checkValidity()) {
            alert("Please fill the form correctly");
            return;
        }
    }
    alert(successMsg);
    myForm.reset();
}