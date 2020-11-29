const path = require(`path`);
const comps = require('./src/data/competitions.json');


exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const compTemplate = path.resolve(`./src/templates/competition.js`)

  return comps.map(comp => {
    return createPage({
      path: `competitions/${comp.id}-${comp.prize}`.replace(/\s+/g, '-').toLowerCase(),
      component: compTemplate,
      context: {
        comp: comp
      }
    })
  });

}
