# Sheet Mapper

> Make simple maps with simple spreadsheets. A NuxtJS (VueJS 2.x) project, with the Mapbox technology, Google Sheet API. Done by DemocraciaOS

- Created & mainly maintained by @guillecro from Democracia en Red

## How it works

You will need the following stuff for it to work:

- A Google Sheet, based in [this template](https://docs.google.com/spreadsheets/d/13eSJ8ZdT42-ZnrXSdwOtiFTUb2eVDgX400XTYGgLJps). Copy it by goint to `File > Make a copy`
- An API Key from Google Cloud Console. You might have to create it in [console.cloud.google.com](https://console.cloud.google.com/). You might also want to restrict the API Key, specifically for Google Sheet API and, if possible, for a specific domain or IP. 
- A Mapbox API Key. Go to [Mapbox](https://mapbox.com) and create an account. Make sure you don't use the public key. Create a new one and restrict it. 

## How do I make this work?

#### First, we need to make the spreadsheet

For that, we will use [this template](https://docs.google.com/spreadsheets/d/13eSJ8ZdT42-ZnrXSdwOtiFTUb2eVDgX400XTYGgLJps). Please DONT change the cells A1, B1, C1 and D1. This are **required** for the form to work.

Again: **title, latitude, longitude, and color** are required. Please don't change it.

Make a copy of [this template](https://docs.google.com/spreadsheets/d/13eSJ8ZdT42-ZnrXSdwOtiFTUb2eVDgX400XTYGgLJps) by going to `File > Make a copy`.

Once you have your own copy, complete it, add values and change the title of the spreadsheet. You can also create other "titles" from E1 and etc. They will be added to the pop-up as extra information. How about you add for example a very useful "Description" column?

## Development

Remember, you need NodeJS and NPM. You might also need some knowledge in [Vue.js](https://vuejs.org). and [Nuxt.js](https://nuxtjs.org).

1. Clone this repo in a directory of your preference.
2. Execute in a terminal `npm install`
3. Create a .env file for the development environment. (You might want to read the next title)
4. 

### Environment variables

Create a `.env` file for development

```
BASE_URL=
GOOGLE_API_KEY=
GOOGLE_SHEET_ID=
GOOGLE_ANALYTICS=
MAPBOX_API_KEY=
MAPBOX_MAP_STYLE=
MAP_CENTER_LATITUDE=
MAP_CENTER_LONGITUDE=
MAP_ZOOM_DEFAULT=
```

Some notes about the variables:

- Please, use dot ( . ) and not coma ( ,  ) for the `MAP_CENTER_LATITUDE` and `MAP_CENTER_LONGITUDE` variables. Ex: `-58.26192`
- If you need help to set the `MAP_CENTER_LATITUDE`, `MAP_CENTER_LONGITUDE` and `MAP_ZOOM_DEFAULT` check the link we left in the *Cool tools* section

### Cool things

Some cool things to have in mind:

#### Define the MAP_CENTER_XXX and the MAP_ZOOM_DEFAULT environment variables

To define the center point of the map, use this tool: [Location Center](https://demos.mapbox.com/location-helper/)

#### NPM scripts

Here are some references.

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# to fix lint stuff in a terminal
$ npm run lintfix

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

##### Question: Why Nuxt.js and not a simple VueJS SPA?

Actually, you can build this project in SPA mode. The reason why I choosed 

## Deploying

There are two ways to do it

### The classic way

Copy your code to your server, execute the build, and launch the server. That's it. No need to do anything else.

```
# build for production and launch server
$ npm run build
$ npm run start
```
### The Docker way

If you need to make an image and run a docker container, you might create an image of this repository. There is a Dockerfile available for that. But notice this: The application **has** to be built with env variables.

But there is a workaround. In this case, we used `'nuxt-env'`, a module of Nuxt.js that enables the possibility to inject environment variables in runtime.

So you can build the image, and then run the container with the proper environment variables for production, and, it works!

## References

This project is based in the article ["Sheet Mapper"](https://demos.mapbox.com/location-helper/) from [Mapbox](https://mapbox.com/) in its series of **impact tools**

Go check it out. It's an amazing article and it inspired us to create this repository.

## How can I contribute?

* Create issues, we will look at them. Be specific!
* Want to contribute with a new feature? Fork the repo, make your changes, and create a poll request!


---

This repository is under the license of **GNU General Public License, Version 3**