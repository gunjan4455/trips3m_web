import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const TimeContainer = styled.div({
  '& .entryFeesRadio': {
    display: 'none',
    '& + label': {
      display: 'inline-block',
      color: '#cbcbcb',
      border: '1px solid #cbcbcb',
      padding: '8px 15px',
      textAlign: 'center',
      marginRight: '8px',
      cursor: 'pointer',
      borderRadius: '2px',
    },
    '&:checked + label': {
      color: '#20a397',
      borderColor: '#20a397',
    },
  },
});

const TimeData = styled.div({
  display: 'flex',
});

class EntryFeesDaysData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: props.timing[0].tickets || []
    };
  }

  handleChange = (time, e) => {
    this.setState({tickets: time.tickets});
  };

  render() {
    const { timing, uniqueId } = this.props;
    return (
      <div className="clearfix">
        <TimeContainer>
          {timing.map((time, i) => (
            <div className="iblock" key={i}>
              <input name={`entry-fees ${uniqueId}`} type="radio" className="entryFeesRadio" id={`${time.startTime}`}
                defaultChecked={i == 0 ? true : false} onChange={(e) => this.handleChange(time, e)} />
              <label htmlFor={`${time.startTime}`}>{time.startTime} - {time.closeTime}</label>
            </div>
          ))}
        </TimeContainer>
        <TimeData className="clearfix pt15 flex spaceBetween">
          {this.state.tickets.map((ticket, i) => (
            <div className="iblock flexFull" key={i}>
              <p className="f12 m0 pfc4"> {ticket.nationality === ticket.person ?
                ticket.nationality : `${ticket.nationality} ${ticket.person}`}</p>
              <p className="f14 fwb m0">{ticket.ticket}</p>
            </div>
          ))}
        </TimeData>
      </div>
    );
  }
}

EntryFeesDaysData.propTypes = {
  timing: PropTypes.array.isRequired,
  uniqueId: PropTypes.string
};

EntryFeesDaysData.defaultProps = {
  uniqueId: ''
};

export default EntryFeesDaysData;
