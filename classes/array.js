// I honesly didn't know what to do here, guess I'll be needing to do more work by researching this es5 thing...


Array.prototype.isEqual = function(array){
	for(let i=0; i<this.length; i++){
	let ele = this[i];
       let arrayEl = array[i];

		if(ele !=arrayEl){
                return false;
		}
	}

return true;
}
