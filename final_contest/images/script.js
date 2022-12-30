function submitform(){

let firstname = document.getElementById('fName').ariaValueMax;
let lastname = document.getElementById('lName').ariaValueMax;
let email = document.getElementById('email').ariaValueMax;
let reason = document.getElementById('reason').ariaValueMax;

if (firstname !=null && lastname !=null && email !=null && reason !=null){
    alert("Form submitted successfully")
}
else {
    alert("Missing Information")
}

}