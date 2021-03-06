/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Forum = __webpack_require__(1);
	var EventEmmiter = __webpack_require__(7);
	var ForumDispatcher = __webpack_require__(8);

	ReactDOM.render(React.createElement(Forum, null), document.getElementById('content'));

	var myemmiter = new EventEmmiter();

	myemmiter.on('STARTED_THE_APP', function () {
	  console.log('started the app!');
	});

	myemmiter.on('STARTED_THE_APP', function () {
	  console.log('started the app #2');
	});

	myemmiter.emit('STARTED_THE_APP');

	ForumDispatcher.register(function (action) {
	  console.log('received an action');
	  console.log(action);
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var ForumHeader = __webpack_require__(2);
	var ForumQuestion = __webpack_require__(3);
	var ForumAnswers = __webpack_require__(4);
	var ForumAnswer = __webpack_require__(5);
	var ForumAddAnswers = __webpack_require__(6);
	var ForumDispatcher = __webpack_require__(8);
	var ForumStore = __webpack_require__(11);
	var EventEmmiter = __webpack_require__(7);

	var Forum = React.createClass({
	  displayName: 'Forum',


	  getInitialState: function () {
	    return {
	      allAnswers: ForumStore.getAnswers()
	    };
	  },

	  componentDidMount: function () {
	    ForumStore.addChangeListener(this._onChange);
	  },

	  componentWillUnmount: function () {
	    ForumStore.removeListener(this._onChange);
	  },
	  render: function () {
	    return React.createElement(
	      'div',
	      { className: 'Container' },
	      React.createElement(ForumHeader, null),
	      React.createElement(
	        'div',
	        { className: 'Body' },
	        React.createElement(ForumQuestion, null),
	        React.createElement(ForumAnswers, { allAnswers: this.state.allAnswers })
	      ),
	      React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'h4',
	          null,
	          ' Add Answer '
	        ),
	        React.createElement(ForumAddAnswers, { onAddAnswer: this._onAddAnswer })
	      )
	    );
	  },

	  _onChange: function () {
	    this.setState({ allAnswers: ForumStore.getAnswers() });
	  },
	  _onAddAnswer: function (answerText) {
	    ForumDispatcher.dispatch({
	      actionType: "FORUM_ANSWER_ADDED",
	      newAnswer: answerText
	    });
	  }
	});

	module.exports = Forum;

/***/ },
/* 2 */
/***/ function(module, exports) {

	var ForumHeader = React.createClass({
	  displayName: "ForumHeader",

	  render: function () {
	    return React.createElement(
	      "div",
	      { className: "nav navbar-default" },
	      React.createElement(
	        "div",
	        { className: "container-fluid" },
	        React.createElement(
	          "div",
	          { className: "navbar-header" },
	          React.createElement(
	            "a",
	            { className: "navbar-brand" },
	            "React Forum"
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = ForumHeader;

/***/ },
/* 3 */
/***/ function(module, exports) {

	
	var ForumQuestion = React.createClass({
	  displayName: "ForumQuestion",

	  render: function () {
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "h1",
	        null,
	        " What is React and Flux? "
	      ),
	      React.createElement(
	        "p",
	        null,
	        " I dont understand React or Flux. Can Someone help me? "
	      )
	    );
	  }
	});

	module.exports = ForumQuestion;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var ForumAnswer = __webpack_require__(5);
	var ForumDispatcher = __webpack_require__(8);

	var ForumAnswers = React.createClass({
	  displayName: 'ForumAnswers',

	  _onMarkCorrect: function (id) {
	    ForumDispatcher.dispatch({
	      actionType: 'FORUM_ANSWER_MARKED_CORRECT',
	      id: id
	    });
	  },
	  render: function () {
	    allAnswers = this.props.allAnswers;
	    answers = [];

	    for (key in allAnswers) {
	      answers.push(React.createElement(ForumAnswer, { key: key, id: key, answer: allAnswers[key], onMarkCorrect: this._onMarkCorrect }));
	    }
	    return React.createElement(
	      'div',
	      { className: 'answerBox' },
	      answers
	    );
	  }
	});

	module.exports = ForumAnswers;

/***/ },
/* 5 */
/***/ function(module, exports) {

	var ForumAnswer = React.createClass({
	  displayName: "ForumAnswer",


	  _markCorrect: function () {
	    this.props.onMarkCorrect(this.props.id);
	  },

	  render: function () {
	    var answer = this.props.answer;

	    var markAnswer;

	    if (!answer.correct) {
	      markAnswer = React.createElement(
	        "div",
	        { className: "pull-right" },
	        React.createElement(
	          "small",
	          null,
	          React.createElement(
	            "a",
	            { href: "#", onClick: this._markCorrect },
	            " Mark as correct "
	          ),
	          " "
	        )
	      );
	    }

	    var classNames = "panel-body ";
	    if (answer.correct) {
	      classNames += "alert alert-success";
	    };

	    return React.createElement(
	      "div",
	      { className: "panel panel-default" },
	      React.createElement(
	        "div",
	        { className: classNames },
	        answer.body,
	        markAnswer
	      )
	    );
	  }
	});

	module.exports = ForumAnswer;

/***/ },
/* 6 */
/***/ function(module, exports) {

	var ForumAddAnswers = React.createClass({
	  displayName: "ForumAddAnswers",

	  getInitialState: function () {
	    return {
	      value: ''
	    };
	  },
	  _addAnswer: function () {
	    this.props.onAddAnswer(this.state.value);
	  },
	  render: function () {
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "div",
	        { className: "col-md-12" },
	        React.createElement("textarea", { id: "addAnswer", className: "col-md-6 col-xs-8", onChange: this._onChange })
	      ),
	      React.createElement(
	        "div",
	        { id: "submitDiv" },
	        React.createElement("input", { id: "submitComment", type: "button", className: "btn btn-primary", value: "submit answer", onClick: this._addAnswer })
	      )
	    );
	  },
	  _onChange: function (event) {
	    this.setState({
	      value: event.target.value
	    });
	  }
	});

	module.exports = ForumAddAnswers;

/***/ },
/* 7 */
/***/ function(module, exports) {

	function EventEmmiter() {
	  this._events = {};
	  this.on = function (type, listener) {
	    this._events[type] = this._events[type] || [];
	    this._events[type].push(listener);
	  };
	  this.emit = function (type) {
	    if (this._events[type]) {
	      this._events[type].forEach(function (listener) {
	        listener();
	      });
	    }
	  };
	  this.removeListener = function (type, listener) {
	    if (this._events[type]) {
	      this._events[type].splice(this._events[type].indexOf(listener), 1);
	    }
	  };
	}

	module.exports = EventEmmiter;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var Dispatcher = __webpack_require__(9);

	var ForumDispatcher = new Dispatcher();

	module.exports = ForumDispatcher;

/***/ },
/* 9 */
/***/ function(module, exports) {

	function Dispatcher() {
	  this._lastID = 0;
	  this._callbacks = {};
	  this.register = function (callback) {
	    id = 'CID_' + this._lastID++;
	    this._callbacks[id] = callback;
	    return this.id;
	  };
	  this.dispatch = function (action) {
	    for (var id in this._callbacks) {
	      this._callbacks[id](action);
	    }
	  };
	  this.waitFor = function (ids) {};
	}

	module.exports = Dispatcher;

/***/ },
/* 10 */,
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var EventEmmiter = __webpack_require__(7);
	var ForumDispatcher = __webpack_require__(8);
	var answerData = {
	  "1": {
	    body: "An old wooden warship",
	    correct: false
	  },
	  "2": {
	    body: "React and Flux are a tool and method for building the front end",
	    correct: false
	  },
	  "3": {
	    body: "React is a synonym for 'respond'",
	    correct: false
	  }

	};

	var ForumStore = new EventEmmiter();

	ForumStore.emitChange = function () {
	  this.emit('change');
	};

	ForumStore.addChangeListener = function (listener) {
	  this.on('change', listener);
	};

	ForumStore.getAnswers = function () {
	  return answerData;
	};

	ForumStore.addAnswer = function (newAnswer) {
	  answerData[Object.keys(answerData).length + 1] = {
	    body: newAnswer,
	    correct: false
	  };
	  this.emitChange();
	};

	ForumStore.markAsCorrect = function (id) {
	  for (key in answerData) {
	    answerData[key].correct = false;
	  }

	  answerData[id].correct = true;
	  this.emitChange();
	};

	ForumDispatcher.register(function (action) {

	  switch (action.actionType) {
	    case 'FORUM_ANSWER_ADDED':
	      {
	        console.log('Answer Added!');
	        ForumStore.addAnswer(action.newAnswer);
	        break;
	      }
	    case "FORUM_ANSWER_MARKED_CORRECT":
	      {
	        console.log("answer marked correct!");
	        ForumStore.markAsCorrect(action.id);
	        break;
	      }
	  }
	});

	module.exports = ForumStore;

/***/ }
/******/ ]);