const h1 = document.querySelectorAll('h1')
const p = document.querySelectorAll('p')
const a = document.querySelectorAll('a')

let elems = [
    ...document.querySelectorAll('h1'),
    ...document.querySelectorAll('p'),
    ...document.querySelectorAll('a'),
];
console.log(elems)
let item = 0
document.addEventListener('keydown', function(e) {
    if(e.keyCode == 40){
        if(item >= elems.length){
            return
        } else {
        item++
        console.log(item)
            elems[item].focus()
        }
    }
    else if(e.keyCode == 38) {
        if(item <= 0){
            return
        } else {
        item--
console.log(item)
            elems[item].focus()
        }
    }
})