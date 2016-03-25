var Forum = require('./Forum.react')
var EventEmmiter = require('../eventemmiter')
var ForumDispatcher = require('../dispatchers/ForumDispatcher')


ReactDOM.render(
  <Forum />,
  document.getElementById('content')
)

var myemmiter = new EventEmmiter();

myemmiter.on('STARTED_THE_APP', function() {
  console.log('started the app!')
})

myemmiter.on('STARTED_THE_APP', function() {
  console.log('started the app #2')
})

myemmiter.emit('STARTED_THE_APP')


ForumDispatcher.register(function(action){
  console.log('received an action');
  console.log(action)
})
