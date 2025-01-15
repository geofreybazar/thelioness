// src/useAnchor.js
import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
import { AnchorProvider, Program } from '@project-serum/anchor';
import idl from './idl.json'; // Import your IDL file

const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
const opts = { preflightCommitment: 'processed' };
const provider = new AnchorProvider(connection, window.solana, opts);
const programId = new PublicKey('FHxitH28xfbZZqrnreHrZQm4jSvUBCDeTKMrFNsNDZLL'); // Your program ID
const program = new Program(idl, programId, provider);

export { provider, program };
