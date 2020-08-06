import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { whatsAppUrl } from 'amp/helpers/urlHelpers';

export const TripTypeList = ({
  selectionList,
  selectedItem,
  toggleSelection,
}) => (
  <div className="row row- absolute wfull category-list">
    <ul>
      {Object.keys(selectionList).map(item => (
        <li key={item}><Link
          to={selectionList[item].url}
          className={(selectedItem === item) ? 'selected-category' : ''}
          onClick={(e) => {
            toggleSelection();
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

  renderSubHeading = (showTitleAsH1, plpHeading, title, isRatingSchemaEnabled) => {
    if (plpHeading) {
      return <h2 className="fw4 flexFull">{plpHeading}</h2>;
    } else if (showTitleAsH1) {
      return <h1 className="fw4 flexFull f16 m0 heading-title-amp" property={isRatingSchemaEnabled ? "name" : null}>{title}</h1>;
    } else {
      return <p className="fw4 flexFull">{title}</p>;
    }
  };

  render() {
    const {
      title,
      showShare,
      showBlackShare,
      heading, url,
      showTitleAsH1,
      plpHeading,
      backUrl,
      isRatingSchemaEnabled
    } = this.props;

    let subHeader = null;

    subHeader = this.renderSubHeading(showTitleAsH1, plpHeading, title, isRatingSchemaEnabled);

    return (
      <div className="header-title">
        <div className="f16 sfcw flex alignCenter spaceBetween">
          <a className="back-arrow" href={backUrl}>go back</a>
          {subHeader}
          {
            showShare ?
              <span className="share-logo-right fright">
                <a><amp-social-share type="system"
                                     data-param-url={whatsAppUrl(heading, url)}>
                </amp-social-share></a>
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

export default HeaderTitle;
