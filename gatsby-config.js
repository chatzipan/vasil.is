module.exports = {
  siteMetadata: {
    title: 'Vasilis Chatzipanagiotis | Freelance Software Engineer',
    description:
      'Portfolio by Vasilis Chatzipanagiotis. Freelance Developer from Hamburg. I helped building new products for companies such as Volkswagen, Zalando, Otto, AboutYou, XING and more.',
    keywords:
      'freelancer, web developer, software engineer, frontend engineer, react developer, remote, Zurich, Switzerland, Germany, Hamburg, javascript',
    mainProjects: [
      {
        agency: 'SinnerSchrader',
        client: 'Volkswagen',
        period: '2018',
        position: 'Senior Frontend Engineer',
        sector: 'Automotive',
        short: "Frontend Developent for the company's start page CMS site",
        stack: 'Typescript, ReactJS, NodeJS, MobX, SASS',
        url: 'https://www.volkswagen.com/',
      },
      {
        client: 'Zalando',
        period: '2015 - 2016',
        sector: 'E-Commerce',
        position: 'Frontend Engineer',
        stack: 'ReactJS, SASS, Gulp',
        short: "Frontend Developent for the company's start page CMS site",
        url: 'https://www.zalando.de/',
      },
      {
        client: 'Xing',
        period: '2017 - 2019',
        position: 'Senior Frontend Engineer',
        sector: 'Social Network',
        short:
          "Frontend Developent for Germany's leading social networks's start page and onboarding section",
        stack: 'ReactJS, React Hooks, Redux, GraphQL',
        url: 'https://www.xing.com/',
      },
      {
        client: 'OTTO',
        period: '2016',
        position: 'Fullstack Javascript Engineer',
        sector: 'E-Commerce',
        short: "Lead Frontend Developent for the company's shop section",
        stack: 'NodeJS, ExpressJS, MongoDB, jQuery, SASS',
        url: 'https://www.otto.de/',
      },
      {
        client: 'AboutYou',
        period: '2017 & 2018',
        position: 'Lead Frontend Engineer',
        sector: 'E-Commerce',
        short: "Lead Frontend Developent for the company's shop section",
        stack: 'ReactJS, MobX, Ramda, CSSinJS',
        url: 'https://www.aboutyou.de/',
      },
      {
        client: 'SinnerSchrader',
        period: '2016 & 2018',
        position: 'Senior Frontend Engineer',
        sector: 'Insurance & Automotive',
        stack: 'ReactJS, PostCSS',
        url: 'https://sinnerschrader.com/',
      },
    ],
    otherProjects: [
      {
        client: 'EPlus',
        period: '2014',
        sector: 'Telecomunications',
        position: 'Junior Frontend Engineer',
        agency: 'Cellular',
        stack: 'PHP (Zend Framework 2), Javascript, jQuery, HTML5, Grunt, SCSS',
        short: "Frontend Developent for the company's start page CMS site",
        url: 'https://www.telefonica.de/e-plus-gruppe/',
      },
      {
        client: 'TVSpielfilm',
        period: '2014 - 2015',
        sector: 'Media',
        position: 'Frontend Engineer',
        stack: 'Backbone.js, ES6, Handlebars.js, SASS, HTML5',
        short: "Frontend Developent for the company's start page CMS site",
        url: 'https://live.tvspielfilm.de/',
      },
      {
        client: 'Berenberg',
        period: '2017',
        sector: 'Banking',
        position: 'Lead Frontend Engineer',
        stack: 'NodeJS, ReactJS, Redux, PostCSS',
        short:
          "Frontend Developent for Germany's leading social networks's start page and onboarding section",
        url: 'https://www.berenberg.de/',
      },
      {
        client: 'Cellular',
        period: '2016 & 2018',
        sector: 'Telecomunications & Media',
        position: 'Frontend Engineer',
        stack: 'ReactJS, PostCSS',
        url: 'https://www.cellular.de/',
      },
      {
        agency: 'SinnerSchrader',
        client: 'Ergo',
        position: 'UI Engineer',
        period: '2016',
        sector: 'Insurance',
        short: "Frontend Developent for the company's start page CMS site",
        stack: 'ReactJS, Redux, PostCSS',
        url: 'https://www.ergo.de/',
      },
      {
        client: 'Infocentric',
        period: '2019',
        position: 'Senior Frontend Engineer',
        sector: 'Fintech',
        stack: 'ReactJS, PostCSS',
        url: 'https://www.infocentric.ch/',
      },
      {
        client: 'LeicaGeosystems',
        period: '2019',
        position: 'Senior Frontend Engineer',
        sector: 'Didital Reality',
        stack: 'Typescript, ReactJS / NextJS, webGL, graphQL',
        url: 'https://leica-geosystems.com/',
      },
      {
        client: 'Reiffeisen',
        agency: 'Infocentric Research AG',
        period: '2019',
        sector: 'Fintech',
        position: 'Senior Frontend Engineer',
        stack: 'Typescript, ReactJS, React Hooks, graphQL, SASS',
        url: 'https://www.raiffeisen.ch/',
      },
    ],
    ownProjects: [
      {
        client: 'OASA',
        period: '2019',
        sector: 'Public Transport',
        position: 'Own Project',
        stack: 'GatsbyJS, React, Redux, Mapbox-GL, Netlify, AWS Lambda',
        url: 'https://oasa.live/',
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
    'gatsby-plugin-transition-link',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/svgs/vc_logo.svg', // This path is relative to the root of the site.
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
