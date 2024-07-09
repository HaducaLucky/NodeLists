//! NodeList = Static collection of HTML elements by (id, class, element)
//?            Can be created by using querySelectorAll()
//*            Similar to an array, but no (map, filter, reduce)
//!            NodeList won't update to automatically reflect changes

let buttons = document.querySelectorAll(".myButtons");

//TODO: ADD HTML/CSS PROPERTIES 

// buttons.forEach(button => {
//     button.style.backgroundColor = "green";
//     button.textContent += "😀";
// });

//TODO: CLICK event listener

// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         event.target.style.backgroundColor = "tomato";
//     });
// });

//TODO: MOUSEOVER + MOUSEOUT event listener

// buttons.forEach(button => {
//     button.addEventListener("mouseover", event => {
//         event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
//     });
// });

// buttons.forEach(button => {
//     button.addEventListener("mouseout", event => {
//         event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
//     });
// });

//TODO: ADD AN ELEMENT

// const newButton = document.createElement("button"); //! STEP 1
// newButton.textContent = "Button 5"; //! STEP 2
// newButton.classList = "myButtons";
// document.body.appendChild(newButton); //! STEP 3

//? kung titignan kasi walang Button 5 samay inspect+console, so para maidagdag, here's how...
// buttons = document.querySelectorAll(".myButtons");

// console.log(buttons);

//TODO: REMOVE AN ELEMENT

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons);
    });
});