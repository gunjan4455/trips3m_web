import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getSelectedPdms } from 'helpers/pdmHelpers';
import { PdmContainer } from './G';

class Pdm extends React.Component {

  static propTypes = {
    setMessage: PropTypes.func.isRequired,
    pdmsData: PropTypes.object.isRequired,
    selectedPdm: PropTypes.string.isRequired,
  };

  static defaultProps = {
    setMessage: () => {
    }
  };

  constructor(props) {
    super(props);
    this.onPdmSelection = this.onPdmSelection.bind(this);
  }

  onPdmSelection(pdm) {
    this.props.setMessage(pdm.message_text);
  }

  render() {
    const { pdmsData, selectedPdm } = this.props;
    const pdmList = getSelectedPdms(pdmsData, selectedPdm);

    if (!pdmList || !pdmList.length) {
      return null;
    }

    return (
      <PdmContainer className="clearfix relative">
        <ul>
          {
            pdmList.map((item, index) =>
              <li key={index} >
                <a className={`at_${index}`} onClick={() => this.onPdmSelection(item)}>
                  {item.pdm_text}
                </a>
              </li>
            )
          }
        </ul>
      </PdmContainer>
    );
  }
}

export default Pdm;

