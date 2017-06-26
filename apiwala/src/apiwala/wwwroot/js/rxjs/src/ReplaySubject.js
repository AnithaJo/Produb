System.register(["./Subject", "./scheduler/queue", "./operator/observeOn"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    var Subject_1, queue_1, observeOn_1, ReplaySubject, ReplayEvent;
    return {
        setters: [
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (queue_1_1) {
                queue_1 = queue_1_1;
            },
            function (observeOn_1_1) {
                observeOn_1 = observeOn_1_1;
            }
        ],
        execute: function () {
            /**
             * @class ReplaySubject<T>
             */
            ReplaySubject = (function (_super) {
                __extends(ReplaySubject, _super);
                function ReplaySubject(bufferSize, windowTime, scheduler) {
                    if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
                    if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
                    var _this = _super.call(this) || this;
                    _this.events = [];
                    _this.scheduler = scheduler;
                    _this.bufferSize = bufferSize < 1 ? 1 : bufferSize;
                    _this._windowTime = windowTime < 1 ? 1 : windowTime;
                    return _this;
                }
                ReplaySubject.prototype._next = function (value) {
                    var now = this._getNow();
                    this.events.push(new ReplayEvent(now, value));
                    this._trimBufferThenGetEvents(now);
                    _super.prototype._next.call(this, value);
                };
                ReplaySubject.prototype._subscribe = function (subscriber) {
                    var events = this._trimBufferThenGetEvents(this._getNow());
                    var scheduler = this.scheduler;
                    if (scheduler) {
                        subscriber.add(subscriber = new observeOn_1.ObserveOnSubscriber(subscriber, scheduler));
                    }
                    var index = -1;
                    var len = events.length;
                    while (++index < len && !subscriber.isUnsubscribed) {
                        subscriber.next(events[index].value);
                    }
                    return _super.prototype._subscribe.call(this, subscriber);
                };
                ReplaySubject.prototype._getNow = function () {
                    return (this.scheduler || queue_1.queue).now();
                };
                ReplaySubject.prototype._trimBufferThenGetEvents = function (now) {
                    var bufferSize = this.bufferSize;
                    var _windowTime = this._windowTime;
                    var events = this.events;
                    var eventsCount = events.length;
                    var spliceCount = 0;
                    // Trim events that fall out of the time window.
                    // Start at the front of the list. Break early once
                    // we encounter an event that falls within the window.
                    while (spliceCount < eventsCount) {
                        if ((now - events[spliceCount].time) < _windowTime) {
                            break;
                        }
                        spliceCount += 1;
                    }
                    if (eventsCount > bufferSize) {
                        spliceCount = Math.max(spliceCount, eventsCount - bufferSize);
                    }
                    if (spliceCount > 0) {
                        events.splice(0, spliceCount);
                    }
                    return events;
                };
                return ReplaySubject;
            }(Subject_1.Subject));
            exports_1("ReplaySubject", ReplaySubject);
            ReplayEvent = (function () {
                function ReplayEvent(time, value) {
                    this.time = time;
                    this.value = value;
                }
                return ReplayEvent;
            }());
        }
    };
});
//# sourceMappingURL=ReplaySubject.js.map