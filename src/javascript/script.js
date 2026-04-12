
function mostrarTab(nome) {
    document.querySelectorAll('.tab-conteudo, .tab-conteudo-ativo').forEach(el => {
        el.className = 'tab-conteudo';
    });

    document.querySelectorAll('.tab, .tab-ativo').forEach(btn => {
        btn.className = 'tab';
    });

    document.getElementById('tab-' + nome).className = 'tab-conteudo-ativo';
    event.currentTarget.className = 'tab-ativo';
}


let totalPontos = 0;
let desafiosConcluidos = 0;
const totalDesafios = 6;

function aceitarDesafio(botao, pontos) {
    if (botao.classList.contains('concluido')) return;

    totalPontos += pontos;
    desafiosConcluidos += 1;

    document.getElementById('totalPontos').textContent = totalPontos;

    botao.textContent = '✓ Concluído';
    botao.classList.add('concluido');

    botao.closest('.desafio-card').classList.add('concluido');

    const contador = document.getElementById('contadorFlutuante');
    contador.classList.add('pulsando');
    setTimeout(() => contador.classList.remove('pulsando'), 400);

    if (desafiosConcluidos === totalDesafios) {
        setTimeout(() => lancarConfetes(), 500);
    }
}

function lancarConfetes() {
    confetti({
        particleCount: 200,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#22C55E', '#16a34a', '#86efac', '#f97316', '#facc15']
    });

    alert('🎉 Parabéns! Você completou todos os desafios do Equilíbrio Digital!');
}


function assinarManifesto() {
    const nome = document.getElementById('campoNome').value;
    const email = document.getElementById('campoEmail').value;
    const cidade = document.getElementById('campoCidade').value;

    if (nome === '') {
        alert('Por favor, preencha seu nome completo!');
        return;
    }

    if (email === '') {
        alert('Por favor, preencha seu e-mail!');
        return;
    }

    if (cidade === '') {
        alert('Por favor, preencha sua cidade!');
        return;
    }

    const contador = document.querySelector('.assine-contador');
    contador.textContent = '1248 assinantes';

    alert('🎉 Obrigado, ' + nome + '! Você assinou o Manifesto Digital!');
}


const hamburguer = document.getElementById('navHamburguer');
const navLinks = document.querySelector('.nav-links');

hamburguer.addEventListener('click', function() {
    navLinks.classList.toggle('aberto');
});

document.querySelectorAll('.nav-links a').forEach(function(link) {
    link.addEventListener('click', function() {
        navLinks.classList.remove('aberto');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const btnTema = document.querySelector('.btn-tema');

    btnTema.addEventListener('click', function() {
        document.body.classList.toggle('dark');

        if (document.body.classList.contains('dark')) {
            btnTema.innerHTML = '<i data-lucide="sun"></i>';
        } else {
            btnTema.innerHTML = '<i data-lucide="moon"></i>';
        }
        lucide.createIcons();
    });
});