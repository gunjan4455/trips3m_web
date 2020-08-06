import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import Modal from 'modules/shared/GenericModal';
import styles from 'app-v2/modules/home/letsGo/letsGo.cm.scss';
import HowItWorksVideo from 'modules/howItWorks/HowItWorksVideo';

const FormOneClickDetail = {
  section: 'Banner Section',
  cta: 'Lets go'
};

class HowItWorks extends Component {
  state = { modal: false};

  openModal=() => {
    this.setState({modal: true});
  }

  closeModal=() => {
    this.setState({modal: false});
  }

  render() {
    const { handleLeadformModal } = this.props;
    return (
      <div className="sbcw border radius4 p24 at_expertCallback">
        <p className="f20 fw9 pfc3 mb8">
          How it works
        </p>
        <p className="p14 pfc4 mb15">Real travelers. Real stories. Real opinions to help you make the right choice.</p>
        <div className="flexFull ml4">
          <Modal
            trigger={
              <div className="flex justifyEnd">
                <span className="f14 fw7 sfc1">Know More</span>
              </div>
            }
            isOpen={this.state.modal}
            customCloseTrigger={!this.state.modal}
            fullView={false}
            hasNoClose
          >
            <div className="flex wfull hfull flexFull">
              <HowItWorksVideo
                //trackSegmentEvent={this.props.trackSegment}
              />
            </div>
          </Modal>
        </div>
      </div>
    );
  }

}

HowItWorks.propTypes = {
  handleLeadformModal: PropTypes.func
};

HowItWorks.defaultProps = {
  handleLeadformModal: () => {}
};

export default HowItWorks;
