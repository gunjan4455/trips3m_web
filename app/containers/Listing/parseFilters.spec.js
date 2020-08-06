import parseFilters from './parseFilters';

const params = {
  query : {
    "days[]": "1-3",
    "destination_type": "all",
    "page_number": "1",
    "sort_by": "popularity",
  },
  category: "friends",
  destination: "",
};

const multipleCategoryParams = {
  query : {
    "days[]": "1-3",
    "destination_type": "all",
    "page_number": "1",
    "sort_by": "popularity",
    "category": ["family", "honeymoon"]
  },
  category: "tour",
  destination: "",
};

describe('parseFilter method', () => {

  it('returns object containing filters, sortby, destination and page number for particular category page', () => {
    const expectedValue = {
      "sortBy": "popularity",
      "filters": {
        "category": ["friends"],
        "days": ["1-3"],
        "destination_type": ["india","international"]
      },
      "pageNumber": 1,
      "destination": ""
    };
    expect(parseFilters(params)).toEqual(expectedValue);
  });

  it('returns object containing filters, sortby, destination and page number for tour package page', () => {
    const expectedValue = {
      "sortBy": "popularity",
      "filters": {
        "category": ["family", "honeymoon"],
        "days": ["1-3"],
        "destination_type": ["india","international"]
      },
      "pageNumber":1,
      "destination":""
    };
    expect(parseFilters(multipleCategoryParams)).toEqual(expectedValue);
  });

});


