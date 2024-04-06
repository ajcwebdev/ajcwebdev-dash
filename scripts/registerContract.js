// scripts/registerContract.js

import { client } from "./client.js"

const { IDENTITY_ID } = process.env

const registerContract = async () => {
  const { platform } = client
  const identity = await platform.identities.get(IDENTITY_ID)
  const contractDocuments = {
    note: {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          "position": 0
        },
      },
      additionalProperties: false,
    },
  }
  const contract = await platform.contracts.create(contractDocuments, identity)
  console.dir({ contract: contract.toJSON() })
  // Sign and submit the data contract
  await platform.contracts.publish(contract, identity)
  return contract
}

registerContract()
  .then((d) => console.log('Contract registered:\n', d.toJSON()))
  .catch((e) => console.error('Something went wrong:\n', e))
  .finally(() => client.disconnect())