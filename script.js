var con;
var doDaStuff;
window.onload = function() {
	con = {
		txtin : document.getElementById("txt-in"),
		txtout : document.getElementById("txt-out"),
		seed : document.getElementById('seed')
	};
	doDaStuff = (function() {
		var charOfConq = [5];
		charOfConq[0] = "aeiouy";
		charOfConq[1] = "bcdfghjklmnpqrstvwxz";
		charOfConq[2] = charOfConq[0].toUpperCase();
		charOfConq[3] = charOfConq[1].toUpperCase();
		charOfConq[4] = "1234567890";

		rand = newRandomGenerator();

		return function() {
			var txtin = con.txtin.value;
			var seed = parseInt(con.seed.value);

			rand.setSeed(seed);
			var output = "";
			charator:
			for (var i = 0, len = txtin.length; i < len; i++) {
				var c = txtin.charAt(i);
				for (var j = 0; j < 5; j++) {
					var s = charOfConq[j];
					var index = s.indexOf(c);
					if (index >= 0) {
						l = s.length;
						index += Math.floor(rand.number() * l);
						if (index >= l) {
							index -= l;
						}
						output += s.charAt(index);
						continue charator;
					}
				}
				output += txtin.charAt(i);
				rand.setSeed(seed);
			}

			con.txtout.innerHTML = output;
		};
	})();
	doDaStuff();
};
