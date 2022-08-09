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

