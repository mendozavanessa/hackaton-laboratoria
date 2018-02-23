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

  // function drop(event) {
  //   event.preventDefault();
  //   // console.log(event);
  //   console.log(event.dataTransfer)
  //   // console.log(event.target.dataset.box);
  //   // if(event.target.)
  //   if (event.target.dataset.box === 'marco') {
  //     // console.log('hihihi')
  //     console.log(event.dataTransfer.getData('id'))
  //     // let idName = event.dataTransfer.getData('id');
  //     // Console.log(event);
  //     // console.log(idName);
  //     // event.target.appendChild(document.getElementById(idName));
  //   }
  // }

  // function drop(event) {
  //   event.preventDefault();
  //   if (event.target.className === 'marco') {
  //     let idName = event.dataTransfer.getData('text');
  //     event.target.appendChild(document.getElementById(idName));
  //   }
  // }
})

// var informationStudent = document.getElementsByClassName('info-student');
// console.log(informationStudent);
// console.log(informationStudent);
// var containerStudent = document.getElementsByClassName('container-images');
// informationStudent.addEventListener("dragstart", dragIniciado, false);
// informationStudent.addEventListener("dragend", dragFinalizado, false);

// for(i in informationStudent){
//   var informationStudent = informationStudent[i]
//   // console.log(informationStudent[i])
//   informationStudent.addEventListener('dragstart', dragIniciando, false);
//   informationStudent.addEventListener('dragend', dragFinalizado, false);
// }

// function dragIniciado(e){
//   console.log(e);
// }
// function dragFinalizado(e){
//   console.log(e);
// }
// containerStudent.addEventListener('dragover', dragSobreContainer, false);
// containerStudent.addEventListener('dragleave', dragSalioContainer, false);
// containerStudent.addEventListener('drop', manejadorDrop, false);
// function dragIniciado(e) {
//   e.preventDefault();
//   var containerStudent= document.createElement('p');
//   var clon = this.cloneNode(true);
//   containerPadre.appendChild(clon);
//   e.dataTranfer.setData('text',containerStudent,inner-HTML)
// }
// function manejadorDrop() {
//   this.innerHTML +=datos;
// }
// function dragSobreContainer(e) {
//   e.preventDefault();
//   this.classList.add('over');
//   return false
// }
// function dragSalioContainer(e) {
//   this.classList.remove('over');
// }
// function dragIniciado(e) {
//   this.style.backgroundColor='blue';
// }
// function dragFinalizado(e) {
//   this.style.backgroundColor='red';
// }
  /* console.log(arrMax);
  console.log(arrPro);
  console.log(arrMin); */
  var x = Math.floor((Math.random() * 10) + 1);
  var y = Math.floor((Math.random() * 10) + 1);
  
  console.log(x);
  console.log(arrMax[x]);
  // arrMax.splice(x, 1);

  sq1.push((arrMax.splice(x, 1)), (arrPro.splice(x, 1)), (arrMin.splice(x, 1)));
  sq2.push((arrMax.splice(x, 1)), (arrPro.splice(x, 1)), (arrMin.splice(x, 1)));
  sq3.push((arrMax.splice(x, 1)), (arrPro.splice(x, 1)), (arrMin.splice(x, 1)));
  sq4.push((arrMax.splice(x, 1)), (arrPro.splice(x, 1)), (arrMin.splice(x, 1)));
  sq5.push((arrMax.splice(x, 1)), (arrPro.splice(x, 1)), (arrMin.splice(x, 1)));
  sq1.push((arrMax.splice(y, 1)), (arrPro.splice(y, 1)), (arrMin.splice(y, 1)));
  sq2.push((arrMax.splice(y, 1)), (arrPro.splice(y, 1)), (arrMin.splice(y, 1)));
  sq3.push((arrMax.splice(y, 1)), (arrPro.splice(y, 1)), (arrMin.splice(y, 1)));
  sq4.push((arrMax.splice(y, 1)), (arrPro.splice(y, 1)), (arrMin.splice(y, 1)));
  sq5.push((arrMax.splice(y, 1)), (arrPro.splice(y, 1)), (arrMin.splice(y, 1)));
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


