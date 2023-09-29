const Hints = document.querySelector('.hints'),
Input = document.querySelector('input'),
Button = document.querySelector('button'),
Chance = document.querySelector('span')

RandomNUmber = Math.floor(Math.random() * 100)

ChanceLeft = 10

Input.focus()

Button.addEventListener('click',()=>{

    inputvalue = Input.value

    ChanceLeft--
    console.log(RandomNUmber)
    console.log(ChanceLeft)

    Input.focus()
    Input.value = ""

    if (inputvalue == RandomNUmber){
        [Hints.textContent,Input.disabled] = ["CORRECT",true];
        [Button.textContent, Hints.style.color] = ["Replay","green"];
        [Chance.textContent] = [ChanceLeft]
    }else if (inputvalue > RandomNUmber  && inputvalue < 100){
        [Hints.textContent,Hints.style.color] = ["Your guess in High",'#4a7ff0'];
        [Chance.textContent] = [ChanceLeft];
    }else if (inputvalue < RandomNUmber && inputvalue > 0 ){
        [Hints.textContent,Hints.style.color] = ["Your guess in Low",'deeppink'];
        [Chance.textContent] = [ChanceLeft];
    }else{
        [Hints.textContent,Hints.style.color] = ["Invalid",'#dc143c'];
        [Chance.textContent] = [ChanceLeft];
    }

    if (ChanceLeft == 0){
        [Input.disabled,Hints.textContent,Hints.style.color] = [true,"You are lost the game","#dc143c"]
    }
    if (ChanceLeft <= 0){
        window.location.reload();
    }


});


