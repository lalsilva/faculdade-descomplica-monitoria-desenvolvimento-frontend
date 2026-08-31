document
  .getElementById("formSeguro")
  .addEventListener("submit", function (event) {
    let campoNome = document.getElementById("nome");
    let erroNome = document.getElementById("erroNome");

    let campoSenha = document.getElementById("senha");
    let erroSenha = document.getElementById("erroSenha");

    let formularioValido = true;

    // Validação do Nome[cite: 10]
    if (campoNome.value.trim() === "") {
      erroNome.style.display = "block"; // Mostra o erro[cite: 10]
      campoNome.classList.add("input-invalido");
      formularioValido = false;
    } else {
      erroNome.style.display = "none";
      campoNome.classList.remove("input-invalido");
    }

    // Validação da Senha[cite: 10]
    if (campoSenha.value.trim() === "") {
      erroSenha.style.display = "block";
      campoSenha.classList.add("input-invalido");
      formularioValido = false;
    } else {
      erroSenha.style.display = "none";
      campoSenha.classList.remove("input-invalido");
    }

    // Se tiver erro, impede o envio do formulário[cite: 10]
    if (!formularioValido) {
      event.preventDefault(); // Impede o envio padrão do formulário[cite: 10]
    } else {
      // Apenas para não recarregar a tela durante a live e perder o visual
      event.preventDefault();
      alert("Dados validados pelo Front-end! Prontos para envio ao Back-end.");
    }
  });
