require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remind concert harvest drop tackle seed'; 
let testAccounts = [
"0x4d47f60d16600e2f5693bc60441506cba5e8664173f6643f6db1234f88171671",
"0x21e32087c6c8ec3d5a143e335bae584ae1067c6fda2046221a314a050d226a66",
"0xf4148522948acc8875bc244ba6981c3136d78f01b0b91e4f689258f11bca22fd",
"0x85e3a59d4b228a53f31d8d8b6fae82a3a52763f4e4d51304981ca9e9b7eb647e",
"0xcd88f56b36d750c39f76a090d53fc658dcb41d71bc90cda60771b9690a7d607f",
"0x8a5554a023150b1fdc832dea8358f03f85367df864306493bca64e16e6496dca",
"0x1649aee9b71ac53bb527e4b51d2edb96d149c7d4a7631555245db387aae6952a",
"0x6e70caa7709e2dd81040bf9c22b8ea14c78d3b9035f4789ac3505121e72ed51c",
"0xafd84f42012d405ddf1520aba0e7f66e35b7608df5b9f3ab3f395ba02d1dcfb6",
"0x7a2284e6054c333365387e6de12b0f859d874ef34465c6c42be5593c030ab1ca"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
