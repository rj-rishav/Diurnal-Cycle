document.addEventListener("DOMContentLoaded", function() {
    var dropdown = document.getElementById("theme-color");
    var label = document.getElementById("label")
    dropdown.addEventListener("change", function() {
        let body = document.body;
        let img = document.getElementById("image");
        let changeBtn = document.getElementById("change-btn");
        var selectedValue = dropdown.options[dropdown.selectedIndex].value;
        console.log("Selected value: " + selectedValue);
        if (selectedValue == "night") {
            body.style.backgroundColor = "rgb(43, 42, 44)";
            img.setAttribute("src", "./images/moon.png")
            changeBtn.style.color = "white";
            label.style.color = "white"
        } 
        else if (selectedValue == "day") {
            body.style.backgroundColor = "yellow";
            img.setAttribute("src", "./images/sun.png")
            changeBtn.style.color = "rgb(43, 42, 44)"
            label.style.color = "rgb(43, 42, 44)"
        }
        else if (selectedValue == "dusk") {
            body.style.backgroundColor = "rgb(238, 233, 249)";
            img.setAttribute("src", "./images/dusk-moon.png")
            changeBtn.style.color = "rgb(43, 42, 44)"
            label.style.color = "rgb(43, 42, 44)"
        }
        else{
            body.style.backgroundColor = "rgb(246, 188, 119)";
            img.setAttribute("src", "./images/dawn-sun.png")
            changeBtn.style.color = "rgb(43, 42, 44)"
            label.style.color = "rgb(43, 42, 44)"
        }
    });
});

function changeBg() {

}