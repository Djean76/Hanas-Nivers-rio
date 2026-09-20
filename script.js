const botaoInvestigar = document.getElementById("investigar");

const continuar = document.getElementById("continuar");

const evidencias = document.getElementById("evidencias");

const quiz = document.getElementById("quiz");


const tela1 = document.getElementById("tela1");

const tela2 = document.getElementById("tela2");

const tela3 = document.getElementById("tela3");

const tela4 = document.getElementById("tela4");

const tela5 = document.getElementById("tela5");

const tela6 = document.getElementById("tela6");

const tela7 = document.getElementById("tela7");


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
/* PRIMEIRO CONTATO */
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

    iniciarQuiz();

    trocarTela(tela4, tela5);

});


/* ========================= */
/* PERGUNTAS */
/* ========================= */

const perguntas = [

    {
        pergunta:
            "Qual palavra aparentemente inofensiva possui um poder misterioso sobre a Hanako?",

        opcoes: [
            "Re:Zero",
            "Roblox",
            "Arrocha",
            "Mita"
        ],

        correta: 2
    },


    {
        pergunta:
            "Onde aconteceu o primeiro contato entre o Sensei e a Hanako?",

        opcoes: [
            "Roblox",
            "Uma call pelo TikTok",
            "Discord",
            "Uma partida de Minecraft"
        ],

        correta: 1
    },


    {
        pergunta:
            "Qual personagem a Hanako conseguia imitar de maneira assustadoramente perfeita?",

        opcoes: [
            "Mita, de MiSide",
            "Subaru, de Re:Zero",
            "Hanako-kun",
            "Hornet"
        ],

        correta: 0
    },


    {
        pergunta:
            "Qual desses animes entrou recentemente no território das metadinhas?",

        opcoes: [
            "Naruto",
            "One Piece",
            "Re:Zero",
            "Dragon Ball"
        ],

        correta: 2
    },


    {
        pergunta:
            "Qual título extremamente suspeito a Hanako deu ao Sensei?",

        opcoes: [
            "Sensei Supremo",
            "Sensei Gozarei",
            "Sensei Roblox",
            "Mestre do Arrocha"
        ],

        correta: 1
    }

];


let perguntaAtual = 0;

let pontos = 0;

let respondeu = false;


function iniciarQuiz() {

    perguntaAtual = 0;

    pontos = 0;

    respondeu = false;

    mostrarPergunta();

}


function mostrarPergunta() {

    const pergunta = perguntas[perguntaAtual];

    const numero =
        document.getElementById("numero-pergunta");

    const texto =
        document.getElementById("pergunta");

    const opcoes =
        document.getElementById("opcoes");

    const feedback =
        document.getElementById("feedback");


    numero.textContent =
        `PERGUNTA ${perguntaAtual + 1}/${perguntas.length}`;


    texto.textContent =
        pergunta.pergunta;


    opcoes.innerHTML = "";

    feedback.textContent = "";

    respondeu = false;


    pergunta.opcoes.forEach((opcao, indice) => {

        const botao =
            document.createElement("button");

        botao.classList.add("opcao");

        botao.textContent =
            `${String.fromCharCode(65 + indice)}) ${opcao}`;


        botao.addEventListener("click", () => {

            responder(indice, botao);

        });


        opcoes.appendChild(botao);

    });

}


function responder(indice, botaoClicado) {

    if (respondeu) return;

    respondeu = true;


    const pergunta = perguntas[perguntaAtual];

    const botoes =
        document.querySelectorAll(".opcao");


    if (indice === pergunta.correta) {

        pontos++;

        botaoClicado.classList.add("correta");

        document.getElementById("feedback").textContent =
            "✓ Resposta correta. A investigação continua.";

    } else {

        botaoClicado.classList.add("errada");

        botoes[pergunta.correta].classList.add("correta");

        document.getElementById("feedback").textContent =
            "✗ Resposta incorreta. Os pesquisadores estão decepcionados.";

    }


    setTimeout(() => {

        perguntaAtual++;


        if (perguntaAtual < perguntas.length) {

            mostrarPergunta();

        } else {

            mostrarResultado();

        }

    }, 1400);

}


/* ========================= */
/* RESULTADO */
/* ========================= */

function mostrarResultado() {

    document.getElementById("pontuacao").textContent =
        `${pontos}/${perguntas.length}`;


    let diagnostico;


    if (pontos === 5) {

        diagnostico =
            "PERFEITO. Você conhece o Sensei assustadoramente bem. Os pesquisadores recomendam manter distância.";

    } else if (pontos >= 3) {

        diagnostico =
            "APROVADA. Você conhece a figura relativamente bem. Ainda existem alguns segredos.";

    } else if (pontos >= 1) {

        diagnostico =
            "PREOCUPANTE. Você precisa passar mais tempo com o Sensei.";

    } else {

        diagnostico =
            "FALHA CRÍTICA. Quem é você e o que fez com a Hanako?";

    }


    document.getElementById("diagnostico").textContent =
        diagnostico;


    trocarTela(tela5, tela6);

}


document.getElementById("proxima-etapa")
    .addEventListener("click", () => {

        trocarTela(tela6, tela7);

    });


document.getElementById("carta")
    .addEventListener("click", () => {

        alert("ARQUIVO FINAL BLOQUEADO. Acesso será liberado posteriormente.");

    });
