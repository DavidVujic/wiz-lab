const fields = require('./src/fields.js')
const question = require('./src/question.js')

async function main (fields) {
  const answers = []
  for (const field of fields) {
    const answer = await question(field)
    answers.push(answer || {value: 0})
  }

  return answers
}

async function calculate (answers) {
  const sum = answers.reduce((acc, opt) => acc + opt.value, 0)

  console.log(sum)
}

main(fields).then(calculate)
