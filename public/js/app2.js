// Referencia a la base de datos
const dbRefObject = firebase.database().ref();

// sincronizar cambios
dbRefObject.on('value', function(snap) {
  console.log(snap.val());

  // STUDENTS
  var students = snap.val();
  var sq1 = [];
  var sq2 = [];
  var sq3 = [];
  var sq4 = [];
  var sq5 = [];
  // var aux = 0;
  var arrStudiantesProm = [];
  // var promStudentArr = [];
  students.forEach(function(element) {
    var promStudent;
    var englishStudents = element.english;
    var englishNote;

    // console.log(englishStudents);
    if (englishStudents === 0) {
      // console.log('cero');
      englishNote = 0.25;
      // console.log(englishNote);
      // console.log(promStudent);
    } else if (englishStudents === 1) {
      // console.log('uno');
      englishNote = 0.5;
      // console.log(englishNote);
    } else if (englishStudents === 2) {
      // console.log('dos');
      englishNote = 0.75;

      // console.log(promStudent);
    } else if (englishStudents === 3) {
      // console.log('tres');
      englishNote = 1;
      // console.log(englishNote);

      // console.log(promStudent);
    }

    promStudent = (englishNote + parseInt(element.soft_skills.sprint_3.comunicacion) + parseInt(element.tech_skills.sprint_3)) / 3;
    promStudent = promStudent.toFixed(2) * 100;

    // promStudentArr.push(promStudent);
    // bubble(promStudentArr);
    // console.log(promStudentArr);
    arrStudiantesProm.push([element.index, promStudent]);
  });
  bubble(arrStudiantesProm);
  console.log(arrStudiantesProm);
  /* var firstStudent = arrStudiantesProm.shift();
  var secondStudent = arrStudiantesProm.pop(); */
  var arrMax = arrStudiantesProm.slice(0, 10);
  var arrPro = arrStudiantesProm.slice(10, 20);
  var arrMin = arrStudiantesProm.slice(20, 30);


  /* console.log(arrMax);
  console.log(arrPro);
  console.log(arrMin); */
  var x = Math.floor((Math.random() * 10) + 1);
  // var y = Math.floor((Math.random() * 5) + 1);
  // console.log(y);
  
  // console.log(x);
  // console.log(arrMax[x]);
  // arrMax.splice(x, 1);

  sq1.push((arrMax.splice(x, 1)), (arrPro.splice(x, 1)), (arrMin.splice(x, 1)));
  x = Math.floor((Math.random() * (x - 1)) + 1);
  sq2.push((arrMax.splice(x, 1)), (arrPro.splice(x, 1)), (arrMin.splice(x, 1)));
  x = Math.floor((Math.random() * (x - 2)) + 1);
  sq3.push((arrMax.splice(x, 1)), (arrPro.splice(x, 1)), (arrMin.splice(x, 1)));
  x = Math.floor((Math.random() * (x - 3)) + 1);
  sq4.push((arrMax.splice(x, 1)), (arrPro.splice(x, 1)), (arrMin.splice(x, 1)));
  x = Math.floor((Math.random() * (x - 4)) + 1);
  sq5.push((arrMax.splice(x, 1)), (arrPro.splice(x, 1)), (arrMin.splice(x, 1)));
  x = Math.floor((Math.random() * (x - 5)) + 1);
  sq1.push((arrMax.splice(x, 1)), (arrPro.splice(x, 1)), (arrMin.splice(x, 1)));
  x = Math.floor((Math.random() * (x - 6)) + 1);
  sq2.push((arrMax.splice(x, 1)), (arrPro.splice(x, 1)), (arrMin.splice(x, 1)));
  x = Math.floor((Math.random() * (x - 7)) + 1);
  sq3.push((arrMax.splice(x, 1)), (arrPro.splice(x, 1)), (arrMin.splice(x, 1)));
  x = Math.floor((Math.random() * (x - 8)) + 1);
  sq4.push((arrMax.splice(x, 1)), (arrPro.splice(x, 1)), (arrMin.splice(x, 1)));
  x = Math.floor((Math.random() * (x - 9)) + 1);
  sq5.push((arrMax.splice(x, 1)), (arrPro.splice(x, 1)), (arrMin.splice(x, 1)));
  console.log(arrMax);
  console.log(arrMin);
  console.log(arrPro);
  console.log('squead');
  console.log(sq1);
  console.log(sq2);
  console.log(sq3);
  console.log(sq4);
  console.log(sq5);

});

function bubble(arr) {//va hundiendo al elemento mas grande
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j][1] < arr[i][1]) {//intercambiar valores
        var aux = arr[j][1];
        var aux1 = arr[j][0];
        arr[j][1] = arr[i][1];
        arr[j][0] = arr[i][0];
        arr[i][1] = aux;
        arr[i][0] = aux1;
      }
    }
  }
  return arr;
}


