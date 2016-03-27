var ForumAnswer = require('./ForumAnswer.react')

var ForumAnswers = React.createClass({
  _onMarkCorrect: function() {
    ForumDispatcher.dispatch({
      actionType: 'FORUM_ANSWER_MARKED_CORRECT',
      id: id
    })
  },
  render: function() {
    allAnswers = this.props.allAnswers
    answers = []

    for(key in allAnswers) {
      answers.push(<ForumAnswer  key={key} id={key} answer={allAnswers[key]} onMarkCorrect={this.props._onMarkCorrect} />)
    }
    return (
      <div className="answerBox">
        {answers}
      </div>
    )
  }
})

module.exports = ForumAnswers
