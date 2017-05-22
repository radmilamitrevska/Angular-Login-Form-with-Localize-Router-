import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, FormControl } from '@angular/forms';

@Directive({
    selector: '[validateEmail][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => EmailValidator), multi: true }
    ]
})
export class EmailValidator {

    validator: Function;

    constructor() {
        this.validator = this.validateEmailFactory();
    }

    validate(c: FormControl) {
        return this.validator(c);
    }

    protected validateEmailFactory() {
        return (c: FormControl) => {
            let EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if(c.value) {
                return EMAIL_REGEXP.test(c.value) ? null : {
                    validateEmail: {
                        valid: false
                    }
                };
            } else {
                return null;
            }

        };
    }
}