import { ADD_LINK, CLEAR_LINK, LinkActions} from "../actions/linkActions";
type LinkState =
   Array<{
    title: string,
    url: string
  }>
  

const linkReducer = (state: LinkState = [],
    // links: [
    //   { title: 'Google', url: 'http://www.google.com' },
    //   { title: 'Yahoo', url: 'http://www.yahoo.com' },
    // ]
   action: LinkActions/* add parameter here */) : LinkState => {
    // Use switch to handle different actions
    switch (action.type) {
      case ADD_LINK:
        return state.concat([action.link]) // Use concat to add a new link
        
      case CLEAR_LINK:
        return []
          // Reset the link
        
      default:
        return state; // Do not change the state in case of any other actions
    }
  };

  export {LinkState,linkReducer} ;