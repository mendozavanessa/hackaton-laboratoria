window.addEventListener('load', function() {
  const dbRefObject = firebase.database().ref();

  organizar();

  function organizar() {
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
      var arrStudiantesProm = [];
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
      var arrMax = arrStudiantesProm.slice(0, 10);
      var arrPro = arrStudiantesProm.slice(10, 20);
      var arrMin = arrStudiantesProm.slice(20, 30);


      var x = Math.floor((Math.random() * 10) + 1);
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
      var numStudent = 6;

      function newSquad(sq) {
        var newArr = [];
        for (var i = 0; i < numStudent; i++) {
          newArr.push([sq[i]][0][0][0]);
        }
        return newArr;
      }
      var newSq1 = newSquad(sq1);
      var newSq2 = newSquad(sq2);
      var newSq3 = newSquad(sq3);
      var newSq4 = newSquad(sq4);
      var newSq5 = newSquad(sq5);

      function obtenerSprint() {
        sprintNew = (Object.keys(students[0].soft_skills)).length + 1;
        return sprintNew;
      }
      // cambiar el ultimo sprint
      document.getElementById('number-sprint').textContent = obtenerSprint();

      // agregando al DOM
      dbRefObject.on('value', function(snapshot) {
        student = snapshot.val();

        function pintarSquad(squead, container) {
          var template = '';
          for (let i = 0; i < squead.length; i++) {
            for (let j = 0; j < student.length; j++) {
              if (squead[i] === student[j].index) {
                console.log(student[j].name.first);
                var names = student[j].name.first;
                var last = student[j].name.last;
                var tech = student[j].tech_skills.sprint_3;
                var soft = student[j].soft_skills.sprint_3.comunicacion;
                var eng = student[j].english;
                var start = '';

                if (tech > 0.7) {
                  start += '<i class="material-icons tiny star">star</i>';
                }
                if (soft > 0.7) {
                  start += '<i class="material-icons tiny star">star</i>';
                }
                if (eng > 1) {
                  start += '<i class="material-icons tiny star">star</i>';
                }
                var nameEng;
                switch (eng) {
                case 0: nameEng = '-';
                  break;
                case 1: nameEng = 'básico';
                  break;
                case 2: nameEng = 'intermedio';
                  break;
                case 3: nameEng = 'avanzado';
                  break;
                }

                // console.log(start);


                template += `<div id="${squead[i]}" class="col m4 mt-5 bloqueado" draggable=true>
              <img src="assets/img/user.png" alt="" class="circle image-student" height="50px" width="50px"> ${start}
              <p class="name-student">${names}  ${last} </p>
              <p><b>Tech:</b> ${(tech * 100).toFixed(0)}%</p>
              <p><b>Soft Skills:</b> ${(soft * 100).toFixed(0)}%</p>
              <p><b>Eng: </b> ${nameEng}</p>
            </div>`;

                // star_border
              }
            }
          }
          $(container).append(template);
        }
        $(pintarSquad(newSq1, '#sq1'));
        $(pintarSquad(newSq2, '#sq2'));
        $(pintarSquad(newSq3, '#sq3'));
        $(pintarSquad(newSq4, '#sq4'));
        $(pintarSquad(newSq5, '#sq5'));
      });
    });
  }

  $('#btn-reorganizar').on('click', function() {
    $('#sq1').empty();
    $('#sq2').empty();
    $('#sq3').empty();
    $('#sq4').empty();
    $('#sq5').empty();
    organizar();
  });
});

// Funcion de mayor a menos
function bubble(arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j][1] < arr[i][1]) {
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

$(document).ready(function() {
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});