import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CharacterInfo extends React.Component {
  render() {
    const { loading, character, error } = this.props;
    console.log(character);

    if (!loading && ('name' in character)) {
      return (
        <ul>
          <li>Name: {character.name}</li>
          <li>Gender: {character.gender}</li>
          <li>Aliases: {character.aliases.map((alias, index) => <p key={`${alias}-${index}`}>{alias}</p>)}</li>
          <li>Books: {character.books.map((book, index) => <p key={`${book}-${index}`}>{book}</p>)}</li>
        </ul>
      )
    }
    if (error) { return <div>{error}</div>; }
    if (loading) { return <div>Loading...</div>; }
    return <div>Type a character name and click to search!</div>;
  }
};

const mapStateToProps = (state) => ({
  loading: state.reducer.loading,
  character: state.reducer.character,
  error: state.reducer.error,
});

CharacterInfo.propTypes = {
  loading: PropTypes.bool.isRequired,
  character: PropTypes.objectOf(PropTypes.object).isRequired,
  error: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(CharacterInfo);
