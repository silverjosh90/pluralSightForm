

var ForumAnswer = React.createClass({

  render: function() {
    var answer=this.props.answer
    return (
      <div className="panel panel-default">
        <div className="panel-body">
        <p> {answer.body} </p>
        </div>

      </div>
    )
  }
})

module.exports = ForumAnswer
