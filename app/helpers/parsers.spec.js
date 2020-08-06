import { makeCapitalizedSentence } from './parsers';

describe('test makeCapitalizedSentence helper', () => {
  const expectedResult = "This Is A Test Sentence";

  it('should capitalize and remove separator if mentioned', () => {
    expect(makeCapitalizedSentence('this_is_a_test_sentence', '_')).toEqual(expectedResult);
  });

  it('should capitalize and remove - if no separator is mentioned', () => {
    expect(makeCapitalizedSentence('this-is-a-test-sentence')).toEqual(expectedResult);
  });

  it('should capitalize and remove separator for every string', () => {
    expect(makeCapitalizedSentence('this is a test sentence')).not.toEqual(expectedResult);

    const expectedWrongResult = "This is a test sentence";
    expect(makeCapitalizedSentence('this is a test sentence')).toEqual(expectedWrongResult);
  });

});
