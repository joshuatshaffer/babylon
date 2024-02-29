//Copied from https://gist.github.com/Protonk/5367430 on Aug 5, 2015
//Heavily edited from original
function newRandomGenerator() {
	var max = Math.pow(2, 32),
	    seed;
	return {
		setSeed : function(val) {
			seed = val || Math.round(Math.random() * max);
		},
		getSeed : function() {
			return seed;
		},
		number : function() {
			// creates randomness...somehow...
			seed += (seed * seed) | 5;
			// Shift off bits, discarding the sign. Discarding the sign is
			// important because OR w/ 5 can give us + or - numbers.
			return (seed >>> 32) / max;
		},
		//Joshua Shaffer added all below here.
		range : function(min, max) {
			return this.number() * (max - min) + min;
		},
		rangeInt : function(min, max) {
			return Math.floor(this.range(min, max));
		}
	};
}
