import Web3 from 'web3';

const ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))

var smartContractABI = [{"constant":false,"inputs":[{"name":"_cid","type":"uint256"},{"name":"_extraField","type":"bytes32"}],"name":"addField","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_asset","type":"bytes32"},{"name":"_quantity","type":"uint256"},{"name":"_targetPrice","type":"uint256"},{"name":"_targetTime","type":"uint256"}],"name":"addContract","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"contracts","outputs":[{"name":"contractId","type":"uint256"},{"name":"asset","type":"bytes32"},{"name":"quantity","type":"uint256"},{"name":"targetPrice","type":"uint256"},{"name":"targetTime","type":"uint256"},{"name":"ef1","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getBids","outputs":[{"name":"","type":"uint256[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"},{"name":"","type":"uint256[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getContracts","outputs":[{"name":"","type":"uint256[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"},{"name":"","type":"uint256[]"},{"name":"","type":"uint256[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_cid","type":"uint256"}],"name":"setBidTableContractId","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"cid","type":"uint256"},{"name":"_supplier","type":"bytes32"},{"name":"_price","type":"uint256"},{"name":"_bidTime","type":"uint256"}],"name":"bid","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}]
var smartContractAddress = '0x877745f82468d6448a8b15a585b200478fc64985';

const smartContract = ETHEREUM_CLIENT.eth.contract(smartContractABI).at(smartContractAddress);

/*var parts = ["wing", "nail", "door", "screw", "seat",
 "seatbelt", "carpet", "switch", "buckle", "fastener", "cup", "tray", "magazine"];
var suppliers = ["Ali", "Collin", "Ronen", "Jon", "Max", "Sunny", "Gillian", "Nihar", "Varun", "Oski", "Hug", "DeNero", "Rao"];
var qty = 209381;
var time = 2394;
var price = 1832;
var i = 1;*/

/* UNCOMMENT THE FOLLOWING PORTION IF YOU WANT A LOT OF CONTRACTS ON THE NETWORK */

/*
smartContract.addContract.sendTransaction(parts[i*31%(parts.length)], i+1*4*qty % 239, price*i+1*7%23, time*i+1*31%439, {from: ETHEREUM_CLIENT.eth.accounts[0], gas: 200000});
for(; i < 10; i++) {
  smartContract.addContract.sendTransaction(parts[i*31%(parts.length)], i+1*4*qty % 239, price*i+1*7%23, time*i+1*31%439, {from: ETHEREUM_CLIENT.eth.accounts[0], gas: 200000});
}

for(i = 0; i < 10; i++) {
  for (var j = 0; j < 8; j++){
    smartContract.bid.sendTransaction(i, suppliers[j*31%(parts.length)], price*j+1*7%23, time*j+1*31%439, {from: ETHEREUM_CLIENT.eth.accounts[0], gas: 200000});
  }
}
*/

export {ETHEREUM_CLIENT, smartContract};
