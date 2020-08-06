import tourismUrls from './tourismUrls';

describe('Tourism Urls Specs', () => {
  let req;
  let res;
  const validMatcherNext = jest.fn().mockName('validMatcherNext');
  const emptyMatcherNext = jest.fn().mockName('emptyMatcherNext');

  beforeEach(() => {
    req = {
      body: {},
    };

    res = {
      query: {},
      headers: {},
      data: null,
      json(payload) {
        this.data = JSON.stringify(payload);
      },
      cookie(name, value, options) {
        this.headers[name] = value;
      },
      redirect: jest.fn(),
    };
  });

  afterEach(() => {
    validMatcherNext.mockReset();
    emptyMatcherNext.mockReset();
  });

  it('Should not process correct urls and just call next()', () => {
    const middleware = tourismUrls({});
    validMatcherNext.mockName('validMatcherNext');

    req.originalUrl = 'http://localhost:4000/kerala-tourism';

    middleware(req, res, validMatcherNext);

    expect(validMatcherNext.getMockName()).toEqual('validMatcherNext');
    expect(validMatcherNext.mock.calls).toHaveLength(1);
  });

  it('Should not redirect after processing the urls as the regex is not matched and just call next()', () => {
    const middleware = tourismUrls({});
    emptyMatcherNext.mockName('emptyMatcherNext');

    req.originalUrl = 'http://localhost:4000/honeymoon-packages';

    middleware(req, res, emptyMatcherNext);

    expect(emptyMatcherNext.getMockName()).toEqual('emptyMatcherNext');
    expect(emptyMatcherNext.mock.calls).toHaveLength(1);
  });
});
