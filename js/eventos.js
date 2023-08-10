var button = document.getElementById("button")
var container = document.getElementById("container")

container.addEventListener("click", function(event) {
    event.stopPropagation()
    alert("Hola!, Soy el div.");
})

button.addEventListener("click", function(event){
    event.stopPropagation()
    alert("Hola!")
})