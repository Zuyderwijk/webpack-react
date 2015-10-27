// Import CSS
import '../css/style.scss';

// Import React and Components
var React = require('react')
var Root = require('./components/CommentBox.js')

// Render!
React.render(<CommentBox />, document.getElementById('content'));