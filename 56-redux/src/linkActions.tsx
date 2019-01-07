import { Action } from "redux";

// Define ADD_LINK const and its type
const ADD_LINK = 'ADD_LINK';
type ADD_LINK = typeof ADD_LINK;

// Define how AddLinkAction should look like
interface IAddLinkAction extends Action {
  type: ADD_LINK;
  link: {
    id:number,
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

const REMOVE_LINK = 'REMOVE_LINK';
type REMOVE_LINK = typeof REMOVE_LINK;

interface IRemoveLinkAction extends Action {
  type: REMOVE_LINK;
  key:number
}

// Collection of both for easier integration
type LinkActions = IAddLinkAction | IClearLinkAction | IRemoveLinkAction;

export  {LinkActions,ADD_LINK,CLEAR_LINK,REMOVE_LINK};
