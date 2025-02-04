"use strict";

        const cidades = [
            { nome: 'Itapevi', cor: 'red', icon: 'church.png' },
            { nome: 'Jandira', cor: 'blue', icon: 'radiotherapy.png' },
            { nome: 'Barueri', cor: 'yellow', icon: 'radiotherapy.png' },
            { nome: 'Sorocaba', cor: 'pink', icon: 'church.png' }
        ];

        function criarMenu(cidade) {
            const novoItem = document.createElement('li');
            const novoLink = document.createElement('a');
            const menu = document.getElementById('menu');
            const novaImagem = document.createElement('img');

            novaImagem.src = `./icon/${cidade.icon}`;
            novoLink.href = '#';
            novoLink.textContent = cidade.nome;

            novoItem.appendChild(novaImagem);
            novoItem.appendChild(novoLink);
            novoItem.style = `--cor-hover: ${cidade.cor}`;

            menu.appendChild(novoItem);
        }

        cidades.forEach(criarMenu);


