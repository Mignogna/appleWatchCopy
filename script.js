const imagemVisualizacao = document.getElementById("imagem-visualizacao");
const tituloProduto = document.getElementById("titulo-produto");
const selecaoCores = document.getElementById("selecao-cores");
const nomeCorSelecionada = document.getElementById("nome-cor-selecionada");
const minImagem0 = document.getElementById("0-imagem-miniatura");
const minImagem1 = document.getElementById("1-imagem-miniatura");
const minImagem2 = document.getElementById("2-imagem-miniatura");

const verdeCipreste = {
  nome: "Verde Cipreste",
  pasta: "imagens-verde-cipreste",
};
const azulInverno = {
  nome: "Azul Inverno",
  pasta: "imagens-azul-inverno",
};
const meiaNoite = {
  nome: "Meia Noite",
  pasta: "imagens-meia-noite",
};
const estelar = {
  nome: "Estelar",
  pasta: "imagens-estelar",
};
const rosaClaro = {
  nome: "Rosa Claro",
  pasta: "imagens-rosa-claro",
};
const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opcoesTamanho = ["41 mm", "45mm"];

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;

function trocarImagem() {
  const idOpcaoSelecionada = document.querySelector(
    '[name="opcao-imagem"]:checked'
  ).id;
  imagemSelecionada = idOpcaoSelecionada.charAt(0);
  imagemVisualizacao.src =
    "./imagens/opcoes-cores/" +
    opcoesCores[corSelecionada].pasta +
    "/imagem-" +
    imagemSelecionada +
    ".jpeg";
}

function trocarTamanho() {
  const idOpcaoSelecionada = document.querySelector(
    '[name="opcao-tamanho"]:checked'
  ).id;
  tamanhoSelecionado = idOpcaoSelecionada.charAt(0);
  tituloProduto.innerText =
    "Pulseira loop esportiva " +
    opcoesCores[corSelecionada].nome +
    " para caixa de " +
    opcoesTamanho[tamanhoSelecionado] +
    ".";
  if (opcoesTamanho[tamanhoSelecionado] === "41 mm") {
    imagemVisualizacao.classList.add("caixa-pequena");
  } else {
    imagemVisualizacao.classList.remove("caixa-pequena");
  }
}

function trocarCor() {
  const idOpcaoSelecionada = document.querySelector(
    '[name="opcao-cor"]:checked'
  ).id;
  corSelecionada = idOpcaoSelecionada.charAt(0);
  tituloProduto.innerText =
    "Pulseira loop esportiva " +
    opcoesCores[corSelecionada].nome +
    " para caixa de " +
    opcoesTamanho[tamanhoSelecionado] +
    ".";
  nomeCorSelecionada.innerText = "Cor : " + opcoesCores[corSelecionada].nome;
  minImagem0.src =
    "./imagens/opcoes-cores/" +
    opcoesCores[corSelecionada].pasta +
    "/imagem-0.jpeg";
  minImagem1.src =
    "./imagens/opcoes-cores/" +
    opcoesCores[corSelecionada].pasta +
    "/imagem-1.jpeg";
  minImagem2.src =
    "./imagens/opcoes-cores/" +
    opcoesCores[corSelecionada].pasta +
    "/imagem-2.jpeg";
  imagemVisualizacao.src =
    "./imagens/opcoes-cores/" +
    opcoesCores[corSelecionada].pasta +
    "/imagem-" +
    imagemSelecionada +
    ".jpeg";
}
