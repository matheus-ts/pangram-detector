var input = prompt('Digite a frase para verificar um pangrama');

function retypePrhase() {
    input = prompt('Digite a frase para verificar um pangrama');
}

function isPangram(text){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    text = text.toLowerCase()
    return alphabet.split('').every(function (x) {
        return text.indexOf(x) != -1 
    })
}

const result = alert(`A frase é um pangrama: ${isPangram(input)}`)