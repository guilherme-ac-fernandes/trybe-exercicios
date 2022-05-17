import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// importe a ação oriunda do thunk
import fetchCharacter from '../redux/actions/actions';
import './SearchForm.css';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      characterSearched: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitName = this.submitName.bind(this);
  }

  handleChange(e) {
    this.setState({
      inputText: e.target.value,
      characterSearched: '',
    })
  }

  submitName(e) {
    e.preventDefault();
    const { inputText } = this.state;
    const { apiRequest } = this.props;
    
    this.setState({
      inputText: '',
      characterSearched: inputText,
    }, () => {
      const { characterSearched } = this.state;
      console.log(characterSearched);
      apiRequest(characterSearched);
    })
  }

  render() {
    const { inputText } = this.state;
    return (
      <div>
        <form onSubmit={this.submitName}>
          <h1>Type a character below:</h1>
          <input onChange={this.handleChange} 
          placeholder="Enter Character"
          value={inputText}
          />
          <div className="buttonSection">
            <button className="submitButton" type="submit" >Search!</button>
          </div>
        </form>
      </div>
    )
  }
};


SearchForm.propTypes = {
  apiRequest: PropTypes.func.isRequired,
};

// mapeie as ações despachadas como propriedade do componente
const mapDispatchToProps = (dispatch) => ({
  apiRequest: (char) => dispatch(fetchCharacter(char)),
});


export default connect(null, mapDispatchToProps)(SearchForm);
