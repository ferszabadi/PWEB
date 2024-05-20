function validarDados() {

    const nome = document.forms[0].elements["nome"].value;
    if (nome.length < 10) {
      alert("O nome deve ter pelo menos 10 caracteres.");
      return false;
    }

    const email = document.forms[0].elements["email"].value;
    if (!email.includes("@") || !email.includes(".")) {
      alert("O email deve conter arroba e ponto.");
      return false;
    }
  
    const comentario = document.forms[0].elements["comentario"].value;
    if (comentario.length < 20) {
      alert("O comentário deve ter pelo menos 20 caracteres.");
      return false;
    }

    const opcaoS = document.forms[0].elements["opcaoS"].checked;
    if (opcaoS) {
      alert("Que bom que você voltou a visitar essa página!");
    } else {
      alert("Volte sempre a esta página!");
    }

    return true;
  }
  