const path = require(`path`);
const watches = require('./src/data/watches.json');


exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const watchTemplate = path.resolve(`./src/templates/watch.js`)

  return watches.map(watch => {
    return createPage({
      path: `listings/${watch.id}-${watch.make}-${watch.model}`.replace(/\s+/g, '-').toLowerCase(),
      component: watchTemplate,
      context: {
        watch: watch
      }
    })
  });

}
