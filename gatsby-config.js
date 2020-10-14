require("dotenv").config({
  path: `.env`
});

module.exports = {
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-shopify`,
      options: {
        shopName: process.env.SHOP_NAME,
        accessToken: process.env.SHOP_ACCESS_TOKEN
      }
    }
  ]
}
