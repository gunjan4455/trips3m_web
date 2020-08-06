import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Parser } from 'html-to-react';

import ShowMore from './ShowMore';

const parser = new Parser();

const overviewSplitAfterShowMore = (overviewMoreText) => {
  try {
    return overviewMoreText.replace(/<br \/>|<\/br>/g, '').replace('</span></p>\r\n', '');
  } catch (err) {
    return overviewMoreText;
  }
};

class Overview extends PureComponent {
  overviewContent = () => {
    const { description, footerDescription } = this.props;
    const desc = description && description.split('\r\n').filter(p => p.length) || [];

    if (!desc.length) {
      return null;
    }

    const footerDesc = footerDescription ? `<br>${footerDescription}` : '';

    return (
      <ShowMore
        wrapText={parser.parse(desc[0])}
        moreText={parser.parse(overviewSplitAfterShowMore(desc.slice(1).join('\n').concat(footerDesc)))}
      />
    );
  };

  render() {
    return (
      <div className="row row- row-mw">
        <div className="read-more-box">
          {this.overviewContent()}
        </div>
      </div>
    );
  }
}

Overview.defaultProps = {
  footerDescription: '',
  description: ''
};

Overview.propTypes = {
  description: PropTypes.string,
  footerDescription: PropTypes.string
};

export default Overview;
