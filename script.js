document.addEventListener('DOMContentLoaded', function() {
    // Verifica se já existe conteúdo armazenado localmente
    const storedData = localStorage.getItem('apiData');

    // Se já houver dados armazenados localmente, exibe-os
    if (storedData) {
        const coursesSection = document.querySelector('#cursosaqui');
        coursesSection.innerHTML = storedData;
    } else {
        const url = "https://www.alura.com.br/api/dashboard/49b605d98935c4c5a6769e68a4873f973754812fc3b1b3b7df7de4c806e69f65"
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

                    // Armazena os dados localmente
                    localStorage.setItem('apiData', coursesSection.innerHTML);
                } else {
                    coursesSection.innerHTML = "<p>Você não possui guias de estudo concluídos.</p>";
                }
            })
            .catch(error => {
                const errorMessage = document.getElementById('errorMessage');
                errorMessage.innerHTML = `<p>Erro ao carregar os dados: ${error.message}</p>`;
            });
    }
});