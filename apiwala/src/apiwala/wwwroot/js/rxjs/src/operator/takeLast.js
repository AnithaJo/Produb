System.register(["../Subscriber", "../util/ArgumentOutOfRangeError", "../observable/EmptyObservable"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    /**
     * @throws {ArgumentOutOfRangeError} When using `takeLast(i)`, it delivers an
     * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
     * @param total
     * @return {any}
     * @method takeLast
     * @owner Observable
     */
    function takeLast(total) {
        if (total === 0) {
            return new EmptyObservable_1.EmptyObservable();
        }
        else {
            return this.lift(new TakeLastOperator(total));
        }
    }
    exports_1("takeLast", takeLast);
    var Subscriber_1, ArgumentOutOfRangeError_1, EmptyObservable_1, TakeLastOperator, TakeLastSubscriber;
    return {
        setters: [
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            },
            function (ArgumentOutOfRangeError_1_1) {
                ArgumentOutOfRangeError_1 = ArgumentOutOfRangeError_1_1;
            },
            function (EmptyObservable_1_1) {
                EmptyObservable_1 = EmptyObservable_1_1;
            }
        ],
        execute: function () {
            TakeLastOperator = (function () {
                function TakeLastOperator(total) {
                    this.total = total;
                    if (this.total < 0) {
                        throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
                    }
                }
                TakeLastOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new TakeLastSubscriber(subscriber, this.total));
                };
                return TakeLastOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            TakeLastSubscriber = (function (_super) {
                __extends(TakeLastSubscriber, _super);
                function TakeLastSubscriber(destination, total) {
                    var _this = _super.call(this, destination) || this;
                    _this.total = total;
                    _this.ring = new Array();
                    _this.count = 0;
                    return _this;
                }
                TakeLastSubscriber.prototype._next = function (value) {
                    var ring = this.ring;
                    var total = this.total;
                    var count = this.count++;
                    if (ring.length < total) {
                        ring.push(value);
                    }
                    else {
                        var index = count % total;
                        ring[index] = value;
                    }
                };
                TakeLastSubscriber.prototype._complete = function () {
                    var destination = this.destination;
                    var count = this.count;
                    if (count > 0) {
                        var total = this.count >= this.total ? this.total : this.count;
                        var ring = this.ring;
                        for (var i = 0; i < total; i++) {
                            var idx = (count++) % total;
                            destination.next(ring[idx]);
                        }
                    }
                    destination.complete();
                };
                return TakeLastSubscriber;
            }(Subscriber_1.Subscriber));
        }
    };
});
//# sourceMappingURL=takeLast.js.map