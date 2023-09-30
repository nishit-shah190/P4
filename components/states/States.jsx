import React from 'react';
import './States.css';
import Header from '../header/header';

class States extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      states: window.models.states() , // Initialize states from window.models.states or as an empty array
    };
    console.log(this.state.states); 
  }
  

  handleFilterChange = (e) => {
    this.setState({ filterText: e.target.value });
  };

  render() {
    const { filterText, states } = this.state;

    const filteredStates = states.filter((state) =>
      state.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
      <div>
      {/* <Header/> */}
      <div className="states">
        <h1>State Search</h1>
        <input
          type="text"
          placeholder="Enter a substring"
          value={filterText}
          onChange={this.handleFilterChange}
        />
        <p>Filter: {filterText}</p>
        {filterText && filteredStates.length === 0 ? (
          <p>No matching states found.</p>
        ) : (
          <>
            {filterText && (
              <p>Matching states for: {filterText}</p>
            )}
            <ul className="state-list">
              {filteredStates.map((state, index) => (
                <li key={index}>{state}</li>
              ))}
            </ul>
          </>
        )}
      </div>
      </div>
    );
  }
}

export default States;

