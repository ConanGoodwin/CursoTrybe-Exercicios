let estadoAnteriorSextas = [];

function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

function createDaysOfMonth() {
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  let listaDia = document.getElementById("days");

  for (let chave in dezDaysList) {
    let diaTagli = document.createElement("li");
    diaTagli.addEventListener("mouseover", mouseEmCimaDia);
    diaTagli.addEventListener("mouseleave", mouseForaDia);
    diaTagli.addEventListener("click", marcaTarefaNoDia);

    diaTagli.innerText = dezDaysList[chave];
    diaTagli.className = "day";
    if (
      dezDaysList[chave] === 24 ||
      dezDaysList[chave] === 25 ||
      dezDaysList[chave] === 31
    ) {
      diaTagli.className += " holiday";
    }
    if (
      dezDaysList[chave] === 4 ||
      dezDaysList[chave] === 11 ||
      dezDaysList[chave] === 18 ||
      dezDaysList[chave] === 25
    ) {
      diaTagli.className += " friday";
      estadoAnteriorSextas.push(dezDaysList[chave]);
    }

    listaDia.appendChild(diaTagli);
  }
}

function criaBtnFeriados(feriados) {
  let btn = document.createElement("button");
  btn.innerText = feriados;
  btn.id = "btn-holiday";
  btn.addEventListener("click", marcaFeriados);

  document.querySelector(".buttons-container").appendChild(btn);
}

function criaBtnSextas(label) {
  let btn = document.createElement("button");
  btn.innerText = label;
  btn.id = "btn-friday";
  btn.addEventListener("click", marcaSextas);

  document.querySelector(".buttons-container").appendChild(btn);
}

function marcaFeriados() {
  let feriados = document.getElementsByClassName("holiday");
  let cor = feriados[0].style.backgroundColor;
  let corLetra = "";

  if (cor != "rgb(0, 128, 0)") {
    cor = "rgb(0, 128, 0)";
  } else {
    cor = "";
  }

  for (let chave in feriados) {
    corLetra = feriados[chave].style.color;
    if (corLetra === "rgb(255, 255, 255)") {
      corLetra = ""
    } else if (corLetra === "") {
      corLetra = "rgb(255, 255, 255)";
    }

    feriados[chave].style.backgroundColor = cor;
    feriados[chave].style.color = corLetra;
  }
}

function marcaSextas() {
  let sextas = document.getElementsByClassName("friday");
  let seSexta = sextas[0].innerText;

  for (let chave in sextas) {
    if (seSexta != "sexta") {
      sextas[chave].innerText = "sexta";
    } else {
      sextas[chave].innerText = estadoAnteriorSextas[chave];
    }
  }
}

function criaTarefa(tarefa) {
  let tagTarefa = document.createElement("span");

  tagTarefa.innerText = tarefa;

  document.querySelector(".my-tasks").appendChild(tagTarefa);
}

function criaDivTarefa(cor) {
  let divTarefa = document.createElement("div");

  divTarefa.className = "task";
  divTarefa.style.backgroundColor = cor;
  divTarefa.addEventListener("click", marcaDesmarcaTarefa);

  document.querySelector(".my-tasks").appendChild(divTarefa);
}

function marcaDesmarcaTarefa(evento) {
  if (evento.target.className === "task") {
    evento.target.className = "task selected";
  } else {
    evento.target.className = "task";
  }
}

function marcaTarefaNoDia(evento) {
  let statusTarefa = document.getElementsByClassName("task selected")[0];

  if (statusTarefa != undefined) {
    if (
      evento.target.style.color === "" ||
      evento.target.style.color === "rgb(255, 255, 255)"
    ) {
      evento.target.style.color = statusTarefa.style.backgroundColor;
    } else {
      if (evento.target.style.backgroundColor === "rgb(0, 128, 0)") {
        evento.target.style.color = "rgb(255, 255, 255)";
      } else {
        evento.target.style.color = "";
      }
    }
  } else if (evento.target.style.backgroundColor === "rgb(0, 128, 0)") {
    evento.target.style.color = "rgb(255, 255, 255)";
  } else {
    evento.target.style.color = "";
  }
}

function mouseEmCimaDia(evento) {
  evento.target.style.fontSize = "35px";
}

function mouseForaDia(evento) {
  evento.target.style.fontSize = "";
}

createDaysOfTheWeek();
createDaysOfMonth();
criaBtnFeriados("Feriados");
criaBtnSextas("Sexta-Feira");
criaTarefa("cozinhar");
criaDivTarefa("rgb(0, 0, 255)");

// Escreva seu código abaixo.
