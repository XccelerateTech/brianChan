import * as React from "react";
import { addLink,clearLink,LinkActions } from "../actions/linkActions";

import { connect } from "react-redux";

import { Dispatch } from "redux"; // We have to import `Dispatch` type

import { IRootState } from "../reducers";

interface ILinkListProps {
  links: Array<{
    title: string,
    url: string
  }>,
  addLink: () => void, // Add a new mapped prop
  clearLink: () => void // Add a new mapped prop
}

const PureLinkList = (props: ILinkListProps) => {
  return (
    <div>
      <button onClick={props.addLink}>New Link</button>
      <button onClick={props.clearLink}>Clear</button>
      {props.links.map(l => (
        <div>{l.title} - {l.url}</div>
      ))}
    </div>
  );
}

const mapStateToProps = (state: IRootState) => {
  return {
    links: state.links
  }
}
// Add the `mapDispatchToProp`
const mapDispatchToProps = (dispatch: Dispatch<LinkActions>) => {
  return {
    
    addLink: () => dispatch(addLink('Accelerate', 'http://www.acceleratedhk.com')),

    clearLink: () => dispatch(clearLink())
      
    
  }
}

const LinkList = connect(mapStateToProps,mapDispatchToProps)(PureLinkList);

export default LinkList;