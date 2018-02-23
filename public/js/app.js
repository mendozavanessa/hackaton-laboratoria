window.addEventListener('load', function () {
  const dbRefObject = firebase.database().ref();

  organizar();

  function organizar() {
    // sincronizar cambios
    dbRefObject.on('value', function (snap) {
      console.log(snap.val());

      // STUDENTS
      var students = snap.val();
      var sq1 = [];
      var sq2 = [];
      var sq3 = [];
      var sq4 = [];
      var sq5 = [];
      var arrStudiantesProm = [];
      students.forEach(function (element) {
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
      console.log(sq1);
      var newSq1 = [
        [sq1[0]][0][0][0],
        [sq1[1]][0][0][0],
        [sq1[2]][0][0][0],
        [sq1[3]][0][0][0],
        [sq1[4]][0][0][0],
        [sq1[5]][0][0][0]
      ];
      var newSq2 = [
        [sq2[0]][0][0][0],
        [sq2[1]][0][0][0],
        [sq2[2]][0][0][0],
        [sq2[3]][0][0][0],
        [sq2[4]][0][0][0],
        [sq2[5]][0][0][0]
      ];
      var newSq3 = [
        [sq3[0]][0][0][0],
        [sq3[1]][0][0][0],
        [sq3[2]][0][0][0],
        [sq3[3]][0][0][0],
        [sq3[4]][0][0][0],
        [sq3[5]][0][0][0]
      ];
      var newSq4 = [
        [sq4[0]][0][0][0],
        [sq4[1]][0][0][0],
        [sq4[2]][0][0][0],
        [sq4[3]][0][0][0],
        [sq4[4]][0][0][0],
        [sq4[5]][0][0][0]
      ];
      var newSq5 = [
        [sq5[0]][0][0][0],
        [sq5[1]][0][0][0],
        [sq5[2]][0][0][0],
        [sq5[3]][0][0][0],
        [sq5[4]][0][0][0],
        [sq5[5]][0][0][0]
      ];

      console.log(newSq2);

      function obtenerSprint() {
        sprintNew = (Object.keys(students[0].soft_skills)).length + 1;
        return sprintNew;
      }
      // cambiar el ultimo sprint
      document.getElementById('number-sprint').textContent = obtenerSprint();

      // agregando al DOM
      dbRefObject.on('value', function (snapshot) {
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
                
                if(tech>0.7){
                  start+= '<i class="material-icons tiny star">star</i>';
                }
                if(soft>0.7) {
                  start+= '<i class="material-icons tiny star">star</i>';
                }
                if(eng>1) {
                  start+= '<i class="material-icons tiny star">star</i>';
                }

                // console.log(start);



                template += `<div id="${squead[i]}" class="col m4 mt-5 " draggable=true>
              <img src="assets/img/user.png" alt="" class="circle image-student" height="50px" width="50px"> ${start}
              <p class="name-student">${names}  ${last} </p>
              <p><b>Tech:</b> ${tech}</p>
              <p><b>Soft Skills:</b> ${soft}</p>
              <p><b>Eng: </b> ${eng}</p>
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