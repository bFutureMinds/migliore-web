System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NotificationType;
    return {
        setters:[],
        execute: function() {
            (function (NotificationType) {
                NotificationType[NotificationType["OFFER"] = "OFFER"] = "OFFER";
                NotificationType[NotificationType["ALERT"] = "ALERT"] = "ALERT";
                NotificationType[NotificationType["GREETING"] = "GREETING"] = "GREETING";
            })(NotificationType || (NotificationType = {}));
            exports_1("NotificationType", NotificationType);
        }
    }
});
//# sourceMappingURL=notification.type.js.map