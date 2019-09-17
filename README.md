
<h1 align="center">
  Next generation SPA/PWA boilerplate
</h1>

Starter template to quickly build front-ends with a modern configuration and best-practices in mind.  


## 🚀 Quick start: 
[Click here to use this template](https://github.com/loteoo/react-parcel-sass/generate), or run these commands:  
```
# Clone project
git clone https://github.com/loteoo/react-parcel-sass.git

cd react-parcel-sass

npm install         # Install dependencies
npm start           # Dev server + live reload
```


```
npm run build   # Build for production and generate service worker
```
Or use a [.zip download](https://github.com/loteoo/react-parcel-sass/archive/master.zip)


## Features
- Uses [Parcel](https://parceljs.org/) for compilation, dev server and hmr...
- Works offline out of the box using [workbox](https://developers.google.com/web/tools/workbox/) to generate service workers and precache application files
- PWA/SPA ready with a default web app manifest
- Sane CSS defaults using [sanitize.css](https://csstools.github.io/sanitize.css/), a best-practices CSS reset
- Uses the [Standard](https://standardjs.com/) JavaScript style guide with eslint  
- [JSX](https://reactjs.org/docs/introducing-jsx.html) and all of the ES6-7-8-9 goodies are ready to go thanks to Parcel.
-  Automatic import of the jsx pragma


## File structure
Proposed folder structure as your project grows. Adapt it to your needs.  

```
├── dist/                             # Compiled static files (parcel output)
├── src/                              # Application source code
│   ├── app/                          # App files
│   │   ├── pages/                    # Pages are top level components, triggered by a router
│   │   ├── components/               # App components
│   │   │   ├── {ComponentName}/      # Advanced component with multiple files
│   │   │   │   ├── actions.js        # Local actions
│   │   │   │   ├── index.jsx         # Exported view
│   │   │   │   ├── init.js           # Initial local state
│   │   │   │   ├── style.css         # Component styles
│   │   │   │   └── other.svg         # Other related files (which are only used by the component)
│   │   │   └── {ComponentName}.jsx   # Single file component
│   │   ├── actions.js                # Global actions
│   │   ├── init.js                   # Initial app state
│   │   ├── utils.js                  # Misc utility functions
│   │   └── view.jsx                  # Root view
│   ├── assets/                       # Global application assets (favicon, fonts...)
│   ├── app.js                        # App instantiation
│   ├── global.css                    # Global styles
│   ├── index.html                    # Parcel entry
│   └── manifest.webmanifest          # Web app manifest
├── static/                           # Files to be copied in dist folder
├── ...
...
```

## Live preview
https://react-parcel-sass-demo.netlify.com/



---  





