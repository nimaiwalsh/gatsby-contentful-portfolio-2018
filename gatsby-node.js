const path = require('path');

//Create a new page for each post from Contentful
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulBlogPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
        createPage({
          path: `/blog/${node.slug}`,
          //Component (Template) for the new page
          component: path.resolve('./src/templates/PostPage.js'),
          //Variables to pass to the template page query
          context: {
            slug: node.slug,
          },
        });
      });
      resolve();
    });
  });
};
