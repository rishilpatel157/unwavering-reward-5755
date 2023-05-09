let carousel = document.getElementById("secondbottom")
let carousel1 = document.getElementById("fifthbottom")
let API = JSON.parse(localStorage.getItem("api"))||[]


let isdragstart = false,prevpageX , prevScrollLeft;

const dragstart = (e)=> {
    isdragstart =true
    prevpageX = e.pageX
    prevScrollLeft = carousel.scrollLeft
}

const dragging = (e)=> {
    
    if(isdragstart==false)
    {
        return;
    }
    e.preventDefault()
    let positiondiff = e.pageX - prevpageX
    carousel.scrollLeft = prevScrollLeft - positiondiff;
}

const dragstop = () =>{
     isdragstart = false
}
carousel.addEventListener("mousedown",dragstart)
carousel.addEventListener("touchstart",dragstart)

carousel.addEventListener("mousemove",dragging)
carousel.addEventListener("touchmove",dragging)

carousel.addEventListener("mouseup",dragstop)
carousel.addEventListener("mouseleave",dragstop)
carousel.addEventListener("touchend",dragstop)


carousel1.addEventListener("mousedown",dragstart)
carousel1.addEventListener("touchstart",dragstart)

carousel1.addEventListener("mousemove",dragging)
carousel1.addEventListener("touchmove",dragging)

carousel1.addEventListener("mouseup",dragstop)
carousel1.addEventListener("mouseleave",dragstop)
carousel1.addEventListener("touchend",dragstop)

carousel1.addEventListener("touchstart",function(){
    console.log("fifthbottom")
})

let search = document.getElementById("searchbtn")
search.addEventListener("click",function(){
    window.location.href = `http://127.0.0.1:5501/tours.html`
})

console.log(API)