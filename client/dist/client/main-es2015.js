(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-product/admin-product.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-product/admin-product.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<error-handler [errorHandler]=\"statusError\"></error-handler>\n\n<ng-container *ngIf=\"auth.isAuthenticated && auth.role == 'ADMIN'\">\n<h4>Produkty</h4>\n\n<button class=\"btn btn-success\" [routerLink]=\"['/add-product']\"> Dodaj nowy produkt</button>\n\n\n    <table class=\"table table-striped\">\n        <thead>\n          <tr>\n            <th scope=\"col\">lp</th>\n            <th scope=\"col\">rodzaj</th>\n            <th scope=\"col\">marka</th>\n            <th scope=\"col\">dostępna ilość</th>\n            <th scope=\"col\">cena</th>\n            <th scope=\"col\"></th>\n            <th scope=\"col\"></th>\n            <th scope=\"col\"></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let p of product let i = index;\">\n            <th scope=\"row\">{{i+1}}</th>\n            <td>{{p.product_type}}</td>\n            <td>{{p.product_mark}}</td>\n            <td>{{p.product_amount_available - p.product_amount_sold}} szt.</td>\n            <td>{{p.product_price}} zł</td>\n            <td><button class=\"btn btn-primary\" [routerLink]=\"['/product', p.product_id]\">podgląd</button></td>\n            <td><button class=\"btn btn-info\" [routerLink]=\"['/edit-product', p.product_id]\">edytuj</button></td>\n            <td><button class=\"btn btn-danger\" [routerLink]=\"['/delete-product', p.product_id]\">usuń</button></td>        \n          </tr>\n        </tbody>\n      </table>\n</ng-container>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin/admin.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin/admin.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"auth.isAuthenticated && auth.role == 'ADMIN'\">\n    <h3>Panel administracyjny</h3>\n\n<div class=\"row\">\n    <div class=\"col-4\">\n        <div class=\"item\">\n            <a [routerLink]=\"['/zamowienia-admin']\">\n                <div class=\"card\" style=\"width: 12rem;\">\n                    <img src=\"../../../assets/img/order.png\" class=\"card-img-top\" alt=\"order\">\n                    <div class=\"card-body my-card-body\">\n                        <h4 class=\"card-title\">Zamówienia</h4>\n                    </div>\n                </div>\n            </a>\n        </div>\n    </div>\n\n    <div class=\"col-4\">\n        <div class=\"item\">\n            <a [routerLink]=\"['/panel-administracyjny-produkty']\">\n                <div class=\"card\" style=\"width: 12rem;\">\n                    <img src=\"../../../assets/img/product.png\" class=\"card-img-top\" alt=\"product\">\n                    <div class=\"card-body my-card-body\">\n                        <h4 class=\"card-title\">Produkty</h4>\n                    </div>\n                </div>\n            </a>\n        </div>\n    </div>\n\n    <div class=\"col-4\">\n        <div class=\"item\">\n            <a [routerLink]=\"['/users']\">\n                <div class=\"card\" style=\"width: 12rem;\">\n                    <img src=\"../../../assets/img/users.png\" class=\"card-img-top\" alt=\"users\">\n                    <div class=\"card-body my-card-body\">\n                        <h4 class=\"card-title\">Użytkownicy</h4>\n                    </div>\n                </div>\n            </a>\n        </div>\n    </div>\n\n</div>\n\n</ng-container>\n\n<ng-container *ngIf=\"!auth.isAuthenticated || (auth.isAuthenticated && auth.role != 'ADMIN')\">\n    <h4>Brak uprawnień</h4>\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-content\">\n    <menu></menu>\n    <router-outlet></router-outlet>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/change-email/change-email.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/change-email/change-email.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Zmiana adresu e-mail</h3>\n\n<ng-container *ngIf=\"auth.isAuthenticated\">\n\n    <ng-container *ngIf=\"!passwordConfirm\">\n        <div class=\"form\">\n            <form [formGroup]=\"confirmPasswordForm\" (submit)=\"confirmPassword()\">\n                <ng-container *ngIf=\"valid\">\n                    <div class=\"alert alert-danger\" role=\"alert\">\n                         Wypełnij puste pole\n                    </div>\n                </ng-container>\n            \n                <ng-container *ngIf=\"!correctPassword\">\n                    <div class=\"alert alert-danger\" role=\"alert\">\n                        Niepoprawne hasło\n                    </div>\n                </ng-container>\n                <div class=\"form-group\">\n                    <label for=\"Password\">Podaj hasło do swojego konta</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"password\">\n                    <validation-feedback [control]=\"confirmPasswordForm.get('password')\"></validation-feedback>\n                </div>\n            \n                <input type=\"submit\" class=\"btn btn-danger input100-submit\" value=\"wyślij\">\n            </form>\n        </div>\n\n    </ng-container>\n\n\n\n\n    <ng-container *ngIf=\"passwordConfirm\">\n        <ng-container *ngIf=\"saveNewEmail\">\n            <div class=\"alert alert-success\" role=\"alert\">\n                Hasło zostało zmienione<br>\n                <a class=\"btn btn-info\" [routerLink]=\"['/profile']\">ok</a>  \n              </div>\n              \n        </ng-container>\n        \n        <ng-container *ngIf=\"!saveNewEmail\">\n            <div class=\"alert alert-danger\" *ngIf=\"message\">{{message}}</div>\n            <ng-container *ngIf=\"!saveEmail\">\n                <div class=\"form\">\n                    <form [formGroup]=\"changeEmailForm\" (submit)=\"changeEmail()\">\n                        <ng-container *ngIf=\"valid\">\n                            <div class=\"alert alert-danger\" role=\"alert\">\n                                 Wypełnij puste pole\n                            </div>\n                        </ng-container>\n    \n                        <ng-container *ngIf=\"!correctChangeEmail\">\n                            <div class=\"alert alert-danger\" role=\"alert\">\n                                Email jest już zajęty\n                            </div>\n                        </ng-container>\n                \n                        <div class=\"form-group\">\n                            <label for=\"Password\">Podaj nowy email</label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"email\">\n                            <validation-feedback [control]=\"changeEmailForm.get('email')\"></validation-feedback>\n                        </div>\n                    \n                        <input type=\"submit\" class=\"btn btn-danger input100-submit\" value=\"zapisz\">\n                    </form>\n                </div>\n            </ng-container>\n\n            <ng-container *ngIf=\"saveEmail\">\n                <div class=\"alert alert-success\" role=\"alert\">\n                    Email został zmieniony<br>\n                    <a class=\"btn btn-info\" [routerLink]=\"['/profile']\">ok</a>  \n                  </div>\n            </ng-container>\n\n        </ng-container>\n    </ng-container>\n\n</ng-container>\n\n\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/change-password/change-password.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/change-password/change-password.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Reset hasła</h3>\n\n<ng-container *ngIf=\"auth.isAuthenticated\">\n\n    <ng-container *ngIf=\"!passwordConfirm\">\n        <div class=\"form\">\n            <form [formGroup]=\"confirmPasswordForm\" (submit)=\"confirmPassword()\">\n                <ng-container *ngIf=\"valid\">\n                    <div class=\"alert alert-danger\" role=\"alert\">\n                         Wypełnij puste pole\n                    </div>\n                </ng-container>\n            \n                <ng-container *ngIf=\"!correctPassword\">\n                    <div class=\"alert alert-danger\" role=\"alert\">\n                        Niepoprawne hasło\n                    </div>\n                </ng-container>\n                <div class=\"form-group\">\n                    <label for=\"Password\">Podaj hasło do swojego konta</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"password\">\n                    <validation-feedback [control]=\"confirmPasswordForm.get('password')\"></validation-feedback>\n                </div>\n            \n                <input type=\"submit\" class=\"btn btn-danger input100-submit\" value=\"wyślij\">\n            </form>\n        </div>\n\n    </ng-container>\n\n    <ng-container *ngIf=\"passwordConfirm\">\n        <ng-container *ngIf=\"saveNewPassword\">\n            <div class=\"alert alert-success\" role=\"alert\">\n                Hasło zostało zmienione<br>\n                <a class=\"btn btn-info\" [routerLink]=\"['/profile']\">ok</a>  \n              </div>\n              \n        </ng-container>\n        \n        <ng-container *ngIf=\"!saveNewPassword\">\n            <div class=\"alert alert-danger\" *ngIf=\"message\">{{message}}</div>\n            <div class=\"form\">\n                <form [formGroup]=\"changePasswordForm\" (submit)=\"changePassword()\">\n                    <ng-container *ngIf=\"valid\">\n                        <div class=\"alert alert-danger\" role=\"alert\">\n                             Wypełnij poprawnie wszystkie pola\n                        </div>\n                    </ng-container>\n                \n        \n                    <div class=\"form-group\">\n                        <label for=\"Password\">Hasło</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"password\">\n                        <validation-feedback [control]=\"changePasswordForm.get('password')\"></validation-feedback>\n                    </div>\n        \n                    <div class=\"form-group\">\n                        <label for=\"Password2\">Powtórz hasło</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"password_repeat\">\n                        <validation-feedback [control]=\"changePasswordForm\" ></validation-feedback>\n                    </div>\n        \n            \n                    <input type=\"submit\" class=\"btn btn-danger input100-submit\" value=\"wyślij\">\n                </form>\n            </div>\n        \n        </ng-container>\n    </ng-container>\n\n</ng-container>\n\n\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/confirm-account/confirm-account.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/confirm-account/confirm-account.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"init\">\n    <ng-container *ngIf=\"accountConfirmation\">\n        <div class=\"alert alert-success\" role=\"alert\">\n            <h4>Dziękujemy za rejestracje :(</h4>\n            <p>Możesz zalogować się na swoje konto.</p>\n            <button class=\"btn btn-info\" [routerLink]=\"['/logowanie']\">Zaloguj</button>\n       </div>\n    </ng-container>\n    \n    <ng-container *ngIf=\"!accountConfirmation\">\n        <div class=\"alert alert-danger\" role=\"alert\">\n            <h4>Coś poszło nie tak :(</h4>\n            <p>Prawdopodobie link wygasł.</p>\n            <button class=\"btn btn-info\" [routerLink]=\"['/rejestracja']\">Spróbuj ponowanie</button>\n       </div>\n    </ng-container>\n</ng-container>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"!auth.isAuthenticated\">\n\n<div class=\"row\">\n    <div class=\"col-6\" style=\"padding: 0px 60px 0px 40px; border-right: 2px solid slategrey;\">\n        <h3>Mam już konto</h3>\n        <div class=\"alert alert-danger\" *ngIf=\"message\">{{message}}</div>\n        <form [formGroup]=\"loginForm\" (submit)=\"login()\">\n\n            <ng-container *ngIf=\"valid\"> \n                <div class=\"alert alert-danger\" role=\"alert\">\n                    Wpisz email i hasło\n                  </div>\n            </ng-container>\n            \n            <ng-container *ngIf=\"!correctData\"> \n                <div class=\"alert alert-danger\" role=\"alert\">\n                    Niepoprawny login lub hasło\n                  </div>\n            </ng-container>\n\n            <div class=\"form-group\">\n                <label for=\"Email\">Email</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"user_email\">\n                <validation-feedback [control]=\"loginForm.get('user_email')\"></validation-feedback>\n            </div>\n        \n            <div class=\"form-group\">\n                <label for=\"Password\">Hasło</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"user_password\">\n            </div>\n\n            <input type=\"submit\" class=\"btn btn-primary mx-auto\" value=\"zaloguj\">\n\n            <div>\n                <a [routerLink]=\"['/przypomnij-haslo']\">Nie pamiętam hasła</a>\n            </div>\n        </form>\n    </div>\n    <div class=\"col-6\">\n        <h3>Nie mam konta</h3>\n        <ng-container *ngIf=\"options == 1\">\n            <button [routerLink]=\"['/zamowienie']\" type=\"button\" class=\"btn btn-primary\">Kontynuuj bez logowania</button>\n            <br><br>\n        </ng-container>        \n        <button [routerLink]=\"['/rejestracja']\" type=\"button\" class=\"btn btn-primary\">Załóż konto</button>\n    </div>\n</div>\n</ng-container>\n\n\n<ng-container *ngIf=\"auth.isAuthenticated\">\n    <div class=\"alert alert-success\" role=\"alert\">\n        <h3>Zalogowano</h3>\n        <button class=\"btn btn-info\" [routerLink]=\"['/home']\">Przejdz do strony głównej</button>\n      </div>\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Rejstracja</h3>\n<div class=\"alert alert-danger\" *ngIf=\"message\">{{message}}</div>\n\n\n<ng-container *ngIf=\"!checkedEmail\">\n    <div class=\"form\">\n        <form [formGroup]=\"emailForm\" (submit)=\"checkEmail()\">\n            <ng-container *ngIf=\"validEmail\">\n                <div class=\"alert alert-danger\" role=\"alert\">\n                    Musisz poprawnie wypełnić formularz.\n                  </div>\n            </ng-container>\n\n            <ng-container *ngIf=\"emailExists\">\n                <div class=\"alert alert-danger\" role=\"alert\">\n                    Podany email jest zajęty.\n                  </div>\n            </ng-container>\n    \n                <div class=\"form-group\">\n                    <label class=\"label-input100\" for=\"Email\">Podaj Email</label>\n                    <input class=\"input100\" type=\"text\" class=\"form-control\" formControlName=\"user_email\">\n                    <validation-feedback [control]=\"emailForm.get('user_email')\"></validation-feedback>\n                </div>\n                \n                <input type=\"submit\" class=\"btn btn-success input100-submit\" value=\"dalej\">\n    \n        </form>\n    </div>\n</ng-container>\n\n\n<ng-container *ngIf=\"checkedEmail\">\n\n    <ng-container *ngIf=\"!registerConfirm\">\n        <div class=\"form\">\n            <form [formGroup]=\"passwordForm\" (submit)=\"saveAccount()\">\n                <ng-container *ngIf=\"validPass\">\n                    <div class=\"alert alert-danger\" role=\"alert\">\n                        Musisz poprawnie wypełnić formularz.\n                      </div>\n                </ng-container>\n                     \n                    <div class=\"form-group\">\n                        <label for=\"Password\">Hasło</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"user_password\">\n                        <validation-feedback [control]=\"passwordForm.get('user_password')\"></validation-feedback>\n                    </div>\n            \n                    <div class=\"form-group\">\n                        <label for=\"Password2\">Powtórz hasło</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"user_repeat_password\">\n                        <validation-feedback [control]=\"passwordForm\" ></validation-feedback>\n                    </div>\n            \n                    <input type=\"submit\" class=\"btn btn-success input100-submit\" value=\"załóż konto\">\n        \n            </form>\n        </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"registerConfirm\">\n        <div class=\"alert alert-success\" role=\"alert\">\n            Na podany adres email. Wysłalismy link w celu weryfikacji konta. Link ważny 10min\n          </div>\n    </ng-container>\n\n</ng-container>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/remind-password/remind-password.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/remind-password/remind-password.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"!sent\">\n\n    <ng-container *ngIf=\"valid\">\n        <div class=\"alert alert-danger\" role=\"alert\">\n        Wypełnij poprawnie wszystkie pola\n        </div>\n    </ng-container>\n\n    <form [formGroup]=\"remindPasswordForm\" (submit)=\"resetPassword()\">\n        <h4>Resetuj hasło</h4>\n\n        <div class=\"form-group\">\n            <label for=\"Name\">Email</label>\n\n            <input type=\"text\" class=\"form-control\" formControlName=\"email\">\n\n            <div class=\"validation-feedback\" *ngIf=\"remindPasswordForm.get('email').touched || remindPasswordForm.get('email').dirty\">\n    \n                <div *ngIf=\"remindPasswordForm.get('email').hasError('required')\">\n                    Pole jest wymagane\n                </div>\n\n                <div *ngIf=\"remindPasswordForm.get('email').hasError('email')\">\n                    Niepoprawny email\n                </div>\n\n            </div>\n\n        </div>\n\n        <input type=\"submit\" value=\"zresetuj hasło\" class=\"btn btn-danger\">\n    </form>\n</ng-container>\n            \n\n<ng-container *ngIf=\"sent\">\n    <div class=\"alert alert-success\" role=\"alert\">\n        <h4>Jeśli podany użytkownik istnieje. Wysłaliśmy link do resetu hasła.</h4>\n        <h4>Sprawdź swoją pocztę :)</h4>\n        <p>Link po <strong>10 minutach</strong> wygasa</p>\n      </div>\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/reset-password/reset-password.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/reset-password/reset-password.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Reset hasła</h3>\n\n<ng-container *ngIf=\"saveNewPassword\">\n    <div class=\"alert alert-success\" role=\"alert\">\n        Hasło zostało zmienione<br>\n        <a class=\"btn btn-info\" [routerLink]=\"['/logowanie']\">Zaloguj</a>  \n      </div>\n      \n</ng-container>\n\n<ng-container *ngIf=\"linkIsCorrect && !saveNewPassword\">\n    <div class=\"alert alert-danger\" *ngIf=\"message\">{{message}}</div>\n    <div class=\"form\">\n        <form [formGroup]=\"resetPasswordForm\" (submit)=\"resetPassword()\">\n            <ng-container *ngIf=\"valid\">\n                <div class=\"alert alert-danger\" role=\"alert\">\n                     Wypełnij poprawnie wszystkie pola\n                </div>\n            </ng-container>\n        \n\n            <div class=\"form-group\">\n                <label for=\"Password\">Hasło</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"password\">\n                <validation-feedback [control]=\"resetPasswordForm.get('password')\"></validation-feedback>\n\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"Password2\">Powtórz hasło</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"password_repeat\">\n                <validation-feedback [control]=\"resetPasswordForm\" ></validation-feedback>\n            </div>\n\n    \n            <input type=\"submit\" class=\"btn btn-danger input100-submit\" value=\"wyślij\">\n        </form>\n    </div>\n\n</ng-container>\n\n<ng-container *ngIf=\"!linkIsCorrect\">\n    <div class=\"alert alert-danger\" role=\"alert\">\n        Link wygasł :( Spróbuj ponownie :)\n      </div>\n</ng-container>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<error-handler [errorHandler]=\"statusError\"></error-handler>\n\n<h2>Koszyk</h2>\n\n<ng-container *ngIf=\"!isEmpty\">\n  \n    <ng-container *ngIf=\"!pathOrder\">\n      <ng-container *ngIf=\"!auth.isAuthenticated\">\n        <button class=\"btn btn-danger\" (click)=\"removeCartInLocalStorage()\">wyczyść koszyk</button>\n      </ng-container>\n      \n      <ng-container *ngIf=\"auth.isAuthenticated\">\n        <button class=\"btn btn-danger\" (click)=\"removeCartInDatabase()\">wyczyść koszyk</button>\n      </ng-container>\n    </ng-container>\n  \n<table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th scope=\"col\">lp</th>\n        <th scope=\"col\">produkt</th>\n        <th scope=\"col\">cena</th>\n        <th scope=\"col\">ilość</th>\n        <th scope=\"col\">razem</th>\n        <th scope=\"col\"></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let cartItem of cartLocalItemList let i = index;\">\n        <th scope=\"row\">{{i+1}}</th>\n        <td><a [routerLink]=\"['/product', cartItem.product.product_id]\">{{cartItem.product.product_mark}}</a></td>\n        <td>{{cartItem.product.product_price}} zł</td>\n        <td>{{cartItem.order_item_amount}}</td>\n        <td>{{cartItem.product.product_price * cartItem.order_item_amount}} zł</td>\n        \n        <ng-container *ngIf=\"!pathOrder\">\n          <td>  \n            <ng-container *ngIf=\"!auth.isAuthenticated\">\n              <button class=\"btn btn-danger\" (click)=\"deleteCartItemInLocalStorage(i)\">usuń</button>\n            </ng-container>\n    \n            <ng-container *ngIf=\"auth.isAuthenticated\">\n              <button class=\"btn btn-danger\" (click)=\"deleteCartItemInDatabase(cartItem.cart_id, i)\">usuń</button>\n            </ng-container>\n          </td>\n        </ng-container>\n\n  \n        \n      </tr>\n    </tbody>\n  </table>\n  <div style=\"margin-bottom: 10px;\">\n    razem do zapłaty: {{cartSum}} zł\n\n    <ng-container *ngIf=\"!pathOrder\">\n      <ng-container *ngIf=\"auth.isAuthenticated\">\n        <button [routerLink]=\"['/zamowienie']\" class=\"btn btn-success\">zamów</button>\n      </ng-container>\n  \n      <ng-container *ngIf=\"!auth.isAuthenticated\">\n        <button [routerLink]=\"['/logowanie', 1]\" class=\"btn btn-success\">zamów</button>\n      </ng-container>\n    </ng-container>\n\n    \n</div>\n</ng-container>\n\n<ng-container *ngIf=\"isEmpty\">\n  <h2>Pusty</h2>\n</ng-container>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error-handler/error-handler.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error/error-handler/error-handler.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"errorHandler === 0\">\n    <h4>Brak połączenia z serwerem</h4>\n    <p>Mamy chwilowy problem. Wróć za kilka minut</p>\n</ng-container>\n\n<ng-container *ngIf=\"errorHandler === 404\">\n    <h4>Not found 404</h4>\n    <p>Produkt jest niedostępny lub wycofany z naszej sprzedaży.</p>\n</ng-container>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/drone-form/drone-form.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form/drone-form/drone-form.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"auth.isAuthenticated && auth.role == 'ADMIN'\">\n        <div class=\"form\">\n        <ng-container *ngIf=\"saved\">\n            <div class=\"alert alert-success\" role=\"alert\">\n                Zapisano!!!\n              </div>\n        </ng-container>\n\n        <ng-container *ngIf=\"valid\">\n            <div class=\"alert alert-danger\" role=\"alert\">\n                Wypełnij poprawnie wszystkie pola\n              </div>\n        </ng-container>\n\n        <form class=\"contact100-form\" [formGroup]=\"productForm\" (submit)=\"saveProduct()\">\n\n            <div class=\"form-group wrap-input100 rs1-wrap-input100\">\n                <label class=\"label-input100\">Producent</label>\n                \n                <ng-container *ngIf='product'>\n                    <select class=\"form-control\" [(ngModel)]='product.product_mark' formControlName=\"product_mark\">\n                        <option value=\"dji\">DJI</option>\n                        <option value=\"parrot\">Parrot</option>\n                        <option value=\"hubsan\">Hubsan</option>\n                        <option value=\"yuneec\">Yuneec</option>\n                        <option value=\"overmax\">Overmax</option>\n                        <option value=\"syma\">Syma</option>\n                    </select>\n                </ng-container>\n\n                <ng-container *ngIf='!product'>\n                    <select class=\"form-control\" formControlName=\"product_mark\">\n                        <option value=\"dji\">DJI</option>\n                        <option value=\"parrot\">Parrot</option>\n                        <option value=\"hubsan\">Hubsan</option>\n                        <option value=\"yuneec\">Yuneec</option>\n                        <option value=\"overmax\">Overmax</option>\n                        <option value=\"syma\">Syma</option>\n                    </select>\n                </ng-container>\n\n                <validation-product [control]=\"productForm.get('product_mark')\"></validation-product>\n\n            </div>\n        \n            <div class=\"form-group wrap-input100 rs1-wrap-input100\">\n                <label class=\"label-input100\" for=\"Price\">Cena</label>\n\n                <ng-container *ngIf='product'>\n                    <input class=\"input100\" type=\"text\" class=\"form-control\" [(ngModel)]='product.product_price' formControlName=\"product_price\">\n                </ng-container>\n\n                <ng-container *ngIf='!product'>\n                    <input class=\"input100\" type=\"text\" class=\"form-control\" formControlName=\"product_price\">\n                </ng-container>\n\n                <validation-product [control]=\"productForm.get('product_price')\"></validation-product>\n          \n            </div>\n        \n            <div class=\"form-group wrap-input100 rs1-wrap-input100\">\n                <label class=\"label-input100\" for=\"Status\">Status</label>\n\n                <ng-container *ngIf='product'>\n                    <select class=\"form-control\" [(ngModel)]='product.product_status' formControlName=\"product_status\">\n                        <option>promocja</option>\n                        <option>wyprzedaż</option>\n                        <option>nowość</option>\n                        <option>polecamy</option>\n                        <option>przedłużona gwarancja</option>\n                    </select>\n                </ng-container>\n\n                <ng-container *ngIf='!product'>\n                    <select class=\"form-control\" formControlName=\"product_status\">\n                        <option>promocja</option>\n                        <option>wyprzedaż</option>\n                        <option>nowość</option>\n                        <option>polecamy</option>\n                        <option>przedłużona gwarancja</option>\n                    </select>\n                </ng-container>\n\n                <validation-product [control]=\"productForm.get('product_status')\"></validation-product>\n\n            </div>\n        \n            <div class=\"form-group wrap-input100 rs1-wrap-input100\">\n                <label class=\"label-input100\" for=\"Time\">Czas pracy</label>\n\n                <ng-container *ngIf='product'>\n                    <input class=\"input100\" type=\"text\" class=\"form-control\" [(ngModel)]='product.product_time_work' formControlName=\"product_time_work\">\n                </ng-container>\n\n                <ng-container *ngIf='!product'>\n                    <input class=\"input100\" type=\"text\" class=\"form-control\" formControlName=\"product_time_work\">\n                </ng-container>\n\n                <validation-product [control]=\"productForm.get('product_time_work')\"></validation-product>\n\n            </div>\n        \n            <div class=\"form-group wrap-input100 rs1-wrap-input100\">\n                <label class=\"label-input100\" for=\"Range\">Zasięg</label>\n\n                <ng-container *ngIf='product'>\n                    <input class=\"input100\" type=\"text\" class=\"form-control\" [(ngModel)]='product.product_range' formControlName=\"product_range\">\n                </ng-container>\n                \n                <ng-container *ngIf='!product'>\n                    <input class=\"input100\" type=\"text\" class=\"form-control\" formControlName=\"product_range\">\n                </ng-container>\n\n                <validation-product [control]=\"productForm.get('product_range')\"></validation-product>\n\n            </div>\n        \n            <div class=\"form-group wrap-input100 rs1-wrap-input100\">\n                <label class=\"label-input100\" for=\"Kamera\">Kamera</label>\n\n                <ng-container *ngIf='product'>\n                    <select class=\"form-control\" [(ngModel)]='product.product_camera' formControlName=\"product_camera\" required>\n                        <option>tak</option>\n                        <option>nie</option>\n                    </select>\n                </ng-container>\n                \n                <ng-container *ngIf='!product'>\n                    <select class=\"form-control\" formControlName=\"product_camera\">\n                        <option>tak</option>\n                        <option>nie</option>\n                    </select>\n                </ng-container>\n\n                <validation-product [control]=\"productForm.get('product_camera')\"></validation-product>\n\n            </div>\n        \n            <div class=\"form-group wrap-input100 rs1-wrap-input100\">\n                <label class=\"label-input100\" for=\"Amount\">Dostępna ilość</label>\n\n                <ng-container *ngIf='product'>\n                    <input class=\"input100\" type=\"text\" class=\"form-control\" [(ngModel)]='product.product_amount_available' formControlName=\"product_amount_available\">\n                </ng-container>\n                \n                <ng-container *ngIf='!product'>\n                    <input class=\"input100\" type=\"text\" class=\"form-control\" formControlName=\"product_amount_available\">\n                </ng-container>\n\n                <validation-product [control]=\"productForm.get('product_amount_available')\"></validation-product>\n\n            </div>\n        \n            <div class=\"form-group wrap-input100\">\n                <label class=\"label-input100\" for=\"Descripton\">Opis</label>\n\n                <ng-container *ngIf='product'>\n                    <textarea class=\"input100\" rows=\"4\" cols=\"50\" class=\"form-control\" [(ngModel)]='product.product_description' formControlName=\"product_description\"> </textarea>\n                </ng-container>\n                \n                <ng-container *ngIf='!product'>\n                    <textarea class=\"input100\" rows=\"4\" cols=\"50\" class=\"form-control\" formControlName=\"product_description\"> </textarea>\n                </ng-container>\n\n                <validation-product [control]=\"productForm.get('product_description')\"></validation-product>\n\n            </div>\n            \n            <input *ngIf=\"!saved\" value=\"zapisz\" type=\"submit\" class=\"btn btn-danger\">\n            <a *ngIf=\"saved && product\" class=\"btn btn-success\" [routerLink]=\"['/product', product.product_id]\">powrót</a>\n            <a *ngIf=\"saved && !product\" class=\"btn btn-success\" [routerLink]=\"['/products', productType]\">powrót</a>\n        </form>\n    </div>\n</ng-container>\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/laptop-form/laptop-form.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form/laptop-form/laptop-form.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"auth.isAuthenticated && auth.role == 'ADMIN'\">\n        <div class=\"form\">\n        <ng-container *ngIf=\"saved\">\n        <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"saved\">\n            Zapisano!!!\n          </div>\n        </ng-container>\n\n        <ng-container *ngIf=\"valid\">\n            <div class=\"alert alert-danger\" role=\"alert\">\n                Wypełnij poprawnie wszystkie pola\n              </div>\n        </ng-container>\n        \n        <form class=\"contact100-form\" [formGroup]=\"productForm\" (submit)=\"saveProduct()\">\n            <div class=\"form-group wrap-input100 rs1-wrap-input100\">\n                <label class=\"label-input100\" for=\"Name\">Producent</label>\n\n                <ng-container *ngIf=\"product\">\n                    <select class=\"input100\" class=\"form-control\" [(ngModel)]=\"product.product_mark\" formControlName=\"product_mark\">\n                        <option value=\"1\">Lenovo</option>\n                        <option value=\"2\">HP</option>\n                        <option value=\"3\">Dell</option>\n                        <option value=\"4\">ASUS</option>\n                        <option value=\"5\">ACER</option>\n                        <option value=\"6\">MSI</option>\n                        <option value=\"7\">APPLE</option>\n                        <option value=\"8\">HUAWEI</option>\n                        <option>brak</option>\n                    </select>\n                </ng-container>\n\n                <ng-container *ngIf=\"!product\">\n                    <select class=\"input100\" class=\"form-control\" formControlName=\"product_mark\">\n                        <option value=\"1\">Lenovo</option>\n                        <option value=\"2\">HP</option>\n                        <option value=\"3\">Dell</option>\n                        <option value=\"4\">ASUS</option>\n                        <option value=\"5\">ACER</option>\n                        <option value=\"6\">MSI</option>\n                        <option value=\"7\">APPLE</option>\n                        <option value=\"8\">HUAWEI</option>\n                        <option>brak</option>\n                    </select>\n                </ng-container>\n\n                <validation-product [control]=\"productForm.get('product_mark')\"></validation-product>\n\n            </div>\n            \n            <div class=\"form-group wrap-input100 rs1-wrap-input100\">\n                <label class=\"label-input100\" for=\"Price\">Cena</label>\n\n                <ng-container *ngIf=\"product\">\n                    <input class=\"input100\" type=\"text\" class=\"form-control\" [(ngModel)]=\"product.product_price\" formControlName=\"product_price\">\n                </ng-container>\n                \n                <ng-container *ngIf=\"!product\">\n                    <input class=\"input100\" type=\"text\" class=\"form-control\" formControlName=\"product_price\">\n                </ng-container>\n\n                <validation-product [control]=\"productForm.get('product_price')\"></validation-product>\n\n            </div>\n    \n            <div class=\"form-group wrap-input100 rs1-wrap-input100\">\n                <label class=\"label-input100\" for=\"Status\">Status</label>\n\n                <ng-container *ngIf=\"product\">\n                    <select class=\"input100\" class=\"form-control\" [(ngModel)]=\"product.product_status\" formControlName=\"product_status\">\n                        <option value=\"1\">Promocja</option>\n                        <option value=\"2\">Wyprzedaż</option>\n                        <option value=\"3\">Nowość</option>\n                        <option value=\"4\">Polecamy</option>\n                        <option value=\"5\">Przedłużona gwarancja</option>\n                        <option>brak</option>\n                    </select>\n                </ng-container>\n\n                <ng-container *ngIf=\"!product\">\n                    <select class=\"input100\" class=\"form-control\" formControlName=\"product_status\">\n                        <option value=\"1\">Promocja</option>\n                        <option value=\"2\">Wyprzedaż</option>\n                        <option value=\"3\">Nowość</option>\n                        <option value=\"4\">Polecamy</option>\n                        <option value=\"5\">Przedłużona gwarancja</option>\n                        <option>brak</option>\n                    </select>\n                </ng-container>\n\n                <validation-product [control]=\"productForm.get('product_status')\"></validation-product>\n\n            </div>\n        \n            <div class=\"form-group wrap-input100 rs1-wrap-input100\">\n                <label class=\"label-input100\" for=\"System\">System operacyjny</label>\n\n                <ng-container *ngIf=\"product\">\n                    <select class=\"input100\" class=\"form-control\" [(ngModel)]=\"product.product_system\" formControlName=\"product_system\">\n                        <option value=\"windows 10\">Windows 10</option>\n                        <option value=\"macOs\">MacOS</option>\n                        <option value=\"ubuntu\">Ubuntu</option>\n                        <option value=\"brak systemu\">Brak systemu</option>\n                    </select>\n                </ng-container>\n\n                <ng-container *ngIf=\"!product\">\n                    <select class=\"input100\" class=\"form-control\" formControlName=\"product_system\">\n                        <option value=\"windows 10\">Windows 10</option>\n                        <option value=\"macOs\">MacOS</option>\n                        <option value=\"ubuntu\">Ubuntu</option>\n                        <option value=\"brak systemu\">Brak systemu</option>\n                    </select>\n                </ng-container>\n\n                <validation-product [control]=\"productForm.get('product_system')\"></validation-product>\n\n            </div>\n        \n            <div class=\"form-group wrap-input100 rs1-wrap-input100\">\n                <label class=\"label-input100\" for=\"Processor\">Processor</label>\n\n                <ng-container *ngIf=\"product\">\n                    <select class=\"input100\" class=\"form-control\" [(ngModel)]=\"product.product_processor\" formControlName=\"product_processor\">\n                        <option value=\"intel core i3\">Intel Core i3</option>\n                        <option value=\"intel core i5\">Intel Core i5</option>\n                        <option value=\"intel core i7\">Intel Core i7</option>\n                        <option value=\"intel core i9\">Intel Core i9</option>\n                        <option value=\"intel pentium\">Intel Pentium</option>\n                        <option value=\"amd ryzen 5\">AMD Ryzen 5</option>\n                        <option value=\"amd ryzen 7\">AMD Ryzen 7</option>\n                    </select>\n                </ng-container>\n\n                <ng-container *ngIf=\"!product\">\n                    <select class=\"input100\" class=\"form-control\" formControlName=\"product_processor\">\n                        <option value=\"intel core i3\">Intel Core i3</option>\n                        <option value=\"intel core i5\">Intel Core i5</option>\n                        <option value=\"intel core i7\">Intel Core i7</option>\n                        <option value=\"intel core i9\">Intel Core i9</option>\n                        <option value=\"intel pentium\">Intel Pentium</option>\n                        <option value=\"amd ryzen 5\">AMD Ryzen 5</option>\n                        <option value=\"amd ryzen 7\">AMD Ryzen 7</option>\n                    </select>\n                </ng-container>\n\n                <validation-product [control]=\"productForm.get('product_processor')\"></validation-product>\n\n            </div>\n        \n            <div class=\"form-group wrap-input100 rs1-wrap-input100\">\n                <label class=\"label-input100\" for=\"Ram\">Pamięć RAM</label>\n\n                <ng-container *ngIf=\"product\">\n                    <input class=\"input100\" type=\"text\" class=\"form-control\" [(ngModel)]=\"product.product_ram_size\" formControlName=\"product_ram_size\">\n                </ng-container>\n                \n                <ng-container *ngIf=\"!product\">\n                    <input class=\"input100\" type=\"text\" class=\"form-control\" formControlName=\"product_ram_size\">\n                </ng-container>\n\n                <validation-product [control]=\"productForm.get('product_ram_size')\"></validation-product>\n\n            </div>\n        \n            <div class=\"form-group wrap-input100 rs1-wrap-input100\">\n                <label class=\"label-input100\" for=\"DyskType\">Rodzaj dysku</label>\n\n                <ng-container *ngIf=\"product\">\n                    <select class=\"input100\" class=\"form-control\" [(ngModel)]=\"product.product_disc_type\" formControlName=\"product_disc_type\">\n                        <option value=\"ssd\">SSD</option>\n                        <option value=\"hdd\">HDD</option>\n                    </select>\n                </ng-container>\n                \n                <ng-container *ngIf=\"!product\">\n                    <select class=\"input100\" class=\"form-control\" formControlName=\"product_disc_type\">\n                        <option value=\"ssd\">SSD</option>\n                        <option value=\"hdd\">HDD</option>\n                    </select>\n                </ng-container>\n\n                <validation-product [control]=\"productForm.get('product_disc_type')\"></validation-product>\n\n            </div>\n        \n            <div class=\"form-group wrap-input100 rs1-wrap-input100\">\n                <label class=\"label-input100\" for=\"DyskSize\">Rozmiar dysku</label>\n\n                <ng-container *ngIf=\"product\">\n                    <input class=\"input100\" type=\"text\" class=\"form-control\" [(ngModel)]=\"product.product_disc_size\" formControlName=\"product_disc_size\">\n                </ng-container>\n\n                <ng-container *ngIf=\"!product\">\n                    <input class=\"input100\" type=\"text\" class=\"form-control\" formControlName=\"product_disc_size\">\n                </ng-container>\n\n                <validation-product [control]=\"productForm.get('product_disc_size')\"></validation-product>\n\n            </div>\n        \n            <div class=\"form-group wrap-input100 rs1-wrap-input100\">\n                <label class=\"label-input100\" for=\"GraphicsCard\">Karta graficzna</label>\n\n                <ng-container *ngIf=\"product\">\n                    <select class=\"input100\" class=\"form-control\" [(ngModel)]=\"product.product_graphics_card\" formControlName=\"product_graphics_card\">\n                        <option value=\"zintegrowana intel\">Zintegrowana Intel</option>\n                        <option value=\"dedykowana nvidia geforce\">DEDYKOWANA NVIDIA Geforce</option>\n                        <option value=\"zintegrowana amd\">Zintegrowana AMD</option>\n                        <option value=\"dedykowana amd\">DEDYKOWANA AMD</option>\n                    </select>\n                </ng-container>\n                \n                <ng-container *ngIf=\"!product\">\n                    <select class=\"input100\" class=\"form-control\" formControlName=\"product_graphics_card\">\n                        <option value=\"zintegrowana intel\">Zintegrowana Intel</option>\n                        <option value=\"dedykowana nvidia geforce\">DEDYKOWANA NVIDIA Geforce</option>\n                        <option value=\"zintegrowana amd\">Zintegrowana AMD</option>\n                        <option value=\"dedykowana amd\">DEDYKOWANA AMD</option>\n                    </select>\n                </ng-container>\n\n                <validation-product [control]=\"productForm.get('product_graphics_card')\"></validation-product>\n\n            </div>\n        \n            <div class=\"form-group wrap-input100 rs1-wrap-input100\">\n                <label class=\"label-input100\" for=\"ScreenDiagonal\">Przekątna ekranu</label>\n\n                <ng-container *ngIf=\"product\">\n                    <select class=\"input100\" class=\"form-control\" [(ngModel)]=\"product.product_screen_diagonal\" formControlName=\"product_screen_diagonal\">\n                        <option>11.6</option>\n                        <option>12.5</option>\n                        <option>13.3</option>\n                        <option>13.9</option>\n                        <option>14.0</option>\n                        <option>14.1</option>\n                        <option>15.0</option>\n                        <option>15.4</option>\n                        <option>15.6</option>\n                        <option>16</option>\n                        <option>17</option>\n                        <option>17.3</option>\n                    </select>\n                </ng-container>\n\n                <ng-container *ngIf=\"!product\">\n                    <select class=\"input100\" class=\"form-control\" formControlName=\"product_screen_diagonal\">\n                        <option>11.6</option>\n                        <option>12.5</option>\n                        <option>13.3</option>\n                        <option>13.9</option>\n                        <option>14.0</option>\n                        <option>14.1</option>\n                        <option>15.0</option>\n                        <option>15.4</option>\n                        <option>15.6</option>\n                        <option>16</option>\n                        <option>17</option>\n                        <option>17.3</option>\n                    </select>\n                </ng-container>\n\n                <validation-product [control]=\"productForm.get('product_screen_diagonal')\"></validation-product>\n\n            </div>\n        \n            <div class=\"form-group wrap-input100 rs1-wrap-input100\">\n                <label class=\"label-input100\" for=\"Amount\">Dostępna ilość</label>\n\n                <ng-container *ngIf=\"product\">\n                    <input class=\"input100\" type=\"text\" class=\"form-control\" [(ngModel)]=\"product.product_amount_available\" formControlName=\"product_amount_available\">\n                </ng-container>\n                \n                <ng-container *ngIf=\"!product\">\n                    <input class=\"input100\" type=\"text\" class=\"form-control\" formControlName=\"product_amount_available\">\n                </ng-container>\n\n                <validation-product [control]=\"productForm.get('product_amount_available')\"></validation-product>\n\n            </div>\n            \n            <div class=\"form-group wrap-input100\">\n                <label class=\"label-input100\" for=\"Descripton\">Opis</label>\n\n                <ng-container *ngIf=\"product\">\n                    <textarea class=\"input100\" rows=\"4\" cols=\"50\" class=\"form-control\" [(ngModel)]=\"product.product_description\" formControlName=\"product_description\"> </textarea>\n                </ng-container>\n                \n                <ng-container *ngIf=\"!product\">\n                    <textarea class=\"input100\" rows=\"4\" cols=\"50\" class=\"form-control\" formControlName=\"product_description\"> </textarea>\n                </ng-container>\n\n                <validation-product [control]=\"productForm.get('product_description')\"></validation-product>\n\n            </div>\n    \n            <input *ngIf=\"!saved\" type=\"submit\" class=\"btn btn-danger\" value=\"zapisz\">\n            <a *ngIf=\"saved && product\" class=\"btn btn-success\" [routerLink]=\"['/product', product.product_id]\">powrót</a>\n            <a *ngIf=\"saved && !product\" class=\"btn btn-success\" [routerLink]=\"['/products', productType]\">powrót</a>\n        </form>\n        \n    </div>\n    \n    </ng-container>\n    \n    \n    \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/order-address-form/order-address-form.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form/order-address-form/order-address-form.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"order && auth.isAuthenticated && auth.role == 'ADMIN'\">\n    <form [formGroup]=\"orderAddressForm\" (submit)=\"save()\">\n        <span class=\"contact100-form-title\">\n            <h4>Edycja danych adresowych zamówienia</h4>\n        </span>\n        <ng-container *ngIf=\"saved\">\n            <div class=\"alert alert-success\" role=\"alert\">\n                Zapisano!!!\n              </div>\n        </ng-container>\n\n        <ng-container *ngIf=\"valid\">\n            <div class=\"alert alert-danger\" role=\"alert\">\n                Wypełnij poprawnie wszystkie pola\n              </div>\n        </ng-container>\n        \n        <div class=\"form-group\">\n            <label for=\"Name\">Imię</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"order.orders_firstName\" formControlName=\"orders_firstName\">\n            <validation-order-address [control]=\"orderAddressForm.get('orders_firstName')\"></validation-order-address>\n        </div>\n        \n        <div class=\"form-group\">\n            <label for=\"Lastname\">Nazwisko</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"order.orders_lastName\" formControlName=\"orders_lastName\">\n            <validation-order-address [control]=\"orderAddressForm.get('orders_lastName')\"></validation-order-address>\n        </div>\n    \n        <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"order.orders_email\" formControlName=\"orders_email\">\n            <validation-order-address [control]=\"orderAddressForm.get('orders_email')\"></validation-order-address>\n        </div>\n    \n        <div class=\"form-group\">\n            <label for=\"PhoneNumber\">telefon</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"order.orders_phoneNumber\" formControlName=\"orders_phoneNumber\">\n            <validation-order-address [control]=\"orderAddressForm.get('orders_phoneNumber')\"></validation-order-address>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"zipcode\">Kod pocztowy</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"order.orders_zipCode\" formControlName=\"orders_zipCode\">\n            <validation-order-address [control]=\"orderAddressForm.get('orders_zipCode')\"></validation-order-address>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"city\">Miejscowość</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"order.orders_city\" formControlName=\"orders_city\">\n            <validation-order-address [control]=\"orderAddressForm.get('orders_city')\"></validation-order-address>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"street\">Ulica i numer</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"order.orders_street\" formControlName=\"orders_street\">\n            <validation-order-address [control]=\"orderAddressForm.get('orders_street')\"></validation-order-address>\n        </div>\n\n        <ng-container *ngIf=\"!saved\">\n            <input type=\"submit\" value=\"zapisz\" class=\"btn btn-danger\">\n        </ng-container>\n        <ng-container *ngIf=\"saved\">\n            <button class=\"btn btn-success\" [routerLink]=\"['/zamowienie-szczegoly']\" [queryParams]=\"{ order_id: order.orders_id}\">powrót</button>\n        </ng-container>\n    </form>\n</ng-container>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/order-detail-form/order-detail-form.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form/order-detail-form/order-detail-form.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"order && auth.isAuthenticated && auth.role == 'ADMIN'\">\n    <form [formGroup]=\"orderDetailForm\" (submit)=\"save()\">\n        <span class=\"contact100-form-title\">\n            <h4>Edycja informacji o zamówieniu</h4>\n        </span>\n        <ng-container *ngIf=\"saved\">\n            <div class=\"alert alert-success\" role=\"alert\">\n                Zapisano!!!\n              </div>\n        </ng-container>\n\n        <ng-container *ngIf=\"valid\">\n            <div class=\"alert alert-danger\" role=\"alert\">\n                Wypełnij poprawnie wszystkie pola\n              </div>\n        </ng-container>\n\n        <div class=\"form-group\">\n            <label for=\"City\">Status</label>\n            <select class=\"form-control\" [(ngModel)]=\"order.orders_status\" formControlName=\"orders_status\">\n                <option value=\"przyjęto do realizacji\">Przyjęto do realizacji</option>\n                <option value=\"oczekuje na płatność\">Oczekuje na płatność</option>\n                <option value=\"przygotowanie do wysłania\">Przygotowanie do wysłania</option>\n                <option value=\"wysłano\">Wysłano</option>\n                <option value=\"doręczone do klienta\">Doręczone do klienta</option>\n                <option value=\"anulowane\">Anulowane</option>\n            </select>\n\n            <validation-order-address [control]=\"orderDetailForm.get('orders_status')\"></validation-order-address>\n\n        </div>\n        \n        <div class=\"form-group\">\n            <label for=\"Name\">Przewidywany czas dostawy</label>\n                <select class=\"form-control\" [(ngModel)]=\"order.orders_number_delivery_days\" formControlName=\"orders_number_delivery_days\">\n                    <option value=\"1\">1 dzień</option>\n                    <option value=\"2\">2 dni</option>\n                    <option value=\"3\">3 dni</option>\n                    <option value=\"4\">4 dni</option>\n                    <option value=\"5\">5 dni</option>\n                    <option value=\"6\">6 dni</option>\n                    <option value=\"7\">7 dni</option>\n                    <option value=\"8\">8 dni</option>\n                    <option value=\"9\">9 dni</option>\n                    <option value=\"10\">10 dni</option>\n                    <option value=\"11\">11 dni</option>\n                    <option value=\"12\">12 dni</option>\n                    <option value=\"13\">13 dni</option>\n                    <option value=\"14\">14 dni</option>\n                </select>\n\n                <validation-order-address [control]=\"orderDetailForm.get('orders_number_delivery_days')\"></validation-order-address>\n\n        </div>\n    \n        <div class=\"form-group\">\n            <label for=\"PhoneNumber\">sposób dostawy</label>\n                <select class=\"form-control\" [(ngModel)]=\"order.orders_delivery_method\" formControlName=\"orders_delivery_method\">\n                    <option value=\"kurier\">Dostawa kurierem</option>\n                    <option value=\"osobisty\">Odbiór osobisty</option>\n                </select>\n\n                <validation-order-address [control]=\"orderDetailForm.get('orders_delivery_method')\"></validation-order-address>\n        </div>\n    \n        <div class=\"form-group\">\n            <label for=\"PhoneNumber\">sposób płatności</label>\n            <select class=\"form-control\" [(ngModel)]=\"order.orders_payments_method\" formControlName=\"orders_payments_method\">\n                <option value=\"przy odbiorze\">Przy odbiorze</option>\n                <option value=\"przelew gotówkowy\">Przelew gotówkowy</option>\n            </select>\n\n            <validation-order-address [control]=\"orderDetailForm.get('orders_payments_method')\"></validation-order-address>\n\n        </div>\n        <ng-container *ngIf=\"!saved\">\n            <input type=\"submit\" value=\"zapisz\" class=\"btn btn-danger\">\n        </ng-container>\n        <ng-container *ngIf=\"saved\">\n            <button class=\"btn btn-success\" [routerLink]=\"['/zamowienie-szczegoly']\" [queryParams]=\"{ order_id: order.orders_id}\">powrót</button>\n        </ng-container>\n    </form>\n</ng-container>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/order-form/order-form.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form/order-form/order-form.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n            <ng-container *ngIf=\"valid\">\n                <div class=\"alert alert-danger\" role=\"alert\">\n                    Wypełnij poprawnie wszystkie pola\n                  </div>\n            </ng-container>\n\n    <form [formGroup]=\"addOrderForm\" (submit)=\"saveOrderSummary()\">\n        <h4>Dostawa i płatność</h4>\n        <h3>1.Sposób dostawy</h3>\n        <div class=\"form-group \">\n                <select class=\"form-control\" formControlName=\"orders_delivery_method\">\n                    <option value=\"kurier\">Dostawa kurierem</option>\n                    <option value=\"osobisty\">Odbiór osobisty</option>\n                </select>\n    \n            <validation-order-address [control]=\"addOrderForm.get('orders_delivery_method')\"></validation-order-address>\n    \n        </div>\n\n        <h3>2.Metoda płatności</h3>\n        <div class=\"form-group \">\n                    <select class=\"form-control\" formControlName=\"orders_payments_method\">\n                    <option value=\"przy odbiorze\">Przy odbiorze</option>\n                    <option value=\"przelew gotówkowy\">Przelew gotówkowy</option>\n                </select>\n\n            <validation-order-address [control]=\"addOrderForm.get('orders_payments_method')\"></validation-order-address>\n        \n        </div>\n\n        <h3>3.Dane odbiorcy</h3>\n        <div class=\"form-group\">\n            <label for=\"FirstName\">Imię</label>\n\n            <ng-container *ngIf=\"user\">\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.user_firstName\" formControlName=\"orders_firstName\">\n            </ng-container>\n\n            <ng-container *ngIf=\"!user\">\n                <input type=\"text\" class=\"form-control\" formControlName=\"orders_firstName\">\n            </ng-container>\n\n            <validation-order-address [control]=\"addOrderForm.get('orders_firstName')\"></validation-order-address>\n            \n        </div>\n    \n        <div class=\"form-group\">\n            <label for=\"LastName\">Nazwisko</label>\n\n            <ng-container *ngIf=\"user\">\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.user_lastName\" formControlName=\"orders_lastName\">\n            </ng-container>\n\n            <ng-container *ngIf=\"!user\">\n                <input type=\"text\" class=\"form-control\" formControlName=\"orders_lastName\">\n            </ng-container>\n\n            <validation-order-address [control]=\"addOrderForm.get('orders_lastName')\"></validation-order-address>\n            \n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"Street\">Ulica</label>\n            <ng-container *ngIf=\"user\">\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.user_street\" formControlName=\"orders_street\">\n            </ng-container>\n            \n            <ng-container *ngIf=\"!user\">\n                <input type=\"text\" class=\"form-control\" formControlName=\"orders_street\">\n            </ng-container>\n\n            <validation-order-address [control]=\"addOrderForm.get('orders_street')\"></validation-order-address>\n\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"ZipCode\">Kod pocztowy [nn-nnn]</label>\n            <ng-container *ngIf=\"user\">\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.user_zipCode\" formControlName=\"orders_zipCode\">\n            </ng-container>\n            \n            <ng-container *ngIf=\"!user\">\n                <input type=\"text\" class=\"form-control\" formControlName=\"orders_zipCode\">\n            </ng-container>\n\n            <validation-order-address [control]=\"addOrderForm.get('orders_zipCode')\"></validation-order-address>\n\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"City\">Miasto</label>\n            <ng-container *ngIf=\"user\">\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.user_city\" formControlName=\"orders_city\">\n            </ng-container>\n            <ng-container *ngIf=\"!user\">\n                <input type=\"text\" class=\"form-control\" formControlName=\"orders_city\">\n            </ng-container>\n\n            <validation-order-address [control]=\"addOrderForm.get('orders_city')\"></validation-order-address>\n\n        </div>\n        \n        <div class=\"form-group\">\n            <label for=\"Name\">Email</label>\n            <ng-container *ngIf=\"user\">\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.user_email\" formControlName=\"orders_email\">\n            </ng-container>\n            \n            <ng-container *ngIf=\"!user\">\n                <input type=\"text\" class=\"form-control\" formControlName=\"orders_email\">\n            </ng-container>\n\n            <validation-order-address [control]=\"addOrderForm.get('orders_email')\"></validation-order-address>\n\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"PhoneNumber\">Numer telefonu</label>\n            <ng-container *ngIf=\"user\">\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.user_phoneNumber\" formControlName=\"orders_phoneNumber\">\n            </ng-container>\n            \n            <ng-container *ngIf=\"!user\">\n                <input type=\"text\" class=\"form-control\" formControlName=\"orders_phoneNumber\">\n            </ng-container>\n\n            <validation-order-address [control]=\"addOrderForm.get('orders_phoneNumber')\"></validation-order-address>\n\n        </div>\n        <input value=\"zapisz\" type=\"submit\" value=\"kupuję i płacę\" class=\"btn btn-danger\">\n    </form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/smartphone-form/smartphone-form.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form/smartphone-form/smartphone-form.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ng-container *ngIf=\"auth.isAuthenticated && auth.role == 'ADMIN'\">\n    <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"saved\">\n        Zapisano!!!\n      </div>\n\n      <ng-container *ngIf=\"valid\">\n        <div class=\"alert alert-danger\" role=\"alert\">\n            Wypełnij poprawnie wszystkie pola\n          </div>\n    </ng-container>\n\n    <div class=\"form\">\n        <form class=\"contact100-form\" [formGroup]=\"productForm\" (submit)=\"saveProduct()\">\n            <div class=\"form-group wrap-input100 rs1-wrap-input100\">\n                <label class=\"label-input100\" for=\"Name\">Producent</label>\n\n                <ng-container *ngIf='product'>\n                    <select class=\"input100\" class=\"form-control\" [(ngModel)]=\"product.product_mark\" formControlName=\"product_mark\">\n                        <option value=\"1\">Samsung</option>\n                        <option value=\"2\">Apple</option>\n                        <option value=\"3\">Huawei</option>\n                        <option value=\"4\">Sony</option>\n                        <option value=\"5\">Nokia</option>\n                        <option value=\"6\">Xiaomi</option>\n                        <option value=\"7\">LG</option>\n                        <option value=\"8\">HTC</option>\n                        <option>brak</option>\n                    </select>\n                </ng-container>\n\n                <ng-container *ngIf='!product'>\n                    <select class=\"input100\" class=\"form-control\" formControlName=\"product_mark\">\n                        <option value=\"1\">Samsung</option>\n                        <option value=\"2\">Apple</option>\n                        <option value=\"3\">Huawei</option>\n                        <option value=\"4\">Sony</option>\n                        <option value=\"5\">Nokia</option>\n                        <option value=\"6\">Xiaomi</option>\n                        <option value=\"7\">LG</option>\n                        <option value=\"8\">HTC</option>\n                        <option>brak</option>\n                    </select>\n                </ng-container>\n\n                <validation-product [control]=\"productForm.get('product_mark')\"></validation-product>\n\n            </div>\n        \n            <div class=\"form-group wrap-input100 rs1-wrap-input100\">\n                <label class=\"label-input100\" for=\"Price\">Cena</label>\n\n                <ng-container *ngIf='product'>\n                    <input class=\"input100\" type=\"text\" class=\"form-control\" [(ngModel)]=\"product.product_price\" formControlName=\"product_price\">\n                </ng-container>\n                \n                <ng-container *ngIf='!product'>\n                    <input class=\"input100\" type=\"text\" class=\"form-control\" formControlName=\"product_price\">\n                </ng-container>\n\n\n                <validation-product [control]=\"productForm.get('product_price')\"></validation-product>\n\n            </div>\n        \n            <div class=\"form-group wrap-input100 rs1-wrap-input100\">\n                <label class=\"label-input100\" for=\"Status\">Status</label>\n\n                <ng-container *ngIf='product'>\n                    <select class=\"input100\" class=\"form-control\" [(ngModel)]=\"product.product_status\" formControlName=\"product_status\">\n                        <option>promocja</option>\n                        <option>wyprzedaż</option>\n                        <option>nowość</option>\n                        <option>polecamy</option>\n                        <option>przedłużona gwarancja</option>\n                    </select>\n                </ng-container>\n\n                <ng-container *ngIf='!product'>\n                    <select class=\"input100\" class=\"form-control\" formControlName=\"product_status\">\n                        <option>promocja</option>\n                        <option>wyprzedaż</option>\n                        <option>nowość</option>\n                        <option>polecamy</option>\n                        <option>przedłużona gwarancja</option>\n                    </select>\n                </ng-container>\n\n                <validation-product [control]=\"productForm.get('product_status')\"></validation-product>\n\n            </div>\n        \n            <div class=\"form-group wrap-input100 rs1-wrap-input100\">\n                <label class=\"label-input100\" for=\"System\">System operacyjny</label>\n\n                <ng-container *ngIf='product'>\n                    <select class=\"input100\" class=\"form-control\" [(ngModel)]=\"product.product_system\" formControlName=\"product_system\">\n                        <option>Android</option>\n                        <option>iOs</option>\n                    </select>\n                </ng-container>\n                \n                <ng-container *ngIf='!product'>\n                    <select class=\"input100\" class=\"form-control\" formControlName=\"product_system\">\n                        <option>Android</option>\n                        <option>iOs</option>\n                    </select>\n                </ng-container>\n\n                <validation-product [control]=\"productForm.get('product_system')\"></validation-product>\n\n            </div>\n        \n            <div class=\"form-group wrap-input100 rs1-wrap-input100\">\n                <label class=\"label-input100\" for=\"ScreenDiagonal\">Przekątna ekranu</label>\n\n                <ng-container *ngIf='product'>\n                    <select class=\"input100\" class=\"form-control\" [(ngModel)]=\"product.product_screen_diagonal\" formControlName=\"product_screen_diagonal\">\n                        <option>4</option>\n                        <option>4.7</option>\n                        <option>5.7</option>\n                        <option>6</option>\n                        <option>6.7</option>\n                    </select>\n                </ng-container>\n                \n                <ng-container *ngIf='!product'>\n                    <select class=\"input100\" class=\"form-control\" formControlName=\"product_screen_diagonal\">\n                        <option>4</option>\n                        <option>4.7</option>\n                        <option>5.7</option>\n                        <option>6</option>\n                        <option>6.7</option>\n                    </select>\n                </ng-container>\n\n                <validation-product [control]=\"productForm.get('product_screen_diagonal')\"></validation-product>\n\n            </div>\n        \n            <div class=\"form-group wrap-input100 rs1-wrap-input100\">\n                <label class=\"label-input100\" for=\"DyskSize\">Rozmiar dysku</label>\n\n                <ng-container *ngIf='product'>\n                    <select class=\"input100\" class=\"form-control\" [(ngModel)]=\"product.product_disc_size\" formControlName=\"product_disc_size\">\n                        <option>8</option>\n                        <option>16</option>\n                        <option>32</option>\n                        <option>64</option>\n                        <option>128</option>\n                        <option>256</option>\n                        <option>512</option>\n                    </select>\n                </ng-container>\n                \n                <ng-container *ngIf='!product'>\n                    <select class=\"input100\" class=\"form-control\" formControlName=\"product_disc_size\">\n                        <option>8</option>\n                        <option>16</option>\n                        <option>32</option>\n                        <option>64</option>\n                        <option>128</option>\n                        <option>256</option>\n                        <option>512</option>\n                    </select>\n                </ng-container>\n\n                <validation-product [control]=\"productForm.get('product_disc_size')\"></validation-product>\n\n            </div>\n        \n            <div class=\"form-group wrap-input100 rs1-wrap-input100\">\n                <label class=\"label-input100\" for=\"Ram\">Pamięć RAM</label>\n\n                <ng-container *ngIf='product'>\n                    <select class=\"input100\" class=\"form-control\" [(ngModel)]=\"product.product_ram_size\" formControlName=\"product_ram_size\">\n                        <option>2</option>\n                        <option>4</option>\n                        <option>6</option>\n                        <option>8</option>\n                        <option>16</option>\n                        <option>32</option>\n                    </select>\n                </ng-container>\n\n                <ng-container *ngIf='!product'>\n                    <select class=\"input100\" class=\"form-control\" formControlName=\"product_ram_size\">\n                        <option>2</option>\n                        <option>4</option>\n                        <option>6</option>\n                        <option>8</option>\n                        <option>16</option>\n                        <option>32</option>\n                    </select>\n                </ng-container>\n\n                <validation-product [control]=\"productForm.get('product_ram_size')\"></validation-product>\n\n            </div>\n        \n            <div class=\"form-group wrap-input100 rs1-wrap-input100\">\n                <label class=\"label-input100\" for=\"CameraResolution\">Roździelczość kamery</label>\n\n                <ng-container *ngIf='product'>\n                    <select class=\"input100\" class=\"form-control\" [(ngModel)]=\"product.product_camera_resolution\" formControlName=\"product_camera_resolution\">\n                        <option>7</option>\n                        <option>8</option>\n                        <option>13</option>\n                        <option>16</option>\n                        <option>19</option>\n                        <option>20</option>\n                    </select>\n                </ng-container>\n\n                <ng-container *ngIf='!product'>\n                    <select class=\"input100\" class=\"form-control\" formControlName=\"product_camera_resolution\">\n                        <option>7</option>\n                        <option>8</option>\n                        <option>13</option>\n                        <option>16</option>\n                        <option>19</option>\n                        <option>20</option>\n                    </select>\n                </ng-container>\n\n                <validation-product [control]=\"productForm.get('product_camera_resolution')\"></validation-product>\n\n            </div>\n        \n            <div class=\"form-group wrap-input100 rs1-wrap-input100\">\n                <label class=\"label-input100\" for=\"Amount\">Dostępna ilość</label>\n\n                <ng-container *ngIf='product'>\n                    <input class=\"input100\" type=\"text\" class=\"form-control\" [(ngModel)]=\"product.product_amount_available\" formControlName=\"product_amount_available\">\n                </ng-container>\n                \n                <ng-container *ngIf='!product'>\n                    <input class=\"input100\" type=\"text\" class=\"form-control\" formControlName=\"product_amount_available\">\n                </ng-container>\n\n                <validation-product [control]=\"productForm.get('product_amount_available')\"></validation-product>\n\n            </div>\n            \n            <div class=\"form-group wrap-input100\">\n                <label class=\"label-input100\" for=\"Descripton\">Opis</label>\n\n                <ng-container *ngIf='product'>\n                    <textarea class=\"input100\" rows=\"4\" cols=\"50\" class=\"form-control\" [(ngModel)]=\"product.product_description\" formControlName=\"product_description\"> </textarea>\n                </ng-container>\n                \n                <ng-container *ngIf='!product'>\n                    <textarea class=\"input100\" rows=\"4\" cols=\"50\" class=\"form-control\" formControlName=\"product_description\"> </textarea>\n                </ng-container>\n\n                <validation-product [control]=\"productForm.get('product_description')\"></validation-product>\n            </div>\n\n            <input *ngIf=\"!saved\" type=\"submit\" class=\"btn btn-danger\" value=\"zapisz\">\n            <a *ngIf=\"saved && product\" class=\"btn btn-success\" [routerLink]=\"['/product', product.product_id]\">powrót</a>\n            <a *ngIf=\"saved && !product\" class=\"btn btn-success\" [routerLink]=\"['/products', productType]\">powrót</a>\n        </form>\n        \n    </div>\n\n</ng-container>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/user-form/user-form.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form/user-form/user-form.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("    <div class=\"form\">\n        <ng-container *ngIf=\"saved\">\n            <div class=\"alert alert-success\" role=\"alert\">\n                Zapisano!!!\n              </div>\n        </ng-container>\n\n        <ng-container *ngIf=\"valid\">\n            <div class=\"alert alert-danger\" role=\"alert\">\n                Wypełnij poprawnie wymagane pola\n              </div>\n        </ng-container>\n\n        <div class=\"alert alert-danger\" *ngIf=\"message\">{{message}}</div>\n        <form class=\"contact100-form\" [formGroup]=\"userForm\" (submit)=\"saveUser()\">\n            <span class=\"contact100-form-title\">\n                Edycja użytkownika\n            </span>\n            \n            <div class=\"form-group wrap-input100 rs1-wrap-input100\">\n                <label class=\"label-input100\" for=\"FirstName\">Imię</label>\n                \n                <ng-container *ngIf=\"user\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.user_firstName\" formControlName=\"user_firstName\">\n                </ng-container>\n                \n                <ng-container *ngIf=\"!user\">\n                    <input type=\"text\" class=\"form-control\" formControlName=\"user_firstName\">\n                </ng-container>\n\n                <div class=\"validation-feedback\" *ngIf=\"userForm.get('user_firstName').getError('minlength') as error\">\n                    Musisz podać min {{error.requiredLength}} znaki\n                </div>\n\n            </div>\n        \n            <div class=\"form-group wrap-input100 rs1-wrap-input100\">\n                <label class=\"label-input100\" for=\"LastName\">Nazwisko</label>\n                \n                <ng-container *ngIf=\"user\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.user_lastName\" formControlName=\"user_lastName\">\n                </ng-container>\n                \n                <ng-container *ngIf=\"!user\">\n                    <input type=\"text\" class=\"form-control\" formControlName=\"user_lastName\">\n                </ng-container>\n\n                <div class=\"validation-feedback\" *ngIf=\"userForm.get('user_lastName').getError('minlength') as error\">\n                    Musisz podać min {{error.requiredLength}} znaki\n                </div>\n\n            </div>\n            \n            <div class=\"form-group wrap-input100 rs1-wrap-input100\">\n                <label class=\"label-input100\" for=\"PhoneNumber\">Numer telefonu</label>\n\n                <ng-container *ngIf=\"user\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.user_phoneNumber\" formControlName=\"user_phoneNumber\">\n                </ng-container>\n                \n                <ng-container *ngIf=\"!user\">\n                    <input type=\"text\" class=\"form-control\" formControlName=\"user_phoneNumber\">\n                </ng-container>\n\n                <div class=\"validation-feedback\" *ngIf=\"userForm.get('user_phoneNumber').hasError('pattern')\">\n                    Musisz podać liczby\n                </div>\n\n            </div>\n        \n            <div class=\"form-group wrap-input100 rs1-wrap-input100\">\n                <label class=\"label-input100\" for=\"ZipCode\">Kod pocztowy</label>\n\n                <ng-container *ngIf=\"user\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.user_zipCode\" formControlName=\"user_zipCode\">\n                </ng-container>\n                \n                <ng-container *ngIf=\"!user\">\n                    <input type=\"text\" class=\"form-control\" formControlName=\"user_zipCode\">\n                </ng-container>\n\n                <div class=\"validation-feedback\" *ngIf=\"userForm.get('user_zipCode').hasError('pattern')\">\n                   Kod pocztowy w formacie [nn-nnn]\n                </div>\n\n            </div>\n        \n            <div class=\"form-group wrap-input100 rs1-wrap-input100\">\n                <label class=\"label-input100\" for=\"City\">Miasto</label>\n\n                <ng-container *ngIf=\"user\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.user_city\" formControlName=\"user_city\">\n                </ng-container>\n\n                <ng-container *ngIf=\"!user\">\n                    <input type=\"text\" class=\"form-control\" formControlName=\"user_city\">\n                </ng-container>\n\n                <div class=\"validation-feedback\" *ngIf=\"userForm.get('user_city').hasError('pattern')\">\n                    Niepoprawny format\n                </div>\n\n            </div>\n        \n            <div class=\"form-group wrap-input100 rs1-wrap-input100\">\n                <label class=\"label-input100\" for=\"Street\">Ulica i numer</label>\n\n                <ng-container *ngIf=\"user\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.user_street\" formControlName=\"user_street\">\n                </ng-container>\n                \n                <ng-container *ngIf=\"!user\">\n                    <input type=\"text\" class=\"form-control\" formControlName=\"user_street\">\n                </ng-container>\n\n            </div>\n\n            <input *ngIf=\"!saved\" value=\"zapisz\" type=\"submit\"  class=\"btn btn-danger input100-submit\">\n            <a *ngIf=\"saved && returnPath == 'user'\"  class=\"btn btn-success input100-ok\" [routerLink]=\"['/user', user.user_id]\">powrót</a>\n            <a *ngIf=\"saved && returnPath == 'profile'\"  class=\"btn btn-success input100-ok\" [routerLink]=\"['/profile']\">powrót</a>\n        </form>\n    </div>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/user-role-form/user-role-form.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form/user-role-form/user-role-form.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form\" *ngIf=\"user\">\n    <ng-container *ngIf=\"saved\">\n        <div class=\"alert alert-success\" role=\"alert\">\n            Zaoisano!!!\n          </div>\n    </ng-container>\n    <div class=\"alert alert-danger\" *ngIf=\"message\">{{message}}</div>\n    <form class=\"contact100-form\" [formGroup]=\"roleForm\" (submit)=\"saveUser()\">\n        <span class=\"contact100-form-title\">\n            Edycja użytkownika\n        </span>\n        <div class=\"form-group wrap-input100 rs1-wrap-input100\">\n            <label class=\"label-input100\" for=\"role\">Uprawnienia</label>\n            <select class=\"form-control\" [(ngModel)]='user.user_role' formControlName=\"user_role\" required>\n                <option>ADMIN</option>\n                <option>USER</option>\n            </select>\n        </div>\n        <input *ngIf=\"!saved\" value=\"zapisz\" type=\"submit\"  class=\"btn btn-danger input100-submit\">\n        <a *ngIf=\"saved\"  class=\"btn btn-success input100-ok\" [routerLink]=\"['/user', user.user_id]\">powrót</a>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navi/home/home.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navi/home/home.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  \n<error-handler [errorHandler]=\"statusError\"></error-handler>\n\n  \n  <ng-container *ngIf=\"productsRecomend || productsPromotion\">\n    <h2>Polecamy</h2>\n    <div class=\"row\">\n        <div class=\"col-3\" *ngFor=\"let product of productsRecomend\">\n            <div class=\"product\">\n                <a [routerLink]=\"['/product', product.product_id]\">\n                    <div class=\"card\" style=\"width: 12rem;\">\n                        <h4 class=\"card-title\">{{product.product_mark}}</h4>\n                        <img src=\"../../../assets/img/drone.jpeg\" class=\"card-img-top\" alt=\"product\">\n                        <div class=\"card-body my-card-body\">\n                            <p class=\"card-text\">kamera: {{product.product_camera}}</p>\n                            <p class=\"card-text\">zasięg: {{product.product_range}} m</p>\n                            <p class=\"card-text\">czas pracy: {{product.product_time_work}} min</p>\n                            <h5 class=\"card-text\">{{product_product_price}} zł</h5>\n                        </div>\n                    </div>\n                </a>\n            </div>\n        </div>\n    </div>\n\n    <h2>Promocja</h2>\n    <div class=\"row\">\n        <div class=\"col-3\" *ngFor=\"let product of productsPromotion\">\n            <div class=\"product\">\n                <a [routerLink]=\"['/product', product.product_id]\">\n                    <div class=\"card\" style=\"width: 12rem;\">\n                        <h4 class=\"card-title\">{{product.product_mark}}</h4>\n                        <img src=\"../../../assets/img/drone.jpeg\" class=\"card-img-top\" alt=\"product\">\n                        <div class=\"card-body my-card-body\">\n                            <p class=\"card-text\">kamera: {{product.product_camera}}</p>\n                            <p class=\"card-text\">zasięg: {{product.product_range}} m</p>\n                            <p class=\"card-text\">czas pracy: {{product.product_time_work}} min</p>\n                            <h5 class=\"card-text\">{{product_product_price}} zł</h5>\n                        </div>\n                    </div>\n                </a>\n            </div>\n        </div>\n    </div>\n\n  </ng-container>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navi/menu/menu.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navi/menu/menu.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/']\">x-tom</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item\" routerLinkActive=\"active\">\n            <a class=\"nav-link\" [routerLink]=\"['/products', 'drones']\">Drony</a>\n          </li>\n  \n          <li class=\"nav-item\" routerLinkActive=\"active\">\n            <a class=\"nav-link\" [routerLink]=\"['/products', 'laptops']\">Laptopy</a>\n          </li>\n           \n          <li class=\"nav-item\" routerLinkActive=\"active\">\n            <a class=\"nav-link\" [routerLink]=\"['/products', 'smartphones']\">Smartfony</a>\n          </li>\n          \n            <li class=\"nav-item\" routerLinkActive=\"active\">\n              <a class=\"nav-link\" [routerLink]=\"['/koszyk']\">Koszyk</a>\n            </li>\n          \n          <ng-container *ngIf=\"auth.isAuthenticated\">\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n              <a class=\"nav-link\" [routerLink]=\"['/moje-zamowienia']\">Moje Zamówienia</a>\n            </li>\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n              <a class=\"nav-link\" [routerLink]=\"['/profile']\">Twoje konto</a>\n            </li>\n          </ng-container>\n\n          <ng-container *ngIf=\"auth.isAuthenticated && auth.role == 'ADMIN'\">\n            \n            <li class=\"nav-item\" routerLinkActive=\"active\">\n              <a class=\"nav-link\" [routerLink]=\"['/panel-administracyjny']\">Zarządzaj sklepem</a>\n            </li>\n            \n          </ng-container>\n\n          <ng-container *ngIf=\"!auth.isAuthenticated\">\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n              <a class=\"nav-link\" [routerLink]=\"['/logowanie']\">Zaloguj</a>\n            </li>\n\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n              <a class=\"nav-link\" [routerLink]=\"['/rejestracja']\">Załóż konto</a>\n            </li>\n          </ng-container>\n          \n        </ul>\n      </div>\n        <div class=\"navbar-text\" *ngIf=\"auth.isAuthenticated\">\n            <profile-bar></profile-bar>\n        </div>\n  </nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navi/page-not-found/page-not-found.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navi/page-not-found/page-not-found.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>page-not-found works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/add-order/add-order.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders/add-order/add-order.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("      <div class=\"row\">\n        <div class=\"col-6\">\n            <order-form></order-form>\n        </div>\n        <div class=\"col-6\">\n            <cart [setPathOrder]=\"pathOrder\"></cart>\n        </div>\n    </div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/order-sumary/order-sumary.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders/order-sumary/order-sumary.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ng-container *ngIf=\"!saved\">\n    <h3>Podsumowanie</h3>\n\n<div class=\"row\">\n    <div class=\"col-7\">\n        <pre>\n            {{orderData | json}}\n        </pre>\n    </div>\n\n    <div class=\"col-5\">\n        <cart [setPathOrder]=\"pathOrder\" (setOrderItem)=\"getOrderItemCart($event)\"></cart>\n    </div>\n</div>\n<pre>\n    {{orderItem | json}}\n</pre>\n\n<a class=\"btn btn-success\" (click)=\"save()\">Kupuję i płacę</a>\n</ng-container>\n\n<ng-container *ngIf=\"saved\">\n<h3>Dziękujemy za zakupy!!! :)</h3>\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/order/order.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders/order/order.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n <ng-container *ngIf=\"auth.isAuthenticated && order\">\n    <ng-container *ngIf=\"auth.isAuthenticated && auth.role == 'ADMIN'\">\n        <button class=\"btn btn-danger\" [routerLink]=\"['/zamowienie-usuwanie', order.orders_id]\">Usuń zamówienie</button>\n    </ng-container>\n<h4>Numer zamówienia: {{order.orders_number}}</h4>\n<div class=\"row\">\n    <div class=\"col-6\">\n        <ng-container *ngIf=\"auth.isAuthenticated && auth.role == 'ADMIN'\">\n            <button class=\"btn btn-info\" [routerLink]=\"['/edit-order-address', order.orders_id]\">Edytuj</button>\n        </ng-container>\n        <h6>Dane do wysyłki</h6>\n        <table class=\"table table-striped\">\n            <tbody>\n                <tr>\n                    <td>imię i nazwisko</td>\n                    <td><strong>{{order.orders_firstName}} {{order.orders_lastName}}</strong></td>\n              </tr>\n              <tr>\n                <td>email</td>\n                <td><strong>{{order.orders_email}}</strong></td>\n            </tr>\n            <tr>\n                <td>telefon</td>\n                <td><strong>{{order.orders_phoneNumber}}</strong></td>\n            </tr>\n            <tr>\n                <td>miejscowość</td>\n                <td><strong>{{order.orders_zipCode}} {{order.orders_city}}</strong></td>\n            </tr>\n            <tr>\n                <td>ulica</td>\n                <td><strong>{{order.orders_street}}</strong></td>\n            </tr>\n            </tbody>\n          </table>\n    </div>\n\n    <div class=\"col-6\">\n        <ng-container *ngIf=\"auth.isAuthenticated && auth.role == 'ADMIN'\">\n            <button class=\"btn btn-info\" [routerLink]=\"['/edit-order-detail', order.orders_id]\">Edytuj</button>\n        </ng-container>\n        <h6>Informacje o zamówieniu</h6>\n          <table class=\"table table-striped\">\n            <tbody>\n                <tr>\n                    <td>status</td>\n                    <td><strong>{{order.orders_status}}</strong></td>\n              </tr>\n              <tr>\n                <td>data zamówienia</td>\n                <td><strong>{{order.orders_date_time | date: 'yyyy-MM-dd HH:mm'}}</strong></td>\n            </tr>\n            <tr>\n                <td>przewidywany czas dostawy</td>\n                <td><strong>{{order.orders_date_time_delivery | date: 'yyyy-MM-dd HH:mm'}}</strong></td>\n            </tr>\n            <tr>\n                <td>sposób dostawy</td>\n                <td><strong>{{order.orders_delivery_method}}</strong></td>\n            </tr>\n            <tr>\n                <td>sposób płatności</td>\n                <td><strong>{{order.orders_payments_method}}</strong></td>\n            </tr>\n            <tr>\n                <td>wartość zamówienia</td>\n                <td style=\"border: 1px solid red;\"><strong>{{order.orders_payments_sum}} zł</strong></td>\n            </tr>\n            </tbody>\n          </table>\n    </div>\n</div>\n\n<div class=\"row\">\n    <h4>Zamówione produkty</h4>\n    <div class=\"col-12\">\n        <table class=\"table table-striped\">\n            <thead>\n                <tr>\n                  <th scope=\"col\">lp</th>\n                  <th scope=\"col\">nazwa</th>\n                  <th scope=\"col\">cena</th>\n                  <th scope=\"col\">zamówiona ilość</th>\n                  <th scope=\"col\">razem</th>\n                </tr>\n              </thead>\n            <tbody>\n                <tr *ngFor=\"let item of orderItem let i = index;\">\n                    <th scope=\"row\">{{i+1}}</th>\n                    <td><a [routerLink]=\"['/product',item.product.product_id]\">{{item.product.product_mark}}</a></td>\n                    <td>{{item.order_item_price}} zł</td>\n                    <td>{{item.order_item_amount}}</td>\n                    <td>{{item.order_item_amount * item.order_item_price}} zł</td>\n              </tr>\n            </tbody>\n          </table>\n    </div>\n</div>\n</ng-container>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders-delete/orders-delete.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders-delete/orders-delete.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"auth.isAuthenticated && auth.role == 'ADMIN'\">\n\n    <ng-container *ngIf=\"!remove\">\n        <p>\n            Czy napewo chcesz usunąć zamówienie?\n        </p>\n        \n        <a class=\"btn btn-success\" [routerLink]=\"['/zamowienie-szczegoly']\" [queryParams]=\"{ order_id: orderId}\">Nie</a>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"delete()\">Tak</button>\n    </ng-container>\n\n    <ng-container *ngIf=\"remove\">\n        <div class=\"alert alert-success\" role=\"alert\">\n            Usunięto\n          </div>\n        <a class=\"btn btn-success\" [routerLink]=\"['/zamowienia-admin']\">Ok</a>\n    </ng-container>\n</ng-container>\n\n<ng-container *ngIf=\"!auth.isAuthenticated\">\n    <div class=\"alert alert-warning\" role=\"alert\">\n        <h3>Nie jesteś zalogowany</h3>\n        <button class=\"btn btn-info\" [routerLink]=\"['/login']\">Zaloguj</button>\n      </div>\n  </ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders-manager/orders-manager.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders-manager/orders-manager.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Zamówienia</h1>\n<ng-container *ngIf=\"auth.isAuthenticated && auth.role == 'ADMIN'\">\n    <table class=\"table table-striped\">\n        <thead>\n          <tr>\n            <th scope=\"col\">lp</th>\n            <th scope=\"col\">numer zamówienia</th>\n            <th scope=\"col\">data zamówienia</th>\n            <th scope=\"col\">status zamówienia</th>\n            <th scope=\"col\">wartość zamówienia</th>\n            <th scope=\"col\"></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let order of orders let i = index;\">\n            <th scope=\"row\">{{i+1}}</th>\n            <td>{{order.orders_number}}</td>\n            <td>{{order.orders_date_time | date: 'yyyy-MM-dd HH:mm'}}</td>\n            <td>{{order.orders_status}}</td>\n            <td>{{order.orders_payments_sum}} zł</td>\n            <td><button class=\"btn btn-info\" (click)=\"goOrder(order)\">szczegóły</button></td>        \n          </tr>\n        </tbody>\n      </table>\n</ng-container>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders/orders.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders/orders.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Moje zamówienia</h1>\n<ng-container *ngIf=\"auth.isAuthenticated\">\n    <table class=\"table table-striped\">\n        <thead>\n          <tr>\n            <th scope=\"col\">lp</th>\n            <th scope=\"col\">numer zamówienia</th>\n            <th scope=\"col\">data zamówienia</th>\n            <th scope=\"col\">status zamówienia</th>\n            <th scope=\"col\">wartość zamówienia</th>\n            <th scope=\"col\"></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let order of userOrders let i = index;\">\n            <th scope=\"row\">{{i+1}}</th>\n            <td>{{order.orders_number}}</td>\n            <td>{{order.orders_date_time | date: 'yyyy-MM-dd HH:mm'}}</td>\n            <td>{{order.orders_status}}</td>\n            <td>{{order.orders_payments_sum}} zł</td>\n            <td><button class=\"btn btn-info\" (click)=\"goOrder(order)\">szczegóły</button></td>        \n          </tr>\n        </tbody>\n      </table>\n</ng-container>\n\n<error-handler [errorHandler]=\"statusError\"></error-handler>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/add-product/add-product.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/add-product/add-product.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"auth.isAuthenticated && auth.role == 'ADMIN'\">\n    <form class=\"contact100-form\" [formGroup]=\"selectProductForm\">        \n        <div class=\"form-group wrap-input100 rs1-wrap-input100\">\n            <label class=\"label-input100\" for=\"Status\">Wybierz typ produktu, który chcesz dodać:</label>\n            <select class=\"form-control\" ngModel formControlName=\"product_type\">\n                <option value=\"drone\">Dron</option>\n                <option value=\"laptop\">Laptop</option>\n                <option value=\"smartphone\">Smartphone</option>\n            </select>\n        </div>\n    </form>\n\n\n<ng-container *ngIf=\"selectProductForm.value.product_type == 'drone'\">\n    <p>Dodawanie drona</p>\n    <drone-form (saveProduct)=\"addProduct($event)\"></drone-form>\n</ng-container>\n\n<ng-container *ngIf=\"selectProductForm.value.product_type == 'laptop'\">\n    <p>Dodawanie laptopa</p>\n    <laptop-form (saveProduct)=\"addProduct($event)\"></laptop-form>\n</ng-container>\n\n<ng-container *ngIf=\"selectProductForm.value.product_type == 'smartphone'\">\n    <p>Dodawanie smartfona</p>\n    <smartphone-form (saveProduct)=\"addProduct($event)\"></smartphone-form>\n</ng-container>\n\n</ng-container>\n\n<ng-container *ngIf=\"!auth.isAuthenticated\">\n    <div class=\"alert alert-warning\" role=\"alert\">\n        <h3>Nie jesteś zalogowany</h3>\n        <button class=\"btn btn-info\" [routerLink]=\"['/logowanie']\">Zaloguj</button>\n      </div>\n  </ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/delete-product/delete-product.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/delete-product/delete-product.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"auth.isAuthenticated && auth.role == 'ADMIN'\">\n\n    <ng-container *ngIf=\"!remove\">\n        <p>\n            Czy napewo chcesz usunąć wybrany product?\n        </p>\n        \n        <a class=\"btn btn-success\" [routerLink]=\"['/product', id]\">Nie</a>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"delete()\">Tak</button>\n    </ng-container>\n\n    <ng-container *ngIf=\"remove\">\n        <div class=\"alert alert-success\" role=\"alert\">\n            Usunięto\n          </div>\n        <a class=\"btn btn-success\" [routerLink]=\"['/']\">Ok</a>\n    </ng-container>\n</ng-container>\n\n<ng-container *ngIf=\"!auth.isAuthenticated\">\n    <div class=\"alert alert-warning\" role=\"alert\">\n        <h3>Nie jesteś zalogowany</h3>\n        <button class=\"btn btn-info\" [routerLink]=\"['/login']\">Zaloguj</button>\n      </div>\n  </ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/edit-product/edit-product.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/edit-product/edit-product.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"auth.isAuthenticated && auth.role == 'ADMIN'\">\n    <ng-container *ngIf=\"typeProduct == 'drone'\">\n        <h3>Edycja drona</h3>\n        <drone-form [getProduct]=\"editedProduct\" (saveProduct)=\"updateProduct($event)\"></drone-form>\n    </ng-container>\n    \n    <ng-container *ngIf=\"typeProduct == 'laptop'\">\n        <h3>Edycja laptopa</h3>\n        <laptop-form [getProduct]=\"editedProduct\" (saveProduct)=\"updateProduct($event)\"></laptop-form>\n    </ng-container>\n    \n    <ng-container *ngIf=\"typeProduct == 'smartphone'\">\n        <h3>Edycja smartfona</h3>\n        <smartphone-form [getProduct]=\"editedProduct\" (saveProduct)=\"updateProduct($event)\"></smartphone-form>\n    </ng-container>\n</ng-container>\n\n<ng-container *ngIf=\"!auth.isAuthenticated\">\n    <div class=\"alert alert-warning\" role=\"alert\">\n        <h3>Nie jesteś zalogowany</h3>\n        <button class=\"btn btn-info\" [routerLink]=\"['/login']\">Zaloguj</button>\n      </div>\n  </ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/product/drone-by-id/drone-by-id.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/product/drone-by-id/drone-by-id.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"product\">\n    <h3>Dron</h3>\n    <div class=\"row\">\n        <div class=\"col-4\">\n            <img src=\"../../../assets/img/drone22.png\" class=\"card-img-top\" alt=\"product\">\n        </div>\n        <div class=\"col-8\">\n            <div class=\"mark\">\n                <h2>{{product.product_mark}}</h2>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-6\">\n                    <div class=\"parameters\">\n                        <p>dostępna ilość: {{product.product_amount_available - product.product_amount_sold}} szt</p>\n                        <p>opis: {{product.product_description}}</p>\n                        <p>kamera: {{product.product_camera}}</p>\n                        <p>zasięg: {{product.product_range}} m</p>\n                        <p>czas pracy: {{product.product_time_work}} min</p>\n                    </div>\n                </div>\n\n                <div class=\"col-6\">\n                    <div class=\"basket\">\n\n                    </div>\n                   <h3>{{product.product_price}} zł</h3>\n\n                   <div class=\"options\">\n                    <ng-container *ngIf=\"cart\">\n                        <form class=\"contact100-form\" [formGroup]=\"addProductForm\">        \n                            <div class=\"form-group wrap-input100 rs1-wrap-input100\">\n                                <label>Ilość:</label>\n                                <select class=\"form-control\" [(ngModel)]=\"amount\" formControlName=\"amount\">\n                                    <option value=\"1\">1</option>\n                                    <option value=\"2\">2</option>\n                                    <option value=\"3\">3</option>\n                                    <option value=\"4\">4</option>\n                                    <option value=\"5\">5</option>\n                                    <option value=\"6\">6</option>\n                                </select>\n                            </div>\n                            <a  type=\"button\" class=\"btn btn-secondary\" (click)='addToCart(product)'>Dodaj do koszyka</a>\n                        </form>\n                       </ng-container>\n                       <ng-container *ngIf=\"!cart\">\n                            <div class=\"alert alert-success\" role=\"alert\">\n                                dodano!!!\n                              </div>\n                            <a class=\"btn btn-info\" [routerLink]=\"['/koszyk']\">przejdz do koszyka</a>\n                       </ng-container>\n                   </div>\n\n                   <ng-container *ngIf=\"auth.isAuthenticated && auth.role == 'ADMIN'\">\n                            <div class=\"options\">\n                                <a class=\"btn btn-info\" [routerLink]=\"['/edit-product', product.product_id]\">Edytuj</a>\n                            </div>\n                            <div class=\"options\">\n                                <a class=\"btn btn-danger\" [routerLink]=\"['/delete-product', product.product_id]\">Usuń</a>\n                            </div>\n                   </ng-container>                   \n                </div>\n            </div>\n        </div>\n    </div>\n</ng-container>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/product/laptop-by-id/laptop-by-id.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/product/laptop-by-id/laptop-by-id.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ng-container *ngIf=\"product\">\n    <h3>Laptop</h3>\n    <div class=\"row\">\n        <div class=\"col-4\">\n            <img src=\"../../../assets/img/drone22.png\" class=\"card-img-top\" alt=\"product\">\n        </div>\n        <div class=\"col-8\">\n            <div class=\"mark\">\n                <h2>{{product.product_mark}}</h2>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-6\">\n                    <div class=\"parameters\">\n                        <p>dostępna ilość: {{product.product_amount_available - product.product_amount_sold}} szt</p>\n                        <p>opis: {{product.product_description}}</p>\n                        <p>kamera: {{product.product_camera}}</p>\n                        <p>zasięg: {{product.product_range}} m</p>\n                        <p>czas pracy: {{product.product_time_work}} min</p>\n                    </div>\n                </div>\n\n                <div class=\"col-6\">\n                    <div class=\"basket\">\n\n                    </div>\n                   <h3>{{product.product_price}} zł</h3>\n\n                   <div class=\"options\">\n                    <ng-container *ngIf=\"cart\">\n                        <form class=\"contact100-form\" [formGroup]=\"addProductForm\">        \n                            <div class=\"form-group wrap-input100 rs1-wrap-input100\">\n                                <label>Ilość:</label>\n                                <select class=\"form-control\" [(ngModel)]=\"amount\" formControlName=\"amount\">\n                                    <option value=\"1\">1</option>\n                                    <option value=\"2\">2</option>\n                                    <option value=\"3\">3</option>\n                                    <option value=\"4\">4</option>\n                                    <option value=\"5\">5</option>\n                                    <option value=\"6\">6</option>\n                                </select>\n                            </div>\n                            <a  type=\"button\" class=\"btn btn-secondary\" (click)='addToCart(product)'>Dodaj do koszyka</a>\n                        </form>\n                       </ng-container>\n                       <ng-container *ngIf=\"!cart\">\n                            <div class=\"alert alert-success\" role=\"alert\">\n                                dodano!!!\n                              </div>\n                            <a class=\"btn btn-info\" [routerLink]=\"['/koszyk']\">przejdz do koszyka</a>\n                       </ng-container>\n                   </div>\n\n                   <ng-container *ngIf=\"auth.isAuthenticated && auth.role == 'ADMIN'\">\n                            <div class=\"options\">\n                                <a class=\"btn btn-info\" [routerLink]=\"['/edit-product', product.product_id]\">Edytuj</a>\n                            </div>\n                            <div class=\"options\">\n                                <a class=\"btn btn-danger\" [routerLink]=\"['/delete-product', product.product_id]\">Usuń</a>\n                            </div>\n                   </ng-container>                   \n                </div>\n            </div>\n        </div>\n    </div>\n</ng-container>\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/product/product.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/product/product.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"productType == 'drone'\">\n    <drone-by-id [getProduct]=\"product\" (addToCart)=\"addtoCart($event)\"></drone-by-id>\n</ng-container>\n\n<ng-container *ngIf=\"productType == 'laptop'\">\n    <laptop-by-id [getProduct]=\"product\" (addToCart)=\"addtoCart($event)\"></laptop-by-id>\n</ng-container>\n\n<ng-container *ngIf=\"productType == 'smartphone'\">\n    <smartphone-by-id [getProduct]=\"product\" (addToCart)=\"addtoCart($event)\"></smartphone-by-id>\n</ng-container>\n\n<error-handler [errorHandler]=\"statusError\"></error-handler>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/product/smartphone-by-id/smartphone-by-id.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/product/smartphone-by-id/smartphone-by-id.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"product\">\n    <h3>Smartphone</h3>\n    <div class=\"row\">\n        <div class=\"col-4\">\n            <img src=\"../../../assets/img/drone22.png\" class=\"card-img-top\" alt=\"product\">\n        </div>\n        <div class=\"col-8\">\n            <div class=\"mark\">\n                <h2>{{product.product_mark}}</h2>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-6\">\n                    <div class=\"parameters\">\n                        <p>dostępna ilość: {{product.product_amount_available - product.product_amount_sold}} szt</p>\n                        <p>opis: {{product.product_description}}</p>\n                        <p>kamera: {{product.product_camera}}</p>\n                        <p>zasięg: {{product.product_range}} m</p>\n                        <p>czas pracy: {{product.product_time_work}} min</p>\n                    </div>\n                </div>\n\n                <div class=\"col-6\">\n                    <div class=\"basket\">\n\n                    </div>\n                   <h3>{{product.product_price}} zł</h3>\n\n                   <div class=\"options\">\n                       <ng-container *ngIf=\"cart\">\n                        <form class=\"contact100-form\" [formGroup]=\"addProductForm\">        \n                            <div class=\"form-group wrap-input100 rs1-wrap-input100\">\n                                <label>Ilość:</label>\n                                <select class=\"form-control\" [(ngModel)]=\"amount\" formControlName=\"amount\">\n                                    <option value=\"1\">1</option>\n                                    <option value=\"2\">2</option>\n                                    <option value=\"3\">3</option>\n                                    <option value=\"4\">4</option>\n                                    <option value=\"5\">5</option>\n                                    <option value=\"6\">6</option>\n                                </select>\n                            </div>\n                            <a  type=\"button\" class=\"btn btn-secondary\" (click)='addToCart(product)'>Dodaj do koszyka</a>\n                        </form>\n                       </ng-container>\n                       <ng-container *ngIf=\"!cart\">\n                            <div class=\"alert alert-success\" role=\"alert\">\n                                dodano!!!\n                              </div>\n                            <a class=\"btn btn-info\" [routerLink]=\"['/koszyk']\">przejdz do koszyka</a>\n                       </ng-container>\n                    \n                   </div>\n\n                   <ng-container *ngIf=\"auth.isAuthenticated && auth.role == 'ADMIN'\">\n                            <div class=\"options\">\n                                <a class=\"btn btn-info\" [routerLink]=\"['/edit-product', product.product_id]\">Edytuj</a>\n                            </div>\n                            <div class=\"options\">\n                                <a class=\"btn btn-danger\" [routerLink]=\"['/delete-product', product.product_id]\">Usuń</a>\n                            </div>\n                   </ng-container>                   \n                </div>\n            </div>\n        </div>\n    </div>\n</ng-container>\n\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products/drones/drones.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/products/drones/drones.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"auth.isAuthenticated && auth.role == 'ADMIN'\">\n    <a class=\"btn btn-secondary\" [routerLink]=\"['/add-product']\">Dodaj produkt</a>\n</ng-container>\n\n<div class=\"row\">\n<div *ngFor=\"let drone of drones\">\n    <div class=\"col-4\">\n        <div class=\"drone\">\n            <a [routerLink]=\"['/product', drone.product_id]\">\n                <div class=\"card\" style=\"width: 12rem;\">\n                    <h4 class=\"card-title\">{{drone.product_mark}}</h4>\n                    <img src=\"../../../assets/img/drone.jpeg\" class=\"card-img-top\" alt=\"drone\">\n                    <div class=\"card-body my-card-body\">\n                        <p class=\"card-text\">kamera: {{drone.product_camera}}</p>\n                        <p class=\"card-text\">zasięg: {{drone.product_range}} m</p>\n                        <p class=\"card-text\">czas pracy: {{drone.product_time_work}} min</p>\n                        <h5 class=\"card-text\">{{drone.product_price}} zł</h5>\n                    </div>\n                </div>\n            </a>\n        </div>\n    </div>\n</div>\n</div>\n\n<error-handler [errorHandler]=\"statusError\"></error-handler>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products/laptops/laptops.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/products/laptops/laptops.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"auth.isAuthenticated && auth.role == 'ADMIN'\">\n    <a class=\"btn btn-secondary\" [routerLink]=\"['/add-product']\">Dodaj produkt</a>\n</ng-container>\n<div class=\"row\">\n    <div *ngFor=\"let laptop of laptops\">\n        <div class=\"col-4\">\n            <div class=\"laptop\">\n                <a [routerLink]=\"['/product', laptop.product_id]\">\n                    <div class=\"card\" style=\"width: 12rem;\">\n                        <h5 class=\"card-title\">{{laptop.product_mark}}</h5>\n                        <img src=\"../../../assets/img/laptop.jpg\" class=\"card-img-top\" alt=\"laptop\">\n                        <div class=\"card-body my-card-body\">\n                            <p class=\"card-text\">procesor: {{laptop.product_processor}}</p>\n                            <p class=\"card-text\">pamięć: {{laptop.product_ram_size}} GB</p>\n                            <p class=\"card-text\">grafika: {{laptop.product_graphics_card}}</p>\n                            <h5 class=\"card-text\">{{laptop.product_price}} zł</h5>\n                        </div>\n                    </div>\n                </a>\n            </div>\n\n        </div>\n    </div>\n</div>\n\n<error-handler [errorHandler]=\"statusError\"></error-handler>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products/products.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/products/products.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"productType == 'drones'\">\n    <drones></drones>\n</ng-container>\n\n<ng-container *ngIf=\"productType == 'laptops'\">\n    <laptops></laptops>\n</ng-container>\n\n<ng-container *ngIf=\"productType == 'smartphones'\">\n    <smartphones></smartphones>\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products/smartphones/smartphones.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/products/smartphones/smartphones.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"auth.isAuthenticated && auth.role == 'ADMIN'\">\n    <a class=\"btn btn-secondary\" [routerLink]=\"['/add-product']\">Dodaj produkt</a>\n</ng-container>\n\n\n<div class=\"row\">\n    <div *ngFor=\"let smartphone of smartphones\">\n        <div class=\"col-4\">\n            <div class=\"smartphone\">\n                <a [routerLink]=\"['/product', smartphone.product_id]\">\n                    <div class=\"card\" style=\"width: 12rem;\">\n                        <h5 class=\"card-title\">{{smartphone.product_mark}}</h5>\n                        <img src=\"../../../assets/img/nokia.jpg\" class=\"card-img-top\" alt=\"smartphone\">\n                        <div class=\"card-body my-card-body\">\n                            <p class=\"card-text\">ekran: {{smartphone.product_screen_diagonal}}\"</p>\n                            <p class=\"card-text\">system: {{smartphone.product_system}}</p>\n                            <p class=\"card-text\">pamięć: {{smartphone.product_disc_size}} GB</p>\n                            <h5 class=\"card-text\">{{smartphone.product_price}} zł</h5>\n                        </div>\n                    </div>\n                </a>\n            </div>\n        </div>\n    </div>\n</div>\n\n<error-handler [errorHandler]=\"statusError\"></error-handler>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/edit-profile/edit-profile.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/edit-profile/edit-profile.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ng-container *ngIf=\"auth.isAuthenticated\">\n    <user-form [getPath]=\"returnPath\" [getUser]=\"editedUser\" (saveUser)=\"updateUser($event)\"></user-form>\n</ng-container>\n \n<ng-container *ngIf=\"!auth.isAuthenticated\">\n    <div class=\"alert alert-warning\" role=\"alert\">\n        <h3>Nie jesteś zalogowany</h3>\n        <button class=\"btn btn-info\" [routerLink]=\"['/login']\">Zaloguj</button>\n      </div>\n  </ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile-bar/profile-bar.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile-bar/profile-bar.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"auth.isAuthenticated\">\n    Witaj <strong>{{name}}</strong> :)\n    <span (click)=\"auth.logout()\"> | wyloguj</span>\n </ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile/profile.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile/profile.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"auth.isAuthenticated\">\n    <div *ngIf=\"profile\">\n    <a class=\"btn btn-secondary\" [routerLink]=\"['/edit-profile', profile.user_id]\">Edytuj dane adresowe</a> \n    <a class=\"btn btn-danger\" [routerLink]=\"['/zmiana-hasla']\">zmień hasło</a>\n    <a class=\"btn btn-danger\" [routerLink]=\"['/zmiana-email']\">zmień email</a>\n\n        <dl class=\"row\">\n            <dt class=\"col-3\">email</dt>\n            <dd class=\"col-9\">{{profile.user_email}}</dd>\n            <dt class=\"col-3\">imię</dt>\n            <dd class=\"col-9\">{{profile.user_firstName}}</dd>\n            <dt class=\"col-3\">nazwisko</dt>\n            <dd class=\"col-9\">{{profile.user_lastName}}</dd>\n            <dt class=\"col-3\">numer tel</dt>\n            <dd class=\"col-9\">{{profile.user_phoneNumber}}</dd>\n            <dt class=\"col-3\">kod pocztowy</dt>\n            <dd class=\"col-9\">{{profile.user_zipCode}}</dd>\n            <dt class=\"col-3\">miasto</dt>\n            <dd class=\"col-9\">{{profile.user_city}}</dd>\n            <dt class=\"col-3\">ulica</dt>\n            <dd class=\"col-9\">{{profile.user_street}}</dd>\n        </dl>    \n</div>\n</ng-container>\n\n<ng-container *ngIf=\"!auth.isAuthenticated\">\n    <div class=\"alert alert-warning\" role=\"alert\">\n        <h3>Nie jesteś zalogowany</h3>\n        <button class=\"btn btn-info\" [routerLink]=\"['/logowanie']\">Zaloguj</button>\n      </div>\n  </ng-container>\n\n  <error-handler [errorHandler]=\"statusError\"></error-handler>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/delete-user/delete-user.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/delete-user/delete-user.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ng-container *ngIf=\"auth.isAuthenticated && auth.role == 'ADMIN'\">\n\n    <ng-container *ngIf=\"!remove\">\n        <p>\n            Czy napewo chcesz usunąć wybranego użytkownika?\n        </p>\n        \n        <a class=\"btn btn-success\" [routerLink]=\"['/user', id]\">Nie</a>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"delete()\">Tak</button>\n    </ng-container>\n\n    <ng-container *ngIf=\"remove\">\n        <div class=\"alert alert-success\" role=\"alert\">\n            Usunięto\n          </div>\n        <a class=\"btn btn-success\" [routerLink]=\"['/users']\">Ok</a>\n    </ng-container>\n</ng-container>\n\n<ng-container *ngIf=\"!auth.isAuthenticated\">\n    <div class=\"alert alert-warning\" role=\"alert\">\n        <h3>Nie jesteś zalogowany</h3>\n        <button class=\"btn btn-info\" [routerLink]=\"['/login']\">Zaloguj</button>\n      </div>\n  </ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/edit-user/edit-user.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/edit-user/edit-user.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"auth.isAuthenticated && auth.role == 'ADMIN'\">\n    <user-form [getPath]=\"returnPath\" [getUser]=\"editedUser\" (saveUser)=\"updateUser($event)\"></user-form>\n</ng-container>\n\n<ng-container *ngIf=\"!auth.isAuthenticated\">\n    <div class=\"alert alert-warning\" role=\"alert\">\n        <h3>Nie jesteś zalogowany</h3>\n        <button class=\"btn btn-info\" [routerLink]=\"['/login']\">Zaloguj</button>\n      </div>\n  </ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/role-user/role-user.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/role-user/role-user.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"auth.isAuthenticated && auth.role == 'ADMIN'\">\n    <user-role-form [getUser]=\"editedUser\" (saveUser)=\"updateUser($event)\"></user-role-form>\n</ng-container>\n\n<ng-container *ngIf=\"!auth.isAuthenticated\">\n    <div class=\"alert alert-warning\" role=\"alert\">\n        <h3>Nie jesteś zalogowany</h3>\n        <button class=\"btn btn-info\" [routerLink]=\"['/login']\">Zaloguj</button>\n      </div>\n  </ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/user-by-id/user-by-id.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/user-by-id/user-by-id.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n    <ng-container *ngIf=\"auth.isAuthenticated && auth.role == 'ADMIN'\">\n        <ng-container *ngIf=\"user | async as user\">\n            <a class=\"btn btn-info\" [routerLink]=\"['/edit-user', user.user_id]\">Edytuj</a>\n            <a class=\"btn btn-info\" [routerLink]=\"['/role-user', user.user_id]\">Uprawnienia</a>\n            <a class=\"btn btn-danger\" [routerLink]=\"['/delete-user', user.user_id]\">Usuń</a>\n            <dl class=\"row\">\n                <dt class=\"col-3\">email</dt>\n                <dd class=\"col-9\">{{user.user_email}}</dd>\n                <dt class=\"col-3\">role</dt>\n                <dd class=\"col-9\">{{user.user_role}}</dd>\n                <dt class=\"col-3\">imię</dt>\n                <dd class=\"col-9\">{{user.user_firstName}}</dd>\n                <dt class=\"col-3\">nazwisko</dt>\n                <dd class=\"col-9\">{{user.user_lastName}}</dd>\n                <dt class=\"col-3\">numer tel</dt>\n                <dd class=\"col-9\">{{user.user_phoneNumber}}</dd>\n                <dt class=\"col-3\">kod pocztowy</dt>\n                <dd class=\"col-9\">{{user.user_zipCode}}</dd>\n                <dt class=\"col-3\">miasto</dt>\n                <dd class=\"col-9\">{{user.user_city}}</dd>\n                <dt class=\"col-3\">ulica</dt>\n                <dd class=\"col-9\">{{user.user_street}}</dd>\n            </dl>\n        </ng-container>\n\n    </ng-container>\n\n    <ng-container *ngIf=\"!auth.isAuthenticated\">\n        <div class=\"alert alert-warning\" role=\"alert\">\n            <h3>Nie jesteś zalogowany</h3>\n            <button class=\"btn btn-info\" [routerLink]=\"['/login']\">Zaloguj</button>\n          </div>\n      </ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users/users.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/users/users.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"auth.isAuthenticated && auth.role == 'ADMIN'\">\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th scope=\"col\">lp</th>\n        <th scope=\"col\">imię</th>\n        <th scope=\"col\">nazwisko</th>\n        <th scope=\"col\">email</th>\n        <th scope=\"col\">info</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let user of usersList let i = index;\">\n        <th scope=\"row\">{{i+1}}</th>\n        <td>{{user.user_firstName}}</td>\n        <td>{{user.user_lastName}}</td>\n        <td>{{user.user_email}}</td>\n        <a [routerLink]=\"['/user', user.user_id]\" class=\"btn btn-info\">więcej</a>\n      </tr>\n    </tbody>\n  </table>\n</ng-container>\n\n<ng-container *ngIf=\"!auth.isAuthenticated\">\n  <div class=\"alert alert-warning\" role=\"alert\">\n      <h3>Nie jesteś zalogowany</h3>\n      <button class=\"btn btn-info\" [routerLink]=\"['/logowanie']\">Zaloguj</button>\n    </div>\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/validation/validation-feedback/validation-feedback.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/validation/validation-feedback/validation-feedback.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"validation-feedback\" *ngIf=\"control.touched || control.dirty\">\n    <div *ngIf=\"control.hasError('required')\">\n        Pole jest wymagane\n    </div>\n    \n    <div *ngIf=\"control.getError('minlength') as error\">\n        wymagane przynajmniej {{error.requiredLength}} znaków\n    </div>\n\n    <div *ngIf=\"control.hasError('email')\">\n        Niepoprawny email\n    </div>\n    <div *ngIf=\"control.hasError('invalid-username')\">\n         email zajęty\n    </div>\n\n    <div *ngIf=\"control.getError('password') as error\">\n        Hasło musi zawierać:\n        <div *ngIf=\"error.lowercase\"> - małą literę</div>\n        <div *ngIf=\"error.uppercase\"> - dużą literę</div>\n        <div *ngIf=\"error.number\"> - liczbę</div>\n        <div *ngIf=\"error.special\"> - znak specjalny</div>\n    </div>\n\n    <div *ngIf=\"control.hasError('password_match')\">\n        Hasła nie są równe. Spróbuj ponownie!!!\n    </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/validation/validation-order-address/validation-order-address.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/validation/validation-order-address/validation-order-address.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"validation-feedback\" *ngIf=\"control.touched || control.dirty\">\n\n    <div *ngIf=\"control.hasError('required')\">\n        Pole jest wymagane\n    </div>\n\n    <div *ngIf=\"control.getError('minlength') as error\">\n        Musisz podać min {{error.requiredLength}} znaki\n    </div>\n\n    <div *ngIf=\"control.hasError('pattern')\">\n        Niepoprawny\n    </div>\n\n    <div *ngIf=\"control.hasError('email')\">\n        Niepoprawny email\n    </div>\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/validation/validation-product/validation-product.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/validation/validation-product/validation-product.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"validation-feedback\" *ngIf=\"control.touched || control.dirty\">\n    \n    <div *ngIf=\"control.hasError('required')\">\n            Pole jest wymagane\n    </div>\n\n    <div *ngIf=\"control.hasError('pattern')\">\n        wymagane liczby\n    </div>\n\n    <div *ngIf=\"control.getError('minlength') as error\">\n        Pozostało jeszcze {{error.requiredLength - control.value.length}} znaków do wpisania\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/admin/admin-product/admin-product.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin/admin-product/admin-product.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXByb2R1Y3QvYWRtaW4tcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/admin/admin-product/admin-product.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/admin-product/admin-product.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProductComponent", function() { return AdminProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var src_app_products_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/products/products.service */ "./src/app/products/products.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let AdminProductComponent = class AdminProductComponent {
    constructor(auth, productsService) {
        this.auth = auth;
        this.productsService = productsService;
        this.auth.state.subscribe();
        this.productsService.getAll().subscribe(response => {
            this.product = response;
        }, error => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpErrorResponse"]) {
                this.statusError = error.status;
                console.error(error.error);
            }
        });
    }
    ngOnInit() {
    }
};
AdminProductComponent.ctorParameters = () => [
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_products_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] }
];
AdminProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-product/admin-product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-product.component.css */ "./src/app/admin/admin-product/admin-product.component.css")).default]
    })
], AdminProductComponent);



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin/admin.component.ts");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin.routing.module */ "./src/app/admin/admin.routing.module.ts");
/* harmony import */ var _admin_product_admin_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-product/admin-product.component */ "./src/app/admin/admin-product/admin-product.component.ts");
/* harmony import */ var _error_error_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../error/error.module */ "./src/app/error/error.module.ts");







let AdminModule = class AdminModule {
};
AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"], _admin_product_admin_product_component__WEBPACK_IMPORTED_MODULE_5__["AdminProductComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _error_error_module__WEBPACK_IMPORTED_MODULE_6__["ErrorModule"],
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__["AdminRoutingModule"]
        ]
    })
], AdminModule);



/***/ }),

/***/ "./src/app/admin/admin.routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin.routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin/admin.component.ts");
/* harmony import */ var _admin_product_admin_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-product/admin-product.component */ "./src/app/admin/admin-product/admin-product.component.ts");





const routes = [
    {
        path: 'panel-administracyjny',
        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"]
    },
    {
        path: 'panel-administracyjny-produkty',
        component: _admin_product_admin_product_component__WEBPACK_IMPORTED_MODULE_4__["AdminProductComponent"]
    },
];
let AdminRoutingModule = class AdminRoutingModule {
};
AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], AdminRoutingModule);



/***/ }),

/***/ "./src/app/admin/admin/admin.component.css":
/*!*************************************************!*\
  !*** ./src/app/admin/admin/admin.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item a{\n    color: #000000;\n    text-decoration: none;   \n   }\n   \n   .item a:hover{\n   color: green;\n   }\n   \n   .item{\n       margin: 10px;\n   }\n   \n   .my-card-body p{\n   margin: 0;\n   }\n   \n   .my-card-body h5{\n       margin-top: 20px;\n       }\n   \n   .card{\n       padding: 6px;\n   }\n   \n   .card:hover{\n       border: 1px solid green;\n   }\n   \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7R0FDdEI7O0dBRUE7R0FDQSxZQUFZO0dBQ1o7O0dBRUE7T0FDSSxZQUFZO0dBQ2hCOztHQUVBO0dBQ0EsU0FBUztHQUNUOztHQUVBO09BQ0ksZ0JBQWdCO09BQ2hCOztHQUVKO09BQ0ksWUFBWTtHQUNoQjs7R0FFQTtPQUNJLHVCQUF1QjtHQUMzQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbSBhe1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgICBcbiAgIH1cbiAgIFxuICAgLml0ZW0gYTpob3ZlcntcbiAgIGNvbG9yOiBncmVlbjtcbiAgIH1cbiAgIFxuICAgLml0ZW17XG4gICAgICAgbWFyZ2luOiAxMHB4O1xuICAgfVxuICAgXG4gICAubXktY2FyZC1ib2R5IHB7XG4gICBtYXJnaW46IDA7XG4gICB9XG4gICBcbiAgIC5teS1jYXJkLWJvZHkgaDV7XG4gICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICB9XG4gICBcbiAgIC5jYXJke1xuICAgICAgIHBhZGRpbmc6IDZweDtcbiAgIH1cbiAgIFxuICAgLmNhcmQ6aG92ZXJ7XG4gICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG4gICB9XG4gICAiXX0= */");

/***/ }),

/***/ "./src/app/admin/admin/admin.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/admin/admin.component.ts ***!
  \************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");



let AdminComponent = class AdminComponent {
    constructor(auth) {
        this.auth = auth;
        this.auth.state.subscribe();
    }
    ngOnInit() {
    }
};
AdminComponent.ctorParameters = () => [
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin/admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin/admin.component.css")).default]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _navi_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navi/page-not-found/page-not-found.component */ "./src/app/navi/page-not-found/page-not-found.component.ts");




const routes = [
    {
        path: 'not-found',
        component: _navi_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"]
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'not-found',
        pathMatch: 'full'
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
            // enableTracing: true,
            // useHash:true,
            // errorHandler:()=>{},
            // initialNavigation: true,
            })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-content{\n    width: 1000px;\n    margin: 0 auto;\n    background-color: #f2f2f2;\n    position: relative;\n    padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGVudHtcbiAgICB3aWR0aDogMTAwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _auth_user_code_encrypt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/user-code-encrypt.service */ "./src/app/auth/user-code-encrypt.service.ts");




let AppComponent = class AppComponent {
    constructor(auth, userSessionStorage) {
        this.auth = auth;
        this.userSessionStorage = userSessionStorage;
    }
    ngOnInit() {
        if (localStorage.getItem('x-tom------>____ <o_o> ____<----x-tom') !== null) {
            this.auth.getUserIdInStorage();
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _auth_user_code_encrypt_service__WEBPACK_IMPORTED_MODULE_3__["UserCodeEncryptService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _profile_profile_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.module */ "./src/app/profile/profile.module.ts");
/* harmony import */ var _navi_navi_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navi/navi.module */ "./src/app/navi/navi.module.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _users_users_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./users/users.module */ "./src/app/users/users.module.ts");
/* harmony import */ var _cart_cart_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cart/cart.module */ "./src/app/cart/cart.module.ts");
/* harmony import */ var _products_products_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./products/products.module */ "./src/app/products/products.module.ts");
/* harmony import */ var _form_form_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./form/form.module */ "./src/app/form/form.module.ts");
/* harmony import */ var _orders_orders_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./orders/orders.module */ "./src/app/orders/orders.module.ts");
/* harmony import */ var _validation_validation_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./validation/validation.module */ "./src/app/validation/validation.module.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var _error_error_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./error/error.module */ "./src/app/error/error.module.ts");



















let AppModule = class AppModule {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.auth.state.subscribe(state => {
            if (this.auth.isAuthenticated) {
                // this.router.navigate(['/'])
            }
            else {
                // this.router.navigate(['/login'])
            }
        });
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__["NavigationEnd"]) {
                //...
            }
        });
    }
};
AppModule.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }
];
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"],
            _profile_profile_module__WEBPACK_IMPORTED_MODULE_7__["ProfileModule"],
            _navi_navi_module__WEBPACK_IMPORTED_MODULE_8__["NaviModule"],
            _users_users_module__WEBPACK_IMPORTED_MODULE_11__["UsersModule"],
            _cart_cart_module__WEBPACK_IMPORTED_MODULE_12__["CartModule"],
            _products_products_module__WEBPACK_IMPORTED_MODULE_13__["ProductsModule"],
            _form_form_module__WEBPACK_IMPORTED_MODULE_14__["FormModule"],
            _orders_orders_module__WEBPACK_IMPORTED_MODULE_15__["OrdersModule"],
            _validation_validation_module__WEBPACK_IMPORTED_MODULE_16__["ValidationModule"],
            _admin_admin_module__WEBPACK_IMPORTED_MODULE_17__["AdminModule"],
            _error_error_module__WEBPACK_IMPORTED_MODULE_18__["ErrorModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth-interceptor.service.ts":
/*!**************************************************!*\
  !*** ./src/app/auth/auth-interceptor.service.ts ***!
  \**************************************************/
/*! exports provided: AuthInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function() { return AuthInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");



let AuthInterceptorService = class AuthInterceptorService {
    constructor(auth) {
        this.auth = auth;
        this.auth.state.subscribe();
    }
    intercept(req, next) {
        return next.handle(this.getAuthorizedRequest(req));
        //  return next.handle(this.getAuthorizedRequest(req)).pipe(
        //     catchError((err, caught)=>{
        //       if(err instanceof HttpErrorResponse && err.status === 401){
        //           this.auth.logout('Sesja wygasła! Zaloguj się ponownie!')
        //           return empty()
        //       }
        //       if(err instanceof HttpErrorResponse && err.status === 404){
        //         console.error(err.error)
        //         console.log(err.status)
        //         return empty()
        //     }
        //       return Observable.throw(err)
        //     })
        //  )
    }
    getAuthorizedRequest(req) {
        if (!this.auth.isAuthenticated) {
            return req.clone({
                setHeaders: {
                    'Authorization': 'Bearer ' + this.auth.getTokenInLocalStorage()
                }
            });
        }
        else {
            return req.clone({
                setHeaders: {
                    'Authorization': 'Bearer ' + this.auth.getToken()
                }
            });
        }
    }
};
AuthInterceptorService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AuthInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], AuthInterceptorService);



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _auth_interceptor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-interceptor.service */ "./src/app/auth/auth-interceptor.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth.routing.module */ "./src/app/auth/auth.routing.module.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _validation_validation_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../validation/validation.module */ "./src/app/validation/validation.module.ts");
/* harmony import */ var _remind_password_remind_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./remind-password/remind-password.component */ "./src/app/auth/remind-password/remind-password.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/auth/reset-password/reset-password.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/auth/change-password/change-password.component.ts");
/* harmony import */ var _change_email_change_email_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./change-email/change-email.component */ "./src/app/auth/change-email/change-email.component.ts");
/* harmony import */ var _confirm_account_confirm_account_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./confirm-account/confirm-account.component */ "./src/app/auth/confirm-account/confirm-account.component.ts");









// import { AuthorizedGuard } from './authorized.guard';







let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"], _remind_password_remind_password_component__WEBPACK_IMPORTED_MODULE_11__["RemindPasswordComponent"], _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_12__["ResetPasswordComponent"], _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_13__["ChangePasswordComponent"], _change_email_change_email_component__WEBPACK_IMPORTED_MODULE_14__["ChangeEmailComponent"], _confirm_account_confirm_account_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmAccountComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _validation_validation_module__WEBPACK_IMPORTED_MODULE_10__["ValidationModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_8__["AuthRoutingModule"]
        ],
        providers: [
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                useClass: _auth_interceptor_service__WEBPACK_IMPORTED_MODULE_4__["AuthInterceptorService"],
                multi: true
            },
        ],
        exports: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"]]
    })
], AuthModule);



/***/ }),

/***/ "./src/app/auth/auth.routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth.routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _remind_password_remind_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./remind-password/remind-password.component */ "./src/app/auth/remind-password/remind-password.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/auth/reset-password/reset-password.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/auth/change-password/change-password.component.ts");
/* harmony import */ var _change_email_change_email_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./change-email/change-email.component */ "./src/app/auth/change-email/change-email.component.ts");
/* harmony import */ var _confirm_account_confirm_account_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./confirm-account/confirm-account.component */ "./src/app/auth/confirm-account/confirm-account.component.ts");










const routes = [
    {
        path: 'logowanie',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'logowanie/:options',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'rejestracja',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    },
    {
        path: 'przypomnij-haslo',
        component: _remind_password_remind_password_component__WEBPACK_IMPORTED_MODULE_5__["RemindPasswordComponent"]
    },
    {
        path: 'resetuj-haslo',
        component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordComponent"]
    },
    {
        path: 'zmiana-hasla',
        component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_7__["ChangePasswordComponent"]
    },
    {
        path: 'zmiana-email',
        component: _change_email_change_email_component__WEBPACK_IMPORTED_MODULE_8__["ChangeEmailComponent"]
    },
    {
        path: 'potwierdzenie-rejestracji/:code/:email',
        component: _confirm_account_confirm_account_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmAccountComponent"]
    },
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], AuthRoutingModule);



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _user_code_encrypt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-code-encrypt.service */ "./src/app/auth/user-code-encrypt.service.ts");






let AuthService = class AuthService {
    constructor(http, userCodeEnctryptService) {
        this.http = http;
        this.userCodeEnctryptService = userCodeEnctryptService;
        this.session = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.url = "http://localhost:8090/login";
        this.isAuthenticated = false;
        this.userSession = {
            token: '',
            user: this.user,
            status: false
        };
        this.state = this.session.pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(session => session && !!session.token), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(state => this.isAuthenticated = state));
        this.checkRole = this.session.pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(role => this.role = role.user.user_role));
    }
    login(credentials) {
        return this.http.post(this.url, credentials)
            .subscribe((session) => {
            this.session.next(session);
            if (session.status) {
                this.role = session.user.user_role;
                this.name = session.user.user_firstName;
                this.status = session.status;
                this.setTokenInLocalStorage(session.token);
                this.setUserIdInStorage(session.user.user_id);
            }
        }, error => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                console.error(error.error);
            }
        });
    }
    logout(message) {
        this.session.next(Object.assign({}, this.session.getValue(), { token: null, message }));
        this.clearRole();
        localStorage.removeItem('(O,,O)');
        localStorage.removeItem('x-tom------>____ <o_o> ____<----x-tom');
        // window.location.reload()      
    }
    getCurrentUser() {
        const session = this.session.getValue();
        return session && session.user;
    }
    checkEmail(email) {
        return this.http.post("http://localhost:8090/check-email", email);
    }
    clearRole() {
        this.role = "";
    }
    getToken() {
        const session = this.session.getValue();
        return session && session.token;
    }
    getMessage() {
        const session = this.session.getValue();
        return session && session.message;
    }
    setTokenInLocalStorage(token) {
        localStorage.setItem('(O,,O)', JSON.stringify(token));
    }
    getTokenInLocalStorage() {
        var token;
        if (localStorage.getItem('(O,,O)') !== null) {
            token = JSON.parse(localStorage.getItem('(O,,O)'));
            return token;
        }
    }
    setUserIdInStorage(userId) {
        var code = this.userCodeEnctryptService.encryptCode(userId);
        localStorage.setItem('x-tom------>____ <o_o> ____<----x-tom', JSON.stringify(code));
    }
    getUserIdInStorage() {
        var code = JSON.parse(localStorage.getItem('x-tom------>____ <o_o> ____<----x-tom'));
        var token = this.getTokenInLocalStorage();
        var userId = this.userCodeEnctryptService.decryptCode(code);
        this.userSession.token = token;
        this.http.get("http://localhost:8080/user/" + userId).subscribe(response => {
            this.userSession.user = response;
            this.role = response.user_role;
            this.name = response.user_firstName;
            this.session.next(this.userSession);
        });
    }
    passwordResetVerifyUser(email) {
        return this.http.post("http://localhost:8090/password-reset/verify-user", email);
    }
    passwordResetCheckCode(passwordResetData) {
        return this.http.post("http://localhost:8090/password-reset/check-code", passwordResetData);
    }
    passwordResetSetNew(passwordResetData) {
        return this.http.post("http://localhost:8090/password-reset/set-new", passwordResetData);
    }
    changePassword(changePasswordData) {
        return this.http.put("http://localhost:8080/user/change-password", changePasswordData);
    }
    changeEmail(changeEmailData) {
        return this.http.put("http://localhost:8080/user/change-email", changeEmailData);
    }
    confirmPassword(changePasswordData) {
        return this.http.post("http://localhost:8080/user/confirm-password", changePasswordData);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _user_code_encrypt_service__WEBPACK_IMPORTED_MODULE_5__["UserCodeEncryptService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/auth/change-email/change-email.component.css":
/*!**************************************************************!*\
  !*** ./src/app/auth/change-email/change-email.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvY2hhbmdlLWVtYWlsL2NoYW5nZS1lbWFpbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/auth/change-email/change-email.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/auth/change-email/change-email.component.ts ***!
  \*************************************************************/
/*! exports provided: ChangeEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeEmailComponent", function() { return ChangeEmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");




let ChangeEmailComponent = class ChangeEmailComponent {
    constructor(fb, auth) {
        this.fb = fb;
        this.auth = auth;
        this.passwordConfirm = false;
        this.correctPassword = true;
        this.correctChangeEmail = true;
        this.saveNewEmail = false;
        this.saveEmail = false;
        this.valid = false;
        this.confirmPasswordData = {
            user_id: 0,
            password: "",
        };
        this.changeEmailData = {
            userId: 0,
            email: ''
        };
        this.confirmPasswordForm = this.fb.group({
            password: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
        });
        this.changeEmailForm = this.fb.group({
            email: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
            ]),
        });
        auth.state.subscribe();
    }
    ngOnInit() {
    }
    confirmPassword() {
        if (this.confirmPasswordForm.valid) {
            this.valid = false;
            this.confirmPasswordData.user_id = this.auth.getCurrentUser().user_id;
            this.confirmPasswordData.password = this.confirmPasswordForm.get('password').value;
            this.auth.confirmPassword(this.confirmPasswordData).subscribe(response => {
                if (response) {
                    this.passwordConfirm = response;
                }
                else {
                    this.correctPassword = response;
                }
            });
        }
        else {
            this.valid = true;
        }
    }
    changeEmail() {
        if (this.changeEmailForm.valid) {
            this.valid = false;
            this.changeEmailData.userId = this.auth.getCurrentUser().user_id;
            this.changeEmailData.email = this.changeEmailForm.get('email').value;
            this.auth.changeEmail(this.changeEmailData).subscribe(response => {
                if (response) {
                    this.saveEmail = true;
                }
                else {
                    this.correctChangeEmail = false;
                }
            });
        }
        else {
            this.valid = true;
        }
    }
};
ChangeEmailComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
ChangeEmailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-email',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./change-email.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/change-email/change-email.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./change-email.component.css */ "./src/app/auth/change-email/change-email.component.css")).default]
    })
], ChangeEmailComponent);



/***/ }),

/***/ "./src/app/auth/change-password/change-password.component.css":
/*!********************************************************************!*\
  !*** ./src/app/auth/change-password/change-password.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/auth/change-password/change-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/auth/change-password/change-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");




let ChangePasswordComponent = class ChangePasswordComponent {
    constructor(fb, auth) {
        this.fb = fb;
        this.auth = auth;
        this.passwordConfirm = false;
        this.correctPassword = true;
        this.saveNewPassword = false;
        this.valid = false;
        this.confirmPasswordData = {
            user_id: 0,
            password: "",
        };
        this.changePasswordData = {
            user_id: 0,
            password: ''
        };
        this.confirmPasswordForm = this.fb.group({
            password: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
        });
        this.changePasswordForm = this.fb.group({
            password: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                this.validatePassword({
                    lowercase: true,
                    uppercase: true,
                    number: true,
                    special: true
                })
            ]),
            password_repeat: this.fb.control(''),
        }, {
            validator: (control) => {
                const values = control.value;
                if (values.password !== values.password_repeat) {
                    return {
                        password_match: true
                    };
                }
                return null;
            }
        });
        auth.state.subscribe();
    }
    ngOnInit() {
    }
    validatePassword(options) {
        return (control) => {
            const hasUppercase = control.value.match(/[A-Z]/);
            const hasLowercase = control.value.match(/[a-z]/);
            const hasNumber = control.value.match(/[\d]/);
            const hasSpecial = control.value.match(/[\W]/);
            const errors = {};
            let valid = true;
            if (options.uppercase && !hasUppercase) {
                errors['uppercase'] = true;
                valid = false;
            }
            if (options.lowercase && !hasLowercase) {
                errors['lowercase'] = true;
                valid = false;
            }
            if (options.number && !hasNumber) {
                errors['number'] = true;
                valid = false;
            }
            if (options.special && !hasSpecial) {
                errors['special'] = true;
                valid = false;
            }
            return valid ? null : {
                'password': errors
            };
        };
    }
    confirmPassword() {
        if (this.confirmPasswordForm.valid) {
            this.valid = false;
            this.confirmPasswordData.user_id = this.auth.getCurrentUser().user_id;
            this.confirmPasswordData.password = this.confirmPasswordForm.get('password').value;
            this.auth.confirmPassword(this.confirmPasswordData).subscribe(response => {
                if (response) {
                    this.passwordConfirm = response;
                }
                else {
                    this.correctPassword = response;
                }
            });
        }
        else {
            this.valid = true;
        }
    }
    changePassword() {
        if (this.changePasswordForm.valid) {
            this.valid = false;
            this.changePasswordData.user_id = this.auth.getCurrentUser().user_id;
            this.changePasswordData.password = this.changePasswordForm.get('password').value;
            this.auth.changePassword(this.changePasswordData).subscribe();
            this.saveNewPassword = true;
        }
        else {
            this.valid = true;
        }
    }
};
ChangePasswordComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./change-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/change-password/change-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./change-password.component.css */ "./src/app/auth/change-password/change-password.component.css")).default]
    })
], ChangePasswordComponent);



/***/ }),

/***/ "./src/app/auth/confirm-account/confirm-account.component.css":
/*!********************************************************************!*\
  !*** ./src/app/auth/confirm-account/confirm-account.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvY29uZmlybS1hY2NvdW50L2NvbmZpcm0tYWNjb3VudC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/auth/confirm-account/confirm-account.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/auth/confirm-account/confirm-account.component.ts ***!
  \*******************************************************************/
/*! exports provided: ConfirmAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmAccountComponent", function() { return ConfirmAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../register.service */ "./src/app/auth/register.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ConfirmAccountComponent = class ConfirmAccountComponent {
    constructor(registerService, route) {
        this.registerService = registerService;
        this.route = route;
        this.init = false;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.code = params.get('code'),
                this.email = params.get('email');
        });
        this.registerService.confirmAccount(this.code, this.email).subscribe(response => {
            this.accountConfirmation = response;
            this.init = true;
        });
    }
};
ConfirmAccountComponent.ctorParameters = () => [
    { type: _register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ConfirmAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirm-account',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./confirm-account.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/confirm-account/confirm-account.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./confirm-account.component.css */ "./src/app/auth/confirm-account/confirm-account.component.css")).default]
    })
], ConfirmAccountComponent);



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LoginComponent = class LoginComponent {
    constructor(fb, auth, route) {
        this.fb = fb;
        this.auth = auth;
        this.route = route;
        this.options = 0;
        this.valid = false;
        this.correctData = true;
        this.loginForm = this.fb.group({
            user_email: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
            ]),
            user_password: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
        });
        this.auth.state.subscribe();
        this.route.paramMap.subscribe(params => {
            this.options = +params.get('options');
        });
    }
    ngOnInit() {
        this.message = this.auth.getMessage();
    }
    login() {
        if (this.loginForm.valid) {
            this.valid = false;
            this.auth.login(this.loginForm.value);
            if (!this.auth.status) {
                this.correctData = false;
            }
        }
        else {
            this.valid = true;
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/auth/register.service.ts":
/*!******************************************!*\
  !*** ./src/app/auth/register.service.ts ***!
  \******************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let RegisterService = class RegisterService {
    constructor(http) {
        this.http = http;
    }
    checkEmail(email) {
        return this.http.post("http://localhost:8090/account/check-email", email);
    }
    saveAccount(account) {
        return this.http.post("http://localhost:8090/account/save", account);
    }
    confirmAccount(code, email) {
        return this.http.get("http://localhost:8090/account/confirmation", {
            params: {
                code: code,
                email: email
            }
        });
    }
};
RegisterService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RegisterService);



/***/ }),

/***/ "./src/app/auth/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/auth/register/register.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("form .ng-invalid.ng-touched,\nform .ng-invalid.ng-dirty {\n  border: 2px solid red !important;\n}\n\n/* form .ng-invalid.ng-touched ~ .validation-feedback,\nform .ng-invalid.ng-dirty ~ .validation-feedback {\n  color: red;\n} */\n\n/* style */\n\n.form{\n    margin: 10px;\n}\n\n.contact100-form {\n    width: 100%;\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n  }\n\n.contact100-form-title {\n    display: block;\n    width: 100%;\n    font-family: Raleway-Black;\n    font-size: 30px;\n    color: #333333;\n    line-height: 1.2;\n    text-transform: uppercase;\n    text-align: left;\n    padding-bottom: 32px;\n  }\n\n.wrap-input100 {\n    width: 100%;\n    position: relative;\n    background-color: transparent;\n    margin-bottom: 35px;\n  }\n\n.rs1-wrap-input100 {\n    width: calc((100% - 30px) / 2);\n  }\n\n.label-input100 {\n    font-family: Raleway-SemiBold;\n    font-size: 14px;\n    color: #555555;\n    line-height: 1.5;\n  }\n\n.input100 {\n    display: block;\n    width: 100%;\n    background: #f2f2f2;\n    border-radius: 2px;\n  \n    font-family: Raleway-SemiBold;\n    font-size: 20px;\n    color: #686868;\n    line-height: 1.2;\n    padding: 0 28px;\n  \n    -webkit-transition: all 0.4s;\n    transition: all 0.4s;\n  \n    margin-top: 10px;\n  }\n\n.input100-submit {\n    display: block;\n    width: 100%;\n    border-radius: 2px;\n    height: 60px;\n    font-family: Raleway-SemiBold;\n    font-size: 20px;\n    color: #f2f2f2;\n    line-height: 1.2;\n    padding: 0 28px;\n  \n    -webkit-transition: all 0.4s;\n    transition: all 0.4s;\n  \n    margin-top: 10px;\n  }\n\n.input100-submit:hover{\n    background-color:#e46774;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGdDQUFnQztBQUNsQzs7QUFFQTs7O0dBR0c7O0FBQ0gsVUFBVTs7QUFHVjtJQUNJLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsb0JBQW9CO0lBSXBCLGFBQWE7SUFDYixlQUFlO0lBQ2YseUJBQThCO1lBQTlCLDhCQUE4QjtFQUNoQzs7QUFFQTtJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsb0JBQW9CO0VBQ3RCOztBQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsOEJBQThCO0VBQ2hDOztBQUVBO0lBQ0UsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCOztJQUVsQiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTs7SUFFZiw0QkFBNEI7SUFHNUIsb0JBQW9COztJQUVwQixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7O0lBRWYsNEJBQTRCO0lBRzVCLG9CQUFvQjs7SUFFcEIsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0Usd0JBQXdCO0VBQzFCIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSAubmctaW52YWxpZC5uZy10b3VjaGVkLFxuZm9ybSAubmctaW52YWxpZC5uZy1kaXJ0eSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZCAhaW1wb3J0YW50O1xufVxuXG4vKiBmb3JtIC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQgfiAudmFsaWRhdGlvbi1mZWVkYmFjayxcbmZvcm0gLm5nLWludmFsaWQubmctZGlydHkgfiAudmFsaWRhdGlvbi1mZWVkYmFjayB7XG4gIGNvbG9yOiByZWQ7XG59ICovXG4vKiBzdHlsZSAqL1xuXG5cbi5mb3Jte1xuICAgIG1hcmdpbjogMTBweDtcbn1cbi5jb250YWN0MTAwLWZvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAuY29udGFjdDEwMC1mb3JtLXRpdGxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LWZhbWlseTogUmFsZXdheS1CbGFjaztcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDMycHg7XG4gIH1cbiAgXG4gIC53cmFwLWlucHV0MTAwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcbiAgfVxuXG4gIC5yczEtd3JhcC1pbnB1dDEwMCB7XG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAzMHB4KSAvIDIpO1xuICB9XG5cbiAgLmxhYmVsLWlucHV0MTAwIHtcbiAgICBmb250LWZhbWlseTogUmFsZXdheS1TZW1pQm9sZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM1NTU1NTU7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgfVxuXG4gIC5pbnB1dDEwMCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gIFxuICAgIGZvbnQtZmFtaWx5OiBSYWxld2F5LVNlbWlCb2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogIzY4Njg2ODtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgIHBhZGRpbmc6IDAgMjhweDtcbiAgXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICBcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG5cbiAgLmlucHV0MTAwLXN1Ym1pdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBmb250LWZhbWlseTogUmFsZXdheS1TZW1pQm9sZDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICNmMmYyZjI7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICBwYWRkaW5nOiAwIDI4cHg7XG4gIFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgXG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5pbnB1dDEwMC1zdWJtaXQ6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZTQ2Nzc0O1xuICB9Il19 */");

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../register.service */ "./src/app/auth/register.service.ts");




let RegisterComponent = class RegisterComponent {
    constructor(fb, registerService) {
        this.fb = fb;
        this.registerService = registerService;
        this.validEmail = false;
        this.validPass = false;
        this.checkedEmail = false;
        this.emailExists = false;
        this.registerConfirm = false;
        this.account = {
            account_confirmation_email: '',
            account_confirmation_password: '',
        };
        this.emailForm = this.fb.group({
            user_email: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
            ]),
        });
        this.passwordForm = this.fb.group({
            user_password: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                this.validatePassword({
                    lowercase: true,
                    uppercase: true,
                    number: true,
                    special: true
                })
            ]),
            user_repeat_password: this.fb.control(''),
        }, {
            validator: (control) => {
                const values = control.value;
                if (values.user_password !== values.user_repeat_password) {
                    return {
                        password_match: true
                    };
                }
                return null;
            }
        });
    }
    ngOnInit() { }
    validatePassword(options) {
        return (control) => {
            const hasUppercase = control.value.match(/[A-Z]/);
            const hasLowercase = control.value.match(/[a-z]/);
            const hasNumber = control.value.match(/[\d]/);
            const hasSpecial = control.value.match(/[\W]/);
            const errors = {};
            let valid = true;
            if (options.uppercase && !hasUppercase) {
                errors['uppercase'] = true;
                valid = false;
            }
            if (options.lowercase && !hasLowercase) {
                errors['lowercase'] = true;
                valid = false;
            }
            if (options.number && !hasNumber) {
                errors['number'] = true;
                valid = false;
            }
            if (options.special && !hasSpecial) {
                errors['special'] = true;
                valid = false;
            }
            return valid ? null : {
                'password': errors
            };
        };
    }
    checkEmail() {
        if (this.emailForm.valid) {
            this.validEmail = false;
            var email = this.emailForm.get('user_email').value;
            this.registerService.checkEmail(email).subscribe(response => {
                if (response) {
                    this.emailExists = false;
                    this.checkedEmail = true;
                }
                else {
                    this.emailExists = true;
                }
            });
        }
        else {
            this.validEmail = true;
        }
    }
    saveAccount() {
        if (this.passwordForm.valid) {
            this.validPass = false;
            this.account.account_confirmation_email = this.emailForm.get('user_email').value;
            this.account.account_confirmation_password = this.passwordForm.get('user_password').value;
            this.registerService.saveAccount(this.account).subscribe(response => {
                if (response) {
                    this.registerConfirm = true;
                }
                else {
                }
            });
        }
        else {
            this.validPass = true;
        }
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/auth/register/register.component.css")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/auth/remind-password/remind-password.component.css":
/*!********************************************************************!*\
  !*** ./src/app/auth/remind-password/remind-password.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".validation-feedback {\n    color: red;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZW1pbmQtcGFzc3dvcmQvcmVtaW5kLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0VBQ1oiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3JlbWluZC1wYXNzd29yZC9yZW1pbmQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52YWxpZGF0aW9uLWZlZWRiYWNrIHtcbiAgICBjb2xvcjogcmVkO1xuICB9Il19 */");

/***/ }),

/***/ "./src/app/auth/remind-password/remind-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/auth/remind-password/remind-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: RemindPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemindPasswordComponent", function() { return RemindPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");




let RemindPasswordComponent = class RemindPasswordComponent {
    constructor(fb, auth) {
        this.fb = fb;
        this.auth = auth;
        this.valid = false;
        this.sent = false;
        this.remindPasswordForm = this.fb.group({
            email: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
            ]),
        });
    }
    ngOnInit() {
    }
    resetPassword() {
        if (this.remindPasswordForm.valid) {
            this.valid = false;
            this.sent = true;
            this.auth.passwordResetVerifyUser(this.remindPasswordForm.get('email').value).subscribe();
        }
        else {
            this.valid = true;
        }
    }
};
RemindPasswordComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
RemindPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-remind-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./remind-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/remind-password/remind-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./remind-password.component.css */ "./src/app/auth/remind-password/remind-password.component.css")).default]
    })
], RemindPasswordComponent);



/***/ }),

/***/ "./src/app/auth/reset-password/reset-password.component.css":
/*!******************************************************************!*\
  !*** ./src/app/auth/reset-password/reset-password.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/auth/reset-password/reset-password.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/auth/reset-password/reset-password.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ResetPasswordComponent = class ResetPasswordComponent {
    constructor(fb, auth, route) {
        this.fb = fb;
        this.auth = auth;
        this.route = route;
        this.saveNewPassword = false;
        this.valid = false;
        this.passwordResetData = {
            email: "",
            code: "",
            password: '',
        };
        this.resetPasswordForm = this.fb.group({
            password: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                this.validatePassword({
                    lowercase: true,
                    uppercase: true,
                    number: true,
                    special: true
                })
            ]),
            password_repeat: this.fb.control(''),
        }, {
            validator: (control) => {
                const values = control.value;
                if (values.password !== values.password_repeat) {
                    return {
                        password_match: true
                    };
                }
                return null;
            }
        });
    }
    ngOnInit() {
        this.route.queryParams.subscribe(param => {
            this.passwordResetData.email = param['user'];
            this.passwordResetData.code = param['code'];
        });
        this.auth.passwordResetCheckCode(this.passwordResetData).subscribe(response => {
            this.linkIsCorrect = response;
        });
    }
    validatePassword(options) {
        return (control) => {
            const hasUppercase = control.value.match(/[A-Z]/);
            const hasLowercase = control.value.match(/[a-z]/);
            const hasNumber = control.value.match(/[\d]/);
            const hasSpecial = control.value.match(/[\W]/);
            const errors = {};
            let valid = true;
            if (options.uppercase && !hasUppercase) {
                errors['uppercase'] = true;
                valid = false;
            }
            if (options.lowercase && !hasLowercase) {
                errors['lowercase'] = true;
                valid = false;
            }
            if (options.number && !hasNumber) {
                errors['number'] = true;
                valid = false;
            }
            if (options.special && !hasSpecial) {
                errors['special'] = true;
                valid = false;
            }
            return valid ? null : {
                'password': errors
            };
        };
    }
    resetPassword() {
        if (this.resetPasswordForm.valid) {
            this.valid = false;
            this.passwordResetData.password = this.resetPasswordForm.get('password').value;
            this.auth.passwordResetSetNew(this.passwordResetData).subscribe(response => {
                this.saveNewPassword = response;
            });
        }
        else {
            this.valid = true;
        }
    }
};
ResetPasswordComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reset-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reset-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/reset-password/reset-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reset-password.component.css */ "./src/app/auth/reset-password/reset-password.component.css")).default]
    })
], ResetPasswordComponent);



/***/ }),

/***/ "./src/app/auth/user-code-encrypt.service.ts":
/*!***************************************************!*\
  !*** ./src/app/auth/user-code-encrypt.service.ts ***!
  \***************************************************/
/*! exports provided: UserCodeEncryptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCodeEncryptService", function() { return UserCodeEncryptService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserCodeEncryptService = class UserCodeEncryptService {
    constructor() { }
    encryptCode(id) {
        var idStr = "" + id;
        var idLength = idStr.length;
        var secretNumberIndex = 4;
        let tableLength = 35;
        let table = [];
        var code = "";
        for (var i = 0; i < tableLength; i++) {
            if (i == secretNumberIndex) {
                table.push(idLength);
                table.push((Math.floor((Math.random() * 9) + 1)));
                for (var j = 0; j < idLength; j++) {
                    table.push(+idStr[j]);
                }
            }
            table.push(Math.floor((Math.random() * 9) + 1));
        }
        for (var i = 0; i < table.length; i++) {
            code += "" + table[i];
        }
        return code;
    }
    decryptCode(code) {
        var codDez = code;
        var tabdez = [];
        for (var i = 0; i < codDez.length; i++) {
            tabdez.push(+codDez[i]);
        }
        var secretNumber = tabdez[4];
        var idStrDez = '';
        for (var i = 6; i <= 6 + secretNumber - 1; i++) {
            idStrDez += '' + tabdez[i];
        }
        return +idStrDez;
    }
};
UserCodeEncryptService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserCodeEncryptService);



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart.service */ "./src/app/cart/cart.service.ts");





let CartComponent = class CartComponent {
    constructor(auth, cartService, fb) {
        this.auth = auth;
        this.cartService = cartService;
        this.fb = fb;
        this.selectProductForm = this.fb.group({
            product_type: this.fb.control(''),
        });
        this.cartLocalItemList = [];
        this.pathOrder = false;
        this.emiterSetItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.auth.state.subscribe();
    }
    ngOnInit() {
        if (localStorage.getItem('products') == null) {
            localStorage.setItem('products', JSON.stringify(this.cartLocalItemList));
        }
        if (this.auth.isAuthenticated) {
            this.getMyCartWithDatabase();
        }
        else {
            this.cartLocalItemList = JSON.parse(localStorage.getItem('products'));
        }
        this.checkCartIsEmpty();
        this.calculatePrice();
        this.setOrderItem();
    }
    set path(path) {
        this.pathOrder = path;
    }
    setOrderItem() {
        this.emiterSetItem.emit(this.cartLocalItemList);
    }
    checkCartIsEmpty() {
        if (this.cartLocalItemList.length > 0) {
            this.isEmpty = false;
        }
        else if (this.cartLocalItemList.length == 0) {
            this.isEmpty = true;
        }
    }
    calculatePrice() {
        var sum = 0;
        this.cartLocalItemList.forEach((i) => {
            sum += (i.product.product_price * i.order_item_amount);
        });
        this.cartSum = sum;
    }
    deleteCartItemInLocalStorage(id) {
        delete this.cartLocalItemList[id];
        var newFavorit = [];
        this.cartLocalItemList.forEach((index) => {
            if (id !== index) {
                newFavorit.push(index);
            }
        });
        this.cartLocalItemList = newFavorit;
        if (!this.auth.isAuthenticated) {
            localStorage.setItem('products', JSON.stringify(this.cartLocalItemList));
        }
        this.calculatePrice();
        this.checkCartIsEmpty();
    }
    removeCartInLocalStorage() {
        this.cartLocalItemList = [];
        localStorage.setItem('products', JSON.stringify(this.cartLocalItemList));
        this.checkCartIsEmpty();
    }
    getMyCartWithDatabase() {
        if (this.auth.getCurrentUser()) {
            this.cartService.getMyCartItems(this.auth.getCurrentUser().user_id).subscribe(response => {
                response.forEach((item) => {
                    this.cartLocalItemList.push(item);
                });
                this.cartLocalItemList.forEach((i) => {
                });
                this.checkCartIsEmpty();
                this.calculatePrice();
            }
            // ,error =>{
            //   if(error instanceof HttpErrorResponse){
            //     this.statusError = error.status
            //   }
            // } 
            );
        }
    }
    deleteCartItemInDatabase(idInDatabase, idInList) {
        this.cartService.deleteMyCartItem(idInDatabase).subscribe(() => {
            console.log("Success");
        }, err => {
            this.error = err.message;
        });
        this.deleteCartItemInLocalStorage(idInList);
    }
    removeCartInDatabase() {
        this.cartService.deleteMyCart(this.auth.getCurrentUser().user_id).subscribe(() => {
        }, err => {
            this.error = err.message;
        });
        this.cartLocalItemList = [];
        this.checkCartIsEmpty();
    }
};
CartComponent.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("setPathOrder")
], CartComponent.prototype, "path", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('setOrderItem')
], CartComponent.prototype, "emiterSetItem", void 0);
CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")).default]
    })
], CartComponent);



/***/ }),

/***/ "./src/app/cart/cart.module.ts":
/*!*************************************!*\
  !*** ./src/app/cart/cart.module.ts ***!
  \*************************************/
/*! exports provided: CartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModule", function() { return CartModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _cart_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart.routing.module */ "./src/app/cart/cart.routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _error_error_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../error/error.module */ "./src/app/error/error.module.ts");







let CartModule = class CartModule {
};
CartModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_cart_component__WEBPACK_IMPORTED_MODULE_3__["CartComponent"]],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _error_error_module__WEBPACK_IMPORTED_MODULE_6__["ErrorModule"],
            _cart_routing_module__WEBPACK_IMPORTED_MODULE_4__["CartRoutingModule"],
        ],
        exports: [
            _cart_component__WEBPACK_IMPORTED_MODULE_3__["CartComponent"]
        ]
    })
], CartModule);



/***/ }),

/***/ "./src/app/cart/cart.routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/cart/cart.routing.module.ts ***!
  \*********************************************/
/*! exports provided: CartRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartRoutingModule", function() { return CartRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const routes = [
    {
        path: 'koszyk',
        component: _cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"]
    },
];
let CartRoutingModule = class CartRoutingModule {
};
CartRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
        ],
    })
], CartRoutingModule);



/***/ }),

/***/ "./src/app/cart/cart.service.ts":
/*!**************************************!*\
  !*** ./src/app/cart/cart.service.ts ***!
  \**************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CartService = class CartService {
    constructor(http) {
        this.http = http;
    }
    getMyCartItems(id) {
        return this.http.get("http://localhost:8080/cart/" + id);
    }
    setMyCartItem(cartItem) {
        return this.http.post("http://localhost:8080/cart/create", cartItem);
    }
    deleteMyCartItem(id) {
        return this.http.delete("http://localhost:8080/cart/" + id);
    }
    deleteMyCart(id) {
        return this.http.delete("http://localhost:8080/cart/clear/" + id);
    }
};
CartService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CartService);



/***/ }),

/***/ "./src/app/error/error-handler/error-handler.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/error/error-handler/error-handler.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLWhhbmRsZXIvZXJyb3ItaGFuZGxlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/error/error-handler/error-handler.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/error/error-handler/error-handler.component.ts ***!
  \****************************************************************/
/*! exports provided: ErrorHandlerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerComponent", function() { return ErrorHandlerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ErrorHandlerComponent = class ErrorHandlerComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ErrorHandlerComponent.prototype, "errorHandler", void 0);
ErrorHandlerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'error-handler',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error-handler.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error-handler/error-handler.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./error-handler.component.css */ "./src/app/error/error-handler/error-handler.component.css")).default]
    })
], ErrorHandlerComponent);



/***/ }),

/***/ "./src/app/error/error.module.ts":
/*!***************************************!*\
  !*** ./src/app/error/error.module.ts ***!
  \***************************************/
/*! exports provided: ErrorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorModule", function() { return ErrorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _error_handler_error_handler_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-handler/error-handler.component */ "./src/app/error/error-handler/error-handler.component.ts");




let ErrorModule = class ErrorModule {
};
ErrorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_error_handler_error_handler_component__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerComponent"],],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _error_handler_error_handler_component__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerComponent"]
        ],
    })
], ErrorModule);



/***/ }),

/***/ "./src/app/form/drone-form/drone-form.component.css":
/*!**********************************************************!*\
  !*** ./src/app/form/drone-form/drone-form.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form{\n    margin: 10px;\n}\n.contact100-form {\n    width: 100%;\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n  }\n.contact100-form-title {\n    display: block;\n    width: 100%;\n    font-family: Raleway-Black;\n    font-size: 30px;\n    color: #333333;\n    line-height: 1.2;\n    text-transform: uppercase;\n    text-align: left;\n    padding-bottom: 32px;\n  }\n.wrap-input100 {\n    width: 100%;\n    position: relative;\n    background-color: transparent;\n    margin-bottom: 35px;\n  }\n.rs1-wrap-input100 {\n    width: calc((100% - 30px) / 2);\n  }\n.label-input100 {\n    font-family: Raleway-SemiBold;\n    font-size: 14px;\n    color: #555555;\n    line-height: 1.5;\n  }\n.input100 {\n    display: block;\n    width: 100%;\n    background: #f2f2f2;\n    border-radius: 2px;\n  \n    font-family: Raleway-SemiBold;\n    font-size: 20px;\n    color: #686868;\n    line-height: 1.2;\n    padding: 0 28px;\n  \n    -webkit-transition: all 0.4s;\n    transition: all 0.4s;\n  \n    margin-top: 10px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS9kcm9uZS1mb3JtL2Ryb25lLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxvQkFBb0I7SUFJcEIsYUFBYTtJQUNiLGVBQWU7SUFDZix5QkFBOEI7WUFBOUIsOEJBQThCO0VBQ2hDO0FBRUE7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtFQUN0QjtBQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0VBQ3JCO0FBRUE7SUFDRSw4QkFBOEI7RUFDaEM7QUFFQTtJQUNFLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtFQUNsQjtBQUVBO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCOztJQUVsQiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTs7SUFFZiw0QkFBNEI7SUFHNUIsb0JBQW9COztJQUVwQixnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC9mb3JtL2Ryb25lLWZvcm0vZHJvbmUtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm17XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuLmNvbnRhY3QxMDAtZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC5jb250YWN0MTAwLWZvcm0tdGl0bGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtZmFtaWx5OiBSYWxld2F5LUJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogIzMzMzMzMztcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbiAgfVxuICBcbiAgLndyYXAtaW5wdXQxMDAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICB9XG5cbiAgLnJzMS13cmFwLWlucHV0MTAwIHtcbiAgICB3aWR0aDogY2FsYygoMTAwJSAtIDMwcHgpIC8gMik7XG4gIH1cblxuICAubGFiZWwtaW5wdXQxMDAge1xuICAgIGZvbnQtZmFtaWx5OiBSYWxld2F5LVNlbWlCb2xkO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzU1NTU1NTtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICB9XG5cbiAgLmlucHV0MTAwIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgXG4gICAgZm9udC1mYW1pbHk6IFJhbGV3YXktU2VtaUJvbGQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjNjg2ODY4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgcGFkZGluZzogMCAyOHB4O1xuICBcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/form/drone-form/drone-form.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/form/drone-form/drone-form.component.ts ***!
  \*********************************************************/
/*! exports provided: DroneFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DroneFormComponent", function() { return DroneFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");




let DroneFormComponent = class DroneFormComponent {
    constructor(fb, auth) {
        this.fb = fb;
        this.auth = auth;
        this.productType = "drones";
        this.saved = false;
        this.valid = false;
        this.productForm = this.fb.group({
            product_type: this.fb.control('drone'),
            product_mark: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            product_status: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            product_description: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(20)
            ]),
            product_processor: this.fb.control('brak'),
            product_system: this.fb.control('brak'),
            product_camera: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            product_disc_type: this.fb.control('brak'),
            product_graphics_card: this.fb.control('brak'),
            product_price: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]+$/),
            ]),
            product_ram_size: this.fb.control('0'),
            product_disc_size: this.fb.control('0'),
            product_screen_diagonal: this.fb.control('0'),
            product_amount_available: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]+$/),
            ]),
            product_camera_resolution: this.fb.control('0'),
            product_time_work: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]+$/),
            ]),
            product_range: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]+$/),
            ]),
        });
        this.emiterSaveProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.auth.state.subscribe();
    }
    ngOnInit() { }
    set getId(product) {
        this.product = product;
    }
    saveProduct() {
        if (this.productForm.valid) {
            this.valid = false;
            this.updateProduct = this.productForm.value;
            this.emiterSaveProduct.emit(this.updateProduct);
            this.saved = true;
        }
        else {
            this.valid = true;
        }
    }
};
DroneFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("getProduct")
], DroneFormComponent.prototype, "getId", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('saveProduct')
], DroneFormComponent.prototype, "emiterSaveProduct", void 0);
DroneFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'drone-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./drone-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/drone-form/drone-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./drone-form.component.css */ "./src/app/form/drone-form/drone-form.component.css")).default]
    })
], DroneFormComponent);



/***/ }),

/***/ "./src/app/form/form.module.ts":
/*!*************************************!*\
  !*** ./src/app/form/form.module.ts ***!
  \*************************************/
/*! exports provided: FormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModule", function() { return FormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _drone_form_drone_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drone-form/drone-form.component */ "./src/app/form/drone-form/drone-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form.routing.module */ "./src/app/form/form.routing.module.ts");
/* harmony import */ var _laptop_form_laptop_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./laptop-form/laptop-form.component */ "./src/app/form/laptop-form/laptop-form.component.ts");
/* harmony import */ var _smartphone_form_smartphone_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./smartphone-form/smartphone-form.component */ "./src/app/form/smartphone-form/smartphone-form.component.ts");
/* harmony import */ var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-form/user-form.component */ "./src/app/form/user-form/user-form.component.ts");
/* harmony import */ var _user_role_form_user_role_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-role-form/user-role-form.component */ "./src/app/form/user-role-form/user-role-form.component.ts");
/* harmony import */ var _order_form_order_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./order-form/order-form.component */ "./src/app/form/order-form/order-form.component.ts");
/* harmony import */ var _order_detail_form_order_detail_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./order-detail-form/order-detail-form.component */ "./src/app/form/order-detail-form/order-detail-form.component.ts");
/* harmony import */ var _order_address_form_order_address_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./order-address-form/order-address-form.component */ "./src/app/form/order-address-form/order-address-form.component.ts");
/* harmony import */ var _validation_validation_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../validation/validation.module */ "./src/app/validation/validation.module.ts");














let FormModule = class FormModule {
};
FormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_drone_form_drone_form_component__WEBPACK_IMPORTED_MODULE_3__["DroneFormComponent"], _laptop_form_laptop_form_component__WEBPACK_IMPORTED_MODULE_6__["LaptopFormComponent"], _smartphone_form_smartphone_form_component__WEBPACK_IMPORTED_MODULE_7__["SmartphoneFormComponent"], _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_8__["UserFormComponent"], _user_role_form_user_role_form_component__WEBPACK_IMPORTED_MODULE_9__["UserRoleFormComponent"], _order_form_order_form_component__WEBPACK_IMPORTED_MODULE_10__["OrderFormComponent"], _order_detail_form_order_detail_form_component__WEBPACK_IMPORTED_MODULE_11__["OrderDetailFormComponent"], _order_address_form_order_address_form_component__WEBPACK_IMPORTED_MODULE_12__["OrderAddressFormComponent"],],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _validation_validation_module__WEBPACK_IMPORTED_MODULE_13__["ValidationModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _form_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormRoutingModule"],
        ],
        exports: [
            _drone_form_drone_form_component__WEBPACK_IMPORTED_MODULE_3__["DroneFormComponent"], _laptop_form_laptop_form_component__WEBPACK_IMPORTED_MODULE_6__["LaptopFormComponent"], _smartphone_form_smartphone_form_component__WEBPACK_IMPORTED_MODULE_7__["SmartphoneFormComponent"], _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_8__["UserFormComponent"], _user_role_form_user_role_form_component__WEBPACK_IMPORTED_MODULE_9__["UserRoleFormComponent"], _order_form_order_form_component__WEBPACK_IMPORTED_MODULE_10__["OrderFormComponent"]
        ]
    })
], FormModule);



/***/ }),

/***/ "./src/app/form/form.routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/form/form.routing.module.ts ***!
  \*********************************************/
/*! exports provided: FormRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRoutingModule", function() { return FormRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _order_detail_form_order_detail_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-detail-form/order-detail-form.component */ "./src/app/form/order-detail-form/order-detail-form.component.ts");
/* harmony import */ var _order_address_form_order_address_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order-address-form/order-address-form.component */ "./src/app/form/order-address-form/order-address-form.component.ts");





const routes = [
    {
        path: 'edit-order-detail/:order_id',
        component: _order_detail_form_order_detail_form_component__WEBPACK_IMPORTED_MODULE_3__["OrderDetailFormComponent"]
    },
    {
        path: 'edit-order-address/:order_id',
        component: _order_address_form_order_address_form_component__WEBPACK_IMPORTED_MODULE_4__["OrderAddressFormComponent"]
    },
];
let FormRoutingModule = class FormRoutingModule {
};
FormRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
    })
], FormRoutingModule);



/***/ }),

/***/ "./src/app/form/laptop-form/laptop-form.component.css":
/*!************************************************************!*\
  !*** ./src/app/form/laptop-form/laptop-form.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form{\n    margin: 10px;\n}\n.contact100-form {\n    width: 100%;\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n  }\n.contact100-form-title {\n    display: block;\n    width: 100%;\n    font-family: Raleway-Black;\n    font-size: 30px;\n    color: #333333;\n    line-height: 1.2;\n    text-transform: uppercase;\n    text-align: left;\n    padding-bottom: 32px;\n  }\n.wrap-input100 {\n    width: 100%;\n    position: relative;\n    background-color: transparent;\n    margin-bottom: 35px;\n  }\n.rs1-wrap-input100 {\n    width: calc((100% - 30px) / 2);\n  }\n.label-input100 {\n    font-family: Raleway-SemiBold;\n    font-size: 14px;\n    color: #555555;\n    line-height: 1.5;\n  }\n.input100 {\n    display: block;\n    width: 100%;\n    background: #f2f2f2;\n    border-radius: 2px;\n  \n    font-family: Raleway-SemiBold;\n    font-size: 20px;\n    color: #686868;\n    line-height: 1.2;\n    padding: 0 28px;\n  \n    -webkit-transition: all 0.4s;\n    transition: all 0.4s;\n  \n    margin-top: 10px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS9sYXB0b3AtZm9ybS9sYXB0b3AtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLG9CQUFvQjtJQUlwQixhQUFhO0lBQ2IsZUFBZTtJQUNmLHlCQUE4QjtZQUE5Qiw4QkFBOEI7RUFDaEM7QUFFQTtJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsb0JBQW9CO0VBQ3RCO0FBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixtQkFBbUI7RUFDckI7QUFFQTtJQUNFLDhCQUE4QjtFQUNoQztBQUVBO0lBQ0UsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0VBQ2xCO0FBRUE7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7O0lBRWxCLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlOztJQUVmLDRCQUE0QjtJQUc1QixvQkFBb0I7O0lBRXBCLGdCQUFnQjtFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0vbGFwdG9wLWZvcm0vbGFwdG9wLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3Jte1xuICAgIG1hcmdpbjogMTBweDtcbn1cbi5jb250YWN0MTAwLWZvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAuY29udGFjdDEwMC1mb3JtLXRpdGxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LWZhbWlseTogUmFsZXdheS1CbGFjaztcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDMycHg7XG4gIH1cbiAgXG4gIC53cmFwLWlucHV0MTAwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcbiAgfVxuXG4gIC5yczEtd3JhcC1pbnB1dDEwMCB7XG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAzMHB4KSAvIDIpO1xuICB9XG5cbiAgLmxhYmVsLWlucHV0MTAwIHtcbiAgICBmb250LWZhbWlseTogUmFsZXdheS1TZW1pQm9sZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM1NTU1NTU7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgfVxuXG4gIC5pbnB1dDEwMCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gIFxuICAgIGZvbnQtZmFtaWx5OiBSYWxld2F5LVNlbWlCb2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogIzY4Njg2ODtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgIHBhZGRpbmc6IDAgMjhweDtcbiAgXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICBcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9Il19 */");

/***/ }),

/***/ "./src/app/form/laptop-form/laptop-form.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/form/laptop-form/laptop-form.component.ts ***!
  \***********************************************************/
/*! exports provided: LaptopFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaptopFormComponent", function() { return LaptopFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");




let LaptopFormComponent = class LaptopFormComponent {
    constructor(fb, auth) {
        this.fb = fb;
        this.auth = auth;
        this.productType = "laptops";
        this.saved = false;
        this.valid = false;
        this.productForm = this.fb.group({
            product_type: this.fb.control('laptop'),
            product_mark: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            product_status: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            product_description: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(20)
            ]),
            product_processor: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            product_system: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            product_camera: this.fb.control('brak'),
            product_disc_type: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            product_graphics_card: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            product_price: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]+$/),
            ]),
            product_ram_size: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]+$/),
            ]),
            product_disc_size: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]+$/),
            ]),
            product_screen_diagonal: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            product_amount_available: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]+$/),
            ]),
            product_camera_resolution: this.fb.control('0'),
            product_time_work: this.fb.control('0'),
            product_range: this.fb.control('0'),
        });
        this.emiterSaveProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.auth.state.subscribe();
    }
    ngOnInit() {
        console.log(this.productForm);
    }
    set getId(product) {
        this.product = product;
        this.changeProductMarkOnNumber();
        this.changeProductStatusOnNumber();
    }
    saveProduct() {
        if (this.productForm.valid) {
            this.valid = false;
            this.updateProduct = this.productForm.value;
            this.changeProductMarkOnString();
            this.changeProductStatusOnString();
            this.emiterSaveProduct.emit(this.updateProduct);
            this.saved = true;
        }
        else {
            this.valid = true;
        }
    }
    changeProductMarkOnNumber() {
        this.product.product_mark;
        switch (this.product.product_mark) {
            case "lenovo":
                console.log("lenovo 1");
                this.product.product_mark = "1";
                break;
            case "hp":
                console.log("hp 2");
                this.product.product_mark = "2";
                break;
            case "dell":
                console.log("dell 3");
                this.product.product_mark = "3";
                break;
            case "asus":
                console.log("asus 4");
                this.product.product_mark = "4";
                break;
            case "acer":
                console.log("acer 5");
                this.product.product_mark = "5";
                break;
            case "msi":
                console.log("msi 6");
                this.product.product_mark = "6";
                break;
            case "apple":
                console.log("apple 7");
                this.product.product_mark = "7";
                break;
            case "huawei":
                console.log("huawei 8");
                this.product.product_mark = "8";
                break;
            case "microsoft":
                console.log("microsoft 9");
                this.product.product_mark = "9";
                break;
            default:
                console.log("brak");
                this.product.product_mark = "brak";
                break;
        }
    }
    changeProductMarkOnString() {
        this.updateProduct.product_mark;
        switch (this.updateProduct.product_mark) {
            case "1":
                console.log("lenovo");
                this.updateProduct.product_mark = "lenovo";
                break;
            case "2":
                console.log("hp");
                this.updateProduct.product_mark = "hp";
                break;
            case "3":
                console.log("dell");
                this.updateProduct.product_mark = "dell";
                break;
            case "4":
                console.log("asus");
                this.updateProduct.product_mark = "asus";
                break;
            case "5":
                console.log("acer");
                this.updateProduct.product_mark = "acer";
                break;
            case "6":
                console.log("msi");
                this.updateProduct.product_mark = "msi";
                break;
            case "7":
                console.log("apple");
                this.updateProduct.product_mark = "apple";
                break;
            case "8":
                console.log("huawei");
                this.updateProduct.product_mark = "huawei";
                break;
            case "9":
                console.log("microsoft");
                this.updateProduct.product_mark = "microsoft";
                break;
            default:
                console.log("brak");
                this.updateProduct.product_mark = "brak";
                break;
        }
    }
    changeProductStatusOnNumber() {
        this.product.product_status;
        switch (this.product.product_status) {
            case "promocja":
                console.log("promocja 1");
                this.product.product_status = "1";
                break;
            case "wyprzedaż":
                console.log("wyprzedaż 2");
                this.product.product_status = "2";
                break;
            case "nowość":
                console.log("nowość 3");
                this.product.product_status = "3";
                break;
            case "polecamy":
                console.log("polecamy 4");
                this.product.product_status = "4";
                break;
            case "przedłużona gwarancja":
                console.log("przedłużona gwarancja 5");
                this.product.product_status = "5";
                break;
            default:
                console.log("brak");
                this.product.product_mark = "brak";
                break;
        }
    }
    changeProductStatusOnString() {
        this.updateProduct.product_status;
        switch (this.updateProduct.product_status) {
            case "1":
                console.log("promocja");
                this.updateProduct.product_status = "promocja";
                break;
            case "2":
                console.log("wyprzedaż");
                this.updateProduct.product_status = "wyprzedaż";
                break;
            case "3":
                console.log("nowość");
                this.updateProduct.product_status = "nowość";
                break;
            case "4":
                console.log("polecamy");
                this.updateProduct.product_status = "polecamy";
                break;
            case "5":
                console.log("przedłużona gwarancja");
                this.updateProduct.product_status = "przedłużona gwarancja";
                break;
            default:
                console.log("brak");
                this.updateProduct.product_status = "brak";
                break;
        }
    }
};
LaptopFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("getProduct")
], LaptopFormComponent.prototype, "getId", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('saveProduct')
], LaptopFormComponent.prototype, "emiterSaveProduct", void 0);
LaptopFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'laptop-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./laptop-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/laptop-form/laptop-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./laptop-form.component.css */ "./src/app/form/laptop-form/laptop-form.component.css")).default]
    })
], LaptopFormComponent);



/***/ }),

/***/ "./src/app/form/order-address-form/order-address-form.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/form/order-address-form/order-address-form.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0vb3JkZXItYWRkcmVzcy1mb3JtL29yZGVyLWFkZHJlc3MtZm9ybS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/form/order-address-form/order-address-form.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/form/order-address-form/order-address-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: OrderAddressFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderAddressFormComponent", function() { return OrderAddressFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_orders_orders_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/orders/orders.service */ "./src/app/orders/orders.service.ts");






let OrderAddressFormComponent = class OrderAddressFormComponent {
    constructor(fb, auth, route, router, ordersService) {
        this.fb = fb;
        this.auth = auth;
        this.route = route;
        this.router = router;
        this.ordersService = ordersService;
        this.saved = false;
        this.valid = false;
        this.orderAddressForm = this.fb.group({
            orders_firstName: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
            ]),
            orders_lastName: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)
            ]),
            orders_email: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
            ]),
            orders_phoneNumber: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]+$/)
            ]),
            orders_zipCode: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\d{2}-\d{3}$/)
            ]),
            orders_city: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/[a-zA-Z]+(?:[ '-][a-zA-Z]+)*/)
            ]),
            orders_street: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
        });
        this.auth.state.subscribe();
        this.route.paramMap.subscribe(params => {
            this.orderId = +params.get('order_id');
        });
        this.ordersService.getOrdersById(this.orderId).subscribe(response => {
            this.order = response;
        });
    }
    ngOnInit() {
    }
    save() {
        if (this.orderAddressForm.valid) {
            this.valid = false;
            this.ordersService.editAddress(this.orderId, this.orderAddressForm.value).subscribe(() => {
                console.log("Success");
            }, err => {
                this.error = err.message;
                console.log("error: " + this.error.valueOf);
            });
            this.saved = true;
        }
        else {
            this.valid = true;
        }
    }
};
OrderAddressFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_orders_orders_service__WEBPACK_IMPORTED_MODULE_5__["OrdersService"] }
];
OrderAddressFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-address-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order-address-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/order-address-form/order-address-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order-address-form.component.css */ "./src/app/form/order-address-form/order-address-form.component.css")).default]
    })
], OrderAddressFormComponent);



/***/ }),

/***/ "./src/app/form/order-detail-form/order-detail-form.component.css":
/*!************************************************************************!*\
  !*** ./src/app/form/order-detail-form/order-detail-form.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0vb3JkZXItZGV0YWlsLWZvcm0vb3JkZXItZGV0YWlsLWZvcm0uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/form/order-detail-form/order-detail-form.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/form/order-detail-form/order-detail-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: OrderDetailFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailFormComponent", function() { return OrderDetailFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_orders_orders_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/orders/orders.service */ "./src/app/orders/orders.service.ts");






let OrderDetailFormComponent = class OrderDetailFormComponent {
    constructor(fb, auth, route, router, ordersService) {
        this.fb = fb;
        this.auth = auth;
        this.route = route;
        this.router = router;
        this.ordersService = ordersService;
        this.saved = false;
        this.valid = false;
        this.orderDetailForm = this.fb.group({
            orders_status: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            orders_number_delivery_days: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            orders_delivery_method: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            orders_payments_method: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
        });
        this.auth.state.subscribe();
        this.route.paramMap.subscribe(params => {
            this.orderId = +params.get('order_id');
        });
        this.ordersService.getOrdersById(this.orderId).subscribe(response => {
            this.order = response;
        });
    }
    ngOnInit() {
    }
    save() {
        if (this.orderDetailForm.valid) {
            this.valid = false;
            this.ordersService.editDetail(this.orderId, this.orderDetailForm.value).subscribe(() => {
                console.log("Success");
            }, err => {
                this.error = err.message;
                console.log("error: " + this.error.valueOf);
            });
            this.saved = true;
        }
        else {
            this.valid = true;
        }
    }
};
OrderDetailFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_orders_orders_service__WEBPACK_IMPORTED_MODULE_5__["OrdersService"] }
];
OrderDetailFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'order-detail-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order-detail-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/order-detail-form/order-detail-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order-detail-form.component.css */ "./src/app/form/order-detail-form/order-detail-form.component.css")).default]
    })
], OrderDetailFormComponent);



/***/ }),

/***/ "./src/app/form/order-form/order-form.component.css":
/*!**********************************************************!*\
  !*** ./src/app/form/order-form/order-form.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".validation-feedback {\n    color: red;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS9vcmRlci1mb3JtL29yZGVyLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7RUFDWiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0vb3JkZXItZm9ybS9vcmRlci1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmFsaWRhdGlvbi1mZWVkYmFjayB7XG4gICAgY29sb3I6IHJlZDtcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/form/order-form/order-form.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/form/order-form/order-form.component.ts ***!
  \*********************************************************/
/*! exports provided: OrderFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderFormComponent", function() { return OrderFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let OrderFormComponent = class OrderFormComponent {
    constructor(fb, auth, router) {
        this.fb = fb;
        this.auth = auth;
        this.router = router;
        this.addOrderForm = this.fb.group({
            orders_delivery_method: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            orders_payments_method: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            orders_firstName: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
            ]),
            orders_lastName: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)
            ]),
            orders_street: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            orders_zipCode: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\d{2}-\d{3}$/)
            ]),
            orders_city: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/[a-zA-Z]+(?:[ '-][a-zA-Z]+)*/)
            ]),
            orders_email: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
            ]),
            orders_phoneNumber: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]+$/)
            ]),
        });
        this.valid = false;
    }
    ngOnInit() {
        this.user = this.auth.getCurrentUser();
    }
    saveOrderSummary() {
        if (this.addOrderForm.valid) {
            this.valid = false;
            this.orderSummary = this.addOrderForm.value;
            this.router.navigate(['/podsumowanie'], { queryParams: { order_data: JSON.stringify(this.orderSummary) } });
        }
        else {
            this.valid = true;
        }
    }
};
OrderFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
OrderFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'order-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/order-form/order-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order-form.component.css */ "./src/app/form/order-form/order-form.component.css")).default]
    })
], OrderFormComponent);



/***/ }),

/***/ "./src/app/form/smartphone-form/smartphone-form.component.css":
/*!********************************************************************!*\
  !*** ./src/app/form/smartphone-form/smartphone-form.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form{\n    margin: 10px;\n}\n.contact100-form {\n    width: 100%;\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n  }\n.contact100-form-title {\n    display: block;\n    width: 100%;\n    font-family: Raleway-Black;\n    font-size: 30px;\n    color: #333333;\n    line-height: 1.2;\n    text-transform: uppercase;\n    text-align: left;\n    padding-bottom: 32px;\n  }\n.wrap-input100 {\n    width: 100%;\n    position: relative;\n    background-color: transparent;\n    margin-bottom: 35px;\n  }\n.rs1-wrap-input100 {\n    width: calc((100% - 30px) / 2);\n  }\n.label-input100 {\n    font-family: Raleway-SemiBold;\n    font-size: 14px;\n    color: #555555;\n    line-height: 1.5;\n  }\n.input100 {\n    display: block;\n    width: 100%;\n    background: #f2f2f2;\n    border-radius: 2px;\n  \n    font-family: Raleway-SemiBold;\n    font-size: 20px;\n    color: #686868;\n    line-height: 1.2;\n    padding: 0 28px;\n  \n    -webkit-transition: all 0.4s;\n    transition: all 0.4s;\n  \n    margin-top: 10px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS9zbWFydHBob25lLWZvcm0vc21hcnRwaG9uZS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsb0JBQW9CO0lBSXBCLGFBQWE7SUFDYixlQUFlO0lBQ2YseUJBQThCO1lBQTlCLDhCQUE4QjtFQUNoQztBQUVBO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixvQkFBb0I7RUFDdEI7QUFFQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtFQUNyQjtBQUVBO0lBQ0UsOEJBQThCO0VBQ2hDO0FBRUE7SUFDRSw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjs7SUFFbEIsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7O0lBRWYsNEJBQTRCO0lBRzVCLG9CQUFvQjs7SUFFcEIsZ0JBQWdCO0VBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZm9ybS9zbWFydHBob25lLWZvcm0vc21hcnRwaG9uZS1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybXtcbiAgICBtYXJnaW46IDEwcHg7XG59XG4uY29udGFjdDEwMC1mb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLmNvbnRhY3QxMDAtZm9ybS10aXRsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1mYW1pbHk6IFJhbGV3YXktQmxhY2s7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctYm90dG9tOiAzMnB4O1xuICB9XG4gIFxuICAud3JhcC1pbnB1dDEwMCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XG4gIH1cblxuICAucnMxLXdyYXAtaW5wdXQxMDAge1xuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gMzBweCkgLyAyKTtcbiAgfVxuXG4gIC5sYWJlbC1pbnB1dDEwMCB7XG4gICAgZm9udC1mYW1pbHk6IFJhbGV3YXktU2VtaUJvbGQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjNTU1NTU1O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIH1cblxuICAuaW5wdXQxMDAge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBcbiAgICBmb250LWZhbWlseTogUmFsZXdheS1TZW1pQm9sZDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICM2ODY4Njg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICBwYWRkaW5nOiAwIDI4cHg7XG4gIFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgXG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/form/smartphone-form/smartphone-form.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/form/smartphone-form/smartphone-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: SmartphoneFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartphoneFormComponent", function() { return SmartphoneFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");




let SmartphoneFormComponent = class SmartphoneFormComponent {
    constructor(fb, auth) {
        this.fb = fb;
        this.auth = auth;
        this.productType = "smartphones";
        this.saved = false;
        this.valid = false;
        this.productForm = this.fb.group({
            product_type: this.fb.control('smartphone'),
            product_mark: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            product_status: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            product_description: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(20)
            ]),
            product_processor: this.fb.control('brak'),
            product_system: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            product_camera: this.fb.control('brak'),
            product_disc_type: this.fb.control('brak'),
            product_graphics_card: this.fb.control('brak'),
            product_price: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]+$/),
            ]),
            product_ram_size: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            product_disc_size: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            product_screen_diagonal: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            product_amount_available: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]+$/),
            ]),
            product_camera_resolution: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            product_time_work: this.fb.control('0'),
            product_range: this.fb.control('0'),
        });
        this.emiterSaveProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.auth.state.subscribe();
    }
    ngOnInit() { }
    set getId(product) {
        this.product = product;
        this.changeProductMarkOnNumber();
    }
    saveProduct() {
        if (this.productForm.valid) {
            this.valid = false;
            this.updateProduct = this.productForm.value;
            this.changeProductMarkOnString();
            this.emiterSaveProduct.emit(this.updateProduct);
            this.saved = true;
        }
        else {
            this.valid = true;
        }
    }
    changeProductMarkOnNumber() {
        this.product.product_mark;
        switch (this.product.product_mark) {
            case "samsung":
                console.log("samsung 1");
                this.product.product_mark = "1";
                break;
            case "apple":
                console.log("Apple 2");
                this.product.product_mark = "2";
                break;
            case "huawei":
                console.log("Huawei 3");
                this.product.product_mark = "3";
                break;
            case "sony":
                console.log("sony 4");
                this.product.product_mark = "4";
                break;
            case "nokia":
                console.log("nokia 5");
                this.product.product_mark = "5";
                break;
            case "xiaomi":
                console.log("xiaomi 6");
                this.product.product_mark = "6";
                break;
            case "lg":
                console.log("lg 7");
                this.product.product_mark = "7";
                break;
            case "htc":
                console.log("htc 8");
                this.product.product_mark = "8";
                break;
            default:
                console.log("brak");
                this.product.product_mark = "brak";
                break;
        }
    }
    changeProductMarkOnString() {
        this.updateProduct.product_mark;
        switch (this.updateProduct.product_mark) {
            case "1":
                console.log("samsung");
                this.updateProduct.product_mark = "samsung";
                break;
            case "2":
                console.log("apple");
                this.updateProduct.product_mark = "apple";
                break;
            case "3":
                console.log("huawei");
                this.updateProduct.product_mark = "huawei";
                break;
            case "4":
                console.log("sony");
                this.updateProduct.product_mark = "sony";
                break;
            case "5":
                console.log("nokia");
                this.updateProduct.product_mark = "nokia";
                break;
            case "6":
                console.log("xiaomi");
                this.updateProduct.product_mark = "xiaomi";
                break;
            case "7":
                console.log("lg");
                this.updateProduct.product_mark = "lg";
                break;
            case "8":
                console.log("htc");
                this.updateProduct.product_mark = "htc";
                break;
            default:
                console.log("brak");
                this.updateProduct.product_mark = "brak";
                break;
        }
    }
};
SmartphoneFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("getProduct")
], SmartphoneFormComponent.prototype, "getId", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('saveProduct')
], SmartphoneFormComponent.prototype, "emiterSaveProduct", void 0);
SmartphoneFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smartphone-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./smartphone-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/smartphone-form/smartphone-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./smartphone-form.component.css */ "./src/app/form/smartphone-form/smartphone-form.component.css")).default]
    })
], SmartphoneFormComponent);



/***/ }),

/***/ "./src/app/form/user-form/user-form.component.css":
/*!********************************************************!*\
  !*** ./src/app/form/user-form/user-form.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".validation-feedback {\n  color: red;\n}\n\n\n.form{\n    margin: 10px;\n}\n\n\n.contact100-form {\n    width: 100%;\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n  }\n\n\n.contact100-form-title {\n    display: block;\n    width: 100%;\n    font-family: Raleway-Black;\n    font-size: 30px;\n    color: #333333;\n    line-height: 1.2;\n    text-transform: uppercase;\n    text-align: left;\n    padding-bottom: 32px;\n  }\n\n\n.wrap-input100 {\n    width: 100%;\n    position: relative;\n    background-color: transparent;\n    margin-bottom: 35px;\n  }\n\n\n.rs1-wrap-input100 {\n    width: calc((100% - 30px) / 2);\n  }\n\n\n.label-input100 {\n    font-family: Raleway-SemiBold;\n    font-size: 14px;\n    color: #555555;\n    line-height: 1.5;\n  }\n\n\n.input100 {\n    display: block;\n    width: 100%;\n    background: #f2f2f2;\n    border-radius: 2px;\n  \n    font-family: Raleway-SemiBold;\n    font-size: 20px;\n    color: #686868;\n    line-height: 1.2;\n    padding: 0 28px;\n  \n    -webkit-transition: all 0.4s;\n    transition: all 0.4s;\n  \n    margin-top: 10px;\n  }\n\n\n.input100-submit {\n    display: block;\n    width: 100%;\n    background: #bd2130;\n    border-radius: 2px;\n    height: 60px;\n    font-family: Raleway-SemiBold;\n    font-size: 20px;\n    color: #f2f2f2;\n    line-height: 1.2;\n    padding: 0 28px;\n  \n    -webkit-transition: all 0.4s;\n    transition: all 0.4s;\n  \n    margin-top: 10px;\n  }\n\n\n.input100-submit:hover{\n    background-color:#e46774;\n  }\n\n\n.input100-ok{\n    display: block;\n    width: 100%;\n    background: #1e7e34;\n    border-radius: 2px;\n    height: 60px;\n    font-family: Raleway-SemiBold;\n    font-size: 20px;\n    color: #f2f2f2;\n    line-height: 1.2;\n    padding: 16px;\n  \n    -webkit-transition: all 0.4s;\n    transition: all 0.4s;\n  \n    margin-top: 10px;\n  }\n\n\n.input100-ok:hover{\n    background-color: #98e7aa;\n    \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS91c2VyLWZvcm0vdXNlci1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0FBQ1o7OztBQUdBO0lBQ0ksWUFBWTtBQUNoQjs7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsb0JBQW9CO0lBSXBCLGFBQWE7SUFDYixlQUFlO0lBQ2YseUJBQThCO1lBQTlCLDhCQUE4QjtFQUNoQzs7O0FBRUE7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtFQUN0Qjs7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixtQkFBbUI7RUFDckI7OztBQUVBO0lBQ0UsOEJBQThCO0VBQ2hDOzs7QUFFQTtJQUNFLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtFQUNsQjs7O0FBRUE7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7O0lBRWxCLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlOztJQUVmLDRCQUE0QjtJQUc1QixvQkFBb0I7O0lBRXBCLGdCQUFnQjtFQUNsQjs7O0FBRUE7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlOztJQUVmLDRCQUE0QjtJQUc1QixvQkFBb0I7O0lBRXBCLGdCQUFnQjtFQUNsQjs7O0FBRUE7SUFDRSx3QkFBd0I7RUFDMUI7OztBQUVBO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsYUFBYTs7SUFFYiw0QkFBNEI7SUFHNUIsb0JBQW9COztJQUVwQixnQkFBZ0I7RUFDbEI7OztBQUVBO0lBQ0UseUJBQXlCOztFQUUzQiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0vdXNlci1mb3JtL3VzZXItZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZhbGlkYXRpb24tZmVlZGJhY2sge1xuICBjb2xvcjogcmVkO1xufVxuXG5cbi5mb3Jte1xuICAgIG1hcmdpbjogMTBweDtcbn1cbi5jb250YWN0MTAwLWZvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAuY29udGFjdDEwMC1mb3JtLXRpdGxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LWZhbWlseTogUmFsZXdheS1CbGFjaztcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDMycHg7XG4gIH1cbiAgXG4gIC53cmFwLWlucHV0MTAwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcbiAgfVxuXG4gIC5yczEtd3JhcC1pbnB1dDEwMCB7XG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAzMHB4KSAvIDIpO1xuICB9XG5cbiAgLmxhYmVsLWlucHV0MTAwIHtcbiAgICBmb250LWZhbWlseTogUmFsZXdheS1TZW1pQm9sZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM1NTU1NTU7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgfVxuXG4gIC5pbnB1dDEwMCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gIFxuICAgIGZvbnQtZmFtaWx5OiBSYWxld2F5LVNlbWlCb2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogIzY4Njg2ODtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgIHBhZGRpbmc6IDAgMjhweDtcbiAgXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICBcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG5cbiAgLmlucHV0MTAwLXN1Ym1pdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2JkMjEzMDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGZvbnQtZmFtaWx5OiBSYWxld2F5LVNlbWlCb2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogI2YyZjJmMjtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgIHBhZGRpbmc6IDAgMjhweDtcbiAgXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICBcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG5cbiAgLmlucHV0MTAwLXN1Ym1pdDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlNDY3NzQ7XG4gIH1cblxuICAuaW5wdXQxMDAtb2t7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogIzFlN2UzNDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGZvbnQtZmFtaWx5OiBSYWxld2F5LVNlbWlCb2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogI2YyZjJmMjtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgXG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICBcbiAgLmlucHV0MTAwLW9rOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OGU3YWE7XG4gICAgXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/form/user-form/user-form.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/form/user-form/user-form.component.ts ***!
  \*******************************************************/
/*! exports provided: UserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormComponent", function() { return UserFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let UserFormComponent = class UserFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.userForm = this.fb.group({
            user_firstName: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
            ]),
            user_lastName: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)
            ]),
            user_phoneNumber: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]+$/)
            ]),
            user_zipCode: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\d{2}-\d{3}$/)
            ]),
            user_city: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/[a-zA-Z]+(?:[ '-][a-zA-Z]+)*/)
            ]),
            user_street: this.fb.control(''),
        });
        this.saved = false;
        this.valid = false;
        this.emiterSaveProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    set getId(product) {
        this.user = product;
    }
    set getPath(path) {
        this.returnPath = path;
    }
    saveUser() {
        if (this.userForm.valid) {
            this.valid = false;
            this.updateUser = this.userForm.value;
            this.emiterSaveProduct.emit(this.updateUser);
            this.saved = true;
        }
        else {
            this.valid = true;
        }
    }
};
UserFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("getUser")
], UserFormComponent.prototype, "getId", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("getPath")
], UserFormComponent.prototype, "getPath", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('saveUser')
], UserFormComponent.prototype, "emiterSaveProduct", void 0);
UserFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'user-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/user-form/user-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-form.component.css */ "./src/app/form/user-form/user-form.component.css")).default]
    })
], UserFormComponent);



/***/ }),

/***/ "./src/app/form/user-role-form/user-role-form.component.css":
/*!******************************************************************!*\
  !*** ./src/app/form/user-role-form/user-role-form.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form{\n    margin: 10px;\n}\n.contact100-form {\n    width: 100%;\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n  }\n.contact100-form-title {\n    display: block;\n    width: 100%;\n    font-family: Raleway-Black;\n    font-size: 30px;\n    color: #333333;\n    line-height: 1.2;\n    text-transform: uppercase;\n    text-align: left;\n    padding-bottom: 32px;\n  }\n.wrap-input100 {\n    width: 100%;\n    position: relative;\n    background-color: transparent;\n    margin-bottom: 35px;\n  }\n.rs1-wrap-input100 {\n    width: calc((100% - 30px) / 2);\n  }\n.label-input100 {\n    font-family: Raleway-SemiBold;\n    font-size: 14px;\n    color: #555555;\n    line-height: 1.5;\n  }\n.input100 {\n    display: block;\n    width: 100%;\n    background: #f2f2f2;\n    border-radius: 2px;\n  \n    font-family: Raleway-SemiBold;\n    font-size: 20px;\n    color: #686868;\n    line-height: 1.2;\n    padding: 0 28px;\n  \n    -webkit-transition: all 0.4s;\n    transition: all 0.4s;\n  \n    margin-top: 10px;\n  }\n.input100-submit {\n    display: block;\n    width: 100%;\n    background: #bd2130;\n    border-radius: 2px;\n    height: 60px;\n    font-family: Raleway-SemiBold;\n    font-size: 20px;\n    color: #f2f2f2;\n    line-height: 1.2;\n    padding: 0 28px;\n  \n    -webkit-transition: all 0.4s;\n    transition: all 0.4s;\n  \n    margin-top: 10px;\n  }\n.input100-submit:hover{\n    background-color:#e46774;\n  }\n.input100-ok{\n    display: block;\n    width: 100%;\n    background: #1e7e34;\n    border-radius: 2px;\n    height: 60px;\n    font-family: Raleway-SemiBold;\n    font-size: 20px;\n    color: #f2f2f2;\n    line-height: 1.2;\n    padding: 16px;\n  \n    -webkit-transition: all 0.4s;\n    transition: all 0.4s;\n  \n    margin-top: 10px;\n  }\n.input100-ok:hover{\n    background-color: #98e7aa;\n    \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS91c2VyLXJvbGUtZm9ybS91c2VyLXJvbGUtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLG9CQUFvQjtJQUlwQixhQUFhO0lBQ2IsZUFBZTtJQUNmLHlCQUE4QjtZQUE5Qiw4QkFBOEI7RUFDaEM7QUFFQTtJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsb0JBQW9CO0VBQ3RCO0FBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixtQkFBbUI7RUFDckI7QUFFQTtJQUNFLDhCQUE4QjtFQUNoQztBQUVBO0lBQ0UsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0VBQ2xCO0FBRUE7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7O0lBRWxCLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlOztJQUVmLDRCQUE0QjtJQUc1QixvQkFBb0I7O0lBRXBCLGdCQUFnQjtFQUNsQjtBQUVBO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTs7SUFFZiw0QkFBNEI7SUFHNUIsb0JBQW9COztJQUVwQixnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLHdCQUF3QjtFQUMxQjtBQUVBO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsYUFBYTs7SUFFYiw0QkFBNEI7SUFHNUIsb0JBQW9COztJQUVwQixnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLHlCQUF5Qjs7RUFFM0IiLCJmaWxlIjoic3JjL2FwcC9mb3JtL3VzZXItcm9sZS1mb3JtL3VzZXItcm9sZS1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybXtcbiAgICBtYXJnaW46IDEwcHg7XG59XG4uY29udGFjdDEwMC1mb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLmNvbnRhY3QxMDAtZm9ybS10aXRsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1mYW1pbHk6IFJhbGV3YXktQmxhY2s7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctYm90dG9tOiAzMnB4O1xuICB9XG4gIFxuICAud3JhcC1pbnB1dDEwMCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XG4gIH1cblxuICAucnMxLXdyYXAtaW5wdXQxMDAge1xuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gMzBweCkgLyAyKTtcbiAgfVxuXG4gIC5sYWJlbC1pbnB1dDEwMCB7XG4gICAgZm9udC1mYW1pbHk6IFJhbGV3YXktU2VtaUJvbGQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjNTU1NTU1O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIH1cblxuICAuaW5wdXQxMDAge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBcbiAgICBmb250LWZhbWlseTogUmFsZXdheS1TZW1pQm9sZDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICM2ODY4Njg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICBwYWRkaW5nOiAwIDI4cHg7XG4gIFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgXG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5pbnB1dDEwMC1zdWJtaXQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNiZDIxMzA7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBmb250LWZhbWlseTogUmFsZXdheS1TZW1pQm9sZDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICNmMmYyZjI7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICBwYWRkaW5nOiAwIDI4cHg7XG4gIFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgXG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5pbnB1dDEwMC1zdWJtaXQ6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZTQ2Nzc0O1xuICB9XG5cbiAgLmlucHV0MTAwLW9re1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICMxZTdlMzQ7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBmb250LWZhbWlseTogUmFsZXdheS1TZW1pQm9sZDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICNmMmYyZjI7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICBcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgXG4gIC5pbnB1dDEwMC1vazpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOThlN2FhO1xuICAgIFxuICB9Il19 */");

/***/ }),

/***/ "./src/app/form/user-role-form/user-role-form.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/form/user-role-form/user-role-form.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserRoleFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoleFormComponent", function() { return UserRoleFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let UserRoleFormComponent = class UserRoleFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.roleForm = this.fb.group({
            user_role: this.fb.control(''),
        });
        this.saved = false;
        this.emiterSaveProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    set getId(user) {
        this.user = user;
    }
    saveUser() {
        this.updateUser = this.roleForm.value;
        this.emiterSaveProduct.emit(this.updateUser);
        this.saved = true;
    }
    ngOnInit() {
    }
};
UserRoleFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("getUser")
], UserRoleFormComponent.prototype, "getId", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('saveUser')
], UserRoleFormComponent.prototype, "emiterSaveProduct", void 0);
UserRoleFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'user-role-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-role-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/user-role-form/user-role-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-role-form.component.css */ "./src/app/form/user-role-form/user-role-form.component.css")).default]
    })
], UserRoleFormComponent);



/***/ }),

/***/ "./src/app/navi/home/home.component.css":
/*!**********************************************!*\
  !*** ./src/app/navi/home/home.component.css ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".product a{\n    color: #000000;\n    text-decoration: none;   \n   }\n   \n   .product a:hover{\n   color: green;\n   }\n   \n   .product{\n       margin: 10px;\n       min-width: 260px;\n   }\n   \n   .my-card-body p{\n   margin: 0;\n   }\n   \n   .my-card-body h5{\n       margin-top: 20px;\n       }\n   \n   .card{\n       padding: 10px;\n   }\n   \n   .card:hover{\n       border: 1px solid green;\n   }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aS9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7R0FDdEI7O0dBRUE7R0FDQSxZQUFZO0dBQ1o7O0dBRUE7T0FDSSxZQUFZO09BQ1osZ0JBQWdCO0dBQ3BCOztHQUVBO0dBQ0EsU0FBUztHQUNUOztHQUVBO09BQ0ksZ0JBQWdCO09BQ2hCOztHQUVKO09BQ0ksYUFBYTtHQUNqQjs7R0FFQTtPQUNJLHVCQUF1QjtHQUMzQiIsImZpbGUiOiJzcmMvYXBwL25hdmkvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdCBhe1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgICBcbiAgIH1cbiAgIFxuICAgLnByb2R1Y3QgYTpob3ZlcntcbiAgIGNvbG9yOiBncmVlbjtcbiAgIH1cbiAgIFxuICAgLnByb2R1Y3R7XG4gICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgIG1pbi13aWR0aDogMjYwcHg7XG4gICB9XG4gICBcbiAgIC5teS1jYXJkLWJvZHkgcHtcbiAgIG1hcmdpbjogMDtcbiAgIH1cbiAgIFxuICAgLm15LWNhcmQtYm9keSBoNXtcbiAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgIH1cbiAgIFxuICAgLmNhcmR7XG4gICAgICAgcGFkZGluZzogMTBweDtcbiAgIH1cbiAgIFxuICAgLmNhcmQ6aG92ZXJ7XG4gICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG4gICB9Il19 */");

/***/ }),

/***/ "./src/app/navi/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/navi/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_products_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/products/products.service */ "./src/app/products/products.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let HomeComponent = class HomeComponent {
    constructor(productsService) {
        this.productsService = productsService;
    }
    ngOnInit() {
        this.productsService.getByStatus("polecamy").subscribe(response => {
            this.productsRecomend = response;
        }, error => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]) {
                this.statusError = error.status;
                console.error(error.error);
            }
        });
        this.productsService.getByStatus("promocja").subscribe(response => {
            this.productsPromotion = response;
        }, error => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]) {
                this.statusError = error.status;
                console.error(error.error);
            }
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: src_app_products_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navi/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/navi/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/navi/menu/menu.component.css":
/*!**********************************************!*\
  !*** ./src/app/navi/menu/menu.component.css ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmkvbWVudS9tZW51LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/navi/menu/menu.component.ts":
/*!*********************************************!*\
  !*** ./src/app/navi/menu/menu.component.ts ***!
  \*********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");



let MenuComponent = class MenuComponent {
    constructor(auth) {
        this.auth = auth;
        this.auth.state.subscribe();
    }
    ngOnInit() {
    }
};
MenuComponent.ctorParameters = () => [
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navi/menu/menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu.component.css */ "./src/app/navi/menu/menu.component.css")).default]
    })
], MenuComponent);



/***/ }),

/***/ "./src/app/navi/navi.module.ts":
/*!*************************************!*\
  !*** ./src/app/navi/navi.module.ts ***!
  \*************************************/
/*! exports provided: NaviModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NaviModule", function() { return NaviModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/navi/home/home.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/navi/page-not-found/page-not-found.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/navi/menu/menu.component.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _profile_profile_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../profile/profile.module */ "./src/app/profile/profile.module.ts");
/* harmony import */ var _navi_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navi.routing.module */ "./src/app/navi/navi.routing.module.ts");
/* harmony import */ var _error_error_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../error/error.module */ "./src/app/error/error.module.ts");










let NaviModule = class NaviModule {
};
NaviModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
            _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"],
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"],
            _profile_profile_module__WEBPACK_IMPORTED_MODULE_7__["ProfileModule"],
            _error_error_module__WEBPACK_IMPORTED_MODULE_9__["ErrorModule"],
            _navi_routing_module__WEBPACK_IMPORTED_MODULE_8__["NaviRoutingModule"],
        ],
        exports: [
            _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"]
        ],
    })
], NaviModule);



/***/ }),

/***/ "./src/app/navi/navi.routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/navi/navi.routing.module.ts ***!
  \*********************************************/
/*! exports provided: NaviRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NaviRoutingModule", function() { return NaviRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/navi/home/home.component.ts");




const routes = [
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }
];
let NaviRoutingModule = class NaviRoutingModule {
};
NaviRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], NaviRoutingModule);



/***/ }),

/***/ "./src/app/navi/page-not-found/page-not-found.component.css":
/*!******************************************************************!*\
  !*** ./src/app/navi/page-not-found/page-not-found.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmkvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/navi/page-not-found/page-not-found.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/navi/page-not-found/page-not-found.component.ts ***!
  \*****************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navi/page-not-found/page-not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/navi/page-not-found/page-not-found.component.css")).default]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/orders/add-order/add-order.component.css":
/*!**********************************************************!*\
  !*** ./src/app/orders/add-order/add-order.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9hZGQtb3JkZXIvYWRkLW9yZGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/orders/add-order/add-order.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/orders/add-order/add-order.component.ts ***!
  \*********************************************************/
/*! exports provided: AddOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOrderComponent", function() { return AddOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AddOrderComponent = class AddOrderComponent {
    constructor() {
        this.pathOrder = true;
    }
    ngOnInit() {
    }
};
AddOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'add-order',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/add-order/add-order.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-order.component.css */ "./src/app/orders/add-order/add-order.component.css")).default]
    })
], AddOrderComponent);



/***/ }),

/***/ "./src/app/orders/order-sumary/order-sumary.component.css":
/*!****************************************************************!*\
  !*** ./src/app/orders/order-sumary/order-sumary.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlci1zdW1hcnkvb3JkZXItc3VtYXJ5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/orders/order-sumary/order-sumary.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/orders/order-sumary/order-sumary.component.ts ***!
  \***************************************************************/
/*! exports provided: OrderSumaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSumaryComponent", function() { return OrderSumaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../orders.service */ "./src/app/orders/orders.service.ts");
/* harmony import */ var src_app_cart_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/cart/cart.service */ "./src/app/cart/cart.service.ts");






let OrderSumaryComponent = class OrderSumaryComponent {
    constructor(route, auth, ordersService, cartService) {
        this.route = route;
        this.auth = auth;
        this.ordersService = ordersService;
        this.cartService = cartService;
        this.pathOrder = true;
        this.saved = false;
        this.sumOrder = 0;
        this.auth.state.subscribe();
        this.route.queryParams.subscribe(param => {
            this.orderData = JSON.parse(param['order_data']);
        });
    }
    ngOnInit() {
    }
    getOrderItemCart(item) {
        this.orderItemList = item;
    }
    save() {
        this.saveOrderItem().subscribe((response) => {
            this.saveOrder(response);
        });
        this.saved = true;
    }
    saveOrderItem() {
        this.orderItemList.forEach(item => {
            this.sumOrder += (item.product.product_price * item.order_item_amount);
        });
        return this.ordersService.createOrderItem(this.orderItemList);
    }
    saveOrder(number) {
        this.orderData.orders_number = number;
        this.orderData.orders_payments_sum = this.sumOrder;
        if (this.auth.isAuthenticated) {
            this.orderData.user = this.auth.getCurrentUser();
        }
        this.ordersService.createOrder(this.orderData).subscribe();
        if (this.auth.isAuthenticated) {
            this.cartService.deleteMyCart(this.auth.getCurrentUser().user_id).subscribe(response => {
            });
        }
        else {
            localStorage.removeItem('products');
        }
    }
};
OrderSumaryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _orders_service__WEBPACK_IMPORTED_MODULE_4__["OrdersService"] },
    { type: src_app_cart_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] }
];
OrderSumaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'order-sumary',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order-sumary.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/order-sumary/order-sumary.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order-sumary.component.css */ "./src/app/orders/order-sumary/order-sumary.component.css")).default]
    })
], OrderSumaryComponent);



/***/ }),

/***/ "./src/app/orders/order/order.component.css":
/*!**************************************************!*\
  !*** ./src/app/orders/order/order.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlci9vcmRlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/orders/order/order.component.ts":
/*!*************************************************!*\
  !*** ./src/app/orders/order/order.component.ts ***!
  \*************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../orders.service */ "./src/app/orders/orders.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");





let OrderComponent = class OrderComponent {
    constructor(route, ordersService, auth) {
        this.route = route;
        this.ordersService = ordersService;
        this.auth = auth;
        this.auth.state.subscribe();
        this.route.queryParams.subscribe(param => {
            this.orderId = param['order_id'];
        });
        this.ordersService.getOrdersById(this.orderId).subscribe(response => {
            this.order = response;
            this.ordersService.getOrderItemByOrderNumber(response.orders_number).subscribe(items => {
                this.orderItem = items;
            });
        });
    }
    ngOnInit() {
    }
};
OrderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/order/order.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order.component.css */ "./src/app/orders/order/order.component.css")).default]
    })
], OrderComponent);



/***/ }),

/***/ "./src/app/orders/orders-delete/orders-delete.component.css":
/*!******************************************************************!*\
  !*** ./src/app/orders/orders-delete/orders-delete.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlcnMtZGVsZXRlL29yZGVycy1kZWxldGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/orders/orders-delete/orders-delete.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/orders/orders-delete/orders-delete.component.ts ***!
  \*****************************************************************/
/*! exports provided: OrdersDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersDeleteComponent", function() { return OrdersDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../orders.service */ "./src/app/orders/orders.service.ts");





let OrdersDeleteComponent = class OrdersDeleteComponent {
    constructor(auth, route, router, ordersService) {
        this.auth = auth;
        this.route = route;
        this.router = router;
        this.ordersService = ordersService;
        this.remove = false;
        this.auth.state.subscribe();
        this.route.paramMap.subscribe(params => {
            this.orderId = +params.get('order_id');
        });
    }
    ngOnInit() {
    }
    delete() {
        this.ordersService.deleteOrder(this.orderId).subscribe(() => {
            console.log("usunięto zamówienie");
        });
        this.remove = true;
    }
};
OrdersDeleteComponent.ctorParameters = () => [
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _orders_service__WEBPACK_IMPORTED_MODULE_4__["OrdersService"] }
];
OrdersDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orders-delete',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./orders-delete.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders-delete/orders-delete.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./orders-delete.component.css */ "./src/app/orders/orders-delete/orders-delete.component.css")).default]
    })
], OrdersDeleteComponent);



/***/ }),

/***/ "./src/app/orders/orders-manager/orders-manager.component.css":
/*!********************************************************************!*\
  !*** ./src/app/orders/orders-manager/orders-manager.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlcnMtbWFuYWdlci9vcmRlcnMtbWFuYWdlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/orders/orders-manager/orders-manager.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/orders/orders-manager/orders-manager.component.ts ***!
  \*******************************************************************/
/*! exports provided: OrdersManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersManagerComponent", function() { return OrdersManagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../orders.service */ "./src/app/orders/orders.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let OrdersManagerComponent = class OrdersManagerComponent {
    constructor(auth, ordersService, router) {
        this.auth = auth;
        this.ordersService = ordersService;
        this.router = router;
        this.auth.state.subscribe();
        this.ordersService.getAllOrders().subscribe(response => {
            this.orders = response;
        });
    }
    ngOnInit() {
    }
    goOrder(order) {
        this.router.navigate(['/zamowienie-szczegoly'], { queryParams: { order_id: order.orders_id } });
    }
};
OrdersManagerComponent.ctorParameters = () => [
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
OrdersManagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orders-manager',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./orders-manager.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders-manager/orders-manager.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./orders-manager.component.css */ "./src/app/orders/orders-manager/orders-manager.component.css")).default]
    })
], OrdersManagerComponent);



/***/ }),

/***/ "./src/app/orders/orders.module.ts":
/*!*****************************************!*\
  !*** ./src/app/orders/orders.module.ts ***!
  \*****************************************/
/*! exports provided: OrdersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersModule", function() { return OrdersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders.routing.module */ "./src/app/orders/orders.routing.module.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/orders/orders/orders.component.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order/order.component */ "./src/app/orders/order/order.component.ts");
/* harmony import */ var _form_form_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../form/form.module */ "./src/app/form/form.module.ts");
/* harmony import */ var _add_order_add_order_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-order/add-order.component */ "./src/app/orders/add-order/add-order.component.ts");
/* harmony import */ var _cart_cart_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../cart/cart.module */ "./src/app/cart/cart.module.ts");
/* harmony import */ var _order_sumary_order_sumary_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./order-sumary/order-sumary.component */ "./src/app/orders/order-sumary/order-sumary.component.ts");
/* harmony import */ var _orders_manager_orders_manager_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./orders-manager/orders-manager.component */ "./src/app/orders/orders-manager/orders-manager.component.ts");
/* harmony import */ var _orders_delete_orders_delete_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./orders-delete/orders-delete.component */ "./src/app/orders/orders-delete/orders-delete.component.ts");
/* harmony import */ var _error_error_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../error/error.module */ "./src/app/error/error.module.ts");














let OrdersModule = class OrdersModule {
};
OrdersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_orders_orders_component__WEBPACK_IMPORTED_MODULE_4__["OrdersComponent"], _order_order_component__WEBPACK_IMPORTED_MODULE_6__["OrderComponent"], _add_order_add_order_component__WEBPACK_IMPORTED_MODULE_8__["AddOrderComponent"], _order_sumary_order_sumary_component__WEBPACK_IMPORTED_MODULE_10__["OrderSumaryComponent"], _orders_manager_orders_manager_component__WEBPACK_IMPORTED_MODULE_11__["OrdersManagerComponent"], _orders_delete_orders_delete_component__WEBPACK_IMPORTED_MODULE_12__["OrdersDeleteComponent"],],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__["AuthModule"],
            _form_form_module__WEBPACK_IMPORTED_MODULE_7__["FormModule"],
            _error_error_module__WEBPACK_IMPORTED_MODULE_13__["ErrorModule"],
            _cart_cart_module__WEBPACK_IMPORTED_MODULE_9__["CartModule"],
            _orders_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrdersRoutingModule"]
        ]
    })
], OrdersModule);



/***/ }),

/***/ "./src/app/orders/orders.routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/orders/orders.routing.module.ts ***!
  \*************************************************/
/*! exports provided: OrdersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersRoutingModule", function() { return OrdersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/orders/orders/orders.component.ts");
/* harmony import */ var _add_order_add_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-order/add-order.component */ "./src/app/orders/add-order/add-order.component.ts");
/* harmony import */ var _order_sumary_order_sumary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-sumary/order-sumary.component */ "./src/app/orders/order-sumary/order-sumary.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order/order.component */ "./src/app/orders/order/order.component.ts");
/* harmony import */ var _orders_manager_orders_manager_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./orders-manager/orders-manager.component */ "./src/app/orders/orders-manager/orders-manager.component.ts");
/* harmony import */ var _orders_delete_orders_delete_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./orders-delete/orders-delete.component */ "./src/app/orders/orders-delete/orders-delete.component.ts");









const routes = [
    {
        path: 'moje-zamowienia',
        component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_3__["OrdersComponent"]
    },
    {
        path: 'zamowienie',
        component: _add_order_add_order_component__WEBPACK_IMPORTED_MODULE_4__["AddOrderComponent"]
    },
    {
        path: 'podsumowanie',
        component: _order_sumary_order_sumary_component__WEBPACK_IMPORTED_MODULE_5__["OrderSumaryComponent"]
    },
    {
        path: 'zamowienie-szczegoly',
        component: _order_order_component__WEBPACK_IMPORTED_MODULE_6__["OrderComponent"]
    },
    {
        path: 'zamowienia-admin',
        component: _orders_manager_orders_manager_component__WEBPACK_IMPORTED_MODULE_7__["OrdersManagerComponent"]
    },
    {
        path: 'zamowienie-usuwanie/:order_id',
        component: _orders_delete_orders_delete_component__WEBPACK_IMPORTED_MODULE_8__["OrdersDeleteComponent"]
    },
];
let OrdersRoutingModule = class OrdersRoutingModule {
};
OrdersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], OrdersRoutingModule);



/***/ }),

/***/ "./src/app/orders/orders.service.ts":
/*!******************************************!*\
  !*** ./src/app/orders/orders.service.ts ***!
  \******************************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let OrdersService = class OrdersService {
    constructor(http) {
        this.http = http;
    }
    getAllOrders() {
        return this.http.get("http://localhost:8080/orders/all");
    }
    getOrdersById(id) {
        return this.http.get("http://localhost:8080/orders/" + id);
    }
    getOrdersByUserId(id) {
        return this.http.get("http://localhost:8080/orders/user/" + id);
    }
    getOrderItemByOrderNumber(number) {
        return this.http.get("http://localhost:8080/order/number/" + number);
    }
    createOrderItem(item) {
        return this.http.post("http://localhost:8090/order/create", item);
    }
    createOrder(order) {
        return this.http.post("http://localhost:8090/orders/create", order);
    }
    editDetail(id, order) {
        return this.http.put("http://localhost:8080/orders/detail/" + id, order);
    }
    editAddress(id, order) {
        return this.http.put("http://localhost:8080/orders/address/" + id, order);
    }
    deleteOrder(id) {
        return this.http.delete("http://localhost:8080/orders/" + id);
    }
};
OrdersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
OrdersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OrdersService);



/***/ }),

/***/ "./src/app/orders/orders/orders.component.css":
/*!****************************************************!*\
  !*** ./src/app/orders/orders/orders.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/orders/orders/orders.component.ts":
/*!***************************************************!*\
  !*** ./src/app/orders/orders/orders.component.ts ***!
  \***************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../orders.service */ "./src/app/orders/orders.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");






let OrdersComponent = class OrdersComponent {
    constructor(auth, ordersService, router) {
        this.auth = auth;
        this.ordersService = ordersService;
        this.router = router;
        this.auth.state.subscribe();
        if (this.auth.isAuthenticated) {
            this.ordersService.getOrdersByUserId(this.auth.getCurrentUser().user_id).subscribe(response => {
                this.userOrders = response;
            }, error => {
                if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpErrorResponse"]) {
                    this.statusError = error.status;
                    console.error(error.error);
                }
            });
        }
    }
    ngOnInit() {
    }
    goOrder(order) {
        this.router.navigate(['/zamowienie-szczegoly'], { queryParams: { order_id: order.orders_id } });
    }
};
OrdersComponent.ctorParameters = () => [
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
OrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orders',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./orders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders/orders.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./orders.component.css */ "./src/app/orders/orders/orders.component.css")).default]
    })
], OrdersComponent);



/***/ }),

/***/ "./src/app/products/add-product/add-product.component.css":
/*!****************************************************************!*\
  !*** ./src/app/products/add-product/add-product.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2FkZC1wcm9kdWN0L2FkZC1wcm9kdWN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/products/add-product/add-product.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/products/add-product/add-product.component.ts ***!
  \***************************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../products.service */ "./src/app/products/products.service.ts");





let AddProductComponent = class AddProductComponent {
    constructor(fb, auth, http) {
        this.fb = fb;
        this.auth = auth;
        this.http = http;
        this.selectProductForm = this.fb.group({
            product_type: this.fb.control(''),
        });
        this.auth.state.subscribe();
    }
    addProduct(product) {
        this.http.create(product)
            .subscribe(() => {
            console.log("Success");
        }, err => {
            this.error = err.message;
        });
    }
    ngOnInit() {
    }
};
AddProductComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"] }
];
AddProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/add-product/add-product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-product.component.css */ "./src/app/products/add-product/add-product.component.css")).default]
    })
], AddProductComponent);



/***/ }),

/***/ "./src/app/products/delete-product/delete-product.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/products/delete-product/delete-product.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2RlbGV0ZS1wcm9kdWN0L2RlbGV0ZS1wcm9kdWN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/products/delete-product/delete-product.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/products/delete-product/delete-product.component.ts ***!
  \*********************************************************************/
/*! exports provided: DeleteProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteProductComponent", function() { return DeleteProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var src_app_products_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/products/products.service */ "./src/app/products/products.service.ts");





let DeleteProductComponent = class DeleteProductComponent {
    constructor(http, auth, route) {
        this.http = http;
        this.auth = auth;
        this.route = route;
        this.remove = false;
        this.auth.state.subscribe();
        this.route.paramMap.subscribe(params => {
            this.id = +params.get('product_id');
        });
    }
    delete() {
        this.http.delete(this.id).subscribe(() => {
            console.log("Success");
        }, err => {
            this.error = err.message;
        });
        this.remove = true;
    }
    ngOnInit() {
    }
};
DeleteProductComponent.ctorParameters = () => [
    { type: src_app_products_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
DeleteProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delete-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./delete-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/delete-product/delete-product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./delete-product.component.css */ "./src/app/products/delete-product/delete-product.component.css")).default]
    })
], DeleteProductComponent);



/***/ }),

/***/ "./src/app/products/edit-product/edit-product.component.css":
/*!******************************************************************!*\
  !*** ./src/app/products/edit-product/edit-product.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2VkaXQtcHJvZHVjdC9lZGl0LXByb2R1Y3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/products/edit-product/edit-product.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/products/edit-product/edit-product.component.ts ***!
  \*****************************************************************/
/*! exports provided: EditProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductComponent", function() { return EditProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_products_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/products/products.service */ "./src/app/products/products.service.ts");





let EditProductComponent = class EditProductComponent {
    constructor(http, auth, route) {
        this.http = http;
        this.auth = auth;
        this.route = route;
        this.auth.state.subscribe();
        this.route.paramMap.subscribe(params => {
            this.id = +params.get('product_id');
        });
        this.http.getById(this.id).subscribe(response => {
            this.editedProduct = response;
            this.typeProduct = response.product_type;
        });
    }
    updateProduct(product) {
        console.log(product);
        this.http.update(this.id, product)
            .subscribe((response) => {
            console.log("Success " + response);
        }, err => {
            this.error = err.message;
            console.log("error: " + this.error);
        });
    }
    ngOnInit() {
    }
};
EditProductComponent.ctorParameters = () => [
    { type: src_app_products_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
EditProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/edit-product/edit-product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-product.component.css */ "./src/app/products/edit-product/edit-product.component.css")).default]
    })
], EditProductComponent);



/***/ }),

/***/ "./src/app/products/product/drone-by-id/drone-by-id.component.css":
/*!************************************************************************!*\
  !*** ./src/app/products/product/drone-by-id/drone-by-id.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3QvZHJvbmUtYnktaWQvZHJvbmUtYnktaWQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/products/product/drone-by-id/drone-by-id.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/products/product/drone-by-id/drone-by-id.component.ts ***!
  \***********************************************************************/
/*! exports provided: DroneByIdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DroneByIdComponent", function() { return DroneByIdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let DroneByIdComponent = class DroneByIdComponent {
    constructor(auth, fb) {
        this.auth = auth;
        this.fb = fb;
        this.cart = true;
        this.amount = 1;
        this.cartItem = {
            order_item_id: 0,
            product: this.product,
            order_item_amount: 1
        };
        this.addProductForm = this.fb.group({
            amount: this.fb.control('')
        });
        this.emiterSetProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.auth.state.subscribe();
    }
    ngOnInit() { }
    set getId(product) {
        this.product = product;
    }
    addToCart(product) {
        this.cartItem.product = product;
        this.cartItem.order_item_amount = this.amount;
        this.emiterSetProduct.emit(this.cartItem);
        this.cart = false;
    }
};
DroneByIdComponent.ctorParameters = () => [
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("getProduct")
], DroneByIdComponent.prototype, "getId", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('addToCart')
], DroneByIdComponent.prototype, "emiterSetProduct", void 0);
DroneByIdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'drone-by-id',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./drone-by-id.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/product/drone-by-id/drone-by-id.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./drone-by-id.component.css */ "./src/app/products/product/drone-by-id/drone-by-id.component.css")).default]
    })
], DroneByIdComponent);



/***/ }),

/***/ "./src/app/products/product/laptop-by-id/laptop-by-id.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/products/product/laptop-by-id/laptop-by-id.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3QvbGFwdG9wLWJ5LWlkL2xhcHRvcC1ieS1pZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/products/product/laptop-by-id/laptop-by-id.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/products/product/laptop-by-id/laptop-by-id.component.ts ***!
  \*************************************************************************/
/*! exports provided: LaptopByIdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaptopByIdComponent", function() { return LaptopByIdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let LaptopByIdComponent = class LaptopByIdComponent {
    constructor(auth, fb) {
        this.auth = auth;
        this.fb = fb;
        this.cart = true;
        this.amount = 1;
        this.cartItem = {
            order_item_id: 0,
            product: this.product,
            order_item_amount: 1
        };
        this.addProductForm = this.fb.group({
            amount: this.fb.control('')
        });
        this.emiterSetProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.auth.state.subscribe();
    }
    ngOnInit() { }
    set getId(product) {
        this.product = product;
    }
    addToCart(product) {
        this.cartItem.product = product;
        this.cartItem.order_item_amount = this.amount;
        this.emiterSetProduct.emit(this.cartItem);
        this.cart = false;
    }
};
LaptopByIdComponent.ctorParameters = () => [
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("getProduct")
], LaptopByIdComponent.prototype, "getId", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('addToCart')
], LaptopByIdComponent.prototype, "emiterSetProduct", void 0);
LaptopByIdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'laptop-by-id',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./laptop-by-id.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/product/laptop-by-id/laptop-by-id.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./laptop-by-id.component.css */ "./src/app/products/product/laptop-by-id/laptop-by-id.component.css")).default]
    })
], LaptopByIdComponent);



/***/ }),

/***/ "./src/app/products/product/product.component.css":
/*!********************************************************!*\
  !*** ./src/app/products/product/product.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/products/product/product.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/products/product/product.component.ts ***!
  \*******************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../products.service */ "./src/app/products/products.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var src_app_cart_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/cart/cart.service */ "./src/app/cart/cart.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");







let ProductComponent = class ProductComponent {
    constructor(auth, http, cartService, route) {
        this.auth = auth;
        this.http = http;
        this.cartService = cartService;
        this.route = route;
        this.cartLocalItemList = [];
        this.cartUserItem = {
            order_item_amount: 0,
            product: this.product,
            user: this.auth.getCurrentUser()
        };
        this.route.paramMap.subscribe(params => {
            this.id = +params.get('product_id');
        });
        this.http.getById(this.id).subscribe(response => {
            this.product = response;
            this.productType = response.product_type;
        }, error => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpErrorResponse"]) {
                this.statusError = error.status;
                console.error(error.error);
            }
        });
    }
    ngOnInit() {
        if (localStorage.getItem('products') == null) {
            localStorage.setItem('products', JSON.stringify(this.cartLocalItemList));
        }
        else {
            this.cartLocalItemList = JSON.parse(localStorage.getItem('products'));
        }
    }
    addtoCart(cartItem) {
        if (this.auth.isAuthenticated) {
            this.cartUserItem.order_item_amount = cartItem.order_item_amount;
            this.cartUserItem.product = cartItem.product;
            this.cartUserItem.user = this.auth.getCurrentUser();
            this.cartService.setMyCartItem(this.cartUserItem).subscribe(() => {
            }, err => {
                this.error = err.message;
            });
        }
        else {
            this.cartLocalItemList.push(cartItem);
            localStorage.setItem('products', JSON.stringify(this.cartLocalItemList));
        }
    }
};
ProductComponent.ctorParameters = () => [
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] },
    { type: src_app_cart_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/product/product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product.component.css */ "./src/app/products/product/product.component.css")).default]
    })
], ProductComponent);



/***/ }),

/***/ "./src/app/products/product/smartphone-by-id/smartphone-by-id.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/products/product/smartphone-by-id/smartphone-by-id.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3Qvc21hcnRwaG9uZS1ieS1pZC9zbWFydHBob25lLWJ5LWlkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/products/product/smartphone-by-id/smartphone-by-id.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/products/product/smartphone-by-id/smartphone-by-id.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SmartphoneByIdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartphoneByIdComponent", function() { return SmartphoneByIdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let SmartphoneByIdComponent = class SmartphoneByIdComponent {
    constructor(auth, fb) {
        this.auth = auth;
        this.fb = fb;
        this.cart = true;
        this.amount = 1;
        this.cartItem = {
            order_item_id: 0,
            product: this.product,
            order_item_amount: 1
        };
        this.addProductForm = this.fb.group({
            amount: this.fb.control('')
        });
        this.emiterSetProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.auth.state.subscribe();
    }
    ngOnInit() { }
    set getId(product) {
        this.product = product;
    }
    addToCart(product) {
        this.cartItem.product = product;
        this.cartItem.order_item_amount = this.amount;
        this.emiterSetProduct.emit(this.cartItem);
        this.cart = false;
    }
};
SmartphoneByIdComponent.ctorParameters = () => [
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("getProduct")
], SmartphoneByIdComponent.prototype, "getId", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('addToCart')
], SmartphoneByIdComponent.prototype, "emiterSetProduct", void 0);
SmartphoneByIdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smartphone-by-id',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./smartphone-by-id.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/product/smartphone-by-id/smartphone-by-id.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./smartphone-by-id.component.css */ "./src/app/products/product/smartphone-by-id/smartphone-by-id.component.css")).default]
    })
], SmartphoneByIdComponent);



/***/ }),

/***/ "./src/app/products/products.module.ts":
/*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products.routing.module */ "./src/app/products/products.routing.module.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products/products.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/product.component */ "./src/app/products/product/product.component.ts");
/* harmony import */ var _cart_cart_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cart/cart.module */ "./src/app/cart/cart.module.ts");
/* harmony import */ var _products_drones_drones_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products/drones/drones.component */ "./src/app/products/products/drones/drones.component.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _products_smartphones_smartphones_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./products/smartphones/smartphones.component */ "./src/app/products/products/smartphones/smartphones.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _delete_product_delete_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./delete-product/delete-product.component */ "./src/app/products/delete-product/delete-product.component.ts");
/* harmony import */ var _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit-product/edit-product.component */ "./src/app/products/edit-product/edit-product.component.ts");
/* harmony import */ var _form_form_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../form/form.module */ "./src/app/form/form.module.ts");
/* harmony import */ var _products_laptops_laptops_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./products/laptops/laptops.component */ "./src/app/products/products/laptops/laptops.component.ts");
/* harmony import */ var _product_drone_by_id_drone_by_id_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./product/drone-by-id/drone-by-id.component */ "./src/app/products/product/drone-by-id/drone-by-id.component.ts");
/* harmony import */ var _product_laptop_by_id_laptop_by_id_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./product/laptop-by-id/laptop-by-id.component */ "./src/app/products/product/laptop-by-id/laptop-by-id.component.ts");
/* harmony import */ var _product_smartphone_by_id_smartphone_by_id_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./product/smartphone-by-id/smartphone-by-id.component */ "./src/app/products/product/smartphone-by-id/smartphone-by-id.component.ts");
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./add-product/add-product.component */ "./src/app/products/add-product/add-product.component.ts");
/* harmony import */ var _error_error_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../error/error.module */ "./src/app/error/error.module.ts");




















let ProductsModule = class ProductsModule {
};
ProductsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"], _products_drones_drones_component__WEBPACK_IMPORTED_MODULE_7__["DronesComponent"], _products_laptops_laptops_component__WEBPACK_IMPORTED_MODULE_14__["LaptopsComponent"],
            _products_smartphones_smartphones_component__WEBPACK_IMPORTED_MODULE_9__["SmartphonesComponent"], _delete_product_delete_product_component__WEBPACK_IMPORTED_MODULE_11__["DeleteProductComponent"], _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_12__["EditProductComponent"], _product_drone_by_id_drone_by_id_component__WEBPACK_IMPORTED_MODULE_15__["DroneByIdComponent"], _product_laptop_by_id_laptop_by_id_component__WEBPACK_IMPORTED_MODULE_16__["LaptopByIdComponent"], _product_smartphone_by_id_smartphone_by_id_component__WEBPACK_IMPORTED_MODULE_17__["SmartphoneByIdComponent"], _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_18__["AddProductComponent"],
        ],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _cart_cart_module__WEBPACK_IMPORTED_MODULE_6__["CartModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_8__["AuthModule"],
            _form_form_module__WEBPACK_IMPORTED_MODULE_13__["FormModule"],
            _error_error_module__WEBPACK_IMPORTED_MODULE_19__["ErrorModule"],
            _products_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductsRoutingModule"]
        ]
    })
], ProductsModule);



/***/ }),

/***/ "./src/app/products/products.routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/products/products.routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ProductsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function() { return ProductsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products/products.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/product.component */ "./src/app/products/product/product.component.ts");
/* harmony import */ var _delete_product_delete_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./delete-product/delete-product.component */ "./src/app/products/delete-product/delete-product.component.ts");
/* harmony import */ var _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-product/edit-product.component */ "./src/app/products/edit-product/edit-product.component.ts");
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-product/add-product.component */ "./src/app/products/add-product/add-product.component.ts");








const routes = [
    {
        path: 'products/:product_type',
        component: _products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"]
    },
    {
        path: 'product/:product_id',
        component: _product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"]
    },
    {
        path: 'add-product',
        component: _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_7__["AddProductComponent"]
    },
    {
        path: 'edit-product/:product_id',
        component: _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_6__["EditProductComponent"]
    },
    {
        path: 'delete-product/:product_id',
        component: _delete_product_delete_product_component__WEBPACK_IMPORTED_MODULE_5__["DeleteProductComponent"]
    },
];
let ProductsRoutingModule = class ProductsRoutingModule {
};
ProductsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], ProductsRoutingModule);



/***/ }),

/***/ "./src/app/products/products.service.ts":
/*!**********************************************!*\
  !*** ./src/app/products/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ProductsService = class ProductsService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get("http://localhost:8090/product/all");
    }
    create(product) {
        return this.http.post("http://localhost:8080/product/create", product);
    }
    getById(id) {
        return this.http.get("http://localhost:8090/product/" + id);
    }
    update(id, product) {
        return this.http.put("http://localhost:8080/product/" + id, product);
    }
    delete(id) {
        return this.http.delete("http://localhost:8080/product/" + id);
    }
    getByType(type) {
        return this.http.get("http://localhost:8090/product/type", {
            params: {
                type: type
            }
        });
    }
    getByStatus(status) {
        return this.http.get("http://localhost:8090/product/status/", {
            params: {
                status: status
            }
        });
    }
};
ProductsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProductsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductsService);



/***/ }),

/***/ "./src/app/products/products/drones/drones.component.css":
/*!***************************************************************!*\
  !*** ./src/app/products/products/drones/drones.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".drone a{\n    color: #000000;\n    text-decoration: none;   \n   }\n   \n   .drone a:hover{\n   color: green;\n   }\n   \n   .drone{\n       margin: 10px;\n   }\n   \n   .my-card-body p{\n   margin: 0;\n   }\n   \n   .my-card-body h5{\n       margin-top: 20px;\n       }\n   \n   .card{\n       padding: 10px;\n   }\n   \n   .card:hover{\n       border: 1px solid green;\n   }\n   \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMvZHJvbmVzL2Ryb25lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtHQUN0Qjs7R0FFQTtHQUNBLFlBQVk7R0FDWjs7R0FFQTtPQUNJLFlBQVk7R0FDaEI7O0dBRUE7R0FDQSxTQUFTO0dBQ1Q7O0dBRUE7T0FDSSxnQkFBZ0I7T0FDaEI7O0dBRUo7T0FDSSxhQUFhO0dBQ2pCOztHQUVBO09BQ0ksdUJBQXVCO0dBQzNCIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMvZHJvbmVzL2Ryb25lcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb25lIGF7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyAgIFxuICAgfVxuICAgXG4gICAuZHJvbmUgYTpob3ZlcntcbiAgIGNvbG9yOiBncmVlbjtcbiAgIH1cbiAgIFxuICAgLmRyb25le1xuICAgICAgIG1hcmdpbjogMTBweDtcbiAgIH1cbiAgIFxuICAgLm15LWNhcmQtYm9keSBwe1xuICAgbWFyZ2luOiAwO1xuICAgfVxuICAgXG4gICAubXktY2FyZC1ib2R5IGg1e1xuICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgfVxuICAgXG4gICAuY2FyZHtcbiAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgfVxuICAgXG4gICAuY2FyZDpob3ZlcntcbiAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbiAgIH1cbiAgICJdfQ== */");

/***/ }),

/***/ "./src/app/products/products/drones/drones.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/products/products/drones/drones.component.ts ***!
  \**************************************************************/
/*! exports provided: DronesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DronesComponent", function() { return DronesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var src_app_products_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/products/products.service */ "./src/app/products/products.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let DronesComponent = class DronesComponent {
    constructor(http, auth) {
        this.http = http;
        this.auth = auth;
        this.auth.state.subscribe();
    }
    ngOnInit() {
        this.getAllProduct();
    }
    getAllProduct() {
        this.http.getByType("drone").subscribe(response => {
            this.drones = response;
        }, error => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpErrorResponse"]) {
                this.statusError = error.status;
                console.error(error.error);
            }
        });
    }
};
DronesComponent.ctorParameters = () => [
    { type: src_app_products_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
DronesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'drones',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./drones.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products/drones/drones.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./drones.component.css */ "./src/app/products/products/drones/drones.component.css")).default]
    })
], DronesComponent);



/***/ }),

/***/ "./src/app/products/products/laptops/laptops.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/products/products/laptops/laptops.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".laptop a{\n    color: #000000;\n    text-decoration: none;   \n   }\n   \n.laptop a:hover{\n   color: green;\n   }\n   \n.laptop{\n       margin: 10px;\n   }\n   \n.card{\n    padding: 10px;\n}\n   \n.card:hover{\n    border: 1px solid green;\n}\n   \n.my-card-body p{\n    margin: 0;\n}\n   \n.my-card-body h5{\n    margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMvbGFwdG9wcy9sYXB0b3BzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0dBQ3RCOztBQUVIO0dBQ0csWUFBWTtHQUNaOztBQUVIO09BQ08sWUFBWTtHQUNoQjs7QUFFSDtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0cy9sYXB0b3BzL2xhcHRvcHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYXB0b3AgYXtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7ICAgXG4gICB9XG4gICBcbi5sYXB0b3AgYTpob3ZlcntcbiAgIGNvbG9yOiBncmVlbjtcbiAgIH1cbiAgIFxuLmxhcHRvcHtcbiAgICAgICBtYXJnaW46IDEwcHg7XG4gICB9XG5cbi5jYXJke1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jYXJkOmhvdmVye1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xufVxuXG4ubXktY2FyZC1ib2R5IHB7XG4gICAgbWFyZ2luOiAwO1xufVxuICAgIFxuLm15LWNhcmQtYm9keSBoNXtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/products/products/laptops/laptops.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/products/products/laptops/laptops.component.ts ***!
  \****************************************************************/
/*! exports provided: LaptopsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaptopsComponent", function() { return LaptopsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_products_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/products/products.service */ "./src/app/products/products.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let LaptopsComponent = class LaptopsComponent {
    constructor(http, auth) {
        this.http = http;
        this.auth = auth;
        this.auth.state.subscribe();
    }
    ngOnInit() {
        this.getAllProduct();
    }
    getAllProduct() {
        this.http.getByType("laptop").subscribe(response => {
            this.laptops = response;
        }, error => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpErrorResponse"]) {
                this.statusError = error.status;
                console.error(error.error);
            }
        });
    }
};
LaptopsComponent.ctorParameters = () => [
    { type: src_app_products_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
LaptopsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'laptops',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./laptops.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products/laptops/laptops.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./laptops.component.css */ "./src/app/products/products/laptops/laptops.component.css")).default]
    })
], LaptopsComponent);



/***/ }),

/***/ "./src/app/products/products/products.component.css":
/*!**********************************************************!*\
  !*** ./src/app/products/products/products.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/products/products/products.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/products/products/products.component.ts ***!
  \*********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ProductsComponent = class ProductsComponent {
    constructor(route) {
        this.route = route;
        this.route.paramMap.subscribe(params => {
            this.productType = params.get('product_type');
        });
    }
    ngOnInit() {
    }
};
ProductsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products/products.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./products.component.css */ "./src/app/products/products/products.component.css")).default]
    })
], ProductsComponent);



/***/ }),

/***/ "./src/app/products/products/smartphones/smartphones.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/products/products/smartphones/smartphones.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".smartphone a{\n    color: #000000;\n    text-decoration: none;   \n   }\n   \n.smartphone a:hover{\n   color: green;\n   }\n   \n.smartphone{\n       margin: 10px;\n   }\n   \n.card{\n    padding: 10px;\n}\n   \n.card:hover{\n    border: 1px solid green;\n}\n   \n.my-card-body p{\n    margin: 0;\n}\n   \n.my-card-body h5{\n    margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMvc21hcnRwaG9uZXMvc21hcnRwaG9uZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7R0FDdEI7O0FBRUg7R0FDRyxZQUFZO0dBQ1o7O0FBRUE7T0FDSSxZQUFZO0dBQ2hCOztBQUVBO0lBQ0MsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzL3NtYXJ0cGhvbmVzL3NtYXJ0cGhvbmVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc21hcnRwaG9uZSBhe1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgICBcbiAgIH1cbiAgIFxuLnNtYXJ0cGhvbmUgYTpob3ZlcntcbiAgIGNvbG9yOiBncmVlbjtcbiAgIH1cbiAgIFxuICAgLnNtYXJ0cGhvbmV7XG4gICAgICAgbWFyZ2luOiAxMHB4O1xuICAgfVxuXG4gICAuY2FyZHtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY2FyZDpob3ZlcntcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbn1cblxuLm15LWNhcmQtYm9keSBwe1xuICAgIG1hcmdpbjogMDtcbn1cbiAgICBcbi5teS1jYXJkLWJvZHkgaDV7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/products/products/smartphones/smartphones.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/products/products/smartphones/smartphones.component.ts ***!
  \************************************************************************/
/*! exports provided: SmartphonesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartphonesComponent", function() { return SmartphonesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_products_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/products/products.service */ "./src/app/products/products.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let SmartphonesComponent = class SmartphonesComponent {
    constructor(http, auth) {
        this.http = http;
        this.auth = auth;
        this.auth.state.subscribe();
    }
    ngOnInit() {
        this.getAllProduct();
    }
    getAllProduct() {
        this.http.getByType("smartphone").subscribe(response => {
            this.smartphones = response;
        }, error => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpErrorResponse"]) {
                this.statusError = error.status;
                console.error(error.error);
            }
        });
    }
};
SmartphonesComponent.ctorParameters = () => [
    { type: src_app_products_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
SmartphonesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smartphones',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./smartphones.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products/smartphones/smartphones.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./smartphones.component.css */ "./src/app/products/products/smartphones/smartphones.component.css")).default]
    })
], SmartphonesComponent);



/***/ }),

/***/ "./src/app/profile/edit-profile/edit-profile.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/profile/edit-profile/edit-profile.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/profile/edit-profile/edit-profile.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/profile/edit-profile/edit-profile.component.ts ***!
  \****************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_users_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/users/users.service */ "./src/app/users/users.service.ts");





let EditProfileComponent = class EditProfileComponent {
    constructor(http, auth, route) {
        this.http = http;
        this.auth = auth;
        this.route = route;
        this.returnPath = 'profile';
        this.auth.state.subscribe();
        this.route.paramMap.subscribe(params => {
            this.id = +params.get('user_id');
        });
        this.http.getById(this.id).subscribe(response => {
            this.editedUser = response;
        });
    }
    updateUser(user) {
        console.log(user);
        this.http.update(this.id, user)
            .subscribe(() => {
            console.log("Success");
        }, err => {
            this.error = err.message;
            console.log("error: " + this.error.valueOf);
        });
    }
    ngOnInit() { }
};
EditProfileComponent.ctorParameters = () => [
    { type: src_app_users_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
EditProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/edit-profile/edit-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-profile.component.css */ "./src/app/profile/edit-profile/edit-profile.component.css")).default]
    })
], EditProfileComponent);



/***/ }),

/***/ "./src/app/profile/profile-bar/profile-bar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/profile/profile-bar/profile-bar.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS1iYXIvcHJvZmlsZS1iYXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/profile/profile-bar/profile-bar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/profile/profile-bar/profile-bar.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfileBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileBarComponent", function() { return ProfileBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");



let ProfileBarComponent = class ProfileBarComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
        this.name = this.auth.name;
    }
};
ProfileBarComponent.ctorParameters = () => [
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
ProfileBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'profile-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile-bar/profile-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile-bar.component.css */ "./src/app/profile/profile-bar/profile-bar.component.css")).default]
    })
], ProfileBarComponent);



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.service */ "./src/app/profile/profile.service.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile/profile.component.ts");
/* harmony import */ var _profile_bar_profile_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-bar/profile-bar.component */ "./src/app/profile/profile-bar/profile-bar.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile.routing.module */ "./src/app/profile/profile.routing.module.ts");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "./src/app/profile/edit-profile/edit-profile.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _form_form_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../form/form.module */ "./src/app/form/form.module.ts");
/* harmony import */ var _error_error_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../error/error.module */ "./src/app/error/error.module.ts");












let ProfileModule = class ProfileModule {
};
ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], _profile_bar_profile_bar_component__WEBPACK_IMPORTED_MODULE_5__["ProfileBarComponent"], _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_8__["EditProfileComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _form_form_module__WEBPACK_IMPORTED_MODULE_10__["FormModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _error_error_module__WEBPACK_IMPORTED_MODULE_11__["ErrorModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_7__["ProfileRoutingModule"],
        ],
        exports: [
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], _profile_bar_profile_bar_component__WEBPACK_IMPORTED_MODULE_5__["ProfileBarComponent"],
        ],
        providers: [
            _profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]
        ]
    })
], ProfileModule);



/***/ }),

/***/ "./src/app/profile/profile.routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/profile/profile.routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile/profile.component.ts");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "./src/app/profile/edit-profile/edit-profile.component.ts");





const routes = [
    {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"],
    },
    {
        path: 'edit-profile/:user_id',
        component: _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_4__["EditProfileComponent"],
    }
];
let ProfileRoutingModule = class ProfileRoutingModule {
};
ProfileRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], ProfileRoutingModule);



/***/ }),

/***/ "./src/app/profile/profile.service.ts":
/*!********************************************!*\
  !*** ./src/app/profile/profile.service.ts ***!
  \********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__);





let ProfileService = class ProfileService {
    constructor(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    getUserProfile() {
        if (!this.user_request) {
            this.user_request = this.auth.state
                .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(() => this.auth.isAuthenticated), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => this.auth.getCurrentUser()));
        }
        return this.user_request;
    }
    clearCache() {
        this.user_request = null;
    }
    update(id, user) {
        return this.http.put("http://localhost:8080/user/" + id, user);
    }
};
ProfileService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProfileService);



/***/ }),

/***/ "./src/app/profile/profile/profile.component.css":
/*!*******************************************************!*\
  !*** ./src/app/profile/profile/profile.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/profile/profile/profile.component.ts":
/*!******************************************************!*\
  !*** ./src/app/profile/profile/profile.component.ts ***!
  \******************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let ProfileComponent = class ProfileComponent {
    constructor(auth, http) {
        this.auth = auth;
        this.http = http;
        this.auth.state.subscribe();
    }
    ngOnInit() {
        if (this.auth.isAuthenticated) {
            this.id = this.auth.getCurrentUser().user_id;
            this.http.get("http://localhost:8080/user/" + this.id).subscribe(response => {
                this.profile = response;
            }), error => {
                if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]) {
                    this.statusError = error.status;
                    console.error(error.error);
                }
            };
        }
    }
};
ProfileComponent.ctorParameters = () => [
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile/profile.component.css")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/users/delete-user/delete-user.component.css":
/*!*************************************************************!*\
  !*** ./src/app/users/delete-user/delete-user.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2RlbGV0ZS11c2VyL2RlbGV0ZS11c2VyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/users/delete-user/delete-user.component.ts":
/*!************************************************************!*\
  !*** ./src/app/users/delete-user/delete-user.component.ts ***!
  \************************************************************/
/*! exports provided: DeleteUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUserComponent", function() { return DeleteUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users.service */ "./src/app/users/users.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let DeleteUserComponent = class DeleteUserComponent {
    constructor(http, auth, route) {
        this.http = http;
        this.auth = auth;
        this.route = route;
        this.remove = false;
        this.auth.state.subscribe();
        this.route.paramMap.subscribe(params => {
            this.id = +params.get('user_id');
        });
    }
    delete() {
        this.http.delete(this.id).subscribe(() => {
            console.log("Success");
        }, err => {
            this.error = err.message;
        });
        this.remove = true;
    }
    ngOnInit() {
    }
};
DeleteUserComponent.ctorParameters = () => [
    { type: _users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
DeleteUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delete-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./delete-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/delete-user/delete-user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./delete-user.component.css */ "./src/app/users/delete-user/delete-user.component.css")).default]
    })
], DeleteUserComponent);



/***/ }),

/***/ "./src/app/users/edit-user/edit-user.component.css":
/*!*********************************************************!*\
  !*** ./src/app/users/edit-user/edit-user.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2VkaXQtdXNlci9lZGl0LXVzZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/users/edit-user/edit-user.component.ts":
/*!********************************************************!*\
  !*** ./src/app/users/edit-user/edit-user.component.ts ***!
  \********************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users.service */ "./src/app/users/users.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let EditUserComponent = class EditUserComponent {
    constructor(http, auth, route) {
        this.http = http;
        this.auth = auth;
        this.route = route;
        this.returnPath = 'user';
        this.auth.state.subscribe();
        this.route.paramMap.subscribe(params => {
            this.id = +params.get('user_id');
        });
        this.http.getById(this.id).subscribe(response => {
            this.editedUser = response;
        });
    }
    updateUser(user) {
        console.log(user);
        this.http.update(this.id, user)
            .subscribe(() => {
            console.log("Success");
        }, err => {
            this.error = err.message;
            console.log("error: " + this.error.valueOf);
        });
    }
    ngOnInit() {
    }
};
EditUserComponent.ctorParameters = () => [
    { type: _users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
EditUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/edit-user/edit-user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-user.component.css */ "./src/app/users/edit-user/edit-user.component.css")).default]
    })
], EditUserComponent);



/***/ }),

/***/ "./src/app/users/role-user/role-user.component.css":
/*!*********************************************************!*\
  !*** ./src/app/users/role-user/role-user.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3JvbGUtdXNlci9yb2xlLXVzZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/users/role-user/role-user.component.ts":
/*!********************************************************!*\
  !*** ./src/app/users/role-user/role-user.component.ts ***!
  \********************************************************/
/*! exports provided: RoleUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleUserComponent", function() { return RoleUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users.service */ "./src/app/users/users.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let RoleUserComponent = class RoleUserComponent {
    constructor(http, auth, route) {
        this.http = http;
        this.auth = auth;
        this.route = route;
        this.returnPath = 'user';
        this.auth.state.subscribe();
        this.route.paramMap.subscribe(params => {
            this.id = +params.get('user_id');
        });
        this.http.getById(this.id).subscribe(response => {
            this.editedUser = response;
        });
    }
    updateUser(user) {
        console.log(user);
        this.http.updateRole(this.id, user)
            .subscribe(() => {
            console.log("Success");
        }, err => {
            this.error = err.message;
            console.log("error: " + this.error.valueOf);
        });
    }
    ngOnInit() {
    }
};
RoleUserComponent.ctorParameters = () => [
    { type: _users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
RoleUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-role-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./role-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/role-user/role-user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./role-user.component.css */ "./src/app/users/role-user/role-user.component.css")).default]
    })
], RoleUserComponent);



/***/ }),

/***/ "./src/app/users/user-by-id/user-by-id.component.css":
/*!***********************************************************!*\
  !*** ./src/app/users/user-by-id/user-by-id.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXItYnktaWQvdXNlci1ieS1pZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/users/user-by-id/user-by-id.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/users/user-by-id/user-by-id.component.ts ***!
  \**********************************************************/
/*! exports provided: UserByIdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserByIdComponent", function() { return UserByIdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users.service */ "./src/app/users/users.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let UserByIdComponent = class UserByIdComponent {
    constructor(http, auth, route) {
        this.http = http;
        this.auth = auth;
        this.route = route;
        this.user = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(params => +params.get('user_id')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(id => this.http.getById(id)));
        this.auth.state.subscribe();
    }
    ngOnInit() {
    }
};
UserByIdComponent.ctorParameters = () => [
    { type: _users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
UserByIdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-by-id',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-by-id.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/user-by-id/user-by-id.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-by-id.component.css */ "./src/app/users/user-by-id/user-by-id.component.css")).default]
    })
], UserByIdComponent);



/***/ }),

/***/ "./src/app/users/users.module.ts":
/*!***************************************!*\
  !*** ./src/app/users/users.module.ts ***!
  \***************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users/users.component.ts");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users.routing.module */ "./src/app/users/users.routing.module.ts");
/* harmony import */ var _user_by_id_user_by_id_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-by-id/user-by-id.component */ "./src/app/users/user-by-id/user-by-id.component.ts");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-user/edit-user.component */ "./src/app/users/edit-user/edit-user.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _delete_user_delete_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./delete-user/delete-user.component */ "./src/app/users/delete-user/delete-user.component.ts");
/* harmony import */ var _form_form_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../form/form.module */ "./src/app/form/form.module.ts");
/* harmony import */ var _role_user_role_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./role-user/role-user.component */ "./src/app/users/role-user/role-user.component.ts");











let UsersModule = class UsersModule {
};
UsersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"], _user_by_id_user_by_id_component__WEBPACK_IMPORTED_MODULE_5__["UserByIdComponent"], _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_6__["EditUserComponent"], _delete_user_delete_user_component__WEBPACK_IMPORTED_MODULE_8__["DeleteUserComponent"], _role_user_role_user_component__WEBPACK_IMPORTED_MODULE_10__["RoleUserComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _form_form_module__WEBPACK_IMPORTED_MODULE_9__["FormModule"],
            _users_routing_module__WEBPACK_IMPORTED_MODULE_4__["UsersRoutingModule"]
        ],
        exports: [
            _users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"],
        ]
    })
], UsersModule);



/***/ }),

/***/ "./src/app/users/users.routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/users/users.routing.module.ts ***!
  \***********************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users/users.component.ts");
/* harmony import */ var _user_by_id_user_by_id_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-by-id/user-by-id.component */ "./src/app/users/user-by-id/user-by-id.component.ts");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-user/edit-user.component */ "./src/app/users/edit-user/edit-user.component.ts");
/* harmony import */ var _delete_user_delete_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delete-user/delete-user.component */ "./src/app/users/delete-user/delete-user.component.ts");
/* harmony import */ var _role_user_role_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./role-user/role-user.component */ "./src/app/users/role-user/role-user.component.ts");








const routes = [
    {
        path: 'users',
        component: _users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"]
    },
    {
        path: 'user/:user_id',
        component: _user_by_id_user_by_id_component__WEBPACK_IMPORTED_MODULE_4__["UserByIdComponent"]
    },
    {
        path: 'edit-user/:user_id',
        component: _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_5__["EditUserComponent"]
    },
    {
        path: 'role-user/:user_id',
        component: _role_user_role_user_component__WEBPACK_IMPORTED_MODULE_7__["RoleUserComponent"]
    },
    {
        path: 'delete-user/:user_id',
        component: _delete_user_delete_user_component__WEBPACK_IMPORTED_MODULE_6__["DeleteUserComponent"]
    }
];
let UsersRoutingModule = class UsersRoutingModule {
};
UsersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], UsersRoutingModule);



/***/ }),

/***/ "./src/app/users/users.service.ts":
/*!****************************************!*\
  !*** ./src/app/users/users.service.ts ***!
  \****************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UsersService = class UsersService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get("http://localhost:8080/user/all");
    }
    getById(id) {
        return this.http.get("http://localhost:8080/user/" + id);
    }
    update(id, user) {
        return this.http.put("http://localhost:8080/user/" + id, user);
    }
    updateRole(id, user) {
        return this.http.put("http://localhost:8080/user/role/" + id, user);
    }
    delete(id) {
        return this.http.delete("http://localhost:8080/user/" + id);
    }
};
UsersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UsersService);



/***/ }),

/***/ "./src/app/users/users/users.component.css":
/*!*************************************************!*\
  !*** ./src/app/users/users/users.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/users/users/users.component.ts":
/*!************************************************!*\
  !*** ./src/app/users/users/users.component.ts ***!
  \************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users.service */ "./src/app/users/users.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");




let UsersComponent = class UsersComponent {
    constructor(http, auth) {
        this.http = http;
        this.auth = auth;
        this.auth.state.subscribe();
    }
    getAllUsers() {
        this.http.getAll().subscribe(response => {
            this.usersList = response;
        });
    }
    ngOnInit() {
        this.getAllUsers();
    }
};
UsersComponent.ctorParameters = () => [
    { type: _users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'users',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users/users.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./users.component.css */ "./src/app/users/users/users.component.css")).default]
    })
], UsersComponent);



/***/ }),

/***/ "./src/app/validation/validation-feedback/validation-feedback.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/validation/validation-feedback/validation-feedback.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".validation-feedback {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmFsaWRhdGlvbi92YWxpZGF0aW9uLWZlZWRiYWNrL3ZhbGlkYXRpb24tZmVlZGJhY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi1mZWVkYmFjay92YWxpZGF0aW9uLWZlZWRiYWNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmFsaWRhdGlvbi1mZWVkYmFjayB7XG4gIGNvbG9yOiByZWQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/validation/validation-feedback/validation-feedback.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/validation/validation-feedback/validation-feedback.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ValidationFeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationFeedbackComponent", function() { return ValidationFeedbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ValidationFeedbackComponent = class ValidationFeedbackComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ValidationFeedbackComponent.prototype, "control", void 0);
ValidationFeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'validation-feedback',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./validation-feedback.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/validation/validation-feedback/validation-feedback.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./validation-feedback.component.css */ "./src/app/validation/validation-feedback/validation-feedback.component.css")).default]
    })
], ValidationFeedbackComponent);



/***/ }),

/***/ "./src/app/validation/validation-order-address/validation-order-address.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/validation/validation-order-address/validation-order-address.component.css ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".validation-feedback {\n    color: red;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmFsaWRhdGlvbi92YWxpZGF0aW9uLW9yZGVyLWFkZHJlc3MvdmFsaWRhdGlvbi1vcmRlci1hZGRyZXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0VBQ1oiLCJmaWxlIjoic3JjL2FwcC92YWxpZGF0aW9uL3ZhbGlkYXRpb24tb3JkZXItYWRkcmVzcy92YWxpZGF0aW9uLW9yZGVyLWFkZHJlc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52YWxpZGF0aW9uLWZlZWRiYWNrIHtcbiAgICBjb2xvcjogcmVkO1xuICB9Il19 */");

/***/ }),

/***/ "./src/app/validation/validation-order-address/validation-order-address.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/validation/validation-order-address/validation-order-address.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ValidationOrderAddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationOrderAddressComponent", function() { return ValidationOrderAddressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ValidationOrderAddressComponent = class ValidationOrderAddressComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ValidationOrderAddressComponent.prototype, "control", void 0);
ValidationOrderAddressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'validation-order-address',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./validation-order-address.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/validation/validation-order-address/validation-order-address.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./validation-order-address.component.css */ "./src/app/validation/validation-order-address/validation-order-address.component.css")).default]
    })
], ValidationOrderAddressComponent);



/***/ }),

/***/ "./src/app/validation/validation-product/validation-product.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/validation/validation-product/validation-product.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".validation-feedback {\n    color: red;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmFsaWRhdGlvbi92YWxpZGF0aW9uLXByb2R1Y3QvdmFsaWRhdGlvbi1wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0VBQ1oiLCJmaWxlIjoic3JjL2FwcC92YWxpZGF0aW9uL3ZhbGlkYXRpb24tcHJvZHVjdC92YWxpZGF0aW9uLXByb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52YWxpZGF0aW9uLWZlZWRiYWNrIHtcbiAgICBjb2xvcjogcmVkO1xuICB9Il19 */");

/***/ }),

/***/ "./src/app/validation/validation-product/validation-product.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/validation/validation-product/validation-product.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ValidationProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationProductComponent", function() { return ValidationProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ValidationProductComponent = class ValidationProductComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ValidationProductComponent.prototype, "control", void 0);
ValidationProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'validation-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./validation-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/validation/validation-product/validation-product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./validation-product.component.css */ "./src/app/validation/validation-product/validation-product.component.css")).default]
    })
], ValidationProductComponent);



/***/ }),

/***/ "./src/app/validation/validation.module.ts":
/*!*************************************************!*\
  !*** ./src/app/validation/validation.module.ts ***!
  \*************************************************/
/*! exports provided: ValidationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationModule", function() { return ValidationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _validation_feedback_validation_feedback_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validation-feedback/validation-feedback.component */ "./src/app/validation/validation-feedback/validation-feedback.component.ts");
/* harmony import */ var _validation_product_validation_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validation-product/validation-product.component */ "./src/app/validation/validation-product/validation-product.component.ts");
/* harmony import */ var _validation_order_address_validation_order_address_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validation-order-address/validation-order-address.component */ "./src/app/validation/validation-order-address/validation-order-address.component.ts");






let ValidationModule = class ValidationModule {
};
ValidationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_validation_feedback_validation_feedback_component__WEBPACK_IMPORTED_MODULE_3__["ValidationFeedbackComponent"], _validation_product_validation_product_component__WEBPACK_IMPORTED_MODULE_4__["ValidationProductComponent"], _validation_order_address_validation_order_address_component__WEBPACK_IMPORTED_MODULE_5__["ValidationOrderAddressComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_validation_feedback_validation_feedback_component__WEBPACK_IMPORTED_MODULE_3__["ValidationFeedbackComponent"], _validation_product_validation_product_component__WEBPACK_IMPORTED_MODULE_4__["ValidationProductComponent"], _validation_order_address_validation_order_address_component__WEBPACK_IMPORTED_MODULE_5__["ValidationOrderAddressComponent"]]
    })
], ValidationModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/tom/IdeaProjects/x-tom/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map