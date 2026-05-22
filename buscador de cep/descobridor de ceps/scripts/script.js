const menu = document.getElementsByClassName('material-symbols-outlined')[0];
const closex = document.getElementsByClassName('fa-solid fa-xmark')[0];
document.getElementById('submit').addEventListener('click',loadLocate);


menu.addEventListener('click',loadNavBar);
closex.addEventListener('click',closeMenu);


function loadNavBar() {
    const menu = document.getElementById('menu');


    menu.style.display = 'flex';
    menu.style.transition = 'transform .4s ease';
    menu.style.zIndex = '1000';


}


function closeMenu() {
    const menu = document.getElementById('menu');


    menu.style.transform = 'translateX(100%)';
    menu.style.transition = 'transform 1000ms';

    setTimeout(() =>{  
    
    menu.style.display = 'none';
    menu.style.transform = 'translateX(0%)'

    },1000)

}


function loadLocate(e) {
    e.preventDefault();
    
    const cep = document.getElementById('cep').value;
    const xhr = new XMLHttpRequest();
    const main = document.querySelector('main');



    xhr.open('GET','https://viacep.com.br/ws/'+cep.replaceAll('-','')+'/json/');


    xhr.onload = function() {
        //algum erro aqui
        if(this.status == 200) {
            const dados = JSON.parse(this.responseText);
            const resultado = document.querySelector('section#informacoes');
            console.log(this.status);
            console.log(dados);

            resultado.innerHTML = `<section id="endereco"><ul><li>Sua rua é ${dados.logradouro},</li><li>seu bairro é ${dados.bairro},</li> <li>sua localidade é ${dados.localidade},</li> <li>seu estado/uf é ${dados.uf}</li></ul></section>`; 
            resultado.style.color = '#000000';
            resultado.style.backgroundColor = '#ffffff';
            resultado.style.borderRadius = '20px';
            resultado.style.padding = '10px';
            resultado.style.fontSize = '0.8em';
            main.style.height = '650px';

            
            
            /*
                background-color: #ffffff;
                color: #000000;
                border-radius: 20px;
                padding: 20px;
                font-size: 0.8em;
            
            */

        }

    };


    xhr.onerror = function() {
        console.log('Ocorreu algum erro na requisição');
    };


    xhr.send();
}