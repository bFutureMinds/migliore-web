System.register(["@angular/core", "../notification.service", "./notificationHandler", "../notification.type"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, notification_service_1, notificationHandler_1, notification_type_1;
    var OfferHandler;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (notification_service_1_1) {
                notification_service_1 = notification_service_1_1;
            },
            function (notificationHandler_1_1) {
                notificationHandler_1 = notificationHandler_1_1;
            },
            function (notification_type_1_1) {
                notification_type_1 = notification_type_1_1;
            }],
        execute: function() {
            OfferHandler = (function (_super) {
                __extends(OfferHandler, _super);
                function OfferHandler(notificationService) {
                    _super.call(this, notificationService);
                    this.notificationService = notificationService;
                }
                OfferHandler.prototype.handleNotification = function (notification) {
                    if (notification.type == notification_type_1.NotificationType.OFFER) {
                        toastr.info("OFFER", notification.description);
                    }
                };
                OfferHandler = __decorate([
                    core_1.Component({
                        selector: "offer-handler",
                        template: "",
                    }), 
                    __metadata('design:paramtypes', [notification_service_1.NotificationService])
                ], OfferHandler);
                return OfferHandler;
            }(notificationHandler_1.NotificationHandler));
            exports_1("OfferHandler", OfferHandler);
        }
    }
});
//# sourceMappingURL=offerHandler.component.js.map