(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _config_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config-guard.service */ "./src/app/config-guard.service.ts");
/* harmony import */ var _config_page_config_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-page/config-page.component */ "./src/app/config-page/config-page.component.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/error-page/error-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* ::START::LICENCE::
Copyright eQualityTime ©2018
This file is part of OVFPlayer.
OVFPlayer is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
OVFPlayer is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.
::END::LICENCE:: */







var routes = [
    { path: 'main', component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"], canActivate: [_config_guard_service__WEBPACK_IMPORTED_MODULE_0__["ConfigGuardService"]] },
    { path: 'config', component: _config_page_config_page_component__WEBPACK_IMPORTED_MODULE_1__["ConfigPageComponent"] },
    { path: 'error', component: _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_6__["ErrorPageComponent"] },
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: '**', component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"], canActivate: [_config_guard_service__WEBPACK_IMPORTED_MODULE_0__["ConfigGuardService"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes, { useHash: true }),
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ::START::LICENCE::\nCopyright eQualityTime ©2018\nThis file is part of OVFPlayer.\nOVFPlayer is free software: you can redistribute it and/or modify\nit under the terms of the GNU General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\n(at your option) any later version.\nOVFPlayer is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU General Public License for more details.\nYou should have received a copy of the GNU General Public License\nalong with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.\n::END::LICENCE:: */\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ::START::LICENCE::\nCopyright eQualityTime ©2018\nThis file is part of OVFPlayer.\nOVFPlayer is free software: you can redistribute it and/or modify\nit under the terms of the GNU General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\n(at your option) any later version.\nOVFPlayer is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU General Public License for more details.\nYou should have received a copy of the GNU General Public License\nalong with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.\n::END::LICENCE:: -->\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* ::START::LICENCE::
Copyright eQualityTime ©2018
This file is part of OVFPlayer.
OVFPlayer is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
OVFPlayer is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.
::END::LICENCE:: */

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-store */ "./node_modules/ngx-store/ngx-store.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _button_page_button_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./button-page/button-page.component */ "./src/app/button-page/button-page.component.ts");
/* harmony import */ var _config_page_config_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./config-page/config-page.component */ "./src/app/config-page/config-page.component.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _obf_button_obf_button_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./obf-button/obf-button.component */ "./src/app/obf-button/obf-button.component.ts");
/* harmony import */ var _speechbar_speechbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./speechbar/speechbar.component */ "./src/app/speechbar/speechbar.component.ts");
/* harmony import */ var _global_error_handler_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./global-error-handler.service */ "./src/app/global-error-handler.service.ts");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/error-page/error-page.component.ts");
/* harmony import */ var _obfpage_obfpage_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./obfpage/obfpage.component */ "./src/app/obfpage/obfpage.component.ts");
/* harmony import */ var _progress_progress_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./progress/progress.component */ "./src/app/progress/progress.component.ts");
/* harmony import */ var _interaction_event_handler_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./interaction-event-handler.directive */ "./src/app/interaction-event-handler.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* ::START::LICENCE::
Copyright eQualityTime ©2018
This file is part of OVFPlayer.
OVFPlayer is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
OVFPlayer is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.
::END::LICENCE:: */





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _button_page_button_page_component__WEBPACK_IMPORTED_MODULE_11__["ButtonPageComponent"],
                _speechbar_speechbar_component__WEBPACK_IMPORTED_MODULE_15__["SpeechbarComponent"],
                _config_page_config_page_component__WEBPACK_IMPORTED_MODULE_12__["ConfigPageComponent"],
                _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_13__["MainPageComponent"],
                _obf_button_obf_button_component__WEBPACK_IMPORTED_MODULE_14__["ObfButtonComponent"],
                _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_17__["ErrorPageComponent"],
                _obfpage_obfpage_component__WEBPACK_IMPORTED_MODULE_18__["OBFPageComponent"],
                _progress_progress_component__WEBPACK_IMPORTED_MODULE_19__["ProgressComponent"],
                _interaction_event_handler_directive__WEBPACK_IMPORTED_MODULE_20__["InteractionEventHandlerDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                ngx_store__WEBPACK_IMPORTED_MODULE_8__["WebStorageModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"]
            ],
            providers: [
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ErrorHandler"], useClass: _global_error_handler_service__WEBPACK_IMPORTED_MODULE_16__["GlobalErrorHandlerService"]
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/board-cache.service.ts":
/*!****************************************!*\
  !*** ./src/app/board-cache.service.ts ***!
  \****************************************/
/*! exports provided: BoardCacheService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardCacheService", function() { return BoardCacheService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-pwa/local-storage */ "./node_modules/@ngx-pwa/local-storage/fesm5/ngx-pwa-local-storage.js");
/* harmony import */ var _obzboard_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./obzboard-set */ "./src/app/obzboard-set.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _obfboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./obfboard */ "./src/app/obfboard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* ::START::LICENCE::
Copyright eQualityTime ©2018
This file is part of OVFPlayer.
OVFPlayer is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
OVFPlayer is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.
::END::LICENCE:: */





var BoardCacheService = /** @class */ (function () {
    function BoardCacheService(localStorage) {
        this.localStorage = localStorage;
    }
    BoardCacheService_1 = BoardCacheService;
    BoardCacheService.prototype.clear = function () {
        this.log('Clearing local board cache');
        return this.localStorage.removeItem(BoardCacheService_1.BOARD_CACHE_KEY).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])());
    };
    BoardCacheService.prototype.retrieve = function () {
        var _this = this;
        return this.localStorage.getItem(BoardCacheService_1.BOARD_CACHE_KEY).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            if (data) {
                _this.log('Successfully loaded board from cache');
                // TODO: move this to static method inside OBZBoardSet?
                var bs_1 = new _obzboard_set__WEBPACK_IMPORTED_MODULE_2__["OBZBoardSet"]();
                bs_1.rootBoardKey = data.rootBoardKey;
                data.images.forEach(function (value, key) {
                    bs_1.setImage(key, value);
                });
                data.sounds.forEach(function (value, key) {
                    bs_1.setSound(key, value);
                });
                data.boards.forEach(function (value, key) {
                    var board = new _obfboard__WEBPACK_IMPORTED_MODULE_4__["OBFBoard"]().deserialize(value);
                    board.setImageResolver(bs_1);
                    board.setSoundResolver(bs_1);
                    bs_1.setBoard(key, board);
                });
                return bs_1;
            }
            else {
                _this.log('Cache is empty');
                throw new Error('Cache is empty');
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])());
    };
    BoardCacheService.prototype.save = function (boardSet) {
        return this.localStorage.setItem(BoardCacheService_1.BOARD_CACHE_KEY, boardSet).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (success) { return boardSet; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])());
    };
    BoardCacheService.prototype.log = function (message) {
        console.log("BoardCacheService: " + message);
    };
    BoardCacheService.BOARD_CACHE_KEY = 'ovfCurrentBoard';
    BoardCacheService = BoardCacheService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_1__["LocalStorage"]])
    ], BoardCacheService);
    return BoardCacheService;
    var BoardCacheService_1;
}());



/***/ }),

/***/ "./src/app/board.service.ts":
/*!**********************************!*\
  !*** ./src/app/board.service.ts ***!
  \**********************************/
/*! exports provided: BoardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardService", function() { return BoardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _obz_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obz.service */ "./src/app/obz.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* ::START::LICENCE::
Copyright eQualityTime ©2018
This file is part of OVFPlayer.
OVFPlayer is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
OVFPlayer is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.
::END::LICENCE:: */



var BoardService = /** @class */ (function () {
    function BoardService(obzService) {
        var _this = this;
        this.obzService = obzService;
        this.addObserver = function (observer) {
            _this.observer = observer;
            _this.obzService.getBoardSet().subscribe(function (boardSet) {
                _this.setBoardSet(boardSet);
            });
        };
    }
    BoardService.prototype.setBoardSet = function (boardSet) {
        this.boardSet = boardSet;
        this.currentBoardKey = boardSet.rootBoardKey;
        this.home();
    };
    BoardService.prototype.getBoard = function () {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](this.addObserver);
    };
    BoardService.prototype.navigateToBoard = function (boardKey) {
        this.currentBoardKey = boardKey;
        var board = this.boardSet.getBoard(this.currentBoardKey);
        this.observer.next(board);
    };
    BoardService.prototype.navigateToExternalBoard = function (boardKey) {
        this.obzService.loadBoardSet(boardKey);
    };
    BoardService.prototype.home = function () {
        this.navigateToBoard(this.boardSet.rootBoardKey);
    };
    BoardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_obz_service__WEBPACK_IMPORTED_MODULE_1__["ObzService"]])
    ], BoardService);
    return BoardService;
}());



/***/ }),

/***/ "./src/app/button-page/button-page.component.css":
/*!*******************************************************!*\
  !*** ./src/app/button-page/button-page.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ::START::LICENCE::\r\nCopyright eQualityTime ©2018\r\nThis file is part of OVFPlayer.\r\nOVFPlayer is free software: you can redistribute it and/or modify\r\nit under the terms of the GNU General Public License as published by\r\nthe Free Software Foundation, either version 3 of the License, or\r\n(at your option) any later version.\r\nOVFPlayer is distributed in the hope that it will be useful,\r\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\r\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\r\nGNU General Public License for more details.\r\nYou should have received a copy of the GNU General Public License\r\nalong with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.\r\n::END::LICENCE:: */\n.board {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n}\n.boardRow {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex: 1 1 auto;\r\n  overflow: hidden;\r\n}\n.boardButton {\r\n  flex: 1 1 auto;\r\n  width: 100%;\r\n}\n.scanHighlight {\r\n  position: relative;\r\n}\n.scanHighlight:after {\r\n  border: greenyellow solid 5px;\r\n  content: \" \";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n}\n.scanSelect {\r\n  position: relative;\r\n}\n.scanSelect:after {\r\n  border: blue solid 5px;\r\n  content: \" \";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/button-page/button-page.component.html":
/*!********************************************************!*\
  !*** ./src/app/button-page/button-page.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ::START::LICENCE::\nCopyright eQualityTime ©2018\nThis file is part of OVFPlayer.\nOVFPlayer is free software: you can redistribute it and/or modify\nit under the terms of the GNU General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\n(at your option) any later version.\nOVFPlayer is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU General Public License for more details.\nYou should have received a copy of the GNU General Public License\nalong with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.\n::END::LICENCE:: -->\n<div class=\"board\" *ngIf=\"board; else noBoard\">\n  <div class=\"boardRow\"\n      *ngFor=\"let row of buttonProvider.getScannableCollections()\"\n      [class.scanHighlight]=\"row.isHighlighted()\"\n      [class.scanSelect]=\"row.isSelection()\"\n      [style.height]=\"row.rowHeight\">\n    <div class=\"boardButton\"\n        *ngFor=\"let butt of row.displayButtons\"\n        [class.scanHighlight]=\"butt && butt.isHighlighted()\"\n        [class.scanSelect]=\"butt && butt.isSelection()\">\n      <app-obf-button *ngIf=\"butt\" [butt]=\"butt.button\" [clickHandler]=\"handleButtonClick.bind(this)\"></app-obf-button>\n    </div>\n  </div>\n</div>\n\n<ng-template #noBoard>\n  <app-progress></app-progress>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/button-page/button-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/button-page/button-page.component.ts ***!
  \******************************************************/
/*! exports provided: ButtonPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonPageComponent", function() { return ButtonPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _board_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../board.service */ "./src/app/board.service.ts");
/* harmony import */ var _speechbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../speechbar.service */ "./src/app/speechbar.service.ts");
/* harmony import */ var _obfboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../obfboard */ "./src/app/obfboard.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _scanning_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scanning.service */ "./src/app/scanning.service.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* ::START::LICENCE::
Copyright eQualityTime ©2018
This file is part of OVFPlayer.
OVFPlayer is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
OVFPlayer is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.
::END::LICENCE:: */







var ScannableButton = /** @class */ (function (_super) {
    __extends(ScannableButton, _super);
    function ScannableButton(provider, button, priority) {
        var _this = _super.call(this, priority, ScannableButton.TYPE) || this;
        _this._button = button;
        _this.provider = provider;
        return _this;
    }
    Object.defineProperty(ScannableButton.prototype, "button", {
        get: function () {
            return this._button;
        },
        set: function (button) {
            this._button = button;
        },
        enumerable: true,
        configurable: true
    });
    ScannableButton.prototype.isHighlighted = function () {
        return this.provider.getScanningHighlight() === this;
    };
    ScannableButton.prototype.isSelection = function () {
        return this.provider.getScanningSelection() === this;
    };
    ScannableButton.TYPE = 'OBFButton';
    return ScannableButton;
}(_scanning_service__WEBPACK_IMPORTED_MODULE_5__["Scannable"]));
var ScannableButtonRow = /** @class */ (function (_super) {
    __extends(ScannableButtonRow, _super);
    function ScannableButtonRow(provider, board, row, priority, rowHeight) {
        var _this = _super.call(this, priority, ScannableButtonRow.TYPE) || this;
        _this.displayButtons = [];
        _this.provider = provider;
        _this.rowHeight = rowHeight;
        row.forEach(function (buttonId, index) {
            if (buttonId) {
                var button = new ScannableButton(provider, board.getButton(buttonId), index);
                _this.addChild(button);
                _this.displayButtons.push(button);
            }
            else {
                _this.displayButtons.push(undefined);
            }
        });
        return _this;
    }
    ScannableButtonRow.prototype.isHighlighted = function () {
        return this.provider.getScanningHighlight() === this;
    };
    ScannableButtonRow.prototype.isSelection = function () {
        return this.provider.getScanningSelection() === this;
    };
    ScannableButtonRow.TYPE = 'OBFButtonRow';
    return ScannableButtonRow;
}(_scanning_service__WEBPACK_IMPORTED_MODULE_5__["ScannableCollection"]));
var ScannableButtonRowProvider = /** @class */ (function (_super) {
    __extends(ScannableButtonRowProvider, _super);
    function ScannableButtonRowProvider(board, buttonPressHandler) {
        var _this = _super.call(this, function (scanningModel) {
            _this.scanningModel = scanningModel;
            if (_this.scanningModel.currentSelection && _this.scanningModel.currentSelection.type === ScannableButton.TYPE) {
                var button = _this.scanningModel.currentSelection.button;
                buttonPressHandler(button);
            }
        }) || this;
        var rowHeight = (100 / board.grid.rows).toString() + '%';
        _this.rows = board.grid.order.map(function (row, index) { return new ScannableButtonRow(_this, board, row, index + 1, rowHeight); });
        return _this;
    }
    ScannableButtonRowProvider.prototype.getScannableCollections = function () {
        return this.rows;
    };
    ScannableButtonRowProvider.prototype.getScanningHighlight = function () {
        return this.scanningModel && this.scanningModel.currentHighlight;
    };
    ScannableButtonRowProvider.prototype.getScanningSelection = function () {
        return this.scanningModel && this.scanningModel.currentSelection;
    };
    return ScannableButtonRowProvider;
}(rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscriber"]));
var ButtonPageComponent = /** @class */ (function () {
    function ButtonPageComponent(boardService, speechbarService, scanningService, configService) {
        var _this = this;
        this.boardService = boardService;
        this.speechbarService = speechbarService;
        this.scanningService = scanningService;
        this.configService = configService;
        this.actionPerformers = {
            ':clear': this.speechbarService.clear.bind(this.speechbarService),
            ':backspace': this.speechbarService.backspace.bind(this.speechbarService),
            ':speak': this.speechbarService.speak.bind(this.speechbarService),
            ':home': this.boardService.home.bind(this.boardService),
            ':space': this.speechbarService.space.bind(this.speechbarService)
        };
        this.setBoard = function (board) {
            if (_this.scanningSubscription) {
                _this.scanningSubscription.unsubscribe();
            }
            _this.board = board;
            _this.registerWithScanner();
        };
    }
    ButtonPageComponent.prototype.ngOnInit = function () {
        this.loadBoard();
    };
    ButtonPageComponent.prototype.ngOnDestroy = function () {
        if (this.boardSubscription) {
            this.boardSubscription.unsubscribe();
        }
        if (this.scanningSubscription) {
            this.scanningSubscription.unsubscribe();
        }
    };
    ButtonPageComponent.prototype.loadBoard = function () {
        this.boardSubscription = this.boardService.getBoard().subscribe(this.setBoard);
    };
    ButtonPageComponent.prototype.registerWithScanner = function () {
        this.buttonProvider = new ScannableButtonRowProvider(this.board, this.handleButtonClick.bind(this));
        this.scanningSubscription = this.scanningService.getScanningModel().subscribe(this.buttonProvider);
    };
    ButtonPageComponent.prototype.handleButtonClick = function (button) {
        var _this = this;
        var soundToPlay = false;
        if (button.soundId) {
            var sound = this.board.getSound(button.soundId);
            if (sound) {
                var soundSource = sound.getSource();
                if (soundSource) {
                    soundToPlay = true;
                    var audioSound = new Audio(soundSource);
                    audioSound.play();
                }
            }
        }
        var addToSpeechBar = true;
        if (button.actions.length > 0) {
            button.actions.forEach(function (action) { return _this.performAction(button, action); });
            addToSpeechBar = false;
        }
        if (button.loadBoardAction) {
            var loadBoardAction = button.loadBoardAction;
            if (loadBoardAction.path) {
                this.boardService.navigateToBoard(loadBoardAction.path);
            }
            else if (loadBoardAction.dataUrl) {
                this.boardService.navigateToExternalBoard(loadBoardAction.dataUrl);
            }
            else if (loadBoardAction.url) {
                // TODO: redirect whole page to site!
            }
            // at this point we would still be adding things to the speech bar
            // we only want to do this if there is a vocalisation
            // so if there isn't a vocalisation; set addToSpeechBar to false
            if (!button.vocalization) {
                addToSpeechBar = false;
            }
        }
        if (addToSpeechBar) {
            this.speechbarService.addButton(button);
            // don't say the button if there's also a sound... that'd be weird...
            if (!soundToPlay && this.configService.buttonBehaviourConfig.speakOnTrigger) {
                this.speechbarService.sayButton(button);
            }
        }
    };
    ButtonPageComponent.prototype.performAction = function (button, action) {
        if (action.startsWith('+')) {
            this.speechbarService.appendButton(button, action);
        }
        else {
            var actionPerformer = this.actionPerformers[action];
            if (actionPerformer) {
                actionPerformer();
            }
            else {
                console.log('Unsupported action: ' + action);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _obfboard__WEBPACK_IMPORTED_MODULE_3__["OBFBoard"])
    ], ButtonPageComponent.prototype, "board", void 0);
    ButtonPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-button-page',
            template: __webpack_require__(/*! ./button-page.component.html */ "./src/app/button-page/button-page.component.html"),
            styles: [__webpack_require__(/*! ./button-page.component.css */ "./src/app/button-page/button-page.component.css")]
        }),
        __metadata("design:paramtypes", [_board_service__WEBPACK_IMPORTED_MODULE_1__["BoardService"], _speechbar_service__WEBPACK_IMPORTED_MODULE_2__["SpeechbarService"],
            _scanning_service__WEBPACK_IMPORTED_MODULE_5__["ScanningService"], _config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]])
    ], ButtonPageComponent);
    return ButtonPageComponent;
}());



/***/ }),

/***/ "./src/app/config-guard.service.ts":
/*!*****************************************!*\
  !*** ./src/app/config-guard.service.ts ***!
  \*****************************************/
/*! exports provided: ConfigGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigGuardService", function() { return ConfigGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.service */ "./src/app/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* ::START::LICENCE::
Copyright eQualityTime ©2018
This file is part of OVFPlayer.
OVFPlayer is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
OVFPlayer is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.
::END::LICENCE:: */



var ConfigGuardService = /** @class */ (function () {
    function ConfigGuardService(router, config) {
        this.router = router;
        this.config = config;
    }
    ConfigGuardService.prototype.canActivate = function (route, state) {
        // TODO: check more config and possibly validate it
        var hasConfig = this.config.boardURL;
        if (hasConfig) {
            return true;
        }
        else {
            console.log('Redirecting to /config due to no config');
            this.router.navigate(['/config']);
            return false;
        }
    };
    ConfigGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], ConfigGuardService);
    return ConfigGuardService;
}());



/***/ }),

/***/ "./src/app/config-page/config-page.component.css":
/*!*******************************************************!*\
  !*** ./src/app/config-page/config-page.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ::START::LICENCE::\r\nCopyright eQualityTime ©2018\r\nThis file is part of OVFPlayer.\r\nOVFPlayer is free software: you can redistribute it and/or modify\r\nit under the terms of the GNU General Public License as published by\r\nthe Free Software Foundation, either version 3 of the License, or\r\n(at your option) any later version.\r\nOVFPlayer is distributed in the hope that it will be useful,\r\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\r\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\r\nGNU General Public License for more details.\r\nYou should have received a copy of the GNU General Public License\r\nalong with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.\r\n::END::LICENCE:: */\r\n.formTitle {\r\n  height: 100%;\r\n  background-color: #e0e0e0;\r\n  padding: 10px;\r\n}\r\n.formCard {\r\n  padding: 0px;\r\n}\r\n.formContainer {\r\n  padding: 20px;\r\n}\r\n.formInputUrl, .formInputSelection {\r\n  width: 100%;\r\n}\r\n.formInputField {\r\n  width: 100%;\r\n  padding-right: 10px;\r\n}\r\n.formLabel {\r\n  white-space: normal;\r\n}\r\n.formButtons {\r\n  padding: 5px;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n.clickable {\r\n  cursor: pointer;\r\n}\r\n.clickable, i {\r\n  position: relative;\r\n  top: 6px;\r\n}\r\n.borderExample {\r\n  border: solid black;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  display: inline-block;\r\n}\r\n.invalidTab {\r\n  color: red;\r\n}\r\nmat-radio-button {\r\n  padding: 25px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/config-page/config-page.component.html":
/*!********************************************************!*\
  !*** ./src/app/config-page/config-page.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ::START::LICENCE::\nCopyright eQualityTime ©2018\nThis file is part of OVFPlayer.\nOVFPlayer is free software: you can redistribute it and/or modify\nit under the terms of the GNU General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\n(at your option) any later version.\nOVFPlayer is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU General Public License for more details.\nYou should have received a copy of the GNU General Public License\nalong with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.\n::END::LICENCE:: -->\n<app-obfpage>\n  <mat-card class=\"formCard\">\n    <div class=\"formTitle\">\n      Configuration\n    </div>\n    <form (ngSubmit)=\"save()\" #configForm=\"ngForm\">\n\n      <div class=\"formButtons\">\n        <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"!configForm.form.valid\">Save</button>\n      </div>\n      <mat-tab-group>\n        <mat-tab ngModelGroup=\"boardURL\" #boardURLCtrl=\"ngModelGroup\">\n          <ng-template mat-tab-label>\n            <mat-icon *ngIf=\"boardURLCtrl.invalid\" class=\"invalidTab\">error</mat-icon>\n            <span [class.invalidTab]=\"boardURLCtrl.invalid\" name=\"boardURL\">Board URL</span>\n          </ng-template>\n          <div class=\"formContainer\">\n            <mat-card>\n              <mat-form-field class=\"formInputField\">\n                <input [(ngModel)]=\"boardURL\" required matInput name=\"boardURL\" placeholder=\"URL for obf/obz file\" class=\"formInputUrl\">\n              </mat-form-field>\n              <div class=\"clickable\" (click)=\"copyToClipboard()\"><i class=\"material-icons\">link</i>&nbsp;Create link</div>\n            </mat-card>\n          </div>\n        </mat-tab>\n        <mat-tab ngModelGroup=\"speechbarBehaviour\" #speechbarBehaviourCtrl=\"ngModelGroup\">\n          <ng-template mat-tab-label>\n            <mat-icon *ngIf=\"speechbarBehaviourCtrl.invalid\" class=\"invalidTab\">error</mat-icon>\n            <span [class.invalidTab]=\"speechbarBehaviourCtrl.invalid\" name=\"speechbarBehaviour\">Speechbar behaviour</span>\n          </ng-template>\n          <div class=\"formContainer\">\n            <mat-card>\n              <mat-checkbox [(ngModel)]=\"speakOnSpeechbarClick\" name=\"speakOnSpeechbarClick\">\n                <span class=\"formLabel\">Speak when speechbar is clicked</span>\n              </mat-checkbox>\n            </mat-card>\n            <mat-card>\n              <mat-checkbox [(ngModel)]=\"showIconsInSpeechbar\" name=\"showIconsInSpeechbar\">\n                <span class=\"formLabel\">Display button images and labels in speechbar (instead of vocalisation text)</span>\n              </mat-checkbox>\n            </mat-card>\n          </div>\n        </mat-tab>\n        <mat-tab ngModelGroup=\"buttonBehaviour\" #buttonBehaviourCtrl=\"ngModelGroup\">\n          <ng-template mat-tab-label>\n            <mat-icon *ngIf=\"buttonBehaviourCtrl.invalid\" class=\"invalidTab\">error</mat-icon>\n            <span [class.invalidTab]=\"buttonBehaviourCtrl.invalid\" name=\"buttonBehaviour\">Button press behaviour</span>\n          </ng-template>\n          <div class=\"formContainer\">\n            <mat-card>\n              <mat-checkbox [(ngModel)]=\"buttonBehaviourConfig.speakOnTrigger\" name=\"buttonBehaviourConfig.speakOnTrigger\">\n                <span class=\"formLabel\">Speak when button is pressed (as well as adding to speechbar)</span>\n              </mat-checkbox>\n            </mat-card>\n            <mat-card>\n              <mat-radio-group [(ngModel)]=\"buttonBehaviourConfig.triggerEvent\" name=\"buttonBehaviourConfig.triggerEvent\">\n                <div class=\"formLabel\">Event to use to trigger button usage</div>\n                <mat-radio-button [value]=\"interactionEventType.click\">Full click</mat-radio-button>\n                <mat-radio-button [value]=\"interactionEventType.mouseup\">Release</mat-radio-button>\n                <mat-radio-button [value]=\"interactionEventType.mousedown\">Press</mat-radio-button>\n              </mat-radio-group>\n            </mat-card>\n          </div>\n        </mat-tab>\n        <mat-tab ngModelGroup=\"displayedButtons\" #displayedButtonsCtrl=\"ngModelGroup\">\n          <ng-template mat-tab-label>\n            <mat-icon *ngIf=\"displayedButtonsCtrl.invalid\" class=\"invalidTab\">error</mat-icon>\n            <span [class.invalidTab]=\"displayedButtonsCtrl.invalid\" name=\"displayedButtons\">Permanent buttons</span>\n          </ng-template>\n          <div class=\"formContainer\">\n            <mat-card>\n              <mat-checkbox [(ngModel)]=\"displayedButtons.showSpeakButton\" name=\"showSpeakButton\">\n                <span class=\"formLabel\">Speak button always shown</span>\n              </mat-checkbox>\n            </mat-card>\n            <mat-card>\n              <mat-checkbox [(ngModel)]=\"displayedButtons.showBackspaceButton\" name=\"showBackspaceButton\">\n                <span class=\"formLabel\">Backspace button always shown</span>\n              </mat-checkbox>\n            </mat-card>\n            <mat-card>\n              <mat-checkbox [(ngModel)]=\"displayedButtons.showClearButton\" name=\"showClearButton\">\n                <span class=\"formLabel\">Clear button always shown</span>\n              </mat-checkbox>\n            </mat-card>\n            <mat-card>\n              <mat-checkbox [(ngModel)]=\"displayedButtons.showHomeButton\" name=\"showHomeButton\">\n                <span class=\"formLabel\">Home button always shown</span>\n              </mat-checkbox>\n            </mat-card>\n          </div>\n        </mat-tab>\n        <mat-tab ngModelGroup=\"voiceConfig\" #voiceConfigCtrl=\"ngModelGroup\">\n          <ng-template mat-tab-label>\n            <mat-icon *ngIf=\"voiceConfigCtrl.invalid\" class=\"invalidTab\">error</mat-icon>\n            <span [class.invalidTab]=\"voiceConfigCtrl.invalid\" name=\"voiceConfig\">Voice Settings</span>\n          </ng-template>\n          <div class=\"formContainer\">\n            <mat-card>\n              <mat-form-field class=\"formInputSelection\">\n                <mat-select [(ngModel)]=\"voiceConfig.userVoice\" name=\"userVoice\" placeholder=\"User Voice\">\n                  <mat-option>Use default</mat-option>\n                  <mat-option *ngFor=\"let voice of availableVoices()\" [value]=\"voice.voiceURI\">\n                    {{voice.name + \" (\" + voice.lang +\")\"}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </mat-card>\n          </div>\n        </mat-tab>\n        <mat-tab ngModelGroup=\"scanning\" #scanningCtrl=\"ngModelGroup\">\n          <ng-template mat-tab-label>\n            <mat-icon *ngIf=\"scanningCtrl.invalid\" class=\"invalidTab\">error</mat-icon>\n            <span [class.invalidTab]=\"scanningCtrl.invalid\" name=\"scanning\">Scanning</span>\n          </ng-template>\n          <div class=\"formContainer\">\n            <mat-card>\n              <mat-checkbox [(ngModel)]=\"scanningConfig.enabled\" name=\"scanningEnabled\">\n                <span class=\"formLabel\">Enable scanning</span>\n              </mat-checkbox>\n            </mat-card>\n            <mat-card>\n              <mat-form-field class=\"formInputField\">\n                <input [required]=\"scanningConfig.enabled\" type=\"number\" [(ngModel)]=\"scanningConfig.time\" name=\"scanningTime\"\n                        matInput placeholder=\"Time to stay on each scanned item (in milliseconds)\">\n              </mat-form-field>\n            </mat-card>\n          </div>\n        </mat-tab>\n        <mat-tab ngModelGroup=\"appearance\" #appearanceCtrl=\"ngModelGroup\">\n          <ng-template mat-tab-label>\n            <mat-icon *ngIf=\"appearanceCtrl.invalid\" class=\"invalidTab\">error</mat-icon>\n            <span [class.invalidTab]=\"appearanceCtrl.invalid\" name=\"appearance\">Appearance</span>\n          </ng-template>\n          <div class=\"formContainer\">\n            <mat-card>\n              <div>\n                <mat-slider min=\"1\" max=\"10\" step=\"1\" color=\"Primary\"\n                  [(ngModel)]=\"appearanceConfig.borderThickness\" name=\"borderThickness\" thumbLabel=\"true\"\n                  (input)=\"borderThicknessChange($event)\"\n                ></mat-slider>\n                <div class=\"borderExample\" [style.border-width]=\"appearanceConfig.borderThickness + 'px'\">Border Thickness</div>\n              </div>\n            </mat-card>\n          </div>\n        </mat-tab>\n      </mat-tab-group>\n    </form>\n  </mat-card>\n  <p>Version: {{getVersion()}}</p>\n</app-obfpage>\n"

/***/ }),

/***/ "./src/app/config-page/config-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/config-page/config-page.component.ts ***!
  \******************************************************/
/*! exports provided: ConfigPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigPageComponent", function() { return ConfigPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _environments_version__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/version */ "./src/environments/version.ts");
/* harmony import */ var _board_cache_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../board-cache.service */ "./src/app/board-cache.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* ::START::LICENCE::
Copyright eQualityTime ©2018
This file is part of OVFPlayer.
OVFPlayer is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
OVFPlayer is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.
::END::LICENCE:: */






var ConfigPageComponent = /** @class */ (function () {
    function ConfigPageComponent(configService, router, route, snackBar, boardCache) {
        this.configService = configService;
        this.router = router;
        this.route = route;
        this.snackBar = snackBar;
        this.boardCache = boardCache;
        this.PAGESET_PARAM = 'pagesetURL';
        this.interactionEventType = _config_service__WEBPACK_IMPORTED_MODULE_2__["InteractionEventType"];
    }
    ConfigPageComponent.prototype.ngOnInit = function () {
        this.boardURL = this.configService.boardURL;
        this.displayedButtons = this.copyConfig(this.configService.displayedButtons);
        this.showIconsInSpeechbar = this.configService.showIconsInSpeechbar;
        this.speakOnSpeechbarClick = this.configService.speakOnSpeechbarClick;
        this.scanningConfig = this.copyConfig(this.configService.scanningConfig);
        this.appearanceConfig = this.copyConfig(this.configService.appearanceConfig);
        this.buttonBehaviourConfig = this.copyConfig(this.configService.buttonBehaviourConfig);
        this.voiceConfig = this.copyConfig(this.configService.voiceConfig);
        var configURLParam = this.route.snapshot.queryParamMap.get(this.PAGESET_PARAM);
        if (configURLParam) {
            this.boardURL = configURLParam;
            this.save();
        }
    };
    ConfigPageComponent.prototype.copyConfig = function (config) {
        return JSON.parse(JSON.stringify(config));
    };
    ConfigPageComponent.prototype.save = function () {
        var _this = this;
        this.configService.boardURL = this.boardURL;
        this.configService.displayedButtons = this.displayedButtons;
        this.configService.showIconsInSpeechbar = this.showIconsInSpeechbar;
        this.configService.speakOnSpeechbarClick = this.speakOnSpeechbarClick;
        this.configService.scanningConfig = this.scanningConfig;
        this.configService.appearanceConfig = this.appearanceConfig;
        this.configService.buttonBehaviourConfig = this.buttonBehaviourConfig;
        this.configService.voiceConfig = this.voiceConfig;
        // TODO: some kind of validation
        // clear local cache of page to force a refresh
        this.boardCache.clear().subscribe(function () {
            _this.router.navigate(['/main']);
        }, function (error) {
            // not much we can do really
            console.error('Error clearing cache', error);
            _this.router.navigate(['/main']);
        });
    };
    ConfigPageComponent.prototype.copyToClipboard = function () {
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = document.location.href + "?" + this.PAGESET_PARAM + "=" + encodeURI(this.boardURL);
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        this.snackBar.open('Configuration link copied to clipboard', '', { duration: 1000 });
    };
    ConfigPageComponent.prototype.getVersion = function () {
        return _environments_version__WEBPACK_IMPORTED_MODULE_4__["VERSION"].tag;
    };
    ConfigPageComponent.prototype.borderThicknessChange = function (event) {
        this.appearanceConfig.borderThickness = event.value;
    };
    ConfigPageComponent.prototype.availableVoices = function () {
        return window.speechSynthesis.getVoices();
    };
    ConfigPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-config-page',
            template: __webpack_require__(/*! ./config-page.component.html */ "./src/app/config-page/config-page.component.html"),
            styles: [__webpack_require__(/*! ./config-page.component.css */ "./src/app/config-page/config-page.component.css")]
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _board_cache_service__WEBPACK_IMPORTED_MODULE_5__["BoardCacheService"]])
    ], ConfigPageComponent);
    return ConfigPageComponent;
}());



/***/ }),

/***/ "./src/app/config.service.ts":
/*!***********************************!*\
  !*** ./src/app/config.service.ts ***!
  \***********************************/
/*! exports provided: InteractionEventType, ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionEventType", function() { return InteractionEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-store */ "./node_modules/ngx-store/ngx-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* ::START::LICENCE::
Copyright eQualityTime ©2018
This file is part of OVFPlayer.
OVFPlayer is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
OVFPlayer is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.
::END::LICENCE:: */



var InteractionEventType;
(function (InteractionEventType) {
    InteractionEventType["click"] = "click";
    InteractionEventType["mouseup"] = "mouseup";
    InteractionEventType["mousedown"] = "mousedown";
})(InteractionEventType || (InteractionEventType = {}));
var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this._boardURL = 'https://dl.dropboxusercontent.com/s/oiwfo47fprv3jl4/ck20.obz?dl=1';
        this._showIconsInSpeechbar = true;
        this._speakOnSpeechbarClick = true;
        this._displayedButtons = {
            showSpeakButton: true,
            showBackspaceButton: true,
            showClearButton: true,
            showHomeButton: false
        };
        this._scanningConfig = {
            enabled: false,
            time: 1000,
        };
        this._appearanceConfig = {
            borderThickness: 2
        };
        this._buttonBehaviourConfig = {
            speakOnTrigger: false,
            triggerEvent: InteractionEventType.click
        };
        this._voiceConfig = {
            userVoice: undefined
        };
        this.voiceConfigSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.voiceConfig$ = this.voiceConfigSource.asObservable();
    }
    Object.defineProperty(ConfigService.prototype, "boardURL", {
        get: function () {
            return this._boardURL;
        },
        set: function (boardURL) {
            this._boardURL = boardURL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "displayedButtons", {
        get: function () {
            return this._displayedButtons;
        },
        set: function (displayedButtons) {
            this._displayedButtons = displayedButtons;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "showIconsInSpeechbar", {
        get: function () {
            return this._showIconsInSpeechbar;
        },
        set: function (showIconsInSpeechbar) {
            this._showIconsInSpeechbar = showIconsInSpeechbar;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "speakOnSpeechbarClick", {
        get: function () {
            return this._speakOnSpeechbarClick;
        },
        set: function (speakOnSpeechbarClick) {
            this._speakOnSpeechbarClick = speakOnSpeechbarClick;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "scanningConfig", {
        get: function () {
            return this._scanningConfig;
        },
        set: function (scanningConfig) {
            this._scanningConfig = scanningConfig;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "appearanceConfig", {
        get: function () {
            return this._appearanceConfig;
        },
        set: function (appearanceConfig) {
            this._appearanceConfig = appearanceConfig;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "buttonBehaviourConfig", {
        get: function () {
            return this._buttonBehaviourConfig;
        },
        set: function (buttonBehaviourConfig) {
            this._buttonBehaviourConfig = buttonBehaviourConfig;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "voiceConfig", {
        get: function () {
            return this._voiceConfig;
        },
        set: function (voiceConfig) {
            this._voiceConfig = voiceConfig;
            this.voiceConfigSource.next(this._voiceConfig);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(ngx_store__WEBPACK_IMPORTED_MODULE_1__["LocalStorage"])(),
        __metadata("design:type", Object)
    ], ConfigService.prototype, "_boardURL", void 0);
    __decorate([
        Object(ngx_store__WEBPACK_IMPORTED_MODULE_1__["LocalStorage"])(),
        __metadata("design:type", Object)
    ], ConfigService.prototype, "_showIconsInSpeechbar", void 0);
    __decorate([
        Object(ngx_store__WEBPACK_IMPORTED_MODULE_1__["LocalStorage"])(),
        __metadata("design:type", Object)
    ], ConfigService.prototype, "_speakOnSpeechbarClick", void 0);
    __decorate([
        Object(ngx_store__WEBPACK_IMPORTED_MODULE_1__["LocalStorage"])(),
        __metadata("design:type", Object)
    ], ConfigService.prototype, "_displayedButtons", void 0);
    __decorate([
        Object(ngx_store__WEBPACK_IMPORTED_MODULE_1__["LocalStorage"])(),
        __metadata("design:type", Object)
    ], ConfigService.prototype, "_scanningConfig", void 0);
    __decorate([
        Object(ngx_store__WEBPACK_IMPORTED_MODULE_1__["LocalStorage"])(),
        __metadata("design:type", Object)
    ], ConfigService.prototype, "_appearanceConfig", void 0);
    __decorate([
        Object(ngx_store__WEBPACK_IMPORTED_MODULE_1__["LocalStorage"])(),
        __metadata("design:type", Object)
    ], ConfigService.prototype, "_buttonBehaviourConfig", void 0);
    __decorate([
        Object(ngx_store__WEBPACK_IMPORTED_MODULE_1__["LocalStorage"])(),
        __metadata("design:type", Object)
    ], ConfigService.prototype, "_voiceConfig", void 0);
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/custom-validation.ts":
/*!**************************************!*\
  !*** ./src/app/custom-validation.ts ***!
  \**************************************/
/*! exports provided: OneOf, Check2DArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneOf", function() { return OneOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Check2DArray", function() { return Check2DArray; });
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! class-validator */ "./node_modules/class-validator/index.js");
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(class_validator__WEBPACK_IMPORTED_MODULE_0__);
/* ::START::LICENCE::
Copyright eQualityTime ©2018
This file is part of OVFPlayer.
OVFPlayer is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
OVFPlayer is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.
::END::LICENCE:: */

function OneOf(validationProperties, validationOptions) {
    return function (object, propertyName) {
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["registerDecorator"])({
            name: 'OneOf',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [validationProperties],
            options: validationOptions,
            validator: {
                validate: function (value, args) {
                    var theObject = args.object;
                    function isValid(element) {
                        var val = theObject[element];
                        return val !== undefined && val !== null;
                    }
                    return args.constraints[0].some(isValid);
                }
            }
        });
    };
}
function Check2DArray(widthProperty, heightProperty, validationOptions) {
    return function (object, propertyName) {
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["registerDecorator"])({
            name: 'Check2DArray',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [widthProperty, heightProperty],
            options: validationOptions,
            validator: {
                validate: function (value, args) {
                    var widthName = args.constraints[0];
                    var heightName = args.constraints[1];
                    var widthValue = args.object[widthName];
                    var heightValue = args.object[heightName];
                    if (value.length === heightValue) {
                        var count = 0;
                        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                            var row = value_1[_i];
                            count++;
                            if (row.length !== widthValue) {
                                this.message = "Row " + count + " is of width " + row.length + ", but it should be " + widthValue;
                                return false;
                            }
                        }
                        return true;
                    }
                    else {
                        this.message = "Grid has " + value.length + " rows but should have " + heightValue;
                        return false;
                    }
                },
                defaultMessage: function (args) {
                    return this.message;
                }
            }
        });
    };
}


/***/ }),

/***/ "./src/app/error-page/error-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/error-page/error-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ::START::LICENCE::\nCopyright eQualityTime ©2018\nThis file is part of OVFPlayer.\nOVFPlayer is free software: you can redistribute it and/or modify\nit under the terms of the GNU General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\n(at your option) any later version.\nOVFPlayer is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU General Public License for more details.\nYou should have received a copy of the GNU General Public License\nalong with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.\n::END::LICENCE:: */\n.errorCard {\n  margin: 100px;\n}\n.label {\n  font-weight: bold;\n  font-size: larger;\n  vertical-align: top;\n}\n.message {\n  background-color: #eee;\n  border: lightgrey solid 1px;\n  padding: 1em;\n  margin: 0px;\n  white-space: pre-wrap;\n}\ntd {\n  padding: 1em;\n}\n"

/***/ }),

/***/ "./src/app/error-page/error-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/error-page/error-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ::START::LICENCE::\nCopyright eQualityTime ©2018\nThis file is part of OVFPlayer.\nOVFPlayer is free software: you can redistribute it and/or modify\nit under the terms of the GNU General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\n(at your option) any later version.\nOVFPlayer is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU General Public License for more details.\nYou should have received a copy of the GNU General Public License\nalong with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.\n::END::LICENCE:: -->\n<app-obfpage>\n  <mat-card class=\"errorCard\">\n    <h2>\n      Oh no! Something went wrong!\n    </h2>\n    <table *ngIf=\"error\">\n      <tr>\n        <td class=\"label\">Location</td>\n        <td><pre class=\"message\">{{error.location}}</pre></td>\n      </tr>\n      <tr>\n        <td class=\"label\">Message</td>\n        <td><pre class=\"message\">{{error.message}}</pre></td>\n      </tr>\n      <tr>\n        <td class=\"label\">Cause</td>\n        <td><pre class=\"message\">{{error.causeChain}}</pre></td>\n      </tr>\n    </table>\n    <button mat-raised-button (click)=\"goToConfig()\">Go to config page</button>\n    <p>If you need help resolving this issue or believe it may be an issue on our side, please don't hesitate to contact us.</p>\n    <a *ngIf=\"error\" [href]=\"errorHRef\" target=\"_top\" mat-raised-button>Send error report</a>\n  </mat-card>\n</app-obfpage>\n"

/***/ }),

/***/ "./src/app/error-page/error-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/error-page/error-page.component.ts ***!
  \****************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../error.service */ "./src/app/error.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* ::START::LICENCE::
Copyright eQualityTime ©2018
This file is part of OVFPlayer.
OVFPlayer is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
OVFPlayer is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.
::END::LICENCE:: */



var ErrorPageComponent = /** @class */ (function () {
    function ErrorPageComponent(errorService, router) {
        this.errorService = errorService;
        this.router = router;
    }
    ErrorPageComponent.prototype.ngOnInit = function () {
        this.error = this.errorService.lastError;
    };
    ErrorPageComponent.prototype.goToConfig = function () {
        this.router.navigate(['/config']);
    };
    Object.defineProperty(ErrorPageComponent.prototype, "errorHRef", {
        get: function () {
            var href = 'mailto:support@equalitytime.co.uk';
            href += '?subject=' + encodeURI(this.error.message);
            href += '&body=' + encodeURI(this.errorAsString());
            return href;
        },
        enumerable: true,
        configurable: true
    });
    ErrorPageComponent.prototype.errorAsString = function () {
        var errorString = 'Location: ' + this.error.location;
        errorString += '\nMessage: ' + this.error.message;
        errorString += '\nCause: ' + this.error.causeChain;
        return errorString;
    };
    ErrorPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error-page',
            template: __webpack_require__(/*! ./error-page.component.html */ "./src/app/error-page/error-page.component.html"),
            styles: [__webpack_require__(/*! ./error-page.component.css */ "./src/app/error-page/error-page.component.css")]
        }),
        __metadata("design:paramtypes", [_error_service__WEBPACK_IMPORTED_MODULE_1__["ErrorService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ErrorPageComponent);
    return ErrorPageComponent;
}());



/***/ }),

/***/ "./src/app/error.service.ts":
/*!**********************************!*\
  !*** ./src/app/error.service.ts ***!
  \**********************************/
/*! exports provided: ErrorDetails, ErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorDetails", function() { return ErrorDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorService", function() { return ErrorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* ::START::LICENCE::
Copyright eQualityTime ©2018
This file is part of OVFPlayer.
OVFPlayer is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
OVFPlayer is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.
::END::LICENCE:: */

var ErrorDetails = /** @class */ (function () {
    function ErrorDetails() {
    }
    return ErrorDetails;
}());

var ErrorService = /** @class */ (function () {
    function ErrorService() {
    }
    Object.defineProperty(ErrorService.prototype, "lastError", {
        get: function () {
            return this._lastError;
        },
        set: function (error) {
            this._lastError = error;
        },
        enumerable: true,
        configurable: true
    });
    ErrorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ErrorService);
    return ErrorService;
}());



/***/ }),

/***/ "./src/app/errors.ts":
/*!***************************!*\
  !*** ./src/app/errors.ts ***!
  \***************************/
/*! exports provided: OpenVoiceFactoryError, FatalOpenVoiceFactoryError, ErrorCodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenVoiceFactoryError", function() { return OpenVoiceFactoryError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FatalOpenVoiceFactoryError", function() { return FatalOpenVoiceFactoryError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorCodes", function() { return ErrorCodes; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* ::START::LICENCE::
Copyright eQualityTime ©2018
This file is part of OVFPlayer.
OVFPlayer is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
OVFPlayer is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.
::END::LICENCE:: */
var OpenVoiceFactoryError = /** @class */ (function (_super) {
    __extends(OpenVoiceFactoryError, _super);
    function OpenVoiceFactoryError(errorCode, message, cause) {
        var _this = _super.call(this, message) || this;
        _this.cause = cause;
        _this.clz = 'OpenVoiceFactoryError';
        _this.errorCode = errorCode;
        return _this;
    }
    return OpenVoiceFactoryError;
}(Error));

var FatalOpenVoiceFactoryError = /** @class */ (function (_super) {
    __extends(FatalOpenVoiceFactoryError, _super);
    function FatalOpenVoiceFactoryError(errorCode, message, cause) {
        var _this = _super.call(this, errorCode, message, cause) || this;
        _this.clz = 'FatalOpenVoiceFactoryError';
        return _this;
    }
    return FatalOpenVoiceFactoryError;
}(OpenVoiceFactoryError));

var ErrorCodes = /** @class */ (function () {
    function ErrorCodes() {
    }
    ErrorCodes.MISSING_MANIFEST = 0;
    ErrorCodes.OBF_LOAD_ERROR = 1;
    ErrorCodes.OBZ_PARSE_ERROR = 2;
    ErrorCodes.OBZ_DOWNLOAD_ERROR = 3;
    ErrorCodes.MANIFEST_LOAD_ERROR = 4;
    ErrorCodes.ZIP_PARSE_ERROR = 5;
    ErrorCodes.IMAGE_LOAD_ERROR = 6;
    ErrorCodes.SOUND_LOAD_ERROR = 7;
    ErrorCodes.BOARD_PARSE_ERROR = 8;
    ErrorCodes.MANIFEST_JSON_ERROR = 9;
    ErrorCodes.BOARD_NOT_THERE = 10;
    ErrorCodes.SOUND_NOT_THERE = 11;
    ErrorCodes.IMAGE_NOT_THERE = 12;
    ErrorCodes.OBF_VALIDATION = 13;
    ErrorCodes.INVALID_ROOT = 14;
    return ErrorCodes;
}());



/***/ }),

/***/ "./src/app/global-error-handler.service.ts":
/*!*************************************************!*\
  !*** ./src/app/global-error-handler.service.ts ***!
  \*************************************************/
/*! exports provided: GlobalErrorHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalErrorHandlerService", function() { return GlobalErrorHandlerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.service */ "./src/app/error.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* ::START::LICENCE::
Copyright eQualityTime ©2018
This file is part of OVFPlayer.
OVFPlayer is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
OVFPlayer is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.
::END::LICENCE:: */



var GlobalErrorHandlerService = /** @class */ (function () {
    function GlobalErrorHandlerService(injector) {
        this.injector = injector;
    }
    GlobalErrorHandlerService.prototype.handleError = function (error) {
        var zone = this.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]);
        var router = this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]);
        var errSer = this.injector.get(_error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorService"]);
        console.error(error);
        // TODO: buffer logs
        console.log("Error on page " + router.url + ": " + error.message);
        // Pull reason out of a promise error if it is one
        if (error.rejection) {
            error = error.rejection;
        }
        var errorDetails = new _error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorDetails"]();
        errorDetails.message = error.message;
        errorDetails.location = router.url;
        var cause = error.cause;
        while (cause) {
            errorDetails.causeChain = errorDetails.causeChain ? errorDetails.causeChain + '\n' + cause.toString() : cause.toString();
            console.log("Caused by: " + cause.toString());
            cause = cause.cause;
            // TODO: decent stack trace?
        }
        errSer.lastError = errorDetails;
        // if we've got a fatal error then go to the error page
        if ('FatalOpenVoiceFactoryError' === error.clz) {
            zone.run(function () {
                router.navigate(['/error']);
            });
        }
    };
    GlobalErrorHandlerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], GlobalErrorHandlerService);
    return GlobalErrorHandlerService;
}());



/***/ }),

/***/ "./src/app/interaction-event-handler.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/interaction-event-handler.directive.ts ***!
  \********************************************************/
/*! exports provided: InteractionEventHandlerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionEventHandlerDirective", function() { return InteractionEventHandlerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.service */ "./src/app/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InteractionEventHandlerDirective = /** @class */ (function () {
    function InteractionEventHandlerDirective(config) {
        this.config = config;
    }
    InteractionEventHandlerDirective.prototype.onRelease = function () {
        this.handleEvent(_config_service__WEBPACK_IMPORTED_MODULE_1__["InteractionEventType"].mouseup);
    };
    InteractionEventHandlerDirective.prototype.onPress = function () {
        this.handleEvent(_config_service__WEBPACK_IMPORTED_MODULE_1__["InteractionEventType"].mousedown);
    };
    InteractionEventHandlerDirective.prototype.onClick = function () {
        this.handleEvent(_config_service__WEBPACK_IMPORTED_MODULE_1__["InteractionEventType"].click);
    };
    InteractionEventHandlerDirective.prototype.handleEvent = function (eventType) {
        if (eventType === this.config.buttonBehaviourConfig.triggerEvent) {
            this.appInteractionEventHandler();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appInteractionEventHandler'),
        __metadata("design:type", Function)
    ], InteractionEventHandlerDirective.prototype, "appInteractionEventHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseup'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], InteractionEventHandlerDirective.prototype, "onRelease", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mousedown'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], InteractionEventHandlerDirective.prototype, "onPress", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], InteractionEventHandlerDirective.prototype, "onClick", null);
    InteractionEventHandlerDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appInteractionEventHandler]'
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
    ], InteractionEventHandlerDirective);
    return InteractionEventHandlerDirective;
}());



/***/ }),

/***/ "./src/app/main-page/main-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/main-page/main-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ::START::LICENCE::\nCopyright eQualityTime ©2018\nThis file is part of OVFPlayer.\nOVFPlayer is free software: you can redistribute it and/or modify\nit under the terms of the GNU General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\n(at your option) any later version.\nOVFPlayer is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU General Public License for more details.\nYou should have received a copy of the GNU General Public License\nalong with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.\n::END::LICENCE:: */\n.speechbar {\n  height: 20vh;\n}\n.buttonPage {\n  height: 80vh;\n}\n.scanRegion {\n  position: relative;\n}\n.scanRegion:after {\n  content: \" \";\n  position: absolute;\n  z-index: 10;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n"

/***/ }),

/***/ "./src/app/main-page/main-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-page/main-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ::START::LICENCE::\nCopyright eQualityTime ©2018\nThis file is part of OVFPlayer.\nOVFPlayer is free software: you can redistribute it and/or modify\nit under the terms of the GNU General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\n(at your option) any later version.\nOVFPlayer is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU General Public License for more details.\nYou should have received a copy of the GNU General Public License\nalong with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.\n::END::LICENCE:: -->\n<div class=\"scanRegion\" *ngIf=\"scanningEnabled(); else content;\" (click)=\"handleClick()\">\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n</div>\n\n\n<ng-template #content>\n  <div class=\"speechbar\"><app-speechbar></app-speechbar></div>\n  <div class=\"buttonPage\"><app-button-page></app-button-page></div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/main-page/main-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _scanning_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scanning.service */ "./src/app/scanning.service.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* ::START::LICENCE::
Copyright eQualityTime ©2018
This file is part of OVFPlayer.
OVFPlayer is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
OVFPlayer is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.
::END::LICENCE:: */



var MainPageComponent = /** @class */ (function () {
    function MainPageComponent(scanningService, configService) {
        this.scanningService = scanningService;
        this.configService = configService;
    }
    MainPageComponent.prototype.ngOnInit = function () {
    };
    MainPageComponent.prototype.scanningEnabled = function () {
        return this.configService.scanningConfig.enabled;
    };
    MainPageComponent.prototype.handleClick = function () {
        this.scanningService.handleInteraction();
    };
    MainPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.css */ "./src/app/main-page/main-page.component.css")]
        }),
        __metadata("design:paramtypes", [_scanning_service__WEBPACK_IMPORTED_MODULE_1__["ScanningService"], _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/obf-button/obf-button.component.css":
/*!*****************************************************!*\
  !*** ./src/app/obf-button/obf-button.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ::START::LICENCE::\nCopyright eQualityTime ©2018\nThis file is part of OVFPlayer.\nOVFPlayer is free software: you can redistribute it and/or modify\nit under the terms of the GNU General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\n(at your option) any later version.\nOVFPlayer is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU General Public License for more details.\nYou should have received a copy of the GNU General Public License\nalong with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.\n::END::LICENCE:: */\n.buttonDiv {\n  width: calc(100% - 2 * var(--borderWidth));\n  height: calc(100% - 2 * var(--borderWidth));\n  border: var(--borderWidth) solid;\n  display: flex;\n  flex-direction: column;\n  word-break: break-word;\n}\n.buttonImageDiv {\n  width: 100%;\n  height: 100%;\n  min-height: 0;\n  display: flex;\n}\n.buttonImage {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  pointer-events: none;\n}\n.buttonLabel {\n  text-align: center;\n}\n.ripple {\n  position: relative;\n  overflow: hidden;\n}\n.ripple:hover {\n  -webkit-transform: scale(0.98, 0.98);\n          transform: scale(0.98, 0.98);\n}\n.pageTurn:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  --turn-size: 16px;\n  left: calc(100% - var(--turn-size));\n  border-width: 0 var(--turn-size) var(--turn-size) 0;\n  border-style: solid;\n  border-color: #fff #fff #658E15 #658E15;\n  background: #658E15;\n  box-shadow: 0 1px 1px rgba(0,0,0,0.3), -1px 1px 1px rgba(0,0,0,0.2);\n  display: block;\n  width: 0;\n}\n"

/***/ }),

/***/ "./src/app/obf-button/obf-button.component.html":
/*!******************************************************!*\
  !*** ./src/app/obf-button/obf-button.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ::START::LICENCE::\nCopyright eQualityTime ©2018\nThis file is part of OVFPlayer.\nOVFPlayer is free software: you can redistribute it and/or modify\nit under the terms of the GNU General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\n(at your option) any later version.\nOVFPlayer is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU General Public License for more details.\nYou should have received a copy of the GNU General Public License\nalong with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.\n::END::LICENCE:: -->\n<div class=\"buttonDiv\" [appInteractionEventHandler]=\"handleClick.bind(this)\"\n     [class.pageTurn]=\"clickHandler && butt.loadBoardAction\"\n     [class.ripple]=\"clickHandler\"\n     [style.background-color]=\"butt.backgroundColor\"\n     [style.border-color]=\"butt.borderColor\"\n     mat-ripple [matRippleDisabled]=\"!clickHandler\">\n  <div class=\"buttonImageDiv\" *ngIf=\"butt.getImage() as image\">\n    <img class=\"buttonImage\" [src]=\"getDataURL()\"/>\n  </div>\n  <div class=\"buttonLabel\">\n    {{butt.label}}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/obf-button/obf-button.component.ts":
/*!****************************************************!*\
  !*** ./src/app/obf-button/obf-button.component.ts ***!
  \****************************************************/
/*! exports provided: ObfButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObfButtonComponent", function() { return ObfButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _obfboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../obfboard */ "./src/app/obfboard.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* ::START::LICENCE::
Copyright eQualityTime ©2018
This file is part of OVFPlayer.
OVFPlayer is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
OVFPlayer is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.
::END::LICENCE:: */




var ObfButtonComponent = /** @class */ (function () {
    function ObfButtonComponent(domSanit, config) {
        this.domSanit = domSanit;
        this.config = config;
    }
    Object.defineProperty(ObfButtonComponent.prototype, "valueAsStyle", {
        get: function () {
            return this.domSanit.bypassSecurityTrustStyle("--borderWidth: " + (this.appearanceConfig.borderThickness + 'px'));
        },
        enumerable: true,
        configurable: true
    });
    ObfButtonComponent.prototype.ngOnInit = function () {
        this.appearanceConfig = this.config.appearanceConfig;
    };
    ObfButtonComponent.prototype.getDataURL = function () {
        this.url = URL.createObjectURL(this.butt.getImage().getDataBlob());
        return this.domSanit.bypassSecurityTrustUrl(this.url);
    };
    ObfButtonComponent.prototype.ngOnDestroy = function () {
        this.unload();
    };
    ObfButtonComponent.prototype.unload = function () {
        if (this.url) {
            URL.revokeObjectURL(this.url);
            this.url = undefined;
        }
    };
    ObfButtonComponent.prototype.handleClick = function () {
        if (this.clickHandler) {
            this.clickHandler(this.butt);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _obfboard__WEBPACK_IMPORTED_MODULE_1__["Button"])
    ], ObfButtonComponent.prototype, "butt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], ObfButtonComponent.prototype, "clickHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('attr.style'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], ObfButtonComponent.prototype, "valueAsStyle", null);
    ObfButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-obf-button',
            template: __webpack_require__(/*! ./obf-button.component.html */ "./src/app/obf-button/obf-button.component.html"),
            styles: [__webpack_require__(/*! ./obf-button.component.css */ "./src/app/obf-button/obf-button.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], ObfButtonComponent);
    return ObfButtonComponent;
}());



/***/ }),

/***/ "./src/app/obfboard.ts":
/*!*****************************!*\
  !*** ./src/app/obfboard.ts ***!
  \*****************************/
/*! exports provided: Grid, LoadBoardAction, Button, Image, Sound, OBFBoard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadBoardAction", function() { return LoadBoardAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sound", function() { return Sound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OBFBoard", function() { return OBFBoard; });
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! class-validator */ "./node_modules/class-validator/index.js");
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(class_validator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors */ "./src/app/errors.ts");
/* harmony import */ var _custom_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-validation */ "./src/app/custom-validation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* ::START::LICENCE::
Copyright eQualityTime ©2018
This file is part of OVFPlayer.
OVFPlayer is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
OVFPlayer is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.
::END::LICENCE:: */



function stringify(value) {
    return value || value === 0 ? String(value) : undefined;
}
var Grid = /** @class */ (function () {
    function Grid() {
    }
    Grid.prototype.deserialize = function (input) {
        this.rows = input.rows;
        this.columns = input.columns;
        this.order = input.order.map(function (row) { return row.map(function (cell) { return stringify(cell); }); });
        return this;
    };
    __decorate([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsDefined"])(),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsInt"])(),
        __metadata("design:type", Number)
    ], Grid.prototype, "rows", void 0);
    __decorate([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsDefined"])(),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsInt"])(),
        __metadata("design:type", Number)
    ], Grid.prototype, "columns", void 0);
    __decorate([
        Object(_custom_validation__WEBPACK_IMPORTED_MODULE_2__["Check2DArray"])('columns', 'rows'),
        __metadata("design:type", Array)
    ], Grid.prototype, "order", void 0);
    return Grid;
}());

var LoadBoardAction = /** @class */ (function () {
    function LoadBoardAction() {
    }
    LoadBoardAction.prototype.deserialize = function (input) {
        this.id = input.id;
        this.name = input.name;
        this.url = input.url;
        this.dataUrl = input.dataUrl || input.data_url;
        this.path = input.path;
        return this;
    };
    __decorate([
        Object(_custom_validation__WEBPACK_IMPORTED_MODULE_2__["OneOf"])(['url', 'dataUrl', 'path'], { message: 'Load board should have one of dataUrl, url or path' }),
        __metadata("design:type", String)
    ], LoadBoardAction.prototype, "id", void 0);
    __decorate([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsOptional"])(),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsUrl"])(),
        __metadata("design:type", String)
    ], LoadBoardAction.prototype, "url", void 0);
    __decorate([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsOptional"])(),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsUrl"])(),
        __metadata("design:type", String)
    ], LoadBoardAction.prototype, "dataUrl", void 0);
    return LoadBoardAction;
}());

var Button = /** @class */ (function () {
    function Button() {
    }
    Button.prototype.deserialize = function (input, parent) {
        this.id = stringify(input.id);
        this.label = input.label;
        this.vocalization = input.vocalization;
        this.imageId = stringify(input.imageId) || stringify(input.image_id);
        this.soundId = stringify(input.soundId) || stringify(input.sound_id);
        this.backgroundColor = input.backgroundColor || input.background_color;
        this.borderColor = input.borderColor || input.border_color;
        this.parent = parent;
        if (input.actions && input.actions.length > 0) {
            this.actions = input.actions;
        }
        else {
            this.actions = (input.action !== undefined && input.action !== '') ? [input.action] : [];
        }
        if (input.loadBoardAction || input.load_board) {
            this.loadBoardAction = new LoadBoardAction().deserialize(input.loadBoardAction || input.load_board);
        }
        return this;
    };
    Button.prototype.getVocalization = function () {
        return this.vocalization || this.label;
    };
    Button.prototype.getImage = function () {
        return this.imageId && this.parent.getImage(this.imageId);
    };
    __decorate([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsNotEmpty"])({ message: 'Button id must be specified' }),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsString"])({ message: 'Button id must be a string' }),
        __metadata("design:type", String)
    ], Button.prototype, "id", void 0);
    __decorate([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsNotEmpty"])(),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsString"])(),
        __metadata("design:type", String)
    ], Button.prototype, "label", void 0);
    __decorate([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsOptional"])(),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsString"])(),
        __metadata("design:type", String)
    ], Button.prototype, "vocalization", void 0);
    __decorate([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsOptional"])(),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsString"])(),
        __metadata("design:type", String)
    ], Button.prototype, "imageId", void 0);
    __decorate([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsOptional"])(),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsString"])(),
        __metadata("design:type", String)
    ], Button.prototype, "soundId", void 0);
    __decorate([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsDefined"])(),
        __metadata("design:type", OBFBoard)
    ], Button.prototype, "parent", void 0);
    return Button;
}());

var Image = /** @class */ (function () {
    function Image() {
    }
    Image.prototype.deserialize = function (input, parent) {
        this.id = stringify(input.id);
        this.width = input.width;
        this.height = input.height;
        this.data = input.data;
        this.url = input.url;
        this.path = input.path;
        this.contentType = input.contentType || input.content_type;
        this.parent = parent;
        this.symbol = JSON.stringify(input.symbol);
        return this;
    };
    Image.prototype.getDataBlob = function () {
        return this.parent.imageResolver.getImageData(this.path);
    };
    __decorate([
        Object(_custom_validation__WEBPACK_IMPORTED_MODULE_2__["OneOf"])(['url', 'data', 'path', 'symbol'], { message: 'Image with id "$value" must specifiy data, a url or a path' }),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsString"])({ message: 'Image id must be a string' }),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsNotEmpty"])({ message: 'Image id must be specified' }),
        __metadata("design:type", String)
    ], Image.prototype, "id", void 0);
    __decorate([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsOptional"])(),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsInt"])(),
        __metadata("design:type", Number)
    ], Image.prototype, "width", void 0);
    __decorate([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsOptional"])(),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsInt"])(),
        __metadata("design:type", Number)
    ], Image.prototype, "height", void 0);
    __decorate([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsOptional"])(),
        __metadata("design:type", String)
    ], Image.prototype, "data", void 0);
    __decorate([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsOptional"])(),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsUrl"])(),
        __metadata("design:type", String)
    ], Image.prototype, "url", void 0);
    __decorate([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsOptional"])(),
        __metadata("design:type", String)
    ], Image.prototype, "symbol", void 0);
    __decorate([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsOptional"])(),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsString"])(),
        __metadata("design:type", String)
    ], Image.prototype, "path", void 0);
    __decorate([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsDefined"])(),
        __metadata("design:type", OBFBoard)
    ], Image.prototype, "parent", void 0);
    __decorate([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsOptional"])(),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsString"])(),
        __metadata("design:type", String)
    ], Image.prototype, "svgData", void 0);
    return Image;
}());

var Sound = /** @class */ (function () {
    function Sound() {
    }
    Sound.prototype.deserialize = function (input, parent) {
        this.id = stringify(input.id);
        this.data = input.data;
        this.url = input.url;
        this.path = input.path;
        this.contentType = input.contentType || input.content_type;
        this.duration = input.duration;
        this.parent = parent;
        return this;
    };
    Sound.prototype.getSource = function () {
        if (this.path && this.parent.soundResolver) {
            var soundData = this.parent.soundResolver.getSoundData(this.path);
            return "data:" + this.contentType + ";base64," + soundData;
        }
        return this.data || this.url;
    };
    __decorate([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsNotEmpty"])({ message: 'Sound id must be specified' }),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsString"])({ message: 'Sound id must be a string' }),
        Object(_custom_validation__WEBPACK_IMPORTED_MODULE_2__["OneOf"])(['url', 'data', 'path'], { message: 'Sound with id "$value" must specifiy data, a url or a path' }),
        __metadata("design:type", String)
    ], Sound.prototype, "id", void 0);
    __decorate([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsOptional"])(),
        __metadata("design:type", String)
    ], Sound.prototype, "data", void 0);
    __decorate([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsOptional"])(),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsUrl"])(),
        __metadata("design:type", String)
    ], Sound.prototype, "url", void 0);
    __decorate([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsOptional"])(),
        __metadata("design:type", String)
    ], Sound.prototype, "path", void 0);
    __decorate([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsDefined"])(),
        __metadata("design:type", OBFBoard)
    ], Sound.prototype, "parent", void 0);
    return Sound;
}());

var OBFBoard = /** @class */ (function () {
    function OBFBoard() {
    }
    OBFBoard.prototype.deserialize = function (input) {
        var _this = this;
        this.format = input.format;
        this.id = stringify(input.id);
        this.locale = input.locale;
        this.name = input.name;
        this.descriptionHtml = input.descriptionHtml || input.description_html;
        this.grid = new Grid().deserialize(input.grid);
        this.buttons = input.buttons.map(function (button) { return new Button().deserialize(button, _this); });
        this.images = input.images.map(function (image) { return new Image().deserialize(image, _this); });
        this.sounds = input.sounds.map(function (sound) { return new Sound().deserialize(sound, _this); });
        var errors = Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["validateSync"])(this);
        if (errors && errors.length > 0) {
            var all_errors_1 = [];
            errors.forEach(function (err) { return all_errors_1.push.apply(all_errors_1, _this.messagesFromError(err)); });
            console.log(all_errors_1.join('\n'));
            throw new _errors__WEBPACK_IMPORTED_MODULE_1__["FatalOpenVoiceFactoryError"](_errors__WEBPACK_IMPORTED_MODULE_1__["ErrorCodes"].OBF_VALIDATION, all_errors_1.join('\n'));
        }
        // filter out images we can't display AFTER collecting error messages
        this.images = this.images.filter(function (image) { return image.data || image.path || image.url; });
        return this;
    };
    OBFBoard.prototype.messagesFromError = function (error) {
        var _this = this;
        var ret = [];
        console.log(error);
        if (error.constraints) {
            ret.push.apply(ret, Object.values(error.constraints));
        }
        if (error.children) {
            error.children.forEach(function (err) { return ret.push.apply(ret, _this.messagesFromError(err)); });
        }
        return ret;
    };
    OBFBoard.prototype.setImageResolver = function (imageResolver) {
        this.imageResolver = imageResolver;
    };
    OBFBoard.prototype.setSoundResolver = function (soundResolver) {
        this.soundResolver = soundResolver;
    };
    OBFBoard.prototype.getButton = function (id) {
        return id === null ? null : this.buttons.find(function (button) { return button.id === id; });
    };
    OBFBoard.prototype.getImage = function (id) {
        return id === null ? null : this.images.find(function (image) { return image.id === id; });
    };
    OBFBoard.prototype.getSound = function (id) {
        return id === null ? null : this.sounds.find(function (sound) { return sound.id === id; });
    };
    __decorate([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsNotEmpty"])({ message: 'Board id must be specified' }),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsString"])({ message: 'Board id must be a string' }),
        __metadata("design:type", String)
    ], OBFBoard.prototype, "id", void 0);
    __decorate([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsOptional"])(),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsString"])(),
        __metadata("design:type", String)
    ], OBFBoard.prototype, "descriptionHtml", void 0);
    __decorate([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["ValidateNested"])(),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsDefined"])(),
        __metadata("design:type", Grid)
    ], OBFBoard.prototype, "grid", void 0);
    __decorate([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["ValidateNested"])({
            each: true
        }),
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsDefined"])(),
        __metadata("design:type", Array)
    ], OBFBoard.prototype, "buttons", void 0);
    __decorate([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["ValidateNested"])({
            each: true
        }),
        __metadata("design:type", Array)
    ], OBFBoard.prototype, "images", void 0);
    __decorate([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["ValidateNested"])({
            each: true
        }),
        __metadata("design:type", Array)
    ], OBFBoard.prototype, "sounds", void 0);
    return OBFBoard;
}());



/***/ }),

/***/ "./src/app/obfpage/obfpage.component.ts":
/*!**********************************************!*\
  !*** ./src/app/obfpage/obfpage.component.ts ***!
  \**********************************************/
/*! exports provided: OBFPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OBFPageComponent", function() { return OBFPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* ::START::LICENCE::
Copyright eQualityTime ©2018
This file is part of OVFPlayer.
OVFPlayer is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
OVFPlayer is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.
::END::LICENCE:: */

var OBFPageComponent = /** @class */ (function () {
    function OBFPageComponent() {
    }
    OBFPageComponent.prototype.ngOnInit = function () {
    };
    OBFPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-obfpage',
            template: "<div class=\"obfpage\"><div class=\"inner\"><ng-content></ng-content></div></div>",
            styles: ["\n    .obfpage {\n      width: 100%;\n      height: 100%;\n      background-color: lightsteelblue;\n      position: absolute;\n    }\n    .inner {\n      margin: 20px;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [])
    ], OBFPageComponent);
    return OBFPageComponent;
}());



/***/ }),

/***/ "./src/app/obz.service.ts":
/*!********************************!*\
  !*** ./src/app/obz.service.ts ***!
  \********************************/
/*! exports provided: ObzService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObzService", function() { return ObzService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config.service */ "./src/app/config.service.ts");
/* harmony import */ var _url_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./url-utils */ "./src/app/url-utils.ts");
/* harmony import */ var _obzboard_set__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./obzboard-set */ "./src/app/obzboard-set.ts");
/* harmony import */ var _obfboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./obfboard */ "./src/app/obfboard.ts");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jszip */ "./node_modules/jszip/dist/jszip.min.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./errors */ "./src/app/errors.ts");
/* harmony import */ var _board_cache_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./board-cache.service */ "./src/app/board-cache.service.ts");
/* harmony import */ var _progress_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./progress.service */ "./src/app/progress.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* ::START::LICENCE::
Copyright eQualityTime ©2018
This file is part of OVFPlayer.
OVFPlayer is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
OVFPlayer is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.
::END::LICENCE:: */












var ObzService = /** @class */ (function () {
    function ObzService(http, config, boardCache, progress) {
        var _this = this;
        this.http = http;
        this.config = config;
        this.boardCache = boardCache;
        this.progress = progress;
        this.cacheBoardSet = function (boardURL, boardSet) {
            _this.progress.progress(_progress_service__WEBPACK_IMPORTED_MODULE_11__["ProgressService"].message('Parsing'));
            _this.log("Blobifying " + boardURL);
            return boardSet.blobify(_this.http, _this.progress).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (blobified) {
                _this.progress.progress(_progress_service__WEBPACK_IMPORTED_MODULE_11__["ProgressService"].message('Caching'));
                _this.log("Caching " + boardURL);
                return _this.boardCache.save(blobified);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
                console.error("Cache of " + boardURL + " failed", error);
                // may as well carry on though as we have loaded the board
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(boardSet);
            }));
        };
        this.parseImage = function (zip, image, boardSet) {
            var imageFile = zip.file(image);
            if (!imageFile) {
                throw new _errors__WEBPACK_IMPORTED_MODULE_9__["FatalOpenVoiceFactoryError"](_errors__WEBPACK_IMPORTED_MODULE_9__["ErrorCodes"].IMAGE_NOT_THERE, "Image " + image + " is not present in obz");
            }
            var imagePromise = imageFile.async('blob').then(function (contents) {
                boardSet.setImage(image, contents);
            }).catch(function (error) {
                // error loading image file
                throw new _errors__WEBPACK_IMPORTED_MODULE_9__["FatalOpenVoiceFactoryError"](_errors__WEBPACK_IMPORTED_MODULE_9__["ErrorCodes"].IMAGE_LOAD_ERROR, "Error loading image file " + image, error);
            });
            return imagePromise;
        };
        this.parseSound = function (zip, sound, boardSet) {
            var soundFile = zip.file(sound);
            if (!soundFile) {
                throw new _errors__WEBPACK_IMPORTED_MODULE_9__["FatalOpenVoiceFactoryError"](_errors__WEBPACK_IMPORTED_MODULE_9__["ErrorCodes"].SOUND_NOT_THERE, "Sound " + sound + " is not present in obz");
            }
            var soundPromise = soundFile.async('base64').then(function (contents) {
                boardSet.setSound(sound, contents);
            }).catch(function (error) {
                // error loading sound file
                throw new _errors__WEBPACK_IMPORTED_MODULE_9__["FatalOpenVoiceFactoryError"](_errors__WEBPACK_IMPORTED_MODULE_9__["ErrorCodes"].SOUND_LOAD_ERROR, "Error loading sound file " + sound, error);
            });
            return soundPromise;
        };
        this.parseBoard = function (zip, board, boardSet) {
            var boardFile = zip.file(board);
            if (!boardFile) {
                throw new _errors__WEBPACK_IMPORTED_MODULE_9__["FatalOpenVoiceFactoryError"](_errors__WEBPACK_IMPORTED_MODULE_9__["ErrorCodes"].BOARD_NOT_THERE, "Board " + board + " is not present in obz");
            }
            var boardPromise = boardFile.async('text').then(function (contents) {
                boardSet.setBoard(board, new _obfboard__WEBPACK_IMPORTED_MODULE_7__["OBFBoard"]().deserialize(JSON.parse(contents)));
            }).catch(function (error) {
                // error loading board
                throw new _errors__WEBPACK_IMPORTED_MODULE_9__["FatalOpenVoiceFactoryError"](_errors__WEBPACK_IMPORTED_MODULE_9__["ErrorCodes"].BOARD_PARSE_ERROR, "Error parsing board " + board, error);
            });
            return boardPromise;
        };
    }
    ObzService.prototype.getBoardSet = function () {
        return this.loadBoardSet(this.config.boardURL);
    };
    ObzService.prototype.loadBoardSet = function (boardURL) {
        var _this = this;
        return this.boardCache.retrieve().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.loadFromNetwork(boardURL); }));
    };
    ObzService.prototype.loadFromNetwork = function (boardURL) {
        this.progress.progress(_progress_service__WEBPACK_IMPORTED_MODULE_11__["ProgressService"].message('Downloading'));
        this.log("Loading " + boardURL + " from internet");
        var urlSlug = new _url_utils__WEBPACK_IMPORTED_MODULE_5__["UrlUtils"]().getSlug(boardURL);
        this.log("Parsed url " + urlSlug);
        // Decide if we're loading an obz or an obf
        if (urlSlug.toLowerCase().endsWith('.obf')) {
            return this.loadOBFFile(boardURL);
        }
        else {
            // assume obz by default. For now.
            return this.loadOBZFile(boardURL);
        }
    };
    ObzService.prototype.loadOBFFile = function (boardURL) {
        var _this = this;
        return this.http.get(boardURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (page) {
            var boardSet = new _obzboard_set__WEBPACK_IMPORTED_MODULE_6__["OBZBoardSet"]();
            boardSet.rootBoardKey = 'root';
            boardSet.setBoard('root', new _obfboard__WEBPACK_IMPORTED_MODULE_7__["OBFBoard"]().deserialize(page));
            return _this.cacheBoardSet(boardURL, boardSet);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new _errors__WEBPACK_IMPORTED_MODULE_9__["FatalOpenVoiceFactoryError"](_errors__WEBPACK_IMPORTED_MODULE_9__["ErrorCodes"].OBF_LOAD_ERROR, "Failed to load obf from " + boardURL, err)); }));
    };
    ObzService.prototype.getOBZFile = function (boardURL) {
        return this.http.get(boardURL, { responseType: 'blob' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new _errors__WEBPACK_IMPORTED_MODULE_9__["FatalOpenVoiceFactoryError"](_errors__WEBPACK_IMPORTED_MODULE_9__["ErrorCodes"].OBZ_DOWNLOAD_ERROR, "Failed to download file " + boardURL + ": " + error.message)); }));
    };
    ObzService.prototype.loadOBZFile = function (boardURL) {
        var _this = this;
        return this.getOBZFile(boardURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (blob) {
            return _this.parseOBZFile(blob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new _errors__WEBPACK_IMPORTED_MODULE_9__["FatalOpenVoiceFactoryError"](_errors__WEBPACK_IMPORTED_MODULE_9__["ErrorCodes"].OBZ_PARSE_ERROR, "Could not parse " + boardURL + " as a zip file", error)); }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (boardSet) { return _this.cacheBoardSet(boardURL, boardSet); }));
    };
    ObzService.prototype.parseOBZFile = function (blob) {
        var parseBoard = this.parseBoard;
        var parseImage = this.parseImage;
        var parseSound = this.parseSound;
        var validate = this.validate;
        var zipper = new jszip__WEBPACK_IMPORTED_MODULE_8__();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(zipper.loadAsync(blob).then(function (zip) {
            var manifestFile = zip.file('manifest.json');
            if (!manifestFile) {
                throw new _errors__WEBPACK_IMPORTED_MODULE_9__["FatalOpenVoiceFactoryError"](_errors__WEBPACK_IMPORTED_MODULE_9__["ErrorCodes"].MISSING_MANIFEST, 'No manifest file!');
            }
            return manifestFile.async('text').then(function (manifest) {
                var manifestJSON = null;
                try {
                    manifestJSON = JSON.parse(manifest);
                }
                catch (error) {
                    throw new _errors__WEBPACK_IMPORTED_MODULE_9__["FatalOpenVoiceFactoryError"](_errors__WEBPACK_IMPORTED_MODULE_9__["ErrorCodes"].MANIFEST_JSON_ERROR, 'manifest.json is not json', error);
                }
                var boardSet = new _obzboard_set__WEBPACK_IMPORTED_MODULE_6__["OBZBoardSet"]();
                boardSet.rootBoardKey = manifestJSON.root;
                var promises = [];
                promises = promises.concat(Object.values(manifestJSON.paths.boards).map(function (board) { return parseBoard(zip, board.toString(), boardSet); }));
                if (manifestJSON.paths.images) {
                    promises = promises.concat(Object.values(manifestJSON.paths.images).map(function (image) { return parseImage(zip, image.toString(), boardSet); }));
                }
                if (manifestJSON.paths.sounds) {
                    promises = promises.concat(Object.values(manifestJSON.paths.sounds).map(function (sound) { return parseSound(zip, sound.toString(), boardSet); }));
                }
                return Promise.all(promises).then(function () { return validate(boardSet); });
            }, function (fail) {
                // error loading manifest
                throw new _errors__WEBPACK_IMPORTED_MODULE_9__["FatalOpenVoiceFactoryError"](_errors__WEBPACK_IMPORTED_MODULE_9__["ErrorCodes"].MANIFEST_LOAD_ERROR, 'Could not load manifest.json', fail);
            });
        }, function (fail) {
            // error loading zip file
            throw new _errors__WEBPACK_IMPORTED_MODULE_9__["FatalOpenVoiceFactoryError"](_errors__WEBPACK_IMPORTED_MODULE_9__["ErrorCodes"].ZIP_PARSE_ERROR, 'Could not parse zip file', fail);
        }));
    };
    ObzService.prototype.validate = function (boardSet) {
        // test that root board is in board set
        var rootBoard = boardSet.getBoard(boardSet.rootBoardKey);
        if (!rootBoard) {
            throw new _errors__WEBPACK_IMPORTED_MODULE_9__["FatalOpenVoiceFactoryError"](_errors__WEBPACK_IMPORTED_MODULE_9__["ErrorCodes"].INVALID_ROOT, "OBZ specifies a root of '" + boardSet.rootBoardKey + "' but this path is not present");
        }
        // TODO: validate all paths and references in board set
        return boardSet;
    };
    ObzService.prototype.log = function (message) {
        console.log("ObzService: " + message);
    };
    ObzService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _board_cache_service__WEBPACK_IMPORTED_MODULE_10__["BoardCacheService"],
            _progress_service__WEBPACK_IMPORTED_MODULE_11__["ProgressService"]])
    ], ObzService);
    return ObzService;
}());



/***/ }),

/***/ "./src/app/obzboard-set.ts":
/*!*********************************!*\
  !*** ./src/app/obzboard-set.ts ***!
  \*********************************/
/*! exports provided: OBZBoardSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OBZBoardSet", function() { return OBZBoardSet; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _progress_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./progress.service */ "./src/app/progress.service.ts");



var OBZBoardSet = /** @class */ (function () {
    function OBZBoardSet() {
        this.boards = new Map();
        this.images = new Map();
        this.sounds = new Map();
    }
    OBZBoardSet.prototype.getBoard = function (boardKey) {
        return this.boards.get(boardKey);
    };
    OBZBoardSet.prototype.setBoard = function (boardKey, board) {
        this.boards.set(boardKey, board);
        board.setImageResolver(this);
        board.setSoundResolver(this);
    };
    OBZBoardSet.prototype.setImage = function (imageKey, imageData) {
        this.images.set(imageKey, imageData);
    };
    OBZBoardSet.prototype.setSound = function (soundKey, soundData) {
        this.sounds.set(soundKey, soundData);
    };
    OBZBoardSet.prototype.getImageData = function (imagePath) {
        return this.images.get(imagePath);
    };
    OBZBoardSet.prototype.getSoundData = function (soundPath) {
        return this.sounds.get(soundPath);
    };
    OBZBoardSet.prototype.blobify = function (httpClient, progress) {
        // TODO: go through boards and load other boards from board actions (until there are no more new ones!)
        var _this = this;
        // TODO: error handling might be nice...
        // go through all url & data images & sounds and blobify into maps
        progress.progress(_progress_service__WEBPACK_IMPORTED_MODULE_2__["ProgressService"].message('Pre-caching images'));
        return this.blobifyImages(httpClient).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (imageResult) { return _this; }));
        // TODO: sounds
    };
    OBZBoardSet.prototype.blobifyImages = function (httpClient) {
        var _this = this;
        var observables = [];
        this.boards.forEach(function (board) {
            board.images.forEach(function (image) {
                // if image already has a path, then don't worry
                if (!image.path) {
                    // try data first
                    if (image.data && image.contentType) {
                        var key = "data:" + image.id;
                        // TODO: we could use the content type from here that we're stripping off
                        var data = image.data.substr(image.data.indexOf(',') + 1);
                        _this.setImage(key, _this.base64ToBlob(data, image.contentType));
                        // set path to key so render code will look up blob in images
                        image.path = key;
                        // remove data as we don't need to cache it too
                        image.data = null;
                    }
                    else if (image.url) {
                        // load url into blob
                        console.log("Loading image " + image.url);
                        observables.push(httpClient.get(image.url, { responseType: 'blob' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (blob) {
                            var key = "url:" + image.id;
                            _this.setImage(key, blob);
                            image.path = key;
                            image.url = null;
                        })));
                    }
                }
            });
        });
        return observables.length > 0 ? rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"].apply(void 0, observables) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
    };
    OBZBoardSet.prototype.base64ToBlob = function (data, type) {
        var byteArray = new Uint8Array(Array.from(atob(data)).map(function (char) { return char.charCodeAt(0); }));
        return new Blob([byteArray], { type: type });
    };
    return OBZBoardSet;
}());



/***/ }),

/***/ "./src/app/progress.service.ts":
/*!*************************************!*\
  !*** ./src/app/progress.service.ts ***!
  \*************************************/
/*! exports provided: ProgressObject, ProgressService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressObject", function() { return ProgressObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressService", function() { return ProgressService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* ::START::LICENCE::
Copyright eQualityTime ©2018
This file is part of OVFPlayer.
OVFPlayer is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
OVFPlayer is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.
::END::LICENCE:: */


var ProgressObject = /** @class */ (function () {
    function ProgressObject() {
    }
    return ProgressObject;
}());

var ProgressService = /** @class */ (function () {
    function ProgressService() {
        var _this = this;
        this.getProgress = function () {
            return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](_this.addObserver);
        };
        this.addObserver = function (observer) {
            _this.observer = observer;
        };
        this.progress = function (progObj) {
            if (_this.observer) {
                _this.observer.next(progObj);
            }
        };
    }
    ProgressService.message = function (msg) {
        var ret = new ProgressObject();
        ret.message = msg;
        return ret;
    };
    ProgressService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ProgressService);
    return ProgressService;
}());



/***/ }),

/***/ "./src/app/progress/progress.component.css":
/*!*************************************************!*\
  !*** ./src/app/progress/progress.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ::START::LICENCE::\nCopyright eQualityTime ©2018\nThis file is part of OVFPlayer.\nOVFPlayer is free software: you can redistribute it and/or modify\nit under the terms of the GNU General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\n(at your option) any later version.\nOVFPlayer is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU General Public License for more details.\nYou should have received a copy of the GNU General Public License\nalong with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.\n::END::LICENCE:: */\n.maxSpace {\n  width: 100%;\n  text-align: center;\n}\n.progressMessage {\n  font-size: small;\n}\n.spinner {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n}\n.spinner div {\n  position: absolute;\n  top: 27px;\n  width: 11px;\n  height: 11px;\n  border-radius: 50%;\n  background: green;\n  -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\n          animation-timing-function: cubic-bezier(0, 1, 1, 0);\n}\n.spinner div:nth-child(1) {\n  left: 6px;\n  -webkit-animation: spinner1 0.6s infinite;\n          animation: spinner1 0.6s infinite;\n}\n.spinner div:nth-child(2) {\n  left: 6px;\n  -webkit-animation: spinner2 0.6s infinite;\n          animation: spinner2 0.6s infinite;\n}\n.spinner div:nth-child(3) {\n  left: 26px;\n  -webkit-animation: spinner2 0.6s infinite;\n          animation: spinner2 0.6s infinite;\n}\n.spinner div:nth-child(4) {\n  left: 45px;\n  -webkit-animation: spinner3 0.6s infinite;\n          animation: spinner3 0.6s infinite;\n}\n@-webkit-keyframes spinner1 {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@keyframes spinner1 {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@-webkit-keyframes spinner2 {\n  0% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n  100% {\n    -webkit-transform: translate(19px, 0);\n            transform: translate(19px, 0);\n  }\n}\n@keyframes spinner2 {\n  0% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n  100% {\n    -webkit-transform: translate(19px, 0);\n            transform: translate(19px, 0);\n  }\n}\n@-webkit-keyframes spinner3 {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n}\n@keyframes spinner3 {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n}\n"

/***/ }),

/***/ "./src/app/progress/progress.component.html":
/*!**************************************************!*\
  !*** ./src/app/progress/progress.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ::START::LICENCE::\nCopyright eQualityTime ©2018\nThis file is part of OVFPlayer.\nOVFPlayer is free software: you can redistribute it and/or modify\nit under the terms of the GNU General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\n(at your option) any later version.\nOVFPlayer is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU General Public License for more details.\nYou should have received a copy of the GNU General Public License\nalong with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.\n::END::LICENCE:: -->\n<div class=\"maxSpace\" *ngIf=\"currentProgress\">\n  <div class=\"progressContainer\">\n    <div class=\"spinner\">\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n    <div class=\"progressMessage\">{{currentProgress.message}}</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/progress/progress.component.ts":
/*!************************************************!*\
  !*** ./src/app/progress/progress.component.ts ***!
  \************************************************/
/*! exports provided: ProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressComponent", function() { return ProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _progress_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../progress.service */ "./src/app/progress.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* ::START::LICENCE::
Copyright eQualityTime ©2018
This file is part of OVFPlayer.
OVFPlayer is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
OVFPlayer is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.
::END::LICENCE:: */


var ProgressComponent = /** @class */ (function () {
    function ProgressComponent(progressSerivce) {
        var _this = this;
        this.progressSerivce = progressSerivce;
        this.currentProgress = _progress_service__WEBPACK_IMPORTED_MODULE_1__["ProgressService"].message('Loading');
        this.updateProgress = function (progress) {
            _this.currentProgress = progress;
        };
    }
    ProgressComponent.prototype.ngOnInit = function () {
        this.subscription = this.progressSerivce.getProgress().subscribe(this.updateProgress);
    };
    ProgressComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    ProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-progress',
            template: __webpack_require__(/*! ./progress.component.html */ "./src/app/progress/progress.component.html"),
            styles: [__webpack_require__(/*! ./progress.component.css */ "./src/app/progress/progress.component.css")]
        }),
        __metadata("design:paramtypes", [_progress_service__WEBPACK_IMPORTED_MODULE_1__["ProgressService"]])
    ], ProgressComponent);
    return ProgressComponent;
}());



/***/ }),

/***/ "./src/app/scanning.service.ts":
/*!*************************************!*\
  !*** ./src/app/scanning.service.ts ***!
  \*************************************/
/*! exports provided: Scannable, ScannableCollection, ScanningModel, ScanningService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scannable", function() { return Scannable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScannableCollection", function() { return ScannableCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanningModel", function() { return ScanningModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanningService", function() { return ScanningService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.service */ "./src/app/config.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* ::START::LICENCE::
Copyright eQualityTime ©2018
This file is part of OVFPlayer.
OVFPlayer is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
OVFPlayer is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.
::END::LICENCE:: */



var Scannable = /** @class */ (function () {
    function Scannable(priority, type) {
        this._priority = priority;
        this._type = type;
    }
    Object.defineProperty(Scannable.prototype, "priority", {
        get: function () {
            return this._priority;
        },
        set: function (priority) {
            this._priority = priority;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scannable.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (type) {
            this._type = type;
        },
        enumerable: true,
        configurable: true
    });
    Scannable.prototype.hasChildren = function () {
        return false;
    };
    return Scannable;
}());

var ScannableCollection = /** @class */ (function (_super) {
    __extends(ScannableCollection, _super);
    function ScannableCollection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.children = [];
        return _this;
    }
    ScannableCollection.prototype.hasChildren = function () {
        return this.children.length > 0;
    };
    ScannableCollection.prototype.getChildren = function () {
        return this.children;
    };
    ScannableCollection.prototype.getChild = function (index) {
        return this.children[index];
    };
    ScannableCollection.prototype.addChild = function (child) {
        this.children.push(child);
        this.sortChildren();
    };
    ScannableCollection.prototype.addChildren = function (newChildren) {
        (_a = this.children).push.apply(_a, newChildren);
        this.sortChildren();
        var _a;
    };
    ScannableCollection.prototype.removeChildren = function (oldChildren) {
        var _this = this;
        oldChildren.forEach(function (scannable) {
            var index = _this.children.indexOf(scannable);
            if (index >= 0) {
                _this.children.splice(index, 1);
            }
        });
    };
    ScannableCollection.prototype.sortChildren = function () {
        this.children.sort(this._sortScannables);
    };
    ScannableCollection.prototype._sortScannables = function (a, b) {
        return a.priority - b.priority;
    };
    return ScannableCollection;
}(Scannable));

var ScanningModel = /** @class */ (function () {
    function ScanningModel() {
    }
    return ScanningModel;
}());

var ScanningService = /** @class */ (function () {
    function ScanningService(configService) {
        var _this = this;
        this.configService = configService;
        this.currentSelectedIndex = 0;
        this.registerScannable = function (observer) {
            _this.observers.push(observer);
            _this.topLevelScannables.addChildren(observer.getScannableCollections());
            if (_this.configService.scanningConfig.enabled) {
                _this.startScanning();
            }
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"](function () { return _this._unsubscribe(observer); });
        };
        this.updateHighlighted = function () {
            if (_this.currentSelectedIndex >= _this.currentCollection.getChildren().length) {
                _this.currentSelectedIndex = 0;
            }
            _this.scanningModel.currentHighlight = _this.currentCollection.getChild(_this.currentSelectedIndex++);
            _this.notifyObservers();
        };
        this.updateSelected = function () {
            _this.stopScanning();
            var current = _this.scanningModel.currentHighlight;
            _this.scanningModel.currentSelection = current;
            _this.scanningModel.currentHighlight = undefined;
            _this.notifyObservers();
            // stay on the selection for one [time] then clear selection and restart scanning
            setTimeout(function () {
                _this.scanningModel.currentSelection = undefined;
                _this.notifyObservers();
                _this.startScanning();
            }, _this.configService.scanningConfig.time);
        };
        this.topLevelScannables = new ScannableCollection(0, '');
        this.currentCollection = this.topLevelScannables;
        this.scanningModel = new ScanningModel();
        this.observers = [];
    }
    ScanningService.prototype.getScanningModel = function () {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](this.registerScannable);
    };
    ScanningService.prototype._unsubscribe = function (observer) {
        if (this.observers.includes(observer)) {
            this.observers.splice(this.observers.indexOf(observer), 1);
        }
        this.topLevelScannables.removeChildren(observer.getScannableCollections());
        this.currentCollection = this.topLevelScannables;
        if (this.observers.length === 0) {
            this.stopScanning();
            this.scanningModel = new ScanningModel();
        }
    };
    ScanningService.prototype.handleInteraction = function () {
        if (this.scanningModel.currentHighlight) {
            this.updateSelected();
            if (this.scanningModel.currentSelection.hasChildren()) {
                this.currentCollection = this.scanningModel.currentSelection;
            }
            else {
                this.currentCollection = this.topLevelScannables;
            }
        }
    };
    ScanningService.prototype.startScanning = function () {
        if (this.intervalId === undefined && this.observers.length >= 1) {
            document.onkeydown = this.handleInteraction.bind(this);
            this.currentSelectedIndex = 0;
            this.intervalId = setInterval(this.updateHighlighted, this.configService.scanningConfig.time);
        }
    };
    ScanningService.prototype.stopScanning = function () {
        document.onkeydown = undefined;
        clearInterval(this.intervalId);
        this.intervalId = undefined;
    };
    ScanningService.prototype.notifyObservers = function () {
        var _this = this;
        this.observers.forEach(function (observer) { return observer.next(_this.scanningModel); });
    };
    ScanningService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
    ], ScanningService);
    return ScanningService;
}());



/***/ }),

/***/ "./src/app/speechbar.service.ts":
/*!**************************************!*\
  !*** ./src/app/speechbar.service.ts ***!
  \**************************************/
/*! exports provided: ButtonFacade, SpeechbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonFacade", function() { return ButtonFacade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechbarService", function() { return SpeechbarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _obfboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obfboard */ "./src/app/obfboard.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config.service */ "./src/app/config.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* ::START::LICENCE::
Copyright eQualityTime ©2018
This file is part of OVFPlayer.
OVFPlayer is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
OVFPlayer is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.
::END::LICENCE:: */




var ButtonFacade = /** @class */ (function (_super) {
    __extends(ButtonFacade, _super);
    function ButtonFacade(button) {
        var _this = _super.call(this) || this;
        _this.appendages = [];
        _this.button = button;
        return _this;
    }
    ButtonFacade.prototype.append = function (appendage) {
        this.appendages.push(appendage);
    };
    ButtonFacade.prototype.getVocalization = function () {
        return this.vocalization || this.label;
    };
    ButtonFacade.prototype.getImage = function () {
        return this.button.getImage();
    };
    ButtonFacade.prototype.augment = function (initial) {
        return [initial].concat(this.appendages).join('');
    };
    Object.defineProperty(ButtonFacade.prototype, "id", {
        get: function () {
            return this.button.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonFacade.prototype, "label", {
        get: function () {
            return this.augment(this.button.label);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonFacade.prototype, "vocalization", {
        get: function () {
            return this.button.vocalization ? this.augment(this.button.vocalization) : this.button.vocalization;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonFacade.prototype, "imageId", {
        get: function () {
            return this.button.imageId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonFacade.prototype, "soundId", {
        get: function () {
            return this.button.soundId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonFacade.prototype, "backgroundColor", {
        get: function () {
            return this.button.backgroundColor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonFacade.prototype, "borderColor", {
        get: function () {
            return this.button.borderColor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonFacade.prototype, "actions", {
        get: function () {
            return this.button.actions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonFacade.prototype, "loadBoardAction", {
        get: function () {
            return this.button.loadBoardAction;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonFacade.prototype, "parent", {
        get: function () {
            return this.button.parent;
        },
        enumerable: true,
        configurable: true
    });
    return ButtonFacade;
}(_obfboard__WEBPACK_IMPORTED_MODULE_1__["Button"]));

var SpeechbarService = /** @class */ (function () {
    function SpeechbarService(configService) {
        var _this = this;
        this.configService = configService;
        this.buttons = [];
        this.speechSynthesizer = window.speechSynthesis;
        this.spaceJustPressed = false;
        this.addButtonObserver = function (observer) {
            _this.buttonObserver = observer;
            _this.buttonObserver.next(_this.buttons);
        };
        this.addListener = function (listener) {
            _this.listener = listener;
            _this.listener.next(_this.speechSynthesizer && _this.speechSynthesizer.speaking);
        };
        this.configService.voiceConfig$.subscribe(function (voiceConfig) {
            if (voiceConfig.userVoice) {
                _this.userVoice = _this.speechSynthesizer.getVoices().find(function (voice) { return voice.voiceURI === voiceConfig.userVoice; });
            }
        });
    }
    SpeechbarService.prototype.addButton = function (button) {
        this.spaceJustPressed = false;
        this.buttons.push(new ButtonFacade(button));
        this.notifyButtonObserver();
    };
    SpeechbarService.prototype.clear = function () {
        this.buttons = [];
        this.notifyButtonObserver();
    };
    SpeechbarService.prototype.backspace = function () {
        this.buttons.pop();
        this.notifyButtonObserver();
    };
    SpeechbarService.prototype.speak = function () {
        var _this = this;
        // don't queue up multiple speak actions
        if (!this.speechSynthesizer.speaking) {
            var msg = this.createUtterance();
            msg.text = this.buildSentence(this.buttons.map(function (button) { return button.getVocalization(); }));
            msg.onstart = function () { return _this.listener.next(true); };
            msg.onend = function () { return _this.listener.next(false); };
            this.speechSynthesizer.speak(msg);
        }
    };
    SpeechbarService.prototype.buildSentence = function (vocalizations) {
        if (vocalizations.length === 0) {
            return '';
        }
        var ret = vocalizations.join(' ');
        var lastChar = ret[ret.length - 1];
        var endsWithPunc = lastChar === '?' || lastChar === '!' || lastChar === '.';
        return endsWithPunc ? ret : ret + ' .';
    };
    SpeechbarService.prototype.sayButton = function (button) {
        // we do want to queue these up, so no speaking check
        // we also want the speak button to stay enabled for queing up the actual message, so no listener updates
        var msg = this.createUtterance();
        msg.text = this.buildSentence([button.getVocalization()]);
        this.speechSynthesizer.speak(msg);
    };
    SpeechbarService.prototype.createUtterance = function () {
        var msg = new SpeechSynthesisUtterance();
        if (this.userVoice) {
            msg.voice = this.userVoice;
        }
        return msg;
    };
    SpeechbarService.prototype.appendButton = function (button, action) {
        if (this.buttons.length === 0 || this.spaceJustPressed) {
            this.spaceJustPressed = false;
            var appendBut = new _obfboard__WEBPACK_IMPORTED_MODULE_1__["Button"]();
            appendBut.label = action.substr(1);
            this.buttons.push(new ButtonFacade(appendBut));
            this.notifyButtonObserver();
        }
        else {
            this.spaceJustPressed = false;
            this.buttons[this.buttons.length - 1].append(action.substr(1));
            this.notifyButtonObserver();
        }
    };
    SpeechbarService.prototype.space = function () {
        this.spaceJustPressed = true;
    };
    SpeechbarService.prototype.notifyButtonObserver = function () {
        this.buttonObserver.next(this.buttons);
    };
    SpeechbarService.prototype.getButtons = function () {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](this.addButtonObserver);
    };
    SpeechbarService.prototype.getSpeaking = function () {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](this.addListener);
    };
    SpeechbarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], SpeechbarService);
    return SpeechbarService;
}());



/***/ }),

/***/ "./src/app/speechbar/speechbar.component.css":
/*!***************************************************!*\
  !*** ./src/app/speechbar/speechbar.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ::START::LICENCE::\nCopyright eQualityTime ©2018\nThis file is part of OVFPlayer.\nOVFPlayer is free software: you can redistribute it and/or modify\nit under the terms of the GNU General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\n(at your option) any later version.\nOVFPlayer is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU General Public License for more details.\nYou should have received a copy of the GNU General Public License\nalong with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.\n::END::LICENCE:: */\n.speechbarContainer {\n  display: flex;\n  height: 100%;\n}\n.speechbar {\n  display: flex;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  flex-grow: 1;\n  padding: 0;\n}\n.speechbarTextItem {\n  flex-shrink: 0;\n}\n.speechbarButtonItem {\n  min-height: 33%;\n  max-width: 20%;\n  min-width: 10%;\n}\n.speechbarText {\n  padding: 12px;\n  height: 100%;\n  font-size: x-large;\n}\n.stackedButtonContainer {\n  display: flex;\n  flex-direction: column;\n}\n.stackedButton {\n  flex-grow: 1;\n  padding-top: 30%;\n  background: var(--button-image) no-repeat 50% 35%;\n  background-size: auto 25%;\n}\n.scanHighlight {\n  position: relative;\n}\n.scanHighlight:after {\n  border: greenyellow solid 5px;\n  content: \" \";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.scanSelect {\n  position: relative;\n}\n.scanSelect:after {\n  border: blue solid 5px;\n  content: \" \";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n"

/***/ }),

/***/ "./src/app/speechbar/speechbar.component.html":
/*!****************************************************!*\
  !*** ./src/app/speechbar/speechbar.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ::START::LICENCE::\nCopyright eQualityTime ©2018\nThis file is part of OVFPlayer.\nOVFPlayer is free software: you can redistribute it and/or modify\nit under the terms of the GNU General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\n(at your option) any later version.\nOVFPlayer is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU General Public License for more details.\nYou should have received a copy of the GNU General Public License\nalong with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.\n::END::LICENCE:: -->\n<div class=\"speechbarContainer\"\n    [class.scanHighlight]=\"buttonRow.isHighlighted()\"\n    [class.scanSelect]=\"buttonRow.isSelected()\">\n  <div class=\"stackedButtonContainer\">\n    <button class=\"stackedButton\" mat-raised-button [appInteractionEventHandler]=\"buttonRow.speak.handler\" [disabled]=\"speaking\"\n            [class.scanHighlight]=\"buttonRow.speak.isHighlighted()\"\n            [class.scanSelect]=\"buttonRow.speak.isSelected()\"\n            style=\"--button-image: url('/assets/images/speechbubble.png')\"\n            *ngIf=\"buttonRow.speak\">{{buttonRow.speak.label}}</button>\n    <button class=\"stackedButton\" mat-raised-button [appInteractionEventHandler]=\"buttonRow.home.handler\"\n            [class.scanHighlight]=\"buttonRow.home.isHighlighted()\"\n            [class.scanSelect]=\"buttonRow.home.isSelected()\"\n            style=\"--button-image: url('/assets/images/home.png')\"\n            *ngIf=\"buttonRow.home\">{{buttonRow.home.label}}</button>\n  </div>\n\n  <mat-card class=\"speechbar\" *ngIf=\"showIconsInSpeechbar; else vocalization\"\n            [appInteractionEventHandler]=\"buttonRow.speechbar && buttonRow.speechbar.handler\"\n            [class.scanHighlight]=\"buttonRow.speechbar && buttonRow.speechbar.isHighlighted()\"\n            [class.scanSelect]=\"buttonRow.speechbar && buttonRow.speechbar.isSelected()\">\n    <div class=\"speechbarButtonItem\" *ngFor=\"let butt of buttons\">\n      <app-obf-button [butt]=\"butt\"></app-obf-button>\n    </div>\n  </mat-card>\n  <ng-template #vocalization>\n    <mat-card class=\"speechbar\" [appInteractionEventHandler]=\"buttonRow.speechbar && buttonRow.speechbar.handler\"\n              [class.scanHighlight]=\"buttonRow.speechbar && buttonRow.speechbar.isHighlighted()\"\n              [class.scanSelect]=\"buttonRow.speechbar && buttonRow.speechbar.isSelected()\">\n      <div class=\"speechbarTextItem\" *ngFor=\"let butt of buttons\">\n        <mat-card class=\"speechbarText\">\n          {{butt.getVocalization()}}\n        </mat-card>\n      </div>\n    </mat-card>\n  </ng-template>\n\n  <div class=\"stackedButtonContainer\">\n    <button class=\"stackedButton\" mat-raised-button [appInteractionEventHandler]=\"buttonRow.backspace.handler\"\n            [class.scanHighlight]=\"buttonRow.backspace.isHighlighted()\"\n            [class.scanSelect]=\"buttonRow.backspace.isSelected()\"\n            style=\"--button-image: url('/assets/images/left.png')\"\n            *ngIf=\"buttonRow.backspace\">{{buttonRow.backspace.label}}</button>\n    <button class=\"stackedButton\" mat-raised-button [appInteractionEventHandler]=\"buttonRow.clear.handler\"\n            [class.scanHighlight]=\"buttonRow.clear.isHighlighted()\"\n            [class.scanSelect]=\"buttonRow.clear.isSelected()\"\n            style=\"--button-image: url('/assets/images/erase.png')\"\n            *ngIf=\"buttonRow.clear\">{{buttonRow.clear.label}}</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/speechbar/speechbar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/speechbar/speechbar.component.ts ***!
  \**************************************************/
/*! exports provided: SpeechbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechbarComponent", function() { return SpeechbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _speechbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../speechbar.service */ "./src/app/speechbar.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _board_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../board.service */ "./src/app/board.service.ts");
/* harmony import */ var _scanning_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scanning.service */ "./src/app/scanning.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* ::START::LICENCE::
Copyright eQualityTime ©2018
This file is part of OVFPlayer.
OVFPlayer is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
OVFPlayer is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.
::END::LICENCE:: */






var ScannableButton = /** @class */ (function (_super) {
    __extends(ScannableButton, _super);
    function ScannableButton(label, handler, priority, speechbarComponent) {
        var _this = _super.call(this, priority, ScannableButton.TYPE) || this;
        _this._label = label;
        _this._handler = handler;
        _this.speechbarComponent = speechbarComponent;
        return _this;
    }
    Object.defineProperty(ScannableButton.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (label) {
            this._label = label;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScannableButton.prototype, "handler", {
        get: function () {
            return this._handler;
        },
        set: function (handler) {
            this._handler = handler;
        },
        enumerable: true,
        configurable: true
    });
    ScannableButton.prototype.isHighlighted = function () {
        return this.speechbarComponent.scanningModel && this.speechbarComponent.scanningModel.currentHighlight === this;
    };
    ScannableButton.prototype.isSelected = function () {
        return this.speechbarComponent.scanningModel && this.speechbarComponent.scanningModel.currentSelection === this;
    };
    ScannableButton.TYPE = 'SpeechbarButton';
    return ScannableButton;
}(_scanning_service__WEBPACK_IMPORTED_MODULE_5__["Scannable"]));
var ScannableSpeechbarRow = /** @class */ (function (_super) {
    __extends(ScannableSpeechbarRow, _super);
    function ScannableSpeechbarRow(displayedButtons, speakOnSpeechbarClick, speechbarComponent) {
        var _this = _super.call(this, 0, ScannableSpeechbarRow.TYPE) || this;
        _this.speechbarComponent = speechbarComponent;
        if (displayedButtons.showSpeakButton) {
            _this.speak = new ScannableButton('Speak', speechbarComponent.speak.bind(speechbarComponent), 0, speechbarComponent);
            _this.addChild(_this.speak);
        }
        if (displayedButtons.showHomeButton) {
            _this.home = new ScannableButton('Home', speechbarComponent.home.bind(speechbarComponent), 1, speechbarComponent);
            _this.addChild(_this.home);
        }
        if (speakOnSpeechbarClick) {
            _this.speechbar = new ScannableButton('speechbar', speechbarComponent.speechbarClick.bind(speechbarComponent), 2, speechbarComponent);
            _this.addChild(_this.speechbar);
        }
        if (displayedButtons.showBackspaceButton) {
            _this.backspace = new ScannableButton('Backspace', speechbarComponent.backspace.bind(speechbarComponent), 3, speechbarComponent);
            _this.addChild(_this.backspace);
        }
        if (displayedButtons.showClearButton) {
            _this.clear = new ScannableButton('Clear', speechbarComponent.clear.bind(speechbarComponent), 4, speechbarComponent);
            _this.addChild(_this.clear);
        }
        return _this;
    }
    ScannableSpeechbarRow.prototype.isHighlighted = function () {
        return this.speechbarComponent.scanningModel && this.speechbarComponent.scanningModel.currentHighlight === this;
    };
    ScannableSpeechbarRow.prototype.isSelected = function () {
        return this.speechbarComponent.scanningModel && this.speechbarComponent.scanningModel.currentSelection === this;
    };
    ScannableSpeechbarRow.TYPE = 'SpeechbarRow';
    return ScannableSpeechbarRow;
}(_scanning_service__WEBPACK_IMPORTED_MODULE_5__["ScannableCollection"]));
var ScannableSpeechbarProvider = /** @class */ (function (_super) {
    __extends(ScannableSpeechbarProvider, _super);
    function ScannableSpeechbarProvider(displayedButtons, speakOnSpeechbarClick, speechbarComponent) {
        var _this = _super.call(this, function (scanningModel) {
            speechbarComponent.scanningModel = scanningModel;
            if (speechbarComponent.scanningModel.currentSelection &&
                speechbarComponent.scanningModel.currentSelection.type === ScannableButton.TYPE) {
                speechbarComponent.scanningModel.currentSelection.handler();
            }
        }) || this;
        _this.rows = [new ScannableSpeechbarRow(displayedButtons, speakOnSpeechbarClick, speechbarComponent)];
        return _this;
    }
    ScannableSpeechbarProvider.prototype.getScannableCollections = function () {
        return this.rows;
    };
    return ScannableSpeechbarProvider;
}(rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscriber"]));
var SpeechbarComponent = /** @class */ (function () {
    function SpeechbarComponent(boardService, speechbarService, config, scanningService, cdRef) {
        this.boardService = boardService;
        this.speechbarService = speechbarService;
        this.config = config;
        this.scanningService = scanningService;
        this.cdRef = cdRef;
    }
    SpeechbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._displayedButtons = this.config.displayedButtons;
        this._showIconsInSpeechbar = this.config.showIconsInSpeechbar;
        var provider = new ScannableSpeechbarProvider(this._displayedButtons, this.config.speakOnSpeechbarClick, this);
        this.buttonRow = provider.getScannableCollections()[0];
        this.scanningSubscription = this.scanningService.getScanningModel().subscribe(provider);
        this.speakingSubscription = this.speechbarService.getSpeaking().subscribe(function (speaking) {
            _this.speaking = speaking;
            _this.cdRef.detectChanges();
        });
        this.buttonsSubscription = this.speechbarService.getButtons().subscribe(function (buttons) {
            _this.buttons = buttons;
        });
    };
    SpeechbarComponent.prototype.ngOnDestroy = function () {
        if (this.speakingSubscription) {
            this.speakingSubscription.unsubscribe();
        }
        if (this.buttonsSubscription) {
            this.buttonsSubscription.unsubscribe();
        }
        if (this.scanningSubscription) {
            this.scanningSubscription.unsubscribe();
        }
    };
    Object.defineProperty(SpeechbarComponent.prototype, "displayedButtons", {
        get: function () {
            return this._displayedButtons;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechbarComponent.prototype, "showIconsInSpeechbar", {
        get: function () {
            return this._showIconsInSpeechbar;
        },
        enumerable: true,
        configurable: true
    });
    SpeechbarComponent.prototype.speechbarClick = function () {
        if (this.config.speakOnSpeechbarClick) {
            this.speechbarService.speak();
        }
    };
    SpeechbarComponent.prototype.speak = function () {
        this.speechbarService.speak();
    };
    SpeechbarComponent.prototype.home = function () {
        this.boardService.home();
    };
    SpeechbarComponent.prototype.backspace = function () {
        this.speechbarService.backspace();
    };
    SpeechbarComponent.prototype.clear = function () {
        this.speechbarService.clear();
    };
    SpeechbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-speechbar',
            template: __webpack_require__(/*! ./speechbar.component.html */ "./src/app/speechbar/speechbar.component.html"),
            styles: [__webpack_require__(/*! ./speechbar.component.css */ "./src/app/speechbar/speechbar.component.css")]
        }),
        __metadata("design:paramtypes", [_board_service__WEBPACK_IMPORTED_MODULE_4__["BoardService"],
            _speechbar_service__WEBPACK_IMPORTED_MODULE_2__["SpeechbarService"],
            _config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"],
            _scanning_service__WEBPACK_IMPORTED_MODULE_5__["ScanningService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], SpeechbarComponent);
    return SpeechbarComponent;
}());



/***/ }),

/***/ "./src/app/url-utils.ts":
/*!******************************!*\
  !*** ./src/app/url-utils.ts ***!
  \******************************/
/*! exports provided: UrlUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlUtils", function() { return UrlUtils; });
/* harmony import */ var url_parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url-parse */ "./node_modules/url-parse/index.js");
/* harmony import */ var url_parse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url_parse__WEBPACK_IMPORTED_MODULE_0__);
/* ::START::LICENCE::
Copyright eQualityTime ©2018
This file is part of OVFPlayer.
OVFPlayer is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
OVFPlayer is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.
::END::LICENCE:: */

var UrlUtils = /** @class */ (function () {
    function UrlUtils() {
    }
    UrlUtils.prototype.getSlug = function (url) {
        var pathname = this.getPathname(url);
        var bits = pathname.split('/');
        return bits.pop();
    };
    UrlUtils.prototype.getPathname = function (url) {
        return url_parse__WEBPACK_IMPORTED_MODULE_0__(url).pathname;
    };
    return UrlUtils;
}());



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
/* ::START::LICENCE::
Copyright eQualityTime ©2018
This file is part of OVFPlayer.
OVFPlayer is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
OVFPlayer is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.
::END::LICENCE:: */
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/environments/version.ts":
/*!*************************************!*\
  !*** ./src/environments/version.ts ***!
  \*************************************/
/*! exports provided: VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
// IMPORTANT: THIS FILE IS AUTO GENERATED! DO NOT MANUALLY EDIT OR CHECKIN!
/* tslint:disable */
var VERSION = {
    "tag": "DEV ONLY"
};
/* tslint:enable */


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
/* ::START::LICENCE::
Copyright eQualityTime ©2018
This file is part of OVFPlayer.
OVFPlayer is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
OVFPlayer is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with OVFPlayer.  If not, see <https://www.gnu.org/licenses/>.
::END::LICENCE:: */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .then(function () {
    registerServiceWorker('service-worker');
});
function registerServiceWorker(swName) {
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production && 'serviceWorker' in navigator) {
        navigator.serviceWorker
            .register("/ovfplayer/" + swName + ".js")
            .then(function (reg) {
            console.log('Successful service worker registration', reg);
        })
            .catch(function (err) {
            return console.error('Service worker registration failed', err);
        });
    }
    else if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        console.error('Service Worker API is not supported in current browser');
    }
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/vsts/work/1/s/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map