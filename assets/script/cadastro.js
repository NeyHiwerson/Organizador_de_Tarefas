$(document).ready(function() {

  const inputCadastroName = document.getElementById('inputCadastroName');
  const inputCadastroEmail = document.getElementById('inputCadastroEmail');
  const inputCadastroSenha = document.getElementById('inputCadastroSenha');
  const inputConfirmeSenha = document.getElementById('inputConfirmeSenha');
  const checkLicenseTerms = document.getElementById('checkLicenseTerms');
  const btnCadastro = document.getElementById('btn_cadastrar');
  const URL_BASE = 'https://gabrielcaixeta.github.io/laravel-sanctum-auth-api';
  const complemento = '/api/v1/auth/register';

  function cadastrarUsuario(name, email, password, confirm_password) {
    const novoUsuario = {
      name,
      email,
      password,
      confirm_password
    };

    console.log(usuario);

    $.ajax({
      url: URL_BASE + complemento,
      type: 'POST',
      data: novoUsuario,
      success: function(data) {
        console.log(data);
        alert('Usuário cadastrado com sucesso!');
        window.location.href = 'index.html';
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus, errorThrown);
      }
    });
  };

  function validarEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  btnCadastro.addEventListener('click', () => {
    if (inputCadastroName.value === '' || inputCadastroEmail.value === '' || inputCadastroSenha.value === '' || inputConfirmeSenha.value === '') {
      alert('Preencha todos os campos');
      return; // para a execução do código aqui e não executa o resto do código.
    } else if (!validarEmail(inputCadastroEmail.value)) {
      alert('Digite um email válido');
      return;
    } else if (inputCadastroSenha.value.length <= 5) {
      alert('A senha deve ter no mínimo 6 caracteres');
      return;
    } else if (inputCadastroSenha.value !== inputConfirmeSenha.value) {
      alert('As senhas não conferem');
      return;
    } else if (!checkLicenseTerms.checked) {
      alert('Você precisa aceitar os termos de uso');
      return;
    } else {
      cadastrarUsuario(
        inputCadastroName.value,
        inputCadastroEmail.value,
        inputCadastroSenha.value,
        inputConfirmeSenha.value
        );
    }
  });
});
