"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var user_component_1 = require("./user/user.component");
var header_component_1 = require("./components/header/header.component");
var user_card_component_1 = require("./components/user-card/user-card.component");
var http_1 = require("@angular/common/http");
var user_form_component_1 = require("./components/user-form/user-form.component");
var forms_1 = require("@angular/forms");
var repositories_component_1 = require("./repositories/repositories.component");
var invalid_input_alert_directive_1 = require("./directives/invalid-input-alert.directive");
var about_component_1 = require("./components/about/about.component");
var elapsed_time_pipe_1 = require("./pipes/elapsed-time.pipe");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                user_component_1.UserComponent,
                header_component_1.HeaderComponent,
                user_card_component_1.UserCardComponent,
                user_form_component_1.UserFormComponent,
                repositories_component_1.RepositoriesComponent,
                invalid_input_alert_directive_1.InvalidInputAlertDirective,
                about_component_1.AboutComponent,
                elapsed_time_pipe_1.ElapsedTimePipe,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
