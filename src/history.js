import * as history from 'history';
const historyObj =
  history && history.createBrowserHistory && history.createBrowserHistory();
export default historyObj;
