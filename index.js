
let screen = document.querySelector(".screen");
let btns = document.querySelectorAll(".button");
let string = "";


//looping through buttons
btns.forEach(btn => {
    //click event listener for each button
    btn.addEventListener("click",(e) => {
        //if clicked button will  be equals
        if(e.target.innerHTML === "=") {
            string = eval(string);
            screen.value = string;
        } else if (e.target.innerHTML === "AC") {
            //if AC button is clicked
            //clear the string
            string="";
            screen.value = string;
        
        } else if(e.target.innerHTML === "DEL"){
            //if  the delete button is clicked
            //it will delete the last digit of the string
            string = string.substring(0, string.length - 1);
            screen.value = string;
        } else {
            //if any other button is clicked
            string += e.target.innerHTML;
            screen.value = string;
        }
    });
});