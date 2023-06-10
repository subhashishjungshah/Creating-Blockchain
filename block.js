class Block{
	
	constructor({ timeStamp, preHash, hash, data }){
		this.timeStamp = timeStamp;
		this.preHash = preHash;
		this.hash = hash;
		this.data = data;		
	}
	
}

demo_block = new Block({

	timeStamp: '04/04/200',
	preHash: '0xcac',
	hash: '0xca',
	data: 'Hello Subahshish',

})

console.log(demo_block);
