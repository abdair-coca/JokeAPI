const url = 'https://v2.jokeapi.dev/joke/Any?lang=es';

const contenedor = document.querySelector('body');
const joke = document.createElement('h2');
const delivery = document.createElement('h2');

contenedor.appendChild(joke);
contenedor.appendChild(delivery);

const boton = document.querySelector('button').addEventListener('click', ()=>{
    fetch(url)
    .then(res => res.json())
    .then(data => {

        if(data.type === 'single'){
            delivery.textContent = '';
            joke.textContent = data.joke;
        }else{
            joke.textContent = data.setup;
            delivery.textContent = data.delivery;
        }
    })
    .catch(err => console.error(err));

})