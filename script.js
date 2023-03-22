const dados = document.querySelectorAll('.text');
const card = document.querySelector('.card-info');
const botao = document.querySelector('.botao');
const conteiner = document.querySelector('.conteiner');
const legenda = document.querySelectorAll('.legenda');



conteiner.addEventListener('mouseout',() =>{
    card.style.background = '#59eead'
    botao.style.background = 'white'
});

card.addEventListener('mouseover',() =>{
    card.style.background = 'white'
      botao.style.background = '#59eead'
      botao.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)'
});



function validarForm() {
   
    let dados = document.querySelectorAll('.text');
  
    for (let i = 0; i < dados.length; i++) {
      if (dados[i].value == '') {
        dados[i].style.border = '2px solid red';
        dados[i].setAttribute('placeholder', 'Preencha o campo corretamente');
      } 
    }
  }
  
