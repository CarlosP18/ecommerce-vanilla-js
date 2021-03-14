import Home from './views/Home.js'


const router = () => {
    const main = document.getElementById('main-container');
    main.innerHTML = Home.render()
}

window.addEventListener('load', router)