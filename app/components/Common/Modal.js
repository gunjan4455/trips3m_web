/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styled from '@emotion/styled';
import {
  CloseWhite
} from 'helpers/Icon/Icon';

const CloseIt = styled.button({
  position: 'absolute',
  right: '-30px',
  top: '0',
  width: '24px',
  height: '24px',
  padding: '4px',
  zIndex: '2',
  overflow: 'hidden',
});
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    overflow: 'inherit',
    bottom: 'auto',
    zIndex: '101',
    padding: '0',
    borderRadius: '0',
    transform: 'translate(-50%, -50%)'
  }
};

class ModalComponent extends React.Component {

  static propTypes = {
    trigger: PropTypes.node,
    children: PropTypes.node.isRequired,
    onAfterModalOpen: PropTypes.func,
    onRequestCloseCustom: PropTypes.func,
    customCloseTrigger: PropTypes.bool
  };

  static defaultProps = {
    onAfterModalOpen: () => {},
    onRequestCloseCustom: () => {},
    customCloseTrigger: false,
    trigger: <button>Please supply a custom trigger component</button>,
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

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.isOpen && this.props.isOpen) {
      this.openModal();
    }
    if(this.props.customCloseTrigger){
      this.setState({ isOpen: false });
    }
  }

  openModal() {
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
    return (
      <div>
        { !this.props.isOpen ?
          <span className="iblock wfull" onClick={this.openModal}>
            { this.props.trigger }
          </span> :
          null
        }
        <Modal
          isOpen={this.state.isOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Travel Triangle Modal"
          ariaHideApp={false}
        >
          <CloseIt onClick={this.closeModal}><CloseWhite className="block wfull hfull at_close" /></CloseIt>
          { this.props.children }
        </Modal>
      </div>
    );
  }
}

export default ModalComponent;
