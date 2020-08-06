
import { mount, shallow} from 'enzyme';

const lifeCycleMethods = ['componentDidMount', 'componentWillUpdate',
  'componentDidUpdate', 'componentWillReceiveProps', 'componentDidCatch'];

export const mountComponent= (component, componentClass, spyLifeCycleMethods = false) => {
  const lifeCycleSpys = {};
    
  // it hinder the normal flow of react component if use spy on lifecycle methods.
  // use with caution
  if (spyLifeCycleMethods) {
    lifeCycleMethods.forEach(methodName => {
      if (componentClass.prototype[methodName] instanceof Function) {
        lifeCycleSpys[methodName] = spyOn(componentClass.prototype, methodName);
      }
    });
  }

  const mountedComponent = mount(component);
  return {mountedComponent, lifeCycleSpys};
};
