var ForumAddAnswers = React.createClass({
  getInitialState: function() {
    return {
      value: ''
    }
  },
  _addAnswer: function(){
    this.props.onAddAnswer(this.state.value);
  },
  render: function() {
    return (
      <div>
        <div className="col-md-12">
        <textarea  id="addAnswer" className="col-md-6 col-xs-8" onChange={this._onChange}>

        </textarea>
        </div>

        <div id="submitDiv">
        <input id="submitComment" type="button" className="btn btn-primary" value="submit answer" onClick={this._addAnswer} />
        </div>
      </div>
    )
  },
  _onChange: function(event) {
    this.setState({
      value: event.target.value
    })
  }
})

module.exports = ForumAddAnswers
