System.register(['./app', "@angular/platform-browser-dynamic"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var app_1, platform_browser_dynamic_1;
    return {
        setters:[
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(app_1.App);
        }
    }
});
//# sourceMappingURL=main.js.map