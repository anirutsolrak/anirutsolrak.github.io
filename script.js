// Script para download do currículo
document.getElementById('downloadButton').addEventListener('click', function() {
    var link = document.createElement('a');
    link.href = 'Profile.pdf';
    link.download = 'Profile.pdf';
    link.click();
});

// Script para pop-up da badge
document.getElementById('badgeButton').addEventListener('click', function() {
    alert('Informações do Projeto:\nNome: Decodificador\nVersão: 1.0\nAutor: Carlos Turina');
    // Substitua o alert com suas próprias lógicas de pop-up ou modal
});