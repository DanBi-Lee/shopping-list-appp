const inputBox = document.querySelector('.input-box');
const textInput = document.querySelector('.input-box input');
const itemList = document.querySelector('.item-list');

function handleDeleteBtn(){
    itemList.addEventListener('click', event=>{
        const target = event.target
        const targetClass = target.classList.value;
        if(targetClass === 'delete'){
            target.parentNode.remove();
        }
    });
}

function renderItem(text){
    const li = document.createElement('li');
    li.innerHTML = `<span class="text">${text}</span><button class="delete"><span class="hidden">삭제</span><i class="far fa-trash-alt"></i></button>`;
    console.log(text);
    itemList.append(li);
}

function handleInputBox(){
    inputBox.addEventListener('submit', (event)=>{
        event.preventDefault();
        const text = textInput.value;
        renderItem(text);
        textInput.value = '';
        textInput.focus();
    });
}

function init(){
    textInput.focus();
    handleInputBox();
    handleDeleteBtn();
}

init();