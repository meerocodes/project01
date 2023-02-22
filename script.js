// find target element (icon) and create variable
const darkModeIcon = document.querySelector('i');

// Run click event -> turn into variable

darkModeIcon.addEventListener('click', function(event){

// const toggle = target.classList
    console.log(event)
    const style = document.createElement("style");
    style.innerHTML = `
      .whatIsPlanted{
        background-color: #1a1919;
        color: white;
        }
      .homeBlog {
        background-color: black;
        color: white;
      }
      .about {
        background-color: #1a1919;
        color: white;
      }
      .plantedFounder{
        background-color: black;
        color: white;
      }
      .gallery {
        background-color: #1a1919;
        color: white;
      }
      .blogMain{
        background-color: #1a1919;
        color: white;
      }
      .blogMain aside .asideContent {
        background-color: black;
        color: white;
      }

      .contactPage{
      background-color: black;
      color: white;
      }
      .contactInfo h2{
        color: white;
      }
      .contactInfo ul li{
        color: white;
      }
    `;
    

if (darkModeIcon.classList !== "fa-regular fa-sun"){

    document.head.appendChild(style);
    
    const iElement = event.target;
    console.log(iElement);

    iElement.classList.toggle('fa-moon');
    iElement.classList.toggle('fa-sun');
   
    
    
} else if (darkModeIcon.classList[1] === "fa-sun") {
    document.head.removeChild(style);
}
        // if (event.target.tagName === 'I'){
        
        // const iElement = event.target;
        // console.log(iElement);

        // document.head.appendChild(style);

        // iElement.classList.toggle('fa-moon');
        // iElement.classList.toggle('fa-sun');
        // }
       
        // else if (darkModeIcon.target.classList === 'fa-regular fa-sun'){
            
        //     document.head.removeChild(style);

        // }
        
})
        
    // const darkMode = darkModeIcon.classList
    // console.log(darkMode)




// Create a moon and sun toggle
//   darkMode.classList.toggle('fa-regular far-moon');
//   darkMode.classList.toggle('fa-regular far-sun');

// darkModeIcon.addEventListener('click', function(event){


  
    // iElement.classList.toggle('fa-regular-far-sun');
    // iElement.classList.toggle('fa-regular-far-moon');
    // }


    // HAMBURGER MENU--------------------------------

    const hamburger = document.querySelector('.hamburger')
    const navMenu = document.querySelector('ul')
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');

    })

   document.querySelectorAll('a.navLinks').forEach(n => n.addEventListener('click', ()=> {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")

    }))






// IMAGE CAROUSEL----------------------------------

// Created an Image Carousel with the aid of this youtube video https://www.youtube.com/watch?v=bW8X-tt5AZQ. Taught me about clip-path css property and further helped me understand how to use 'active' as a css property to my advantage.

const slide = document.querySelectorAll('.slide');
const buttons = document.querySelectorAll('.buttn');
let currentSlide = 1;

const imgNav = function(manual){
    console.log(imgNav)

    slide.forEach(function(slides){
        slides.classList.remove('active');

        buttons.forEach(function(clickedButn){
            clickedButn.classList.remove('active')
        });
    });
    slide[manual].classList.add('active');
    buttons[manual].classList.add('active');
}
buttons.forEach((buttn, i) => {
    buttn.addEventListener('click', () => {
        imgNav(i);
        currentSlide = i;
    })
})

// Need to add my JavaScript to either add side buttons OR autoPlay images 


