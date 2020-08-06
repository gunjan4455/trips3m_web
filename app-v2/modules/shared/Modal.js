/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styles from './modal.cm.scss';
import {
  CloseWhite
} from 'helpers/Icon/Icon';

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
    width: 'calc(100% - 70px)',
    maxHeight: '80vh',
    maxWidth: '100%',
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
    overflow: 'inherit',
    bottom: 'auto',
    zIndex: '101',
    padding: '0',
    top: 0,
    left: 0,
    borderRadius: '0',
    width: '100%',
    maxWidth: '100%',
    height: '100%',
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
  static defaultProps = {
    trigger: <button>Please supply a custom trigger component</button>,
    onAfterModalOpen: () => {},
    onRequestCloseCustom: () => {},
    customCloseTrigger: false,
    fullView: false
  };

  static propTypes = {
    trigger: PropTypes.node,
    children: PropTypes.node.isRequired,
    onAfterModalOpen: PropTypes.func,
    onRequestCloseCustom: PropTypes.func,
    customCloseTrigger: PropTypes.bool,
    fullView: PropTypes.bool,
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

  coomponentDidUpdate(prevProps) {
    if (!this.state.isOpen && this.props.isOpen) {
      this.openModal();
    }
    if(this.props.customCloseTrigger && this.state.isOpen){
      this.setState({ isOpen: false });
    }
    if (this.props.closeModal) {
      this.closeModal();
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
    const { fullView } = this.props;
    return (
      <div>
        { !this.props.isOpen && this.props.trigger ?
          <span className="iblock wfull" onClick={this.openModal}>
            { this.props.trigger }
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
        >
          <button className={styles.close} onClick={this.closeModal}><CloseWhite className="block wfull hfull at_close" /></button>
          { this.props.children }
        </Modal>
      </div>
    );
  }
}

export default ModalComponent;
