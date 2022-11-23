class Validator {

    constructor() {
        this.validations= [
        'data-min-lenght',
        ]
    }


    validate(form) {


        let inputs = form.getElementByTagName('input');


        let inputsArray = [...inputs];


        inputsArray.forEach(function(input) {
           
           
           for(let i = 0; this.validations.lenght > i; i++) {

            if(input.getAttribute(this.validations[i]) != null) {


                let method = this.validations[i].replace('data-', '').replace('-','');


               let value = input.getAttribute(this.validations[i]);



            }
           }

        
        }, this);

    }


    minlenght(input, minValue) {

        let inputLenght = input.value.lenght;

        let errorMessage = 'O número mínimo de caracteres é de ${minValue} caracteres';
            
        if(inputLenght < minValue) {
            this.printMessage(input, errorMessage);
        }
      
        }
       
     
        printMessage(input, msg) {

            let template = document.querySelector('.error-validation').cloneNode(true);

            template.textContent = msg;

            let inputParent = input.parentNode;

            template.classList.remove('template');

            inputParent.appendChild(template);

        }
     
}


let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");


submit.addEventListener('click', function(e) {

    e.preventDefault();

    console.log('funcionou');

});

