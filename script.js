let string ="";
var count = 0;
let tap = new Audio("tap.wav");
let equals = new Audio("equals.wav");
let clear = new Audio('click.wav');
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '=' ){
            if(string[0]!='/' && string[0]!= '*' && string[0]!= '-' && string[0]!= '+' && string[0]!='%'){
                string = eval(string);
                document.querySelector('input').value = string;
                equals.play();
            }
            else{
                string = "Syntax Error";
                document.querySelector('input').value = string;
                string= "";
                equals.play();
            }
        }
        else if(e.target.innerHTML == 'C'){
            string = ""
            document.querySelector('input').value = string;
            clear.play();
        }
        else if(e.target.innerHTML == '+/-'){
            string = -1*string;
            document.querySelector('input').value = string;
            tap.play();
        }
        else if(e.target.innerHTML == '( )'){
            if(count == 0){
                string += "(";
                document.querySelector('input').value = string;
                count = 1;
                tap.play();
            }
            else{
                string += ")";
                document.querySelector('input').value = string;
                count = 0;
                tap.play();
            }
        }
        else{
            console.log(e.target);
            string = string +e.target.innerHTML;
            document.querySelector('input').value = string;
            tap.play();
        }
    })
})