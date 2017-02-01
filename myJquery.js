/* my first jquery in wife homotown*/

(function(window,underfined){

	var jQuery = (function(){
		var jQuery = function( selector, context ) {
			return new jQuery.fn.init( selector, context, rootjQuery )
		};
		jQuery.fn = jquery.prototype ={
			constructor:jQuery,
			init:function(selector, context, rootjQuery ){}
		};
		jQuery.fn.init.prototype=jQuery.fn;
		jQuery.extend =  jQuery.fn.extend =function () {
			// body...
		};
		jQuery.extend({});
		return jQuery;
	})();
	window.jQuery = window.$ = jQuery;
})(window );