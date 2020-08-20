var util = require('util')
var EventEmitter = require('events').EventEmitter

function FileEvent () {
    EventEmitter.call(this)
}

util.inherits(FileEvent, EventEmitter)

FileEvent.prototype.sendEvent = function(type) {
    this.emit(type)
}

var eventBus = new FileEvent();

module.exports = {
 emitter : FileEvent,
 eventBus : eventBus
};