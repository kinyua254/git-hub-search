"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FormComponent = void 0;
var core_1 = require("@angular/core");
var FormComponent = /** @class */ (function () {
    function FormComponent(userService, http, alertservice) {
        this.userService = userService;
        this.http = http;
        this.userFetched = new core_1.EventEmitter();
        this.reposFetched = new core_1.EventEmitter();
        this.errStat = true;
        this.errorEvent = new core_1.EventEmitter();
        this.alertService = alertservice;
    }
    FormComponent.prototype.searchGitUsers = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.userService.getUser(_this.gitUser).toPromise().then(function (res) {
                _this.userData = new User(res.login, res.avatar_url, res.created_at, res.html_url, res.followers, res.following, res.public_repos, res.public_gists);
                _this.userFetched.emit(_this.userData);
                resolve();
            }, function (error) {
                _this.errorEvent.emit(_this.errStat);
                reject(error);
            });
            _this.userService.getUserRepos(_this.gitUser).toPromise().then(function (res) {
                _this.repos = res;
                _this.reposFetched.emit(_this.repos);
                resolve();
            });
            _this.gitUser = "";
        });
        return promise;
    };
    FormComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Output()
    ], FormComponent.prototype, "gitUser");
    __decorate([
        core_1.Output()
    ], FormComponent.prototype, "userFetched");
    __decorate([
        core_1.Output()
    ], FormComponent.prototype, "reposFetched");
    __decorate([
        core_1.Output()
    ], FormComponent.prototype, "errorEvent");
    FormComponent = __decorate([
        core_1.Component({
            selector: 'app-form',
            templateUrl: './form.component.html',
            styleUrls: ['./form.component.css']
        })
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
