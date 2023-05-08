const dataAPI = JSON.parse( localStorage.getItem("api") ) || []  ;

console.log( dataAPI )  ;

const ul = document.getElementById("package-list")  ;


window.addEventListener( "load" , function()
{
    // ul.innerHTML = null  ;

    for( let key in dataAPI )
    {
        ul.append( display_card( dataAPI[key] ) ) ;
    }
}  )

function display_card( data )
{
    const li = document.createElement("li")  ;

    const package_card = document.createElement("div")  ;
    package_card.className = "package-card"  ;

    const figure = document.createElement("figure")  ;
    figure.className = "card-banner"  ;

    const img = document.createElement("img")  ;
    img.src = data[0].cardImage  ;

    figure.append( img )  ;
   
    const card_content = document.createElement("div")  ;
    card_content.className = "card-content"  ;

    const h3 = document.createElement("div")  ;
    h3.className = "h3 card-title"  ;
    h3.textContent = data[0].cardTitle  ;

    const card_text = document.createElement("p")  ;
    card_text.className = "card-text"  ;
    card_text.textContent = data[0].city  ;

    const card_meta_list = document.createElement("ul")  ;
    card_meta_list.className = "card-meta-list"  ;

    const card_meta_item = document.createElement("li")  ;
    card_meta_item.className = "card-meta-item"  ;

    const meta_box = document.createElement("div")  ;
    meta_box.className = "meta-box"  ;

    const ion_icon =  document.createElement("ion-icon")  ;
    ion_icon.name = "time"  ;
    
    const time =  document.createElement("p")  ;
    time.className = "text"  ;
    time.textContent = data[0].period  ;

    meta_box.append( ion_icon , time )  ;

    const card_meta_item1 = document.createElement("li")  ;
    card_meta_item1.className = "card-meta-item"  ;

    const meta_box1 = document.createElement("div")  ;
    meta_box1.className = "meta-box"  ;

    const ion_icon1 =  document.createElement("ion-icon")  ;
    ion_icon1.name = "location"  ;
    
    const location =  document.createElement("p")  ;
    location.className = "text"  ;
    location.textContent = data[0].stateName  ;

    meta_box1.append( ion_icon , location )  ;

    card_meta_item.append( meta_box1 , meta_box )  ;

    card_meta_list.append( card_meta_item )  ;

    card_content.append( h3 , card_text , card_meta_list )  ;

    const card_price = document.createElement("div")  ;
    card_price.className = "card-price"  ;

    const wrapper = document.createElement("div")  ;
    wrapper.className = "wrapper"  ;

    const price = document.createElement("p")  ;
    price.className = "price"  ;
    price.textContent = `₹${data[0].cost}`  ;


    card_price.append( wrapper , price )  ;

    package_card.append( figure , card_content , card_price )  ;
    
    li.append( package_card )  ;
    return li  ;
}