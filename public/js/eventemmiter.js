function EventEmmiter() {
  this._events = {};
}

EventEmmiter.prototype.on = function(type, listener) {
  this._events[type] = this._events[type] || [];
  this._events[type].push(listener);
}

EventEmmiter.prototype.emit = function(type) {
  if(this._events[type]) {
    this._events[type].forEach(function(listener){
      listener();
    });
  }
}

EventEmmiter.prototype.removeListener = function(type, listener) {
  if(this._events[type]) {
    this._events[type].splice(this._events[type].indexOf(listener), 1)
  }
}

module.exports = EventEmmiter
