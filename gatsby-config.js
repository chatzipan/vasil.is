module.exports = {
  siteMetadata: {
    title: 'Vasilis Chatzipanagiotis - Freelance Developer',
    description:
      'Portfolio by Vasilis Chatzipanagiotis. Freelance Developer from Hamburg. I helped building new products for companies such as Volkswagen, Zalando, Otto, AboutYou, XING and more.',
    keywords:
      'freelancer, web developer, software engineer, frontend engineer, react developer, remote, Zurich, Switzerland, Germany, Hamburg, javascript',
    projects: [
      {
        client: 'Volkswagen',
        period: '2018',
        sector: 'Automotive',
        position: 'Senior Frontend Engineer',
        agency: 'SinnerSchrader',
        stack: 'ReactJS, Typescript, NodeJS, MobX, SASS',
        short: "Frontend Developent for the company's start page CMS site",
      },
      {
        client: 'Zalando',
        period: '2015 - 2016',
        sector: 'E-Commerce',
        position: 'Frontend Engineer',
        stack: 'ReactJS, SASS, Gulp',
        short: "Frontend Developent for the company's start page CMS site",
      },
      {
        client: 'Xing',
        period: '2018 - 2019',
        sector: 'Social Network',
        position: 'Senior Frontend Engineer',
        stack: 'ReactJS, React Hooks, Redux, GraphQL',
        short:
          "Frontend Developent for Germany's leading social networks's start page and onboarding section",
      },
      {
        client: 'OTTO',
        period: '2016',
        sector: 'E-Commerce',
        position: 'Fullstack Javascript Engineer',
        stack: 'NodeJS, ExpressJS, MongoDB, jQuery, SASS',
        short: "Lead Frontend Developent for the company's shop section",
      },
      {
        client: 'AboutYou',
        period: '2017 - 2018',
        sector: 'E-Commerce',
        position: 'Lead Frontend Engineer',
        stack: 'ReactJS, MobX, Ramda, CSSinJS, BackboneJS',
        short: "Lead Frontend Developent for the company's shop section",
      },
      {
        client: 'SinnerSchrader',
        period: '2016 & 2018',
        sector: 'Insurance & Automotive',
        position: 'Senior Frontend Engineer',
        stack: 'ReactJS, PostCSS',
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
