import { connect } from 'react-redux';
import { fetchSearchResults, clearResults } from '../../actions/search_actions';
import SearchIndex from './search_index';
import React from 'react';

const mapStateToProps = (state) => {
  return {
    results: state.search
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSearchResults: (query) => dispatch(fetchSearchResults(query)),
    clearResults: () => dispatch(clearResults())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchIndex);
