document.addEventListener('DOMContentLoaded', function() {
    const url = "https://www.alura.com.br/api/dashboard/44d5ec46169376f3b6fbda1dc2c7c03c6e3e622aaa5b9127b4a6554cde0c0e9d";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const coursesSection = document.querySelector('#cursosaqui');

            // Ignorar se data.guides for nulo ou indefinido
            const guides = data.guides?.filter(guide => guide.finishedSteps > 0);

            if (guides && guides.length > 0) {
                guides.forEach(guide => {
                    // Criar parágrafo para cada informação do curso e certificado
                    const guideElement = document.createElement('div');
                    guideElement.innerHTML = `
                        <h3>${guide.name}</h3>
                        <p><strong>Código:</strong> ${guide.code || ''}</p>
                        <p><strong>URL:</strong> <a href="https://www.alura.com.br${guide.url}">${guide.url || ''}</a></p>
                        <p><strong>Total de Cursos:</strong> ${guide.totalCourses || ''}</p>
                        <p><strong>Cursos Concluídos:</strong> ${guide.finishedCourses || ''}</p>
                        <p><strong>Total de Etapas:</strong> ${guide.totalSteps || ''}</p>
                        <p><strong>Etapas Concluídas:</strong> ${guide.finishedSteps || ''}</p>
                        <hr>
                    `;
                    coursesSection.appendChild(guideElement);
                });
            } else {
                coursesSection.innerHTML = "<p>Você não possui guias de estudo concluídos.</p>";
            }
        })
        .catch(error => {
            const errorMessage = document.getElementById('errorMessage');
            errorMessage.innerHTML = `<p>Erro ao carregar os dados: ${error.message}</p>`;
        });
});
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