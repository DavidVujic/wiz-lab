const fields = []

function opt (name, value) {
  return {
    name,
    value
  }
}

const tabsOrSpaces = {options: [opt('tabs', 1), opt('spaces', 2)]}
const linting = {options: [opt('jshint', 1), opt('jshint', 2), opt('eslint', 3)]}
const classes = {options: [opt('classes', 1), opt('functions', 2)]}

fields.push(tabsOrSpaces)
fields.push(linting)
fields.push(classes)

module.exports = fields
