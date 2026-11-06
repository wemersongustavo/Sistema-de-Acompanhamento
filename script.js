// Função que calcula a média e mostra o resultado
function calcularMedia() {

  // Captura os valores digitados
  let nome = document.getElementById("nome").value.trim();
  let nota1 = document.getElementById("nota1").value;
  let nota2 = document.getElementById("nota2").value;
  let nota3 = document.getElementById("nota3").value;


  // Conferir: algum campo vazio?
  if (nome === "" || nota1 === "" || nota2 === "" || nota3 === "") {
    document.getElementById("resultado").innerText = "Preencha o nome e as três notas!";
    /* Vai retornar a cor de uma classe dependendo da condição */
    document.getElementById("resultado").className = "erro";
    /* Retorna uma condição/valor */
    return;
  }

  // Conferir: o nome tem algum número?
  if (/[0-9]/.test(nome)) {
    document.getElementById("resultado").innerText = "O nome não pode ter números!";
    document.getElementById("resultado").className = "erro";
    /* Retorna uma condição/valor */
    return;
  }

  // Agora sim, transformar as notas em número
  nota1 = Number(nota1);
  nota2 = Number(nota2);
  nota3 = Number(nota3);

  // Conferir: alguma nota fora de 0 a 10?
  if (nota1 < 0 || nota1 > 10 || 
      nota2 < 0 || nota2 > 10 ||
      nota3 < 0 || nota3 > 10) {
    document.getElementById("resultado").innerText = "Escolha um número de 0 a 10!"
    /* Retorna uma condição/valor */
    return;
  }

  console.log("Nome:", nome);
  console.log("Nota 1:", nota1);
  console.log("Nota 2:", nota2);
  console.log("Nota 3:", nota3);

  // Calcula a média das 3 notas
  let media = (nota1 + nota2 + nota3) / 3;

  console.log("Média calculada:", media);

  // Passo 1: arredonda a média para 1 casa decimal 
  let mediaArredondada = media.toFixed(1); 

  // Define a situação do aluno e a mensagem personalizada usando if/else
  let situacao;
  let mensagemPersonalizada = "";

  if (media > 7) { 
    /* Parabéns você passou acima da média */
    situacao = "Aprovado"; 
    mensagemPersonalizada = " — Parabéns você passou acima da média!";
    document.getElementById("resultado").className = "aprovado";
  } else if (media === 7) {
    /* Felizmente você passou na média */
    situacao = "Aprovado";
    mensagemPersonalizada = " — Felizmente você passou na média!";
    document.getElementById("resultado").className = "aprovado";
  } else if (media >= 5 && media < 7) { 
    /* Aquilo abaixo da média (Recuperação) */
    situacao = "Recuperação"; 
    mensagemPersonalizada = " — Você ficou abaixo da média e está em recuperação.";
    document.getElementById("resultado").className = "recuperacao";
  } else { 
    /* Infelizmente você foi reprovado */
    situacao = "Reprovado"; 
    mensagemPersonalizada = " — Infelizmente você foi reprovado!";
    document.getElementById("resultado").className = "reprovado";
  } 

  console.log("Situação:", situacao); 

  // Passo 2: monta o texto que vai aparecer na tela juntando as informações e a mensagem correspondente
  let texto = nome + " — Média: " + mediaArredondada + " (" + situacao + ")" + mensagemPersonalizada; 

  // Passo 3: mostra o texto na tela 
  document.getElementById("resultado").innerText = texto;
}

// Quando o botão for clicado, chama a função acima
document.getElementById("btn-calcular").addEventListener("click", calcularMedia);
