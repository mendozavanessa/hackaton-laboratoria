// Referencia a la base de datos
// const dbRefObject = firebase.database().ref();

// // sincronizar cambios
// dbRefObject.on('value', function(snap) {
//   console.log(snap.val());

//   // STUDENTS
//   var students = snap.val();
//   var sq1;
//   var sq2;
//   var sq3;
//   var sq4;
//   var sq5;
//   var aux = 0;

//   students.forEach(function(element, index) {
//     // console.log(element);

//     if (index === 0) {
//       sq1 = element.companeras.sprint_3;
//       sq1.push(index);
//       console.log(sq1);
//       aux++;
//     } else if (index !== 0) {
//       // sq1.find(index);
//       if (sq1.indexOf(index) === -1) {
//         sq2 = element.companeras.sprint_3;
//         console.log(sq2);
//       }
//     }

//   });
//   // // console.log(students[0].companeras.sprint_3);
//   // sq1 = students[0].companeras.sprint_3;
//   // sq1.push(aux);

//   // function Search() {
//   //   for (let index = 1; index < sq1.length; index++) {
//   //     // if ((aux + 1) === sq1[index]) {

//   //     // }

//   //   }
//   // };


//   // console.log(sq1.sort());
//   // console.log(sq1);
//   // sq1.sort(1);



//   // students.forEach(function(element) {
//   //   var arrCompañeras = element.companeras.sprint_3;

//   //   console.log(arrCompañeras);

//   // });
// });

window.addEventListener('load', function () {
  document.addEventListener('dragstart', drag);
  document.addEventListener('dragover', permitirDrop);
  document.addEventListener('drop', drop);

  function drag(event) {
    // console.log(event)
    event.dataTransfer.setData('text', event.target.id);
  }

  function permitirDrop(event) {
    event.preventDefault();
  }

  function drop(event) {
    event.preventDefault();
    console.log(event.target);
    if (event.target.dataset.box === 'marco') {
      let idName = event.dataTransfer.getData('text');
      console.log(idName);
      event.target.appendChild(document.getElementById(idName));
    }
  }

  //  function drag(event) {
  //   // event.dataTransfer.setData('text', event.target.dataset.id);
  //   // console.log(event.dataTransfer.setData)
  // }

  // function drag(event) {
  //   event.dataTransfer.setData('text', event.target.dataset.id);
  //   console.log()
  // }

  // function permitirDrop(event) {
  //   event.preventDefault();
  // }

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