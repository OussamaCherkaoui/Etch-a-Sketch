var button=document.querySelector('#btnnbr');
var nombreentrer=document.getElementById('nombre');
button.style.cssText="background-color:black; color:white;";
nombreentrer.style.cssText = "background-color:pink;"    
const gridContainer = document.querySelector("#grid-container");
document.addEventListener("DOMContentLoaded", function () {
    for (let i = 0; i < 16 * 16 ; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridContainer.appendChild(gridItem);
        const result =`width: calc(6.25% - 2px);padding-bottom: calc(6.25% - 2px);`;
            gridItem.style.cssText=result;
        gridItem.addEventListener("mouseenter", function () {
            gridItem.style.backgroundColor = "#3498db"; // Change background color on hover
        });
        
        gridItem.addEventListener("mouseleave", function () {
            gridItem.style.backgroundColor = "#ccc"; // Restore the original background color on mouse leave
        });
    }

    button.addEventListener("click", function (event) {
        event.preventDefault();
        gridContainer.innerHTML = "";
    for (let i = 0; i < nombreentrer.value * nombreentrer.value ; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridContainer.appendChild(gridItem);
        var userenter = 100/nombreentrer.value;
        const result =`width: calc(${userenter}% - 2px);padding-bottom: calc(${userenter}% - 2px);`;
            gridItem.style.cssText=result;
        gridItem.addEventListener("mouseenter", function () {
            gridItem.style.backgroundColor = "#3498db"; // Change background color on hover
        });
        
        gridItem.addEventListener("mouseleave", function () {
            gridItem.style.backgroundColor = "#ccc"; // Restore the original background color on mouse leave
        });
    }
    });
});

