// scripts/retrieveName.js

import { client } from './client.js'

// const { LABEL } = process.env

const LABEL = "streamtest20240330"

const retrieveName = async () => {
  const { platform } = client
  const name = platform.names.resolve(LABEL)
  return name
}

retrieveName()
//   .then(data => console.log(JSON.stringify(data)))
  .then(data => console.log(data))
  .catch(error => console.error('Something went wrong:\n', error))
  .finally(() => client.disconnect())