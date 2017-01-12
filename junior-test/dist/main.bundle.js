webpackJsonp([0,3],{

/***/ 338:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 338;


/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app__ = __webpack_require__(452);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_37" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app__["a" /* AppModule */]);
//# sourceMappingURL=/Users/potapovD1/Documents/ng2-junior-test--angular-cli-/src/main.js.map

/***/ },

/***/ 448:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(615),
            styles: [__webpack_require__(610)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/potapovD1/Documents/ng2-junior-test--angular-cli-/src/app.component.js.map

/***/ },

/***/ 449:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ui_note_creator_note_creator_component__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__containers_notes_notes_container__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui_note_card_note_card_component__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ui_app_bar_app_bar__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_main__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(448);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__ui_app_bar_app_bar__["a" /* AppBarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__containers_main__["a" /* AppMainContainer */],
                __WEBPACK_IMPORTED_MODULE_2__ui_note_card_note_card_component__["a" /* NoteCardComponent */],
                __WEBPACK_IMPORTED_MODULE_1__containers_notes_notes_container__["a" /* NotesContainer */],
                __WEBPACK_IMPORTED_MODULE_0__ui_note_creator_note_creator_component__["a" /* NoteCreatorComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/potapovD1/Documents/ng2-junior-test--angular-cli-/src/app.module.js.map

/***/ },

/***/ 450:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppMainContainer; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppMainContainer = (function () {
    function AppMainContainer() {
    }
    AppMainContainer = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-main-container',
            template: "\n    <div>\n    <app-bar></app-bar>\n      <main class=\"main\">\n       <notes-container></notes-container>\n      </main>\n    </div>     \n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppMainContainer);
    return AppMainContainer;
}());
;
//# sourceMappingURL=/Users/potapovD1/Documents/ng2-junior-test--angular-cli-/src/main.js.map

/***/ },

/***/ 451:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NotesContainer; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotesContainer = (function () {
    function NotesContainer() {
        this.notes = [{ title: 'test_title', value: 'test_value1', color: 'yellow' },
            { title: 'test_title', value: 'test_value2', color: 'lightblue' },
            { title: 'test_title', value: 'test_value3', color: 'green' }
        ];
        this.count = 0;
    }
    NotesContainer.prototype.onNodeChecked = function (index) {
        this.notes.splice(index, 1);
    };
    ;
    NotesContainer.prototype.addNewNote = function (note) {
        this.count++;
        if (this.count > 8) {
            this.notes = [{ title: 'ERROR', value: 'ERROR', color: 'red' }];
            return;
        }
        this.notes.push(note);
    };
    NotesContainer = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'notes-container',
            styles: [__webpack_require__(611)],
            template: __webpack_require__(616)
        }), 
        __metadata('design:paramtypes', [])
    ], NotesContainer);
    return NotesContainer;
}());
;
//# sourceMappingURL=/Users/potapovD1/Documents/ng2-junior-test--angular-cli-/src/notes.container.js.map

/***/ },

/***/ 452:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(449);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_module__["a"]; });

//# sourceMappingURL=/Users/potapovD1/Documents/ng2-junior-test--angular-cli-/src/index.js.map

/***/ },

/***/ 453:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppBarComponent = (function () {
    function AppBarComponent() {
    }
    AppBarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-bar',
            template: __webpack_require__(617),
            styles: [__webpack_require__(612)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppBarComponent);
    return AppBarComponent;
}());
;
//# sourceMappingURL=/Users/potapovD1/Documents/ng2-junior-test--angular-cli-/src/app-bar.js.map

/***/ },

/***/ 454:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NoteCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoteCardComponent = (function () {
    function NoteCardComponent() {
        this.note = {};
        this.checked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */]();
        this.showCheck = false;
    }
    NoteCardComponent.prototype.toggleCheck = function () {
        this.showCheck = !this.showCheck;
    };
    NoteCardComponent.prototype.onChecked = function () {
        this.checked.next(this.note);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], NoteCardComponent.prototype, "note", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', Object)
    ], NoteCardComponent.prototype, "checked", void 0);
    NoteCardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'note-card',
            template: __webpack_require__(618),
            styles: [__webpack_require__(613)]
        }), 
        __metadata('design:paramtypes', [])
    ], NoteCardComponent);
    return NoteCardComponent;
}());
;
//# sourceMappingURL=/Users/potapovD1/Documents/ng2-junior-test--angular-cli-/src/note-card.component.js.map

/***/ },

/***/ 455:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NoteCreatorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoteCreatorComponent = (function () {
    function NoteCreatorComponent() {
        this.createNode = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */]();
        this.newNote = {
            title: '',
            value: ''
        };
    }
    NoteCreatorComponent.prototype.addNewNote = function () {
        var _a = this.newNote, title = _a.title, value = _a.value;
        if (title && value) {
            this.createNode.next(this.newNote);
        }
        ;
        this.resetValues();
    };
    NoteCreatorComponent.prototype.resetValues = function () {
        this.newNote = {
            title: '',
            value: ''
        };
    };
    ;
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', Object)
    ], NoteCreatorComponent.prototype, "createNode", void 0);
    NoteCreatorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'note-creator',
            template: __webpack_require__(619),
            styles: [__webpack_require__(614)]
        }), 
        __metadata('design:paramtypes', [])
    ], NoteCreatorComponent);
    return NoteCreatorComponent;
}());
;
//# sourceMappingURL=/Users/potapovD1/Documents/ng2-junior-test--angular-cli-/src/note-creator.component.js.map

/***/ },

/***/ 456:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/potapovD1/Documents/ng2-junior-test--angular-cli-/src/environment.js.map

/***/ },

/***/ 457:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/potapovD1/Documents/ng2-junior-test--angular-cli-/src/polyfills.js.map

/***/ },

/***/ 610:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 611:
/***/ function(module, exports) {

module.exports = ".notes {\n  padding-top: 50px; \n}\n.creator {\n  margin-bottom: 40px;\n}"

/***/ },

/***/ 612:
/***/ function(module, exports) {

module.exports = ".app-bar {\n  height: 65px;\n  padding: 5px 30px;\n  background-color: #00BCD4;\n}\n.logo {\n  color: white;\n  font-size: 30px;\n  font-weight: 300;\n  cursor: pointer;\n}\n.link {\n  color: wheat;\n  font-size: 24px;\n  font-weight: 400;\n  cursor: pointer;\n}\n"

/***/ },

/***/ 613:
/***/ function(module, exports) {

module.exports = ".note-card {\n  padding: 15px;\n  border-right: 2px;\n  width: 100%;\n  position: relative;\n}\n.title {\n  font-size: 1.2rem;\n  font-weight: bold;\n  text-align: left;\n  color: rbga(0,0,0,0.8);\n}\n.value {\n  text-align: left;\n  font-size: 1.4rem;\n  font-weight: 200;\n}\n.icon {\n  position: absolute;\n  color: black;\n  border: 1px solid lightgray;\n  background-color: white;\n  font-size: 30px;\n  top: -10px;\n  left: -10px;\n  width: 40px;\n  height: 40px;\n  border-right: 100%;\n  cursor: pointer;\n}\n"

/***/ },

/***/ 614:
/***/ function(module, exports) {

module.exports = ".note-creator {\n  padding: 20px;\n  background-color: wheat;\n  border-radius: 3px; \n}\n.title {\n  font-weight: bold;\n  color: rgba(0, 0, 0, 0.8)\n}\n.full {\n  height: 100%;\n}\n"

/***/ },

/***/ 615:
/***/ function(module, exports) {

module.exports = "<app-main-container></app-main-container>\n  \n"

/***/ },

/***/ 616:
/***/ function(module, exports) {

module.exports = "<div class=\"row center-xs notes\"> \n  <div class=\"col-xs-6 creator\">\n    <note-creator (createNode)=\"addNewNote($event)\"></note-creator>\n  </div>\n  <div class=\"notes col-xs-8\">\n    <div class=\"row between-xs\">\n      <note-card class=\"col-xs-4\" [note]=\"note\"\n        *ngFor=\"let note of notes; let i = index;\"\n        (checked)=\"onNodeChecked(i)\"\n      ></note-card>\n    </div>\n  </div>\n</div>"

/***/ },

/***/ 617:
/***/ function(module, exports) {

module.exports = "<header class=\"app-bar row middle-xs\">\n  <span class=\"logo col-xs-10\">\n    Retain\n  </span>\n  <nav class=\"col-xs-2\">\n    <div class=\"row middle-xs between-xs\">\n      <span class=\"link\">Settings</span>\n      <span class=\"link\">Signout</span>\n    </div>\n  </nav>\n</header>"

/***/ },

/***/ 618:
/***/ function(module, exports) {

module.exports = "<div class=\"note-card row shadow-1\"\n  [ngStyle]=\"{'background-color' : note.color}\"\n  (mouseleave)=\"toggleCheck()\"\n  (mouseenter)=\"toggleCheck()\"\n  >\n  <div class=\"icon\" \n    (click)=\"onChecked()\"\n    *ngIf=\"showCheck\"\n  >\n    <i class=\"material-icons\">check</i>\n  </div>\n  <div class=\"col-xs-12 title\">\n    {{note.title}}\n  </div>\n  <div class=\"col-xs-12 value\">\n    {{note.value}}\n  </div>\n</div>"

/***/ },

/***/ 619:
/***/ function(module, exports) {

module.exports = "<div>\n  <form class=\"row\">\n    <input type=\"text\"\n           [(ngModel)]=\"newNote.title\"\n           name=\"newNoteTitle\"\n           placeholder=\"Title\"\n           class=\"col-xs-10\"  \n    >\n    <input type=\"text\"\n           [(ngModel)]=\"newNote.value\"\n           name=\"newNoteTitle\"\n           placeholder=\"Take a note\"\n           class=\"col-xs-10\"  \n    >\n    <div class=\"actions col-xs-12 row between-xs\">\n      <button type=\"submit\"\n              class=\"btn-light\"\n              (click)=\"addNewNote()\"\n      >\n        Done\n      </button>\n    </div>\n  </form>\n</div>"

/***/ },

/***/ 632:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(339);


/***/ }

},[632]);
//# sourceMappingURL=main.bundle.map