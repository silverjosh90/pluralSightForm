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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var Forum = __webpack_require__(1);
	var ForumHeader = __webpack_require__(2);

	ReactDOM.render(React.createElement(Forum, null), document.getElementById('content'));

/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	var ForumHeader = __webpack_require__(2);
	var ForumQuestion = __webpack_require__(3);
	var ForumAnswers = __webpack_require__(4);
	var ForumAnswer = __webpack_require__(5);
	var ForumAddAnswers = __webpack_require__(22);

	var allAnswers = {
	  "1": {
	    body: "An old wooden warship",
	    correct: "false"
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
	var Forum = React.createClass({
	  displayName: 'Forum',


	  getInitialState: function () {
	    return {
	      allAnswers: allAnswers
	    };
	  },
	  render: function () {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(ForumHeader, null),
	      React.createElement(ForumQuestion, null),
	      React.createElement(ForumAnswers, { allAnswers: this.state.allAnswers }),
	      React.createElement(ForumAddAnswers, null)
	    );
	  }
	});

	module.exports = Forum;

/***/ },

/***/ 2:
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

/***/ 3:
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

/***/ 4:
/***/ function(module, exports, __webpack_require__) {

	var ForumAnswer = __webpack_require__(5);

	var ForumAnswers = React.createClass({
	  displayName: "ForumAnswers",

	  render: function () {
	    allAnswers = this.props.allAnswers;
	    answers = [];

	    for (key in allAnswers) {
	      answers.push(React.createElement(ForumAnswer, { key: key, id: key, answer: allAnswers[key] }));
	    }
	    return React.createElement(
	      "div",
	      { className: "answerBox" },
	      answers
	    );
	  }
	});

	module.exports = ForumAnswers;

/***/ },

/***/ 5:
/***/ function(module, exports) {

	

	var ForumAnswer = React.createClass({
	  displayName: "ForumAnswer",


	  render: function () {
	    var answer = this.props.answer;
	    return React.createElement(
	      "div",
	      { className: "panel panel-default" },
	      React.createElement(
	        "div",
	        { className: "panel-body" },
	        React.createElement(
	          "p",
	          null,
	          " ",
	          answer.body,
	          " "
	        )
	      )
	    );
	  }
	});

	module.exports = ForumAnswer;

/***/ },

/***/ 22:
/***/ function(module, exports) {

	var ForumAddAnswers = React.createClass({
	  displayName: "ForumAddAnswers",

	  render: function () {
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "div",
	        { className: "col-md-12" },
	        React.createElement("textarea", { id: "addAnswer", className: "col-md-6 col-xs-8" })
	      ),
	      React.createElement(
	        "div",
	        { id: "submitDiv" },
	        React.createElement("input", { id: "submitComment", type: "button", className: "btn btn-primary", value: "submit answer" })
	      )
	    );
	  }
	});

	module.exports = ForumAddAnswers;

/***/ }

/******/ });