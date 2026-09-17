const botaoInvestigar = document.getElementById("investigar");

const tela1 = document.getElementById("tela1");
const tela2 = document.getElementById("tela2");

const status = document.getElementById("status");

const continuar = document.getElementById("continuar");


botaoInvestigar.addEventListener("click", () => {

    status.textContent = "Analisando arquivo...";

    setTimeout(() => {

        status.textContent = "Identidade confirmada: HANAKO.";

    }, 1200);


    setTimeout(() => {

        tela1.classList.add("escondida");

        tela2.classList.remove("escondida");

    }, 2500);

});


continuar.addEventListener("click", () => {

    alert("Próximo registro desbloqueado.");

});
