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

async function calculate (responses) {
  const sum = responses.reduce((acc, response) => acc + response.data.value, 0)

  console.log(sum)
  console.log(JSON.stringify(responses, null, 2))
}

main(fields).then(calculate)
