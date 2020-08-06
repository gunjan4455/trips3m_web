/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styled from '@emotion/styled';
import { CloseDark, CloseWhite} from 'helpers/Icon/Icon';

const CloseIt = styled.button({
  position: 'absolute',
  right: '5px',
  top: '0px',
  width: '36px',
  height: '36px',
  padding: '12px',
  zIndex: '2',
  overflow: 'hidden',
});

const CloseItLeft = styled.button({
  position: 'fixed',
  left: '5px',
  top: '3px',
  width: '36px',
  height: '36px',
  padding: '12px',
  zIndex: '6',
  overflow: 'hidden',
});
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    overflow: 'auto',
    bottom: 'auto',
    zIndex: '101',
    padding: '0',
    borderRadius: '0',
    width: '94%',
    maxWidth: '600px',
    transform: 'translate(-50%, -50%)'
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1001,
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  },
};
const customStylesFullView = {
  content: {
    right: 'auto',
    overflow: 'auto',
    bottom: 'auto',
    zIndex: '101',
    padding: '0',
    top: 0,
    left: 0,
    borderRadius: '0',
    width: '100%',
    maxWidth: '100%',
    height: '100%',
    paddingTop: '50px'
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1001,
    backgroundColor: 'rgba(0, 0, 0, 1)'
  },
};

class ModalComponent extends React.Component {

  static propTypes = {
    trigger: PropTypes.node,
    children: PropTypes.node.isRequired,
    onAfterModalOpen: PropTypes.func,
    onRequestCloseCustom: PropTypes.func,
    customCloseTrigger: PropTypes.bool,
    fullView: PropTypes.bool,
    hasCustomClose: PropTypes.bool,
    hasNoClose: PropTypes.bool,
    isWhiteIcon: PropTypes.bool,
    isTriggerFullView: PropTypes.bool,
    customClass: PropTypes.string,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    onAfterModalOpen: () => {
    },
    onRequestCloseCustom: () => {
    },
    customCloseTrigger: false,
    trigger: <button>Please supply a custom trigger component</button>,
    fullView: false,
    hasCustomClose: false,
    hasNoClose: false,
    isWhiteIcon: false,
    isTriggerFullView: false,
    customClass: '',
    disabled: false
  };

  constructor() {
    super();

    this.state = {
      isOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.state.isOpen && nextProps.isOpen) {
      this.openModal();
    }
    if (this.state.isOpen && nextProps.customCloseTrigger) {
      this.closeModal();
    }
  }

  openModal() {
    if(this.props.disabled) {
      return;
    }
    this.setState({
      isOpen: true,
    });
  }

  closeModal() {
    this.setState({
      isOpen: false,
    });
    if (this.props.onRequestCloseCustom) {
      this.props.onRequestCloseCustom();
    }
    document.body.style.overflow = '';
  }

  afterOpenModal() {
    this.props.onAfterModalOpen();
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    this.closeModal();
  }

  render() {
    const { fullView, hasCustomClose, hasNoClose, isWhiteIcon, isTriggerFullView, customClass } = this.props;
    return (
      <div className={isTriggerFullView ? 'wfull': ''}>
        {!this.props.isOpen ?
          <span className="block wfull" onClick={this.openModal}>
            {this.props.trigger}
          </span> :
          null
        }
        <Modal
          isOpen={this.state.isOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={fullView ? customStylesFullView : customStyles}
          contentLabel="Travel Triangle Modal"
          ariaHideApp={false}
          shouldCloseOnOverlayClick={true}
          className={customClass}
        >
          {
            hasCustomClose ?
              <CloseItLeft onClick={this.closeModal} className={`at_close ${hasNoClose ? 'nblock' : ''}`}>
                {isWhiteIcon ? <CloseWhite className="block wfull hfull" /> : <CloseDark className="block wfull hfull" />}
              </CloseItLeft> :
              <CloseIt onClick={this.closeModal} className={`at_close ${hasNoClose ? 'nblock' : ''}`}>
                {isWhiteIcon ? <CloseWhite className="block wfull hfull" /> : <CloseDark className="block wfull hfull" />}
              </CloseIt>
          }
          {this.props.children}
        </Modal>
      </div>
    );
  }
}

export default ModalComponent;
