import 'array.prototype.findindex';
import './style/style.scss';

import React from "react";
import alt from './libs/alt';
import storage from './libs/storage';
import persist from './libs/persist';
import App from './components/App.jsx';

main();

function main() {
    persist(alt, storage, 'app');

    const app = document.createElement('div');

    document.body.appendChild(app);

    React.render(<App />, app);
}