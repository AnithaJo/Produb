System.register(["../Observable", "../util/noop"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    var Observable_1, noop_1, NeverObservable;
    return {
        setters: [
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (noop_1_1) {
                noop_1 = noop_1_1;
            }
        ],
        execute: function () {
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @extends {Ignored}
             * @hide true
             */
            NeverObservable = (function (_super) {
                __extends(NeverObservable, _super);
                function NeverObservable() {
                    return _super.call(this) || this;
                }
                /**
                 * Creates an Observable that emits no items to the Observer.
                 *
                 * <span class="informal">An Observable that never emits anything.</span>
                 *
                 * <img src="./img/never.png" width="100%">
                 *
                 * This static operator is useful for creating a simple Observable that emits
                 * neither values nor errors nor the completion notification. It can be used
                 * for testing purposes or for composing with other Observables. Please not
                 * that by never emitting a complete notification, this Observable keeps the
                 * subscription from being disposed automatically. Subscriptions need to be
                 * manually disposed.
                 *
                 * @example <caption>Emit the number 7, then never emit anything else (not even complete).</caption>
                 * function info() {
                 *   console.log('Will not be called');
                 * }
                 * var result = Rx.Observable.never().startWith(7);
                 * result.subscribe(x => console.log(x), info, info);
                 *
                 * @see {@link create}
                 * @see {@link empty}
                 * @see {@link of}
                 * @see {@link throw}
                 *
                 * @return {Observable} A "never" Observable: never emits anything.
                 * @static true
                 * @name never
                 * @owner Observable
                 */
                NeverObservable.create = function () {
                    return new NeverObservable();
                };
                NeverObservable.prototype._subscribe = function (subscriber) {
                    noop_1.noop();
                };
                return NeverObservable;
            }(Observable_1.Observable));
            exports_1("NeverObservable", NeverObservable);
        }
    };
});
//# sourceMappingURL=NeverObservable.js.map