// scripts/client.js

import Dash from "dash"
import * as dotenv from "dotenv"
dotenv.config()

const { MNEMONIC, NETWORK } = process.env

export const client = new Dash.Client({
  network: NETWORK,
  wallet: {
    mnemonic: MNEMONIC,
    unsafeOptions: {
      skipSynchronizationBeforeHeight: 990000,
    },
  },
})