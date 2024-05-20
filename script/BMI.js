let button = document.querySelector('.answer')
let input1 = document.querySelectorAll('.total')[0]
let input2 = document.querySelectorAll('.total')[1]
let label = document.querySelector('.BMI')


button.addEventListener('click',()=>{
    label.innerText =(eval(`${input1.value}/(((${input2.value}) / 100) **2)`)).toFixed(2)
})

