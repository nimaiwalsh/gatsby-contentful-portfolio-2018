const path = require('path');

// Create a new pages for different content types
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const results = await graphql(`
    {
      allContentfulBookReview(
        sort: { createdAt: DESC }
        limit: 1000
      ) {
        edges {
          node {
            createdAt(formatString: "DD MMM YYYY")
            slug
          }
        }
      }
      allContentfulBlogPost(
        sort: { createdAt: DESC }
        limit: 1000
      ) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  const bookReviewPosts = results.data.allContentfulBookReview.edges
  const blogPosts = results.data.allContentfulBlogPost.edges
  const postsPerPage = 5
  const numBookreviewPages = Math.ceil(bookReviewPosts.length / postsPerPage)
  const numBlogPages = Math.ceil(blogPosts.length / postsPerPage)

  // create Bookreview page list with pagination
  Array.from({ length: numBookreviewPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/bookreviews` : `/bookreviews/${i + 1}`,
      component: path.resolve("./src/templates/book-review-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numBookreviewPages,
        currentPage: i + 1,
        slug: 'bookreviews',
      }
    })
  })

  // Create individual Book review post pages
  bookReviewPosts.forEach(edge => {
    createPage({
      path: `/bookreviews/${edge.node.slug}`,
      component: path.resolve('./src/templates/book-review-page.js'),
      context: {
        slug: edge.node.slug,
      },
    });
  })

  // create Blog page list with pagination
  Array.from({ length: numBlogPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/blog-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numBlogPages,
        currentPage: i + 1,
        slug: 'blog',
      }
    })
  })

  // Create individual Blog post pages
  blogPosts.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.slug}`,
      component: path.resolve('./src/templates/post-page.js'),
      context: {
        slug: edge.node.slug,
      },
    });
  })
};
