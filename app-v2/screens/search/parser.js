export const UserIntent = {
  Packages: 'packages',
  MultiplePackages: 'packages_multiple',
  Destinations: 'destinations',
  DestinationDetail: 'destination_detail'
};

export const SearchCard = {
  DestiantionCard: {
    name: 'destination_cards',
    configuration: {
      [UserIntent.MultiplePackages]: {
        MultiDestination: {
          count: 3
        },
        SingleDestination: {
          count: 3
        }
      },
      [UserIntent.Destinations]: {
        MultiDestination: {
          count: 3
        },
        SingleDestination: {
          count: 3
        }
      },
      [UserIntent.DestinationDetail]: {
        MultiDestination: {
          count: 0
        },
        SingleDestination: {
          count: 0
        }
      }
    }
  },
  PackageCard: {
    name: 'package_cards',
    configuration: {
      [UserIntent.MultiplePackages]: {
        MultiDestination: {
          count: 10
        },
        SingleDestination: {
          count: 10
        }
      },
      [UserIntent.Destinations]: {
        MultiDestination: {
          count: 10
        },
        SingleDestination: {
          count: 20
        }
      },
      [UserIntent.DestinationDetail]: {
        MultiDestination: {
          count: 20
        },
        SingleDestination: {
          count: 20
        }
      }
    }
  },
  PlacesToVisit: {
    name: 'places_to_visit',
    configuration: {
      [UserIntent.MultiplePackages]: {
        MultiDestination: {
          count: 5
        },
        SingleDestination: {
          count: 10
        }
      },
      [UserIntent.Destinations]: {
        MultiDestination: {
          count: 5
        },
        SingleDestination: {
          count: 10
        }
      },
      [UserIntent.DestinationDetail]: {
        MultiDestination: {
          count: 10
        },
        SingleDestination: {
          count: 10
        }
      }
    }
  },
  ThingsToDo: {
    name: 'things_to_do',
    configuration: {
      [UserIntent.MultiplePackages]: {
        MultiDestination: {
          count: 5
        },
        SingleDestination: {
          count: 10
        }
      },
      [UserIntent.Destinations]: {
        MultiDestination: {
          count: 5
        },
        SingleDestination: {
          count: 10
        }
      },
      [UserIntent.DestinationDetail]: {
        MultiDestination: {
          count: 10
        },
        SingleDestination: {
          count: 10
        }
      }
    }
  },
  Blogs: {
    name: 'blogs',
    configuration: {
      [UserIntent.MultiplePackages]: {
        MultiDestination: {
          count: 5
        },
        SingleDestination: {
          count: 10
        }
      },
      [UserIntent.Destinations]: {
        MultiDestination: {
          count: 5
        },
        SingleDestination: {
          count: 10
        }
      },
      [UserIntent.DestinationDetail]: {
        MultiDestination: {
          count: 10
        },
        SingleDestination: {
          count: 10
        }
      }
    }
  },
  Testimonials: {
    name: 'testimonials',
    configuration: {
      [UserIntent.MultiplePackages]: {
        MultiDestination: {
          count: 5
        },
        SingleDestination: {
          count: 10
        }
      },
      [UserIntent.Destinations]: {
        MultiDestination: {
          count: 5
        },
        SingleDestination: {
          count: 10
        }
      },
      [UserIntent.DestinationDetail]: {
        MultiDestination: {
          count: 10
        },
        SingleDestination: {
          count: 10
        }
      }
    }
  },
  CityBlock: {
    name: 'destination_detail',
    configuration: {
      [UserIntent.MultiplePackages]: {
        MultiDestination: {
          count: 1
        },
        SingleDestination: {
          count: 1
        }
      },
      [UserIntent.Destinations]: {
        MultiDestination: {
          count: 1
        },
        SingleDestination: {
          count: 1
        }
      },
      [UserIntent.DestinationDetail]: {
        MultiDestination: {
          count: 1
        },
        SingleDestination: {
          count: 1
        }
      }
    }
  }
};

const DocClasses = {
  CityBlock : 'city_block',
  Blogs : 'blog_post',
  Testimonials : 'testimonial',
  Packages : 'package',
  Destinations : 'destination'
};

const DefaultCardOrder = [
  'destination_detail',
  'destination_cards',
  'package_cards',
  'places_to_visit',
  'things_to_do',
  'blogs',
  'testimonials'
];

export const getUserIntent = ({ searchIntents }) => {
  // break if user intent is not their.
  // get search intent with max weightage
  let searchIntent;

  Object.entries(searchIntents).forEach(([key, value]) => {
    if (!searchIntent || searchIntents[searchIntent] < value) {
      searchIntent = key;
    }
  });
  return searchIntent;
};

export const parse = json => {
  const parsedData = {};
  const {
    data: {
      searches,
      search_intent: searchIntents,
      destinations: { primary: destinationsList }
    },
    metadata: { query }
  } = json;

  let {
    data: { order: cardOrder }
  } = json;
  //console.log('parse: ', JSON.stringify(json));
  const userIntent = getUserIntent({ searchIntents });
  const primaryDestinations = destinationsList.split(',');

  searches.forEach(searchItem => {
    const list = parsedData[searchItem.result.doc_class] || [];
    let item = {
      type: searchItem.result.doc_class,
      id: searchItem.result.id,
      title:
        searchItem.result.location ||
        searchItem.result.title ||
        searchItem.result.name ||
        searchItem.result.storyHeading,
      href: searchItem.result.href || searchItem.result.link,
      link: searchItem.result.href || searchItem.result.link,
      links: [],
      searchPrice: searchItem.result.price || searchItem.result.priceTotal
    };

    item = { ...item, ...searchItem.result };

    if (searchItem.result.doc_class === 'package') {
      item.href = `/packages/${item.setUrl}?id=${item.id}`;
    }

    Object.keys(searchItem.links).forEach(key => {
      item.links.push({
        [key]: searchItem.links[key].href
      });
    });
    // item.order = getSearchItemOrder(json.data);
    list.push(item);
    parsedData[searchItem.result.doc_class] = list;
  });

  const orderedData = [];
  if (!cardOrder || cardOrder.length < 1) {
    cardOrder = DefaultCardOrder;
  }
  cardOrder.forEach(searchCardName => {
    searchCardName = searchCardName.trim();
    const cityBlock = parsedData[DocClasses.CityBlock];
    const blogs = parsedData[DocClasses.Blogs];
    const testimonials = parsedData[DocClasses.Testimonials];
    const packages = parsedData[DocClasses.Packages];
    const destinations = parsedData[DocClasses.Destinations];

    switch (searchCardName) {
      case SearchCard.CityBlock.name:
        orderedData.push({
          data: {
            list: cityBlock instanceof Array ? cityBlock.map(cb => {
              const { latlong } = cb;
              if (latlong instanceof Array) {
                cb.coordinates = { latitude: latlong[0], longitude: latlong[1] };
              }
              return cb;
            }): []
          },

          name: SearchCard.CityBlock.name
        });
        break;

      case SearchCard.DestiantionCard.name:
        orderedData.push({
          data: {
            list: destinations
          },
          name: SearchCard.DestiantionCard.name
        });
        break;

      case SearchCard.PackageCard.name:
        orderedData.push({
          data: {
            list: packages instanceof Array ?  packages.map(p => {
              p.price = p.discountedPrice;
              p.imageText = p.title;
              p.packageUrl = p.link;
              p.imagekitUrl = p.imagekit_url;
              return p;
            }): []
          },
          name: SearchCard.PackageCard.name
        });
        break;

      case SearchCard.PlacesToVisit.name:
        if (cityBlock instanceof Array && cityBlock.length > 0) {

          //  get places to visit from first city block
          let maxCount = 10;
          if (
            userIntent !== UserIntent.DestinationDetail &&
            cityBlock.length > 1
          ) {
            maxCount = 5;
          }
          const list = [];
          cityBlock.forEach(cb => {
            const placesToVisit = cb.placesToVisit.slice(0, maxCount);
            list.push(...placesToVisit);
          });
          orderedData.push({
            data: {
              list: list.map(place => {
                place.urlSpotlight = place.url;
                place.imageUrl = place.image;
                place.imagekitUrl = place.imagekit_url;
                return place;
              })
            },
            name: SearchCard.PlacesToVisit.name,
            viewAll: cityBlock && cityBlock.length === 1
              && cityBlock[0].placesToVisitUrl instanceof Array
              && cityBlock[0].placesToVisitUrl.length > 0 ?
                cityBlock[0].placesToVisitUrl[0]: null
          });
        }
        break;
      case SearchCard.ThingsToDo.name:
        if (cityBlock instanceof Array && cityBlock.length > 0) {
          //  get places to visit from first city block
          let maxCount = 10;
          if (
            userIntent !== UserIntent.DestinationDetail &&
            cityBlock.length > 1
          ) {
            maxCount = 5;
          }
          const list = [];
          cityBlock.forEach(cb => {
            const thingsToDo = cb.thingsToDo.slice(0, maxCount);
            list.push(...thingsToDo);
          });
          orderedData.push({
            data: {
              list: list.map(place => {
                place.urlSpotlight = place.url;
                place.imageUrl = place.image;
                place.imagekitUrl = place.imagekit_url;
                return place;
              })
            },
            name: SearchCard.ThingsToDo.name,
            viewAll: cityBlock && cityBlock.length === 1
              && cityBlock[0].thingsToDoUrl instanceof Array
              && cityBlock[0].thingsToDoUrl.length > 0 ?
                cityBlock[0].thingsToDoUrl[0]: null
          });
          // title: `Things To Do In ${destinationsList}`,
          // heading:
          //   'Your list of the best things to do, compiled on the basis of actual traveler experiences'
        }
        break;
      case SearchCard.Blogs.name:
        if (blogs instanceof Array) {
          orderedData.push({
            data: {
              list: blogs.map(b => {
                b.url = `${b.link || b.href}`;
                b.postDate = b.storyDate;
                b.thumbnailImagePath = b.thumbnailImagePath || b.imagePath;
                b.imagekitUrl = b.imagekit_url;
                return b;
              })
            },
            name: SearchCard.Blogs.name
          });
        }
        break;
      case SearchCard.Testimonials.name:
        orderedData.push({
          data: {
            list: testimonials.map(b => {
              b.url = `https://traveltriangle.com${b.link || b.href}`;
              b.postDate = b.storyDate;

              return b;
            })
          },
          name: SearchCard.Testimonials.name
        });
        break;
    }
  });
  // todo change structure of orderedData
  return { orderedData, primaryDestinations, query };
};
