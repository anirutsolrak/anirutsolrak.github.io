// Substitua 'SUA_TOKEN_AQUI' pela sua token de acesso à API da Alura
const token = '87685322f587772da279dfd2db7f46252c44140bfd54e4da6eaaeed2ff94f23d';

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

    } catch (error) {
        console.error('Erro na obtenção dos certificados:', error.message);
    }
}

// Chame a função para obter e exibir os certificados ao carregar a página
document.addEventListener('DOMContentLoaded', obterCertificados);