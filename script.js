/* ================= NAVBAR SHADOW ================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){
navbar.style.boxShadow = "0 5px 25px rgba(0,0,0,0.4)";
}else{
navbar.style.boxShadow = "none";
}

});


/* ================= SCROLL PROGRESS BAR ================= */

const progressBar = document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {

const scrollTop = window.scrollY;
const docHeight = document.body.scrollHeight - window.innerHeight;

const scrollPercent = (scrollTop / docHeight) * 100;

progressBar.style.width = scrollPercent + "%";

});


/* ================= PROJECT CARD 3D EFFECT ================= */

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

card.addEventListener("mousemove", (e) => {

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const centerX = rect.width / 2;
const centerY = rect.height / 2;

const rotateX = (y - centerY) / 15;
const rotateY = (centerX - x) / 15;

card.style.transform =
`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

card.addEventListener("mouseleave", () => {

card.style.transform = "rotateX(0) rotateY(0)";

});

});


/* ================= TERMINAL TYPING ================= */

function typeText(element, text, speed, callback){

let i = 0;

function typing(){

if(i < text.length){

element.textContent += text.charAt(i);
i++;

setTimeout(typing, speed);

}else{

if(callback) callback();

}

}

typing();

}

const terminal = document.querySelector("#terminal-section");

let started = false;

function checkTerminal(){

if(!terminal) return;

const rect = terminal.getBoundingClientRect();
const trigger = window.innerHeight * 0.75;

if(rect.top < trigger && !started){

started = true;
startTerminal();

}

}

window.addEventListener("scroll", checkTerminal);
window.addEventListener("load", checkTerminal);

/* ================= START TERMINAL ================= */

function startTerminal(){

const lines = [
["line1","$ whoami"],
["line2","Ansh — Front-End Developer"],
["line3","$ skills"],
["line4","HTML • CSS • JavaScript • SEO"],
["line5","$ services"],
["line6","Landing Pages • Websites • SEO"],
["line7","$ location"],
["line8","India"],
["line9","$ contact"],
["line10","anshjoshi1416@gmail.com"]
];

let index = 0;

function nextLine(){

if(index >= lines.length) return;

const [id,text] = lines[index];

typeText(document.getElementById(id), text, 40, () => {
index++;
nextLine();
});

}

nextLine();
}

/* COPY EMAIL */

const copyBtn = document.getElementById("copyEmail");

copyBtn.addEventListener("click", () => {

const email = document.getElementById("emailText").textContent;

navigator.clipboard.writeText(email);

showToast("Email Copied 📧");

});


/* FORM SUBMIT */

const form = document.getElementById("contactForm");

form.addEventListener("submit", (e)=>{

e.preventDefault();

const btn = form.querySelector("button");

btn.textContent = "Sending...";

setTimeout(()=>{

btn.textContent = "Send Message";

showToast("Message Sent 🚀");

form.reset();

},1500);

});


/* TOAST */

function showToast(message){

const toast = document.getElementById("toast");

toast.textContent = message;

toast.classList.add("show");

setTimeout(()=>{

toast.classList.remove("show");

},3000);

}