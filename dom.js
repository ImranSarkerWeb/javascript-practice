//select element

//method:1 by getElementsByTagName

const main = document.getElementsByTagName('main')
console.log(main)

//method: 02 by getElementById

const section1 = document.getElementById("section-1");
console.log(section1)

//method: 03  by getElementsByClassName

const section2 = document.getElementsByClassName("section-2");
console.log(section2)

//method: 04 by querySelector and querySelectorAll

const section3 = document.querySelector('.section-3')
console.log(section3) 

const allLi = document.querySelectorAll('li')
console.log(allLi)

const newSection = document.createElement('section');
newSection.innerHTML = `<ul><li>hi from dom</i></ul>`

console.log(newSection)

for(let li of allLi){
    li.style.color = 'coral';
}

const addItem = document.getElementById("addItem");
const item = document.getElementById("item")
const positionToAdd = document.getElementById("parent");
console.log(positionToAdd)


//onclick attribute called from the html
function addNewItem (){
    let text = item.value;
    const li = document.createElement('li');
    li.innerText = text;
    item.value ? positionToAdd.appendChild(li) : item.style.border = "5px solid red"
    item.value = '';
    let randomColor = Math.floor(444*(Math.random()+1))
    document.body.style.backgroundColor = '#' + randomColor
}


//if we type delete input field the button will enabled
const confirmField = document.getElementById('delete-item');
const btnDelete = document.getElementById('btn-delete');

confirmField.addEventListener('keyup', function(event){
    let confirm = event.target.value;
    confirm === 'delete' ? btnDelete.removeAttribute('disabled') : btnDelete.setAttribute('disabled', true)
})