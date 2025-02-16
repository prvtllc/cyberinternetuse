const autoprefixer = require('autoprefixer')

module.exports = {
  siteMetadata: {
    title: 'Dan - Shai',
    author: 'Dan Shai',
    description: ' Dan Blog ',
    siteUrl:
      'https://clever-mahavira-4a9f99.netlify.com',
  },
  pathPrefix: '/gatsbyv2-scientific-blog-machine-learning/',
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'dan-blog',
        short_name: 'dan-blog',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/omega.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: `data`,
      },
    },
    {
      resolve: `gatsby-transformer-csv`,
      options: {
        noheader: false,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-graph',
            options: {
              // this is the language in your code-block that triggers mermaid parsing
              language: 'mermaid', // default
              theme: 'neutral', // could also be dark, forest, or neutral
            },
          },
          `gatsby-remark-katex`,
          
          {
            resolve: `gatsby-plugin-sharp`,
            options: {
              useMozJpeg: false,
              stripMetadata: true,
              defaultQuality: 75,
            },
          },

          {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: `GatsbyJS`,
              short_name: `GatsbyJS`,
              start_url: `/`,
              background_color: `#f7f0eb`,
              theme_color: `#a2466c`,
              // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
              // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
              display: `standalone`,
              icon: `src/images/icon.png`, // This path is relative to the root of the site.
              include_favicon: true, // Include favicon
            },
          },

          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          `gatsby-plugin-react-helmet`
          `gatsby-plugin-offline`
        ],
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          autoprefixer({
            browsers: ['last 4 versions'],
          }),
        ],
        precision: 8,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
  ],
}
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
