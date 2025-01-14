import axios from "axios";

  const network = "mainnet-beta"; // Use "mainnet-beta" or "devnet"
  const mintAddress = import.meta.env.VITE_MINT_ADDRESS
  const API_KEY_ID = import.meta.env.VITE_THE_BLOCKCHAIN_API_KEY_ID; // Replace with your API Key ID
  const API_SECRET_KEY = import.meta.env.VITE_THE_BLOCKCHAIN_API_SECRET_KEY; // Replace with your API Secret Key

const getElsaTokenBalance = async (publicKey) => {
      const authorization = {
        headers:{
        "APIKeyID": API_KEY_ID,
        "APISecretKey": API_SECRET_KEY,
        "Content-Type": "application/json",
        }        
      }
      const parameters =  {
        network,
        public_key: publicKey,
        mint_address: mintAddress
      }
      const response = await axios.post(`https://api.blockchainapi.com/v1/solana/wallet/balance`,parameters,authorization)
      return response.data;
}

export default {
    getElsaTokenBalance
}