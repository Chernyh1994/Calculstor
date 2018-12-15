let input = document.querySelector('#display')
let button = document.querySelectorAll('.button')

for(i=0;i<button.length;i++){
  button[i].addEventListener('click',calculFunc)
}

function calculFunc(e){
  if (e.target.getAttribute('data-type') === 'C') {
    input.value = '0'
  } 
  else if (e.target.getAttribute('data-type') === '=') {
    input.value = eval(input.value)
  } 
  else if (input.value === '0') {
    input.value = e.target.getAttribute('data-type')
  }
  else {
    input.value += e.target.getAttribute('data-type')
  }
}