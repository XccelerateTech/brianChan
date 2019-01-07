import * as React from "react";

import LinkList from "./components/linkList";

import { Provider } from "react-redux";

import { render } from "react-dom";

import {store} from "./store"


const App = () => (
  <Provider store={store}>
    <div>
      <h2>Links</h2>
      <LinkList />
      
    </div>
  </Provider>
);

render(<App />, document.getElementById("root"));

export default App;
