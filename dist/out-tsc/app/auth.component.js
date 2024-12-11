import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
export let LoginComponent = class LoginComponent {
    confirmOrder() {
        throw new Error('Method not implemented.');
    }
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    onSubmit() {
        console.log(this.loginForm.value);
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-auth',
        templateUrl: './auth.component.html',
        styleUrls: ['./app.component.css']
    })
], LoginComponent);
//# sourceMappingURL=auth.component.js.map