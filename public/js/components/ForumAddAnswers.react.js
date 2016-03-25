var ForumAddAnswers = React.createClass({
  render: function() {
    return (
      <div>
        <div className="col-md-12">
        <textarea  id="addAnswer" className="col-md-6 col-xs-8">

        </textarea>
        </div>

        <div id="submitDiv">
        <input id="submitComment" type="button" className="btn btn-primary" value="submit answer" />
        </div>
      </div>
    )
  }
})

module.exports = ForumAddAnswers
