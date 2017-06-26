System.register(["../Subscriber"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    /**
     * Counts the number of emissions on the source and emits that number when the
     * source completes.
     *
     * <span class="informal">Tells how many values were emitted, when the source
     * completes.</span>
     *
     * <img src="./img/count.png" width="100%">
     *
     * `count` transforms an Observable that emits values into an Observable that
     * emits a single value that represents the number of values emitted by the
     * source Observable. If the source Observable terminates with an error, `count`
     * will pass this error notification along without emitting an value first. If
     * the source Observable does not terminate at all, `count` will neither emit
     * a value nor terminate. This operator takes an optional `predicate` function
     * as argument, in which case the output emission will represent the number of
     * source values that matched `true` with the `predicate`.
     *
     * @example <caption>Counts how many seconds have passed before the first click happened</caption>
     * var seconds = Rx.Observable.interval(1000);
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var secondsBeforeClick = seconds.takeUntil(clicks);
     * var result = secondsBeforeClick.count();
     * result.subscribe(x => console.log(x));
     *
     * @example <caption>Counts how many odd numbers are there between 1 and 7</caption>
     * var numbers = Rx.Observable.range(1, 7);
     * var result = numbers.count(i => i % 2 === 1);
     * result.subscribe(x => console.log(x));
     *
     * @see {@link max}
     * @see {@link min}
     * @see {@link reduce}
     *
     * @param {function(value: T, i: number, source: Observable<T>): boolean} [predicate] A
     * boolean function to select what values are to be counted. It is provided with
     * arguments of:
     * - `value`: the value from the source Observable.
     * - `index`: the (zero-based) "index" of the value from the source Observable.
     * - `source`: the source Observable instance itself.
     * @return {Observable} An Observable of one number that represents the count as
     * described above.
     * @method count
     * @owner Observable
     */
    function count(predicate) {
        return this.lift(new CountOperator(predicate, this));
    }
    exports_1("count", count);
    var Subscriber_1, CountOperator, CountSubscriber;
    return {
        setters: [
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            }
        ],
        execute: function () {
            CountOperator = (function () {
                function CountOperator(predicate, source) {
                    this.predicate = predicate;
                    this.source = source;
                }
                CountOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new CountSubscriber(subscriber, this.predicate, this.source));
                };
                return CountOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            CountSubscriber = (function (_super) {
                __extends(CountSubscriber, _super);
                function CountSubscriber(destination, predicate, source) {
                    var _this = _super.call(this, destination) || this;
                    _this.predicate = predicate;
                    _this.source = source;
                    _this.count = 0;
                    _this.index = 0;
                    return _this;
                }
                CountSubscriber.prototype._next = function (value) {
                    if (this.predicate) {
                        this._tryPredicate(value);
                    }
                    else {
                        this.count++;
                    }
                };
                CountSubscriber.prototype._tryPredicate = function (value) {
                    var result;
                    try {
                        result = this.predicate(value, this.index++, this.source);
                    }
                    catch (err) {
                        this.destination.error(err);
                        return;
                    }
                    if (result) {
                        this.count++;
                    }
                };
                CountSubscriber.prototype._complete = function () {
                    this.destination.next(this.count);
                    this.destination.complete();
                };
                return CountSubscriber;
            }(Subscriber_1.Subscriber));
        }
    };
});
//# sourceMappingURL=count.js.map