import { getParamName } from "./filter";

describe('getParamName method', () => {

  it('returns filter name after removing []', () => {
    expect(getParamName('days[]')).toEqual('days');
  });

});
