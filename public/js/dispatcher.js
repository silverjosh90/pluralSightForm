function Dispatcher() {
  this._lastID = 0;
  this._callbacks = {};
  this.register = function(callback) {
    id = 'CID_' + this._lastID++
    this._callbacks[id]= callback;
    return this.id;
  }
  this.dispatch = function(action) {
    for(var id in this._callbacks) {
      this._callbacks[id](action);
    }
  };
  this.waitFor = function(ids) {

  }
}

module.exports = Dispatcher
