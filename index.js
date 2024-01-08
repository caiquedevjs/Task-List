
// refrenciando o input

const input = document.querySelector('input[name=tarefa]');

//referenciando o button

const btn= document.querySelector('#botao');

// referenciando a lista

const list = document.querySelector('#lista');

// referenciando o card
const card= document.querySelector('.card');

const tasks=[
    
];
// função para renderizar a tela
const renderTask=()=>{
    list.innerHTML='';

    //interando a lista

    for(task of tasks){
        // criando um item para lista

        const itemTask=document.createElement('li');

        // passando as classes dos itens

        itemTask.setAttribute('class', 'list-group-item list-group-item-action');

        // criando um texto 

        const itemTextTask=document.createTextNode(task);

        // adicioando um texto no item

        itemTask.appendChild(itemTextTask);

        // adicioando um item na lista

        list.appendChild(itemTask);
    }
};
renderTask()

btn.onclick= function() {
    const itemInput= input.value;
    if(itemInput){
        tasks.push(itemInput);
        renderTask();
        input.value='';
        removeSpan();
}else{
    removeSpan();
    const card= document.querySelector('.card');
    const erroSpan=document.createElement('span');
    erroSpan.setAttribute('class', 'alert alert-warning');
    const erroText= document.createTextNode('Digite uma tarefa por favor!')
    erroSpan.appendChild(erroText)
    card.appendChild(erroSpan);
}
    }

function removeSpan(){
    const spans= document.querySelectorAll('span');
    for (let i=0 ; i < spans.length; i++){
        card.removeChild(spans[i]);
    }
}
    

