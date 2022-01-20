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

createDaysOfTheWeek();

// Exercicio 1:
const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
function createdaysList() {
  let days = document.querySelector("#days");
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let dayItem = document.createElement("li");
    days.appendChild(dayItem);
    dayItem.innerHTML = day;

    if (day === 24 || day === 31) {    
      dayItem.className = "day holiday";
    } else if (day === 4 || day === 11 || day === 18 || day === 25) {
      dayItem.className = "day friday";
    } else {
      dayItem.className = "day";
    }
  }
}
createdaysList();

// Exercicio 2:
function createdHolidaysButton(buttonName){
let buttonsContainer = document.querySelector('.buttons-container'); //div - pai
let button = document.createElement('button');
button.style.padding = '.5rem 2rem';
button.style.fontWeight = '600';
button.style.backgroundColor = 'white';
button.style.color = 'black';
button.style.borderRadius = '.45rem';
button.style.cursor = 'pointer';
button.id = 'btn-holiday';
buttonsContainer.appendChild(button);
button.innerHTML = buttonName; 
} createdHolidaysButton('Feriados');

// Exercicio 3:
function buttonHolidaysClick(){
  let holidayButton = document.querySelector('#btn-holiday')
  let holidays = document.querySelectorAll('.holiday'); 
  holidayButton.addEventListener('click', function(){
    for (let index=0; index < holidays.length; index+=1) {
      if ((holidays[index]).style.backgroundColor === 'white') {
        holidays[index].style.backgroundColor = 'rgb(238,238,238)';
      } else {
        holidays[index].style.backgroundColor = 'white';
      }
    }
  })
} buttonHolidaysClick();

// Exercicio 4:
function buttonCreateFriday(btnName) {
  let buttonsContainer = document.querySelector('.buttons-container');
  let btnFriday = document.createElement('button');
  btnFriday.id = 'btn-friday';
  buttonsContainer.appendChild(btnFriday);    
  // btnFriday.sytle = {
  //   padding : '.5rem 2rem',
  //   fontWeight : '600',
  //   color : 'white',
  //   backgroundColor : 'black',
  //   borderRadius : '.45rem',
  //   cursor : 'pointer'
  // }  
  btnFriday.style.padding = '.5rem 2rem';
  btnFriday.style.fontWeight = '600';
  btnFriday.style.backgroundColor = 'yellow';
  btnFriday.style.color = 'black';
  btnFriday.style.borderRadius = '.45rem';
  btnFriday.style.cursor = 'pointer'; 
  btnFriday.innerHTML = btnName; 

} buttonCreateFriday('Sexta-feira');

// Exercicio 5:
function buttonFridayClick(daysfriday){ 
  let btnFriday = document.querySelector('#btn-friday'); 
  let fridays = document.getElementsByClassName("friday");

  btnFriday.addEventListener('click', function(){
    for (let index=0; index < fridays.length; index+=1) {
      if ((fridays[index]).innerHTML !== 'Sexta-feira' ) {
        fridays[index].innerHTML = 'Sextou';
      } else {
        fridays[index].innerHTML = daysfriday[index];
      }
    }
  })
} buttonFridayClick([ 4, 11, 18, 25 ]);

// Exercicio 6:
function dayMouseOver(event) {
  let days = document.querySelector('#days');
  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '2rem';    
  })
};

function dayMouseOut(event) {
  let days = document.querySelector('#days');
  days.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '1rem';  
  })
};
dayMouseOver();
dayMouseOut();

// Exercicio 7:
function taskCustomCalendar(task) {
  let MyTasks = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');  
  MyTasks.appendChild(taskName);
  taskName.innerHTML = task;
};
taskCustomCalendar('Estudar');

// Exercicio 8:
function legendTask(color) {
  let tasksContainer = document.querySelector('.my-tasks');
  let divTask = document.createElement('div');
  divTask.className = 'task';
  divTask.style.backgroundColor = color;
  tasksContainer.appendChild(divTask);
};
legendTask('green');

//Exercicio 9:
function selectTask() {
  let taskSelect = document.querySelector('.my-tasks');
  taskSelect.addEventListener('click', function(event) {
    if (taskSelect.length !== 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};
selectTask();

// Exercicio 10:

// Bônus:
