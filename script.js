var answerDiv = document.querySelector('#answer');
var operation = $( "#operation option:selected" ).text();
var num1 = $( "#num1" ).val();
var num2 = $( "#num2").val();
var answer = NaN;

function calculateNumber() {
            if (num2 === 0 && operation === 'divide') {
                alert('Cannot divide by zero');
            }
            if (operation === 'add') {
                answer = addNumbers(num1, num2);
            } else if (operation === 'subtract') {
                answer = subtractNumbers(num1, num2);
            } else if (operation === 'multiply') {
                answer = multiplyNumbers(num1, num2);
            } else if (operation === 'divide') {
                answer = divideNumbers(num1, num2);  
            }
   
            answerDiv.innerHTML = '<h3>' + answer + </h3>;
 };
                          
function addNumbers(num1, num2) {
    return num1 + num2;
        }

        function subtractNumbers(num1, num2) {
            return num1 - num2;
        }

        function multiplyNumbers(num1, num2) {
            return num1 * num2;
        }

        function divideNumbers(num1, num2) {
            return num1 / num2;
        }


                          
                          
                          
                         
        
        
