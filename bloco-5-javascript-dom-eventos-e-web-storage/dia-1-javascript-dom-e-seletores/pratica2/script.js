document.getElementById("header-container").style.backgroundColor = "rgb(76,164,109)";

document.getElementById("footer-container").style.backgroundColor="#073534";

document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor="#fc9e83";

document.querySelector('.no-emergency-tasks').style.backgroundColor = 'rgb(249, 219, 94)';

let emergencyTasks = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < emergencyTasks.length; i += 1) {
    emergencyTasks[i].style.backgroundColor = '#AB7AF3';
}

let noEmergencyTasks = document.querySelectorAll('.no-emergency-tasks h3');
for (let i = 0; i < noEmergencyTasks.length; i += 1) {
  noEmergencyTasks[i].style.backgroundColor = 'rgb(35, 37, 37)';
}



