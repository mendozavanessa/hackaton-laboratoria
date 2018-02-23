window.addEventListener('load', function() {
  document.addEventListener('dragstart', drag);
  document.addEventListener('dragover', permitirDrop);
  document.addEventListener('drop', drop);
  var boxMarco = document.querySelectorAll('.dropheigth');
  
  function drag(event) {
    console.log(event);
    event.dataTransfer.setData('text', event.target.id);
  }
  
  function permitirDrop(event) {
    event.preventDefault();

  }
  
  function drop(event) {
    event.preventDefault();
    // console.log(event.target);

    if (event.target.dataset.box === 'marco') {
      let idName = event.dataTransfer.getData('text');
      // console.log(idName);
      event.target.appendChild(document.getElementById(idName));
    }
  }

  
});
    