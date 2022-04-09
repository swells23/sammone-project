module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `assets`,
                path: `${__dirname}/src/static/assets`
            }
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /assets/
                }
            }
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sass`
    ],
    flags: {
        DEV_SSR: false
    }
}
