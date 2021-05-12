initSidebarItems({"fn":[["derive_bip44_pairs_from_mnemonic","Helper function to derive `num_accounts` child pairs from mnemonics Substrate derive function cannot be used because the derivation is different than Ethereum's https://substrate.dev/rustdocs/v2.0.0/src/sp_core/ecdsa.rs.html#460-470"],["development_chain_spec","Generate a chain spec for use with the development service."],["generate_accounts","Function to generate accounts given a mnemonic and a number of child accounts to be generated Defaults to a default mnemonic if no mnemonic is supplied"],["get_account_id_from_pair","Helper function to get an AccountId from Key Pair We need the full decompressed public key to derive an ethereum-style account Substrate does not provide a method to obtain the full decompressed public key Therefore, this function uses the secp256k1_ecdsa_recover method to recover the full key A solution without using the private key would imply solving the secp256k1 curve equation The latter is currently not possible with current substrate methods"],["get_chain_spec","Generate a default spec for the parachain service. Use this as a starting point when launching a custom chain."],["moonbeam_inflation_config",""],["testnet_genesis",""]],"struct":[["Extensions","The extensions for the [`ChainSpec`]."],["ExtensionsFork",""]],"type":[["ChainSpec","Specialized `ChainSpec`. This is a specialization of the general Substrate ChainSpec type."]]});