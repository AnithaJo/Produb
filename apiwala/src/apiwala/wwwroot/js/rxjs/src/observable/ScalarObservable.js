System.register(["../Observable"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    var Observable_1, ScalarObservable;
    return {
        setters: [
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }
        ],
        execute: function () {
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @extends {Ignored}
             * @hide true
             */
            ScalarObservable = (function (_super) {
                __extends(ScalarObservable, _super);
                function ScalarObservable(value, scheduler) {
                    var _this = _super.call(this) || this;
                    _this.value = value;
                    _this.scheduler = scheduler;
                    _this._isScalar = true;
                    return _this;
                }
                ScalarObservable.create = function (value, scheduler) {
                    return new ScalarObservable(value, scheduler);
                };
                ScalarObservable.dispatch = function (state) {
                    var done = state.done, value = state.value, subscriber = state.subscriber;
                    if (done) {
                        subscriber.complete();
                        return;
                    }
                    subscriber.next(value);
                    if (subscriber.isUnsubscribed) {
                        return;
                    }
                    state.done = true;
                    this.schedule(state);
                };
                ScalarObservable.prototype._subscribe = function (subscriber) {
                    var value = this.value;
                    var scheduler = this.scheduler;
                    if (scheduler) {
                        return scheduler.schedule(ScalarObservable.dispatch, 0, {
                            done: false, value: value, subscriber: subscriber
                        });
                    }
                    else {
                        subscriber.next(value);
                        if (!subscriber.isUnsubscribed) {
                            subscriber.complete();
                        }
                    }
                };
                return ScalarObservable;
            }(Observable_1.Observable));
            exports_1("ScalarObservable", ScalarObservable);
        }
    };
});
//# sourceMappingURL=ScalarObservable.js.map