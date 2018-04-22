webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customers_list_customers_list_component__ = __webpack_require__("./src/app/customers-list/customers-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_detail_customer_detail_component__ = __webpack_require__("./src/app/customer-detail/customer-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__customers_list_customers_list_component__["a" /* CustomersListComponent */],
    },
    {
        path: 'customer-detail/:customerID',
        component: __WEBPACK_IMPORTED_MODULE_3__customer_detail_customer_detail_component__["a" /* CustomerDetailComponent */],
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>'
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customers_list_customers_list_component__ = __webpack_require__("./src/app/customers-list/customers-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_detail_customer_detail_component__ = __webpack_require__("./src/app/customer-detail/customer-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_app_routing_module__ = __webpack_require__("./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_datepicker__ = __webpack_require__("./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__customer_form_customer_form_component__ = __webpack_require__("./src/app/customer-form/customer-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__customers_list_customers_list_component__["a" /* CustomersListComponent */],
                __WEBPACK_IMPORTED_MODULE_4__customer_detail_customer_detail_component__["a" /* CustomerDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_8__customer_form_customer_form_component__["a" /* CustomerFormComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_datepicker__["a" /* BsDatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__app_routing_app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/customer-detail/customer-detail.component.css":
/***/ (function(module, exports) {

module.exports = "h1 {\r\n  font-size: 32px;\r\n  font-weight: normal;\r\n  word-wrap: break-word;\r\n}\r\n\r\n.issues-link {\r\n  color: #586069;\r\n  text-decoration: none;\r\n}\r\n\r\n:host ::ng-deep .form {\r\n  max-width: 400px;\r\n  padding: 0 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/customer-detail/customer-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"customers-link\" routerLink=\"/\"><i class=\"fa fa-arrow-left\"></i> Back to the list of customers</a>\n\n<div *ngIf=\"customer\">\n  <h1>Customer #{{ customer.customerID }}</h1>\n  <customer-form\n    [customer]=\"customer\"\n    (saveButtonClick)=\"saveButtonClick()\"\n    (removeCustomerClick)=\"removeCustomerClick()\">\n  </customer-form>\n</div>\n"

/***/ }),

/***/ "./src/app/customer-detail/customer-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customers_service__ = __webpack_require__("./src/app/customers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerDetailComponent = /** @class */ (function () {
    function CustomerDetailComponent(service, router, route) {
        var _this = this;
        this.route = route;
        this.service = service;
        this.router = router;
        this.route.params.subscribe(function (params) {
            var customer = service.getCustomer(params['customerID']);
            _this.customer = JSON.parse(JSON.stringify(customer));
        });
    }
    CustomerDetailComponent.prototype.saveButtonClick = function () {
        this.service.saveCustomer(this.customer);
        this.router.navigate(['']);
    };
    CustomerDetailComponent.prototype.removeCustomerClick = function () {
        this.service.deleteCustomer(this.customer.customerID);
        this.router.navigate(['']);
    };
    CustomerDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-customer-detail',
            template: __webpack_require__("./src/app/customer-detail/customer-detail.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__customers_service__["a" /* CustomersService */]],
            styles: [__webpack_require__("./src/app/customer-detail/customer-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__customers_service__["a" /* CustomersService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], CustomerDetailComponent);
    return CustomerDetailComponent;
}());



/***/ }),

/***/ "./src/app/customer-form/customer-form.component.css":
/***/ (function(module, exports) {

module.exports = ".new-row {\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/customer-form/customer-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form {{ formType }}\" *ngIf=\"customer\">\n  <div class=\"form-group\">\n    <label>First Name:</label>\n    <input [(ngModel)]=\"customer.name.first\" type=\"text\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Last Name:</label>\n    <input [(ngModel)]=\"customer.name.last\" type=\"text\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Sex:</label>\n    <select [(ngModel)]=\"customer.gender\" class=\"form-control\">\n      <option ngValue=\"m\">Male</option>\n      <option ngValue=\"w\">Female</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label>Birthday:</label>\n    <input #drp=\"bsDatepicker\"\n      bsDatepicker\n      [bsConfig]=\"{\n        dateInputFormat: 'YYYY-MM-DD',\n        containerClass: 'theme-blue'\n      }\"\n      [(ngModel)]=\"customer.birthday\"\n      class=\"form-control\">\n  </div>\n\n  <div class=\"form-group new-row\">\n    <button class=\"btn btn btn-primary\" (click)=\"saveClick()\">Save</button>\n    <button *ngIf=\"showRemoveButton\" class=\"btn btn btn-danger\" (click)=\"removeCustomer()\">Remove</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/customer-form/customer-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_customer__ = __webpack_require__("./src/app/models/customer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerFormComponent = /** @class */ (function () {
    function CustomerFormComponent() {
        this.saveButtonClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.removeCustomerClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    CustomerFormComponent.prototype.ngOnInit = function () {
        this.showRemoveButton = this.removeCustomerClick.observers.length > 0;
    };
    CustomerFormComponent.prototype.saveClick = function () {
        this.saveButtonClick.emit();
    };
    CustomerFormComponent.prototype.removeCustomer = function () {
        this.removeCustomerClick.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_customer__["a" /* Customer */])
    ], CustomerFormComponent.prototype, "customer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], CustomerFormComponent.prototype, "formType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], CustomerFormComponent.prototype, "saveButtonClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], CustomerFormComponent.prototype, "removeCustomerClick", void 0);
    CustomerFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'customer-form',
            template: __webpack_require__("./src/app/customer-form/customer-form.component.html"),
            styles: [__webpack_require__("./src/app/customer-form/customer-form.component.css")]
        })
    ], CustomerFormComponent);
    return CustomerFormComponent;
}());



/***/ }),

/***/ "./src/app/customers-list/customers-list.component.css":
/***/ (function(module, exports) {

module.exports = ".customer {\r\n  padding-right: 30px;\r\n}\r\n\r\n.customer .fa.fa-times {\r\n  position: absolute;\r\n  right: 10px;\r\n  cursor: pointer;\r\n  opacity: 0.3;\r\n}\r\n\r\n.customer .fa.fa-times:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.customer span {\r\n  cursor: default;\r\n  white-space: nowrap;\r\n}\r\n\r\n.customer .last-contact {\r\n  color: grey;\r\n  font-size: 14px;\r\n}\r\n\r\n.btn-primary {\r\n  margin: 10px;\r\n}\r\n\r\n:host ::ng-deep .form .form-group {\r\n  margin: 10px 20px;\r\n}\r\n\r\n:host ::ng-deep .form label {\r\n  margin-right: 10px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/customers-list/customers-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<button (click)=\"createCustomer()\" class=\"btn btn-primary\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>\n<ul class=\"customers list-group\">\n  <li class=\"customer list-group-item\" *ngIf=\"customer\">\n    <customer-form\n      [customer]=\"customer\"\n      formType=\"form-inline\"\n      (saveButtonClick)=\"saveButtonClick()\">\n    </customer-form>\n  </li>\n\n  <li class=\"customer list-group-item\" *ngFor=\"let customer of customers\">\n    <i class=\"fa fa-times\"\n      (click)=\"deleteCustomer(customer)\"\n      title=\"Delete a customer\"></i>\n    <span>\n      <span title=\"Customer Id\">#{{ customer.customerID }}</span>\n      <span title=\"Customer Full Name\"><a [routerLink]=\"['customer-detail/', customer.customerID]\">{{ customer.name.first }} {{ customer.name.last }}</a></span>\n      <span title=\"Customer Lifetime Value\">({{ customer.customerLifetimeValue }})</span>\n    </span>\n    <span class=\"last-contact\" title=\"Last contact\">Last contact: {{ customer.lastContact | date: 'dd/MM/yyyy' }}</span>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/customers-list/customers-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomersListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customers_service__ = __webpack_require__("./src/app/customers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_customer__ = __webpack_require__("./src/app/models/customer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomersListComponent = /** @class */ (function () {
    function CustomersListComponent(service) {
        this.service = service;
        this.customers = service.getCustomers();
    }
    CustomersListComponent.prototype.deleteCustomer = function (customer) {
        this.service.deleteCustomer(customer.customerID);
    };
    CustomersListComponent.prototype.createCustomer = function () {
        this.customer = new __WEBPACK_IMPORTED_MODULE_2__models_customer__["a" /* Customer */]();
    };
    CustomersListComponent.prototype.saveButtonClick = function () {
        this.service.addCustomer(this.customer);
        this.customer = null;
    };
    CustomersListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-customers-list',
            template: __webpack_require__("./src/app/customers-list/customers-list.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__customers_service__["a" /* CustomersService */]],
            styles: [__webpack_require__("./src/app/customers-list/customers-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__customers_service__["a" /* CustomersService */]])
    ], CustomersListComponent);
    return CustomersListComponent;
}());



/***/ }),

/***/ "./src/app/customers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var customers = [
    {
        'customerID': 1,
        'name': {
            'first': 'Peter',
            'last': 'Smith'
        },
        'birthday': '1996-10-12',
        'gender': 'm',
        'lastContact': new Date('2017-06-01T23:28:56.782Z'),
        'customerLifetimeValue': 191.12
    },
    {
        'customerID': 2,
        'name': {
            'first': 'Anna',
            'last': 'Hopp'
        },
        'birthday': '1987-05-03',
        'gender': 'w',
        'lastContact': new Date('2017-07-08T13:18:56.888Z'),
        'customerLifetimeValue': 50.99
    },
    {
        'customerID': 3,
        'name': {
            'first': 'Christian',
            'last': 'Cox'
        },
        'birthday': '1991-02-21',
        'gender': 'm',
        'lastContact': new Date('2017-08-01T11:57:47.142Z'),
        'customerLifetimeValue': 0
    },
    {
        'customerID': 4,
        'name': {
            'first': 'Roxy',
            'last': 'Fox'
        },
        'birthday': '1979-06-30',
        'gender': 'w',
        'lastContact': new Date('2017-02-28T21:08:50.700Z'),
        'customerLifetimeValue': 213.12
    },
    {
        'customerID': 5,
        'name': {
            'first': 'Eric',
            'last': 'Adam'
        },
        'birthday': '1969-11-21',
        'gender': 'm',
        'lastContact': new Date('2017-03-18T12:20:06.702Z'),
        'customerLifetimeValue': 1019.91
    }
];
var CustomersService = /** @class */ (function () {
    function CustomersService() {
    }
    CustomersService.prototype.getCustomers = function () {
        return customers;
    };
    CustomersService.prototype.getCustomer = function (customerID) {
        return customers.filter(function (c) { return c.customerID == customerID; })[0];
    };
    CustomersService.prototype.deleteCustomer = function (customerID) {
        customers.forEach(function (item, index) {
            if (item.customerID == customerID)
                customers.splice(index, 1);
        });
    };
    CustomersService.prototype.saveCustomer = function (customer) {
        var customerOriginal = customers.filter(function (c) { return c.customerID == customer.customerID; })[0];
        Object.assign(customerOriginal, customer);
    };
    CustomersService.prototype.addCustomer = function (customer) {
        customer.customerID = customers[customers.length - 1].customerID + 1;
        customer.customerLifetimeValue = 0;
        customer.lastContact = new Date();
        customers.push(customer);
    };
    CustomersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], CustomersService);
    return CustomersService;
}());



/***/ }),

/***/ "./src/app/models/customer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Customer; });
var CustomerName = /** @class */ (function () {
    function CustomerName() {
    }
    return CustomerName;
}());
var Customer = /** @class */ (function () {
    function Customer() {
        this.name = new CustomerName();
    }
    return Customer;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map