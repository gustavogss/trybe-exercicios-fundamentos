const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const addTurnoLesson2 = (object, key, value) => {
      object[key] = value;
  };
  addTurnoLesson2(lesson2, 'turno', 'noite');
  console.log(Object.entries(lesson2));

  const listObject = (object) => Object.keys(object);
  console.log(listObject(lesson1));

  const lengthObject = (object) => Object.keys(object).length;
  console.log(lengthObject(lesson3));
 
  const valuesObject = (object) => Object.values(object);
  console.log(valuesObject(lesson2));

  const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
  console.log(allLessons); 

  const totalStudents = (object) =>{
    let total=0;
    const lesson = Object.keys(object);
    for (let index=0; index < lesson.length; index+=1){
      total += object[lesson[index]].numeroEstudantes;
    }
    return total;
  }
  console.log(totalStudents(allLessons));
  

