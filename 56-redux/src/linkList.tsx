import * as React from "react";
import { ADD_LINK, CLEAR_LINK, LinkActions, REMOVE_LINK } from "./linkActions";

import { connect } from "react-redux";

import { Dispatch } from "redux"; // We have to import `Dispatch` type

import { IRootState } from "./models";

interface ILinkListProps {
  links: Array<{
    id: number,
    title: string,
    url: string
  }>,
  addLink: () => void, // Add a new mapped prop
  clearLink: () => void // Add a new mapped prop
  removeLink:(key:number) => void
}

const PureLinkList = (props: ILinkListProps) => {
  return (
    <div>
      <button onClick={props.addLink}>New Link</button>
      <button onClick={props.clearLink}>Clear</button>
      {props.links.map((e) => (
        <div key={e.id}>{e.title} - {e.url}
          {/* tslint:disable-next-line:jsx-no-lambda */}
          <button onClick={ () => props.removeLink(e.id)}> X </button>
        </div>

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
    addLink: () => dispatch({
      link: {
        id: Math.random(),
        title: 'Accelerate',
        url: 'http://www.acceleratedhk.com'
      },
      type: ADD_LINK
    }),
    clearLink: () => dispatch({
      type: CLEAR_LINK
    }),
    removeLink:(key:number) =>dispatch({
      key,
      type: REMOVE_LINK
    })
  }
}

const LinkList = connect(mapStateToProps, mapDispatchToProps)(PureLinkList);

export default LinkList;