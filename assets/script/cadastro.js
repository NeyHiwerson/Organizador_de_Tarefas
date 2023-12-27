const inputCadastroName = document.getElementById('inputCadastroName');
const inputCadastroEmail = document.getElementById('inputCadastroEmail');
const inputCadastroSenha = document.getElementById('inputCadastroSenha');
const inputConfirmeSenha = document.getElementById('inputConfirmeSenha');
const checkLicenseTerms = document.getElementById('checkLicenseTerms');
const btnCadastro = document.getElementById('btn_cadastrar');

function cadastrarUsuario(nome, email, senha) {
  const usuario = {
    nome,
    email,
    senha,
  };

  console.log(usuario);
  alert('Usuário cadastrado com sucesso!');
  /* window.location.href = 'login.html'; // redireciona para a página de login.html.
  localStorage.setItem('usuario', JSON.stringify(usuario)); // salva o objeto usuario em um localStorage chamado "usuario".
  localStorage.setItem('logado', true); // salva o valor true em um localStorage chamado "logado".
  return usuario; // retorna o objeto usuario. */

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
    cadastrarUsuario(inputCadastroName.value,
      inputCadastroEmail.value, inputCadastroSenha.value);
  }
});
