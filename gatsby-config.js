require("dotenv").config({
    path: `.env`,
});

module.exports = {
    plugins: [
        'gatsby-plugin-image',
        {
            resolve: 'gatsby-source-prismic',
            options: {
                repositoryName: process.env.PRISMIC_REPO_NAME,
                customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
            },
        }
    ],
};
