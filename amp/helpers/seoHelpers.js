import React from 'react';

const getTitle = (title, metaTags) => {
  const tags = metaTags;
  let newTitle = title;
  if (typeof tags !== 'undefined' && tags.length !== 0) {
    const titleList = tags.filter(tag => (
      tag.property === 'og:title'
    ));
    newTitle = (titleList.length > 0) && titleList[0].content;
  }
  return newTitle;
};

const getDescription = (description, metaTags) => {
  const tags = metaTags;
  let newDescription = description;
  if (typeof tags !== 'undefined' && tags.length !== 0) {
    const descriptionList = tags.filter(tag => (
      (tag.name && tag.name.toLowerCase() === 'description') ||
      (tag.property && tag.property.toLowerCase() === 'og:description')
    ));
    newDescription = descriptionList.length ? descriptionList[0].content : '';
  }
  return newDescription;
};

const getCanonical = (name) => {
  if (name[name.length - 1] === '/') {
    name = name.substring(0, name.lastIndexOf('/'));
  }
  return `https://traveltriangle.com${name}`;
};

const createHelmet = (tags = [], canonicalUrl, pathname) => {
  let hasDescription = false;
  const helmets = tags.map((tag, i) => {
    if (tag.keyword === 'title' || tag.keyword === 'og:title') {
      return (
        <title>{tag.value ? tag.value : ''}</title>
      );
    }
    if (tag.keyword === 'description') {
      hasDescription = true;
      return <meta name={tag.keyword} content={tag.value} key={i} />;
    }
    if (tag.keyword === 'next' || tag.keyword === 'prev') {
      return (
        <link
          rel={tag.keyword}
          content={`https://traveltriangle.com${tag.value}`}
          key={i}
        />
      );
    }
    return <meta name={tag.keyword} content={tag.value} key={i} />;
  });
  if (!hasDescription) {
    helmets.push(<meta name="description" content="" />);
  }
  helmets.push(
    <link
      rel="canonical"
      href={canonicalUrl ? getCanonical(canonicalUrl) : getCanonical(pathname)}
    />
  );
  return helmets;
};

// TODO: Method refactor after BE work
// Refactor createHelmetBanner and createHelmet method to be single method
// after getting fix all the values from BE as content and property.
const createHelmetBanner = (tags = [], canonicalUrl, pathname) => {
  const helmets = tags.map((tag, i) => {
    if (tag.name === 'title') {
      return (<title>{tag.content ? tag.content : ''}</title>);
    }
    if (tag.name === 'description') {
      return (<meta name={tag.name} content={tag.content} key={i} />);
    }
    if (tag.name === 'next' || tag.name === 'prev') {
      return;
    }
    return <meta property={tag.property} content={tag.content} key={i} />;
  });

  helmets.push(
    <link
      key="canonical"
      rel="canonical"
      href={canonicalUrl ? getCanonical(canonicalUrl) : getCanonical(pathname)}
    />
  );
  return helmets;
};

const renderMetaTags = (metaTagsArray, isAmp) => {
  const metaTagsWithoutIosUrl = metaTagsArray.filter(item =>
    !((
      item.property && (
        item.property.toLowerCase().includes('al:ios:url') ||
        item.property.toLowerCase().includes('al:android:url') ||
        item.property.toLowerCase().includes('description') ||
        item.property.toLowerCase() === 'title'
      ) || item.name && (
        item.name.toLowerCase().includes('description') ||
        item.name.toLowerCase() === 'title' ||
        (!isAmp && item.name.toLowerCase() === 'robots')
      )
    )));

  if (metaTagsWithoutIosUrl) {
    return metaTagsWithoutIosUrl.map((metaTag, index) => (
      <meta {...metaTag} key={`meta_${index}`} />
    ));
  }
  return '';
};

export {
  getTitle,
  getDescription,
  getCanonical,
  createHelmet,
  createHelmetBanner,
  renderMetaTags
};

