// scripts/retrieveContract.js

import { client } from "./client.js"

const { CONTRACT_ID } = process.env

const retrieveContract = async () => {
  return client.platform.contracts.get(CONTRACT_ID)
}

retrieveContract()
  .then((d) => console.dir(d.toJSON(), { depth: 5 }))
  .catch((e) => console.error('Something went wrong:\n', e))
  .finally(() => client.disconnect())