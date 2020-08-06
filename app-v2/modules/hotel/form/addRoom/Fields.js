import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NumberFormatter from 'modules/preferences/components/NumberFormatterGeneric';
import { Travelers } from 'helpers/Icon/Icon';

import styles from './field.cm.scss';

class FieldsComponent extends Component {

  render() {
    const { rooms, deletedIndex } = this.props;
    return (
      <div>
        <div className={`mb32 iconBlock relative ${styles.travelersIcon}`}>
          <Travelers />
        </div>
        {
          rooms.map((field, index) => (
            <div key={index} className={`row ${index > 0 ? 'bt pt24 at_roomDetailCard' : ''} ${index === deletedIndex ? styles.deleted: ''}`}>
              <div className="col-xs-12">
                <div className="flex spaceBetween">
                  <p className="f16 fw9 pfc1 mb24">{`Room ${index + 1}`}</p>
                  {index ?
                    <div className="text-right">
                      <button
                        type="button"
                        title="Remove"
                        className="sfc1 f16 fw7 mb24 p0 at_deleteRoom"
                        onClick={() => this.props.removeRoom(index)}
                      >Delete
                      </button>
                    </div> : null
                  }
                </div>
                <div className="mb32 flex">
                  <div className="flexFull">
                    <p className="f16 fw7 m0 mb8">Adult</p>
                    <p className="f14 pfc4 fwn">Age: 12yrs and above</p>
                  </div>
                  <div className={`flexFull flex justifyEnd ${styles.numberFormatter}`}>
                    <NumberFormatter
                      value={field.adults}
                      onChange={(val) => this.props.updateRoom({ ...field, adults: val }, index)}
                      name="adult_count"
                      type="number"
                      placeholder="Adults (12+ yrs)"
                    />
                  </div>
                </div>
                <div className="mb24 flex">
                  <div className="flexFull">
                    <p className="f16 fw7 m0 mb8">Children</p>
                    <p className="f14 pfc4 fwn">Age: 1 - 12yrs</p>
                  </div>
                  <div className={`flexFull flex justifyEnd ${styles.numberFormatter}`}>
                    <NumberFormatter
                      value={field.children}
                      onChange={(val) => this.props.updateRoom({ ...field, children: val }, index)}
                      name="child_count"
                      type="number"
                      placeholder="Children (2-12 yrs)"
                    />
                  </div>
                </div>
              </div>
              {
                index === rooms.length - 1 ?
                  <div className="col-xs-12 mb32 pt24 bt ">
                    <p className="f14 fw7 mb8">Need another room?</p>
                    <button type="button" className="btn-sec-load wfull f14 fw7 at_anotherRoom" onClick={() => this.props.addRoom()}>
                      Add Another Room
                    </button>
                  </div> : null
              }
            </div>
          ))
        }
      </div>
    );
  }
}

FieldsComponent.propTypes = {
  rooms: PropTypes.array.isRequired,
  addRoom: PropTypes.func.isRequired,
  updateRoom: PropTypes.func.isRequired,
  removeRoom: PropTypes.func.isRequired,
  deletedIndex: PropTypes.number
};

FieldsComponent.defaultProps = {
  deletedIndex: -1
};

export default FieldsComponent;
