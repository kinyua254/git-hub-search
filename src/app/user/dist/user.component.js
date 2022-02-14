"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserComponent = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("src/environments/environment");
var user_1 = require("../classes/user");
var UserComponent = /** @class */ (function () {
    function UserComponent(http) {
        this.http = http;
    }
    UserComponent.prototype.ngOnInit = function () {
        /** spinner starts on init */
        var _this = this;
        this.http.get("https://api.github.com/users/trekhub?client_id=" + environment_1.environment.clientid + "?client_secret=" + environment_1.environment.clientSecret).subscribe(function (res) {
            _this.userData = new user_1.User(res.login, res.avatar_url, res.created_at, res.html_url, res.followers, res.following, res.public_repos, res.public_gists);
        });
    };
    __decorate([
        core_1.Input()
    ], UserComponent.prototype, "userData");
    UserComponent = __decorate([
        core_1.Component({
            selector: 'app-user',
            templateUrl: './user.component.html',
            styleUrls: ['./user.component.css']
        })
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
