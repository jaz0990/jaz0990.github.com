(function(){
	
    "use strict";
    const cow = document.getElementById('img1');    
    setTimeout( function(){ cow.setAttribute("class", "two"); }, 2000 );

    const p = document.querySelector('#overlay p');
    const close = document.querySelector('#close');
    const milk = document.getElementById('sec2');
    const cowImg = document.getElementById('sec1');
    const cheese = document.getElementById('sec3');

    milk.addEventListener('click', function() {
    overlay.style.display = 'block';
    p.innerHTML = 'It produces blue milk';
    })
    cowImg.addEventListener('click', function() {
    overlay.style.display = 'block';
    p.innerHTML = 'Have you ever seen a blue cow?';
    })
    cheese.addEventListener('click', function() {
    overlay.style.display = 'block';
    p.innerHTML = 'And it also produces cheese! but somehow it is yellow'
    })
      close.addEventListener('click', function() {
        overlay.style.display = "none";
      })

}());// end closure
  