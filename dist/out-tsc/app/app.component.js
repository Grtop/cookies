import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
export let AppComponent = class AppComponent {
    constructor(fb, http) {
        this.fb = fb;
        this.http = http;
        this.currency = "$";
        this.form = this.fb.group({
            product: ["", Validators.required],
            name: ["", Validators.required],
            phone: ["", [Validators.required, Validators.pattern(/^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/)]]
        });
    }
    ngOnInit() {
        this.http.get("https://testologia.ru/cookies").subscribe(data => this.productsData = data);
    }
    scrollTo(target, product) {
        target.scrollIntoView({ behavior: "smooth" });
        if (product) {
            this.form.patchValue({ product: product.title + ' (' + product.price + ' ' + this.currency + ')' });
        }
    }
    switchSugarFree(e) {
        this.http.get("https://testologia.ru/cookies" + (e.currentTarget.checked ? '?sugarfree' : ''))
            .subscribe(data => this.productsData = data);
    }
    // переключение валюты в цене
    changeCurrency() {
        let newCurrency = "$";
        let coefficient = 1;
        if (this.currency === "$") {
            newCurrency = "₽";
            coefficient = 90;
        }
        else if (this.currency === "₽") {
            newCurrency = "BYN";
            coefficient = 3;
        }
        else if (this.currency === 'BYN') {
            newCurrency = '€';
            coefficient = 0.9;
        }
        else if (this.currency === '€') {
            newCurrency = '¥';
            coefficient = 6.9;
        }
        this.currency = newCurrency;
        this.productsData.forEach((item) => {
            item.price = +(item.basePrice * coefficient).toFixed(1);
        });
    }
    // валидация формы заказа
    confirmOrder() {
        if (this.form.valid) {
            this.http.post("https://testologia.ru/cookies-order", this.form.value)
                .subscribe({
                next: (response) => {
                    alert(response.message);
                    this.form.reset();
                },
                error: (response) => {
                    alert(response.error.message);
                },
            });
        }
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
//# sourceMappingURL=app.component.js.map