var ForumAnswer = require('./ForumAnswer.react')
var ForumDispatcher = require('../dispatchers/ForumDispatcher')

var ForumAnswers = React.createClass({
  _onMarkCorrect: function(id) {
    ForumDispatcher.dispatch({
      actionType: 'FORUM_ANSWER_MARKED_CORRECT',
      id: id
    });
  },
  render: function() {
    allAnswers = this.props.allAnswers
    answers = []

    for(key in allAnswers) {
      answers.push(<ForumAnswer  key={key} id={key} answer={allAnswers[key]} onMarkCorrect={this._onMarkCorrect} />)
    }
    return (
      <div className="answerBox">
        {answers}
      </div>
    )
  }
})

module.exports = ForumAnswers
