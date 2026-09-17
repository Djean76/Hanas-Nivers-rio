const botaoInvestigar = document.getElementById("investigar");

const continuar = document.getElementById("continuar");

const evidencias = document.getElementById("evidencias");

const quiz = document.getElementById("quiz");


const tela1 = document.getElementById("tela1");

const tela2 = document.getElementById("tela2");

const tela3 = document.getElementById("tela3");

const tela4 = document.getElementById("tela4");

const status = document.getElementById("status");


function trocarTela(atual, proxima) {

    atual.classList.add("escondida");

    proxima.classList.remove("escondida");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ========================= */
/* INVESTIGAR */
/* ========================= */

botaoInvestigar.addEventListener("click", () => {

    status.textContent = "Analisando arquivo...";

    setTimeout(() => {

        status.textContent =
            "Identidade confirmada: HANAKO.";

    }, 1200);


    setTimeout(() => {

        trocarTela(tela1, tela2);

    }, 2500);

});


/* ========================= */
/* PRIMEIRO CONTATO → FICHA */
/* ========================= */

continuar.addEventListener("click", () => {

    trocarTela(tela2, tela3);

});


/* ========================= */
/* FICHA → EVIDÊNCIAS */
/* ========================= */

evidencias.addEventListener("click", () => {

    trocarTela(tela3, tela4);

});


/* ========================= */
/* EVIDÊNCIAS → QUIZ */
/* ========================= */

quiz.addEventListener("click", () => {

    alert("TESTE DE CONHECIMENTO DESBLOQUEADO.");

});
