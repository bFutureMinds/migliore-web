/// <reference path="./toastr.d.ts" />
System.register(['@angular/core', './ng2-websocket', "./notifications/notification.service", "./notifications/handlers/offerHandler.component", "./notifications/handlers/alertHandler.component", "./notifications/handlers/greetingHandler.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ng2_websocket_1, notification_service_1, offerHandler_component_1, alertHandler_component_1, greetingHandler_component_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_websocket_1_1) {
                ng2_websocket_1 = ng2_websocket_1_1;
            },
            function (notification_service_1_1) {
                notification_service_1 = notification_service_1_1;
            },
            function (offerHandler_component_1_1) {
                offerHandler_component_1 = offerHandler_component_1_1;
            },
            function (alertHandler_component_1_1) {
                alertHandler_component_1 = alertHandler_component_1_1;
            },
            function (greetingHandler_component_1_1) {
                greetingHandler_component_1 = greetingHandler_component_1_1;
            }],
        execute: function() {
            App = (function () {
                function App(notificationService) {
                    this.notificationService = notificationService;
                    this.wsEndpoint = "ws://localhost:8080/notifications";
                    this.ws = this.subscribe();
                    toastr.options = { positionClass: 'toast-top-right', closeButton: true };
                }
                App.prototype.sayOk = function () {
                    alert('clickedd');
                };
                App.prototype.displayToastr = function (message) {
                    toastr.info(message);
                };
                App.prototype.subscribe = function () {
                    var _this = this;
                    console.log("trying to subscribe to ws");
                    this.ws = new ng2_websocket_1.$WebSocket(this.wsEndpoint);
                    this.ws.send("connected at " + Date.now());
                    this.ws.getDataStream().subscribe(function (res) {
                        console.log("receiving");
                        var notification = JSON.parse(res.data).value;
                        console.log(notification);
                        _this.notificationService.handleNotification(notification);
                    }, function (e) {
                        console.log('Error: ' + e.message);
                    }, function () {
                        console.log('Completed');
                    });
                };
                App = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: './views/dashboard.html',
                        providers: [notification_service_1.NotificationService],
                        directives: [offerHandler_component_1.OfferHandler, alertHandler_component_1.AlertHandler, greetingHandler_component_1.GreetingHandler]
                    }), 
                    __metadata('design:paramtypes', [notification_service_1.NotificationService])
                ], App);
                return App;
            }());
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=app.js.map