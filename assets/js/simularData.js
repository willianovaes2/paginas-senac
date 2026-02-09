function simularEstado(tipo) {

    const card = document.getElementById('ucStatusCard');
    const dataAtual = document.getElementById('dataAtual');
    const btnAvaliar = document.getElementById('btnAvaliar');

    btnAvaliar.classList.add('d-none');

    if (tipo === 1) {
        card.className = 'alert alert-success';
        card.innerHTML = `
            <strong>UC em andamento</strong><br>
            63 dias restantes<br>
            <small>Período: 19/01/2026 até 23/03/2026</small>
        `;
        dataAtual.innerText = '19/01/2026';
    }

    if (tipo === 2) {
        card.className = 'alert alert-warning';
        card.innerHTML = `
            <strong>Atenção: Próximo ao fim</strong><br>
            Restam 3 dias - Avaliação liberada<br>
            <small>Período: 19/01/2026 até 23/03/2026</small>
        `;
        dataAtual.innerText = '20/03/2026';
        btnAvaliar.classList.remove('d-none');
    }

    if (tipo === 3) {
        card.className = 'alert alert-warning';
        card.innerHTML = `
            <strong>Atenção: Próximo ao fim</strong><br>
            Restam 0 dias - Avaliação liberada<br>
            <small>Período: 19/01/2026 até 23/03/2026</small>
        `;
        dataAtual.innerText = '23/03/2026';
        btnAvaliar.classList.remove('d-none');
    }

    if (tipo === 4) {
        card.className = 'alert alert-danger';
        card.innerHTML = `
            <strong>UC finalizada</strong><br>
            Finalizada há 5 dias<br>
            <small>Período: 19/01/2026 até 23/03/2026</small>
        `;
        dataAtual.innerText = '28/03/2026';
        btnAvaliar.classList.remove('d-none');
    }
}

function atualizarData(data) {
    const dias = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

    const d = new Date(data + 'T00:00');
    const texto = `${dias[d.getDay()]}, ${d.getDate()} de ${meses[d.getMonth()]} de ${d.getFullYear()}`;

    document.getElementById('dataFormatada').innerText = texto;
}

// function atualizarResumo() {
//     let presentes = document.querySelectorAll('input[value="P"]:checked').length;
//     let total = {{ count($alunos) }};
//     let faltas = total - presentes;
//     let percentual = Math.round((faltas / total) * 100);

//     document.getElementById('totalPresentes').innerText = presentes;
//     document.getElementById('totalFaltas').innerText = faltas;
//     document.getElementById('percentualFaltas').innerText = percentual + '%';
// }