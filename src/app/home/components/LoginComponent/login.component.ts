import { Component, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from './login';
@Component({
    selector: 'login',
    templateUrl: 'login.template.html',
})
export class LoginComponent  {
    model = new Login();
    submitted = false;
    loginProgress: string = 'Log in';
    submit = false;

    //Form submitting
    onSubmit(login: NgForm) : void {
        this.submit = true;
        if(login.form.valid) {
            this.submit = false;
            this.submitted = true;
            this.model = new Login();
            login.reset();
            setTimeout(() => {
                this.submitted = false;
            },3000);
        }
    }
}