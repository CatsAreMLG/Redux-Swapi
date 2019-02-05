import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetch } from "../actions";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    if (this.props.loading) {
      return <div>LOADING CHARACTERS...</div>;
    } else {
      return (
        <div className="CharactersList_wrapper">
          <CharacterList characters={this.props.characters} />
        </div>
      );
    }
  }
}

const mstp = state => {
  return {
    name: state.charsReducer.name,
    loading: state.charsReducer.loading,
    characters: state.charsReducer.characters
  };
};

export default connect(
  mstp,
  { fetch: fetch }
)(CharacterListView);
