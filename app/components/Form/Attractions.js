import React from 'react';
import PropTypes from 'prop-types';




class Attractions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.options.reduce((acc, option) => {
        acc[option.id] = false;
        return acc;
      },
       {})
    };
    this.handleChange = this.handleChange.bind(this);
    this.getSelectedVals = this.getSelectedVals.bind(this);
  }
  getSelectedVals() {
    return Object.keys(this.state)
      .filter(option => this.state[option]);
  }
  handleChange(event) {
    this.setState({
      ...this.state,
      [event.target.value]: event.target.checked
    }, () => this.props.input.onChange(this.getSelectedVals()));
  }
  render() {
    const attOptions = this.props.options.map(option => (
      <div className="col-xs-12 pl8 pr8" key={`attr_${option.id}`} >
        <input
          type="checkbox"
          value={option.id}
          name={`attr_${option.id}`}
          id={`attr_${option.id}`}
          checked={this.state[option.id]}
          onChange={this.handleChange}
          className="checkbox-common"
        />
        <label htmlFor={`attr_${option.id}`}>
          {option.name}
        </label>
      </div>
    ));
    return (
      <div className="row row- p15 sbcw mb8">
        <div className="row row-">
          <p className="fw9">Local Experiences</p>
          <div className="row row- pt8">
            <div className="row row-8">
              {attOptions}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


Attractions.propTypes = {
  input: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired
};

export default Attractions;
