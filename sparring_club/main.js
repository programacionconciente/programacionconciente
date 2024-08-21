function clearContent() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Limpia el contenido
}

function loadHome() {
    clearContent();
    const contentDiv = document.getElementById('content');
    contentDiv.style.backgroundColor = 'lightblue';
    contentDiv.innerHTML = 'Contenido de Home';
}

function loadEvent() {
    clearContent();
    const contentDiv = document.getElementById('content');
    contentDiv.style.backgroundColor = 'lightgray';
    
    const iframe = document.createElement('iframe');
    iframe.src = 'event_sport.html';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';

    contentDiv.appendChild(iframe);
}

function loadSportsMMA() {
    clearContent();
    const contentDiv = document.getElementById('content');
    contentDiv.style.backgroundColor = 'lightgray';
    
    const iframe = document.createElement('iframe');
    iframe.src = 'mma_sport.html';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';

    contentDiv.appendChild(iframe);
}


function loadShare() {
    clearContent();
    const contentDiv = document.getElementById('content');
    contentDiv.style.backgroundColor = 'lightgoldenrodyellow';
    contentDiv.innerHTML = 'Contenido de Share';
}

function loadChat() {
    clearContent();
    const contentDiv = document.getElementById('content');
    contentDiv.style.backgroundColor = 'lightgray';
    
    const iframe = document.createElement('iframe');
    iframe.src = 'chat_sport.html';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';

    contentDiv.appendChild(iframe);
}

function loadManageAccounts() {
    clearContent();
    const contentDiv = document.getElementById('content');
    contentDiv.style.backgroundColor = 'lightgray';
    contentDiv.innerHTML = 'Contenido de Manage Accounts';
}

function activateButton(selectedDiv) {
    const buttons = document.querySelectorAll('.inferior button');
    const divs = document.querySelectorAll('.inferior div');
    buttons.forEach(button => button.classList.remove('active'));
    divs.forEach(div => div.classList.remove('active'));
    selectedDiv.classList.add('active');
}
