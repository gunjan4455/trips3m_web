import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { goBack, push } from 'react-router-redux';
import { connect } from 'react-redux';

import {
  getSelectionList,
  isSelectionListVisible
} from 'reducers/destinationListing/destinations';
import { toggleSelectionList } from 'actions/destinationListing';
import { DESTINATION_LIST_CLICK, DFEAULT_VALUE, CATEGORY_CLICK, trackSegment } from 'actions/segmentEvents';
import { whatsappUrl } from 'helpers/urlHelpers';
import { WhiteShareIcon } from 'helpers/Icon/Icon';
import { BlackShareIcon } from 'helpers/Icon/Icon';

import './Header.scss';

export const TripTypeList = ({
  selectionList,
  selectedItem,
  toggleSelection
}) => (
  <div className="row row- absolute wfull category-list">
    <ul>
      {Object.keys(selectionList).map(item => (
        <li key={item}><Link
          to={selectionList[item].url}
          className={(selectedItem === item) ? 'selected-category' : ''}
          onClick={(e) => {
            toggleSelection();
            if (selectionList[item].name === 'All') {
              trackSegment({
                event: DESTINATION_LIST_CLICK,
                section: 'Header Section',
                object: '',
                cta: selectionList[item].name,
                category: `Destination List: ${selectionList[item].name}`,
                destination_list: selectionList[item].name,
                destination_id: selectionList[item].name,
                value: DFEAULT_VALUE,
                label: `Destination Type: ${selectionList[item].name}`
              });
            } else {
              trackSegment({
                event: CATEGORY_CLICK,
                section: 'Top Dropdown',
                object: '',
                cta: e.target.text,
                category: `Category Type: ${e.target.text}`,
              });


            }
          }}
        >
          {selectionList[item].name}
        </Link></li>
          ))}
    </ul>
    <div className="fix-layer-suggestion" onClick={toggleSelection}/>
  </div>
  );

TripTypeList.propTypes = {
  selectionList: PropTypes.object.isRequired,
  selectedItem: PropTypes.string.isRequired,
  toggleSelection: PropTypes.func.isRequired,
};

export class HeaderTitle extends Component {

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { toggleSelection,selectionListVisible } = this.props;
    const scrollTop = window.scrollY;
    if (scrollTop > 100 && selectionListVisible) {
      toggleSelection();
    }
  };

  dropDownTitle = (title, category) => {
    if (category) {
      if (title === 'All') {
        return 'Top Places';
      }
      return `Top Places - ${title}`;
    }
    return `Weekend Getaways - ${title}`;
  };

  renderSubHeading = (showTitleAsH1, plpHeading, title, isRatingSchemaEnabled) => {
    if (plpHeading) {
      return <h2 className="fw4 flexFull">{plpHeading}</h2>;
    } else if (showTitleAsH1) {
      return <h1 className="fw4 flexFull" property={isRatingSchemaEnabled ? "name" : null}>{title}</h1>;
    } else {
      return <p className="fw4 flexFull">{title}</p>;
    }
  };

  render() {
    const {
      goBackState,
      selectionList,
      selectedItem,
      toggleSelection,
      selectionListVisible,
      title,
      tripTypeListShown,
      category, backUrl,
      showShare,
      showBlackShare,
      heading, url,
      showTitleAsH1,
      plpHeading,
      isRatingSchemaEnabled
    } = this.props;

    let subHeader = null;
    if (tripTypeListShown) {
      subHeader = (
        <div className="button-drop-category flexFull">
          <button onClick={toggleSelection}>
            <h1 className="fw4 iblock">
              {this.dropDownTitle(selectionList[selectedItem].name, category)}
            </h1>
            <span className="down-arrow-destination" />
          </button>
          <div className={(selectionListVisible) ? '' : 'hide'}>
            <TripTypeList
              selectionList={selectionList}
              selectedItem={selectedItem}
              toggleSelection={toggleSelection}
            />
          </div>
        </div>
      );
    } else {
      subHeader = this.renderSubHeading(showTitleAsH1, plpHeading, title, isRatingSchemaEnabled);
    }

    return (
      <div className="header-title">
        <div className="f16 sfcw header-title-p flex alignCenter spaceBetween">
          <button onClick={() => goBackState(backUrl)} className="back-arrow">go back</button>
          {subHeader}
          {
            showShare ?
              <span className="share-logo-right fright">
              <a href={whatsappUrl(heading, url)}>
                {
                  showBlackShare ?  <BlackShareIcon className="absolute-center wfull"/> :  <WhiteShareIcon className="absolute-center wfull" />
                }

              </a>
            </span> : null
          }
        </div>
      </div>
    );
  }
}

HeaderTitle.propTypes = {
  goBackState: PropTypes.func.isRequired,
  selectionList: PropTypes.object,
  selectedItem: PropTypes.string,
  toggleSelection: PropTypes.func,
  selectionListVisible: PropTypes.bool,
  title: PropTypes.string,
  tripTypeListShown: PropTypes.bool,
  category: PropTypes.string,
  backUrl: PropTypes.string,
  showShare: PropTypes.bool,
  showBlackShare: PropTypes.bool,
  heading: PropTypes.string,
  url: PropTypes.string,
  showTitleAsH1: PropTypes.bool,
  plpHeading: PropTypes.string,
  isRatingSchemaEnabled: PropTypes.bool
};

HeaderTitle.defaultProps = {
  selectionList: { all: { name: 'All', url: '/All-Places' } },
  selectedItem: 'all',
  toggleSelection: () => {},
  selectionListVisible: false,
  title: '',
  tripTypeListShown: false,
  category: '',
  backUrl: '',
  showShare: false,
  showBlackShare: false,
  heading: '',
  url: '',
  showTitleAsH1: true,
  plpHeading: '',
  isRatingSchemaEnabled: false
};

export default connect(
  state => (
    {
      selectionList: getSelectionList(state),
      selectedItem: state.destinationListing.destinationListing.selectedItem,
      selectionListVisible: isSelectionListVisible(state),
      category: state.destinationListing.destinationListing.category,
      weekendDestination: state.destinationListing.destinationListing.weekendDestination,
    }
  ),
  dispatch => ({
    goBackState: (params) => params ? dispatch(push(params)) : dispatch(goBack()),
    toggleSelection: () => dispatch(toggleSelectionList())
  })
)(HeaderTitle);
