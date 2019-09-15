module.exports = ({ contentPath = 'data', basePath = '/'}) => ({
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: contentPath
            }
        },
        {
            resolve: 'gatsby-transformer-json',
            options: {
                typeName: 'Resume'
            }
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
    ]
})