import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { matchRoutes } from "react-router-config";

import Overview from 'screens/cityBlock/overview';
import BestTimeToVisit from 'screens/cityBlock/bestTimeToVisit';
import ThingsToDo from 'screens/cityBlock/thingsToDo';
import PlacesToVisit from 'screens/cityBlock/placesToVisit';
import HowToReachContainer from 'screens/cityBlock/howToReach';
import EssentialInfo from 'screens/cityBlock/essentialInfo';
import Tips from 'screens/cityBlock/tips';
import EntryFees from 'screens/cityBlock/entryFees';
import Timings from 'screens/cityBlock/timings';
import { useQuery } from 'containers/Listing/parseFilters';
const HowToReach = HowToReachContainer.container;
const HowToReachFrom = HowToReachContainer.fromTemplateContainer;

const CityBlockRoutes = (props) => {
  const { route, location: { search } } = props;
  const query = useQuery(search);
  const baseUrl= '/:destination-tourism';
  return (
    <Switch>
      <Route path={`${baseUrl}/:city?/places-to-visit/:scheme/timings`}render={(props) => <Timings {...props } route={route} />} />
      <Route path={`${baseUrl}/:city?/places-to-visit/:scheme/tips`} render={(props) => <Tips {...props } route={route} />} />
      <Route path={`${baseUrl}/:city?/places-to-visit/:scheme/entry-fees`} render={(props) => <EntryFees {...props } route={route} />} />
      <Route path={`${baseUrl}/:city?/places-to-visit/:scheme/how-to-reach`} render={(props) => <HowToReach {...props } route={route} />} />
      <Route path={`${baseUrl}/:city?/places-to-visit/:scheme`} render={(props) => <Overview {...props } route={route} />} />
      <Route path={`${baseUrl}/:city?/places-to-visit`} render={(props) => <PlacesToVisit {...props } route={route} />} />
      <Route path={`${baseUrl}/:city?/things-to-do/:scheme/timings`}render={(props) => <Timings {...props } route={route} />} />
      <Route path={`${baseUrl}/:city?/things-to-do/:scheme/tips`} render={(props) => <Tips {...props } route={route} />} />
      <Route path={`${baseUrl}/:city?/things-to-do/:scheme/entry-fees`} render={(props) => <EntryFees {...props } route={route} />} />
      <Route path={`${baseUrl}/:city?/things-to-do/:scheme/how-to-reach`} render={(props) => <HowToReach {...props } route={route} />} />
      <Route path={`${baseUrl}/:city?/things-to-do/:scheme`} render={(props) => <Overview {...props } route={route} />} />
      <Route path={`${baseUrl}/:city?/things-to-do`} render={(props) => <ThingsToDo {...props } route={route} />} />
      <Route path={`${baseUrl}/:city?/essential-info`} render={(props) => <EssentialInfo {...props } route={route} />} />
      <Route path={`${baseUrl}/:city?/how-to-reach`} render={(props) => <HowToReach {...props } route={route} />} />
      <Route path={`${baseUrl}/:city?/best-time-to-visit`} render={(props) => <BestTimeToVisit {...props } route={route} />} />

      <Route path={`${baseUrl}/experience/:category`} experience={true}  render={(props) => {
        if(query.t && query.t === 'ptv') {
          return <PlacesToVisit {...props} route={route} />;
        }
        return <ThingsToDo {...props} route={route} />;
      }} />
      <Route path={`${baseUrl}/:city?/how-to-reach-from-:from`} render={(props) => <HowToReachFrom {...props } route={route} />} />
      <Route path={`${baseUrl}/:city`} render={(props) => <Overview {...props } route={route} />} />
      <Route path={`${baseUrl}`} render={(props) => <Overview {...props } route={route} />} />

    </Switch>
  );
};

CityBlockRoutes.propTypes = {
  route: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  exitIntent: PropTypes.func.isRequired
};

export default CityBlockRoutes;
