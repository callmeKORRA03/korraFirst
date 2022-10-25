// for header


let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.nav-bar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


// for windows scroll

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    } else{
        document.querySelector('.header').classList.remove('active');
    }



    //  // Scroll up button
    const scrollUpBtn = document.querySelector('.scrollUp-btn');
  
    if(scrollY > 250){
      scrollUpBtn.classList.add("scrollUpBtn-active");
    }else{
      scrollUpBtn.classList.remove("scrollUpBtn-active");
    }




    // Nav link indicator

  const sections = document.querySelectorAll('section[id]');
  sections.forEach(section =>{
    const sectionHeight = section.offsetHeight,
          sectionTop = section.offsetTop - 100;

          let navId = document.querySelector(`.nav-bar a[href='#${section.id}']`);
          if(scrollY > sectionTop && scrollY <=  sectionTop + sectionHeight){
            navId.classList.add("active-navlink");           
          }else{
            navId.classList.remove("active-navlink");     
          }
          
         
  });


 
}




  /* BANNER SLIDER
--------------------------------------------*/
//$(document).ready(function(){
    //slider
    var sudoSlider = $("#slider").sudoSlider({
     effect: "fade",
     pause: 3000,
     auto:true,
     continuous:true
   });
//});

// Complete page is fully loaded, including all frames, objects and images
$(window).load(function() {
    // Remove preloader
    // https://ihatetomatoes.net/create-custom-preloading-screen/
    $('body').addClass('loaded');
  });
  


   // visitor counter

   const count = document.getElementById("count");

   incrementVisitsCount();
    
   function incrementVisitsCount(){
    let visits;

    if(!localStorage.getItem("visits"))localStorage.setItem("visits", 1);
    else{
      visits = +localStorage.getItem("visits");
      const incrementCount = visits + 1;

      localStorage.setItem("visits", incrementCount);
    }
    count.innerText = localStorage.getItem("visits")
   }



  //  FOR DATE AND TIME
  function displayDate() {
    var myDate = new Date();
    var year = myDate.getYear();
    if (year < 1000) {
        year += 1900
    }
    var day = myDate.getDay();
    var month = myDate.getMonth();
    var daym = myDate.getDate();
    var dayArray = new Array("Sunday", "Monday", "TuesDay", "WednesDay", "Thursday", "Friday", "Saturday");
    var monthArray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
    if (h == 24) {
        h = 0;
    } else if (h > 12) {
        h = h - 0;
    }

    if (h < 10) {
        h = "0" + h;
    }

    if (m < 10) {
        m = "0" + m;
    }

    if (s < 10) {
        s = "0" + s;
    }

    var myCurrentDate = document.getElementById("OKAY");
    myCurrentDate.textContent = " " +dayArray[day]+ ""  +daym+   ""   + monthArray[month]+  ""  +year +  " | " + h + ":" + m + ":" + s;
    myCurrentDate.innerText = " "   +dayArray[day]+  ""  + daym +   ""   + monthArray[month]+  ""  +year+  " | " + h + ":" + m + ":" + s;

    setTimeout("displayDate()", 1000);
}
displayDate();


    
    
  