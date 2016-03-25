var ForumAnswer = require('./ForumAnswer.react')

var ForumAnswers = React.createClass({
  render: function() {
    allAnswers = this.props.allAnswers
    answers = []

    for(key in allAnswers) {
      answers.push(<ForumAnswer  key={key} id={key} answer={allAnswers[key]} />)
    }
    return (
      <div className="answerBox">
        {answers}
      </div>
    )
  }
})

module.exports = ForumAnswers
