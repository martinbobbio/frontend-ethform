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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/user-balance/user-balance.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/user-balance/user-balance.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div id=\"container\" class=\"row mb-4\">\n    <div class=\"col-6 bold text-info font-weight-bold\">Current balance</div>\n    <div id=\"balance\" class=\"col-6 bold text-info font-weight-bold\">{{userBalance | numberToFix:3}} Ethers</div>\n  </div>\n  <hr/>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/wrapper/wrapper.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/wrapper/wrapper.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body-wrapper full-page-wrapper auth-page\">\n  <div class=\"content-wrapper d-flex align-items-center auth auth-bg-1 theme-one\">\n    <div class=\"row w-100 ml-0\">\n      <div class=\"col-lg-4 mx-auto\">\n        <h2 id=\"title\" class=\"text-center mb-4\" style=\"color: white;\">{{title}}</h2>\n        <div class=\"auto-form-wrapper\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/custom-page/custom-page.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/custom-page/custom-page.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-wrapper title=\"Detail\">\n  <app-user-balance [userBalance]=\"user_balance\"></app-user-balance>\n  <div *ngIf=\"loading\" class=\"text-center py-5\">\n    <div class=\"spinner-border text-info\" role=\"status\">\n    </div>\n    <p class=\"text-info mt-4\">We are processing your transaction...</p>\n  </div>\n  <div *ngIf=\"!loading && custom_page ==='PAGE_SUCCESS'\" className=\"py-5\" style=\"text-align: center;\">\n    <i class=\"bi-check2-circle text-info\" style=\"font-size: 6rem;\"></i>\n    <p class=\"bold text-info mt-3\">{{amount_sended}} ETH sended.<p>\n    <p class=\"text-info mt-2\">Your transaction was successful.</p>\n    <button (click)=\"goHome()\" class=\"btn btn-info submit-btn btn-block mt-5 mb-4\">Make another transaction</button>\n  </div>\n  <div *ngIf=\"!loading && custom_page ==='PAGE_ERROR'\" className=\"py-5\" style=\"text-align: center;\">\n    <i class=\"bi-x text-info\" style=\"font-size: 6rem;\"></i>\n    <p class=\"bold text-info mt-3\">Error {{error_status}} ({{error_text}})<p>\n    <p class=\"text-info mt-2\">Sorry, the transaction failed</p>\n    <button (click)=\"goHome()\" class=\"btn btn-info submit-btn btn-block mt-5 mb-4\">Try Again...</button>\n  </div>\n</app-wrapper>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/home/home.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/home/home.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-wrapper title=\"Send Ether\">\n  <app-user-balance [userBalance]=\"user_balance\"></app-user-balance>\n  <form (ngSubmit)=\"onSubmit(form.value)\" #form=\"ngForm\">\n    <div class=\"form-group\">\n      <label class=\"label\">Address ETH</label>\n      <div class=\"input-group\" [ngStyle]=\"{'margin-bottom': form.value.address !== '' ? '39px' : '0px' }\">\n        <input ngModel name=\"address\" type=\"text\" class=\"form-control\" [ngClass]=\"{'is-valid':validateAddress(form.value.address), 'is-invalid': (!validateAddress(form.value.address) && form.value.address !== '')}\" required placeholder=\"Example: 0x892...\" style=\"min-height:44px\">\n        <div *ngIf=\"form.value.address\" class=\"valid-feedback\">\n          The ETH Address is valid.\n        </div>\n        <div *ngIf=\"(!validateAddress(form.value.address) && form.value.address !== '')\" class=\"invalid-feedback\">\n          The ETH Address is invalid.\n        </div>\n      </div>\n      <small *ngIf=\"!form.value.address\" id=\"addressHelp\" class=\"form-text text-muted\">The address is required.</small>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"label\">Amount</label>\n      <div class=\"input-group\" [ngStyle]=\"{'margin-bottom': (!validateAmount(form.value.amount) && form.value.amount !== '' && form.value.amount !== null) ? '39px' : '0px' }\">\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text\">ETH </div>\n        </div>\n        <input ngModel name=\"amount\" type=\"number\" [ngClass]=\"{'is-valid':validateAmount(form.value.amount), 'is-invalid': (!validateAmount(form.value.amount) && form.value.amount !== '')}\" class=\"form-control\" required placeholder=\"Example: 3.275\" style=\"min-height:44px\">\n        <div *ngIf=\"txt_amount_error\" class=\"invalid-feedback\">\n          {{txt_amount_error}}\n        </div>\n      </div>\n      <small *ngIf=\"!form.value.amount\" id=\"addressHelp\" class=\"form-text text-muted\">The amount is required.</small>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"label\">Gas</label>\n      <div class=\"input-group\">\n        <input ngModel readonly [value]=\"gas\" name=\"gas\" type=\"text\" class=\"form-control\" [placeholder]=\"gas\" style=\"min-height:44px\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <button [disabled]=\"!validateAmount(form.value.amount) || !validateAddress(form.value.address)\" class=\"btn btn-info submit-btn btn-block\">Generate Transaction</button>\n    </div>\n  </form>\n</app-wrapper>"

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/app/actions/app.action.ts":
/*!***************************************!*\
  !*** ./src/app/actions/app.action.ts ***!
  \***************************************/
/*! exports provided: SET_TRANSACTION, SET_LOADING, SET_CUSTOM_PAGE, SET_ERROR, SetTransactionAction, SetLoadingAction, SetCustomPageAction, SetErrorAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TRANSACTION", function() { return SET_TRANSACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LOADING", function() { return SET_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CUSTOM_PAGE", function() { return SET_CUSTOM_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ERROR", function() { return SET_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTransactionAction", function() { return SetTransactionAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetLoadingAction", function() { return SetLoadingAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCustomPageAction", function() { return SetCustomPageAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetErrorAction", function() { return SetErrorAction; });
/* harmony import */ var _models_transaction_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/transaction.model */ "./src/app/models/transaction.model.ts");

const SET_TRANSACTION = '[APP] Set Transaction';
const SET_LOADING = '[APP] Set Loading';
const SET_CUSTOM_PAGE = '[APP] Set Custom Page';
const SET_ERROR = '[APP] Set Error';
class SetTransactionAction {
    constructor(data) {
        this.data = data;
        this.type = SET_TRANSACTION;
    }
}
SetTransactionAction.ctorParameters = () => [
    { type: _models_transaction_model__WEBPACK_IMPORTED_MODULE_0__["Transaction"] }
];
class SetLoadingAction {
    constructor(status) {
        this.status = status;
        this.type = SET_LOADING;
    }
}
SetLoadingAction.ctorParameters = () => [
    { type: Boolean }
];
class SetCustomPageAction {
    constructor(custom_page) {
        this.custom_page = custom_page;
        this.type = SET_CUSTOM_PAGE;
    }
}
SetCustomPageAction.ctorParameters = () => [
    { type: undefined }
];
class SetErrorAction {
    constructor(error_status, error_text) {
        this.error_status = error_status;
        this.error_text = error_text;
        this.type = SET_ERROR;
    }
}
SetErrorAction.ctorParameters = () => [
    null,
    null
];


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
/* harmony import */ var _views_custom_page_custom_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/custom-page/custom-page.component */ "./src/app/views/custom-page/custom-page.component.ts");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");





const routes = [
    { path: '', component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'custom-page', component: _views_custom_page_custom_page_component__WEBPACK_IMPORTED_MODULE_3__["CustomPageComponent"] },
    { path: '**', redirectTo: '/' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], AppRoutingModule);



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


let AppComponent = class AppComponent {
    ngOnInit() {
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.reducer */ "./src/app/app.reducer.ts");
/* harmony import */ var _pipes_first_uppercase_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/first-uppercase.pipe */ "./src/app/pipes/first-uppercase.pipe.ts");
/* harmony import */ var _pipes_number_to_fix__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/number-to-fix */ "./src/app/pipes/number-to-fix.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _views_custom_page_custom_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/custom-page/custom-page.component */ "./src/app/views/custom-page/custom-page.component.ts");
/* harmony import */ var _components_wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/wrapper/wrapper.component */ "./src/app/components/wrapper/wrapper.component.ts");
/* harmony import */ var _components_user_balance_user_balance_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/user-balance/user-balance.component */ "./src/app/components/user-balance/user-balance.component.ts");

//Angular





//Routing

//NGRX



//Pipes


//Components





let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
            _views_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
            _components_wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_15__["WrapperComponent"],
            _views_custom_page_custom_page_component__WEBPACK_IMPORTED_MODULE_14__["CustomPageComponent"],
            _components_user_balance_user_balance_component__WEBPACK_IMPORTED_MODULE_16__["UserBalanceComponent"],
            _pipes_first_uppercase_pipe__WEBPACK_IMPORTED_MODULE_10__["FirstUppercasePipe"],
            _pipes_number_to_fix__WEBPACK_IMPORTED_MODULE_11__["NumberToFix"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot(_app_reducer__WEBPACK_IMPORTED_MODULE_9__["appReducers"]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"].instrument({
                maxAge: 25,
                logOnly: src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].production
            })
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.reducer.ts":
/*!********************************!*\
  !*** ./src/app/app.reducer.ts ***!
  \********************************/
/*! exports provided: appReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducers", function() { return appReducers; });
/* harmony import */ var _reducers_app_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/app.reducer */ "./src/app/reducers/app.reducer.ts");

const appReducers = {
    app: _reducers_app_reducer__WEBPACK_IMPORTED_MODULE_0__["appReducer"],
};


/***/ }),

/***/ "./src/app/components/user-balance/user-balance.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-balance/user-balance.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserBalanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBalanceComponent", function() { return UserBalanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserBalanceComponent = class UserBalanceComponent {
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UserBalanceComponent.prototype, "userBalance", void 0);
UserBalanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-balance',
        template: __webpack_require__(/*! raw-loader!./user-balance.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/user-balance/user-balance.component.html"),
    })
], UserBalanceComponent);



/***/ }),

/***/ "./src/app/components/wrapper/wrapper.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/wrapper/wrapper.component.ts ***!
  \*********************************************************/
/*! exports provided: WrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapperComponent", function() { return WrapperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WrapperComponent = class WrapperComponent {
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WrapperComponent.prototype, "title", void 0);
WrapperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wrapper',
        template: __webpack_require__(/*! raw-loader!./wrapper.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/wrapper/wrapper.component.html")
    })
], WrapperComponent);



/***/ }),

/***/ "./src/app/models/transaction.model.ts":
/*!*********************************************!*\
  !*** ./src/app/models/transaction.model.ts ***!
  \*********************************************/
/*! exports provided: Transaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transaction", function() { return Transaction; });
class Transaction {
    constructor(transactionObject) {
        this.address = transactionObject && transactionObject.address;
        this.amount = transactionObject && transactionObject.amount;
        this.gas = transactionObject && transactionObject.gas;
    }
}
Transaction.ctorParameters = () => [
    { type: undefined }
];


/***/ }),

/***/ "./src/app/pipes/first-uppercase.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/pipes/first-uppercase.pipe.ts ***!
  \***********************************************/
/*! exports provided: FirstUppercasePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstUppercasePipe", function() { return FirstUppercasePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


/*
 * Transform the first letter in appercase
 * Usage:
 *   value | firstUppercase
 * Example:
 *   {{ martin | firstUppercase }}
 *   formats to: Martin
*/
let FirstUppercasePipe = class FirstUppercasePipe {
    transform(value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
};
FirstUppercasePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'firstUppercase'
    })
], FirstUppercasePipe);



/***/ }),

/***/ "./src/app/pipes/number-to-fix.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/number-to-fix.ts ***!
  \****************************************/
/*! exports provided: NumberToFix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberToFix", function() { return NumberToFix; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


/*
 * Parses the value indicated by the parameter in decimal
 * Usage:
 *   value | numberToFix:exponent
 * Example:
 *   {{ 22121.23311 | numberToFix:2 }}
 *   formats to: 22121.23
*/
let NumberToFix = class NumberToFix {
    transform(value = 0, fix = 3) {
        return Number(value.toFixed(fix));
    }
};
NumberToFix = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'numberToFix'
    })
], NumberToFix);



/***/ }),

/***/ "./src/app/providers/app.service.ts":
/*!******************************************!*\
  !*** ./src/app/providers/app.service.ts ***!
  \******************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _actions_app_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/app.action */ "./src/app/actions/app.action.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");






let AppService = class AppService {
    constructor(router, _store, http) {
        this.router = router;
        this._store = _store;
        this.http = http;
    }
    /**
     * @description The method sends the data entered by the user with the method
     *  post to the api and displays the success or error screen
     *
     * @param data - This object contains the transaction of the user (amount, gas, address)
     * @returns Nothing
     */
    sendTransaction(data) {
        this.router.navigate(['custom-page']);
        this._store.dispatch(new _actions_app_action__WEBPACK_IMPORTED_MODULE_4__["SetLoadingAction"](true));
        // This timer is only for see the loading
        setTimeout(() => {
            this.http.post("https://rcn.api/send-transaction", data).subscribe((response) => {
                if (response.success) {
                    this._store.dispatch(new _actions_app_action__WEBPACK_IMPORTED_MODULE_4__["SetTransactionAction"](data));
                }
                else {
                    this._store.dispatch(new _actions_app_action__WEBPACK_IMPORTED_MODULE_4__["SetCustomPageAction"]("PAGE_ERROR"));
                    this._store.dispatch(new _actions_app_action__WEBPACK_IMPORTED_MODULE_4__["SetLoadingAction"](false));
                }
            }, (error) => {
                console.log(error);
                this._store.dispatch(new _actions_app_action__WEBPACK_IMPORTED_MODULE_4__["SetErrorAction"](error.status, error.statusText));
            });
        }, 2000);
    }
};
AppService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AppService);



/***/ }),

/***/ "./src/app/reducers/app.reducer.ts":
/*!*****************************************!*\
  !*** ./src/app/reducers/app.reducer.ts ***!
  \*****************************************/
/*! exports provided: appReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducer", function() { return appReducer; });
/* harmony import */ var _actions_app_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/app.action */ "./src/app/actions/app.action.ts");

const gas_random = Number((Math.random() * (0.003 - 0.002) + 0.002).toFixed(3));
const initState = {
    transaction: { address: '', amount: 0, gas: gas_random },
    user_balance: 1200.075,
    loading: false,
    custom_page: "PAGE_SUCCESS",
    error_status: "",
    error_text: ""
};
function appReducer(state = initState, action) {
    switch (action.type) {
        case _actions_app_action__WEBPACK_IMPORTED_MODULE_0__["SET_TRANSACTION"]:
            return Object.assign({}, state, { transaction: Object.assign({}, action.data), user_balance: state.user_balance - action.data.amount - action.data.gas, custom_page: "PAGE_SUCCESS", loading: false });
        case _actions_app_action__WEBPACK_IMPORTED_MODULE_0__["SET_LOADING"]:
            return Object.assign({}, state, { loading: action.status });
        case _actions_app_action__WEBPACK_IMPORTED_MODULE_0__["SET_CUSTOM_PAGE"]:
            return Object.assign({}, state, { custom_page: action.custom_page });
        case _actions_app_action__WEBPACK_IMPORTED_MODULE_0__["SET_ERROR"]:
            return Object.assign({}, state, { custom_page: "PAGE_ERROR", error_text: action.error_text, error_status: action.error_status, loading: false });
        default: return state;
    }
}


/***/ }),

/***/ "./src/app/views/custom-page/custom-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/custom-page/custom-page.component.ts ***!
  \************************************************************/
/*! exports provided: CustomPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPageComponent", function() { return CustomPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let CustomPageComponent = class CustomPageComponent {
    constructor(_store, router) {
        this._store = _store;
        this.router = router;
    }
    ngOnInit() {
        this._store.select('app').subscribe(app => {
            this.user_balance = app.user_balance;
            this.loading = app.loading;
            this.custom_page = app.custom_page;
            this.amount_sended = app.transaction.amount + app.transaction.gas;
            this.error_text = app.error_text;
            this.error_status = app.error_status;
        });
    }
    goHome() {
        this.router.navigate(['/']);
    }
};
CustomPageComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CustomPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-custom-page',
        template: __webpack_require__(/*! raw-loader!./custom-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/custom-page/custom-page.component.html")
    })
], CustomPageComponent);



/***/ }),

/***/ "./src/app/views/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_providers_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/app.service */ "./src/app/providers/app.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3 */ "./node_modules/web3/lib/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_4__);





let HomeComponent = class HomeComponent {
    constructor(_appService, _store) {
        this._appService = _appService;
        this._store = _store;
        /**
         * @description It is validated if the amount is less than the current balance
         *
         * @param amount - The amount of the form
         * @returns The status of validation
         */
        this.validateAmount = (amount) => {
            this.txt_amount_error = null;
            if (amount === '' || amount === 0 || amount === null)
                return false;
            else if (amount < 0) {
                this.txt_amount_error = 'You cannot enter an amount less than 0';
                return false;
            }
            else if ((amount + this.gas) < this.user_balance) {
                return true;
            }
            this.txt_amount_error = 'The amount is higher than the total of your current balance and gas';
            return false;
        };
        /**
         * @description It is validated if the eth address is correct with the library of WEB3
         *
         * @param address - The address of the form
         * @returns The status of validation
         */
        this.validateAddress = (address) => {
            return web3__WEBPACK_IMPORTED_MODULE_4___default.a.utils.isAddress(address);
        };
    }
    ngOnInit() {
        this._store.select('app').subscribe(app => {
            this.user_balance = app.user_balance;
            this.gas = app.transaction.gas;
        });
    }
    /**
     * @description Method to send the data and make the transaction
     *
     * @param data - This is an object that contains the address, amount and gas
     * @returns Nothing
     */
    onSubmit(data) {
        data.gas = this.gas;
        this._appService.sendTransaction(data);
    }
};
HomeComponent.ctorParameters = () => [
    { type: src_app_providers_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/home/home.component.html")
    })
], HomeComponent);



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
};


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
const environment = {
    production: false,
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\marti\Desktop\Stacks\Angular\18-EtherForm\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 7:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 8:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 9:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map