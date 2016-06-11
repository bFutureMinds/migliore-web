System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NotificationHandler;
    return {
        setters:[],
        execute: function() {
            NotificationHandler = (function () {
                function NotificationHandler(notificationService) {
                    var _this = this;
                    notificationService.notificationEvent.subscribe(function (notification) { return _this.handleNotification(notification); });
                }
                return NotificationHandler;
            }());
            exports_1("NotificationHandler", NotificationHandler);
        }
    }
});
//# sourceMappingURL=notificationHandler.js.map