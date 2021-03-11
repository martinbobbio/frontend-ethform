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

/***/ "./node_modules/raw-loader/index.js!./src/app/views/home/home.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/home/home.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body-wrapper full-page-wrapper auth-page\">\n  <div class=\"content-wrapper d-flex align-items-center auth auth-bg-1 theme-one\">\n    <div class=\"row w-100 ml-0\">\n      <div class=\"col-lg-4 mx-auto\">\n        <h2 class=\"text-center mb-4\" style=\"color: white;\">Send Ether</h2>\n        <div class=\"auto-form-wrapper\">\n          <div class=\"row mb-4\">\n            <div class=\"col-6 bold text-info font-weight-bold\">Balance actual</div>\n            <div class=\"col-6 bold text-info font-weight-bold\">{{user_balance}} Ethers</div>\n          </div>\n          <hr/>\n          <form (ngSubmit)=\"onSubmit(form.value)\" #form=\"ngForm\">\n            <div class=\"form-group\">\n              <label class=\"label\">Address ETH</label>\n              <div class=\"input-group\" [ngStyle]=\"{'margin-bottom': form.value.address !== '' ? '39px' : '0px' }\">\n                <input ngModel name=\"address\" type=\"text\" class=\"form-control\" [ngClass]=\"{'is-valid':validateAddress(form.value.address), 'is-invalid': (!validateAddress(form.value.address) && form.value.address !== '')}\" required placeholder=\"Example: 0x892...\" style=\"min-height:44px\">\n                <div *ngIf=\"form.value.address\" class=\"valid-feedback\">\n                  The ETH Address is valid.\n                </div>\n                <div *ngIf=\"(!validateAddress(form.value.address) && form.value.address !== '')\" class=\"invalid-feedback\">\n                  The ETH Address is invalid.\n                </div>\n              </div>\n              <small *ngIf=\"!form.value.address\" id=\"addressHelp\" class=\"form-text text-muted\">The address is required.</small>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"label\">Amount</label>\n              <div class=\"input-group\" [ngStyle]=\"{'margin-bottom': (!validateAmount(form.value.amount) && form.value.amount !== '' && form.value.amount !== null) ? '39px' : '0px' }\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\">ETH </div>\n                </div>\n                <input ngModel name=\"amount\" type=\"number\" [ngClass]=\"{'is-valid':validateAmount(form.value.amount), 'is-invalid': (!validateAmount(form.value.amount) && form.value.amount !== '')}\" class=\"form-control\" required placeholder=\"Example: 3.275\" style=\"min-height:44px\">\n                <div *ngIf=\"txt_amount_error\" class=\"invalid-feedback\">\n                  {{txt_amount_error}}\n                </div>\n              </div>\n              <small *ngIf=\"!form.value.amount\" id=\"addressHelp\" class=\"form-text text-muted\">The amount is required.</small>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"label\">Gas</label>\n              <div class=\"input-group\">\n                <input ngModel readonly [value]=\"gas\" name=\"gas\" type=\"text\" class=\"form-control\" [placeholder]=\"gas\" style=\"min-height:44px\">\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <button [disabled]=\"!validateAmount(form.value.amount) || !validateAddress(form.value.address)\" class=\"btn btn-info submit-btn btn-block\">Generate Transaction</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

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
/*! exports provided: SET_TRANSACTION, SET_LOADING, SetTransactionAction, SetTLoadingAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TRANSACTION", function() { return SET_TRANSACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LOADING", function() { return SET_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTransactionAction", function() { return SetTransactionAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTLoadingAction", function() { return SetTLoadingAction; });
/* harmony import */ var _models_transaction_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/transaction.model */ "./src/app/models/transaction.model.ts");

const SET_TRANSACTION = '[APP] Set Transaction';
const SET_LOADING = '[APP] Set Loading';
class SetTransactionAction {
    constructor(data) {
        this.data = data;
        this.type = SET_TRANSACTION;
    }
}
SetTransactionAction.ctorParameters = () => [
    { type: _models_transaction_model__WEBPACK_IMPORTED_MODULE_0__["Transaction"] }
];
class SetTLoadingAction {
    constructor(status) {
        this.status = status;
        this.type = SET_LOADING;
    }
}
SetTLoadingAction.ctorParameters = () => [
    { type: Boolean }
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
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");




const routes = [
    { path: '', component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: '**', redirectTo: '' }
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
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.reducer */ "./src/app/app.reducer.ts");
/* harmony import */ var _pipes_first_uppercase_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/first-uppercase.pipe */ "./src/app/pipes/first-uppercase.pipe.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");





//Routing

//NGRX



//Pipes

//Components


let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
            _views_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
            _pipes_first_uppercase_pipe__WEBPACK_IMPORTED_MODULE_9__["FirstUppercasePipe"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot(_app_reducer__WEBPACK_IMPORTED_MODULE_8__["appReducers"]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"].instrument({
                maxAge: 25,
                logOnly: src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].production
            })
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
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

/***/ "./src/app/providers/alert.service.ts":
/*!********************************************!*\
  !*** ./src/app/providers/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);



let AlertService = class AlertService {
    constructor() {
        this.alertSuccess = (title, description) => sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire(title, description, 'success');
        this.alertError = (title, description) => sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire(title, description, 'error');
        this.alertInfo = (title, description) => sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire(title, description, 'info');
        this.showLoading = (title) => sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({ title, onBeforeOpen: () => sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.showLoading(), allowOutsideClick: false });
        this.closeAlert = () => sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.close();
    }
};
AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AlertService);



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
};
function appReducer(state = initState, action) {
    switch (action.type) {
        case _actions_app_action__WEBPACK_IMPORTED_MODULE_0__["SET_TRANSACTION"]:
            return {
                transaction: Object.assign({}, action.data),
                user_balance: state.user_balance - action.data.amount,
                loading: false
            };
        case _actions_app_action__WEBPACK_IMPORTED_MODULE_0__["SET_LOADING"]:
            return {
                transaction: state.transaction,
                user_balance: state.user_balance,
                loading: action.status
            };
        default: return state;
    }
}


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
/* harmony import */ var src_app_providers_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/alert.service */ "./src/app/providers/alert.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3 */ "./node_modules/web3/lib/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_4__);





let HomeComponent = class HomeComponent {
    //0xA11e73F851C12d8d25a7b88a6121AD365De1838c
    constructor(_alertService, _store) {
        this._alertService = _alertService;
        this._store = _store;
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
        this.validateAddress = (address) => {
            return web3__WEBPACK_IMPORTED_MODULE_4___default.a.utils.isAddress(address);
        };
    }
    ngOnInit() {
        this._store.select('app').subscribe(app => {
            console.log(app);
            this.user_balance = app.user_balance;
            this.gas = app.transaction.gas;
        });
    }
    onSubmit(data) {
        console.log(data);
    }
};
HomeComponent.ctorParameters = () => [
    { type: src_app_providers_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] },
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