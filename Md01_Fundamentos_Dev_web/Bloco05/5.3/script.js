function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

function createDaysOfMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let listaDia = document.getElementById('days');

  for (let chave in dezDaysList) {
    let diaTagli = document.createElement('li');

    diaTagli.innerText = dezDaysList[chave];
    diaTagli.className = "day";
    if (dezDaysList[chave] === 24 || dezDaysList[chave] === 25 || dezDaysList[chave] === 31) {
      diaTagli.className += " holiday";
    }
    if (dezDaysList[chave] === 4 || dezDaysList[chave] === 11 || dezDaysList[chave] === 18 || dezDaysList[chave] === 25) {
      diaTagli.className += " friday";
    }

    listaDia.appendChild(diaTagli);
  }
}

function criaBtnFeriados(feriados) {
  let btn = document.createElement('button');
  btn.innerText = feriados;
  btn.id = "btn-holiday";

  document.querySelector('.buttons-container').appendChild(btn);
}

createDaysOfTheWeek();
createDaysOfMonth();
criaBtnFeriados("Feriados");

// Escreva seu código abaixo.