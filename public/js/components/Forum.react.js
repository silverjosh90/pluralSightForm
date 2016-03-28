var ForumHeader = require('./ForumHeader.react')
var ForumQuestion = require('./ForumQuestion.react')
var ForumAnswers = require('./ForumAnswers.react')
var ForumAnswer = require('./ForumAnswer.react')
var ForumAddAnswers = require('./ForumAddAnswers.react')
var ForumDispatcher = require('../dispatchers/ForumDispatcher')
var ForumStore = require('../stores/ForumStore')
var EventEmmiter = require('../eventemmiter')


var Forum = React.createClass({

  getInitialState: function() {
    return {
      allAnswers: ForumStore.getAnswers()
    }
  },

  componentDidMount: function() {
    ForumStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    ForumStore.removeListener(this._onChange);
  },
  render: function() {
    return(
      <div className="Container">
      <ForumHeader />
      <div className="Body">
      <ForumQuestion />
      <ForumAnswers allAnswers={this.state.allAnswers} />
      </div>
      <div>
      <h4> Add Answer </h4>
      <ForumAddAnswers onAddAnswer={this._onAddAnswer} />
      </div>
      </div>
    )
  },

  _onChange: function() {
    this.setState({allAnswers: ForumStore.getAnswers()})
  },
  _onAddAnswer: function(answerText) {
    ForumDispatcher.dispatch({
      actionType: "FORUM_ANSWER_ADDED",
      newAnswer: answerText
    });
  }
})

module.exports = Forum
