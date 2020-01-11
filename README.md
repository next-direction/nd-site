# ND Site Builder

> This project can be used to build a web site based on [Directus CMS](https://directus.io/)

#### Features

* Deeply nested page structure with automatic menu generation
* Basic page colors are calculated from one base color defined in Directus
* Every page can have a title, sub title and description
* Every page can have a lot of different elements, e.g.:
    * Header with text
    * Image with text
    * Icon with text
    * Feature lists
    
Each of the different element types will be rendered as separate section. 
In Directus you can configure the order of sections, number and order of elements per section, 
background color or image.

## Stack

As already mentioned, for backend I use Directus.

Frontend is built with Nuxt.js using Material Design Icons to match configuration in Directus.

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
