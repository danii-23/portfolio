const text1 = "Daniel Alonso";
const text2 = "Desenvolvedor Front-End";

const element = document.getElementById("typing");

let index = 0;
let isDeleting = false;
let currentText = text1;

function typeEffect(){

element.textContent = currentText.substring(0, index);

if(!isDeleting){
index++;

if(index > currentText.length){

setTimeout(()=>{
isDeleting = true;
},1000)

}

}else{

index--;

if(index === 0){

isDeleting = false;
currentText = text2;

}

}

setTimeout(typeEffect,80);

}

typeEffect();

