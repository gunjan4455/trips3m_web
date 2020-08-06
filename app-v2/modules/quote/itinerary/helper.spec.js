import React from 'react';
import { getShowMoreText } from './helper';

describe('Quote itinerary helper', () => {

  it('check correct show more object is returned', () => {
    expect(getShowMoreText('This is dummy text', 125)).toEqual({
      'moreText': '',
      'wrapText': [<span key={0}>This is dummy text</span>]
    });
  });

  it('check correct show more object is returned', () => {
    expect(getShowMoreText('This is dummy text. This is dummy text. This is dummy text. This is dummy text. This is dummy text.', 80)).toEqual({
      'moreText': [<span key={0}>This is dummy text.</span>],
      'wrapText': [<span key={0}>This is dummy text. This is dummy text. This is dummy text. This is dummy text. </span>]
    });
  });

  it('check correct show more object is returned', () => {
    expect(getShowMoreText('This is dummy text. This is dummy text. This is dummy text. This is dummy text. This is dummy text.\nThis is dummy text.', 80)).toEqual({
      'moreText': [<span key={0}>This is dummy text.</span>,<div key={1}>This is dummy text.</div>],
      'wrapText': [<span key={0}>This is dummy text. This is dummy text. This is dummy text. This is dummy text. </span>]
    });
  });

});
