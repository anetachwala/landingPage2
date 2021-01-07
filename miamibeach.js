const abc = ["x", "y", "z", "c", "g", "b", "d", "h"];
const button = document.querySelector(".btn1-code");
const phoneNumber = document.querySelector("#number");
const warning = document.querySelector("#your-code");
const yourCode = "Your code: ";






button.addEventListener("click", function(){
    const number = phoneNumber.value;
    const numbers = /^[0-9]*$/;
    console.log(typeof(number));
    if((number.length < 9) || !(number.match(numbers))) {
        warning.style.color = "red";
        warning.textContent = "wrong number!";
    }
    else {
        function randomAbc(){
            return Math.floor(Math.random() * 8);  
        }
        const letter = abc[randomAbc()];
        warning.style.color = "black";
        warning.textContent = yourCode + number[1] + number[3] + number[5] + letter + number[7];
    }
    
    
})
    
