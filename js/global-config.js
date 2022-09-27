

function switchTheme(){
    if (localStorage.getItem('theme') === 'dark') {
        localStorage.setItem('theme', 'light');
        actualizarClaro();
        actualizarIframe();
    } else {
        localStorage.setItem('theme', 'dark');
        actualizarOscuro();
        actualizarIframe();
    }
    document.body.classList.toggle('dark');
}

function checkTheme(){
    if (localStorage.getItem('theme') === 'dark') {
        actualizarOscuro();
    } else {
        actualizarClaro();
    }
}
function checkThemeSub(){
    if (localStorage.getItem('theme') === 'dark') {
        document.querySelector('link[title="theme-mode"]').href = 'css/dark-theme.css';
    } else {
        document.querySelector('link[title="theme-mode"]').href = 'css/light-theme.css';
    }
}
function actualizarOscuro(){
    document.querySelector('link[title="theme-mode"]').href = 'css/dark-theme.css';
    document.getElementById('theme-icon').src = 'images/dark-theme.png';
}
function actualizarClaro(){
    document.querySelector('link[title="theme-mode"]').href = 'css/light-theme.css';
    document.getElementById('theme-icon').src = 'images/light-theme.png';
}
function actualizarIframe(){
    let iframe = document.getElementById('main-content');
    iframe.src = iframe.src;
}


function goIndex(){
    document.getElementById('main-content').src = 'galery.html';
    document.getElementById('main-content').width = '100%';
    document.getElementById('main-content').height = '300';
    checkTheme();
}
function goMenu(){
    document.getElementById('main-content').src = 'menu.html';
    document.getElementById('main-content').width = '100%';
    document.getElementById('main-content').height = '600'
    checkTheme();
}
function goContact(){
    document.getElementById('main-content').src = 'contacto.html';
    document.getElementById('main-content').width = '100%';
    document.getElementById('main-content').height = '400'
    checkTheme();
}

