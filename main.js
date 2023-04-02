const tasks = [];
let time = 0;
let timer = null;
let timerBreak = null;
let current = null;

const bAdd = document.querySelector('#bAdd');
const itTask = document.querySelector('#itTask');
const form = document.querySelector('#form');

form.addEventListener('submit', e => {
    e.preventDefault();
    if(itTask.value != ''){
        createTask(itTask.value);
        itTask.value = '';
    }
});

function createTask(value){

    
}