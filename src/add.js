const https = require('https')
const config = require('../config.js')

function postExecutor (options, data, resolve, reject) {
  const req = https.request(options, (res) => {
    res.setEncoding('utf8')
    let responseData

    res.on('data', (chunk) => {
      responseData += chunk
    })
    res.on('end', () => resolve(responseData))
    res.on('error', () => reject)

    if (res.statusCode > 299) {
      reject(new Error(res.statusCode))
    }
  })

  req.on('error', reject)
  req.write(data)
  req.end()
}

async function add (obj) {
  const data = JSON.stringify(obj)

  const options = {
    method: 'POST',
    hostname: config.hostname,
    port: config.port,
    path: config.path,
    headers: config.headers
  }

  options.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  options.headers['Content-Length'] = Buffer.byteLength(data)

  const executor = postExecutor.bind(null, options, data)
  await new Promise(executor)
}

module.exports = add
