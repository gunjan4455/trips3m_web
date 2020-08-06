import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _isEmpty from 'lodash/isEmpty';

import styles from './sectionOne.cm.scss';

import { Link } from 'react-router-dom';
import PlaceHolder from './component/PlaceHolder';

export default class Section1 extends Component {
  static propTypes = {
    data: PropTypes.object,
    slug: PropTypes.string,
  };

  static defaultProps = {
    data: {},
    slug: 'tour-packages',
  };

  state = {
    showFormPlaceholder: true
  };

  renderSequentialForm = () => {
    if (window.ReactReduxSequentialForm) {
      window.ReactReduxSequentialForm.render();
      const sequentialFormPlaceholder = document.querySelector('.sequential_form_placeholder_exp');

      if (sequentialFormPlaceholder) {
        sequentialFormPlaceholder.style.display = 'none';
      }
    }
  };

  UNSAFE_componentWillUpdate(nextProps, nextState, nextContext) {
    this.renderSequentialForm();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.renderSequentialForm();
  }

  componentDidMount() {
    const check = setInterval(() => {
      if (window.ReactReduxSequentialForm) {
        this.setState({ showFormPlaceholder: false }, () => {
          this.renderSequentialForm();
          clearInterval(check);
        });
      }
    }, 100);
  }

  isGenericSection = () => {
    const { slug } = this.props;
    return slug.startsWith('tour-packages') || slug.startsWith('rct-tour-packages');
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return !(this.props.slug === nextProps.slug && this.state.showFormPlaceholder === nextState.showFormPlaceholder);
  }

  render() {
    const { data } = this.props;

    if (_isEmpty(data)) {
      return null;
    }

    const { heading, subHeading } = data;


    return (
      <div>
        <div className="relative z1">
          <div className={styles.logoContainer}>
            <Link to="/">
              <img className="img-responsive"
                   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAAAQCAMAAADkmPf9AAAA/FBMVEUAAAD////////////////////////////////////////////////////////J//9WxMH////////////////////////7///b///////////////////////////////+///////////////////6/v7///////////////////9WxMH///////9WxMH///////////9YxcL8//////////////////9XxMH////9///+//9WxMH///9WxMH///////////9cyMJbycnT9vZWxMFXxMFWxMFWxMFXxMJYxcNZxcNWw8FXxMBXxMH///9Yw8BXx8H///9Ww8Cz3tLvAAAAUnRSTlMA+jWzTzd0K/UIhsbBtwsD+X4W696diiIB47x5X1hLQR3XjWpbJxOkkET38ebbrZVwZGEuEO3RzLWDOjHNyL2qoFMeFwb+wqSCbz816oqHXlEpB+chuQAAApJJREFUSMfN0dl2okAUheFdEAWNSouKiAlOUeM8RqMmnXnu8fD+79J1CmPiSlZftv3dILWow2+B92x/hB1L+ccVogF2yNWKniDmY3du92mtnQIMjU1QNgzDfnsGjciGgYbGDJQjU4RsTUml5Lb6LYC84fIhL8vgmzr/NhoALM2fWJA7+QbT9SDA7eezFEoCCJsuoPOlpyH0ME5l6dUBDogNEKc9hGrr/1Hii4gDCYoBKNI51NARsEdRoMRjKiuk6RDgNXYJ4CX4Wi+QMuR5jk5zJyIz0tEm9aD8CjrXS1rTITP0aDRqvMtYOg6ZTg0t8oaLAvlhhiUHayrDnKgMoy2qo1zWfsvw5KAVgMdAdnSJ1cGO6BiQGTZQkbOkm2/yGdchJWNzRhGMMzYoA8iMODCiYphxRQ41VYbopTijyceCGDYZ/LhyFgTB6SRDRFlsZbS0mpiDnQbSU2xG7AqcIUzT9D/JKNGl1tqnUpiROEklhc0ZRbrgjKxcTSeTg02GGiRH3twF3LGSHYPtDKkQgTQO2JffKyGXmlAZlWQyGfk0gzmWypjQbHhBac5wdfJkRo+mGFRE5S0jKweV1DtUh3ZC/nZGrRq+87oTKGdWUYZNgb9/FP1n18xDZeSIdS2ZgUaWKCpXFgC6lQ8fpR+E+stMajvDdhP8Fvc+WHu0zqmFMGOey+WqMuNc13V76zTicnZCncbU3M/n81U65AxoQmbkT8irejSTGXO5s7xHMzXI6gSvHWWEDkWVM0RDbio08PTlVeel7qxLBctiwZceQu0uZ4gFcClq8NqxoTgCUDY9JEwANTEE6klBZrOMopAKri/UFc+B0umPr/FvxGwLH3wPgruzH88Wduv+YXyD3XPxP/gDG3CSXKLbGNwAAAAASUVORK5CYII="
                   alt="Travel Triangle" />
            </Link>
          </div>
          <div className="col-xs-12 p0 mt24">
            <div className="row row-">
              <div className={`col-xs-12 p0 ${styles.headerForm}`}>
                <div className={`text-capitalize mb48 ${styles.HeaderTitleTxt} `}>
                  <h2
                    className={`${styles.heading} ${this.isGenericSection() ? styles.small : styles.large}`}>{heading}</h2>
                  <div className={styles.text}>
                    <div className={styles.textBar} />
                    <span
                      className={`${styles.subHeading} ${this.isGenericSection() ? styles.smallFont : styles.bigFont}`}>{subHeading}</span>
                    <div className={styles.textBar} />
                  </div>
                </div>
                <div id="reactReduxSequentialForm" className="col-xs-12 p0 main-form-container" />
                {this.state.showFormPlaceholder ? <PlaceHolder /> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
