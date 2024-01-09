
// refrenciando o input

const input = document.querySelector('input[name=tarefa]');

//referenciando o button

const btn= document.querySelector('#botao');

// referenciando a lista

const list = document.querySelector('#lista');

// referenciando o card
const card= document.querySelector('.card');

const tasks= JSON.parse(localStorage.getItem('tasks')) || [];


// função para renderizar a tela
const renderTask=()=>{
    list.innerHTML='';

    //interando a lista

    for(task of tasks){
        // criando um item para lista

        const itemTask=document.createElement('li');

        // passando as classes dos itens

        itemTask.setAttribute('class', 'list-group-item list-group-item-action');
        
        itemTask.onclick = function (){
            removeTask(this);

            
        }
        

        // criando um texto 

        const itemTextTask=document.createTextNode(task);

        // adicioando um texto no item

        itemTask.appendChild(itemTextTask);

        // adicioando um item na lista

        list.appendChild(itemTask);
    }
};
//Redenrizar tela

renderTask()

// adicionar a tarefa na lista

btn.onclick= function() {
    const itemInput= input.value;
    if(itemInput){
        tasks.push(itemInput);
        renderTask();
        input.value='';
        removeSpan();
        saveDateStorege();
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

// romover alertas

function removeSpan(){
    const spans= document.querySelectorAll('span');
    for (let i=0 ; i < spans.length; i++){
        card.removeChild(spans[i]);
    }
}
// remover tarefas da lista

function removeTask(tar){
    tasks.splice(tasks.indexOf(tar.textContent),1);
    renderTask();
    saveDateStorege();
}

// salvar na memoria do na vegador local

function saveDateStorege(){
    localStorage.setItem('dateBaseTask', JSON.stringify(tasks));

}


function mostrar_motivacao() {
    const texto_entrada = document.getElementById("motivacional-input");
    const texto_recebido = texto_entrada.value;
    const div_motivacao = document.getElementById("texto-output");
    div_motivacao.innerHTML = `Sinta-se motivado(a) por ${texto_recebido}!`;
    
  }

 
  function mostrar_displey() {
    const data_texto = document.getElementById('texto-data');
    const hora_visor = document.getElementById('horas-id');
    const minutos_visor = document.getElementById('minutos-id');
    const segundos_visor = document.getElementById('segundos-id');
    const data = new Date();
    const hora = data.getHours();
    const minutos = data.getMinutes();
    const segundos = data.getSeconds();
    const dia = data.getDate();
    const mes = data.toLocaleString('pt-BR', { month: 'long' });
    const ano = data.getFullYear();
    const dataFormatada = `${dia} de ${mes} de ${ano}`;
    data_texto.innerHTML = dataFormatada;
    hora_visor.innerHTML = hora;
    minutos_visor.innerHTML = minutos;
    segundos_visor.innerHTML = segundos;
}
mostrar_displey(); // Chama a função uma vez para exibir o tempo atual imediatamente
setInterval(mostrar_displey, 1000); // Chama a função a cada segundo para atualizar o tempo
