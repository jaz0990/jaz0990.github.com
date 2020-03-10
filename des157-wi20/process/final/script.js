( function (){

    "use strict"

        //----------->PHOTO SWITCH<------------------
        const image = document.getElementById('img');
        let images = ["images/plants1.png", "images/plants2.png", "images/plants3.png", "images/plants4.png", "images/plants5.png"], i = 0;

        function photoSwitch() {
            i<images.length-1? i+=1: i=0;
            image.src = images [i];
        }
        setInterval(photoSwitch, 18000);



        //----------->SLIDER CONTROL<------------------
        const slider = document.getElementById("myRange");
        const output = document.getElementById("slide");
        output.innerHTML = slider.value; // Display the default slider value
        // Update the current slider value (each time you drag the slider handle)
        slider.oninput = function() {
        output.innerHTML = this.value + ":00";

        }

        //----------->BUTTON START<------------------
        const timeLeft = document.getElementById('timer');
        const btn = document.querySelector('button');

        btn.addEventListener('click', function(){
            timeLeft.innerHTML

        });

        //----------->TEXT CHANGE<------------------
        
        const text = document.getElementById("info");
        let counter = 0;
     
        const titles = [
            "Did you know?<br> A large tree can consume 100 gallons of water from the ground in a day, and a giant sequoia can drink 500 gallons",
            "Did you know?<br> Pine trees can grow on every continent except antarctica",
            "Did you know?<br> Trees can improve water quality by slowing and filtering rainwater",
            "Did you know?<br> The largest tree in the world is a giant sequoia, the tree is about 52,500 cubic feet in volume"
        ];
        
        setInterval(function(){
            counter++;
            if (counter > titles.length-1){
                counter = 0;
            }
            text.innerHTML=titles[counter];

        }, 10000);

}());