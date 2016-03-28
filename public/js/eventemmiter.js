function EventEmmiter() {
  this._events = {};
  this.on = function(type, listener) {
    this._events[type] = this._events[type] || [];
    this._events[type].push(listener);
  }
  this.emit = function(type) {
    if(this._events[type]) {
      this._events[type].forEach(function(listener){
        listener();
      });
    }
  }
  this.removeListener = function(type, listener) {
    if(this._events[type]) {
      this._events[type].splice(this._events[type].indexOf(listener), 1)
    }
  }
}




module.exports = EventEmmiter
