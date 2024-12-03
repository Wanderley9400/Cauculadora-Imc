function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
  
    if (!peso || !altura) {
      document.getElementById("resultado").textContent = "Por favor, insira valores válidos!";
      return;
    }
  
    const imc = peso / (altura * altura);
    const imcArredondado = imc.toFixed(2);
  
    document.getElementById("resultado").textContent = `Seu IMC é: ${imcArredondado}`;
  }
  