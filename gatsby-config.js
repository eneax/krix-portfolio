module.exports = {
  siteMetadata: {
    title: `Kristjana Xharja`,
    description: `Architect Visualizer from Florence (Italy)`,
    author: `eneaxharja.com`,
  },
  plugins: [
    // custom metadata for each page
    `gatsby-plugin-react-helmet`,
    {
      // makes images available
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      // makes portfolio's files available
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/src/portfolio`,
      },
    },
    // creates ImageSharp nodes from image types 
    `gatsby-transformer-sharp`,
    // exposes several image processing functions built on the Sharp image processing library
    `gatsby-plugin-sharp`,
    // parses Markdown files using Remark
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            // processes images in markdown so they can be used in the production build.
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kristjana Xharja | Architect Visualizer`,
        short_name: `Kri`,
        start_url: `/`,
        background_color: `#4F69C6`,
        theme_color: `#4F69C6`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    'gatsby-plugin-styled-components',
  ],
}
