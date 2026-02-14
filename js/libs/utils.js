var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");

// GLOBAL UTILS:
(function(exports) {
	exports.randInt = function(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};
	exports.randFloat = function(min, max) {
		return Math.random() * (max - min + 1) + min;
	};
	exports.lerp = function (value1, value2, amount) {
		amount = amount < 0 ? 0 : amount;
		amount = amount > 1 ? 1 : amount;
		return value1 + (value2 - value1) * amount;
	};
	exports.getDistance = function(x1, y1, x2, y2) {
		return Math.sqrt((x2 -= x1) * x2 + (y2 -= y1) * y2);
	};
	exports.getDirection = function(x1, y1, x2, y2) {
		return Math.atan2(y1 - y2, x1 - x2);
	};
	exports.getAngleDist = function(a, b) {
	    var p = Math.abs(b - a) % (Math.PI * 2);
	   	return (p > Math.PI ? (Math.PI * 2) - p : p);
	};
	exports.isNumber = function(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	};
	exports.isString = function(s) {
		return (s && typeof s == "string");
	};
	exports.kFormat = function(num) {
    	return num>999?(num/1000).toFixed(1)+'k':num;
	};
	exports.mFormat = function(num) {
    	return num>999999?(num/1000000).toFixed(1)+'m':num;
	};
	exports.capitalizeFirst = function(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};
	exports.fixTo = function(n, v) {
		return parseFloat(n.toFixed(v));
	};
	exports.sortByPoints = function(a, b) {
	 	return parseFloat(b.points) - parseFloat(a.points);
	};
}(typeof exports==='undefined'?this.UTILS={}:exports));

}
