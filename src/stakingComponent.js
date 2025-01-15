// src/StakingComponent.js
import React, { useState } from 'react';
import { program } from './useAnchor';

const StakingComponent = () => {
  const [amount, setAmount] = useState(0);
  const [userInfoAccount, setUserInfoAccount] = useState(null); // This should be set to the user's info account
  const [userStakingWalletAccount, setUserStakingWalletAccount] = useState(null); // User's token account
  const [adminStakingWalletAccount, setAdminStakingWalletAccount] = useState(null); // Admin's token account
  const [stakingTokenAccount, setStakingTokenAccount] = useState(null); // Staking token mint
  const [adminPublicKey, setAdminPublicKey] = useState(null); // Admin's public key

  const handleStake = async () => {
    const user = provider.wallet.publicKey;

    try {
      const tx = await program.rpc.stake(new anchor.BN(amount), {
        accounts: {
          user,
          userInfo: userInfoAccount,
          userStakingWallet: userStakingWalletAccount,
          adminStakingWallet: adminStakingWalletAccount,
          stakingToken: stakingTokenAccount,
          admin: adminPublicKey,
          systemProgram: anchor.web3.SystemProgram.programId,
        },
      });
      console.log('Transaction Signature', tx);
    } catch (err) {
      console.error('Error staking:', err);
    }
  };

  const handleUnstake = async () => {
    const user = provider.wallet.publicKey;

    try {
      const tx = await program.rpc.unstake({
        accounts: {
          user,
          userInfo: userInfoAccount,
          userStakingWallet: userStakingWalletAccount,
          adminStakingWallet: adminStakingWalletAccount,
          stakingToken: stakingTokenAccount,
          admin: adminPublicKey,
          systemProgram: anchor.web3.SystemProgram.programId,
        },
      });
      console.log('Transaction Signature', tx);
    } catch (err) {
      console.error('Error unstaking:', err);
    }
  };

  const handleClaimReward = async () => {
    const user = provider.wallet.publicKey;

    try {
      const tx = await program.rpc.claimReward({
        accounts: {
          user,
          userInfo: userInfoAccount,
          userStakingWallet: userStakingWalletAccount,
          adminStakingWallet: adminStakingWalletAccount,
          stakingToken: stakingTokenAccount,
          admin: adminPublicKey,
          systemProgram: anchor.web3.SystemProgram.programId,
        },
      });
      console.log('Transaction Signature', tx);
    } catch (err) {
      console.error('Error claiming reward:', err);
    }
  };

  return (
    <div>
      <h1>Stake Tokens</h1>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleStake}>Stake</button>
      <button onClick={handleUnstake}>Unstake</button>
      <button onClick={handleClaimReward}>Claim Rewards</button>
    </div>
  );
};

export default StakingComponent;
