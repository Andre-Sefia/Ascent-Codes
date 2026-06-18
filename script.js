let loading = document.getElementById('loading')
let home = document.getElementById('home');

setTimeout(() => {
    loading.style.opacity = '0';
    loading.style.transition = 'opacity 0.6s ease';

    setTimeout(() => {
        loading.style.display = 'none';
        home.style.display = 'block';

        void home.offsetWidth;
        home.classList.add('fade-in');
    }, 600);
}, 5000);






let button = document.getElementById('granted')

button.onclick = function(){

    if(button.innerHTML = "Request Access"){
        button.innerHTML = "Access"
        button.style.color = "white"
        button.style.backgroundColor = "rgba(34, 131, 34, 0.801)"
        button.style.boxShadow = "0 0 10px rgba(34, 131, 34, 0.801)"
        button.style.textShadow = "0 0 2.5px white"
        }

}