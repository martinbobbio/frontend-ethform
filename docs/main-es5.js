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

module.exports = "\n    <div class=\"page-body-wrapper full-page-wrapper auth-page\">\n      <div class=\"content-wrapper d-flex align-items-center auth auth-bg-1 theme-one\">\n        <div class=\"row w-100 ml-0\">\n          <div class=\"col-lg-4 mx-auto\">\n            <h2 class=\"text-center mb-4\" style=\"color: white;\">Send Ether</h2>\n            <div class=\"auto-form-wrapper\">\n              <div class=\"row mb-4\">\n                <div class=\"col-6 bold text-info font-weight-bold\">Balance actual</div>\n                <div class=\"col-6 bold text-info font-weight-bold\">17.42 Ethers</div>\n              </div>\n              <hr/>\n              <form (ngSubmit)=\"onSubmit(form.value)\" #form=\"ngForm\">\n                <div class=\"form-group\">\n                  <label class=\"label\">Address ETH</label>\n                  <div class=\"input-group\">\n                    <input ngModel name=\"address\" type=\"text\" class=\"form-control\" required placeholder=\"Example: 0x892...\" style=\"min-height:44px\">\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"label\">Amount (ETH)</label>\n                  <div class=\"input-group\">\n                    <input ngModel name=\"amount\" type=\"number\" class=\"form-control\" required placeholder=\"Example: 3.25\" style=\"min-height:44px\">\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"label\">Gas</label>\n                  <div class=\"input-group\">\n                    <input ngModel readonly value=\"0.002\" name=\"gas\" type=\"text\" class=\"form-control\" placeholder=\"0.003\" style=\"min-height:44px\">\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <button [disabled]=\"form.invalid\" class=\"btn btn-info submit-btn btn-block\">Generate Transaction</button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  "

/***/ }),

/***/ "./src/app/actions/auth.action.ts":
/*!****************************************!*\
  !*** ./src/app/actions/auth.action.ts ***!
  \****************************************/
/*! exports provided: SET_USER, UNSET_USER, SetUserAction, UnsetUserAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USER", function() { return SET_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNSET_USER", function() { return UNSET_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetUserAction", function() { return SetUserAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsetUserAction", function() { return UnsetUserAction; });
var SET_USER = '[AUTH] Set User';
var UNSET_USER = '[AUTH] Unset User';
var SetUserAction = /** @class */ (function () {
    function SetUserAction(user) {
        this.user = user;
        this.type = SET_USER;
    }
    SetUserAction.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return SetUserAction;
}());

var UnsetUserAction = /** @class */ (function () {
    function UnsetUserAction() {
        this.type = UNSET_USER;
    }
    return UnsetUserAction;
}());



/***/ }),

/***/ "./src/app/actions/ui.action.ts":
/*!**************************************!*\
  !*** ./src/app/actions/ui.action.ts ***!
  \**************************************/
/*! exports provided: ACTIVATE_LOADING, DESACTIVATE_LOADING, ActivateLoadingAction, DesactivateLoadingAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIVATE_LOADING", function() { return ACTIVATE_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESACTIVATE_LOADING", function() { return DESACTIVATE_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivateLoadingAction", function() { return ActivateLoadingAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesactivateLoadingAction", function() { return DesactivateLoadingAction; });
var ACTIVATE_LOADING = '[UI] ACTIVATE LOADING';
var DESACTIVATE_LOADING = '[UI] DESACTIVATE LOADING';
var ActivateLoadingAction = /** @class */ (function () {
    function ActivateLoadingAction() {
        this.type = ACTIVATE_LOADING;
    }
    return ActivateLoadingAction;
}());

var DesactivateLoadingAction = /** @class */ (function () {
    function DesactivateLoadingAction() {
        this.type = DESACTIVATE_LOADING;
    }
    return DesactivateLoadingAction;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");




var routes = [
    { path: '', component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
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
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.reducer */ "./src/app/app.reducer.ts");
/* harmony import */ var _pipes_first_uppercase_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/first-uppercase.pipe */ "./src/app/pipes/first-uppercase.pipe.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");





//Routing

//NGRX



//Pipes

//Components


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
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
    return AppModule;
}());



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
/* harmony import */ var _reducers_ui_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/ui.reducer */ "./src/app/reducers/ui.reducer.ts");
/* harmony import */ var _reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/auth.reducer */ "./src/app/reducers/auth.reducer.ts");


var appReducers = {
    ui: _reducers_ui_reducer__WEBPACK_IMPORTED_MODULE_0__["uiReducer"],
    auth: _reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_1__["authReducer"],
};


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FirstUppercasePipe = /** @class */ (function () {
    function FirstUppercasePipe() {
    }
    FirstUppercasePipe.prototype.transform = function (value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    };
    FirstUppercasePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'firstUppercase'
        })
    ], FirstUppercasePipe);
    return FirstUppercasePipe;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);



var AlertService = /** @class */ (function () {
    function AlertService() {
        this.alertSuccess = function (title, description) { return sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire(title, description, 'success'); };
        this.alertError = function (title, description) { return sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire(title, description, 'error'); };
        this.alertInfo = function (title, description) { return sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire(title, description, 'info'); };
        this.showLoading = function (title) { return sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({ title: title, onBeforeOpen: function () { return sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.showLoading(); }, allowOutsideClick: false }); };
        this.closeAlert = function () { return sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.close(); };
    }
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/reducers/auth.reducer.ts":
/*!******************************************!*\
  !*** ./src/app/reducers/auth.reducer.ts ***!
  \******************************************/
/*! exports provided: authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_auth_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../actions/auth.action */ "./src/app/actions/auth.action.ts");


var initState = {
    user: null
};
function authReducer(state, action) {
    if (state === void 0) { state = initState; }
    switch (action.type) {
        case _actions_auth_action__WEBPACK_IMPORTED_MODULE_1__["SET_USER"]:
            return {
                user: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, action.user)
            };
        case _actions_auth_action__WEBPACK_IMPORTED_MODULE_1__["UNSET_USER"]:
            return {
                user: null
            };
        default: return state;
    }
}


/***/ }),

/***/ "./src/app/reducers/ui.reducer.ts":
/*!****************************************!*\
  !*** ./src/app/reducers/ui.reducer.ts ***!
  \****************************************/
/*! exports provided: uiReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uiReducer", function() { return uiReducer; });
/* harmony import */ var _actions_ui_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../actions/ui.action */ "./src/app/actions/ui.action.ts");

var initState = {
    isLoading: false
};
function uiReducer(state, action) {
    if (state === void 0) { state = initState; }
    switch (action.type) {
        case _actions_ui_action__WEBPACK_IMPORTED_MODULE_0__["ACTIVATE_LOADING"]:
            return {
                isLoading: true
            };
        case _actions_ui_action__WEBPACK_IMPORTED_MODULE_0__["DESACTIVATE_LOADING"]:
            return {
                isLoading: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/alert.service */ "./src/app/providers/alert.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(_alertService, _store) {
        this._alertService = _alertService;
        this._store = _store;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onSubmit = function (data) {
        console.log(data);
    };
    HomeComponent.ctorParameters = function () { return [
        { type: src_app_providers_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/home/home.component.html")
        })
    ], HomeComponent);
    return HomeComponent;
}());



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
var environment = {
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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\marti\Desktop\Stacks\Angular\18-EtherForm\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map