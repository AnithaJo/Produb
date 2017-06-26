System.register(["../OuterSubscriber", "../util/subscribeToResult"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    /**
     * @param notifier
     * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
     * @method takeUntil
     * @owner Observable
     */
    function takeUntil(notifier) {
        return this.lift(new TakeUntilOperator(notifier));
    }
    exports_1("takeUntil", takeUntil);
    var OuterSubscriber_1, subscribeToResult_1, TakeUntilOperator, TakeUntilSubscriber;
    return {
        setters: [
            function (OuterSubscriber_1_1) {
                OuterSubscriber_1 = OuterSubscriber_1_1;
            },
            function (subscribeToResult_1_1) {
                subscribeToResult_1 = subscribeToResult_1_1;
            }
        ],
        execute: function () {
            TakeUntilOperator = (function () {
                function TakeUntilOperator(notifier) {
                    this.notifier = notifier;
                }
                TakeUntilOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new TakeUntilSubscriber(subscriber, this.notifier));
                };
                return TakeUntilOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            TakeUntilSubscriber = (function (_super) {
                __extends(TakeUntilSubscriber, _super);
                function TakeUntilSubscriber(destination, notifier) {
                    var _this = _super.call(this, destination) || this;
                    _this.notifier = notifier;
                    _this.add(subscribeToResult_1.subscribeToResult(_this, notifier));
                    return _this;
                }
                TakeUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
                    this.complete();
                };
                TakeUntilSubscriber.prototype.notifyComplete = function () {
                    // noop
                };
                return TakeUntilSubscriber;
            }(OuterSubscriber_1.OuterSubscriber));
        }
    };
});
//# sourceMappingURL=takeUntil.js.map