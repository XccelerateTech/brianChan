import * as React from "react";


import { ADD_LINK, CLEAR_LINK,REMOVE_LINK, LinkActions} from "./linkActions"

import { createStore } from "redux";

import { IRootState } from "./models";

import LinkList from "./linkList";

import { Provider } from "react-redux";

import { render } from "react-dom";

// import UserList from "./userList";

const rootReducer = (state: IRootState = {
  links: [
    { id: 1 ,title: 'Google', url: 'http://www.google.com' },
    { id: 2 ,title: 'Yahoo', url: 'http://www.yahoo.com' },
  ],
  users:[]

}, action: LinkActions /* add parameter here */) => {
  // Use switch to handle different actions
  switch (action.type) {
    case ADD_LINK:
      return {
        links: state.links.concat([action.link]) // Use concat to add a new link
      }
    case CLEAR_LINK:
      return {
        links: [] // Reset the link
      }
    case REMOVE_LINK:
      const newlinks = state.links.filter( item =>{
        return item.id !== action.key;
      })
      return{
        links: newlinks
      }
    default:
      return state; // Do not change the state in case of any other actions
  }
};


const store = createStore<any, any, any, any>(rootReducer);

const App = () => (
  <Provider store={store}>
    <div>
      <h2>Links</h2>
      <LinkList/>
      {/* <h2>Users</h2>
      <UserList /> */}
    </div>
  </Provider>
);

render(<App />, document.getElementById("root"));

export default App;
