System.register(["./publishReplay"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    /**
     * @param bufferSize
     * @param windowTime
     * @param scheduler
     * @return {Observable<any>}
     * @method cache
     * @owner Observable
     */
    function cache(bufferSize, windowTime, scheduler) {
        if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
        if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
        return publishReplay_1.publishReplay.call(this, bufferSize, windowTime, scheduler).refCount();
    }
    exports_1("cache", cache);
    var publishReplay_1;
    return {
        setters: [
            function (publishReplay_1_1) {
                publishReplay_1 = publishReplay_1_1;
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=cache.js.map