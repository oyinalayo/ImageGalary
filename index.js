const element1 = document.querySelectorAll(".img1");
const element2 = document.querySelectorAll(".img2");
const element3 = document.querySelectorAll(".img3");
const element4 = document.querySelectorAll(".img4");
const element5 = document.querySelectorAll(".img5");
const element6 = document.querySelectorAll(".img6");
const element7 = document.querySelectorAll(".img7");
const element8 = document.querySelectorAll(".img8");


element1.forEach(element => {
    element.addEventListener("click", (e)=> {
        element.style.color = "red"
        element.style.background = "blue"
    });   
});
element2.forEach(element => {
    element.addEventListener("click", (e)=> {
        element.style.color = "blue";
        element.style.background = "red"
    });
});
element3.forEach(element => {
    element.addEventListener("click", (e)=> {
        element.style.color = "green"
        element.style.background = "yellow"
    });  
});
element4.forEach(element => {
    element.addEventListener("click", (e)=> {
        element.style.color = "orange"
        element.style.background = "maroon"
    });  
});
element5.forEach(element => {
    element.addEventListener("click", (e)=> {
        element.style.color = "magenta"
        element.style.background = "violet"
    });  
});
element6.forEach(element => {
    element.addEventListener("click", (e)=> {
        element.style.color = "pink"
        element.style.background = "grey"
    });  
});
element7.forEach(element => {
    element.addEventListener("click", (e)=> {
        element.style.color = "yellow"
        element.style.background = "red"
    });  
});
element8.forEach(element => {
    element.addEventListener("click", (e)=> {
        element.style.color = "indigo"
        element.style.background = "black"
    });  
});