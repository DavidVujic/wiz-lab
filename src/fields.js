const fields = []

function opt (name, value) {
  return {
    name,
    value
  }
}

fields.push({question: 'Tabs or spaces?', options: [opt('tabs', 1), opt('spaces', 2)]})
fields.push({question: 'Favorite linter?', options: [opt('jshint', 1), opt('jshint', 2), opt('eslint', 3)]})
fields.push({question: 'Classes or functions?', options: [opt('classes', 1), opt('functions', 2)]})

module.exports = fields
