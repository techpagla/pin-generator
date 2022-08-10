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

var pin;
var inputPin = document.getElementById('input-pin');
document.getElementById('pin-generate').addEventListener('click', function(){
    const pin =validPin();
    inputPin.value = pin; 
    input.value = '';
    pinMatchText.style.display = 'none';
        pinNotMatchText.style.display = 'none';
    return pin;
    
});

                //get keyboaboard value by press
 var sum;       
 var input =document.getElementById('input-key');        
document.getElementById('all-keyboard').addEventListener("click", function(event){
    var keyValue = event.target.innerText;
    
    if(isNaN(keyValue)){
        if(keyValue == 'C'){
            input.value = '';
        }
    }
    else {
       sum = input.value +  keyValue;
        input.value = sum;
        // var sum = inputValue +  keyValue;
        

    }
    return sum;
});
var tryNum = 0;
var actionLeft = document.getElementById('action-left');
var parentActionLeft = document.getElementById('parent-action-left');
var pinMatchText = document.getElementById('pin-match-text');
var pinNotMatchText = document.getElementById('pin-not-match-text');

document.getElementById('submit-btn').addEventListener("click", function(){
    tryNum = tryNum+1;
    var actionLeftValue = parseFloat(actionLeft.innerText);
    actionLeftValue = actionLeftValue - 1;
    actionLeft.innerText = actionLeftValue;
    if(input.value == inputPin.value){
        console.log('success');
        parentActionLeft.remove();
        pinMatchText.style.display = 'block';
        pinNotMatchText.style.display = 'none';
        // window.location.href = "https://www.youtube.com/watch?v=ODIHw8NvhEE";
       
    }
    else {
        console.log('something is wrong');
        input.value = '';
        pinNotMatchText.style.display = 'block';
        if(tryNum == 3 && actionLeftValue == 0){
            console.log('try is over');
            inputPin.value = '';
            pinNotMatchText.style.display = 'none';
           
            // window.location.href = "http://127.0.0.1:5500/index.html";
        }

    }
});
   

            //third commits
