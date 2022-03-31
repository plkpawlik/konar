import React from 'react';
import ReactDOM from 'react-dom';

// local files
import App from '@/app';

// stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/style/main.scss';



/*  Final render
/*   *   *   *   *   *   *   *   *   *   */

ReactDOM.render(

    // renders whole app
    <React.StrictMode>
        <App />
    </React.StrictMode>,

    // render DOM target
    document.getElementById( 'root' )
);