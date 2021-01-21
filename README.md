This is a [Next.js](https://nextjs.org/) project which uses static rendering for rendering each page.
The application is a Blog rendering project. It renders all the blogs and upon clicking a particular blog, renders the detailed information of that particular blog with some related links. On clicking upon any of the related links, it renders the detailed information of that particular blog.

The application renders the following pages:

### Home Page:

This is the landing page for the application. Consists of carousel with some images. Each slide consists of a button. Upon clicking the button, the user will be directed to the page which contains all the blog cards.

### Blogs:

This is page that has all the blog cards. The blog card is a component that consists of a blog-title, blog-image and a button 'Read more'. Upon clicking the button, the user will be directed to the page which contains the detailed information about that particular blog.

### Blog/[id]:

This page renders a blog with a particular id passed in params.

### Gallery:

This page consists of all the images that are related to all the blogs.

## Data:

The data for this application has been fetched from Contentstack(Headless CMS). 

### Content Types:

For this application, four content types are modelled.

1. Header:

This content type is a content block element and only a single entry is allowedr. The header in this project consists of few navigation links and a brand title. 

2. Footer:

This content type is a content block element and only a single entry is allowed. The footer consists of the brand title, subtitle, social media icons and copyright information.

3. Gallery:

This content type is a content block element and only a single entry is allowed. The gallery consists of all the images that supports the blogs.

4. Blogs:

This content type again is a content block element but has multiple entries allowed. The content type is used for entering all the information that is required for blogs.

## Running the Application:

The application is hosted on vercel.

Link for [application](https://blog-rendering-cms.vercel.app/).




 
