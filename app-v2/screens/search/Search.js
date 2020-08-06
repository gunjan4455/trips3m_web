import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { SearchCard, UserIntent } from './parser';
import HeaderCommon from 'modules/header/HeaderCommon';
import { slider } from './slider';
import { testimonials } from './testimonials';
import { travelerStories } from './travellerStories';
import { packages } from './packages';
import { destinations } from './destinations';
import { quickInfo } from './quickInfo';

import './search.scss';

class Search extends Component {

  static propTypes = {
    searchResult: PropTypes.object,
    location: PropTypes.object.isRequired
  };

  static defaultProps = {
    searchResult: {}
  };

  constructor (props) {
    super(props);
  }

  render () {
    const {
      searchResult: { data: parsedData }
    } = this.props;
    const {
      parsed: {
        orderedData,
        userIntent,
        primaryDestinations,
        query: searchString
      },
      raw: {
        data:{
          view_all_url: viewAllUrl
        }
      }
    } = parsedData;

    const isSingleDestination = primaryDestinations ?
      primaryDestinations.length === 1: false;
    const destinationsTemplate = primaryDestinations ? (
      <span className={'search-result-query'}>
        {primaryDestinations.join(', ')}
      </span>
    ) : null;

    const queryTemplate = primaryDestinations ? (
      <span className={'search-result-query'}>{searchString}</span>
    ) : null;

    const searchComponents = [];
    if (orderedData instanceof Array) {
      orderedData.forEach(({ name, data, viewAll }, key) => {
        switch (name) {
          case SearchCard.PlacesToVisit.name:
            {
              const title = <span>Places to visit in {destinationsTemplate}</span>;
              const heading = `Let the experts guide you to the best of ${
                !isSingleDestination ? 'these' : 'this'
              } mesmerizing destination${!isSingleDestination ? 's' : ''}`;

              searchComponents.push(slider({ viewAll, ...data, key, title, heading }));
            }
            break;
          case SearchCard.ThingsToDo.name:
            const title = <span>Things to do in {destinationsTemplate}</span>;
            const heading =
              'Your list of the best things to do, compiled on the basis of actual traveler experiences';

            searchComponents.push(slider({ viewAll, ...data, key, title, heading }));

            break;
          case SearchCard.Blogs.name:
            const blogs = [];
            const travelagues = [];

            data.list.forEach(b => {
              const {storyDate, postDate, ...newBlog} = b;
              if (newBlog.tags instanceof Array && newBlog.tags.indexOf('travelogues') < 0) {
                blogs.push(newBlog);
              } else {
                travelagues.push(newBlog);
              }
            });
            if (travelagues.length > 0) {
              const heading = (
                <span>
                  Our traveler stories{' '}
                  {userIntent !== UserIntent.DestinationDetail ? (<span>for {destinationsTemplate} </span>) : null}
                </span>
              );
              searchComponents.push(travelerStories({
                list: travelagues, heading, viewAll: '/blog/travelogues'
              }));
            }
            if (blogs.length > 0) {
              searchComponents.push(travelerStories({
                list: blogs,
                heading: 'Exclusive collection of travel blogs',
                subHeading: 'to inspire your next getaway',
                viewAll:'/blog'
              }));
            }
            break;
          case SearchCard.Testimonials.name:
            // Traveller Reviews
            searchComponents.push(testimonials({
              list: data.list,
              destinationsTemplate,
              userIntent
            }));
            break;
          case SearchCard.PackageCard.name: {
            // Packages
            const heading = (
              <span className={'search-result-title'}>
                Popular packages related to
                <span className='search-result-query pl4 ellipsis iblock search-query-tag'>{searchString}</span>
              </span>
            );
            const subHeading =
              'Unlimited choices. Trusted agents. Best prices. Happy memories.';

            const isSlider = key !== 0;
            const viewAll = isSingleDestination ? viewAllUrl: `/tour-packages`;
            searchComponents.push(packages({ ...data, isSlider, heading, subHeading, viewAll }));

            break;
          }
          case SearchCard.DestiantionCard.name: {
            let heading;
            const subHeading =
              'Unlimited choices. Customised vacations. Happy memories';

            // Trending Destinations
            if (userIntent === UserIntent.MultiplePackages) {
              heading = (
                <span className='search-result-title'>Explore top destinations related to {queryTemplate}</span>
              );
            } else {
              heading = (
                <span className='search-result-title'>Top destination suggestions for {queryTemplate}</span>
              );
            }

            const isSlider =  key !== 0; //userIntent === UserIntent.MultiplePackages;

            const viewAll = isSingleDestination ? '/all-places': null;

            searchComponents.push(destinations({ ...data, isSlider, heading, subHeading, viewAll }));

            break;
          }
          case SearchCard.CityBlock.name:
            // Quick Info
            searchComponents.push(quickInfo(data));
            break;
        }
      });
    }

    return (
      <div className='clearfix sbc5'>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Search results for {searchString ? searchString: ''}</title>
        </Helmet>
        <HeaderCommon location={this.props.location} />
        <div className='col-xs-12 sbc5 pl0 pr0'>
          <div className='p15 pl8 pr8'>
            <p className='f12 m0'>
              Showing most relevant results for{' '}
              <span className='search-result-query'> {searchString}.</span>
            </p>
          </div>
          {searchComponents.map((searchComponent, index) => {
            return searchComponent;
          })}
        </div>
      </div>
    );
  }
}

export default Search;
