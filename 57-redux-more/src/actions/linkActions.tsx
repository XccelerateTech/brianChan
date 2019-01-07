import { Action } from "redux";

// Define ADD_LINK const and its type
const ADD_LINK = 'ADD_LINK';
type ADD_LINK = typeof ADD_LINK;

// Define how AddLinkAction should look like
interface IAddLinkAction extends Action {
  type: ADD_LINK;
  link: {
    title: string,
    url: string
  };
}

// Define CLEAR_LINK const and its type
const CLEAR_LINK = 'CLEAR_LINK';
type CLEAR_LINK = typeof CLEAR_LINK;

// Define ClearLinkAction. No additional information is needed
interface IClearLinkAction extends Action {
  type: CLEAR_LINK;
}

// Collection of both for easier integration
type LinkActions = IAddLinkAction | IClearLinkAction;


function addLink(title:string, url:string):IAddLinkAction {
  return {
    type: ADD_LINK,
    link: {
      title,
      url
    }
  }
};

function clearLink():IClearLinkAction {
  return {
    type: CLEAR_LINK
  }
}

export  {LinkActions,ADD_LINK,CLEAR_LINK,addLink,clearLink};
