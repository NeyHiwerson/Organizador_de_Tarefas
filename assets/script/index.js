$(document).ready(function () {

  const inputEmail = $('#inputEmail');
  const inputPassword = $('#inputPassword');
  const btn_entrar = $('#btn_entrar');
  const URL_BASE = 'https://gabrielcaixeta.github.io/laravel-sanctum-auth-api';
  const complemento = '/api/v1/auth/login';

  function cadastrarUsuario(email, password) {
    const usuario = {
      email,
      password
    };

    console.log(usuario);

    $.ajax({
      url: `${URL_BASE}${complemento}`,
      type: 'POST',
      data: usuario,
      success: function (data) {
        console.log(data);
        createCookie('token', data.token, 1);
        window.location.href = 'index.html';
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log(textStatus, errorThrown);
        // Exibir mensagem de erro na página
        $('#erro').text('Erro no login. Verifique suas credenciais.');
      }
    });
  };

  function validarEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  function mostrarErro(mensagem) {
    // Adicionar lógica para exibir mensagens de erro na página
    $('#erro').text(mensagem);
  }

  btn_entrar.on('click', function () {
    const email = inputEmail.val();
    const senha = inputPassword.val();

    if (email === '' || senha === '') {
      mostrarErro('Preencha corretamente email e senha');
    } else if (!validarEmail(email)) {
      mostrarErro('Digite um email válido');
    } else if (senha.length <= 5) {
      mostrarErro('A senha deve ter no mínimo 6 caracteres');
    } else {
      cadastrarUsuario(email, senha);
    }
  });
});
