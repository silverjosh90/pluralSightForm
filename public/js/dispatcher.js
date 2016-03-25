function Dispatcher() {
  this._lastID = 0;
  this._callbacks = {};
}

Dispatcher.prototype.register = function(callback) {
  id = 'CID_' + this._lastID++
  this._callbacks[id]= callback;
  return this.id;
}

Dispatcher.prototype.dispatch = function(action) {
  for(var id in this._callbacks) {
    this._callbacks[id](action);
  }
};

Dispatcher.prototype.waitFor = function(ids) {

}

module.exports = Dispatcher