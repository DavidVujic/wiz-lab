function handleTrigger (context, blob) {
  const data = {
    raw: blob,
    timestamp: Date.now()
  }

  context.bindings.outputBlob = data

  context.done()
}

module.exports = handleTrigger
