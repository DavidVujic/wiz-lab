const readline = require('readline')

function fieldExecutor (field, resolve) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  const separator = field.options.length > 2 ? ', ' : ' vs '
  const q = field.options.map(opt => `${opt.name} (${opt.value})`).join(separator)

  rl.question(`${q} `, (answer) => {
    const parsed = parseInt(answer, 10)
    const res = field.options.find(opt => opt.value === parsed)

    rl.close()
    resolve(res)
  })
}

async function question (field) {
  const executor = fieldExecutor.bind(null, field)
  return new Promise(executor)
}

module.exports = question
