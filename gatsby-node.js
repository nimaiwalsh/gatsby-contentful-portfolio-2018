const path = require('path');

// Create a new pages for different content types
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  // Load all posts Book Reviews, Tech Blog, Travel Blog
  const loadPosts = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulBookReview(
          sort: { fields: createdAt, order: DESC } 
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
          sort: { fields: createdAt, order: DESC } 
          limit: 1000
        ) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(results => {
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
            currentPage: i + 1
          }
        })
      })

      // Create individual Book review post pages
      bookReviewPosts.forEach(edge => {
        createPage({
          path: `/bookreviews/${edge.node.slug}`,
          // Component (Template) for the new page
          component: path.resolve('./src/templates/book-review-page.js'),
          // Variables to pass to the template page query
          context: {
            slug: edge.node.slug,
          },
        });
      })

      // Create individual Blog post pages
      blogPosts.forEach(edge => {
        createPage({
          path: `/blog/${edge.node.slug}`,
          //Component (Template) for the new page
          component: path.resolve('./src/templates/post-page.js'),
          //Variables to pass to the template page query
          context: {
            slug: edge.node.slug,
          },
        });
      })

    });

    resolve();
  });

  const loadPages = new Promise((resolve, reject) => {
    // Blog Post pages
    // graphql(`
    //   {
    //     allContentfulBlogPost {
    //       edges {
    //         node {
    //           slug
    //         }
    //       }
    //     }
    //   }
    // `).then(result => {
    //   result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
    //     createPage({
    //       path: `/blog/${node.slug}`,
    //       //Component (Template) for the new page
    //       component: path.resolve('./src/templates/post-page.js'),
    //       //Variables to pass to the template page query
    //       context: {
    //         slug: node.slug,
    //       },
    //     });
    //   });      
    // });

    // resolve();
  });

  return Promise.all([loadPosts])
};