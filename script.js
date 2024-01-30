// Substitua 'SUA_TOKEN_AQUI' pela sua token de acesso à API da Alura
const token = '';

// URL da API da Alura
const apiUrl = 'https://cursos.alura.com.br/api/v1/me';

// Função para obter e exibir certificados da API
async function obterCertificados() {
    try {
        const response = await fetch(apiUrl, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        const data = await response.json();

        // Manipule os dados para exibir os certificados conforme necessário
        const certificadosSection = document.getElementById('certificados');
        certificadosSection.innerHTML = '<h2>Certificados Obtidos</h2>';

        // Adicione aqui o código para exibir os certificados usando os dados da API
        const { courseProgress } = data;

        if (courseProgress && courseProgress.length > 0) {
            const listaCertificados = document.createElement('ul');

            courseProgress.forEach((curso) => {
                const itemCertificado = document.createElement('li');
                itemCertificado.textContent = `Curso: ${curso.name}, Progresso: ${curso.progress}%`;

                listaCertificados.appendChild(itemCertificado);
            });

            certificadosSection.appendChild(listaCertificados);
        } else {
            certificadosSection.innerHTML = '<p>Nenhum certificado encontrado.</p>';
        }

    } catch (error) {
        console.error('Erro na obtenção dos certificados:', error.message);
    }
}

// Função para exibir os certificados em um popup
function exibirCertificadosPopup() {
    obterCertificados(); // Chama a função de obtenção de certificados
    const popup = window.open('', 'Certificados', 'width=600,height=400,scrollbars=yes,resizable=yes');
    popup.document.write('<html><head><title>Certificados</title></head><body>');
    popup.document.write('<h1>Certificados</h1>');
    popup.document.write(document.getElementById('certificados').innerHTML);
    popup.document.write('</body></html>');
}

// Adiciona um evento de clique ao botão
const verCertificadosBtn = document.getElementById('verCertificadosBtn');
if (verCertificadosBtn) {
    verCertificadosBtn.addEventListener('click', exibirCertificadosPopup);
}