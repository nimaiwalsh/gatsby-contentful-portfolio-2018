// Environment variables
let env = process.env.NODE_ENV || 'development'

// This adds dotenv (for storing environment variables) to gatsby 
require('dotenv').config({path: `./.env.${env}`});

// Plugin Configurations
module.exports = {
  siteMetadata: {
    title: 'Nimai Walsh - Web Developer',
    desc: 'Portfolio and Blog for Nimai Walsh - Web Developer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-lodash`,
      options: {
        disabledFeatures: [`shorthands`, `cloning`],
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: `${process.env.GATSBY_CONTENTFUL_SPACE_ID}`,
        accessToken: `${process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN}`,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'files',
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`,
      },
    },
  ],
};
