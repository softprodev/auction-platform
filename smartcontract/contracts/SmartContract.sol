pragma solidity ^0.4.8;

contract SmartContract {

	Contract[] public contracts; //create array of contracts
	//Bid[] public bids;
	mapping(uint => Bid[]) bidMap;
	uint count;

	struct Contract { //create Contract datatype
		uint contractId;
		bytes32 asset;
		uint quantity;
		uint targetPrice;
		uint targetTime;
	}

	struct Bid {
		uint contractId;
		bytes32 supplier;
        address owner;
        uint price;
        uint bidTime;
    }

    function SmartContract() {
    	count = 0;
    }

	function addContract(bytes32 _asset, uint _quantity, uint _targetPrice, uint _targetTime) returns (bool success) {
		Contract memory newContract; //creates new struct and memory
		newContract.contractId = count;
		newContract.asset = _asset;
		newContract.quantity = _quantity;
		newContract.targetPrice = _targetPrice;
		newContract.targetTime = _targetTime;

		contracts.push(newContract);//add elem to array
		count += 1;
		return true;
	}

	function bid(uint cid, bytes32 _supplier, uint _price, uint _bidTime) returns (bool success) {
		Bid memory newBid;
		newBid.contractId = cid;
		newBid.supplier = _supplier;
		newBid.price = _price;
		newBid.bidTime = _bidTime;
		newBid.owner = msg.sender;

		bidMap[cid].push(newBid);
		return true;
	}

	function getContracts() constant returns (uint[], bytes32[], uint[], uint[], uint[]) {
		uint length = contracts.length;

		uint[] memory contractId = new uint[](length);
		bytes32[] memory asset = new bytes32[](length);
		uint[] memory qty = new uint[](length);
		uint[] memory targetPrice = new uint[](length);
		uint[] memory targetTime = new uint[](length);

		for (uint i = 0; i < contracts.length; i++) {
			Contract memory currentContract;
			currentContract = contracts[i];

			contractId[i] = currentContract.contractId;
			asset[i] = currentContract.asset;
			qty[i] = currentContract.quantity;
			targetPrice[i] = currentContract.targetPrice;
			targetTime[i] = currentContract.targetTime;
		}

		return (contractId, asset, qty, targetPrice, targetTime);
	}

	function getBids(uint contractId) returns (bytes32[], address[], uint[], uint[]){
		uint length = bidMap[contractId].length;
		Bid[] bids = bidMap[contractId];
		bytes32[] memory suppliers = new bytes32[](length);
		address[] memory bidders = new address[](length);
		uint[] memory prices = new uint[](length);
		uint[] memory timesToComplete = new uint[](length);

		for (uint i = 0; i < length; i++) {
			suppliers[i] = bids[i].supplier;
			bidders[i] = bids[i].owner;
			prices[i] = bids[i].price;
			timesToComplete[i] = bids[i].bidTime;
		}

		return (suppliers, bidders, prices, timesToComplete);

	}

}