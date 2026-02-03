document.addEventListener("DOMContentLoaded", function() {
  const btnAluno = document.getElementById('btnAluno');
  const btnProfessor = document.getElementById('btnProfessor');
  const btnAdmin = document.getElementById('btnAdmin');


  const formAluno = document.getElementById('formAluno');
  const formProfessor = document.getElementById('formProfessor');
  const formAdmin = document.getElementById('formAdmin');


  function mostrarFormulario(formMostrar) {
    // Esconde todos
    formAluno.classList.add('hidden');
    formProfessor.classList.add('hidden');
    formAdmin.classList.add('hidden');


    // Mostra o selecionado
    formMostrar.classList.remove('hidden');

    // Atualiza o botão ativo
    [btnAluno, btnProfessor, btnAdmin].forEach(b => b.classList.remove('active'));
  }

  btnAluno.addEventListener('click', () => {
    mostrarFormulario(formAluno);
    btnAluno.classList.add('active');
  });

  btnProfessor.addEventListener('click', () => {
    mostrarFormulario(formProfessor);
    btnProfessor.classList.add('active');
  });

  btnAdmin.addEventListener('click', () => {
    mostrarFormulario(formAdmin);
    btnAdmin.classList.add('active');
  });

});



// const btnAluno = document.getElementById('btnAluno');
// const btnInstrutor = document.getElementById('btnInstrutor');
// const btnCadastrar = document.getElementById('btnCadastrar');
// const formAluno = document.getElementById('formAluno');
// const formInstrutor = document.getElementById('formInstrutor');
// const formCadastrar = document.getElementById('formCadastrar');

// btnAluno.addEventListener('click', () => {
//   btnAluno.classList.add('active');
//   btnInstrutor.classList.remove('active');
//   formAluno.classList.remove('hidden');
//   formInstrutor.classList.add('hidden');
// });

// btnInstrutor.addEventListener('click', () => {
//   btnInstrutor.classList.add('active');
//   btnAluno.classList.remove('active');
//   formInstrutor.classList.remove('hidden');
//   formAluno.classList.add('hidden');
// });

// btnCadastrar.addEventListener('click', () => {
//   btnCadastrar.classList.add('active');
//   btnAluno.classList.remove('active');
//   btnInstrutor.classList.remove('active');
//   formInstrutor.classList.add('hidden');
//   formAluno.classList.add('hidden');
// });