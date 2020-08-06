import React from 'react';
import './DestinationData.scss';
import DestinationHighlight from './DestinationHighlight';
import DestinationHotel from './DestinationHotel';
import DestinationHowToReach from './DestinationHowToReach';
import PropTypes from 'prop-types';


const DestinationData = ({
                           placeDescription, placeName, hotelDetails, isVisa,
                           howToReach, activeTab, setActiveDetailsTab
                         }) => {
  const airportDetails = () => {
    if (!howToReach.airport_details) {
      return null;
    }
    return (
      <DestinationHowToReach
        heading="By Air"
        subHeading="Nearest Airport"
        text={`The major airport in ${placeName} is \
        ${howToReach.airport_details.nearest_airport} \
        (Code ${howToReach.airport_details.airport_code})`}
      />
    );
  };
  const busDetails = () => {
    if (!howToReach.bus_details) {
      return null;
    }
    return (
      <DestinationHowToReach
        heading="By Road"
        subHeading="Major Bus Stand"
        text={`The major stand in ${placeName} is \
        ${howToReach.bus_details.road_city}`}
      />
    );
  };
  const trainDetails = () => {
    if (!howToReach.train_details) {
      return null;
    }
    return (
      <DestinationHowToReach
        heading="By Train"
        subHeading="Nearest Railway Station"
        text={`The nearest railway station in ${placeName} \
          is ${howToReach.train_details.nearest_station} \
          (Code ${howToReach.train_details.station_code})
        ` }
      />
    );
  };
  const handleClick = value => () => {
    setActiveDetailsTab(value);
    // document.getElementById('DestinationHighlight').classList.add('hidden-data');
    // document.getElementById('test').classList.remove('removeMe');
  };

  const highLightedTab = () => {
    switch (activeTab) {
      case 'DestinationHighlight':
        return (<div className='row row- p8'>
          <DestinationHighlight
            name={placeName}
            description={placeDescription}
            isVisa={isVisa}
          />
        </div>);
      case 'DestinationHotel':
        return (<div className='pt8'><DestinationHotel hotelDetails={hotelDetails} /></div>);
      case 'DestinationHowToReach':
        return (<div className='row row- p8'>
          { airportDetails() }
          { trainDetails() }
          { busDetails() }
        </div>);
      default:
        return (<DestinationHighlight
          name={placeName}
          description={placeDescription}
          isVisa={isVisa}
        />);
    }
  };
  return (
    <div className= 'row row- sbcw'>
      <div className= 'row row- destination-data'>
        <div className='destination-data-label-box'>
          <div className='destination-data-label'>
            <input name="destinationdata-radio" onClick={handleClick('DestinationHighlight')} defaultChecked="true" type="radio" id="Highlights" />
            <label htmlFor="Highlights">Highlights</label>
            <input name="destinationdata-radio" onClick={handleClick('DestinationHotel')} type="radio" id="Hotel" />
            <label htmlFor="Hotel" >Hotels</label>
            <input name="destinationdata-radio" onClick={handleClick('DestinationHowToReach')} type="radio" id="HowToReach" />
            <label htmlFor="HowToReach" >How To Reach</label>
          </div>
        </div>
        {highLightedTab()}
      </div>
    </div>
  );
};

DestinationData.propTypes = {
  placeDescription: PropTypes.string.isRequired,
  placeName: PropTypes.string.isRequired,
  hotelDetails: PropTypes.array.isRequired,
  isVisa: PropTypes.bool.isRequired,
  howToReach: PropTypes.object,
  activeTab: PropTypes.string,
  setActiveDetailsTab: PropTypes.func.isRequired
};

DestinationData.defaultProps = {
  activeTab: 'DestinationHighlight',
  placeDescription: {
    description: 'Required',
    name: 'Required',
    isVisa: false
  },
  howToReach: {
    airport_details: {},
    bus_details: {},
    train_details: {},
  },
  hotelDetails: {
    hotelName: 'Required'
  }

};

export default DestinationData;
