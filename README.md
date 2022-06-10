# NYT Top Stories

## Overview

NYT Top Stories is the place to get your daily news. 

### Endpoints
This is a React application built using the [New York Times Top Stories API](https://developer.nytimes.com/docs/top-stories-product/1/overview). The Top Stories API returns an array of articles currently on the specified section.

Endpoints include these section values: arts, automobiles, books, business, fashion, food, health, home, insider, magazine, movies, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, t-magazine, travel, upshot, us, and world.

![Enpoint](https://user-images.githubusercontent.com/93230374/171770276-3e28a581-9341-4066-9229-feb13044b1f3.png)

These are examples of the API's endpoints:

```
https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=yourkey
https://api.nytimes.com/svc/topstories/v2/home.json?api-key=yourkey
https://api.nytimes.com/svc/topstories/v2/science.json?api-key=yourkey
https://api.nytimes.com/svc/topstories/v2/us.json?api-key=yourkey
https://api.nytimes.com/svc/topstories/v2/world.json?api-key=yourkey
```

### Home Endpoint
The `/home.json` endpoint gets the articles currently on the homepage for the New York Times website. The buttons at the top allow you to navigate to different sections, just like an old-timey newspaper.

### API Key
An API key is required to utilize the API. Here's the [instructions](https://developer.nytimes.com/get-started) to get started using the API. Once you create a developer account on New York Times, you'll have to register your application to access the API key.
- Tip: Store your API key in a `.env` or `.env.local` file as environment variables in the root of your project. Make sure the `.env` or `.env.local` is added to the `.gitignore` file so you dont accidentally push up your API key. [Read more](https://create-react-app.dev/docs/adding-custom-environment-variables/#adding-development-environment-variables-in-env)

### Project Management Tools

- Wireframes
  Visit the [Figma](https://www.figma.com/file/iRUEaJ307s8nNkrBffwTaC/NY-Times-Reader) page to see them in full.



## Learning Goals
- Continue working with and gaining confidence with React fundamentals 
- Continue working with and gaining confidence with React Router to build a multipage application
- Continue working with and gaining confidence with React Context API
- REST APIs
- Asynchronous JavaScript

## Getting Started
To get a local copy up and running follow these simple steps.

### Installation

1. In your terminal, clone the repo
   ```sh
   git clone git@github.com:zliibbe/ny-times-news-reader.git
   ```
2. `cd` into the root directory
    ```sh
   cd ny-times-news-reader
   ```
3. Install NPM packages
   ```sh
   npm i
   ```
4. Start the server to view the application in the browser
   ```sh
   npm start
   ``` 
   - Runs the app in the development mode.
   - Open http://localhost:3000 to view it in the browser.
   - The page will reload if you make edits.


## Features

### Filer By Section

A user can click buttons to navigate to different sections of the newspapers' articles.

### Article Detail

In any of the views that show articles listed, the user is able to click on the article for more information. If the abstract of the article is interesting for them the user can click `Read More` and visit the article on [The New York Times](https://www.nytimes.com/) to read it in full.


## Future Additions

- Add gifs to README
- Add Cypress e2e testing
- Deploy Site
- Utilize the additional endpoints by adding additional buttons in header
- Refine styling & responsive design

## Technologies Used 
- [React](https://reactjs.org/)
- [React Router](https://v5.reactrouter.com/web/guides/quick-start)
- Javascript
- HTML
- CSS
- [day.js](https://day.js.org/en/)
- [React Dev Tools (Chrome Dev Tools)](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)


## Contributors
<table style="width:75%">
    <tr>
        <th> Zach Liibbe</td>
    </tr>
    <tr>
        <td>    
        <a href="https://github.com/zliibbe">GitHub  -
        <a href="https://www.linkedin.com/in/zachliibbe/">LinkedIn
        </td>
    </tr>
    <tr>
    </tr>
    <tr>
 <td><img src="https://github.com/zliibbe.png" alt="Zach"
 width="150" height="auto" /></td>
</table>

## Credits
- [Create React App](https://create-react-app.dev/)
- [New York Times API](https://developer.nytimes.com/docs/top-stories-product/1/overview)
