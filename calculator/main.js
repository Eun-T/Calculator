const numbers = document.querySelectorAll('.number')
const box = document.querySelector('.box')
const answer = document.querySelector('.answer')
const cals = document.querySelectorAll('.cal')

let storage1;
let storage2;
let storage3;
let result;

numbers.forEach(number => {
  let num = number.textContent
  number.addEventListener('click', (e) => {
    if(storage2 && !storage3){
      box.textContent = num
      storage3 = box.textContent
    }else if(storage2 && storage3){
      box.textContent += num
      storage3 += num
    }else{
      box.textContent += num
      storage1 = box.textContent
    }
  })
})

cals.forEach(cal => {
  cal.addEventListener('click',() => {
    if(storage1 && storage2 && storage3){
      switch (storage2){
        case '+':
          answer.textContent = (+storage1)+(+storage3)
          break;
        case '-':
          answer.textContent = (+storage1)-(+storage3)
          break;
        case '*':
          answer.textContent = (+storage1)*(+storage3)
          break;
        default:
          answer.textContent = (+storage1)/(+storage3)
      }
      storage1 = answer.textContent
      storage3 = 0
    }
    let operator = cal.dataset.cal
    storage2 = operator
    if(!storage1){
      storage2 = null
    }
  })
})


