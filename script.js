const botao = document.getElementById("investigar");
const status = document.getElementById("status");

botao.addEventListener("click", () => {

    status.textContent = "Analisando arquivo...";

    setTimeout(() => {
        status.textContent = "Identidade confirmada: HANAKO.";
    }, 1200);

    setTimeout(() => {
        status.textContent = "A investigação continuará em breve...";
    }, 2800);

});
