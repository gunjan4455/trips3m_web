import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class SelectSingleOption extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { selectedId: props.input.value ? props.input.value :
      props.options.length ? props.options[0].id : null };
  }

  static propTypes = {
    options: PropTypes.array.isRequired,
    input: PropTypes.object.isRequired,
    meta: PropTypes.object,
    onChange: PropTypes.func
  };

  static defaultProps = {
    options: [],
    onChange: () => {}
  };

  handleChange = (e) => {
    const { onChange, input } = this.props;
    this.props.input.onChange(e.target.value);
    this.setState({ selectedId: e.target.value });
    onChange(e.target.value);
  };

  render() {
    const { input, options, meta: { touched, error } } = this.props;
    const { selectedId } = this.state;

    return (
      <div className='mb24 flex spaceBetween'>
        {options.length
          ? options.map((option) => (
            <div className="col-xs-4 pl4 pr4 will-book-con-options" key={option.id}>
              <input
                type="radio"
                className="radio-common"
                name={input.name}
                id={`single_select_${option.id}`}
                value={option.id}
                checked={option.id === selectedId}
                onChange={this.handleChange}
              />
              <label htmlFor={`single_select_${option.id}`} className="cursorP">
                <p className="m0">{option.name}</p>
              </label>
            </div>
            ))
          : null
        }
        {
          touched &&
          (error && <span className="input-error-text">{error}</span>)
        }
      </div>
    );
  }
}
