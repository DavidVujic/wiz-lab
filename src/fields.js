const fields = []

function opt (name, value) {
  return {
    name,
    value
  }
}

fields.push({options: [opt('tabs', 1), opt('spaces', 2)]})
fields.push({options: [opt('jshint', 1), opt('jshint', 2), opt('eslint', 3)]})
fields.push({options: [opt('classes', 1), opt('functions', 2)]})

module.exports = fields
