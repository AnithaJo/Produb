System.register(["../Subscriber"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    /**
     * Returns an Observable that emits whether or not every item of the source satisfies the condition specified.
     * @param {function} predicate a function for determining if an item meets a specified condition.
     * @param {any} [thisArg] optional object to use for `this` in the callback
     * @return {Observable} an Observable of booleans that determines if all items of the source Observable meet the condition specified.
     * @method every
     * @owner Observable
     */
    function every(predicate, thisArg) {
        var source = this;
        return source.lift(new EveryOperator(predicate, thisArg, source));
    }
    exports_1("every", every);
    var Subscriber_1, EveryOperator, EverySubscriber;
    return {
        setters: [
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            }
        ],
        execute: function () {
            EveryOperator = (function () {
                function EveryOperator(predicate, thisArg, source) {
                    this.predicate = predicate;
                    this.thisArg = thisArg;
                    this.source = source;
                }
                EveryOperator.prototype.call = function (observer, source) {
                    return source._subscribe(new EverySubscriber(observer, this.predicate, this.thisArg, this.source));
                };
                return EveryOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            EverySubscriber = (function (_super) {
                __extends(EverySubscriber, _super);
                function EverySubscriber(destination, predicate, thisArg, source) {
                    var _this = _super.call(this, destination) || this;
                    _this.predicate = predicate;
                    _this.thisArg = thisArg;
                    _this.source = source;
                    _this.index = 0;
                    _this.thisArg = thisArg || _this;
                    return _this;
                }
                EverySubscriber.prototype.notifyComplete = function (everyValueMatch) {
                    this.destination.next(everyValueMatch);
                    this.destination.complete();
                };
                EverySubscriber.prototype._next = function (value) {
                    var result = false;
                    try {
                        result = this.predicate.call(this.thisArg, value, this.index++, this.source);
                    }
                    catch (err) {
                        this.destination.error(err);
                        return;
                    }
                    if (!result) {
                        this.notifyComplete(false);
                    }
                };
                EverySubscriber.prototype._complete = function () {
                    this.notifyComplete(true);
                };
                return EverySubscriber;
            }(Subscriber_1.Subscriber));
        }
    };
});
//# sourceMappingURL=every.js.map