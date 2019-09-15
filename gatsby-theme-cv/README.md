# Gatsby Theme CV

## Build Your CV in Just 2 Min
Checkout this link to understand how to use gatsby theme
(https://www.gatsbyjs.org/tutorial/using-a-theme/)

## Let's Start adding your details 
1. Create project directory
2. `cd directory`
3. `yarn init -y`
4. `yarn add gatsby react react-dom @mhjadav/gatsby-theme-cv`
5.  add gatsby-config.js and add below code
    `module.exports = {
        plugins: [
            {
                resolve: '@mhjadav/gatsby-theme-cv',
                options: {
                    contentPath: 'data',
                    basePath: '/'
                }
            }
        ]
    }`
6.  Create data/cv.json and data/images/pic.jpg
7.  Check out sample json below and replace content as you like
8. `gatsby develop` got to http://localhost:8000/


Sample JSON 

`
{
    "profilePic": "images/profile.jpg",
    "metaInfo": {
        "title": "Mahipat Jadav Portfolio",
        "description": "Full stack developer, I have designed and developed fast and responsive web applications using Javascript, ReactJS, Redux, NodeJs, GraphQl, Bootstrap, Gatsby",
        "favicon": "",
        "website": ""
    },
    "about": {
        "name": "Mahipat Jadav",
        "location": "Ahmedabad, Gujarat",
        "email": "mj@mojaave.com",
        "phoneNumber": "+91-9898226919",
        "description": "Full stack developer, I have designed and developed fast and responsive web applications using Javascript, ReactJS, Redux, NodeJs, GraphQl, Bootstrap, Gatsby"
    },
    "skills": [
        {
            "name": "Javascript",
            "rating": "8",
            "maxRating": "10"
        },
        {
            "name": "Html",
            "rating": "10",
            "maxRating": "10"
        },
        {
            "name": "Css",
            "rating": "5",
            "maxRating": "10"
        },
        {
            "name": "React",
            "rating": "8",
            "maxRating": "10"
        }
    ],
    "langauges": [
        {
            "name": "Gujarati",
            "rating": "10",
            "maxRating": "10"
        },
        {
            "name": "Hindi",
            "rating": "10",
            "maxRating": "10"
        },
        {
            "name": "English",
            "rating": "8",
            "maxRating": "10"
        }
    ],
    "social": [
        {
            "name": "github",
            "link": "https://github.com"
        },
        {
            "name": "twitter",
            "link": "https://twitter.com"
        },
        {
            "name": "linkedin",
            "link": "https://linkedin.com"
        }
    ],
    "experience": [
        {
            "title": "Software Enginer",
            "company": "Company Pvt. Ltd.",
            "from": "March 2017",
            "to": "Current",
            "description": "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
        },
        {
            "title": "Software Enginer",
            "company": "Company Pvt. Ltd.",
            "from": "March 2017",
            "to": "July 2019",
            "description": "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
        },
        {
            "title": "Software Enginer",
            "company": "Company Pvt. Ltd.",
            "from": "March 2017",
            "to": "July 2019",
            "description": "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
        },
        {
            "title": "Software Enginer",
            "company": "Company Pvt. Ltd.",
            "from": "March 2017",
            "to": "July 2019",
            "description": "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
        }
    ],
    "education": [
        {
            "title": "Compouter Science And Engineering",
            "college": "Some College of Engineering 1",
            "from": "June 2007",
            "to": "Current",
            "description": "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
        },
        {
            "title": "Compouter Science And Engineering",
            "college": "Some College of Engineering 1",
            "from": "June 2007",
            "to": "July 2011",
            "description": "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
        },
        {
            "title": "Compouter Science And Engineering",
            "college": "Some College of Engineering 1",
            "from": "June 2007",
            "to": "July 2011",
            "description": "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
        },
        {
            "title": "Compouter Science And Engineering",
            "college": "Some College of Engineering 1",
            "from": "June 2007",
            "to": "July 2011",
            "description": "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
        },
        {
            "title": "Compouter Science And Engineering",
            "college": "Some College of Engineering 1",
            "from": "June 2007",
            "to": "July 2011",
            "description": "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
        }
    ]
}
`