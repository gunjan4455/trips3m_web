const getImagePath = (blog) => {
  return {
    src: blog.large_image && blog.large_image.srcLink,
    imagekitUrl: blog.large_image && blog.large_image.imagekit_url,
    alt: blog.large_image && blog.large_image.altText
  };
};

const getThumbnailImagePath = (blog) => {
  return {
    src: blog.thumbnail_image && blog.thumbnail_image.srcLink,
    imagekitUrl: blog.thumbnail_image && blog.thumbnail_image.imagekit_url,
    alt: blog.thumbnail_image && blog.thumbnail_image.altText
  };
};

export const normalize = (response) => {
  const blogs = [];
  try {
    const data = JSON.parse(response);
    Object.keys(data).forEach((key) => {
      const blog = data[key];
      const imagePaths = getImagePath(blog);
      const thumbnailImagePaths = getThumbnailImagePath(blog);

      if (blog.ID) {
        blogs.push({
          id: blog.ID,
          imagePaths,
          thumbnailImagePaths,
          postDate: blog.post_date,
          title: blog.post_title,
          url: blog.url_link,
          postContent: blog.post_content || ''
        });
      }
    });
  } catch (e) {
    console.log(e);
  }
  return blogs;
};

const addFirstBlog = (blogs, category) => {
  if (category && category.blogs && category.blogs.length) {
    const blog = category.blogs[0];
    const imagePaths = getImagePath(blog);
    const thumbnailImagePaths = getThumbnailImagePath(blog);

    blogs.push({
      id: blog.ID,
      heading: category.title,
      content: blog.post_content,
      postDate: blog.post_date,
      title: blog.post_title,
      url: blog.url_link,
      imagePaths,
      thumbnailImagePaths
    });
  }
};

export const getDestinationBlogs = (response) => {
  const blogs = [];
  try {
    const placesToVisit = response['places-to-visit'];
    const thingsToDo = response['things-to-do'];
    const travelogue = response['travelogue'];

    addFirstBlog(blogs, placesToVisit);
    addFirstBlog(blogs, thingsToDo);
    addFirstBlog(blogs, travelogue);
  } catch (e) {
    console.log(e);
  }

  return blogs;
};
