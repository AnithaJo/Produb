System.register(["../../Observable", "../../operator/auditTime"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, auditTime_1;
    return {
        setters: [
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (auditTime_1_1) {
                auditTime_1 = auditTime_1_1;
            }
        ],
        execute: function () {
            Observable_1.Observable.prototype.auditTime = auditTime_1.auditTime;
        }
    };
});
//# sourceMappingURL=auditTime.js.map