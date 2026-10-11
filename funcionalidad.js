const screen = document.querySelector('.screen');

//añadir numero a la pantalla
function addNumber(value){
    if (screen.textContent == '0') {
        screen.textContent =value;
    } else {
        screen.textContent += value;
    }
}

//borrar pantalla
function deleteInfo(){
    screen.textContent = '0';
}


// operar
function evaluateInfo(){
    try {
        screen.textContent = eval(screen.textContent.replace('X', '*'));
    } catch(error){
        screen.textContent = 'ERROR';
    }
}

// iterrar botones
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        const value = boton.textContent;

        if (value === 'DE') {
            deleteInfo();
        } else if ( value === '=') {
            evaluateInfo();
        } else {
            addNumber(value);
        }
    })
})
