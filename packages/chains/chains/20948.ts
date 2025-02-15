import type { Chain } from "../src/types";
export default {
  "chain": "Avalanche",
  "chainId": 20948,
  "explorers": [],
  "faucets": [],
  "features": [],
  "icon": {
    "url": "https://images.ctfassets.net/9bazykntljf6/62CceHSYsRS4D9fgDSkLRB/877cb8f26954e1743ff535fd7fdaf78f/avacloud-placeholder.svg",
    "width": 256,
    "height": 256,
    "format": ".svg"
  },
  "infoURL": "https://avacloud.io",
  "name": "GoldFever",
  "nativeCurrency": {
    "name": "GoldFever Token",
    "symbol": "GFT",
    "decimals": 18
  },
  "networkId": 20948,
  "redFlags": [],
  "rpc": [
    "https://goldfever.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://20948.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://subnets.avax.network/goldfever/testnet/rpc"
  ],
  "shortName": "GoldFever",
  "slug": "goldfever",
  "testnet": true
} as const satisfies Chain;