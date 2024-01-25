import adapter from "gatsby-adapter-netlify"
/**
 * @type {import('gatsby').GatsbyConfig}
 */

const config = {
  adapter: adapter({
    excludeDatastoreFromEngineFunction: false,
    imageCDN: false,
  }),
  siteMetadata: {
    title: `mw-gatsby`,
  },
}

export default config