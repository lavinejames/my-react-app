module.exports = {
  siteMetadata: {
    title: 'Design + Code',
    description: 'Complete courses about the best tools and design systems.',
    keywords: 'react course, react for designers'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-helmet'
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'o6lude3oehs2',
        accessToken: 'eWk5uRwuEiuqFeyhHOzCks6jwxz3iCyou38YeRINRYg'
      }
    }
  ],
}