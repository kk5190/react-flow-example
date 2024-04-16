'use strict';
import OverviewFlow from './src/App';
const e = React.createElement;
const domContainer = document.querySelector('#flow-renderer');
const root = ReactDOM.createRoot(domContainer);
root.render(e(OverviewFlow)); 
