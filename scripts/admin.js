let dataAPI = JSON.parse(localStorage.getItem("api"))||[]
let highlight = document.getElementById("highlight")
let containerhighlight = document.getElementById("containerhighlight")
let containerdays = document.getElementById("containerdays")
let days = document.getElementById("days")
const states = document.getElementById("states")
const cardTitle = document.getElementById("cardTitle");
const cardImg = document.getElementById("cardImg");
const cities = document.getElementById("cities");
const cost = document.getElementById("cost");
const period = document.getElementById("period");
const cardLargeImg = document.getElementById("cardLargeImg");
const overview = document.getElementById("overview");

const container = document.getElementById("container");
const btn = document.getElementById("btn");


highlight.addEventListener("change",function(){
    inputs(containerhighlight,highlight.value,"inphighlight")
})
days.addEventListener("change",function(){

       containerdays.textContent = ""
    for(let i = 0;i<days.value*2;i++)
    {
        
        let inp = document.createElement("input")
        inp.setAttribute("class","inpdays")
        inp.setAttribute("placeholder",`Day :- ${Math.floor(i/2)+1}`)
        inp.setAttribute("required","")
        containerdays.append(inp)
       
    }
   })
   
    var api = dataAPI
   

form.addEventListener("submit",function(e){
    e.preventDefault()
        display(container)
    })
    


   function display(div)
   {
    container.style.display = "block"
    div.innerHTML = null
        
     let state = document.createElement("h4")
     state.innerText = `State Name :- ${states.value}`
     
     let titledis = document.createElement("h4")
     titledis.innerText = `Tour Title :- ${cardTitle.value}`

     let imgdis = document.createElement("img")
      imgdis.setAttribute("src",cardImg.value)
      
      let citiesdis = document.createElement("h4")
      citiesdis.innerText = `Tour Cities :- ${cities.value}`
      
      let costdis = document.createElement("h4")
      costdis.innerText = `Tour Cost :- ${cost.value}`
      
      let perioddis = document.createElement("h4")
      perioddis.innerText = `Tour Period :- ${period.value}`
      
      let imgbigdis = document.createElement("img")
      imgbigdis.setAttribute("src",cardLargeImg.value)
      imgbigdis.setAttribute("id","cardLargeImg")

     let overviewdis = document.createElement("p")
     overviewdis.innerText = `Tour Overview :- ${overview.value}`
     
     let highdis = document.querySelectorAll(".inphighlight")

     let highhead = document.createElement("h4")
     highhead.innerText = "trip Hightlighs"
  let highlightsArr = []
      for(let i = 0;i<highlight.value;i++)
      {
        let p = document.createElement("p")
        p.innerText = `${i+1} :- ${highdis[i].value}` 
        highhead.append(p)
        highlightsArr.push(highdis[i].value)
      }

      let daysdis = document.querySelectorAll(".inpdays")
      let dayshead = document.createElement("h4")
         dayshead.innerText = "Itinerary Details"
         dayshead.setAttribute("id","dayshead")

         let daysArr = []

      for(let i = 0;i<days.value*2;i++)
      {
                  
        let p1 = document.createElement("p")
        p1.innerText = `${i+1} :- ${daysdis[i].value}` 
        dayshead.append(p1)
        daysArr.push(daysdis[i].value)
      }
      let button = document.createElement("button")
      button.innerText = "Submit"
      div.append(state,titledis,imgdis,citiesdis,costdis,perioddis,imgbigdis,overviewdis,highhead,dayshead,button) 
      let obj = {}
      
      obj.stateName = states.value
      obj.cardTitle = cardTitle.value
      obj.cardImage = cardImg.value
      obj.city = cities.value
      obj.cost = cost.value
      obj.period = period.value
      obj.cardbigImage = cardLargeImg.value
      obj.overview = overview.value
      obj.tripHighlights = highlightsArr
      obj.days = daysArr
      
     button.addEventListener("click",function(){
         if(confirm("Do you want to add data")==true)
         {
             api.push(obj)
            document.getElementById("form").reset()
            container.innerHTML = ""
             console.log(api)
             localStorage.setItem("api",JSON.stringify(api))
            }
            container.style.display = "none"
        })
        
    }
    console.log(api)

function inputs(div,inputs,className)
{
    div.innerHTML = ""
    for(let i = 0;i<Number(inputs);i++)
    {
        
        let inp = document.createElement("input")
        inp.setAttribute("class",className)
        inp.setAttribute("placeholder",i+1)
        inp.setAttribute("required","")
        div.append(inp)
       
    }
}

console.log(api)