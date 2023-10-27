function defaultReload (e) {
    e.preventDefault();
}

function Continue() {
    // Obtém a referência da div que será exibida
    var partTwo = document.getElementById('part-two');
    var partOne = document.getElementById('part-one');

    // Altera o estilo da div para torná-la visível
    partTwo.style.display = 'block';
    partOne.style.display = 'none';
        
}

function ContinueTwo() {
    // Obtém a referência da div que será exibida
    var partTwo = document.getElementById('part-two');
    var partthree = document.getElementById('part-three');

    // Altera o estilo da div para torná-la visível
    partTwo.style.display = 'none';
    partthree.style.display = 'block';
        
}