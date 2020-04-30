
`npm i -D parcel-bundler sass @babel/core sass @babel/core @babel/plugin-transform-runtime @babel/runtime-corejs2 --save-exact`

### Add babel with parcel

add this in babel.rc
<pre>
{
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": 2,
        "regenerator": true
      }
    ]
  ]
}
</pre>

If you would like to read the babel docs: https://babeljs.io/docs/en/babel-plugin-transform-runtime


to run sass files: import Sass into JS file.

no need to compile sass to a css file, it does it behind the scenes in js.

babel is also ran behind the scenes

 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "rm -rf ./development && rm -rf ./.cache && parcel public/index.html --out-dir development -p 3000",
    "build": "parcel build public/index.html --out-dir dist --public-url ./"
  }

  `npm run dev` to run development server
  `npm run build` to run in production 
