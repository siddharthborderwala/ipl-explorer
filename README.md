# IPL Explorer

- Visit here - [IPL Explorer](https://iplexplorer.vercel.app)

I started building this website with 3 things in my mind

- Professional looking user interface and good user experience
- Performance of the website
- Page load speeds

## Choice of framework and libraries

- I chose nextjs for this project as I primarily am a React developer and I wanted to show my proficiency with it. I have worked with vuejs, but I wanted to be this project one of my best works, so I used the tech I had experience with and nextjs is similar (framework) to nuxtjs.

- Also, nextjs is provides with SSG and deploying it on vercel helped me to have an API for fetching the IPL data.

- Nextjs by default minifies the output bundle and vercel serves it with compression, so that helps with page speed load.

- I used tailwindcss because it helps make development faster and I can use css without even writing css, just utility classes are enough to give a professional look to the site. Also, tailwindcss is highly customizable.

## Implementation of Search and Filter

- I have used a very basic filtering logic. The user types the filter text inside a text input box and submits it, I filter through each of the attributes of all the datasets in the active tab and if I get a match it will be returned in the list (`Array.prototype.filter` method) and then the array is sliced for pagination (`Array.prototype.slice` method) and then an array of Accordians is returned (`Array.prototype.map` method).

## Speed insights

- I tested my page score using Lighthouse and I didn't get over 95 in all the fields, so I took all the suggestions and made changes accordingly.

- Now I pre-connect to gstatic for faster font css loading and pre-load the fonts.

- Now, I am getting 100 in all the fields, performance, accessibility, best practices and seo. You can have a look at the report yourself [here](https://iplexplorer.vercel.app/report.pdf).

- Also, vercel has an edge-network (cdn network) and caching for faster page loads.
