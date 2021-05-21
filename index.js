const test = document.querySelectorAll('#text');
const re=/\s/g;


test.forEach((element)=>{
element.addEventListener('keyup',()=>{element.textContent=element.value});

});



