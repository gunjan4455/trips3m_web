import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Parser } from 'html-to-react';

import Modal from 'modules/shared/GenericModal';
import NurturingForm from './form';
import { RightGrey } from 'helpers/Icon/Icon';
import { ORGANISM_CLICKED, ORGANISM_VIEWED } from 'actions/segmentEvents';

import styles from './NurturingOption.cm.scss';

const htmlToReactParser = new Parser();

class NurturingOption extends PureComponent {


  displayCard = () => {
    const { text, subText, disabled } = this.props;
    return (
      <div className={`block p15 relative at_nlpCard ${disabled ? 'disabled' : ''} ${styles.nurturingTab}`}
           onClick={this.handleCardClick}>
        <p className="sfc8 mb4">{text}</p>
        <span className="pfc4 f12">{subText}</span>
        <div className={`absolute ${styles.rightArrow}`}>
          <RightGrey/>
        </div>
      </div>
    );
  };

  handleCardClick = () => {
    const { redirection, trackSegmentEvent, text, savePreferencesAndRedirect, disabled, preference } = this.props;
    if(disabled) {
      return;
    }
    trackSegmentEvent({
      event: ORGANISM_CLICKED,
      object: text
    });

    if(redirection) {
      return savePreferencesAndRedirect();
    }
    else{ // case when modal opens
      const cta = `hotel category ${preference.maxHotelRating}_days ${preference.days}_flights ${preference.flights}`;
      return trackSegmentEvent({
        event: ORGANISM_VIEWED,
        section: 'Initial Preferences',
        cta,
      });
    }
  };

  render() {
    const { title, Icon, redirection, hideBottomBorder, savePreferencesAndRedirect, trackSegmentEvent, disabled } = this.props;
    return (
      <div className={`p24 ${ hideBottomBorder ? '' : 'bb mt24' }`}>
        <div className="at_nurturingOption">
          <div className="flex mb24">
            <div className="icon-24 relative mr15">
              <Icon />
            </div>
            <h3 className="f16a fw7">{htmlToReactParser.parse(title)}</h3>
          </div>
          { redirection ? this.displayCard() :
            <div>
              <Modal
                trigger={this.displayCard()}
                disabled={disabled}
                fullView
                isWhiteIcon
                hasCustomClose={true}
              >
                <div className="absolute t0 wfull">
                  <NurturingForm
                    savePreferencesAndRedirect={savePreferencesAndRedirect}
                    trackSegmentEvent={trackSegmentEvent}
                  />
                </div>
              </Modal>
            </div>
            }
        </div>
      </div>
    );
  }
}

NurturingOption.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
  Icon: PropTypes.func.isRequired,
  redirection: PropTypes.bool,
  hideBottomBorder: PropTypes.bool,
  savePreferencesAndRedirect: PropTypes.func,
  trackSegmentEvent: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  preference: PropTypes.object.isRequired
};

NurturingOption.defaultProps = {
  hideBottomBorder: false,
  redirection: false,
  savePreferencesAndRedirect: null
};

export default NurturingOption;
