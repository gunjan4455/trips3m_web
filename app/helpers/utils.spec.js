import { capitalizeEveryFirstLetter, setVisitedDestinationsCookie } from './utils';
import * as FormDataFormatter from 'helpers/FormDataFormatter';

describe('test capitalizeEveryFirstLetter helper', () => {

  it('should capitalize every word in a string', () => {
    const expectedResult = "This Is A Test Sentence";
    expect(capitalizeEveryFirstLetter('this is a test sentence')).toEqual(expectedResult);
  });

  it('should capitalize every word in a string with - separator', () => {
    const expectedResult = "This-Is-A-Test-Sentence";
    expect(capitalizeEveryFirstLetter('this-is-a-test-sentence')).toEqual(expectedResult);
  });

});

describe('Tests setVisitedDestinationsCookie function', () => {
  let _getCookie;
  let _setCookie;

  beforeEach(() => {
    const cookie = JSON.stringify([{ dest1: 1 }, { dest2: 2 }]);
    _getCookie = jest.spyOn(FormDataFormatter, 'getCookie').mockImplementation(() => cookie);
    _setCookie = jest.spyOn(FormDataFormatter, 'setCookie');
  });

  afterEach(() => {
    _getCookie.mockReset();
    _setCookie.mockReset();
  });

  it('Should update the cookie if destination is available', () => {
    setVisitedDestinationsCookie('kerala');

    expect(_getCookie.mock.calls.length).toEqual(1);
    expect(_setCookie.mock.calls.length).toEqual(1);
  });

  it('Should update the cookie if destination is available', () => {
    setVisitedDestinationsCookie('dest1');

    expect(_getCookie.mock.calls.length).toEqual(1);
    expect(_setCookie.mock.calls.length).toEqual(1);
  });

  it('Should not update the cookie if destination is not available', () => {
    setVisitedDestinationsCookie('');

    expect(_getCookie.mock.calls.length).toEqual(0);
    expect(_setCookie.mock.calls.length).toEqual(0);
  });
});
