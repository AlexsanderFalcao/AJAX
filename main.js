document.addEventListener('DOMContentLoaded', function () {
    try {
        fetch('https://api.github.com/users/AlexsanderFalcao') // Use seu username aqui
            .then(response => response.json())
            .then(data => {
                // Selecione os elementos e preencha os dados do seu perfil
                const nameElement = document.querySelector('#name');
                const usernameElement = document.querySelector('#username');
                const avatarElement = document.querySelector('#avatar');
                const reposElement = document.querySelector('#repos');
                const followersElement = document.querySelector('#followers');
                const followingElement = document.querySelector('#following');
                const blogElement = document.querySelector('#blog');
                const companyElement = document.querySelector('#company');
                const locationElement = document.querySelector('#location');
                const bioElement = document.querySelector('#bio');
                const linkElement = document.querySelector('#link');

                // Preenchendo com os dados
                nameElement.innerText = data.name || 'Não informado';
                usernameElement.innerText = data.login;
                avatarElement.src = data.avatar_url;
                followingElement.innerText = data.following;
                followersElement.innerText = data.followers;
                reposElement.innerText = data.public_repos;
                blogElement.href = data.blog || '#';
                companyElement.innerText += data.company || 'Não informado';
                locationElement.innerText += data.location || 'Não informado';
                bioElement.innerText += data.bio || 'Sem bio';
                linkElement.href = data.html_url;
            })
            .catch(error => console.error('Erro ao buscar dados do GitHub:', error));
    } catch (err) {
        console.error('Erro no script principal:', err);
    }
});
