window.addEventListener(
    "keydown",
    (event)=>{
        if(event.key == "Enter"){
            document.body.style.background = "lightblue"

        }

        if(event.key == "Enter" && event.metaKey ){
            document.body.style.background = "orange"
        }
    }
)


window.addEventListener(
    "keyup", 
    ()=>{
        document.body.style.background = "white"
})