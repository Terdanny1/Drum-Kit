
var numberofDrumButtons = document.querySelectorAll(".drum").length

for (let i = 0; i < numberofDrumButtons; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        alert("i just got clicked")
    })
    
}




// function handleclick() {
//     alert("i just got clicked")
// }

