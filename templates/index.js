const manifest = require('../public/manifest.json')

const template = ({ title, content, feature, store }) => {
    const realJsName = manifest[`${feature}/index.js`]
    const realCssName = manifest[`${feature}/index.css`]
    const vendors = manifest['chunk-vendors.js']
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="/assets/${realCssName}">
        <script src="/assets/${vendors}"></script>
        <title>${title}</title>
      </head>
      <body>
        <script id="store" type="application/json">${JSON.stringify(store)}</script>
        <div id="root">${content}</div>
        <script src="/assets/${realJsName}"></script>
      </body>
    </html>
    `
}

module.exports = template
