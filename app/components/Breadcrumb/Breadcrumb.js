/* eslint-disable react/no-array-index-key */
import React from 'react';
// import { asyncConnect } from 'redux-connect';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Breadcrumb.scss';
import { loadBreadCrumbs } from '../../actions/breadCrumbs';


// @asyncConnect([
//   {
//     promise: ({ store: dispatch, url }) => {
//       console.log('in promise');
//       console.log(url);
//       return dispatch(loadBreadCrumbs(url));
//     }
//   }
// ])
@connect(
  state => ({
    breadcrumbs: state.breadcrumbs.breadcrumbs,
  }),
  { loadBreadCrumbs }
)
class Breadcrumb extends React.Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    breadcrumbs: PropTypes.array,
    loadBreadCrumbs: PropTypes.func.isRequired,
    packageId: PropTypes.number
  };

  static defaultProps = {
    breadcrumbs: [],
    packageId: 0
  };

  componentDidMount() {
    this.props.loadBreadCrumbs(this.props.url);
  }


  render() {
    const queryParam = this.props.packageId === 0 ? "" : "?id=" + this.props.packageId;
    return (
      <div className='row row- p8 sbc5'>
        <ol className='breadcrumb-list'>
          {
            this.props.breadcrumbs.map((breadcrumb, index, ary) => (
              <li key={`${breadcrumb.name}_${index}`}>
                {
                  (index !== ary.length - 1) ?
                    <Link to={breadcrumb.url} target="_blank">{`${breadcrumb.name}`}</Link> :
                    <Link to={breadcrumb.url + queryParam}>{`${breadcrumb.name}`}</Link>
                }
              </li>
            ))
          }
        </ol>
      </div>
    );
  }
}

export default Breadcrumb;
