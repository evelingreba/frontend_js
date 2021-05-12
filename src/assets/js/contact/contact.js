export default class Contact {
    constructor() {
        this.form = document.querySelector('.js-form-validate');
        this.email = document.querySelector('.js-contact__email');
        this.required = document.querySelectorAll('.js-data-required');
        this.emailValidateResult = document.querySelector('.js-contact__email-validate');
    }

    validate() {
        let isValid;
        let requiredValidate = document.querySelectorAll('.js-contact__required-validate');
        this.required.forEach(function (item, i) {
            debugger;
            let text = requiredValidate[i];
            isValid = true;
            if ((item.type !== "checkbox" && item.value !== "") || (item.type === "checkbox" && item.checked === true)) {
                if (item.type === 'email') {
                    let isEmailValid = /\S+@\S+\.\S+/.test(item.value);
                    if (!isEmailValid) {
                        text.value = "Please, enter a correct email. For example johndoe@example.com";
                        text.textContent = "Please enter a correct email. For example johndoe@example.com";
                        text.style.color = "red";
                        isValid = false;
                    }
                }
            } else {
                isValid = false;
                text.value = "This field is required";
                text.textContent = "This field is required";
                text.style.color = "red";
            }
            if (isValid) {
                text.value = '';
                text.textContent = '';
            }
            return isValid;
        });
        if(isValid === true) {
            this.form.submit();
        }
    }
}

