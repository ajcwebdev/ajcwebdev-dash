// scripts/retrieveContract.js

import { client } from "./client.js"

const retrieveContract = async () => {
  const contractId = ''
  return client.platform.contracts.get(contractId)
}

retrieveContract()
  .then((d) => console.dir(d.toJSON(), { depth: 5 }))
  .catch((e) => console.error('Something went wrong:\n', e))
  .finally(() => client.disconnect())