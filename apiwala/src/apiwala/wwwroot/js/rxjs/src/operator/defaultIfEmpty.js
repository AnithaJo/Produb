System.register(["../Subscriber"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    /**
     * Returns an Observable that emits the elements of the source or a specified default value if empty.
     * @param {any} defaultValue the default value used if source is empty; defaults to null.
     * @return {Observable} an Observable of the items emitted by the where empty values are replaced by the specified default value or null.
     * @method defaultIfEmpty
     * @owner Observable
     */
    function defaultIfEmpty(defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        return this.lift(new DefaultIfEmptyOperator(defaultValue));
    }
    exports_1("defaultIfEmpty", defaultIfEmpty);
    var Subscriber_1, DefaultIfEmptyOperator, DefaultIfEmptySubscriber;
    return {
        setters: [
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            }
        ],
        execute: function () {
            DefaultIfEmptyOperator = (function () {
                function DefaultIfEmptyOperator(defaultValue) {
                    this.defaultValue = defaultValue;
                }
                DefaultIfEmptyOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new DefaultIfEmptySubscriber(subscriber, this.defaultValue));
                };
                return DefaultIfEmptyOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            DefaultIfEmptySubscriber = (function (_super) {
                __extends(DefaultIfEmptySubscriber, _super);
                function DefaultIfEmptySubscriber(destination, defaultValue) {
                    var _this = _super.call(this, destination) || this;
                    _this.defaultValue = defaultValue;
                    _this.isEmpty = true;
                    return _this;
                }
                DefaultIfEmptySubscriber.prototype._next = function (value) {
                    this.isEmpty = false;
                    this.destination.next(value);
                };
                DefaultIfEmptySubscriber.prototype._complete = function () {
                    if (this.isEmpty) {
                        this.destination.next(this.defaultValue);
                    }
                    this.destination.complete();
                };
                return DefaultIfEmptySubscriber;
            }(Subscriber_1.Subscriber));
        }
    };
});
//# sourceMappingURL=defaultIfEmpty.js.map