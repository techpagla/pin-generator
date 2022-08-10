function validPin() {
    const pin = Math.round(Math.random()*10000);
    const sum = pin + '';

    if(sum.length == 4){
        console.log(pin);
       return pin;
    }
    //if digit length is not 4, return the function again
    else {
        return validPin();
    }  
}


document.getElementById('pin-generate').addEventListener('click', function(){
    const pin =validPin();
    document.getElementById('input-pin').value = pin; 
});

                //get keyboaboard value by press
document.getElementById('all-keyboard').addEventListener("click", function(event){
    var keyValue = event.target.innerText;
    var input =document.getElementById('input-key');
    if(isNaN(keyValue)){
        if(keyValue == 'C'){
            input.value = '';
        }
    }
    else {
        input.value = input.value +  keyValue;
        // var sum = inputValue +  keyValue;

    }
});
//third commits
