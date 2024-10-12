// sistema de loading

const main = document.getElementById ('main-content') as HTMLElement;
const loader = document.getElementById('load') as HTMLElement;

window.addEventListener('load', () => {
    setTimeout(()=> {
        main.style.display = "block";
        loader.style.display = "none";
    }, 2000);
});