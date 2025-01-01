var naoButton = document.getElementById("nao");
var simButton = document.getElementById("sim");

// Função para centralizar o contêiner dos botões
function centralizeContainer() {
  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;
  var containerWidth = document.getElementById("button-container").offsetWidth;
  var containerHeight = document.getElementById("button-container").offsetHeight;

  var centerX = (screenWidth - containerWidth) / 2;
  var centerY = (screenHeight - containerHeight) / 2;

  document.getElementById("button-container").style.position = "absolute";
  document.getElementById("button-container").style.left = centerX + "px";
  document.getElementById("button-container").style.top = centerY + "px";
}

// Centralizar o contêiner dos botões ao carregar a página
window.onload = function() {
  centralizeContainer();
};

// Movimento aleatório do botão "não"
naoButton.addEventListener("mouseover", function() {
  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;
  var buttonWidth = naoButton.offsetWidth;
  var buttonHeight = naoButton.offsetHeight;

  var newX = Math.floor(Math.random() * (screenWidth - buttonWidth));
  var newY = Math.floor(Math.random() * (screenHeight - buttonHeight));

  naoButton.style.left = newX + "px";
  naoButton.style.top = newY + "px";
});

// Redirecionar ao clicar no botão "sim"
simButton.addEventListener("click", function() {
  window.location.href = "https://www.youtube.com/watch?v=-dy1uuJa-vw";
});