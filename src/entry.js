// Import CSS
import './style/style.scss';

var component = require('./components/component');
var app = document.createElement('div');

document.body.appendChild(app);

app.appendChild(component());