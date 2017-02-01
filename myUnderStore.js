(function(){

	// establish root object
	var root =  typeof self =='object' && self.self === self  && self || 
				typeof global == "object"  &&  global.global === global && global  ||
				this || 
				{};
	var previousUnderscore = root._;
				

	var ArrayProto = Array.prototype,ObjProto  = Object.prototype;
	var SymblProto = typeof Symbol !=="undefined"  ?  Symbol.prototype : null;

	// Create quick reference variables for speed access to core prototypes.
	var push = ArrayProto.push,
		slice = ArrayProto.slice,
		toString = ObjProto.toString,
		hasOwnProperty = ObjProto.hasOwnProperty;

	var nativeIsArray = Array.isArray,
		nativeKeys 	= 	Object.keys,
		nativeCreate = Object.create;d	

	var _ =function (obj) {
		if(obj instanceof _) return obj;
		if( !(this instanceof  _)) return new _(obj);
		this._wrapped =obj;
	}	





	
}());