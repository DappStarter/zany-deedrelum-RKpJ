require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney arena oxygen food edge razor mushroom erosion hockey problem equal genius'; 
let testAccounts = [
"0x1f5e5f11e88ee8f6704782c0993b2b535e0edccb84d89028c07f5fa2c6286b87",
"0x47a94c74530e229f6da120fc19631e8e61a12dd22bc4ecc249fae7030601e6b5",
"0x7e521e3efdcc6758cbef5b49116865b5e8810702bbe7f8a4a986607e4c6941ff",
"0xd50735aa307c508a3f1e3b92c7e122f33f1e6dd4752be4daef0067d7522254f9",
"0x99a217216e9d6a682fc3afbc986bf0ad13e23a17cab029f83de658ec711e18ce",
"0x0edb3c079885fa411509ff6ab4e9ad3b10c88ad73d5379d6123534e85e3808b4",
"0x23fb62028a1a2dcf5c672d5339f8b9c08a4d4988efd34d314553ab0abbe3e990",
"0x81d46ad91e8bf5883d500a643c9e1f711285ab18dd7b32fe663e8e0a6a330877",
"0x7ca58449b9fd57e36dfcd2d6f96fc46c209268f2678bbfc42fc262566d803192",
"0x00d4b003613b4178d7952e883f4222201648991736e5d17403fd99d26a92fefa"
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
            version: '^0.8.0'
        }
    }
};

