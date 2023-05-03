const images = [
    {image:'img/01.webp' ,title:'Marvel\'s Spiderman Miles Morale',text:'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.'                                ,}, 
    {image:'img/02.webp' ,title:'Ratchet & Clank: Rift Apart'     ,text:'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.'                                                          ,}, 
    {image:'img/03.webp' ,title:'Fortnite'                        ,text:"Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos."        ,}, 
    {image:'img/04.webp' ,title:'Stray'                           ,text:'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city'                                                      ,}, 
    {image:'img/05.webp' ,title:"Marvel's Avengers"               ,text:'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',}];

const carouselPreview = document.getElementById("carouselPreview")
const carouselMain    = document.getElementById("carouselMain")

let slideElements = document.getElementsByClassName("cardImg");
let currentSlide = 0;

images.forEach((element, index) => {
    carouselPreview.innerHTML += `<img class="preview" src="./${element.image}" alt="">`
    if (index == 0){
        carouselMain.innerHTML    += `<div class="cardImg"><img src="./${element.image}" alt=""><div id="imgDescription"><h1>${element.title}</h1><p>${element.text}</p></div></div>` 
    }else{
        carouselMain.innerHTML    += `<div class="cardImg cover"><img src="./${element.image}" alt=""><div id="imgDescription"><h1>${element.title}</h1><p>${element.text}</p></div></div>` 
        
    }
    
})

const buttonUp   = document.getElementById("imgUp")
const buttonDown = document.getElementById("imgDown")

buttonDown.addEventListener("click", function(){
    
    console.log("Current Slide: ", currentSlide);

    if(currentSlide < images.length-1) {
        for (let c = 0; c < images.length; c++) {
            const slide = slideElements[c];

            if(c == currentSlide+1 ) {
                slide.classList.remove("cover");
            } else {
                slide.classList.add("cover");
            }
        }
        
        currentSlide++;
    } else {
        let lastSlide = slideElements [images.length-1]
        lastSlide.classList.add("cover");
        let firstSlide =  slideElements [0]
        firstSlide.classList.remove("cover");
        currentSlide = 0
    }
});


buttonUp.addEventListener("click", function(){

    console.log("Current Slide: ", currentSlide);


    if(currentSlide>0) {
        for (let c = 0; c < slideElements.length; c++) {
                const slide = slideElements[c];

            if(c == currentSlide-1 ) {
                slide.classList.remove("cover");
            } else {
                slide.classList.add("cover");
            }
        }
        
        currentSlide--;
    } else {
        let lastSlide = slideElements [images.length-1]
        let firstSlide =  slideElements [0]
        firstSlide.classList.add("cover");
        lastSlide.classList.remove("cover");
        currentSlide = images.length-1
    }

});
