let jogadores = [{id: 0,
    nome: "Everton",
    imagem: "eu.jpg",
    vitorias: 100,
    empates: 5,
    derrotas: 10,
    pontos: 295,
  }]

let jogadorID = 0;
function addPlayer() {
let nome = document.querySelector("#campoNome")
let imagem = document.querySelector("#campoImg")
jogadorID++

if (imagem.value == "" || imagem.value == undefined) {
imagem = 'image.jpg';
} else {
if (imagem.value.endsWith('.png') || imagem.value.endsWith('.jpg') || imagem.value.endsWith('.jpeg')) {
imagem = imagem.value
} else {
    document.querySelector("#alert").style = "display: block";
  setTimeout(function() {
    document.querySelector("#alert").style = "display: none";
  }, 3000)
}
}
  let jogador = {
    id: jogadorID,
    nome: nome.value,
    imagem: imagem,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
  }
  jogadores.push(jogador)
  exibirJogadores(jogadores)
}

exibirJogadores(jogadores)

function calculaPontos(i) {
let pontos = (jogadores[i]['vitorias'] * 3) + jogadores[i]['empates'] - (jogadores[i]['derrotas'] / 1)
return pontos;
}

function exibirJogadores(jogadores) {
let html = ""
for (let i = 0;i < jogadores.length;i++) {
html += `<article class="jogador">
    <figure style="background: url('${jogadores[i].imagem}')center center;background-size: cover;" class="jogador-img"></figure>
    <article class="info">
        <article class="pontos">
          <p>Nome: ${jogadores[i].nome} |</p>
          <p>Vitórias: ${jogadores[i].vitorias}</p>
          <br>
          <p>Empates: ${jogadores[i].empates} |</p>
          <p>Derrotas: ${jogadores[i].derrotas}</p>
        </article>
        <p class="score"><i class="fas fa-star"></i> ${jogadores[i].pontos}</p>
      </article>
      <article class="buttons">
        <button onClick="adicionarVitoria(${i})" style="background: green">Vitória</button>
        <button onClick="adicionarEmpate(${i})" style="background: orange">Empate</button>
        <button onClick="adicionarDerrota(${i})" style="background: red">Derrota</button>
      </article>
  </article>`
}
let tabelaJogadores = document.getElementById('tabelaJogadores')
tabelaJogadores.innerHTML = html
}

function adicionarVitoria(i) {
let jogador = jogadores[i]
jogador.vitorias++
jogador.pontos = calculaPontos(jogador.id)
exibirJogadores(jogadores)
}
function adicionarEmpate(i) {
let jogador = jogadores[i]
jogador.empates++
jogador.pontos = calculaPontos(i)
exibirJogadores(jogadores);
}
function adicionarDerrota(i) {
let jogador = jogadores[i]
jogador.derrotas++
jogador.pontos = calculaPontos(i)
exibirJogadores(jogadores)
}


function openModal() {
let modal = `<section id="modal">
<button id="fechar" onClick="fecharModal()">Fechar</button>
<article id="modal-body">
  <h1>Adicionar jogador</h1>
  <input type="text" id="campoNome" placeholder="Nome do jogador" />
  <input type="text" id="campoImg" placeholder="URL da imagem (opcional)" />
  <button id="add" onClick="addPlayer()">Adicionar</button>
</article>
</section>`
document.body.innerHTML += modal;
}

function fecharModal() {
document.querySelector("#modal").remove()
}