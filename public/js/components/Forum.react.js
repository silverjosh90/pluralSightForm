var ForumHeader = require('./ForumHeader.react')
var ForumQuestion = require('./ForumQuestion.react')
var ForumAnswers = require('./ForumAnswers.react')
var ForumAnswer = require('./ForumAnswer.react')
var ForumAddAnswers = require('./ForumAddAnswers.react')
var ForumDispatcher = require('../dispatchers/ForumDispatcher')


var allAnswers = {
  "1": {
    body: "An old wooden warship",
    correct: "false"
  },
  "2": {
    body:"React and Flux are a tool and method for building the front end",
    correct: false
  },
  "3": {
    body: "React is a synonym for 'respond'",
    correct: false
  }

}
var Forum = React.createClass({

  getInitialState: function() {
    return {
      allAnswers: allAnswers
    }
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
  _onAddAnswer: function(answerText) {
    ForumDispatcher.dispatch({
      actionType: "FORUM_ANSWER_ADDED",
      newAnswer: answerText
    });
  }
})

module.exports = Forum
