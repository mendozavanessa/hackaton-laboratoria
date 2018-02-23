// Referencia a la base de datos
const dbRefObject = firebase.database().ref();

// sincronizar cambios
dbRefObject.on('value', function(snap) {
  console.log(snap.val());

  // STUDENTS
  var students = snap.val();
  var sq1;
  var sq2;
  var sq3;
  var sq4;
  var sq5;
  var aux = 0;

  students.forEach(function(element, index) {
    // console.log(element);

    if (index === 0) {
      sq1 = element.companeras.sprint_3;
      sq1.push(index);
      console.log(sq1);
      aux++;
    } else if (index !== 0) {
      // sq1.find(index);
      if (sq1.indexOf(index) === -1) {
        sq2 = element.companeras.sprint_3;
        console.log(sq2);
      }
    }
    
  });
  // // console.log(students[0].companeras.sprint_3);
  // sq1 = students[0].companeras.sprint_3;
  // sq1.push(aux);

  // function Search() {
  //   for (let index = 1; index < sq1.length; index++) {
  //     // if ((aux + 1) === sq1[index]) {

  //     // }
      
  //   }
  // };


  // console.log(sq1.sort());
  // console.log(sq1);
  // sq1.sort(1);



  // students.forEach(function(element) {
  //   var arrCompañeras = element.companeras.sprint_3;

  //   console.log(arrCompañeras);

  // });
});

