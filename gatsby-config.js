module.exports = {
  siteMetadata: {
    title: 'Vasilis Chatzipanagiotis - Freelance Developer',
    description:
      'Portfolio by Vasilis Chatzipanagiotis. Freelance Developer from Hamburg. I helped building new products for companies such as Volkswagen, Zalando, Otto, AboutYou, XING and more.',
    keywords:
      'freelancer, web developer, software engineer, frontend engineer, react developer, remote, hamburg, javascript',
    projects: [
      {
        name: 'Xing',
        period: 'Q3 & Q4 2018',
        short:
          "Frontend Developent for Germany's leading social networks's start page and onboarding section",
      },
      {
        name: 'VW',
        period: 'Q1 & Q2 2018',
        short: "Frontend Developent for the company's start page CMS site",
      },
      {
        name: 'AboutYou',
        period: 'Q4 2017',
        short: "Lead Frontend Developent for the company's shop section",
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/assets/svgs`,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 })],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
