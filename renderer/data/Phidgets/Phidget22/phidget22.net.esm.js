/*!
 * Phidget22 JavaScript Library (Network Client) v3.15.2 (https://phidgets.com)
 *  phidget22 release 1.15.20230603
 * Copyright 2017-2023 Phidgets Inc.
 * Licensed under ISC
 */
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var check = function (it) {
  return it && it.Math == Math && it;
};
var global$D =
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  (function () { return this; })() || Function('return this')();

var fails$f = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$e = fails$f;
var functionBindNative = !fails$e(function () {
  var test = (function () {  }).bind();
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$3 = functionBindNative;
var FunctionPrototype$2 = Function.prototype;
var apply$2 = FunctionPrototype$2.apply;
var call$c = FunctionPrototype$2.call;
var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$3 ? call$c.bind(apply$2) : function () {
  return call$c.apply(apply$2, arguments);
});

var NATIVE_BIND$2 = functionBindNative;
var FunctionPrototype$1 = Function.prototype;
var bind$6 = FunctionPrototype$1.bind;
var call$b = FunctionPrototype$1.call;
var uncurryThis$i = NATIVE_BIND$2 && bind$6.bind(call$b, call$b);
var functionUncurryThis = NATIVE_BIND$2 ? function (fn) {
  return fn && uncurryThis$i(fn);
} : function (fn) {
  return fn && function () {
    return call$b.apply(fn, arguments);
  };
};

var isCallable$h = function (argument) {
  return typeof argument == 'function';
};

var objectGetOwnPropertyDescriptor = {};

var fails$d = fails$f;
var descriptors = !fails$d(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var NATIVE_BIND$1 = functionBindNative;
var call$a = Function.prototype.call;
var functionCall = NATIVE_BIND$1 ? call$a.bind(call$a) : function () {
  return call$a.apply(call$a, arguments);
};

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;
var NASHORN_BUG = getOwnPropertyDescriptor$2 && !$propertyIsEnumerable.call({ 1: 2 }, 1);
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$2(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var createPropertyDescriptor$5 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var uncurryThis$h = functionUncurryThis;
var toString$7 = uncurryThis$h({}.toString);
var stringSlice$1 = uncurryThis$h(''.slice);
var classofRaw$1 = function (it) {
  return stringSlice$1(toString$7(it), 8, -1);
};

var global$C = global$D;
var uncurryThis$g = functionUncurryThis;
var fails$c = fails$f;
var classof$8 = classofRaw$1;
var Object$5 = global$C.Object;
var split = uncurryThis$g(''.split);
var indexedObject = fails$c(function () {
  return !Object$5('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$8(it) == 'String' ? split(it, '') : Object$5(it);
} : Object$5;

var global$B = global$D;
var TypeError$f = global$B.TypeError;
var requireObjectCoercible$4 = function (it) {
  if (it == undefined) throw TypeError$f("Can't call method on " + it);
  return it;
};

var IndexedObject$1 = indexedObject;
var requireObjectCoercible$3 = requireObjectCoercible$4;
var toIndexedObject$5 = function (it) {
  return IndexedObject$1(requireObjectCoercible$3(it));
};

var isCallable$g = isCallable$h;
var isObject$8 = function (it) {
  return typeof it == 'object' ? it !== null : isCallable$g(it);
};

var path$4 = {};

var path$3 = path$4;
var global$A = global$D;
var isCallable$f = isCallable$h;
var aFunction = function (variable) {
  return isCallable$f(variable) ? variable : undefined;
};
var getBuiltIn$9 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path$3[namespace]) || aFunction(global$A[namespace])
    : path$3[namespace] && path$3[namespace][method] || global$A[namespace] && global$A[namespace][method];
};

var uncurryThis$f = functionUncurryThis;
var objectIsPrototypeOf = uncurryThis$f({}.isPrototypeOf);

var getBuiltIn$8 = getBuiltIn$9;
var engineUserAgent = getBuiltIn$8('navigator', 'userAgent') || '';

var global$z = global$D;
var userAgent$3 = engineUserAgent;
var process$3 = global$z.process;
var Deno = global$z.Deno;
var versions = process$3 && process$3.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
  match = v8.split('.');
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
if (!version && userAgent$3) {
  match = userAgent$3.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent$3.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}
var engineV8Version = version;

var V8_VERSION$1 = engineV8Version;
var fails$b = fails$f;
var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$b(function () {
  var symbol = Symbol();
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    !Symbol.sham && V8_VERSION$1 && V8_VERSION$1 < 41;
});

var NATIVE_SYMBOL$1 = nativeSymbol;
var useSymbolAsUid = NATIVE_SYMBOL$1
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var global$y = global$D;
var getBuiltIn$7 = getBuiltIn$9;
var isCallable$e = isCallable$h;
var isPrototypeOf$7 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
var Object$4 = global$y.Object;
var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$7('Symbol');
  return isCallable$e($Symbol) && isPrototypeOf$7($Symbol.prototype, Object$4(it));
};

var global$x = global$D;
var String$5 = global$x.String;
var tryToString$4 = function (argument) {
  try {
    return String$5(argument);
  } catch (error) {
    return 'Object';
  }
};

var global$w = global$D;
var isCallable$d = isCallable$h;
var tryToString$3 = tryToString$4;
var TypeError$e = global$w.TypeError;
var aCallable$8 = function (argument) {
  if (isCallable$d(argument)) return argument;
  throw TypeError$e(tryToString$3(argument) + ' is not a function');
};

var aCallable$7 = aCallable$8;
var getMethod$3 = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable$7(func);
};

var global$v = global$D;
var call$9 = functionCall;
var isCallable$c = isCallable$h;
var isObject$7 = isObject$8;
var TypeError$d = global$v.TypeError;
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$c(fn = input.toString) && !isObject$7(val = call$9(fn, input))) return val;
  if (isCallable$c(fn = input.valueOf) && !isObject$7(val = call$9(fn, input))) return val;
  if (pref !== 'string' && isCallable$c(fn = input.toString) && !isObject$7(val = call$9(fn, input))) return val;
  throw TypeError$d("Can't convert object to primitive value");
};

var shared$3 = {exports: {}};

var isPure = true;

var global$u = global$D;
var defineProperty$1 = Object.defineProperty;
var setGlobal$1 = function (key, value) {
  try {
    defineProperty$1(global$u, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global$u[key] = value;
  } return value;
};

var global$t = global$D;
var setGlobal = setGlobal$1;
var SHARED = '__core-js_shared__';
var store$3 = global$t[SHARED] || setGlobal(SHARED, {});
var sharedStore = store$3;

var store$2 = sharedStore;
(shared$3.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.21.1',
  mode: 'pure' ,
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var global$s = global$D;
var requireObjectCoercible$2 = requireObjectCoercible$4;
var Object$3 = global$s.Object;
var toObject$3 = function (argument) {
  return Object$3(requireObjectCoercible$2(argument));
};

var uncurryThis$e = functionUncurryThis;
var toObject$2 = toObject$3;
var hasOwnProperty = uncurryThis$e({}.hasOwnProperty);
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$2(it), key);
};

var uncurryThis$d = functionUncurryThis;
var id = 0;
var postfix = Math.random();
var toString$6 = uncurryThis$d(1.0.toString);
var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$6(++id + postfix, 36);
};

var global$r = global$D;
var shared$2 = shared$3.exports;
var hasOwn$a = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL = nativeSymbol;
var USE_SYMBOL_AS_UID = useSymbolAsUid;
var WellKnownSymbolsStore = shared$2('wks');
var Symbol$1 = global$r.Symbol;
var symbolFor = Symbol$1 && Symbol$1['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;
var wellKnownSymbol$e = function (name) {
  if (!hasOwn$a(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn$a(Symbol$1, name)) {
      WellKnownSymbolsStore[name] = Symbol$1[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};

var global$q = global$D;
var call$8 = functionCall;
var isObject$6 = isObject$8;
var isSymbol$1 = isSymbol$2;
var getMethod$2 = getMethod$3;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$d = wellKnownSymbol$e;
var TypeError$c = global$q.TypeError;
var TO_PRIMITIVE = wellKnownSymbol$d('toPrimitive');
var toPrimitive$1 = function (input, pref) {
  if (!isObject$6(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod$2(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$8(exoticToPrim, input, pref);
    if (!isObject$6(result) || isSymbol$1(result)) return result;
    throw TypeError$c("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive = toPrimitive$1;
var isSymbol = isSymbol$2;
var toPropertyKey$2 = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

var global$p = global$D;
var isObject$5 = isObject$8;
var document$3 = global$p.document;
var EXISTS$1 = isObject$5(document$3) && isObject$5(document$3.createElement);
var documentCreateElement$1 = function (it) {
  return EXISTS$1 ? document$3.createElement(it) : {};
};

var DESCRIPTORS$7 = descriptors;
var fails$a = fails$f;
var createElement$1 = documentCreateElement$1;
var ie8DomDefine = !DESCRIPTORS$7 && !fails$a(function () {
  return Object.defineProperty(createElement$1('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var DESCRIPTORS$6 = descriptors;
var call$7 = functionCall;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var createPropertyDescriptor$4 = createPropertyDescriptor$5;
var toIndexedObject$4 = toIndexedObject$5;
var toPropertyKey$1 = toPropertyKey$2;
var hasOwn$9 = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine;
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$6 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$4(O);
  P = toPropertyKey$1(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor$1(O, P);
  } catch (error) {  }
  if (hasOwn$9(O, P)) return createPropertyDescriptor$4(!call$7(propertyIsEnumerableModule.f, O, P), O[P]);
};

var fails$9 = fails$f;
var isCallable$b = isCallable$h;
var replacement = /#|\.prototype\./;
var isForced$2 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable$b(detection) ? fails$9(detection)
    : !!detection;
};
var normalize = isForced$2.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};
var data = isForced$2.data = {};
var NATIVE = isForced$2.NATIVE = 'N';
var POLYFILL = isForced$2.POLYFILL = 'P';
var isForced_1 = isForced$2;

var uncurryThis$c = functionUncurryThis;
var aCallable$6 = aCallable$8;
var NATIVE_BIND = functionBindNative;
var bind$5 = uncurryThis$c(uncurryThis$c.bind);
var functionBindContext = function (fn, that) {
  aCallable$6(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind$5(fn, that) : function () {
    return fn.apply(that, arguments);
  };
};

var objectDefineProperty = {};

var DESCRIPTORS$5 = descriptors;
var fails$8 = fails$f;
var v8PrototypeDefineBug = DESCRIPTORS$5 && fails$8(function () {
  return Object.defineProperty(function () {  }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var global$o = global$D;
var isObject$4 = isObject$8;
var String$4 = global$o.String;
var TypeError$b = global$o.TypeError;
var anObject$b = function (argument) {
  if (isObject$4(argument)) return argument;
  throw TypeError$b(String$4(argument) + ' is not an object');
};

var global$n = global$D;
var DESCRIPTORS$4 = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$a = anObject$b;
var toPropertyKey = toPropertyKey$2;
var TypeError$a = global$n.TypeError;
var $defineProperty = Object.defineProperty;
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable';
objectDefineProperty.f = DESCRIPTORS$4 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$a(O);
  P = toPropertyKey(P);
  anObject$a(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject$a(O);
  P = toPropertyKey(P);
  anObject$a(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) {  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError$a('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$3 = descriptors;
var definePropertyModule$3 = objectDefineProperty;
var createPropertyDescriptor$3 = createPropertyDescriptor$5;
var createNonEnumerableProperty$7 = DESCRIPTORS$3 ? function (object, key, value) {
  return definePropertyModule$3.f(object, key, createPropertyDescriptor$3(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var global$m = global$D;
var apply$1 = functionApply;
var uncurryThis$b = functionUncurryThis;
var isCallable$a = isCallable$h;
var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
var isForced$1 = isForced_1;
var path$2 = path$4;
var bind$4 = functionBindContext;
var createNonEnumerableProperty$6 = createNonEnumerableProperty$7;
var hasOwn$8 = hasOwnProperty_1;
var wrapConstructor = function (NativeConstructor) {
  var Wrapper = function (a, b, c) {
    if (this instanceof Wrapper) {
      switch (arguments.length) {
        case 0: return new NativeConstructor();
        case 1: return new NativeConstructor(a);
        case 2: return new NativeConstructor(a, b);
      } return new NativeConstructor(a, b, c);
    } return apply$1(NativeConstructor, this, arguments);
  };
  Wrapper.prototype = NativeConstructor.prototype;
  return Wrapper;
};
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var PROTO = options.proto;
  var nativeSource = GLOBAL ? global$m : STATIC ? global$m[TARGET] : (global$m[TARGET] || {}).prototype;
  var target = GLOBAL ? path$2 : path$2[TARGET] || createNonEnumerableProperty$6(path$2, TARGET, {})[TARGET];
  var targetPrototype = target.prototype;
  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;
  for (key in source) {
    FORCED = isForced$1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    USE_NATIVE = !FORCED && nativeSource && hasOwn$8(nativeSource, key);
    targetProperty = target[key];
    if (USE_NATIVE) if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor$1(nativeSource, key);
      nativeProperty = descriptor && descriptor.value;
    } else nativeProperty = nativeSource[key];
    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];
    if (USE_NATIVE && typeof targetProperty == typeof sourceProperty) continue;
    if (options.bind && USE_NATIVE) resultProperty = bind$4(sourceProperty, global$m);
    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
    else if (PROTO && isCallable$a(sourceProperty)) resultProperty = uncurryThis$b(sourceProperty);
    else resultProperty = sourceProperty;
    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty$6(resultProperty, 'sham', true);
    }
    createNonEnumerableProperty$6(target, key, resultProperty);
    if (PROTO) {
      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
      if (!hasOwn$8(path$2, VIRTUAL_PROTOTYPE)) {
        createNonEnumerableProperty$6(path$2, VIRTUAL_PROTOTYPE, {});
      }
      createNonEnumerableProperty$6(path$2[VIRTUAL_PROTOTYPE], key, sourceProperty);
      if (options.real && targetPrototype && !targetPrototype[key]) {
        createNonEnumerableProperty$6(targetPrototype, key, sourceProperty);
      }
    }
  }
};

var shared$1 = shared$3.exports;
var uid = uid$2;
var keys = shared$1('keys');
var sharedKey$3 = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var fails$7 = fails$f;
var correctPrototypeGetter = !fails$7(function () {
  function F() {  }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var global$l = global$D;
var hasOwn$7 = hasOwnProperty_1;
var isCallable$9 = isCallable$h;
var toObject$1 = toObject$3;
var sharedKey$2 = sharedKey$3;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;
var IE_PROTO$1 = sharedKey$2('IE_PROTO');
var Object$2 = global$l.Object;
var ObjectPrototype = Object$2.prototype;
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? Object$2.getPrototypeOf : function (O) {
  var object = toObject$1(O);
  if (hasOwn$7(object, IE_PROTO$1)) return object[IE_PROTO$1];
  var constructor = object.constructor;
  if (isCallable$9(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof Object$2 ? ObjectPrototype : null;
};

var global$k = global$D;
var isCallable$8 = isCallable$h;
var String$3 = global$k.String;
var TypeError$9 = global$k.TypeError;
var aPossiblePrototype$1 = function (argument) {
  if (typeof argument == 'object' || isCallable$8(argument)) return argument;
  throw TypeError$9("Can't set " + String$3(argument) + ' as a prototype');
};

var uncurryThis$a = functionUncurryThis;
var anObject$9 = anObject$b;
var aPossiblePrototype = aPossiblePrototype$1;
var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = uncurryThis$a(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) {  }
  return function setPrototypeOf(O, proto) {
    anObject$9(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var objectGetOwnPropertyNames = {};

var ceil = Math.ceil;
var floor = Math.floor;
var toIntegerOrInfinity$3 = function (argument) {
  var number = +argument;
  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};

var toIntegerOrInfinity$2 = toIntegerOrInfinity$3;
var max = Math.max;
var min$1 = Math.min;
var toAbsoluteIndex$1 = function (index, length) {
  var integer = toIntegerOrInfinity$2(index);
  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
};

var toIntegerOrInfinity$1 = toIntegerOrInfinity$3;
var min = Math.min;
var toLength$1 = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity$1(argument), 0x1FFFFFFFFFFFFF) : 0;
};

var toLength = toLength$1;
var lengthOfArrayLike$3 = function (obj) {
  return toLength(obj.length);
};

var toIndexedObject$3 = toIndexedObject$5;
var toAbsoluteIndex = toAbsoluteIndex$1;
var lengthOfArrayLike$2 = lengthOfArrayLike$3;
var createMethod$3 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$3($this);
    var length = lengthOfArrayLike$2(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      if (value != value) return true;
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};
var arrayIncludes = {
  includes: createMethod$3(true),
  indexOf: createMethod$3(false)
};

var hiddenKeys$4 = {};

var uncurryThis$9 = functionUncurryThis;
var hasOwn$6 = hasOwnProperty_1;
var toIndexedObject$2 = toIndexedObject$5;
var indexOf = arrayIncludes.indexOf;
var hiddenKeys$3 = hiddenKeys$4;
var push$1 = uncurryThis$9([].push);
var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$2(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$6(hiddenKeys$3, key) && hasOwn$6(O, key) && push$1(result, key);
  while (names.length > i) if (hasOwn$6(O, key = names[i++])) {
    ~indexOf(result, key) || push$1(result, key);
  }
  return result;
};

var enumBugKeys$3 = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$3;
var hiddenKeys$2 = enumBugKeys$2.concat('length', 'prototype');
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$1(O, hiddenKeys$2);
};

var objectGetOwnPropertySymbols = {};

objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var getBuiltIn$6 = getBuiltIn$9;
var uncurryThis$8 = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var anObject$8 = anObject$b;
var concat = uncurryThis$8([].concat);
var ownKeys$1 = getBuiltIn$6('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$8(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$5 = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$2 = objectDefineProperty;
var copyConstructorProperties$1 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$2.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$5(target, key) && !(exceptions && hasOwn$5(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var objectDefineProperties = {};

var internalObjectKeys = objectKeysInternal;
var enumBugKeys$1 = enumBugKeys$3;
var objectKeys$1 = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys$1);
};

var DESCRIPTORS$2 = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule$1 = objectDefineProperty;
var anObject$7 = anObject$b;
var toIndexedObject$1 = toIndexedObject$5;
var objectKeys = objectKeys$1;
objectDefineProperties.f = DESCRIPTORS$2 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$7(O);
  var props = toIndexedObject$1(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule$1.f(O, key = keys[index++], props[key]);
  return O;
};

var getBuiltIn$5 = getBuiltIn$9;
var html$2 = getBuiltIn$5('document', 'documentElement');

var anObject$6 = anObject$b;
var definePropertiesModule = objectDefineProperties;
var enumBugKeys = enumBugKeys$3;
var hiddenKeys$1 = hiddenKeys$4;
var html$1 = html$2;
var documentCreateElement = documentCreateElement$1;
var sharedKey$1 = sharedKey$3;
var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey$1('IE_PROTO');
var EmptyConstructor = function () {  };
var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null;
  return temp;
};
var NullProtoObjectViaIFrame = function () {
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html$1.appendChild(iframe);
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) {  }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument)
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument);
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};
hiddenKeys$1[IE_PROTO] = true;
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject$6(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

var uncurryThis$7 = functionUncurryThis;
var replace$1 = uncurryThis$7(''.replace);
var TEST = (function (arg) { return String(Error(arg).stack); })('zxcasd');
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);
var clearErrorStack$1 = function (stack, dropEntries) {
  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string') {
    while (dropEntries--) stack = replace$1(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
  } return stack;
};

var isObject$3 = isObject$8;
var createNonEnumerableProperty$5 = createNonEnumerableProperty$7;
var installErrorCause$1 = function (O, options) {
  if (isObject$3(options) && 'cause' in options) {
    createNonEnumerableProperty$5(O, 'cause', options.cause);
  }
};

var iterators = {};

var wellKnownSymbol$c = wellKnownSymbol$e;
var Iterators$5 = iterators;
var ITERATOR$4 = wellKnownSymbol$c('iterator');
var ArrayPrototype$2 = Array.prototype;
var isArrayIteratorMethod$1 = function (it) {
  return it !== undefined && (Iterators$5.Array === it || ArrayPrototype$2[ITERATOR$4] === it);
};

var wellKnownSymbol$b = wellKnownSymbol$e;
var TO_STRING_TAG$4 = wellKnownSymbol$b('toStringTag');
var test = {};
test[TO_STRING_TAG$4] = 'z';
var toStringTagSupport = String(test) === '[object z]';

var global$j = global$D;
var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
var isCallable$7 = isCallable$h;
var classofRaw = classofRaw$1;
var wellKnownSymbol$a = wellKnownSymbol$e;
var TO_STRING_TAG$3 = wellKnownSymbol$a('toStringTag');
var Object$1 = global$j.Object;
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) {  }
};
var classof$7 = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    : typeof (tag = tryGet(O = Object$1(it), TO_STRING_TAG$3)) == 'string' ? tag
    : CORRECT_ARGUMENTS ? classofRaw(O)
    : (result = classofRaw(O)) == 'Object' && isCallable$7(O.callee) ? 'Arguments' : result;
};

var classof$6 = classof$7;
var getMethod$1 = getMethod$3;
var Iterators$4 = iterators;
var wellKnownSymbol$9 = wellKnownSymbol$e;
var ITERATOR$3 = wellKnownSymbol$9('iterator');
var getIteratorMethod$2 = function (it) {
  if (it != undefined) return getMethod$1(it, ITERATOR$3)
    || getMethod$1(it, '@@iterator')
    || Iterators$4[classof$6(it)];
};

var global$i = global$D;
var call$6 = functionCall;
var aCallable$5 = aCallable$8;
var anObject$5 = anObject$b;
var tryToString$2 = tryToString$4;
var getIteratorMethod$1 = getIteratorMethod$2;
var TypeError$8 = global$i.TypeError;
var getIterator$1 = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$1(argument) : usingIterator;
  if (aCallable$5(iteratorMethod)) return anObject$5(call$6(iteratorMethod, argument));
  throw TypeError$8(tryToString$2(argument) + ' is not iterable');
};

var call$5 = functionCall;
var anObject$4 = anObject$b;
var getMethod = getMethod$3;
var iteratorClose$1 = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject$4(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call$5(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject$4(innerResult);
  return value;
};

var global$h = global$D;
var bind$3 = functionBindContext;
var call$4 = functionCall;
var anObject$3 = anObject$b;
var tryToString$1 = tryToString$4;
var isArrayIteratorMethod = isArrayIteratorMethod$1;
var lengthOfArrayLike$1 = lengthOfArrayLike$3;
var isPrototypeOf$6 = objectIsPrototypeOf;
var getIterator = getIterator$1;
var getIteratorMethod = getIteratorMethod$2;
var iteratorClose = iteratorClose$1;
var TypeError$7 = global$h.TypeError;
var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};
var ResultPrototype = Result.prototype;
var iterate$4 = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind$3(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;
  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };
  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject$3(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };
  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw TypeError$7(tryToString$1(iterable) + ' is not iterable');
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike$1(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf$6(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }
  next = iterator.next;
  while (!(step = call$4(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf$6(ResultPrototype, result)) return result;
  } return new Result(false);
};

var global$g = global$D;
var classof$5 = classof$7;
var String$2 = global$g.String;
var toString$5 = function (argument) {
  if (classof$5(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String$2(argument);
};

var toString$4 = toString$5;
var normalizeStringArgument$1 = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString$4(argument);
};

var fails$6 = fails$f;
var createPropertyDescriptor$2 = createPropertyDescriptor$5;
var errorStackInstallable = !fails$6(function () {
  var error = Error('a');
  if (!('stack' in error)) return true;
  Object.defineProperty(error, 'stack', createPropertyDescriptor$2(1, 7));
  return error.stack !== 7;
});

var $$7 = _export;
var global$f = global$D;
var isPrototypeOf$5 = objectIsPrototypeOf;
var getPrototypeOf$2 = objectGetPrototypeOf;
var setPrototypeOf = objectSetPrototypeOf;
var copyConstructorProperties = copyConstructorProperties$1;
var create$2 = objectCreate;
var createNonEnumerableProperty$4 = createNonEnumerableProperty$7;
var createPropertyDescriptor$1 = createPropertyDescriptor$5;
var clearErrorStack = clearErrorStack$1;
var installErrorCause = installErrorCause$1;
var iterate$3 = iterate$4;
var normalizeStringArgument = normalizeStringArgument$1;
var wellKnownSymbol$8 = wellKnownSymbol$e;
var ERROR_STACK_INSTALLABLE = errorStackInstallable;
var TO_STRING_TAG$2 = wellKnownSymbol$8('toStringTag');
var Error$1 = global$f.Error;
var push = [].push;
var $AggregateError = function AggregateError(errors, message ) {
  var options = arguments.length > 2 ? arguments[2] : undefined;
  var isInstance = isPrototypeOf$5(AggregateErrorPrototype, this);
  var that;
  if (setPrototypeOf) {
    that = setPrototypeOf(new Error$1(), isInstance ? getPrototypeOf$2(this) : AggregateErrorPrototype);
  } else {
    that = isInstance ? this : create$2(AggregateErrorPrototype);
    createNonEnumerableProperty$4(that, TO_STRING_TAG$2, 'Error');
  }
  if (message !== undefined) createNonEnumerableProperty$4(that, 'message', normalizeStringArgument(message));
  if (ERROR_STACK_INSTALLABLE) createNonEnumerableProperty$4(that, 'stack', clearErrorStack(that.stack, 1));
  installErrorCause(that, options);
  var errorsArray = [];
  iterate$3(errors, push, { that: errorsArray });
  createNonEnumerableProperty$4(that, 'errors', errorsArray);
  return that;
};
if (setPrototypeOf) setPrototypeOf($AggregateError, Error$1);
else copyConstructorProperties($AggregateError, Error$1, { name: true });
var AggregateErrorPrototype = $AggregateError.prototype = create$2(Error$1.prototype, {
  constructor: createPropertyDescriptor$1(1, $AggregateError),
  message: createPropertyDescriptor$1(1, ''),
  name: createPropertyDescriptor$1(1, 'AggregateError')
});
$$7({ global: true }, {
  AggregateError: $AggregateError
});

var uncurryThis$6 = functionUncurryThis;
var isCallable$6 = isCallable$h;
var store$1 = sharedStore;
var functionToString = uncurryThis$6(Function.toString);
if (!isCallable$6(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}
var inspectSource$3 = store$1.inspectSource;

var global$e = global$D;
var isCallable$5 = isCallable$h;
var inspectSource$2 = inspectSource$3;
var WeakMap$1 = global$e.WeakMap;
var nativeWeakMap = isCallable$5(WeakMap$1) && /native code/.test(inspectSource$2(WeakMap$1));

var NATIVE_WEAK_MAP = nativeWeakMap;
var global$d = global$D;
var uncurryThis$5 = functionUncurryThis;
var isObject$2 = isObject$8;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$7;
var hasOwn$4 = hasOwnProperty_1;
var shared = sharedStore;
var sharedKey = sharedKey$3;
var hiddenKeys = hiddenKeys$4;
var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$6 = global$d.TypeError;
var WeakMap = global$d.WeakMap;
var set$1, get, has;
var enforce = function (it) {
  return has(it) ? get(it) : set$1(it, {});
};
var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$2(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$6('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};
if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis$5(store.get);
  var wmhas = uncurryThis$5(store.has);
  var wmset = uncurryThis$5(store.set);
  set$1 = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError$6(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set$1 = function (it, metadata) {
    if (hasOwn$4(it, STATE)) throw new TypeError$6(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$3(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn$4(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn$4(it, STATE);
  };
}
var internalState = {
  set: set$1,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var DESCRIPTORS$1 = descriptors;
var hasOwn$3 = hasOwnProperty_1;
var FunctionPrototype = Function.prototype;
var getDescriptor = DESCRIPTORS$1 && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn$3(FunctionPrototype, 'name');
var PROPER = EXISTS && (function something() {  }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$1 || (DESCRIPTORS$1 && getDescriptor(FunctionPrototype, 'name').configurable));
var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var createNonEnumerableProperty$2 = createNonEnumerableProperty$7;
var redefine$3 = function (target, key, value, options) {
  if (options && options.enumerable) target[key] = value;
  else createNonEnumerableProperty$2(target, key, value);
};

var fails$5 = fails$f;
var isCallable$4 = isCallable$h;
var create$1 = objectCreate;
var getPrototypeOf$1 = objectGetPrototypeOf;
var redefine$2 = redefine$3;
var wellKnownSymbol$7 = wellKnownSymbol$e;
var ITERATOR$2 = wellKnownSymbol$7('iterator');
var BUGGY_SAFARI_ITERATORS$1 = false;
var IteratorPrototype$1, PrototypeOfArrayIteratorPrototype, arrayIterator;
if ([].keys) {
  arrayIterator = [].keys();
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$1 = PrototypeOfArrayIteratorPrototype;
  }
}
var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$1 == undefined || fails$5(function () {
  var test = {};
  return IteratorPrototype$1[ITERATOR$2].call(test) !== test;
});
if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$1 = {};
else IteratorPrototype$1 = create$1(IteratorPrototype$1);
if (!isCallable$4(IteratorPrototype$1[ITERATOR$2])) {
  redefine$2(IteratorPrototype$1, ITERATOR$2, function () {
    return this;
  });
}
var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$1,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
var classof$4 = classof$7;
var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
  return '[object ' + classof$4(this) + ']';
};

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var defineProperty = objectDefineProperty.f;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$7;
var hasOwn$2 = hasOwnProperty_1;
var toString$3 = objectToString;
var wellKnownSymbol$6 = wellKnownSymbol$e;
var TO_STRING_TAG$1 = wellKnownSymbol$6('toStringTag');
var setToStringTag$3 = function (it, TAG, STATIC, SET_METHOD) {
  if (it) {
    var target = STATIC ? it : it.prototype;
    if (!hasOwn$2(target, TO_STRING_TAG$1)) {
      defineProperty(target, TO_STRING_TAG$1, { configurable: true, value: TAG });
    }
    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
      createNonEnumerableProperty$1(target, 'toString', toString$3);
    }
  }
};

var IteratorPrototype = iteratorsCore.IteratorPrototype;
var create = objectCreate;
var createPropertyDescriptor = createPropertyDescriptor$5;
var setToStringTag$2 = setToStringTag$3;
var Iterators$3 = iterators;
var returnThis$1 = function () { return this; };
var createIteratorConstructor$1 = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag$2(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators$3[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var $$6 = _export;
var call$3 = functionCall;
var FunctionName = functionName;
var createIteratorConstructor = createIteratorConstructor$1;
var getPrototypeOf = objectGetPrototypeOf;
var setToStringTag$1 = setToStringTag$3;
var redefine$1 = redefine$3;
var wellKnownSymbol$5 = wellKnownSymbol$e;
var Iterators$2 = iterators;
var IteratorsCore = iteratorsCore;
var PROPER_FUNCTION_NAME$1 = FunctionName.PROPER;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$1 = wellKnownSymbol$5('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';
var returnThis = function () { return this; };
var defineIterator$2 = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);
  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };
  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$1]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      setToStringTag$1(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      Iterators$2[TO_STRING_TAG] = returnThis;
    }
  }
  if (PROPER_FUNCTION_NAME$1 && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call$3(nativeIterator, this); };
    }
  }
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine$1(IterablePrototype, KEY, methods[KEY]);
      }
    } else $$6({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }
  if ((FORCED) && IterablePrototype[ITERATOR$1] !== defaultIterator) {
    redefine$1(IterablePrototype, ITERATOR$1, defaultIterator, { name: DEFAULT });
  }
  Iterators$2[NAME] = defaultIterator;
  return methods;
};

var toIndexedObject = toIndexedObject$5;
var Iterators$1 = iterators;
var InternalStateModule$2 = internalState;
objectDefineProperty.f;
var defineIterator$1 = defineIterator$2;
var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState$2 = InternalStateModule$2.set;
var getInternalState$2 = InternalStateModule$2.getterFor(ARRAY_ITERATOR);
defineIterator$1(Array, 'Array', function (iterated, kind) {
  setInternalState$2(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated),
    index: 0,
    kind: kind
  });
}, function () {
  var state = getInternalState$2(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');
Iterators$1.Arguments = Iterators$1.Array;

var global$c = global$D;
var nativePromiseConstructor = global$c.Promise;

var redefine = redefine$3;
var redefineAll$1 = function (target, src, options) {
  for (var key in src) {
    if (options && options.unsafe && target[key]) target[key] = src[key];
    else redefine(target, key, src[key], options);
  } return target;
};

var getBuiltIn$4 = getBuiltIn$9;
var definePropertyModule = objectDefineProperty;
var wellKnownSymbol$4 = wellKnownSymbol$e;
var DESCRIPTORS = descriptors;
var SPECIES$2 = wellKnownSymbol$4('species');
var setSpecies$1 = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn$4(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;
  if (DESCRIPTORS && Constructor && !Constructor[SPECIES$2]) {
    defineProperty(Constructor, SPECIES$2, {
      configurable: true,
      get: function () { return this; }
    });
  }
};

var global$b = global$D;
var isPrototypeOf$4 = objectIsPrototypeOf;
var TypeError$5 = global$b.TypeError;
var anInstance$1 = function (it, Prototype) {
  if (isPrototypeOf$4(Prototype, it)) return it;
  throw TypeError$5('Incorrect invocation');
};

var wellKnownSymbol$3 = wellKnownSymbol$e;
var ITERATOR = wellKnownSymbol$3('iterator');
var SAFE_CLOSING = false;
try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) {  }
var checkCorrectnessOfIteration$1 = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) {  }
  return ITERATION_SUPPORT;
};

var uncurryThis$4 = functionUncurryThis;
var fails$4 = fails$f;
var isCallable$3 = isCallable$h;
var classof$3 = classof$7;
var getBuiltIn$3 = getBuiltIn$9;
var inspectSource$1 = inspectSource$3;
var noop = function () {  };
var empty = [];
var construct = getBuiltIn$3('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis$4(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);
var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$3(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};
var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable$3(argument)) return false;
  switch (classof$3(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource$1(argument));
  } catch (error) {
    return true;
  }
};
isConstructorLegacy.sham = true;
var isConstructor$1 = !construct || fails$4(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;

var global$a = global$D;
var isConstructor = isConstructor$1;
var tryToString = tryToString$4;
var TypeError$4 = global$a.TypeError;
var aConstructor$1 = function (argument) {
  if (isConstructor(argument)) return argument;
  throw TypeError$4(tryToString(argument) + ' is not a constructor');
};

var anObject$2 = anObject$b;
var aConstructor = aConstructor$1;
var wellKnownSymbol$2 = wellKnownSymbol$e;
var SPECIES$1 = wellKnownSymbol$2('species');
var speciesConstructor$2 = function (O, defaultConstructor) {
  var C = anObject$2(O).constructor;
  var S;
  return C === undefined || (S = anObject$2(C)[SPECIES$1]) == undefined ? defaultConstructor : aConstructor(S);
};

var uncurryThis$3 = functionUncurryThis;
var arraySlice$1 = uncurryThis$3([].slice);

var global$9 = global$D;
var TypeError$3 = global$9.TypeError;
var validateArgumentsLength$1 = function (passed, required) {
  if (passed < required) throw TypeError$3('Not enough arguments');
  return passed;
};

var userAgent$2 = engineUserAgent;
var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$2);

var classof$2 = classofRaw$1;
var global$8 = global$D;
var engineIsNode = classof$2(global$8.process) == 'process';

var global$7 = global$D;
var apply = functionApply;
var bind$2 = functionBindContext;
var isCallable$2 = isCallable$h;
var hasOwn$1 = hasOwnProperty_1;
var fails$3 = fails$f;
var html = html$2;
var arraySlice = arraySlice$1;
var createElement = documentCreateElement$1;
var validateArgumentsLength = validateArgumentsLength$1;
var IS_IOS$1 = engineIsIos;
var IS_NODE$3 = engineIsNode;
var set = global$7.setImmediate;
var clear = global$7.clearImmediate;
var process$2 = global$7.process;
var Dispatch = global$7.Dispatch;
var Function$1 = global$7.Function;
var MessageChannel = global$7.MessageChannel;
var String$1 = global$7.String;
var counter = 0;
var queue$1 = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var location, defer, channel, port;
try {
  location = global$7.location;
} catch (error) {  }
var run = function (id) {
  if (hasOwn$1(queue$1, id)) {
    var fn = queue$1[id];
    delete queue$1[id];
    fn();
  }
};
var runner = function (id) {
  return function () {
    run(id);
  };
};
var listener = function (event) {
  run(event.data);
};
var post = function (id) {
  global$7.postMessage(String$1(id), location.protocol + '//' + location.host);
};
if (!set || !clear) {
  set = function setImmediate(handler) {
    validateArgumentsLength(arguments.length, 1);
    var fn = isCallable$2(handler) ? handler : Function$1(handler);
    var args = arraySlice(arguments, 1);
    queue$1[++counter] = function () {
      apply(fn, undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue$1[id];
  };
  if (IS_NODE$3) {
    defer = function (id) {
      process$2.nextTick(runner(id));
    };
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  } else if (MessageChannel && !IS_IOS$1) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind$2(port.postMessage, port);
  } else if (
    global$7.addEventListener &&
    isCallable$2(global$7.postMessage) &&
    !global$7.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails$3(post)
  ) {
    defer = post;
    global$7.addEventListener('message', listener, false);
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}
var task$1 = {
  set: set,
  clear: clear
};

var userAgent$1 = engineUserAgent;
var global$6 = global$D;
var engineIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$1) && global$6.Pebble !== undefined;

var userAgent = engineUserAgent;
var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent);

var global$5 = global$D;
var bind$1 = functionBindContext;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var macrotask = task$1.set;
var IS_IOS = engineIsIos;
var IS_IOS_PEBBLE = engineIsIosPebble;
var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
var IS_NODE$2 = engineIsNode;
var MutationObserver = global$5.MutationObserver || global$5.WebKitMutationObserver;
var document$2 = global$5.document;
var process$1 = global$5.process;
var Promise$1 = global$5.Promise;
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global$5, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
var flush, head, last, notify$1, toggle, node, promise$3, then;
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE$2 && (parent = process$1.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify$1();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };
  if (!IS_IOS && !IS_NODE$2 && !IS_WEBOS_WEBKIT && MutationObserver && document$2) {
    toggle = true;
    node = document$2.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify$1 = function () {
      node.data = toggle = !toggle;
    };
  } else if (!IS_IOS_PEBBLE && Promise$1 && Promise$1.resolve) {
    promise$3 = Promise$1.resolve(undefined);
    promise$3.constructor = Promise$1;
    then = bind$1(promise$3.then, promise$3);
    notify$1 = function () {
      then(flush);
    };
  } else if (IS_NODE$2) {
    notify$1 = function () {
      process$1.nextTick(flush);
    };
  } else {
    macrotask = bind$1(macrotask, global$5);
    notify$1 = function () {
      macrotask(flush);
    };
  }
}
var microtask$1 = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify$1();
  } last = task;
};

var newPromiseCapability$2 = {};

var aCallable$4 = aCallable$8;
var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable$4(resolve);
  this.reject = aCallable$4(reject);
};
newPromiseCapability$2.f = function (C) {
  return new PromiseCapability(C);
};

var anObject$1 = anObject$b;
var isObject$1 = isObject$8;
var newPromiseCapability$1 = newPromiseCapability$2;
var promiseResolve$2 = function (C, x) {
  anObject$1(C);
  if (isObject$1(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability$1.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var global$4 = global$D;
var hostReportErrors$1 = function (a, b) {
  var console = global$4.console;
  if (console && console.error) {
    arguments.length == 1 ? console.error(a) : console.error(a, b);
  }
};

var perform$3 = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};

var Queue$1 = function () {
  this.head = null;
  this.tail = null;
};
Queue$1.prototype = {
  add: function (item) {
    var entry = { item: item, next: null };
    if (this.head) this.tail.next = entry;
    else this.head = entry;
    this.tail = entry;
  },
  get: function () {
    var entry = this.head;
    if (entry) {
      this.head = entry.next;
      if (this.tail === entry) this.tail = null;
      return entry.item;
    }
  }
};
var queue = Queue$1;

var engineIsBrowser = typeof window == 'object';

var $$5 = _export;
var IS_PURE = isPure;
var global$3 = global$D;
var getBuiltIn$2 = getBuiltIn$9;
var call$2 = functionCall;
var NativePromise$1 = nativePromiseConstructor;
var redefineAll = redefineAll$1;
var setToStringTag = setToStringTag$3;
var setSpecies = setSpecies$1;
var aCallable$3 = aCallable$8;
var isCallable$1 = isCallable$h;
var isObject = isObject$8;
var anInstance = anInstance$1;
var inspectSource = inspectSource$3;
var iterate$2 = iterate$4;
var checkCorrectnessOfIteration = checkCorrectnessOfIteration$1;
var speciesConstructor$1 = speciesConstructor$2;
var task = task$1.set;
var microtask = microtask$1;
var promiseResolve$1 = promiseResolve$2;
var hostReportErrors = hostReportErrors$1;
var newPromiseCapabilityModule$2 = newPromiseCapability$2;
var perform$2 = perform$3;
var Queue = queue;
var InternalStateModule$1 = internalState;
var isForced = isForced_1;
var wellKnownSymbol$1 = wellKnownSymbol$e;
var IS_BROWSER = engineIsBrowser;
var IS_NODE$1 = engineIsNode;
var V8_VERSION = engineV8Version;
var SPECIES = wellKnownSymbol$1('species');
var PROMISE = 'Promise';
var getInternalState$1 = InternalStateModule$1.getterFor(PROMISE);
var setInternalState$1 = InternalStateModule$1.set;
var getInternalPromiseState = InternalStateModule$1.getterFor(PROMISE);
var NativePromisePrototype = NativePromise$1 && NativePromise$1.prototype;
var PromiseConstructor = NativePromise$1;
var PromisePrototype = NativePromisePrototype;
var TypeError$2 = global$3.TypeError;
var document$1 = global$3.document;
var process = global$3.process;
var newPromiseCapability = newPromiseCapabilityModule$2.f;
var newGenericPromiseCapability = newPromiseCapability;
var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$3.dispatchEvent);
var NATIVE_REJECTION_EVENT = isCallable$1(global$3.PromiseRejectionEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var SUBCLASSING = false;
var Internal, OwnPromiseCapability, PromiseWrapper;
var FORCED = isForced(PROMISE, function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(PromiseConstructor);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  if (!PromisePrototype['finally']) return true;
  if (V8_VERSION >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) return false;
  var promise = new PromiseConstructor(function (resolve) { resolve(1); });
  var FakePromise = function (exec) {
    exec(function () {  }, function () {  });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  SUBCLASSING = promise.then(function () {  }) instanceof FakePromise;
  if (!SUBCLASSING) return true;
  return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER && !NATIVE_REJECTION_EVENT;
});
var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () {  });
});
var isThenable = function (it) {
  var then;
  return isObject(it) && isCallable$1(then = it.then) ? then : false;
};
var callReaction = function (reaction, state) {
  var value = state.value;
  var ok = state.state == FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve = reaction.resolve;
  var reject = reaction.reject;
  var domain = reaction.domain;
  var result, then, exited;
  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
        state.rejection = HANDLED;
      }
      if (handler === true) result = value;
      else {
        if (domain) domain.enter();
        result = handler(value);
        if (domain) {
          domain.exit();
          exited = true;
        }
      }
      if (result === reaction.promise) {
        reject(TypeError$2('Promise-chain cycle'));
      } else if (then = isThenable(result)) {
        call$2(then, result, resolve, reject);
      } else resolve(result);
    } else reject(value);
  } catch (error) {
    if (domain && !exited) domain.exit();
    reject(error);
  }
};
var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  microtask(function () {
    var reactions = state.reactions;
    var reaction;
    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};
var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document$1.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global$3.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_REJECTION_EVENT && (handler = global$3['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};
var onUnhandled = function (state) {
  call$2(task, global$3, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform$2(function () {
        if (IS_NODE$1) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      state.rejection = IS_NODE$1 || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};
var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};
var onHandleUnhandled = function (state) {
  call$2(task, global$3, function () {
    var promise = state.facade;
    if (IS_NODE$1) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};
var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};
var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};
var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError$2("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          call$2(then, value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};
if (FORCED) {
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromisePrototype);
    aCallable$3(executor);
    call$2(Internal, this);
    var state = getInternalState$1(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  PromisePrototype = PromiseConstructor.prototype;
  Internal = function Promise(executor) {
    setInternalState$1(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue(),
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromisePrototype, {
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor$1(this, PromiseConstructor));
      state.parent = true;
      reaction.ok = isCallable$1(onFulfilled) ? onFulfilled : true;
      reaction.fail = isCallable$1(onRejected) && onRejected;
      reaction.domain = IS_NODE$1 ? process.domain : undefined;
      if (state.state == PENDING) state.reactions.add(reaction);
      else microtask(function () {
        callReaction(reaction, state);
      });
      return reaction.promise;
    },
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState$1(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };
  newPromiseCapabilityModule$2.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}
$$5({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});
setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);
PromiseWrapper = getBuiltIn$2(PROMISE);
$$5({ target: PROMISE, stat: true, forced: FORCED }, {
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    call$2(capability.reject, undefined, r);
    return capability.promise;
  }
});
$$5({ target: PROMISE, stat: true, forced: IS_PURE  }, {
  resolve: function resolve(x) {
    return promiseResolve$1(this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});
$$5({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform$2(function () {
      var $promiseResolve = aCallable$3(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate$2(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call$2($promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform$2(function () {
      var $promiseResolve = aCallable$3(C.resolve);
      iterate$2(iterable, function (promise) {
        call$2($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$4 = _export;
var call$1 = functionCall;
var aCallable$2 = aCallable$8;
var newPromiseCapabilityModule$1 = newPromiseCapability$2;
var perform$1 = perform$3;
var iterate$1 = iterate$4;
$$4({ target: 'Promise', stat: true }, {
  allSettled: function allSettled(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$1.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform$1(function () {
      var promiseResolve = aCallable$2(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate$1(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call$1(promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'fulfilled', value: value };
          --remaining || resolve(values);
        }, function (error) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'rejected', reason: error };
          --remaining || resolve(values);
        });
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$3 = _export;
var aCallable$1 = aCallable$8;
var getBuiltIn$1 = getBuiltIn$9;
var call = functionCall;
var newPromiseCapabilityModule = newPromiseCapability$2;
var perform = perform$3;
var iterate = iterate$4;
var PROMISE_ANY_ERROR = 'No one promise resolved';
$$3({ target: 'Promise', stat: true }, {
  any: function any(iterable) {
    var C = this;
    var AggregateError = getBuiltIn$1('AggregateError');
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var promiseResolve = aCallable$1(C.resolve);
      var errors = [];
      var counter = 0;
      var remaining = 1;
      var alreadyResolved = false;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyRejected = false;
        remaining++;
        call(promiseResolve, C, promise).then(function (value) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyResolved = true;
          resolve(value);
        }, function (error) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyRejected = true;
          errors[index] = error;
          --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
        });
      });
      --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$2 = _export;
var NativePromise = nativePromiseConstructor;
var fails$2 = fails$f;
var getBuiltIn = getBuiltIn$9;
var isCallable = isCallable$h;
var speciesConstructor = speciesConstructor$2;
var promiseResolve = promiseResolve$2;
var NON_GENERIC = !!NativePromise && fails$2(function () {
  NativePromise.prototype['finally'].call({ then: function () {  } }, function () {  });
});
$$2({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
  'finally': function (onFinally) {
    var C = speciesConstructor(this, getBuiltIn('Promise'));
    var isFunction = isCallable(onFinally);
    return this.then(
      isFunction ? function (x) {
        return promiseResolve(C, onFinally()).then(function () { return x; });
      } : onFinally,
      isFunction ? function (e) {
        return promiseResolve(C, onFinally()).then(function () { throw e; });
      } : onFinally
    );
  }
});

var uncurryThis$2 = functionUncurryThis;
var toIntegerOrInfinity = toIntegerOrInfinity$3;
var toString$2 = toString$5;
var requireObjectCoercible$1 = requireObjectCoercible$4;
var charAt$1 = uncurryThis$2(''.charAt);
var charCodeAt = uncurryThis$2(''.charCodeAt);
var stringSlice = uncurryThis$2(''.slice);
var createMethod$2 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$2(requireObjectCoercible$1($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt$1(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};
var stringMultibyte = {
  codeAt: createMethod$2(false),
  charAt: createMethod$2(true)
};

var charAt = stringMultibyte.charAt;
var toString$1 = toString$5;
var InternalStateModule = internalState;
var defineIterator = defineIterator$2;
var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString$1(iterated),
    index: 0
  });
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});

var path$1 = path$4;
var promise$2 = path$1.Promise;

var domIterables = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

var DOMIterables$1 = domIterables;
var global$2 = global$D;
var classof$1 = classof$7;
var createNonEnumerableProperty = createNonEnumerableProperty$7;
var Iterators = iterators;
var wellKnownSymbol = wellKnownSymbol$e;
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
for (var COLLECTION_NAME in DOMIterables$1) {
  var Collection = global$2[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype && classof$1(CollectionPrototype) !== TO_STRING_TAG) {
    createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
  }
  Iterators[COLLECTION_NAME] = Iterators.Array;
}

var parent$4 = promise$2;
var promise$1 = parent$4;

var promise = promise$1;

/**
 * Generates SHA-256 hash of string.
 *
 * @param   {string} msg - String to be hashed
 * @returns {string} Hash of msg as hex character string
 */
function sha256hash(msg) {
  /**
   * Rotates right (circular right shift) value x by n positions [3.2.4].
   * @private
   */
  function ROTR(n, x) {
    return x >>> n | x << 32 - n;
  }
  /**
   * Logical functions [4.1.2].
   * @private
   */


  function S0(x) {
    return ROTR(2, x) ^ ROTR(13, x) ^ ROTR(22, x);
  }

  function S1(x) {
    return ROTR(6, x) ^ ROTR(11, x) ^ ROTR(25, x);
  }

  function s0(x) {
    return ROTR(7, x) ^ ROTR(18, x) ^ x >>> 3;
  }

  function s1(x) {
    return ROTR(17, x) ^ ROTR(19, x) ^ x >>> 10;
  }

  function Ch(x, y, z) {
    return x & y ^ ~x & z;
  }

  function Maj(x, y, z) {
    return x & y ^ x & z ^ y & z;
  }
  /**
   * Hexadecimal representation of a number.
   * @private
   */


  function toHexStr(n) {
    let s = "",
        v;

    for (let i = 7; i >= 0; i--) {
      v = n >>> i * 4 & 0xf;
      s += v.toString(16);
    }

    return s;
  }

  msg = unescape(encodeURIComponent(msg));
  const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];
  const H = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
  msg += String.fromCharCode(0x80);
  const l = msg.length / 4 + 2;
  const N = Math.ceil(l / 16);
  const M = new Array(N);

  for (let i = 0; i < N; i++) {
    M[i] = new Array(16);

    for (let j = 0; j < 16; j++) {
      M[i][j] = msg.charCodeAt(i * 64 + j * 4) << 24 | msg.charCodeAt(i * 64 + j * 4 + 1) << 16 | msg.charCodeAt(i * 64 + j * 4 + 2) << 8 | msg.charCodeAt(i * 64 + j * 4 + 3);
    }
  }

  M[N - 1][14] = (msg.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (msg.length - 1) * 8 & 0xffffffff;
  const W = new Array(64);
  let a, b, c, d, e, f, g, h;

  for (let i = 0; i < N; i++) {
    for (let t = 0; t < 16; t++) W[t] = M[i][t];

    for (let t = 16; t < 64; t++) W[t] = s1(W[t - 2]) + W[t - 7] + s0(W[t - 15]) + W[t - 16] & 0xffffffff;

    a = H[0];
    b = H[1];
    c = H[2];
    d = H[3];
    e = H[4];
    f = H[5];
    g = H[6];
    h = H[7];

    for (let t = 0; t < 64; t++) {
      const T1 = h + S1(e) + Ch(e, f, g) + K[t] + W[t];
      const T2 = S0(a) + Maj(a, b, c);
      h = g;
      g = f;
      f = e;
      e = d + T1 & 0xffffffff;
      d = c;
      c = b;
      b = a;
      a = T1 + T2 & 0xffffffff;
    }

    H[0] = H[0] + a & 0xffffffff;
    H[1] = H[1] + b & 0xffffffff;
    H[2] = H[2] + c & 0xffffffff;
    H[3] = H[3] + d & 0xffffffff;
    H[4] = H[4] + e & 0xffffffff;
    H[5] = H[5] + f & 0xffffffff;
    H[6] = H[6] + g & 0xffffffff;
    H[7] = H[7] + h & 0xffffffff;
  }

  return toHexStr(H[0]) + toHexStr(H[1]) + toHexStr(H[2]) + toHexStr(H[3]) + toHexStr(H[4]) + toHexStr(H[5]) + toHexStr(H[6]) + toHexStr(H[7]);
}

var path = path$4;
var entryVirtual$3 = function (CONSTRUCTOR) {
  return path[CONSTRUCTOR + 'Prototype'];
};

var entryVirtual$2 = entryVirtual$3;
var values$3 = entryVirtual$2('Array').values;

var parent$3 = values$3;
var values$2 = parent$3;

var classof = classof$7;
var hasOwn = hasOwnProperty_1;
var isPrototypeOf$3 = objectIsPrototypeOf;
var method$2 = values$2;
var ArrayPrototype$1 = Array.prototype;
var DOMIterables = {
  DOMTokenList: true,
  NodeList: true
};
var values$1 = function (it) {
  var own = it.values;
  return it === ArrayPrototype$1 || (isPrototypeOf$3(ArrayPrototype$1, it) && own === ArrayPrototype$1.values)
    || hasOwn(DOMIterables, classof(it)) ? method$2 : own;
};

var values = values$1;

/**
 * Encoder interface mode
 * @public
 */
var EncoderIOMode;

(function (EncoderIOMode) {
  /**
   * No additional pull-up or pull-down resistors will be applied to the input lines.
   * @public
   */
  EncoderIOMode[EncoderIOMode["PUSH_PULL"] = 1] = "PUSH_PULL";
  /**
   * 2.2kΩ pull-down resistors will be applied to the input lines.
   * @public
   */

  EncoderIOMode[EncoderIOMode["LINE_DRIVER_2K2"] = 2] = "LINE_DRIVER_2K2";
  /**
   * 10kΩ pull-down resistors will be applied to the input lines.
   * @public
   */

  EncoderIOMode[EncoderIOMode["LINE_DRIVER_10K"] = 3] = "LINE_DRIVER_10K";
  /**
   * 2.2kΩ pull-up resistors will be applied to the input lines.
   * @public
   */

  EncoderIOMode[EncoderIOMode["OPEN_COLLECTOR_2K2"] = 4] = "OPEN_COLLECTOR_2K2";
  /**
   * 10kΩ pull-up resistors will be applied to the input lines.
   * @public
   */

  EncoderIOMode[EncoderIOMode["OPEN_COLLECTOR_10K"] = 5] = "OPEN_COLLECTOR_10K";
})(EncoderIOMode || (EncoderIOMode = {}));
/**
 * Error codes returned from all API calls via Exceptions.
 * @public
 */


var ErrorCode;

(function (ErrorCode) {
  /**
   * Call succeeded.
   * @public
   */
  ErrorCode[ErrorCode["SUCCESS"] = 0] = "SUCCESS";
  /**
   * Not Permitted
   * @public
   */

  ErrorCode[ErrorCode["NOT_PERMITTED"] = 1] = "NOT_PERMITTED";
  /**
   * The specified entity does not exist. This is usually a result of Net or Log API calls.
   * @public
   */

  ErrorCode[ErrorCode["NO_SUCH_ENTITY"] = 2] = "NO_SUCH_ENTITY";
  /**
   * Call has timed out. This can happen for a number of common reasons: Check that the Phidget you are trying to open is plugged in, and that the addressing parameters have been specified correctly. Check that the Phidget is not already open in another program, such as the Phidget Control Panel, or another program you are developing. If your Phidget has a plug or terminal block for external power, ensure it is plugged in and powered. If you are using remote Phidgets, ensure that your computer can access the remote Phidgets using the Phidget Control Panel. If you are using remote Phidgets, ensure you have enabled Server Discovery or added the server corresponding to the Phidget you are trying to open. If you are using Network Server Discovery, try extending the timeout to allow more time for the server to be discovered.
   * @public
   */

  ErrorCode[ErrorCode["TIMEOUT"] = 3] = "TIMEOUT";
  /**
   * Keep Alive Failure
   * @public
   */

  ErrorCode[ErrorCode["KEEP_ALIVE"] = 58] = "KEEP_ALIVE";
  /**
   * The operation was interrupted; either from an error, or because the device was closed.
   * @public
   */

  ErrorCode[ErrorCode["INTERRUPTED"] = 4] = "INTERRUPTED";
  /**
   * IO Issue
   * @public
   */

  ErrorCode[ErrorCode["IO"] = 5] = "IO";
  /**
   * Memory Issue
   * @public
   */

  ErrorCode[ErrorCode["NO_MEMORY"] = 6] = "NO_MEMORY";
  /**
   * Access to the resource (file) is denied. This can happen when enabling logging.
   * @public
   */

  ErrorCode[ErrorCode["ACCESS"] = 7] = "ACCESS";
  /**
   * Address Issue
   * @public
   */

  ErrorCode[ErrorCode["FAULT"] = 8] = "FAULT";
  /**
   * Specified resource is in use. This error code is not normally used.
   * @public
   */

  ErrorCode[ErrorCode["BUSY"] = 9] = "BUSY";
  /**
   * Object Exists
   * @public
   */

  ErrorCode[ErrorCode["EXISTS"] = 10] = "EXISTS";
  /**
   * Object is not a directory
   * @public
   */

  ErrorCode[ErrorCode["IS_NOT_DIRECTORY"] = 11] = "IS_NOT_DIRECTORY";
  /**
   * Object is a directory
   * @public
   */

  ErrorCode[ErrorCode["IS_DIRECTORY"] = 12] = "IS_DIRECTORY";
  /**
   * Invalid or malformed command. This can be caused by sending a command to a device which is not supported in it's current configuration.
   * @public
   */

  ErrorCode[ErrorCode["INVALID"] = 13] = "INVALID";
  /**
   * Too many open files in system
   * @public
   */

  ErrorCode[ErrorCode["TOO_MANY_FILES_SYSTEM"] = 14] = "TOO_MANY_FILES_SYSTEM";
  /**
   * Too many open files
   * @public
   */

  ErrorCode[ErrorCode["TOO_MANY_FILES"] = 15] = "TOO_MANY_FILES";
  /**
   * The provided buffer argument size is too small.
   * @public
   */

  ErrorCode[ErrorCode["NO_SPACE"] = 16] = "NO_SPACE";
  /**
   * File too Big
   * @public
   */

  ErrorCode[ErrorCode["FILE_TOO_BIG"] = 17] = "FILE_TOO_BIG";
  /**
   * Read Only Filesystem
   * @public
   */

  ErrorCode[ErrorCode["READ_ONLY_FILESYSTEM"] = 18] = "READ_ONLY_FILESYSTEM";
  /**
   * Read Only Object
   * @public
   */

  ErrorCode[ErrorCode["READ_ONLY"] = 19] = "READ_ONLY";
  /**
   * This API call is not supported. For Class APIs this means that this API is not supported by this device. This can also mean the API is not supported on this OS, or OS configuration.
   * @public
   */

  ErrorCode[ErrorCode["UNSUPPORTED"] = 20] = "UNSUPPORTED";
  /**
   * One or more of the parameters passed to the function is not accepted by the channel in its current configuration.
   * @public
   */

  ErrorCode[ErrorCode["INVALID_ARGUMENT"] = 21] = "INVALID_ARGUMENT";
  /**
   * Try again
   * @public
   */

  ErrorCode[ErrorCode["TRY_AGAIN"] = 22] = "TRY_AGAIN";
  /**
   * Not Empty
   * @public
   */

  ErrorCode[ErrorCode["NOT_EMPTY"] = 26] = "NOT_EMPTY";
  /**
   * Something unexpected has occured. Enable library logging and have a look at the log, or contact Phidgets support.
   * @public
   */

  ErrorCode[ErrorCode["UNEXPECTED"] = 28] = "UNEXPECTED";
  /**
   * Duplicated request. Can happen with some Net API calls, such as trying to add the same server twice.
   * @public
   */

  ErrorCode[ErrorCode["DUPLICATE"] = 27] = "DUPLICATE";
  /**
   * Bad Credential
   * @public
   */

  ErrorCode[ErrorCode["BAD_PASSWORD"] = 37] = "BAD_PASSWORD";
  /**
   * Network Unavailable
   * @public
   */

  ErrorCode[ErrorCode["NETWORK_UNAVAILABLE"] = 45] = "NETWORK_UNAVAILABLE";
  /**
   * Connection Refused
   * @public
   */

  ErrorCode[ErrorCode["CONNECTION_REFUSED"] = 35] = "CONNECTION_REFUSED";
  /**
   * Connection Reset
   * @public
   */

  ErrorCode[ErrorCode["CONNECTION_RESET"] = 46] = "CONNECTION_RESET";
  /**
   * No route to host
   * @public
   */

  ErrorCode[ErrorCode["HOST_UNREACHABLE"] = 48] = "HOST_UNREACHABLE";
  /**
   * No Such Device
   * @public
   */

  ErrorCode[ErrorCode["NO_SUCH_DEVICE"] = 40] = "NO_SUCH_DEVICE";
  /**
   * A Phidget channel object of the wrong channel class was passed into this API call.
   * @public
   */

  ErrorCode[ErrorCode["WRONG_DEVICE"] = 50] = "WRONG_DEVICE";
  /**
   * Broken Pipe
   * @public
   */

  ErrorCode[ErrorCode["BROKEN_PIPE"] = 41] = "BROKEN_PIPE";
  /**
   * Name Resolution Failure
   * @public
   */

  ErrorCode[ErrorCode["NAME_RESOLUTION_FAILURE"] = 44] = "NAME_RESOLUTION_FAILURE";
  /**
   * The value is unknown. This can happen right after attach, when the value has not yet been recieved from the Phidget. This can also happen if a device has not yet been configured / enabled. Some properties can only be read back after being set.
   * @public
   */

  ErrorCode[ErrorCode["UNKNOWN_VALUE"] = 51] = "UNKNOWN_VALUE";
  /**
   * This can happen for a number of common reasons. Be sure you are opening the channel before trying to use it. If you are opening the channel, the program may not be waiting for the channel to be attached. If possible use openWaitForAttachment. Otherwise, be sure to check the Attached property of the channel before trying to use it.
   * @public
   */

  ErrorCode[ErrorCode["NOT_ATTACHED"] = 52] = "NOT_ATTACHED";
  /**
   * Invalid or Unexpected Packet
   * @public
   */

  ErrorCode[ErrorCode["INVALID_PACKET"] = 53] = "INVALID_PACKET";
  /**
   * Argument List Too Long
   * @public
   */

  ErrorCode[ErrorCode["TOO_BIG"] = 54] = "TOO_BIG";
  /**
   * Bad Version
   * @public
   */

  ErrorCode[ErrorCode["BAD_VERSION"] = 55] = "BAD_VERSION";
  /**
   * Channel was closed. This can happen if a channel is closed while openWaitForAttachment is waiting.
   * @public
   */

  ErrorCode[ErrorCode["CLOSED"] = 56] = "CLOSED";
  /**
   * Device is not configured enough for this API call. Have a look at the must-set properties for this device and make sure to configure them first.
   * @public
   */

  ErrorCode[ErrorCode["NOT_CONFIGURED"] = 57] = "NOT_CONFIGURED";
  /**
   * End of File
   * @public
   */

  ErrorCode[ErrorCode["END_OF_FILE"] = 31] = "END_OF_FILE";
  /**
   * Failsafe Triggered on this channel. Close and Re-open the channel to resume operation.
   * @public
   */

  ErrorCode[ErrorCode["FAILSAFE"] = 59] = "FAILSAFE";
  /**
   * The value has been measured to be higher than the valid range of the sensor.
   * @public
   */

  ErrorCode[ErrorCode["UNKNOWN_VALUE_HIGH"] = 60] = "UNKNOWN_VALUE_HIGH";
  /**
   * The value has been measured to be lower than the valid range of the sensor.
   * @public
   */

  ErrorCode[ErrorCode["UNKNOWN_VALUE_LOW"] = 61] = "UNKNOWN_VALUE_LOW";
  /**
   * The power supply of your device is outside the acceptable range to allow operation.
   * @public
   */

  ErrorCode[ErrorCode["BAD_POWER"] = 62] = "BAD_POWER";
  /**
   * Something has caused your device to decide it needs to be powered off and on to resume operation.
   * @public
   */

  ErrorCode[ErrorCode["POWER_CYCLE"] = 63] = "POWER_CYCLE";
  /**
   * The hall sensor on your BLDC Motor Controller is Improperly Connected
   * @public
   */

  ErrorCode[ErrorCode["HALLSENSOR"] = 64] = "HALLSENSOR";
})(ErrorCode || (ErrorCode = {}));
/**
 * The error code from an Error event
 * @public
 */


var ErrorEventCode;

(function (ErrorEventCode) {
  /**
   * Client and Server protocol versions don't match. Ensure that both sides are using the same release of phidget22.
   * @public
   */
  ErrorEventCode[ErrorEventCode["BAD_VERSION"] = 1] = "BAD_VERSION";
  /**
   * Check that the Phidget is not already open in another program, such as the Phidget Control Panel, or another program you are developing.
   * @public
   */

  ErrorEventCode[ErrorEventCode["BUSY"] = 2] = "BUSY";
  /**
   * This could be a network communication issue, an authentication issue (if server password is enabled), or a Device access / hardware issue.
   * @public
   */

  ErrorEventCode[ErrorEventCode["NETWORK"] = 3] = "NETWORK";
  /**
   * An error occured dispatching a command or event.
   * @public
   */

  ErrorEventCode[ErrorEventCode["DISPATCH"] = 4] = "DISPATCH";
  /**
   * A general failure occured - see description for details.
   * @public
   */

  ErrorEventCode[ErrorEventCode["FAILURE"] = 5] = "FAILURE";
  /**
   * An error state has cleared.
   * @public
   */

  ErrorEventCode[ErrorEventCode["SUCCESS"] = 4096] = "SUCCESS";
  /**
   * A sampling overrun happened in firmware.
   * @public
   */

  ErrorEventCode[ErrorEventCode["OVERRUN"] = 4098] = "OVERRUN";
  /**
   * One or more packets were lost.
   * @public
   */

  ErrorEventCode[ErrorEventCode["PACKET_LOST"] = 4099] = "PACKET_LOST";
  /**
   * Variable has wrapped around.
   * @public
   */

  ErrorEventCode[ErrorEventCode["WRAP_AROUND"] = 4100] = "WRAP_AROUND";
  /**
   * Over-temperature condition detected.
   * @public
   */

  ErrorEventCode[ErrorEventCode["OVER_TEMPERATURE"] = 4101] = "OVER_TEMPERATURE";
  /**
   * Over-current condition detected.
   * @public
   */

  ErrorEventCode[ErrorEventCode["OVER_CURRENT"] = 4102] = "OVER_CURRENT";
  /**
   * Out of range condition detected.
   * @public
   */

  ErrorEventCode[ErrorEventCode["OUT_OF_RANGE"] = 4103] = "OUT_OF_RANGE";
  /**
   * Power supply problem detected.
   * @public
   */

  ErrorEventCode[ErrorEventCode["BAD_POWER"] = 4104] = "BAD_POWER";
  /**
   * Saturation condition detected.
   * @public
   */

  ErrorEventCode[ErrorEventCode["SATURATION"] = 4105] = "SATURATION";
  /**
   * Over-voltage condition detected.
   * @public
   */

  ErrorEventCode[ErrorEventCode["OVER_VOLTAGE"] = 4107] = "OVER_VOLTAGE";
  /**
   * Failsafe condition detected.
   * @public
   */

  ErrorEventCode[ErrorEventCode["FAILSAFE_CONDITION"] = 4108] = "FAILSAFE_CONDITION";
  /**
   * Voltage error detected.
   * @public
   */

  ErrorEventCode[ErrorEventCode["VOLTAGE_ERROR"] = 4109] = "VOLTAGE_ERROR";
  /**
   * Energy dump condition detected.
   * @public
   */

  ErrorEventCode[ErrorEventCode["ENERGY_DUMP_CONDITION"] = 4110] = "ENERGY_DUMP_CONDITION";
  /**
   * Motor stall detected.
   * @public
   */

  ErrorEventCode[ErrorEventCode["MOTOR_STALL_CONDITION"] = 4111] = "MOTOR_STALL_CONDITION";
  /**
   * Invalid state detected.
   * @public
   */

  ErrorEventCode[ErrorEventCode["INVALID_STATE_CONDITION"] = 4112] = "INVALID_STATE_CONDITION";
  /**
   * Bad connection detected.
   * @public
   */

  ErrorEventCode[ErrorEventCode["BAD_CONNECTION_CONDITION"] = 4113] = "BAD_CONNECTION_CONDITION";
  /**
   * Measurement is above the valid range.
   * @public
   */

  ErrorEventCode[ErrorEventCode["OUT_OF_RANGE_HIGH_CONDITION"] = 4114] = "OUT_OF_RANGE_HIGH_CONDITION";
  /**
   * Measurement is below the valid range.
   * @public
   */

  ErrorEventCode[ErrorEventCode["OUT_OF_RANGE_LOW_CONDITION"] = 4115] = "OUT_OF_RANGE_LOW_CONDITION";
  /**
   * Fault condition detected.
   * @public
   */

  ErrorEventCode[ErrorEventCode["FAULT"] = 4116] = "FAULT";
  /**
   * Emergency stop condition detected.
   * @public
   */

  ErrorEventCode[ErrorEventCode["ESTOP"] = 4117] = "ESTOP";
})(ErrorEventCode || (ErrorEventCode = {}));
/**
 * Phidget device ID
 * @public
 */


var DeviceID;

(function (DeviceID) {
  /**
   * Unknown device
   * @internal
   */
  DeviceID[DeviceID["NONE"] = 0] = "NONE";
  /**
   * Unknown device
   * @public
   */

  DeviceID[DeviceID["UNKNOWN"] = 125] = "UNKNOWN";
  /**
   * Hub Port in Digital Input mode
   * @public
   */

  DeviceID[DeviceID["DIGITAL_INPUT_PORT"] = 95] = "DIGITAL_INPUT_PORT";
  /**
   * Hub Port in Digital Output mode
   * @public
   */

  DeviceID[DeviceID["DIGITAL_OUTPUT_PORT"] = 96] = "DIGITAL_OUTPUT_PORT";
  /**
   * Hub Port in Voltage Input mode
   * @public
   */

  DeviceID[DeviceID["VOLTAGE_INPUT_PORT"] = 97] = "VOLTAGE_INPUT_PORT";
  /**
   * Hub Port in Voltage Ratio Input mode
   * @public
   */

  DeviceID[DeviceID["VOLTAGE_RATIO_INPUT_PORT"] = 98] = "VOLTAGE_RATIO_INPUT_PORT";
  /**
   * Dictionary
   * @public
   */

  DeviceID[DeviceID["PN_DICTIONARY"] = 111] = "PN_DICTIONARY";
  /**
   * PhidgetServo 1-Motor (1000)
   * @public
   */

  DeviceID[DeviceID["PN_1000"] = 2] = "PN_1000";
  /**
   * PhidgetServo 4-Motor (1001)
   * @public
   */

  DeviceID[DeviceID["PN_1001"] = 3] = "PN_1001";
  /**
   * PhidgetAnalog 4-Output (1002)
   * @public
   */

  DeviceID[DeviceID["PN_1002"] = 4] = "PN_1002";
  /**
   * PhidgetAccelerometer 2-Axis (1008)
   * @public
   */

  DeviceID[DeviceID["PN_1008"] = 5] = "PN_1008";
  /**
   * PhidgetInterfaceKit 8/8/8 (1010, 1013, 1018, 1019)
   * @public
   */

  DeviceID[DeviceID["PN_1010_1013_1018_1019"] = 6] = "PN_1010_1013_1018_1019";
  /**
   * PhidgetInterfaceKit 2/2/2 (1011)
   * @public
   */

  DeviceID[DeviceID["PN_1011"] = 7] = "PN_1011";
  /**
   * PhidgetInterfaceKit 0/16/16 (1012)
   * @public
   */

  DeviceID[DeviceID["PN_1012"] = 8] = "PN_1012";
  /**
   * PhidgetInterfaceKit 0/0/4 (1014)
   * @public
   */

  DeviceID[DeviceID["PN_1014"] = 9] = "PN_1014";
  /**
   * PhidgetLinearTouch (1015)
   * @public
   */

  DeviceID[DeviceID["PN_1015"] = 10] = "PN_1015";
  /**
   * PhidgetCircularTouch (1016)
   * @public
   */

  DeviceID[DeviceID["PN_1016"] = 11] = "PN_1016";
  /**
   * PhidgetInterfaceKit 0/0/8 (1017)
   * @public
   */

  DeviceID[DeviceID["PN_1017"] = 12] = "PN_1017";
  /**
   * PhidgetRFID (1023)
   * @public
   */

  DeviceID[DeviceID["PN_1023"] = 13] = "PN_1023";
  /**
   * PhidgetRFID Read-Write (1024)
   * @public
   */

  DeviceID[DeviceID["PN_1024"] = 14] = "PN_1024";
  /**
   * PhidgetLED-64 (1030)
   * @public
   */

  DeviceID[DeviceID["PN_1030"] = 15] = "PN_1030";
  /**
   * PhidgetLED-64 Advanced (1031)
   * @public
   */

  DeviceID[DeviceID["PN_1031"] = 16] = "PN_1031";
  /**
   * PhidgetLED-64 Advanced (1032)
   * @public
   */

  DeviceID[DeviceID["PN_1032"] = 17] = "PN_1032";
  /**
   * PhidgetGPS (1040)
   * @public
   */

  DeviceID[DeviceID["PN_1040"] = 18] = "PN_1040";
  /**
   * PhidgetSpatial 0/0/3 Basic (1041)
   * @public
   */

  DeviceID[DeviceID["PN_1041"] = 19] = "PN_1041";
  /**
   * PhidgetSpatial 3/3/3 Basic (1042)
   * @public
   */

  DeviceID[DeviceID["PN_1042"] = 20] = "PN_1042";
  /**
   * PhidgetSpatial Precision 0/0/3 High Resolution (1043)
   * @public
   */

  DeviceID[DeviceID["PN_1043"] = 21] = "PN_1043";
  /**
   * PhidgetSpatial Precision 3/3/3 High Resolution (1044)
   * @public
   */

  DeviceID[DeviceID["PN_1044"] = 22] = "PN_1044";
  /**
   * PhidgetTemperatureSensor IR (1045)
   * @public
   */

  DeviceID[DeviceID["PN_1045"] = 23] = "PN_1045";
  /**
   * PhidgetBridge 4-Input (1046)
   * @public
   */

  DeviceID[DeviceID["PN_1046"] = 24] = "PN_1046";
  /**
   * PhidgetEncoder HighSpeed 4-Input (1047)
   * @public
   */

  DeviceID[DeviceID["PN_1047"] = 25] = "PN_1047";
  /**
   * PhidgetTemperatureSensor 4-input (1048)
   * @public
   */

  DeviceID[DeviceID["PN_1048"] = 26] = "PN_1048";
  /**
   * PhidgetSpatial 0/0/3 (1049)
   * @public
   */

  DeviceID[DeviceID["PN_1049"] = 27] = "PN_1049";
  /**
   * PhidgetTemperatureSensor 1-Input (1051)
   * @public
   */

  DeviceID[DeviceID["PN_1051"] = 28] = "PN_1051";
  /**
   * PhidgetEncoder Mechanical (1052)
   * @public
   */

  DeviceID[DeviceID["PN_1052"] = 29] = "PN_1052";
  /**
   * PhidgetAccelerometer 2-Axis (1053)
   * @public
   */

  DeviceID[DeviceID["PN_1053"] = 30] = "PN_1053";
  /**
   * PhidgetFrequencyCounter (1054)
   * @public
   */

  DeviceID[DeviceID["PN_1054"] = 31] = "PN_1054";
  /**
   * PhidgetIR (1055)
   * @public
   */

  DeviceID[DeviceID["PN_1055"] = 32] = "PN_1055";
  /**
   * PhidgetSpatial 3/3/3 (1056)
   * @public
   */

  DeviceID[DeviceID["PN_1056"] = 33] = "PN_1056";
  /**
   * PhidgetEncoder HighSpeed (1057)
   * @public
   */

  DeviceID[DeviceID["PN_1057"] = 34] = "PN_1057";
  /**
   * PhidgetPHSensor (1058)
   * @public
   */

  DeviceID[DeviceID["PN_1058"] = 35] = "PN_1058";
  /**
   * PhidgetAccelerometer 3-Axis (1059)
   * @public
   */

  DeviceID[DeviceID["PN_1059"] = 36] = "PN_1059";
  /**
   * PhidgetMotorControl LV (1060)
   * @public
   */

  DeviceID[DeviceID["PN_1060"] = 37] = "PN_1060";
  /**
   * PhidgetAdvancedServo 8-Motor (1061)
   * @public
   */

  DeviceID[DeviceID["PN_1061"] = 38] = "PN_1061";
  /**
   * PhidgetStepper Unipolar 4-Motor (1062)
   * @public
   */

  DeviceID[DeviceID["PN_1062"] = 39] = "PN_1062";
  /**
   * PhidgetStepper Bipolar 1-Motor (1063)
   * @public
   */

  DeviceID[DeviceID["PN_1063"] = 40] = "PN_1063";
  /**
   * PhidgetMotorControl HC (1064)
   * @public
   */

  DeviceID[DeviceID["PN_1064"] = 41] = "PN_1064";
  /**
   * PhidgetMotorControl 1-Motor (1065)
   * @public
   */

  DeviceID[DeviceID["PN_1065"] = 42] = "PN_1065";
  /**
   * PhidgetAdvancedServo 1-Motor (1066)
   * @public
   */

  DeviceID[DeviceID["PN_1066"] = 43] = "PN_1066";
  /**
   * PhidgetStepper Bipolar HC (1067)
   * @public
   */

  DeviceID[DeviceID["PN_1067"] = 44] = "PN_1067";
  /**
   * PhidgetTextLCD 20x2 with PhidgetInterfaceKit 8/8/8 (1202, 1203)
   * @public
   */

  DeviceID[DeviceID["PN_1202_1203"] = 45] = "PN_1202_1203";
  /**
   * PhidgetTextLCD Adapter (1204)
   * @public
   */

  DeviceID[DeviceID["PN_1204"] = 46] = "PN_1204";
  /**
   * PhidgetTextLCD 20x2 (1215, 1216, 1217, 1218)
   * @public
   */

  DeviceID[DeviceID["PN_1215__1218"] = 47] = "PN_1215__1218";
  /**
   * PhidgetTextLCD 20x2 with PhidgetInterfaceKit 0/8/8 (1219, 1220, 1221, 1222)
   * @public
   */

  DeviceID[DeviceID["PN_1219__1222"] = 48] = "PN_1219__1222";
  /**
   * pH Adapter
   * @public
   */

  DeviceID[DeviceID["PN_ADP1000"] = 49] = "PN_ADP1000";
  /**
   * Analog Input Module x8
   * @public
   */

  DeviceID[DeviceID["PN_DAQ1000"] = 51] = "PN_DAQ1000";
  /**
   * Digital Input 4
   * @public
   */

  DeviceID[DeviceID["PN_DAQ1200"] = 52] = "PN_DAQ1200";
  /**
   * Digital Input 4 Isolated
   * @public
   */

  DeviceID[DeviceID["PN_DAQ1300"] = 53] = "PN_DAQ1300";
  /**
   * Digital Input 16
   * @public
   */

  DeviceID[DeviceID["PN_DAQ1301"] = 54] = "PN_DAQ1301";
  /**
   * Versatile Input
   * @public
   */

  DeviceID[DeviceID["PN_DAQ1400"] = 55] = "PN_DAQ1400";
  /**
   * Bridge
   * @public
   */

  DeviceID[DeviceID["PN_DAQ1500"] = 56] = "PN_DAQ1500";
  /**
   * DC Motor Controller with PID
   * @public
   */

  DeviceID[DeviceID["PN_DCC1000"] = 57] = "PN_DCC1000";
  /**
   * Small DC Motor Controller
   * @public
   */

  DeviceID[DeviceID["PN_DCC1001"] = 110] = "PN_DCC1001";
  /**
   * 4A Small DC Motor Controller
   * @public
   */

  DeviceID[DeviceID["PN_DCC1002"] = 117] = "PN_DCC1002";
  /**
   * 2 Channel DC Motor Controller
   * @public
   */

  DeviceID[DeviceID["PN_DCC1003"] = 120] = "PN_DCC1003";
  /**
   * BLDC Motor Controller
   * @public
   */

  DeviceID[DeviceID["PN_DCC1100"] = 108] = "PN_DCC1100";
  /**
   * 200mm Distance Sensor
   * @public
   */

  DeviceID[DeviceID["PN_DST1000"] = 58] = "PN_DST1000";
  /**
   * 650mm distance sensor
   * @public
   */

  DeviceID[DeviceID["PN_DST1001"] = 121] = "PN_DST1001";
  /**
   * 1200mm distance sensor
   * @public
   */

  DeviceID[DeviceID["PN_DST1002"] = 126] = "PN_DST1002";
  /**
   * Sonar Distance Sensor
   * @public
   */

  DeviceID[DeviceID["PN_DST1200"] = 59] = "PN_DST1200";
  /**
   * Encoder
   * @public
   */

  DeviceID[DeviceID["PN_ENC1000"] = 60] = "PN_ENC1000";
  /**
   * Phidget SPI device under firmware upgrade
   * @internal
   */

  DeviceID[DeviceID["FIRMWARE_UPGRADE_SPI"] = 104] = "FIRMWARE_UPGRADE_SPI";
  /**
   * VINT Device in firmware upgrade mode, STM32F0 Proc.
   * @internal
   */

  DeviceID[DeviceID["FIRMWARE_UPGRADE_STM32F0"] = 102] = "FIRMWARE_UPGRADE_STM32F0";
  /**
   * VINT Device in firmware upgrade mode, STM32F3 Proc.
   * @internal
   */

  DeviceID[DeviceID["FIRMWARE_UPGRADE_STM32F3"] = 145] = "FIRMWARE_UPGRADE_STM32F3";
  /**
   * VINT Device in firmware upgrade mode, STM32G0 Proc.
   * @internal
   */

  DeviceID[DeviceID["FIRMWARE_UPGRADE_STM32G0"] = 143] = "FIRMWARE_UPGRADE_STM32G0";
  /**
   * VINT Device in firmware upgrade mode, STM8S Proc.
   * @internal
   */

  DeviceID[DeviceID["FIRMWARE_UPGRADE_STM8S"] = 103] = "FIRMWARE_UPGRADE_STM8S";
  /**
   * USB device in firmware upgrade mode
   * @internal
   */

  DeviceID[DeviceID["FIRMWARE_UPGRADE_USB"] = 101] = "FIRMWARE_UPGRADE_USB";
  /**
   * Capacitive Touch Sensor
   * @public
   */

  DeviceID[DeviceID["PN_HIN1000"] = 61] = "PN_HIN1000";
  /**
   * Capacitive Scroll
   * @public
   */

  DeviceID[DeviceID["PN_HIN1001"] = 62] = "PN_HIN1001";
  /**
   * Joystick
   * @public
   */

  DeviceID[DeviceID["PN_HIN1100"] = 63] = "PN_HIN1100";
  /**
   * Dial Encoder
   * @public
   */

  DeviceID[DeviceID["PN_HIN1101"] = 109] = "PN_HIN1101";
  /**
   * Phidget USB VINT Hub with 6 ports
   * @public
   */

  DeviceID[DeviceID["PN_HUB0000"] = 64] = "PN_HUB0000";
  /**
   * Phidget USB VINT Hub with 6 ports
   * @public
   */

  DeviceID[DeviceID["PN_HUB0001"] = 142] = "PN_HUB0001";
  /**
   * Phidget SPI VINT Hub with 6 ports
   * @public
   */

  DeviceID[DeviceID["PN_HUB0004"] = 67] = "PN_HUB0004";
  /**
   * Phidget Network Hub with 6 ports
   * @public
   */

  DeviceID[DeviceID["PN_HUB5000"] = 123] = "PN_HUB5000";
  /**
   * Humidity Sensor
   * @public
   */

  DeviceID[DeviceID["PN_HUM1000"] = 69] = "PN_HUM1000";
  /**
   * Humidity Sensor
   * @public
   */

  DeviceID[DeviceID["PN_HUM1001"] = 127] = "PN_HUM1001";
  /**
   * VINT Moisture Sensor
   * @public
   */

  DeviceID[DeviceID["PN_HUM1100"] = 136] = "PN_HUM1100";
  /**
   * PhidgetInterfaceKit 4/8/8
   * @internal
   */

  DeviceID[DeviceID["PN_INTERFACE_KIT488"] = 1] = "PN_INTERFACE_KIT488";
  /**
   * LCD
   * @public
   */

  DeviceID[DeviceID["PN_LCD1100"] = 70] = "PN_LCD1100";
  /**
   * LED Driver 32
   * @public
   */

  DeviceID[DeviceID["PN_LED1000"] = 71] = "PN_LED1000";
  /**
   * Light Sensor
   * @public
   */

  DeviceID[DeviceID["PN_LUX1000"] = 72] = "PN_LUX1000";
  /**
   * Phidget Accelerometer
   * @public
   */

  DeviceID[DeviceID["PN_MOT0100"] = 146] = "PN_MOT0100";
  /**
   * PhidgetSpatial Precision 3/3/3
   * @public
   */

  DeviceID[DeviceID["PN_MOT0109"] = 140] = "PN_MOT0109";
  /**
   * PhidgetSpatial Precision 3/3/3
   * @public
   */

  DeviceID[DeviceID["PN_MOT0110"] = 141] = "PN_MOT0110";
  /**
   * Accelerometer 0/0/3
   * @public
   */

  DeviceID[DeviceID["PN_MOT1100"] = 73] = "PN_MOT1100";
  /**
   * Spatial 3/3/3
   * @public
   */

  DeviceID[DeviceID["PN_MOT1101"] = 74] = "PN_MOT1101";
  /**
   * VINT Spatial Phidget AHRS
   * @public
   */

  DeviceID[DeviceID["PN_MOT1102"] = 137] = "PN_MOT1102";
  /**
   * Analog Output 0-5V
   * @public
   */

  DeviceID[DeviceID["PN_OUT1000"] = 75] = "PN_OUT1000";
  /**
   * Analog Output (+/-)10V
   * @public
   */

  DeviceID[DeviceID["PN_OUT1001"] = 76] = "PN_OUT1001";
  /**
   * Analog Output (+/-)10V - 16 bit
   * @public
   */

  DeviceID[DeviceID["PN_OUT1002"] = 77] = "PN_OUT1002";
  /**
   * Digital Output 4
   * @public
   */

  DeviceID[DeviceID["PN_OUT1100"] = 78] = "PN_OUT1100";
  /**
   * Barometer
   * @public
   */

  DeviceID[DeviceID["PN_PRE1000"] = 79] = "PN_PRE1000";
  /**
   * PhidgetAdvancedServo 8-Motor
   * @public
   */

  DeviceID[DeviceID["PN_RCC0004"] = 124] = "PN_RCC0004";
  /**
   * 8-Servo Controller
   * @public
   */

  DeviceID[DeviceID["PN_RCC1000"] = 80] = "PN_RCC1000";
  /**
   * Power Relay 4
   * @public
   */

  DeviceID[DeviceID["PN_REL1000"] = 81] = "PN_REL1000";
  /**
   * Digital Output 4 Isolated
   * @public
   */

  DeviceID[DeviceID["PN_REL1100"] = 82] = "PN_REL1100";
  /**
   * Digital Output 16 Isolated
   * @public
   */

  DeviceID[DeviceID["PN_REL1101"] = 83] = "PN_REL1101";
  /**
   * Power Supply Protector
   * @public
   */

  DeviceID[DeviceID["PN_SAF1000"] = 84] = "PN_SAF1000";
  /**
   * Sound Pressure Level Sensor
   * @public
   */

  DeviceID[DeviceID["PN_SND1000"] = 85] = "PN_SND1000";
  /**
   * Bipolar Stepper Motor Controller
   * @public
   */

  DeviceID[DeviceID["PN_STC1000"] = 86] = "PN_STC1000";
  /**
   * Bipolar Stepper Motor SmallController
   * @public
   */

  DeviceID[DeviceID["PN_STC1001"] = 115] = "PN_STC1001";
  /**
   * 8A Bipolar Stepper Motor Controller
   * @public
   */

  DeviceID[DeviceID["PN_STC1002"] = 118] = "PN_STC1002";
  /**
   * 4A Bipolar Stepper Motor SmallController
   * @public
   */

  DeviceID[DeviceID["PN_STC1003"] = 119] = "PN_STC1003";
  /**
   * 4A Bipolar Stepper Motor SmallController
   * @public
   */

  DeviceID[DeviceID["PN_STC1005"] = 149] = "PN_STC1005";
  /**
   * Integrated Temperature Sensor
   * @public
   */

  DeviceID[DeviceID["PN_TMP1000"] = 87] = "PN_TMP1000";
  /**
   * Thermocouple 1
   * @public
   */

  DeviceID[DeviceID["PN_TMP1100"] = 88] = "PN_TMP1100";
  /**
   * Thermocouple 4
   * @public
   */

  DeviceID[DeviceID["PN_TMP1101"] = 89] = "PN_TMP1101";
  /**
   * RTD
   * @public
   */

  DeviceID[DeviceID["PN_TMP1200"] = 90] = "PN_TMP1200";
  /**
   * Voltage Sensor High Precision
   * @public
   */

  DeviceID[DeviceID["PN_VCP1000"] = 92] = "PN_VCP1000";
  /**
   * Voltage Sensor Large
   * @public
   */

  DeviceID[DeviceID["PN_VCP1001"] = 93] = "PN_VCP1001";
  /**
   * Voltage Sensor Small
   * @public
   */

  DeviceID[DeviceID["PN_VCP1002"] = 94] = "PN_VCP1002";
  /**
   * 30A Current Sensor
   * @public
   */

  DeviceID[DeviceID["PN_VCP1100"] = 105] = "PN_VCP1100";
})(DeviceID || (DeviceID = {}));
/**
 * Phidget logging level
 * @public
 */


var LogLevel;

(function (LogLevel) {
  /**
   * Critical
   * @public
   */
  LogLevel[LogLevel["CRITICAL"] = 1] = "CRITICAL";
  /**
   * Error
   * @public
   */

  LogLevel[LogLevel["ERROR"] = 2] = "ERROR";
  /**
   * Warning
   * @public
   */

  LogLevel[LogLevel["WARNING"] = 3] = "WARNING";
  /**
   * Info
   * @public
   */

  LogLevel[LogLevel["INFO"] = 4] = "INFO";
  /**
   * Debug
   * @public
   */

  LogLevel[LogLevel["DEBUG"] = 5] = "DEBUG";
  /**
   * Verbose
   * @public
   */

  LogLevel[LogLevel["VERBOSE"] = 6] = "VERBOSE";
})(LogLevel || (LogLevel = {}));
/**
 * Phidget device class
 * @public
 */


var DeviceClass;

(function (DeviceClass) {
  /**
   * Any device
   * @internal
   */
  DeviceClass[DeviceClass["NONE"] = 0] = "NONE";
  /**
   * PhidgetAccelerometer device
   * @public
   */

  DeviceClass[DeviceClass["ACCELEROMETER"] = 1] = "ACCELEROMETER";
  /**
   * PhidgetAdvancedServo device
   * @public
   */

  DeviceClass[DeviceClass["ADVANCED_SERVO"] = 2] = "ADVANCED_SERVO";
  /**
   * PhidgetAnalog device
   * @public
   */

  DeviceClass[DeviceClass["ANALOG"] = 3] = "ANALOG";
  /**
   * PhidgetBridge device
   * @public
   */

  DeviceClass[DeviceClass["BRIDGE"] = 4] = "BRIDGE";
  /**
   * PhidgetDataAdapter device
   * @internal
   */

  DeviceClass[DeviceClass["DATA_ADAPTER"] = 25] = "DATA_ADAPTER";
  /**
   * Dictionary device
   * @public
   */

  DeviceClass[DeviceClass["DICTIONARY"] = 24] = "DICTIONARY";
  /**
   * PhidgetEncoder device
   * @public
   */

  DeviceClass[DeviceClass["ENCODER"] = 5] = "ENCODER";
  /**
   * Phidget device in Firmware Upgrade mode
   * @internal
   */

  DeviceClass[DeviceClass["FIRMWARE_UPGRADE"] = 23] = "FIRMWARE_UPGRADE";
  /**
   * PhidgetFrequencyCounter device
   * @public
   */

  DeviceClass[DeviceClass["FREQUENCY_COUNTER"] = 6] = "FREQUENCY_COUNTER";
  /**
   * Generic device
   * @internal
   */

  DeviceClass[DeviceClass["GENERIC"] = 22] = "GENERIC";
  /**
   * PhidgetGPS device
   * @public
   */

  DeviceClass[DeviceClass["GPS"] = 7] = "GPS";
  /**
   * Phidget VINT Hub device
   * @public
   */

  DeviceClass[DeviceClass["HUB"] = 8] = "HUB";
  /**
   * PhidgetInterfaceKit device
   * @public
   */

  DeviceClass[DeviceClass["INTERFACE_KIT"] = 9] = "INTERFACE_KIT";
  /**
   * PhidgetIR device
   * @public
   */

  DeviceClass[DeviceClass["IR"] = 10] = "IR";
  /**
   * PhidgetLED device
   * @public
   */

  DeviceClass[DeviceClass["LED"] = 11] = "LED";
  /**
   * Phidget Mesh Dongle
   * @internal
   */

  DeviceClass[DeviceClass["MESH_DONGLE"] = 12] = "MESH_DONGLE";
  /**
   * PhidgetMotorControl device
   * @public
   */

  DeviceClass[DeviceClass["MOTOR_CONTROL"] = 13] = "MOTOR_CONTROL";
  /**
   * PhidgetPHSensor device
   * @public
   */

  DeviceClass[DeviceClass["PH_SENSOR"] = 14] = "PH_SENSOR";
  /**
   * PhidgetRFID device
   * @public
   */

  DeviceClass[DeviceClass["RFID"] = 15] = "RFID";
  /**
   * PhidgetServo device
   * @public
   */

  DeviceClass[DeviceClass["SERVO"] = 16] = "SERVO";
  /**
   * PhidgetSpatial device
   * @public
   */

  DeviceClass[DeviceClass["SPATIAL"] = 17] = "SPATIAL";
  /**
   * PhidgetStepper device
   * @public
   */

  DeviceClass[DeviceClass["STEPPER"] = 18] = "STEPPER";
  /**
   * PhidgetTemperatureSensor device
   * @public
   */

  DeviceClass[DeviceClass["TEMPERATURE_SENSOR"] = 19] = "TEMPERATURE_SENSOR";
  /**
   * PhidgetTextLCD device
   * @public
   */

  DeviceClass[DeviceClass["TEXT_LCD"] = 20] = "TEXT_LCD";
  /**
   * Phidget VINT device
   * @public
   */

  DeviceClass[DeviceClass["VINT"] = 21] = "VINT";
})(DeviceClass || (DeviceClass = {}));
/**
 * Phidget channel class
 * @public
 */


var ChannelClass;

(function (ChannelClass) {
  /**
   * Any channel
   * @internal
   */
  ChannelClass[ChannelClass["NONE"] = 0] = "NONE";
  /**
   * Accelerometer channel
   * @public
   */

  ChannelClass[ChannelClass["ACCELEROMETER"] = 1] = "ACCELEROMETER";
  /**
   * BLDC motor channel
   * @public
   */

  ChannelClass[ChannelClass["BLDC_MOTOR"] = 35] = "BLDC_MOTOR";
  /**
   * Capacitive Touch channel
   * @public
   */

  ChannelClass[ChannelClass["CAPACITIVE_TOUCH"] = 14] = "CAPACITIVE_TOUCH";
  /**
   * Current input channel
   * @public
   */

  ChannelClass[ChannelClass["CURRENT_INPUT"] = 2] = "CURRENT_INPUT";
  /**
   * Current output channel
   * @internal
   */

  ChannelClass[ChannelClass["CURRENT_OUTPUT"] = 38] = "CURRENT_OUTPUT";
  /**
   * Data adapter channel
   * @internal
   */

  ChannelClass[ChannelClass["DATA_ADAPTER"] = 3] = "DATA_ADAPTER";
  /**
   * DC motor channel
   * @public
   */

  ChannelClass[ChannelClass["DC_MOTOR"] = 4] = "DC_MOTOR";
  /**
   * Dictionary
   * @public
   */

  ChannelClass[ChannelClass["DICTIONARY"] = 36] = "DICTIONARY";
  /**
   * Digital input channel
   * @public
   */

  ChannelClass[ChannelClass["DIGITAL_INPUT"] = 5] = "DIGITAL_INPUT";
  /**
   * Digital output channel
   * @public
   */

  ChannelClass[ChannelClass["DIGITAL_OUTPUT"] = 6] = "DIGITAL_OUTPUT";
  /**
   * Distance sensor channel
   * @public
   */

  ChannelClass[ChannelClass["DISTANCE_SENSOR"] = 7] = "DISTANCE_SENSOR";
  /**
   * Encoder channel
   * @public
   */

  ChannelClass[ChannelClass["ENCODER"] = 8] = "ENCODER";
  /**
   * Firmware upgrade channel
   * @internal
   */

  ChannelClass[ChannelClass["FIRMWARE_UPGRADE"] = 32] = "FIRMWARE_UPGRADE";
  /**
   * Frequency counter channel
   * @public
   */

  ChannelClass[ChannelClass["FREQUENCY_COUNTER"] = 9] = "FREQUENCY_COUNTER";
  /**
   * Generic channel
   * @internal
   */

  ChannelClass[ChannelClass["GENERIC"] = 33] = "GENERIC";
  /**
   * GPS channel
   * @public
   */

  ChannelClass[ChannelClass["GPS"] = 10] = "GPS";
  /**
   * Gyroscope channel
   * @public
   */

  ChannelClass[ChannelClass["GYROSCOPE"] = 12] = "GYROSCOPE";
  /**
   * VINT Hub channel
   * @public
   */

  ChannelClass[ChannelClass["HUB"] = 13] = "HUB";
  /**
   * Humidity sensor channel
   * @public
   */

  ChannelClass[ChannelClass["HUMIDITY_SENSOR"] = 15] = "HUMIDITY_SENSOR";
  /**
   * IR channel
   * @public
   */

  ChannelClass[ChannelClass["IR"] = 16] = "IR";
  /**
   * LCD channel
   * @public
   */

  ChannelClass[ChannelClass["LCD"] = 11] = "LCD";
  /**
   * Light sensor channel
   * @public
   */

  ChannelClass[ChannelClass["LIGHT_SENSOR"] = 17] = "LIGHT_SENSOR";
  /**
   * Magnetometer channel
   * @public
   */

  ChannelClass[ChannelClass["MAGNETOMETER"] = 18] = "MAGNETOMETER";
  /**
   * Mesh dongle channel
   * @internal
   */

  ChannelClass[ChannelClass["MESH_DONGLE"] = 19] = "MESH_DONGLE";
  /**
   * Motor position control channel.
   * @public
   */

  ChannelClass[ChannelClass["MOTOR_POSITION_CONTROLLER"] = 34] = "MOTOR_POSITION_CONTROLLER";
  /**
   * Motor velocity control channel.
   * @internal
   */

  ChannelClass[ChannelClass["MOTOR_VELOCITY_CONTROLLER"] = 39] = "MOTOR_VELOCITY_CONTROLLER";
  /**
   * pH sensor channel
   * @public
   */

  ChannelClass[ChannelClass["PH_SENSOR"] = 37] = "PH_SENSOR";
  /**
   * Power guard channel
   * @public
   */

  ChannelClass[ChannelClass["POWER_GUARD"] = 20] = "POWER_GUARD";
  /**
   * Pressure sensor channel
   * @public
   */

  ChannelClass[ChannelClass["PRESSURE_SENSOR"] = 21] = "PRESSURE_SENSOR";
  /**
   * RC Servo channel
   * @public
   */

  ChannelClass[ChannelClass["RC_SERVO"] = 22] = "RC_SERVO";
  /**
   * Resistance input channel
   * @public
   */

  ChannelClass[ChannelClass["RESISTANCE_INPUT"] = 23] = "RESISTANCE_INPUT";
  /**
   * RFID channel
   * @public
   */

  ChannelClass[ChannelClass["RFID"] = 24] = "RFID";
  /**
   * Sound sensor channel
   * @public
   */

  ChannelClass[ChannelClass["SOUND_SENSOR"] = 25] = "SOUND_SENSOR";
  /**
   * Spatial channel
   * @public
   */

  ChannelClass[ChannelClass["SPATIAL"] = 26] = "SPATIAL";
  /**
   * Stepper channel
   * @public
   */

  ChannelClass[ChannelClass["STEPPER"] = 27] = "STEPPER";
  /**
   * Temperature sensor channel
   * @public
   */

  ChannelClass[ChannelClass["TEMPERATURE_SENSOR"] = 28] = "TEMPERATURE_SENSOR";
  /**
   * Voltage input channel
   * @public
   */

  ChannelClass[ChannelClass["VOLTAGE_INPUT"] = 29] = "VOLTAGE_INPUT";
  /**
   * Voltage output channel
   * @public
   */

  ChannelClass[ChannelClass["VOLTAGE_OUTPUT"] = 30] = "VOLTAGE_OUTPUT";
  /**
   * Voltage ratio input channel
   * @public
   */

  ChannelClass[ChannelClass["VOLTAGE_RATIO_INPUT"] = 31] = "VOLTAGE_RATIO_INPUT";
})(ChannelClass || (ChannelClass = {}));
/**
 * Phidget channel sub class
 * @public
 */


var ChannelSubclass;

(function (ChannelSubclass) {
  /**
   * No subclass
   * @public
   */
  ChannelSubclass[ChannelSubclass["NONE"] = 1] = "NONE";
  /**
   * Digital output duty cycle
   * @public
   */

  ChannelSubclass[ChannelSubclass["DIGITAL_OUTPUT_DUTY_CYCLE"] = 16] = "DIGITAL_OUTPUT_DUTY_CYCLE";
  /**
   * Digital output frequency
   * @public
   */

  ChannelSubclass[ChannelSubclass["DIGITAL_OUTPUT_FREQUENCY"] = 18] = "DIGITAL_OUTPUT_FREQUENCY";
  /**
   * Digital output LED driver
   * @public
   */

  ChannelSubclass[ChannelSubclass["DIGITAL_OUTPUT_LEDDRIVER"] = 17] = "DIGITAL_OUTPUT_LEDDRIVER";
  /**
   * Encoder IO mode settable
   * @public
   */

  ChannelSubclass[ChannelSubclass["ENCODER_MODE_SETTABLE"] = 96] = "ENCODER_MODE_SETTABLE";
  /**
   * Graphic LCD
   * @public
   */

  ChannelSubclass[ChannelSubclass["LCD_GRAPHIC"] = 80] = "LCD_GRAPHIC";
  /**
   * Text LCD
   * @public
   */

  ChannelSubclass[ChannelSubclass["LCD_TEXT"] = 81] = "LCD_TEXT";
  /**
   * Spatial AHRS/IMU
   * @public
   */

  ChannelSubclass[ChannelSubclass["SPATIAL_AHRS"] = 112] = "SPATIAL_AHRS";
  /**
   * Temperature sensor RTD
   * @public
   */

  ChannelSubclass[ChannelSubclass["TEMPERATURE_SENSOR_RTD"] = 32] = "TEMPERATURE_SENSOR_RTD";
  /**
   * Temperature sensor thermocouple
   * @public
   */

  ChannelSubclass[ChannelSubclass["TEMPERATURE_SENSOR_THERMOCOUPLE"] = 33] = "TEMPERATURE_SENSOR_THERMOCOUPLE";
  /**
   * Voltage sensor port
   * @public
   */

  ChannelSubclass[ChannelSubclass["VOLTAGE_INPUT_SENSOR_PORT"] = 48] = "VOLTAGE_INPUT_SENSOR_PORT";
  /**
   * Voltage ratio bridge input
   * @public
   */

  ChannelSubclass[ChannelSubclass["VOLTAGE_RATIO_INPUT_BRIDGE"] = 65] = "VOLTAGE_RATIO_INPUT_BRIDGE";
  /**
   * Voltage ratio sensor port
   * @public
   */

  ChannelSubclass[ChannelSubclass["VOLTAGE_RATIO_INPUT_SENSOR_PORT"] = 64] = "VOLTAGE_RATIO_INPUT_SENSOR_PORT";
})(ChannelSubclass || (ChannelSubclass = {}));
/**
 * Phidget mesh mode
 * @public
 */


var MeshMode;

(function (MeshMode) {
  /**
   * Router mode
   * @public
   */
  MeshMode[MeshMode["ROUTER"] = 1] = "ROUTER";
  /**
   * Sleepy end device mode
   * @public
   */

  MeshMode[MeshMode["SLEEPY_END_DEVICE"] = 2] = "SLEEPY_END_DEVICE";
})(MeshMode || (MeshMode = {}));
/**
 * The voltage level being provided to the sensor
 * @public
 */


var PowerSupply;

(function (PowerSupply) {
  /**
   * Switch the sensor power supply off
   * @public
   */
  PowerSupply[PowerSupply["OFF"] = 1] = "OFF";
  /**
   * The sensor is provided with 12 volts
   * @public
   */

  PowerSupply[PowerSupply["VOLTS_12"] = 2] = "VOLTS_12";
  /**
   * The sensor is provided with 24 volts
   * @public
   */

  PowerSupply[PowerSupply["VOLTS_24"] = 3] = "VOLTS_24";
})(PowerSupply || (PowerSupply = {}));
/**
 * RTD wiring configuration
 * @public
 */


var RTDWireSetup;

(function (RTDWireSetup) {
  /**
   * Configures the device to make resistance calculations based on a 2-wire RTD setup.
   * @public
   */
  RTDWireSetup[RTDWireSetup["WIRES_2"] = 1] = "WIRES_2";
  /**
   * Configures the device to make resistance calculations based on a 3-wire RTD setup.
   * @public
   */

  RTDWireSetup[RTDWireSetup["WIRES_3"] = 2] = "WIRES_3";
  /**
   * Configures the device to make resistance calculations based on a 4-wire RTD setup.
   * @public
   */

  RTDWireSetup[RTDWireSetup["WIRES_4"] = 3] = "WIRES_4";
})(RTDWireSetup || (RTDWireSetup = {}));
/**
 * The selected polarity mode for the digital input
 * @public
 */


var InputMode;

(function (InputMode) {
  /**
   * For interfacing NPN digital sensors
   * @public
   */
  InputMode[InputMode["NPN"] = 1] = "NPN";
  /**
   * For interfacing PNP digital sensors
   * @public
   */

  InputMode[InputMode["PNP"] = 2] = "PNP";
})(InputMode || (InputMode = {}));
/**
 * The operating condition of the fan. Choose between on, off, or automatic (based on temperature).
 * @public
 */


var FanMode;

(function (FanMode) {
  /**
   * Turns the fan off.
   * @public
   */
  FanMode[FanMode["OFF"] = 1] = "OFF";
  /**
   * Turns the fan on.
   * @public
   */

  FanMode[FanMode["ON"] = 2] = "ON";
  /**
   * The fan will be automatically controlled based on temperature.
   * @public
   */

  FanMode[FanMode["AUTO"] = 3] = "AUTO";
})(FanMode || (FanMode = {}));
/**
 * The drive type selection for the motor
 * @public
 */


var MotorDriveType;

(function (MotorDriveType) {
  /**
   * Configures the motor to coast
   * @public
   */
  MotorDriveType[MotorDriveType["COAST"] = 1] = "COAST";
  /**
   * Configures the motor for active control
   * @public
   */

  MotorDriveType[MotorDriveType["ACTIVE"] = 2] = "ACTIVE";
})(MotorDriveType || (MotorDriveType = {}));
/**
 * The drive type selection for the motor
 * @public
 */


var MotorPositionType;

(function (MotorPositionType) {
  /**
   * Configures the controller to use the encoder as a position source
   * @public
   */
  MotorPositionType[MotorPositionType["ENCODER"] = 1] = "ENCODER";
  /**
   * Configures the controller to use the hall-effect sensor as a position source
   * @public
   */

  MotorPositionType[MotorPositionType["HALL"] = 2] = "HALL";
})(MotorPositionType || (MotorPositionType = {}));
/**
 * Controls how data from primary and backup spatial sensing chips are used.
 * @public
 */


var SpatialPrecision;

(function (SpatialPrecision) {
  /**
   * High precision sensor is used when possible, fallback to low precision sensor.
   * @public
   */
  SpatialPrecision[SpatialPrecision["HYBRID"] = 0] = "HYBRID";
  /**
   * High precision sensor is always used.
   * @public
   */

  SpatialPrecision[SpatialPrecision["HIGH"] = 1] = "HIGH";
  /**
   * Low precision sensor is always used.
   * @public
   */

  SpatialPrecision[SpatialPrecision["LOW"] = 2] = "LOW";
})(SpatialPrecision || (SpatialPrecision = {}));
/**
 * Analog sensor units. These correspond to the types of quantities that can be measured by Phidget analog sensors.
 * @public
 */


var Unit;

(function (Unit) {
  /**
   * Unitless
   * @public
   */
  Unit[Unit["NONE"] = 0] = "NONE";
  /**
   * Boolean
   * @public
   */

  Unit[Unit["BOOLEAN"] = 1] = "BOOLEAN";
  /**
   * Percent
   * @public
   */

  Unit[Unit["PERCENT"] = 2] = "PERCENT";
  /**
   * Decibel
   * @public
   */

  Unit[Unit["DECIBEL"] = 3] = "DECIBEL";
  /**
   * Millimeter
   * @public
   */

  Unit[Unit["MILLIMETER"] = 4] = "MILLIMETER";
  /**
   * Centimeter
   * @public
   */

  Unit[Unit["CENTIMETER"] = 5] = "CENTIMETER";
  /**
   * Meter
   * @public
   */

  Unit[Unit["METER"] = 6] = "METER";
  /**
   * Gram
   * @public
   */

  Unit[Unit["GRAM"] = 7] = "GRAM";
  /**
   * Kilogram
   * @public
   */

  Unit[Unit["KILOGRAM"] = 8] = "KILOGRAM";
  /**
   * Milliampere
   * @public
   */

  Unit[Unit["MILLIAMPERE"] = 9] = "MILLIAMPERE";
  /**
   * Ampere
   * @public
   */

  Unit[Unit["AMPERE"] = 10] = "AMPERE";
  /**
   * Kilopascal
   * @public
   */

  Unit[Unit["KILOPASCAL"] = 11] = "KILOPASCAL";
  /**
   * Volt
   * @public
   */

  Unit[Unit["VOLT"] = 12] = "VOLT";
  /**
   * Degree Celcius
   * @public
   */

  Unit[Unit["DEGREE_CELCIUS"] = 13] = "DEGREE_CELCIUS";
  /**
   * Lux
   * @public
   */

  Unit[Unit["LUX"] = 14] = "LUX";
  /**
   * Gauss
   * @public
   */

  Unit[Unit["GAUSS"] = 15] = "GAUSS";
  /**
   * pH
   * @public
   */

  Unit[Unit["PH"] = 16] = "PH";
  /**
   * Watt
   * @public
   */

  Unit[Unit["WATT"] = 17] = "WATT";
})(Unit || (Unit = {}));
/**
 * Bridge gain amplification setting. Higher gain results in better resolution, but narrower voltage range.
 * @public
 */


var BridgeGain;

(function (BridgeGain) {
  /**
   * 1x Amplificaion
   * @public
   */
  BridgeGain[BridgeGain["GAIN_1X"] = 1] = "GAIN_1X";
  /**
   * 2x Amplification
   * @public
   */

  BridgeGain[BridgeGain["GAIN_2X"] = 2] = "GAIN_2X";
  /**
   * 4x Amplification
   * @public
   */

  BridgeGain[BridgeGain["GAIN_4X"] = 3] = "GAIN_4X";
  /**
   * 8x Amplification
   * @public
   */

  BridgeGain[BridgeGain["GAIN_8X"] = 4] = "GAIN_8X";
  /**
   * 16x Amplification
   * @public
   */

  BridgeGain[BridgeGain["GAIN_16X"] = 5] = "GAIN_16X";
  /**
   * 32x Amplification
   * @public
   */

  BridgeGain[BridgeGain["GAIN_32X"] = 6] = "GAIN_32X";
  /**
   * 64x Amplification
   * @public
   */

  BridgeGain[BridgeGain["GAIN_64X"] = 7] = "GAIN_64X";
  /**
   * 128x Amplification
   * @public
   */

  BridgeGain[BridgeGain["GAIN_128X"] = 8] = "GAIN_128X";
})(BridgeGain || (BridgeGain = {}));
/**
 * The type of sensor attached to the voltage ratio input
 * @public
 */


var VoltageRatioSensorType;

(function (VoltageRatioSensorType) {
  /**
   * Default. Configures the channel to be a generic ratiometric sensor. Unit is volts/volt.
   * @public
   */
  VoltageRatioSensorType[VoltageRatioSensorType["VOLTAGE_RATIO"] = 0] = "VOLTAGE_RATIO";
  /**
   * 1101 - IR Distance Adapter, with Sharp Distance Sensor 2D120X (4-30cm)
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_1101_SHARP2D120X"] = 11011] = "PN_1101_SHARP2D120X";
  /**
   * 1101 - IR Distance Adapter, with Sharp Distance Sensor 2Y0A21 (10-80cm)
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_1101_SHARP2Y0A21"] = 11012] = "PN_1101_SHARP2Y0A21";
  /**
   * 1101 - IR Distance Adapter, with Sharp Distance Sensor 2Y0A02 (20-150cm)
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_1101_SHARP2Y0A02"] = 11013] = "PN_1101_SHARP2Y0A02";
  /**
   * 1102 - IR Reflective Sensor 5mm
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_1102"] = 11020] = "PN_1102";
  /**
   * 1103 - IR Reflective Sensor 10cm
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_1103"] = 11030] = "PN_1103";
  /**
   * 1104 - Vibration Sensor
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_1104"] = 11040] = "PN_1104";
  /**
   * 1105 - Light Sensor
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_1105"] = 11050] = "PN_1105";
  /**
   * 1106 - Force Sensor
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_1106"] = 11060] = "PN_1106";
  /**
   * 1107 - Humidity Sensor
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_1107"] = 11070] = "PN_1107";
  /**
   * 1108 - Magnetic Sensor
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_1108"] = 11080] = "PN_1108";
  /**
   * 1109 - Rotation Sensor
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_1109"] = 11090] = "PN_1109";
  /**
   * 1110 - Touch Sensor
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_1110"] = 11100] = "PN_1110";
  /**
   * 1111 - Motion Sensor
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_1111"] = 11110] = "PN_1111";
  /**
   * 1112 - Slider 60
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_1112"] = 11120] = "PN_1112";
  /**
   * 1113 - Mini Joy Stick Sensor
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_1113"] = 11130] = "PN_1113";
  /**
   * 1115 - Pressure Sensor
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_1115"] = 11150] = "PN_1115";
  /**
   * 1116 - Multi-turn Rotation Sensor
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_1116"] = 11160] = "PN_1116";
  /**
   * 1118 - 50Amp Current Sensor AC
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_1118_AC"] = 11181] = "PN_1118_AC";
  /**
   * 1118 - 50Amp Current Sensor DC
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_1118_DC"] = 11182] = "PN_1118_DC";
  /**
   * 1119 - 20Amp Current Sensor AC
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_1119_AC"] = 11191] = "PN_1119_AC";
  /**
   * 1119 - 20Amp Current Sensor DC
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_1119_DC"] = 11192] = "PN_1119_DC";
  /**
   * 1120 - FlexiForce Adapter
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_1120"] = 11200] = "PN_1120";
  /**
   * 1121 - Voltage Divider
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_1121"] = 11210] = "PN_1121";
  /**
   * 1122 - 30 Amp Current Sensor AC
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_1122_AC"] = 11221] = "PN_1122_AC";
  /**
   * 1122 - 30 Amp Current Sensor DC
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_1122_DC"] = 11222] = "PN_1122_DC";
  /**
   * 1124 - Precision Temperature Sensor
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_1124"] = 11240] = "PN_1124";
  /**
   * 1125 - Humidity Sensor
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_1125_HUMIDITY"] = 11251] = "PN_1125_HUMIDITY";
  /**
   * 1125 - Temperature Sensor
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_1125_TEMPERATURE"] = 11252] = "PN_1125_TEMPERATURE";
  /**
   * 1126 - Differential Air Pressure Sensor +- 25kPa
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_1126"] = 11260] = "PN_1126";
  /**
   * 1128 - MaxBotix EZ-1 Sonar Sensor
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_1128"] = 11280] = "PN_1128";
  /**
   * 1129 - Touch Sensor
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_1129"] = 11290] = "PN_1129";
  /**
   * 1131 - Thin Force Sensor
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_1131"] = 11310] = "PN_1131";
  /**
   * 1134 - Switchable Voltage Divider
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_1134"] = 11340] = "PN_1134";
  /**
   * 1136 - Differential Air Pressure Sensor +-2 kPa
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_1136"] = 11360] = "PN_1136";
  /**
   * 1137 - Differential Air Pressure Sensor +-7 kPa
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_1137"] = 11370] = "PN_1137";
  /**
   * 1138 - Differential Air Pressure Sensor 50 kPa
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_1138"] = 11380] = "PN_1138";
  /**
   * 1139 - Differential Air Pressure Sensor 100 kPa
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_1139"] = 11390] = "PN_1139";
  /**
   * 1140 - Absolute Air Pressure Sensor 20-400 kPa
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_1140"] = 11400] = "PN_1140";
  /**
   * 1141 - Absolute Air Pressure Sensor 15-115 kPa
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_1141"] = 11410] = "PN_1141";
  /**
   * 1146 - IR Reflective Sensor 1-4mm
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_1146"] = 11460] = "PN_1146";
  /**
   * 3120 - Compression Load Cell (0-4.5 kg)
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_3120"] = 31200] = "PN_3120";
  /**
   * 3121 - Compression Load Cell (0-11.3 kg)
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_3121"] = 31210] = "PN_3121";
  /**
   * 3122 - Compression Load Cell (0-22.7 kg)
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_3122"] = 31220] = "PN_3122";
  /**
   * 3123 - Compression Load Cell (0-45.3 kg)
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_3123"] = 31230] = "PN_3123";
  /**
   * 3130 - Relative Humidity Sensor
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_3130"] = 31300] = "PN_3130";
  /**
   * 3520 - Sharp Distance Sensor (4-30cm)
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_3520"] = 35200] = "PN_3520";
  /**
   * 3521 - Sharp Distance Sensor (10-80cm)
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_3521"] = 35210] = "PN_3521";
  /**
   * 3522 - Sharp Distance Sensor (20-150cm)
   * @public
   */

  VoltageRatioSensorType[VoltageRatioSensorType["PN_3522"] = 35220] = "PN_3522";
})(VoltageRatioSensorType || (VoltageRatioSensorType = {}));
/**
 * The forward voltage setting of the LED
 * @public
 */


var LEDForwardVoltage;

(function (LEDForwardVoltage) {
  /**
   * 1.7 V
   * @public
   */
  LEDForwardVoltage[LEDForwardVoltage["VOLTS_1_7"] = 1] = "VOLTS_1_7";
  /**
   * 2.75 V
   * @public
   */

  LEDForwardVoltage[LEDForwardVoltage["VOLTS_2_75"] = 2] = "VOLTS_2_75";
  /**
   * 3.2 V
   * @public
   */

  LEDForwardVoltage[LEDForwardVoltage["VOLTS_3_2"] = 3] = "VOLTS_3_2";
  /**
   * 3.9 V
   * @public
   */

  LEDForwardVoltage[LEDForwardVoltage["VOLTS_3_9"] = 4] = "VOLTS_3_9";
  /**
   * 4.0 V
   * @public
   */

  LEDForwardVoltage[LEDForwardVoltage["VOLTS_4_0"] = 5] = "VOLTS_4_0";
  /**
   * 4.8 V
   * @public
   */

  LEDForwardVoltage[LEDForwardVoltage["VOLTS_4_8"] = 6] = "VOLTS_4_8";
  /**
   * 5.0 V
   * @public
   */

  LEDForwardVoltage[LEDForwardVoltage["VOLTS_5_0"] = 7] = "VOLTS_5_0";
  /**
   * 5.6 V
   * @public
   */

  LEDForwardVoltage[LEDForwardVoltage["VOLTS_5_6"] = 8] = "VOLTS_5_6";
})(LEDForwardVoltage || (LEDForwardVoltage = {}));
/**
 * Voltage supplied to all attached servos
 * @public
 */


var RCServoVoltage;

(function (RCServoVoltage) {
  /**
   * Run all servos on 5V DC
   * @public
   */
  RCServoVoltage[RCServoVoltage["VOLTS_5_0"] = 1] = "VOLTS_5_0";
  /**
   * Run all servos on 6V DC
   * @public
   */

  RCServoVoltage[RCServoVoltage["VOLTS_6_0"] = 2] = "VOLTS_6_0";
  /**
   * Run all servos on 7.4V DC
   * @public
   */

  RCServoVoltage[RCServoVoltage["VOLTS_7_4"] = 3] = "VOLTS_7_4";
})(RCServoVoltage || (RCServoVoltage = {}));
/**
 * The selected output voltage range
 * @public
 */


var VoltageOutputRange;

(function (VoltageOutputRange) {
  /**
   * ±10V DC
   * @public
   */
  VoltageOutputRange[VoltageOutputRange["VOLTS_10"] = 1] = "VOLTS_10";
  /**
   * 0-5V DC
   * @public
   */

  VoltageOutputRange[VoltageOutputRange["VOLTS_5"] = 2] = "VOLTS_5";
})(VoltageOutputRange || (VoltageOutputRange = {}));
/**
 * Measurement range of the voltage input. Larger ranges have less resolution.
 * @public
 */


var VoltageRange;

(function (VoltageRange) {
  /**
   * Range ±10mV DC
   * @public
   */
  VoltageRange[VoltageRange["MILLIVOLTS_10"] = 1] = "MILLIVOLTS_10";
  /**
   * Range ±40mV DC
   * @public
   */

  VoltageRange[VoltageRange["MILLIVOLTS_40"] = 2] = "MILLIVOLTS_40";
  /**
   * Range ±200mV DC
   * @public
   */

  VoltageRange[VoltageRange["MILLIVOLTS_200"] = 3] = "MILLIVOLTS_200";
  /**
   * Range ±312.5mV DC
   * @public
   */

  VoltageRange[VoltageRange["MILLIVOLTS_312_5"] = 4] = "MILLIVOLTS_312_5";
  /**
   * Range ±400mV DC
   * @public
   */

  VoltageRange[VoltageRange["MILLIVOLTS_400"] = 5] = "MILLIVOLTS_400";
  /**
   * Range ±1000mV DC
   * @public
   */

  VoltageRange[VoltageRange["MILLIVOLTS_1000"] = 6] = "MILLIVOLTS_1000";
  /**
   * Range ±2V DC
   * @public
   */

  VoltageRange[VoltageRange["VOLTS_2"] = 7] = "VOLTS_2";
  /**
   * Range ±5V DC
   * @public
   */

  VoltageRange[VoltageRange["VOLTS_5"] = 8] = "VOLTS_5";
  /**
   * Range ±15V DC
   * @public
   */

  VoltageRange[VoltageRange["VOLTS_15"] = 9] = "VOLTS_15";
  /**
   * Range ±40V DC
   * @public
   */

  VoltageRange[VoltageRange["VOLTS_40"] = 10] = "VOLTS_40";
  /**
   * Auto-range mode changes based on the present voltage measurements.
   * @public
   */

  VoltageRange[VoltageRange["AUTO"] = 11] = "AUTO";
})(VoltageRange || (VoltageRange = {}));
/**
 * Type of sensor attached to the voltage input
 * @public
 */


var VoltageSensorType;

(function (VoltageSensorType) {
  /**
   * Default. Configures the channel to be a generic voltage sensor. Unit is volts.
   * @public
   */
  VoltageSensorType[VoltageSensorType["VOLTAGE"] = 0] = "VOLTAGE";
  /**
   * 1114 - Temperature Sensor
   * @public
   */

  VoltageSensorType[VoltageSensorType["PN_1114"] = 11140] = "PN_1114";
  /**
   * 1117 - Voltage Sensor
   * @public
   */

  VoltageSensorType[VoltageSensorType["PN_1117"] = 11170] = "PN_1117";
  /**
   * 1123 - Precision Voltage Sensor
   * @public
   */

  VoltageSensorType[VoltageSensorType["PN_1123"] = 11230] = "PN_1123";
  /**
   * 1127 - Precision Light Sensor
   * @public
   */

  VoltageSensorType[VoltageSensorType["PN_1127"] = 11270] = "PN_1127";
  /**
   * 1130 - pH Adapter
   * @public
   */

  VoltageSensorType[VoltageSensorType["PN_1130_PH"] = 11301] = "PN_1130_PH";
  /**
   * 1130 - ORP Adapter
   * @public
   */

  VoltageSensorType[VoltageSensorType["PN_1130_ORP"] = 11302] = "PN_1130_ORP";
  /**
   * 1132 - 4-20mA Adapter
   * @public
   */

  VoltageSensorType[VoltageSensorType["PN_1132"] = 11320] = "PN_1132";
  /**
   * 1133 - Sound Sensor
   * @public
   */

  VoltageSensorType[VoltageSensorType["PN_1133"] = 11330] = "PN_1133";
  /**
   * 1135 - Precision Voltage Sensor
   * @public
   */

  VoltageSensorType[VoltageSensorType["PN_1135"] = 11350] = "PN_1135";
  /**
   * 1142 - Light Sensor 1000 lux
   * @public
   */

  VoltageSensorType[VoltageSensorType["PN_1142"] = 11420] = "PN_1142";
  /**
   * 1143 - Light Sensor 70000 lux
   * @public
   */

  VoltageSensorType[VoltageSensorType["PN_1143"] = 11430] = "PN_1143";
  /**
   * 3500 - AC Current Sensor 10Amp
   * @public
   */

  VoltageSensorType[VoltageSensorType["PN_3500"] = 35000] = "PN_3500";
  /**
   * 3501 - AC Current Sensor 25Amp
   * @public
   */

  VoltageSensorType[VoltageSensorType["PN_3501"] = 35010] = "PN_3501";
  /**
   * 3502 - AC Current Sensor 50Amp
   * @public
   */

  VoltageSensorType[VoltageSensorType["PN_3502"] = 35020] = "PN_3502";
  /**
   * 3503 - AC Current Sensor 100Amp
   * @public
   */

  VoltageSensorType[VoltageSensorType["PN_3503"] = 35030] = "PN_3503";
  /**
   * 3507 - AC Voltage Sensor 0-250V (50Hz)
   * @public
   */

  VoltageSensorType[VoltageSensorType["PN_3507"] = 35070] = "PN_3507";
  /**
   * 3508 - AC Voltage Sensor 0-250V (60Hz)
   * @public
   */

  VoltageSensorType[VoltageSensorType["PN_3508"] = 35080] = "PN_3508";
  /**
   * 3509 - DC Voltage Sensor 0-200V
   * @public
   */

  VoltageSensorType[VoltageSensorType["PN_3509"] = 35090] = "PN_3509";
  /**
   * 3510 - DC Voltage Sensor 0-75V
   * @public
   */

  VoltageSensorType[VoltageSensorType["PN_3510"] = 35100] = "PN_3510";
  /**
   * 3511 - DC Current Sensor 0-10mA
   * @public
   */

  VoltageSensorType[VoltageSensorType["PN_3511"] = 35110] = "PN_3511";
  /**
   * 3512 - DC Current Sensor 0-100mA
   * @public
   */

  VoltageSensorType[VoltageSensorType["PN_3512"] = 35120] = "PN_3512";
  /**
   * 3513 - DC Current Sensor 0-1A
   * @public
   */

  VoltageSensorType[VoltageSensorType["PN_3513"] = 35130] = "PN_3513";
  /**
   * 3514 - AC Active Power Sensor 0-250V*0-30A (50Hz)
   * @public
   */

  VoltageSensorType[VoltageSensorType["PN_3514"] = 35140] = "PN_3514";
  /**
   * 3515 - AC Active Power Sensor 0-250V*0-30A (60Hz)
   * @public
   */

  VoltageSensorType[VoltageSensorType["PN_3515"] = 35150] = "PN_3515";
  /**
   * 3516 - AC Active Power Sensor 0-250V*0-5A (50Hz)
   * @public
   */

  VoltageSensorType[VoltageSensorType["PN_3516"] = 35160] = "PN_3516";
  /**
   * 3517 - AC Active Power Sensor 0-250V*0-5A (60Hz)
   * @public
   */

  VoltageSensorType[VoltageSensorType["PN_3517"] = 35170] = "PN_3517";
  /**
   * 3518 - AC Active Power Sensor 0-110V*0-5A (60Hz)
   * @public
   */

  VoltageSensorType[VoltageSensorType["PN_3518"] = 35180] = "PN_3518";
  /**
   * 3519 - AC Active Power Sensor 0-110V*0-15A (60Hz)
   * @public
   */

  VoltageSensorType[VoltageSensorType["PN_3519"] = 35190] = "PN_3519";
  /**
   * 3584 - 0-50A DC Current Transducer
   * @public
   */

  VoltageSensorType[VoltageSensorType["PN_3584"] = 35840] = "PN_3584";
  /**
   * 3585 - 0-100A DC Current Transducer
   * @public
   */

  VoltageSensorType[VoltageSensorType["PN_3585"] = 35850] = "PN_3585";
  /**
   * 3586 - 0-250A DC Current Transducer
   * @public
   */

  VoltageSensorType[VoltageSensorType["PN_3586"] = 35860] = "PN_3586";
  /**
   * 3587 - +-50A DC Current Transducer
   * @public
   */

  VoltageSensorType[VoltageSensorType["PN_3587"] = 35870] = "PN_3587";
  /**
   * 3588 - +-100A DC Current Transducer
   * @public
   */

  VoltageSensorType[VoltageSensorType["PN_3588"] = 35880] = "PN_3588";
  /**
   * 3589 - +-250A DC Current Transducer
   * @public
   */

  VoltageSensorType[VoltageSensorType["PN_3589"] = 35890] = "PN_3589";
  /**
   * MOT2002 - Motion Sensor Low Sensitivity
   * @public
   */

  VoltageSensorType[VoltageSensorType["PN_MOT2002_LOW"] = 20020] = "PN_MOT2002_LOW";
  /**
   * MOT2002 - Motion Sensor Medium Sensitivity
   * @public
   */

  VoltageSensorType[VoltageSensorType["PN_MOT2002_MED"] = 20021] = "PN_MOT2002_MED";
  /**
   * MOT2002 - Motion Sensor High Sensitivity
   * @public
   */

  VoltageSensorType[VoltageSensorType["PN_MOT2002_HIGH"] = 20022] = "PN_MOT2002_HIGH";
  /**
   * VCP4114 - +-25A DC Current Transducer
   * @public
   */

  VoltageSensorType[VoltageSensorType["PN_VCP4114"] = 41140] = "PN_VCP4114";
})(VoltageSensorType || (VoltageSensorType = {}));
/**
 * The protocol used to communicate with the tags
 * @public
 */


var RFIDProtocol;

(function (RFIDProtocol) {
  /**
   * EM4100 Series
   * @public
   */
  RFIDProtocol[RFIDProtocol["EM4100"] = 1] = "EM4100";
  /**
   * ISO11785 FDX B
   * @public
   */

  RFIDProtocol[RFIDProtocol["ISO11785_FDX_B"] = 2] = "ISO11785_FDX_B";
  /**
   * PhidgetTAG
   * @public
   */

  RFIDProtocol[RFIDProtocol["PHIDGET_TAG"] = 3] = "PHIDGET_TAG";
})(RFIDProtocol || (RFIDProtocol = {}));
/**
 * Controls the AHRS algorithm.
 * @public
 */


var SpatialAlgorithm;

(function (SpatialAlgorithm) {
  /**
   * No AHRS algorithm is used.
   * @public
   */
  SpatialAlgorithm[SpatialAlgorithm["NONE"] = 0] = "NONE";
  /**
   * AHRS algorithm, incorporating magnetometer data for yaw correction.
   * @public
   */

  SpatialAlgorithm[SpatialAlgorithm["AHRS"] = 1] = "AHRS";
  /**
   * IMU algorithm, using gyro and accelerometer, but not magnetometer.
   * @public
   */

  SpatialAlgorithm[SpatialAlgorithm["IMU"] = 2] = "IMU";
})(SpatialAlgorithm || (SpatialAlgorithm = {}));
/**
 * RTD sensor type
 * @public
 */


var RTDType;

(function (RTDType) {
  /**
   * Configures the RTD type as a PT100 with a 3850ppm curve.
   * @public
   */
  RTDType[RTDType["PT100_3850"] = 1] = "PT100_3850";
  /**
   * Configures the RTD type as a PT1000 with a 3850ppm curve.
   * @public
   */

  RTDType[RTDType["PT1000_3850"] = 2] = "PT1000_3850";
  /**
   * Configures the RTD type as a PT100 with a 3920ppm curve.
   * @public
   */

  RTDType[RTDType["PT100_3920"] = 3] = "PT100_3920";
  /**
   * Configures the RTD type as a PT1000 with a 3920ppm curve.
   * @public
   */

  RTDType[RTDType["PT1000_3920"] = 4] = "PT1000_3920";
})(RTDType || (RTDType = {}));
/**
 * The type of thermocouple being used
 * @public
 */


var ThermocoupleType;

(function (ThermocoupleType) {
  /**
   * Configures the thermocouple input as a J-Type thermocouple.
   * @public
   */
  ThermocoupleType[ThermocoupleType["J"] = 1] = "J";
  /**
   * Configures the thermocouple input as a K-Type thermocouple.
   * @public
   */

  ThermocoupleType[ThermocoupleType["K"] = 2] = "K";
  /**
   * Configures the thermocouple input as a E-Type thermocouple.
   * @public
   */

  ThermocoupleType[ThermocoupleType["E"] = 3] = "E";
  /**
   * Configures the thermocouple input as a T-Type thermocouple.
   * @public
   */

  ThermocoupleType[ThermocoupleType["T"] = 4] = "T";
})(ThermocoupleType || (ThermocoupleType = {}));
/**
 * Type of filter used on the frequency input
 * @public
 */


var FrequencyFilterType;

(function (FrequencyFilterType) {
  /**
   * Frequency is calculated from the number of times the signal transitions from a negative voltage to a positive voltage and back again.
   * @public
   */
  FrequencyFilterType[FrequencyFilterType["ZERO_CROSSING"] = 1] = "ZERO_CROSSING";
  /**
   * Frequency is calculated from the number of times the signal transitions from a logic false to a logic true and back again.
   * @public
   */

  FrequencyFilterType[FrequencyFilterType["LOGIC_LEVEL"] = 2] = "LOGIC_LEVEL";
})(FrequencyFilterType || (FrequencyFilterType = {}));
/**
 * Describes the encoding technique used for the code
 * @public
 */


var IRCodeEncoding;

(function (IRCodeEncoding) {
  /**
   * Unknown - the default value
   * @public
   */
  IRCodeEncoding[IRCodeEncoding["UNKNOWN"] = 1] = "UNKNOWN";
  /**
   * Space encoding, or Pulse Distance Modulation
   * @public
   */

  IRCodeEncoding[IRCodeEncoding["SPACE"] = 2] = "SPACE";
  /**
   * Pulse encoding, or Pulse Width Modulation
   * @public
   */

  IRCodeEncoding[IRCodeEncoding["PULSE"] = 3] = "PULSE";
  /**
   * Bi-Phase, or Manchester encoding
   * @public
   */

  IRCodeEncoding[IRCodeEncoding["BI_PHASE"] = 4] = "BI_PHASE";
  /**
   * RC5 - a type of Bi-Phase encoding
   * @public
   */

  IRCodeEncoding[IRCodeEncoding["RC5"] = 5] = "RC5";
  /**
   * RC6 - a type of Bi-Phase encoding
   * @public
   */

  IRCodeEncoding[IRCodeEncoding["RC6"] = 6] = "RC6";
})(IRCodeEncoding || (IRCodeEncoding = {}));
/**
 * The length type of the bitstream and gaps
 * @public
 */


var IRCodeLength;

(function (IRCodeLength) {
  /**
   * Unknown - the default value
   * @public
   */
  IRCodeLength[IRCodeLength["UNKNOWN"] = 1] = "UNKNOWN";
  /**
   * Constant - the bitstream and gap length is constant
   * @public
   */

  IRCodeLength[IRCodeLength["CONSTANT"] = 2] = "CONSTANT";
  /**
   * Variable - the bitstream has a variable length with a constant gap
   * @public
   */

  IRCodeLength[IRCodeLength["VARIABLE"] = 3] = "VARIABLE";
})(IRCodeLength || (IRCodeLength = {}));
/**
 * Method of motor control
 * @public
 */


var StepperControlMode;

(function (StepperControlMode) {
  /**
   * Control the motor by setting a target position.
   * @public
   */
  StepperControlMode[StepperControlMode["STEP"] = 0] = "STEP";
  /**
   * Control the motor by selecting a target velocity (sign indicates direction). The motor will rotate continuously in the chosen direction.
   * @public
   */

  StepperControlMode[StepperControlMode["RUN"] = 1] = "RUN";
})(StepperControlMode || (StepperControlMode = {}));
/**
 * The type of font being used
 * @public
 */


var LCDFont;

(function (LCDFont) {
  /**
   * User-defined font #1
   * @public
   */
  LCDFont[LCDFont["USER1"] = 1] = "USER1";
  /**
   * User-defined font #2
   * @public
   */

  LCDFont[LCDFont["USER2"] = 2] = "USER2";
  /**
   * 6px by 10px font
   * @public
   */

  LCDFont[LCDFont["DIMENSIONS_6X10"] = 3] = "DIMENSIONS_6X10";
  /**
   * 5px by 8px font
   * @public
   */

  LCDFont[LCDFont["DIMENSIONS_5X8"] = 4] = "DIMENSIONS_5X8";
  /**
   * 6px by 12px font
   * @public
   */

  LCDFont[LCDFont["DIMENSIONS_6X12"] = 5] = "DIMENSIONS_6X12";
})(LCDFont || (LCDFont = {}));
/**
 * Size of the attached LCD screen
 * @public
 */


var LCDScreenSize;

(function (LCDScreenSize) {
  /**
   * Screen size unknown
   * @public
   */
  LCDScreenSize[LCDScreenSize["NO_SCREEN"] = 1] = "NO_SCREEN";
  /**
   * One row, eight column text screen
   * @public
   */

  LCDScreenSize[LCDScreenSize["DIMENSIONS_1X8"] = 2] = "DIMENSIONS_1X8";
  /**
   * Two row, eight column text screen
   * @public
   */

  LCDScreenSize[LCDScreenSize["DIMENSIONS_2X8"] = 3] = "DIMENSIONS_2X8";
  /**
   * One row, 16 column text screen
   * @public
   */

  LCDScreenSize[LCDScreenSize["DIMENSIONS_1X16"] = 4] = "DIMENSIONS_1X16";
  /**
   * Two row, 16 column text screen
   * @public
   */

  LCDScreenSize[LCDScreenSize["DIMENSIONS_2X16"] = 5] = "DIMENSIONS_2X16";
  /**
   * Four row, 16 column text screen
   * @public
   */

  LCDScreenSize[LCDScreenSize["DIMENSIONS_4X16"] = 6] = "DIMENSIONS_4X16";
  /**
   * Two row, 20 column text screen
   * @public
   */

  LCDScreenSize[LCDScreenSize["DIMENSIONS_2X20"] = 7] = "DIMENSIONS_2X20";
  /**
   * Four row, 20 column text screen.
   * @public
   */

  LCDScreenSize[LCDScreenSize["DIMENSIONS_4X20"] = 8] = "DIMENSIONS_4X20";
  /**
   * Two row, 24 column text screen
   * @public
   */

  LCDScreenSize[LCDScreenSize["DIMENSIONS_2X24"] = 9] = "DIMENSIONS_2X24";
  /**
   * One row, 40 column text screen
   * @public
   */

  LCDScreenSize[LCDScreenSize["DIMENSIONS_1X40"] = 10] = "DIMENSIONS_1X40";
  /**
   * Two row, 40 column text screen
   * @public
   */

  LCDScreenSize[LCDScreenSize["DIMENSIONS_2X40"] = 11] = "DIMENSIONS_2X40";
  /**
   * Four row, 40 column text screen
   * @public
   */

  LCDScreenSize[LCDScreenSize["DIMENSIONS_4X40"] = 12] = "DIMENSIONS_4X40";
  /**
   * 64px by 128px graphic screen
   * @public
   */

  LCDScreenSize[LCDScreenSize["DIMENSIONS_64X128"] = 13] = "DIMENSIONS_64X128";
})(LCDScreenSize || (LCDScreenSize = {}));
/**
 * The on/off state of the pixel to be set
 * @public
 */


var LCDPixelState;

(function (LCDPixelState) {
  /**
   * Pixel off state
   * @public
   */
  LCDPixelState[LCDPixelState["OFF"] = 0] = "OFF";
  /**
   * Pixel on state
   * @public
   */

  LCDPixelState[LCDPixelState["ON"] = 1] = "ON";
  /**
   * Invert the pixel state
   * @public
   */

  LCDPixelState[LCDPixelState["INVERT"] = 2] = "INVERT";
})(LCDPixelState || (LCDPixelState = {}));
/**
 * The parity setting of the data adapter
 * @public
 */


var DataAdapterParity;

(function (DataAdapterParity) {
  /**
   * No Parity Bit
   * @public
   */
  DataAdapterParity[DataAdapterParity["NONE"] = 1] = "NONE";
  /**
   * Even Parity
   * @public
   */

  DataAdapterParity[DataAdapterParity["EVEN"] = 2] = "EVEN";
  /**
   * Odd Parity
   * @public
   */

  DataAdapterParity[DataAdapterParity["ODD"] = 3] = "ODD";
})(DataAdapterParity || (DataAdapterParity = {}));
/**
 * The number of stop bits used for communication
 * @public
 */


var DataAdapterStopBits;

(function (DataAdapterStopBits) {
  /**
   * One Stop Bit
   * @public
   */
  DataAdapterStopBits[DataAdapterStopBits["ONE"] = 1] = "ONE";
  /**
   * Two Stop Bits
   * @public
   */

  DataAdapterStopBits[DataAdapterStopBits["TWO"] = 2] = "TWO";
})(DataAdapterStopBits || (DataAdapterStopBits = {}));
/**
 * The mothod of handshaking used for communication
 * @public
 */


var DataAdapterHandshakeMode;

(function (DataAdapterHandshakeMode) {
  /**
   * RTS is never set, and CTS is ignored.
   * @public
   */
  DataAdapterHandshakeMode[DataAdapterHandshakeMode["NONE"] = 1] = "NONE";
  /**
   * RTS Pin requests to transmit data. CTS input confirms we can send data.
   * @public
   */

  DataAdapterHandshakeMode[DataAdapterHandshakeMode["REQUEST_TO_SEND"] = 2] = "REQUEST_TO_SEND";
  /**
   * RTS signals this device can receive data. CTS confirms we can send data.
   * @public
   */

  DataAdapterHandshakeMode[DataAdapterHandshakeMode["READY_TO_RECEIVE"] = 3] = "READY_TO_RECEIVE";
})(DataAdapterHandshakeMode || (DataAdapterHandshakeMode = {}));
/**
 * The communication protocol
 * @public
 */


var DataAdapterProtocol;

(function (DataAdapterProtocol) {
  /**
   * Basic half-duplex RS485. Always receiving until you send data.
   * @public
   */
  DataAdapterProtocol[DataAdapterProtocol["RS485"] = 1] = "RS485";
  /**
   * Uses full-duplex RS422 communication.
   * @public
   */

  DataAdapterProtocol[DataAdapterProtocol["RS422"] = 2] = "RS422";
  /**
   * Allows communication with DMX512-compatible devices, such as stage lighting
   * @public
   */

  DataAdapterProtocol[DataAdapterProtocol["DMX512"] = 3] = "DMX512";
  /**
   * Allows communication with MODBUS RTU compatible devices
   * @public
   */

  DataAdapterProtocol[DataAdapterProtocol["MODBUS_RTU"] = 4] = "MODBUS_RTU";
  /**
   * Allows communication with SPI compatible devices
   * @public
   */

  DataAdapterProtocol[DataAdapterProtocol["SPI"] = 5] = "SPI";
  /**
   * Allows communication with I2C compatible devices
   * @public
   */

  DataAdapterProtocol[DataAdapterProtocol["I2C"] = 6] = "I2C";
  /**
   * Allows communication with UART compatible devices
   * @public
   */

  DataAdapterProtocol[DataAdapterProtocol["UART"] = 7] = "UART";
  /**
   * Allows communication with RS232 compatible devices
   * @public
   */

  DataAdapterProtocol[DataAdapterProtocol["RS232"] = 8] = "RS232";
})(DataAdapterProtocol || (DataAdapterProtocol = {}));
/**
 * The SPI Mode
 * @public
 */


var DataAdapterSPIMode;

(function (DataAdapterSPIMode) {
  /**
   * CPOL = 0 CPHA = 0
   * @public
   */
  DataAdapterSPIMode[DataAdapterSPIMode["MODE_0"] = 1] = "MODE_0";
  /**
   * CPOL = 0 CPHA = 1
   * @public
   */

  DataAdapterSPIMode[DataAdapterSPIMode["MODE_1"] = 2] = "MODE_1";
  /**
   * CPOL = 1 CPHA = 0
   * @public
   */

  DataAdapterSPIMode[DataAdapterSPIMode["MODE_2"] = 3] = "MODE_2";
  /**
   * CPOL = 1 CPHA = 1
   * @public
   */

  DataAdapterSPIMode[DataAdapterSPIMode["MODE_3"] = 4] = "MODE_3";
})(DataAdapterSPIMode || (DataAdapterSPIMode = {}));
/**
 * The SPI Mode
 * @public
 */


var DataAdapterEndianness;

(function (DataAdapterEndianness) {
  /**
   * MSB First
   * @public
   */
  DataAdapterEndianness[DataAdapterEndianness["MSB_FIRST"] = 1] = "MSB_FIRST";
  /**
   * LSB First
   * @public
   */

  DataAdapterEndianness[DataAdapterEndianness["LSB_FIRST"] = 2] = "LSB_FIRST";
})(DataAdapterEndianness || (DataAdapterEndianness = {}));
/**
 * The IO Voltage
 * @public
 */


var DataAdapterIOVoltage;

(function (DataAdapterIOVoltage) {
  /**
   * Voltage supplied by external device
   * @public
   */
  DataAdapterIOVoltage[DataAdapterIOVoltage["EXTERNAL"] = 1] = "EXTERNAL";
  /**
   * 1.8V
   * @public
   */

  DataAdapterIOVoltage[DataAdapterIOVoltage["VOLTS_1_8"] = 2] = "VOLTS_1_8";
  /**
   * 2.5V
   * @public
   */

  DataAdapterIOVoltage[DataAdapterIOVoltage["VOLTS_2_5"] = 3] = "VOLTS_2_5";
  /**
   * 3.3V
   * @public
   */

  DataAdapterIOVoltage[DataAdapterIOVoltage["VOLTS_3_3"] = 4] = "VOLTS_3_3";
  /**
   * 5.0V
   * @public
   */

  DataAdapterIOVoltage[DataAdapterIOVoltage["VOLTS_5"] = 5] = "VOLTS_5";
})(DataAdapterIOVoltage || (DataAdapterIOVoltage = {}));
/**
 * The Type of Error on the Packet
 * @public
 */


var PacketErrorCode;

(function (PacketErrorCode) {
  /**
   * No error
   * @public
   */
  PacketErrorCode[PacketErrorCode["OK"] = 0] = "OK";
  /**
   * Unknown Error
   * @public
   */

  PacketErrorCode[PacketErrorCode["UNKNOWN"] = 1] = "UNKNOWN";
  /**
   * The response packet timed out
   * @public
   */

  PacketErrorCode[PacketErrorCode["TIMEOUT"] = 2] = "TIMEOUT";
  /**
   * Something about the received transmission didn't match the expected format.
   * @public
   */

  PacketErrorCode[PacketErrorCode["FORMAT"] = 3] = "FORMAT";
  /**
   * The input lines are invalid. This likely means a cable has been unplugged.
   * @public
   */

  PacketErrorCode[PacketErrorCode["INVALID"] = 4] = "INVALID";
  /**
   * Data is being received fater than it can be processed. Some has been lost.
   * @public
   */

  PacketErrorCode[PacketErrorCode["OVERRUN"] = 5] = "OVERRUN";
  /**
   * Something behind the scenes got out of sequence.
   * @public
   */

  PacketErrorCode[PacketErrorCode["CORRUPT"] = 6] = "CORRUPT";
})(PacketErrorCode || (PacketErrorCode = {}));
/**
 * The measurement range of the sound sensor
 * @public
 */


var SPLRange;

(function (SPLRange) {
  /**
   * Range 102dB
   * @public
   */
  SPLRange[SPLRange["DB_102"] = 1] = "DB_102";
  /**
   * Range 82dB
   * @public
   */

  SPLRange[SPLRange["DB_82"] = 2] = "DB_82";
})(SPLRange || (SPLRange = {}));
/**
 * The mode of the VINT port
 * @public
 */


var HubPortMode;

(function (HubPortMode) {
  /**
   * Communicate with a smart VINT device
   * @public
   */
  HubPortMode[HubPortMode["VINT"] = 0] = "VINT";
  /**
   * 5V Logic-level digital input
   * @public
   */

  HubPortMode[HubPortMode["DIGITAL_INPUT"] = 1] = "DIGITAL_INPUT";
  /**
   * 3.3V digital output
   * @public
   */

  HubPortMode[HubPortMode["DIGITAL_OUTPUT"] = 2] = "DIGITAL_OUTPUT";
  /**
   * 0-5V voltage input for non-ratiometric sensors
   * @public
   */

  HubPortMode[HubPortMode["VOLTAGE_INPUT"] = 3] = "VOLTAGE_INPUT";
  /**
   * 0-5V voltage input for ratiometric sensors
   * @public
   */

  HubPortMode[HubPortMode["VOLTAGE_RATIO_INPUT"] = 4] = "VOLTAGE_RATIO_INPUT";
})(HubPortMode || (HubPortMode = {}));

/** @internal */
const PhidgetErrorDescription = {
  0: 'Success',
  1: 'Not Permitted',
  2: 'No Such Entity',
  3: 'Timed Out',
  58: 'Keep Alive Failure',
  4: 'Op Interrupted',
  5: 'IO Issue',
  6: 'Memory Issue',
  7: 'Access (Permission) Issue',
  8: 'Address Issue',
  9: 'Resource Busy',
  10: 'Object Exists',
  11: 'Object is not a directory',
  12: 'Object is a directory',
  13: 'Invalid',
  14: 'Too many open files in system',
  15: 'Too many open files',
  16: 'Not enough space',
  17: 'File too Big',
  18: 'Read Only Filesystem',
  19: 'Read Only Object',
  20: 'Operation Not Supported',
  21: 'Invalid Argument',
  22: 'Try again',
  26: 'Not Empty',
  28: 'Unexpected Error',
  27: 'Duplicate',
  37: 'Bad Credential',
  45: 'Network Unavailable',
  35: 'Connection Refused',
  46: 'Connection Reset',
  48: 'No route to host',
  40: 'No Such Device',
  50: 'Wrong Device',
  41: 'Broken Pipe',
  44: 'Name Resolution Failure',
  51: 'Unknown or Invalid Value',
  52: 'Device not Attached',
  53: 'Invalid or Unexpected Packet',
  54: 'Argument List Too Long',
  55: 'Bad Version',
  56: 'Closed',
  57: 'Not Configured',
  31: 'End of File',
  59: 'Failsafe Triggered',
  60: 'Invalid Value - Too High',
  61: 'Invalid Value - Too Low',
  62: '',
  63: '',
  64: ''
};

/** @public */

class PhidgetError extends Error {
  constructor(code, message, innerException) {
    let msg = message || PhidgetErrorDescription[code];

    if (innerException != undefined) {
      let innerMsg;

      if (innerException instanceof Error) {
        innerMsg = innerException.message;
      } else if (typeof innerException === 'string') {
        innerMsg = innerException;
      } else {
        innerMsg = JSON.stringify(innerException);
      }

      if (innerMsg.length > 0) msg += ' - ' + innerMsg;
    }

    super(msg);
    if (innerException instanceof Error) this.innerException = innerException;
    if (Error.captureStackTrace) Error.captureStackTrace(this, PhidgetError);
    this.name = "PhidgetError";
    this.errorCode = code;
  }

  get stacks() {
    let _stacks = this.stack;
    if (this.innerException && this.innerException.stack) _stacks += '\n<- ' + this.innerException.stack;
    return _stacks;
  }

}

let loglevel = LogLevel.WARNING;
let logsEnabled = true;
/**
 * The Logging API controls logs sent to the console. By default, warnings and errors are printed.
 * Verbosity of logs can be changed, or logging can be disabled entirely.
 * @public
 */

class Log {
  static setLevel(level) {
    loglevel = level;
  }

  static getLevel() {
    return loglevel;
  }
  /**
   * Enables logging within the Phidget library. Logs are sent to the console.
   * @param level - The logging level
   */


  static enable(level) {
    if (level !== undefined) loglevel = level;
    logsEnabled = true;
  }

  static disable() {
    logsEnabled = false;
  }
  /**
   * Writes a message to the Phidget library log.
   * @param level - The logging level
   * @param message - The message
   */


  static log(level, message) {
    switch (level) {
      case LogLevel.CRITICAL:
        logcrit(message);
        break;

      case LogLevel.ERROR:
        logerr(message);
        break;

      case LogLevel.WARNING:
        logwarn(message);
        break;

      case LogLevel.INFO:
        loginfo(message);
        break;

      case LogLevel.DEBUG:
        logdebug(message);
        break;

      case LogLevel.VERBOSE:
        logverbose(message);
        break;
    }
  }

}
let prevTime = null;

function colouredText(txt, colour) {
  return txt;
}

function log(logger, lvl, msg, obj) {
  if (!logsEnabled) return;
  let msDiffTxt = '';

  {
    const curr = Number(new Date());
    const ms = curr - (prevTime || curr);
    prevTime = curr;
    msDiffTxt = colouredText(' +' + ms + 'ms');
  }

  const m = ('') + ('') + msg + msDiffTxt;
  if (obj) logger(m + ' -', obj);else logger(m);
}

function logcrit(msg, obj) {
  if (loglevel >= LogLevel.CRITICAL) log(console.error, ' <' + colouredText('CRIT') + '>', msg, obj);
}
function logerr(msg, obj) {
  if (loglevel >= LogLevel.ERROR) log(console.error, '<' + colouredText('ERROR') + '>', msg, obj);
}
function logwarn(msg, obj) {
  if (loglevel >= LogLevel.WARNING) log(console.warn, ' <' + colouredText('Warn') + '>', msg, obj);
}
function loginfo(msg, obj) {
  if (loglevel >= LogLevel.INFO) log(console.log, ' <' + 'Info' + '>', msg, obj);
}
function logdebug(msg, obj) {
  if (loglevel >= LogLevel.DEBUG) log(console.debug, '<' + colouredText('Debug') + '>', msg, obj);
}
function logverbose(msg, obj) {
  if (loglevel >= LogLevel.VERBOSE) log(console.debug, ' <' + colouredText('Verb') + '>', msg, obj);
}
function logEventException(err) {
  logwarn("Unhandled exception in event handler", err);
}

/** @internal */

class PhidgetLock {
  constructor() {
    this._locked = false;
    this.releaseEvents = [];
  }

  onRelease(listener) {
    this.releaseEvents.push(listener);
  }

  removeReleaseListener(listener) {
    const idx = this.releaseEvents.indexOf(listener);
    if (idx > -1) this.releaseEvents.splice(idx, 1);
  }

  emitRelease() {
    const listeners = this.releaseEvents.slice();
    const length = listeners.length;

    for (let i = 0; i < length; i++) listeners[i]();

    logverbose('LOCK Released!');
  }

  acquire() {
    logverbose('LOCK Aquiring..');
    return new promise(resolve => {
      if (!this._locked) {
        this._locked = true;
        return resolve();
      }

      const tryAcquire = () => {
        if (!this._locked) {
          this._locked = true;
          this.removeReleaseListener(tryAcquire);
          logverbose('LOCK Aquired!');
          return resolve();
        }
      };

      this.onRelease(tryAcquire);
    });
  }

  release() {
    this._locked = false;
    setTimeout(() => this.emitRelease());
  }

  get locked() {
    return this._locked;
  }

}

const C_LIBRARY_VERSION = "1.15";
/**
 * The base Phidget22 library version for this release - corresponds to the C library version
 * @public
 */

const LibraryVersion = "Phidget22 - Version " + C_LIBRARY_VERSION + " - Built June 3, 2023";
/**
 * The JavaScript library version
 * @public
 */

const JSLibraryVersion = "3.15.2 - June 3, 2023";
const Managers = [];
const Connections = [];
const UserPhidgets = [];
let Epoch;
function tm() {
  if (Epoch == undefined) Epoch = Date.now();
  return Date.now() - Epoch;
}
async function scanChannels(userphid) {
  for (const conn of Connections) {
    if (userphid._isLocal && conn._isRemote) continue;
    if (userphid._isRemote && conn._isLocal) continue;
    if (await conn._match(userphid)) return true;
  }

  return false;
}
async function scanUserPhidgets(ch) {
  for (const userphid of UserPhidgets) {
    if (await ch.tryMatchOpen(userphid)) return;
  }
}
let scanningActive = false;
let scanStopped;
let scanLock;
let scanTimeout;
async function startScanningUserPhidgets() {
  if (!scanLock) scanLock = new PhidgetLock();
  await scanLock.acquire();

  if (scanningActive) {
    scanLock.release();
    return;
  }

  const scan = () => {
    scanTimeout = undefined;

    const again = () => {
      if (scanningActive) {
        scanTimeout = setTimeout(scan, 1000);
      } else {
        if (scanStopped) {
          scanStopped();
          scanStopped = undefined;
        }
      }
    };

    promise.all(UserPhidgets.filter(userphid => !userphid._attaching && !userphid._isopen).map(userphid => {
      return scanChannels(userphid);
    })).then(() => {
      again();
    }).catch(err => {
      logerr("Error during User Phidgets scan", err);
      again();
    });
  };

  scanningActive = true;
  loginfo("Starting User Phidget scanning");
  scan();
  scanLock.release();
}
async function stopScanningUserPhidgets() {
  if (!scanLock) scanLock = new PhidgetLock();
  await scanLock.acquire();

  if (!scanningActive) {
    scanLock.release();
    return;
  }

  scanningActive = false;

  if (scanTimeout != undefined) {
    clearTimeout(scanTimeout);
  } else {
    const scanStopPromise = new promise(resolve => {
      scanStopped = resolve;
    });
    await scanStopPromise;
  }

  loginfo("User Phidget scanning Stopped");
  scanLock.release();
}
function managerDeviceAttach(dev) {
  for (const m of Managers) m._deviceAttach(dev);
}
function managerDeviceDetach(dev) {
  for (const m of Managers) m._deviceDetach(dev);
}
function managerChannelAttach(ch) {
  for (const m of Managers) m._channelAttach(ch);
}
function managerChannelDetach(ch) {
  for (const m of Managers) m._channelDetach(ch);
}

let _onConnectionRemoved = null;
let _onConnectionAdded = null;

function onConnectionRemoved(conn) {
  if (_onConnectionRemoved) _onConnectionRemoved(conn);
}

function onConnectionAdded(conn) {
  if (_onConnectionAdded) _onConnectionAdded(conn);
}

let ConnectionID = 0;
/** @public */

class PhidgetConnection {
  /** @internal */
  constructor(opts) {
    this.onError = null;
    if (opts != undefined && typeof opts !== 'object') throw new Error('Options argument must be an object');
    this._id = ConnectionID++;
    this.connected = false;
    this._channels = new Map();
    this._devices = new Map();
    this.name = '';

    if (opts != undefined) {
      if (opts.name != undefined && typeof opts.name === 'string') this.name = opts.name;
      if (opts.onError != undefined && typeof opts.onError === 'function') this.onError = opts.onError;
    }

    if (this.onError === undefined) {
      this.onError = function (code, msg) {
        logerr("Connection error: " + msg + ':0x' + code.toString(16));
      };
    }

    Connections.push(this);
    onConnectionAdded(this);
  }

  static setOnConnectionRemoved(func) {
    _onConnectionRemoved = func;
  }

  static setOnConnectionAdded(func) {
    _onConnectionAdded = func;
  }

  delete() {
    if (this.connected) throw new PhidgetError(ErrorCode.BUSY, 'close connection before deleting');
    onConnectionRemoved(this);
    if (Connections.includes(this)) Connections.splice(Connections.indexOf(this), 1);
  }

  getKey() {
    return this._id;
  }

  get key() {
    return this._id;
  }
  /** @internal */


  get _isLocal() {
    return this._type === 0;
  }
  /** @internal */


  get _isRemote() {
    return this._type === 1;
  }
  /** @internal */


  _getChannel(id) {
    const ch = this._channels.get(id);

    if (ch == undefined) throw new PhidgetError(ErrorCode.UNEXPECTED, 'invalid channel id:' + id);
    return ch;
  }
  /** @internal */


  _getDevice(id) {
    const dev = this._devices.get(id);

    if (dev == undefined) return null;
    return dev;
  }
  /** @internal */


  _detachAllDevices() {
    while (this._devices.size > 0) {
      var _context;

      const last = Array.from(values(_context = this._devices).call(_context))[this._devices.size - 1];

      try {
        this._deviceDetach(last);
      } catch (err) {
        logerr("Error while detaching all devices", err);
      }
    }
  }
  /** @internal */


  _deviceAttach(dev) {
    if (this._devices.has(dev.id)) throw new PhidgetError(ErrorCode.DUPLICATE, 'duplicate device:' + dev);
    (dev.isHubPort ? logverbose : loginfo)("Device Attach: " + dev);

    this._devices.set(dev.id, dev);

    managerDeviceAttach(dev);
  }
  /** @internal */


  _deviceDetach(dev) {
    if (!this._devices.has(dev.id)) throw new PhidgetError(ErrorCode.NO_SUCH_ENTITY, 'no such device:' + dev);

    for (const ch of this._channels.entries()) {
      if (ch[1].parent === dev) {
        logverbose("Channel Detach: " + ch[1]);
        managerChannelDetach(ch[1]);
        ch[1].detach();

        this._channels.delete(ch[0]);
      }
    }

    (dev.isHubPort ? logverbose : loginfo)("Device Detach: " + dev);
    managerDeviceDetach(dev);

    this._devices.delete(dev.id);
  }
  /** @internal */


  _channelAttach(ch) {
    if (this._channels.has(ch.id)) throw new PhidgetError(ErrorCode.DUPLICATE, 'duplicate channel:' + ch);
    logverbose("Channel Attach: " + ch);

    this._channels.set(ch.id, ch);

    managerChannelAttach(ch);
    scanUserPhidgets(ch).catch(err => {
      logerr("Error scanning user phidgets", err);
    });
  }
  /** @internal */


  async _match(userphid) {
    for (const ch of values(_context2 = this._channels).call(_context2)) {
      var _context2;

      if (await ch.tryMatchOpen(userphid)) return true;
    }

    return false;
  }

}

/** @internal */
class Request {
  constructor(dataOrLength, flgs, reqseq, repseq, type, stype) {
    if (typeof dataOrLength === 'number') {
      if (flgs === undefined || reqseq === undefined || repseq === undefined || type === undefined || stype === undefined) throw new Error("Invalid Input");
      this.len = dataOrLength;
      this.flgs = flgs;
      this.reqseq = reqseq;
      this.repseq = repseq;
      this.type = type;
      this.stype = stype;
      this.hdrlen = 16;
    } else {
      this.hdrlen = this.parse(dataOrLength);
    }
  }

  toString() {
    return '{flags:0x' + this.flgs.toString(16) + ' len:' + this.len + ' reqseq:' + this.reqseq + ' repseq:' + this.repseq + ' type:' + this.type + ' subtype:' + this.stype + '}';
  }

  parse(buf) {
    const magic = buf[3] << 24 | buf[2] << 16 | buf[1] << 8 | buf[0];
    this.len = buf[7] << 24 | buf[6] << 16 | buf[5] << 8 | buf[4];
    this.flgs = buf[9] << 8 | buf[8];
    this.reqseq = buf[11] << 8 | buf[10];
    this.repseq = buf[13] << 8 | buf[12];
    this.type = buf[14];
    this.stype = buf[15];
    if (magic != 1346914608) throw new Error("Bad Request Magic");
    return 16;
  }

  get buffer() {
    const array = new Uint8Array(16);
    array[3] = 1346914608 >> 24 & 0xff;
    array[2] = 1346914608 >> 16 & 0xff;
    array[1] = 1346914608 >> 8 & 0xff;
    array[0] = 1346914608 & 0xff;
    array[7] = this.len >> 24 & 0xff;
    array[6] = this.len >> 16 & 0xff;
    array[5] = this.len >> 8 & 0xff;
    array[4] = this.len & 0xff;
    array[9] = this.flgs >> 8 & 0xff;
    array[8] = this.flgs & 0xff;
    array[11] = this.reqseq >> 8 & 0xff;
    array[10] = this.reqseq & 0xff;
    array[13] = this.repseq >> 8 & 0xff;
    array[12] = this.repseq & 0xff;
    array[14] = this.type;
    array[15] = this.stype;
    return array;
  }

}

var anObject = anObject$b;
var regexpFlags = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

var uncurryThis$1 = functionUncurryThis;
var regExpFlags = regexpFlags;
var flags$3 = uncurryThis$1(regExpFlags);

var isPrototypeOf$2 = objectIsPrototypeOf;
var flags$2 = flags$3;
var RegExpPrototype = RegExp.prototype;
var flags_1 = function (it) {
  return (it === RegExpPrototype || isPrototypeOf$2(RegExpPrototype, it)) ? flags$2(it) : it.flags;
};

var parent$2 = flags_1;
var flags$1 = parent$2;

var flags = flags$1;

/** @internal */

const BPE_ISEVENT_FLAG = 0x01;
/** @internal */

class BridgePacket {
  constructor(conn, data) {
    if (conn != undefined && data != undefined) {
      this.version = data.v;
      this.source = data.s;
      this.flags = data.f;
      this.vpkt = data.p;
      this.ch = conn._getChannel(data.O);
      this.entryCount = data.c;
      this.entries = data.e;
      this.local = false;
    } else {
      this.version = 0;
      this.source = 2;
      this.flags = 0;
      this.entryCount = 0;
      this.entries = {};
      this.local = true;
    }
  }

  isEvent() {
    if (flags(this) & BPE_ISEVENT_FLAG) return true;
    return false;
  }

  entryType(type) {
    switch (type) {
      case 'c':
      case 'h':
      case 'uh':
      case 'd':
      case 'u':
      case 'l':
      case 'ul':
        return 1;

      case 'f':
      case 'g':
        return 2;

      case 's':
        return 3;

      case 'R':
      case 'I':
      case 'G':
      case 'U':
      case 'H':
        return 4;

      case 'J':
        return 5;

      default:
        return -1;
    }
  }

  validate(e) {
    switch (this.entryType(e.type)) {
      case 1:
      case 2:
        if (typeof e.value !== 'number') {
          const num = Number(e.value);
          if (Number.isNaN(num)) throw new TypeError('Expected number but got ' + typeof e.value);
          e.value = num;
        }

        return;

      case 3:
        if (typeof e.value == 'string') return;
        throw new TypeError('Expected string but got ' + typeof e.value);

      case 5:
        if (typeof e.value === 'object') return;
        throw new TypeError('Expected object but got ' + typeof e.value);

      case 4:
        if (Array.isArray(e.value)) return;
        throw new TypeError('Expected an Array but got ' + typeof e.value);

      default:
        throw new Error('Invalid entry type: ' + e.type);
    }
  }

  set(val) {
    this.validate(val);
    if (val.name in this.entries) throw new Error('value [' + val.name + '] already set');
    const e = {
      t: val.type,
      v: val.value
    };
    this.entries[val.name] = e;
    this.entryCount++;
  }

  remove(name) {
    const entry = {
      t: name,
      v: ""
    };
    if (!(entry.t in this.entries)) return;
    const filteredEntries = {};

    for (const e in this.entries) {
      if (e !== entry.t) {
        filteredEntries[e] = this.entries[e];
      }
    }

    this.entries = filteredEntries;
    this.entryCount--;
  }

  add(val) {
    val.name = this.entryCount.toString();
    this.set(val);
  }

  getJsonOut(ch) {
    if (this.vpkt == undefined) throw new Error('vpkt not set!');
    const bp = {
      v: this.version,
      s: this.source,
      f: flags(this),
      p: this.vpkt,
      I: ch.parent.id,
      X: ch.uniqueIndex,
      c: this.entryCount,
      e: this.entries
    };
    return bp;
  }

  async send(ch, vpkt) {
    let callBridgeInput = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    if (!ch || !ch.isopen) throw new PhidgetError(ErrorCode.NOT_ATTACHED);
    this.vpkt = vpkt;
    const response = await ch.send(this);
    if (callBridgeInput) ch.bridgeInput(this);
    return response;
  }

  deliver() {
    if (!this.ch) throw new PhidgetError(ErrorCode.UNEXPECTED, 'Bridge packet missing channel');
    if (this.ch.isopen === false) return;
    this.ch.bridgeInput(this);
  }

  sendToChannel(ch, vpkt) {
    this.vpkt = vpkt;
    ch.clearErrorEvent();
    ch.bridgeInput(this);
  }

  getNumber(name) {
    if (!(name in this.entries)) throw new Error("BP entry '".concat(name, "' does not exist."));
    const type = this.entryType(this.entries[name].t);
    if (type != 2 && type != 1) throw new Error("BP entry '".concat(name, "' is not a number."));
    if (typeof this.entries[name].v !== 'number') throw new Error("BP entry '".concat(name, "' has an unexpected value!"));
    return this.entries[name].v;
  }

  getArray(name) {
    if (!(name in this.entries)) throw new Error("BP entry '".concat(name, "' does not exist."));
    const type = this.entryType(this.entries[name].t);
    if (type != 4) throw new Error("BP entry '".concat(name, "' is not an array."));
    if (!Array.isArray(this.entries[name].v)) throw new Error("BP entry '".concat(name, "' has an unexpected value!"));
    return this.entries[name].v;
  }

  getObject(name) {
    if (!(name in this.entries)) throw new Error("BP entry '".concat(name, "' does not exist."));
    const type = this.entryType(this.entries[name].t);
    if (type != 5) throw new Error("BP entry '".concat(name, "' is not an object."));
    if (typeof this.entries[name].v !== 'object') throw new Error("BP entry '".concat(name, "' has an unexpected value!"));
    return this.entries[name].v;
  }

  getString(name) {
    if (!(name in this.entries)) throw new Error("BP entry '".concat(name, "' does not exist."));
    const type = this.entryType(this.entries[name].t);
    if (type != 3) throw new Error("BP entry '".concat(name, "' is not a string."));
    if (this.entries[name].v === null) throw new Error("BP entry '".concat(name, "' is null."));
    if (typeof this.entries[name].v !== 'string') throw new Error("BP entry '".concat(name, "' has an unexpected value!"));
    return this.entries[name].v;
  }

  getBoolean(name) {
    if (!(name in this.entries)) throw new Error("BP entry '".concat(name, "' does not exist."));
    const type = this.entryType(this.entries[name].t);
    if (type != 1) throw new Error("BP entry '".concat(name, "' is not a boolean."));
    if (typeof this.entries[name].v !== 'number') throw new Error("BP entry '".concat(name, "' has an unexpected value!"));
    if (this.entries[name].v === 0) return false;
    if (this.entries[name].v === 1) return true;
    if (this.entries[name].v === 2) return 2;
    throw new Error("BP entry '".concat(name, "' has an unexpected value!"));
  }

}

/** @internal */
const ChannelClassName = {
  0: 'PhidgetNone',
  1: 'PhidgetAccelerometer',
  35: 'PhidgetBLDCMotor',
  14: 'PhidgetCapacitiveTouch',
  2: 'PhidgetCurrentInput',
  38: 'PhidgetCurrentOutput',
  3: 'PhidgetDataAdapter',
  4: 'PhidgetDCMotor',
  36: 'PhidgetDictionary',
  5: 'PhidgetDigitalInput',
  6: 'PhidgetDigitalOutput',
  7: 'PhidgetDistanceSensor',
  8: 'PhidgetEncoder',
  32: 'PhidgetFirmwareUpgrade',
  9: 'PhidgetFrequencyCounter',
  33: 'PhidgetGeneric',
  10: 'PhidgetGPS',
  12: 'PhidgetGyroscope',
  13: 'PhidgetHub',
  15: 'PhidgetHumiditySensor',
  16: 'PhidgetIR',
  11: 'PhidgetLCD',
  17: 'PhidgetLightSensor',
  18: 'PhidgetMagnetometer',
  19: 'PhidgetMeshDongle',
  34: 'PhidgetMotorPositionController',
  39: 'PhidgetMotorVelocityController',
  37: 'PhidgetPHSensor',
  20: 'PhidgetPowerGuard',
  21: 'PhidgetPressureSensor',
  22: 'PhidgetRCServo',
  23: 'PhidgetResistanceInput',
  24: 'PhidgetRFID',
  25: 'PhidgetSoundSensor',
  26: 'PhidgetSpatial',
  27: 'PhidgetStepper',
  28: 'PhidgetTemperatureSensor',
  29: 'PhidgetVoltageInput',
  30: 'PhidgetVoltageOutput',
  31: 'PhidgetVoltageRatioInput'
};

/** @internal */
const DeviceClassName = {
  0: 'PhidgetNone',
  1: 'PhidgetAccelerometer',
  2: 'PhidgetAdvancedServo',
  3: 'PhidgetAnalog',
  4: 'PhidgetBridge',
  25: 'PhidgetDataAdapter',
  24: 'PhidgetDictionary',
  5: 'PhidgetEncoder',
  23: 'PhidgetFirmwareUpgrade',
  6: 'PhidgetFrequencyCounter',
  22: 'PhidgetGeneric',
  7: 'PhidgetGPS',
  8: 'PhidgetHub',
  9: 'PhidgetInterfaceKit',
  10: 'PhidgetIR',
  11: 'PhidgetLED',
  12: 'PhidgetMeshDongle',
  13: 'PhidgetMotorControl',
  14: 'PhidgetPHSensor',
  15: 'PhidgetRFID',
  16: 'PhidgetServo',
  17: 'PhidgetSpatial',
  18: 'PhidgetStepper',
  19: 'PhidgetTemperatureSensor',
  20: 'PhidgetTextLCD',
  21: 'PhidgetVINT'
};

/**
 * The core Phidget class deals with functionality common to all Phidgets, such as opening and closing them, or setting Attach, Detach and Event handlers.
 *
 * This class is also used to specify the associations between the Phidget software objects and their corresponding physical devices, and makes it possible to determine which Phidget is which in cases where it might otherwise be ambiguous.
 *
 * This class contains various functions such as **Release**, **Retain**, and **getParent** designed to be used with the **Phidget Manager**. These specialized functions may be safely ignored if your application does not require a **Manager**. You can check the **Manager API** for more information.
 * @public
 */
class PhidgetBase {
  static get ANY_SERIAL_NUMBER() {
    return -1;
  }

  static get ANY_HUB_PORT() {
    return -1;
  }

  static get ANY_CHANNEL() {
    return -1;
  }

  static get ANY_LABEL() {
    return null;
  }

  static get INFINITE_TIMEOUT() {
    return 0;
  }

  static get DEFAULT_TIMEOUT() {
    return 2500;
  }

  static get AUTO_HUBPORTSPEED() {
    return 0;
  }
  /**
   * Gets the attached status of channel. A Phidget is attached after it has been opened and the Phidget library finds and connects to the corresponding hardware device.
   *
   * *   Most API calls are only valid on attached Phidgets.
   * @throws {@link PhidgetError}
   */


  get attached() {
    return this.getAttached();
  }
  /**
   * get: Gets the channel index of the channel on the device.
   *
   * set: Specifies the channel index to be opened. The default channel is 0. Set to `ANY_CHANNEL` to open any channel on the specified device.
   *
   * If setting this property, it must be set before the channel is opened. The behaviour of setting this property while the channel is open is undefined.
   * @throws {@link PhidgetError}
   */


  get channel() {
    return this.getChannel();
  }

  set channel(channel) {
    this.setChannel(channel);
  }
  /**
   * Returns true if this represents a channel, false if this represents a device. Mostly for use alongside `getParent()` to distinguish channel handles from device handles.
   * @throws {@link PhidgetError}
   */


  get isChannel() {
    return this.getIsChannel();
  }
  /**
   * Gets the channel class of the channel.
   * @throws {@link PhidgetError}
   */


  get channelClass() {
    return this.getChannelClass();
  }
  /**
   * Gets the name of the channel class the channel belongs to.
   * @throws {@link PhidgetError}
   */


  get channelClassName() {
    return this.getChannelClassName();
  }
  /**
   * Gets the channel's name. This name serves as a description of the specific nature of the channel.
   * @throws {@link PhidgetError}
   */


  get channelName() {
    return this.getChannelName();
  }
  /**
   * Gets the subclass for this channel. Allows for identifying channels with specific characteristics without needing to know the exact device and channel index.
   * @throws {@link PhidgetError}
   */


  get channelSubclass() {
    return this.getChannelSubclass();
  }
  /**
   * Gets the connection associated with this Phidget.
   * @throws {@link PhidgetError}
   */


  get connection() {
    return this.getConnection();
  }
  /**
   * Gets the device class for the Phidget which this channel is a part of.
   * @throws {@link PhidgetError}
   */


  get deviceClass() {
    return this.getDeviceClass();
  }
  /**
   * Gets the name of the device class for the Phidget which this channel is a part of.
   * @throws {@link PhidgetError}
   */


  get deviceClassName() {
    return this.getDeviceClassName();
  }
  /**
   * Gets the string which will match the filename of the firmware upgrade file
   * @throws {@link PhidgetError}
   * @internal
   */


  get deviceFirmwareUpgradeString() {
    return this.getDeviceFirmwareUpgradeString();
  }
  /**
   * Gets the Device ID for the Phidget which this channel is a part of.
   * @throws {@link PhidgetError}
   */


  get deviceID() {
    return this.getDeviceID();
  }
  /**
   * get: Gets the label of the Phidget which this channel is a part of. A device label is a custom string used to more easily identify a Phidget. Labels are written to a Phidget using `writeDeviceLabel()`, or by right-clicking the device and setting a label in the Phidget Control Panel for Windows.
   *
   * set: Specifies the label of the Phidget to be opened. Leave un-set to open any label. A device label is a custom string used to more easily identify a Phidget. Labels are written to a Phidget using `writeDeviceLabel()`, or by right-clicking the device and setting a label in the Phidget Control Panel for Windows.
   *
   * If setting this property, it must be set before the channel is opened. The behaviour of setting this property while the channel is open is undefined.
   * @throws {@link PhidgetError}
   */


  get deviceLabel() {
    return this.getDeviceLabel();
  }

  set deviceLabel(deviceLabel) {
    this.setDeviceLabel(deviceLabel);
  }
  /**
   * Gets the name of the Phidget which this channel is a part of.
   * @throws {@link PhidgetError}
   */


  get deviceName() {
    return this.getDeviceName();
  }
  /**
   * get: Gets the serial number of the Phidget which this channel is a part of.
   * If the channel is part of a VINT device, this will be the serial number of the VINT Hub the device is attached to.
   *
   * set: Specifies the serial number of the Phidget to be opened. Leave un-set, or set to `ANY_SERIAL_NUMBER` to open any serial number.
   * If the channel is part of a VINT device, this will be the serial number of the VINT Hub the device is attached to.
   *
   * If setting this property, it must be set before the channel is opened. The behaviour of setting this property while the channel is open is undefined.
   * @throws {@link PhidgetError}
   */


  get deviceSerialNumber() {
    return this.getDeviceSerialNumber();
  }

  set deviceSerialNumber(deviceSerialNumber) {
    this.setDeviceSerialNumber(deviceSerialNumber);
  }
  /**
   * Gets the SKU (part number) of the Phidget which this channel is a part of.
   * @throws {@link PhidgetError}
   */


  get deviceSKU() {
    return this.getDeviceSKU();
  }
  /**
   * Gets the firmware version of the Phidget which this channel is a part of.
   * @throws {@link PhidgetError}
   */


  get deviceVersion() {
    return this.getDeviceVersion();
  }
  /**
   * Gets the vint id for the Phidget which this channel is a part of.
   * @throws {@link PhidgetError}
   * @internal
   */


  get deviceVINTID() {
    return this.getDeviceVINTID();
  }
  /**
   * Gets the hub that this channel is attached to.
   * @throws {@link PhidgetError}
   */


  get hub() {
    return this.getHub();
  }
  /**
   * get: Gets the hub port index of the VINT Hub port that the channel is attached to.
   *
   * set: Specifies the hub port index of the VINT Hub port to open this channel on. Leave un-set, or set to `ANY_HUB_PORT` to open the channel on any VINT Hub port
   *
   * If setting this property, it must be set before the channel is opened. The behaviour of setting this property while the channel is open is undefined.
   * @throws {@link PhidgetError}
   */


  get hubPort() {
    return this.getHubPort();
  }

  set hubPort(hubPort) {
    this.setHubPort(hubPort);
  }
  /**
   * Gets the number of VINT ports present on the VINT Hub that the channel is attached to.
   * @throws {@link PhidgetError}
   */


  get hubPortCount() {
    return this.getHubPortCount();
  }
  /**
   * get: Gets whether this channel is a VINT Hub port channel, or part of a VINT device attached to a hub port.
   *
   * set: Specifies whether this channel should be opened on a VINT Hub port directly, or on a VINT device attached to a hub port.
   *
   * If setting this property, it must be set before the channel is opened. The behaviour of setting this property while the channel is open is undefined.
   * @throws {@link PhidgetError}
   */


  get isHubPortDevice() {
    return this.getIsHubPortDevice();
  }

  set isHubPortDevice(isHubPortDevice) {
    this.setIsHubPortDevice(isHubPortDevice);
  }
  /**
   * Configures the communication speed for this VINT device. Both the `hubPortSupportsSetSpeed` and `VINTDeviceSupportsSetSpeed` must be true in order to set the hub port speed.Available speeds are: 100000, 160000, 250000, 400000, 500000, 800000 and 1000000. Setting any other speed will select the nearest lower supported speed. The upper speed is bound by the lesser of `maxHubPortSpeed` and `maxVINTDeviceSpeed`. Set the speed to `AUTO_HUBPORTSPEED` to enable Auto Set Speed on Hubs that support it (enabled by default).
   * @throws {@link PhidgetError}
   */


  get hubPortSpeed() {
    return this.getHubPortSpeed();
  }
  /**
   * The max communication speed of a high-speed capable VINT Port.
   * @throws {@link PhidgetError}
   */


  get maxHubPortSpeed() {
    return this.getMaxHubPortSpeed();
  }
  /**
   * Indicates that the communication speed of this VINT port can be set automatically.
   * @throws {@link PhidgetError}
   */


  get hubPortSupportsAutoSetSpeed() {
    return this.getHubPortSupportsAutoSetSpeed();
  }
  /**
   * Indicates that the communication speed of this VINT port can be set.
   * @throws {@link PhidgetError}
   */


  get hubPortSupportsSetSpeed() {
    return this.getHubPortSupportsSetSpeed();
  }
  /**
   * Gets a key which identifies this device or channel uniquely. This can be useful for correlating attach/detach events from the **Manager**.
   * @throws {@link PhidgetError}
   */


  get key() {
    return this.getKey();
  }
  /**
   * get: Returns true when this channel is attached directly on the local machine, or false otherwise.
   *
   * set: Set to True if the channel is to be opened locally, and not over a network. If both this and `isRemote` are set to False (the default), the channel will be opened either locally or remotely, on whichever matching channel is found first.
   *
   * If setting this property, it must be set before the channel is opened. The behaviour of setting this property while the channel is open is undefined.
   * @throws {@link PhidgetError}
   */


  get isLocal() {
    return this.getIsLocal();
  }

  set isLocal(isLocal) {
    this.setIsLocal(isLocal);
  }
  /**
   * Returns true if `open()` has been called on this channel.
   * @throws {@link PhidgetError}
   */


  get isOpen() {
    return this.getIsOpen();
  }
  /**
   * Gets the handle of the parent device of the given Phidget handle.
   *
   * For example, this would refer to the device the channel is a part of, or the Hub that a device is plugged into.
   *
   * This is useful when used alongside a **Phidget Manager** to create device trees like the one in the Phidget Control Panel.
   *
   * *   This can be used to travel up the device tree and get device information at each step.
   * *   The root device will return a null handle
   * *   Parent handles always refer to devices. See `getIsChannel()`
   * @throws {@link PhidgetError}
   */


  get parent() {
    return this.getParent();
  }
  /**
   * get: Returns true when this channel is attached via a Phidget network server, or false otherwise.
   *
   * set:
   *
   * Set to True if the channel is to be opened remotely, rather than locally. If both this and `isLocal` are set to False (the default), the channel will be opened either locally or remotely, on whichever matching channel is found first.
   *
   * If setting this property, it must be set before the channel is opened. The behaviour of setting this property while the channel is open is undefined.
   * @throws {@link PhidgetError}
   */


  get isRemote() {
    return this.getIsRemote();
  }

  set isRemote(isRemote) {
    this.setIsRemote(isRemote);
  }
  /**
   * The max communication speed of a high-speed capable VINT Device.
   * @throws {@link PhidgetError}
   */


  get maxVINTDeviceSpeed() {
    return this.getMaxVINTDeviceSpeed();
  }
  /**
   * Indicates that the communication speed of this VINT device can be set automatically.
   * @throws {@link PhidgetError}
   */


  get VINTDeviceSupportsAutoSetSpeed() {
    return this.getVINTDeviceSupportsAutoSetSpeed();
  }
  /**
   * Indicates that the communication speed of this VINT device can be set.
   * @throws {@link PhidgetError}
   */


  get VINTDeviceSupportsSetSpeed() {
    return this.getVINTDeviceSupportsSetSpeed();
  }

}

/** @public */

class Phidget extends PhidgetBase {
  /** @internal */
  constructor(chOrDev) {
    super();
    this.onAttach = null;
    this.onDetach = null;
    this.onError = null;
    this.onPropertyChange = null;

    if (chOrDev !== undefined) {
      this._fromManager = true;
      this._isattached = true;
    } else {
      this._fromManager = false;
      this._isattached = false;
    }
  }
  /**
   * Gets the version of the Phidget library being used by the program in human readable form.
   * @returns The Phidget library version.
   * @throws {@link PhidgetError}
  */


  static get libraryVersion() {
    return this.getLibraryVersion();
  }
  /**
   * Gets the version of the Phidget library being used by the program in human readable form.
   * @returns The Phidget library version.
   * @throws {@link PhidgetError}
  */


  static getLibraryVersion() {
    return LibraryVersion;
  }

}
/** @public */


class PhidgetChannel extends Phidget {
  /** @internal */
  constructor(ch) {
    super(ch);
    this._attaching = false;
    this._useropen = false;
    this._isopen = false;
    this._detaching = false;
    this._isHubPort = false;
    this._channel = Phidget.ANY_CHANNEL;
    this._deviceLabel = Phidget.ANY_LABEL;
    this._serialNumber = Phidget.ANY_SERIAL_NUMBER;
    this._hubPort = Phidget.ANY_HUB_PORT;
    this._isLocal = false;
    this._isRemote = false;
    this._ch = ch;
  }
  /** @internal */


  _cancelOpenTimeout() {
    if (this._openTimeoutTimer != undefined) {
      clearTimeout(this._openTimeoutTimer);
      delete this._openTimeoutTimer;
    }

    delete this._openTimeout;
    delete this._openTime;
  }
  /** @internal */


  async _wasOpened(ch) {
    this._ch = ch;
    this._isopen = true;
    this._isattached = true;

    this._cancelOpenTimeout();

    if (this.onAttach) {
      try {
        await this.onAttach(this);
      } catch (err) {
        logEventException(err);
      }
    }

    if (this._resolveOpen) this._resolveOpen();
  }
  /** @internal */


  async _close() {
    let fromDetach = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    this._cancelOpenTimeout();

    if (fromDetach) {
      this._useropen = true;
    } else {
      if (UserPhidgets.includes(this)) UserPhidgets.splice(UserPhidgets.indexOf(this), 1);
      if (UserPhidgets.length === 0) await stopScanningUserPhidgets();
    }

    if (this._isopen) {
      try {
        if (this._ch) await this._ch.close();
      } catch (err) {
        logwarn("Error while closing channel", err);
      }

      this._detaching = true;
      this._isattached = false;

      if (this.onDetach) {
        try {
          this.onDetach(this);
        } catch (err) {
          logEventException(err);
        }
      }

      this._detaching = false;
      this._isopen = false;
      delete this._ch;
    } else {
      if (this._rejectOpen != undefined) this._rejectOpen(new PhidgetError(ErrorCode.CLOSED, "Closed while waiting for open"));
    }
  }
  /** @internal */


  _FIREPropertyChange(prop, bp) {
    if (this.onPropertyChange && this._isAttachedDone && (bp === undefined || bp.local !== true)) {
      try {
        this.onPropertyChange(prop);
      } catch (err) {
        logEventException(err);
      }
    }
  }
  /** @internal */


  _handleSetStatus(bp) {
    for (const e in bp.entries) {
      if (e === '_class_version_') continue;
      if (e === 'dataIntervalDbl') continue;

      if (!(e in this.data)) {
        loginfo("Unknown property: " + e + " in setstatus packet. Probably server is newer than client.");
        continue;
      }

      this.data[e] = bp.entries[e].v;
    }

    if (bp.entries.dataIntervalDbl !== undefined) this.data.dataInterval = bp.entries.dataIntervalDbl.v;
    if (this.data.minDataInterval != undefined && bp.entries.maxDataRate === undefined) this.data.maxDataRate = 1000.0 / this.data.minDataInterval;
    if (this.data.maxDataInterval != undefined && bp.entries.minDataRate === undefined) this.data.minDataRate = 1000.0 / this.data.maxDataInterval;
  }
  /** @internal */


  _assertAttached() {
    if (!this._ch || !this._isattached && !this._detaching) throw new PhidgetError(ErrorCode.NOT_ATTACHED);
  }
  /** @internal */


  _assertOpen() {
    if (!this._ch || !this._isopen || !this._isattached && !this._detaching) throw new PhidgetError(ErrorCode.NOT_ATTACHED);
  }
  /** @internal */


  get _isAttachedDone() {
    if (this._isattached && !this._attaching) return true;
    return false;
  }
  /** @internal */


  get _isAttachedOrDetaching() {
    if (this._isattached || this._detaching) return true;
    return false;
  }

  toString() {
    if (this._ch) return this._ch.toString();
    return this.constructor.name;
  }

  getConnection() {
    if (this._ch) return this._ch.conn;
    return null;
  }

  getKey() {
    this._assertAttached();

    return 'ch' + this._ch.id + "_" + this._ch.conn._id;
  }

  async open() {
    let timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    if (this._useropen) return;
    this._useropen = true;
    this._openTime = tm();
    if (!isNaN(timeout) && timeout > 0) this._openTimeout = timeout;else delete this._openTimeout;
    UserPhidgets.push(this);

    if (this._fromManager === true) {
      this.setChannel(this.getChannel());
      this.setHubPort(this.getHubPort());
      this.setDeviceSerialNumber(this.getDeviceSerialNumber());
      this.setIsHubPortDevice(this.getIsHubPortDevice());
      this.setIsLocal(this.getIsLocal());
      this.setIsRemote(this.getIsRemote());
      this._fromManager = false;
      this._isattached = false;
      delete this._ch;
    }

    const openPromise = new promise((resolve, reject) => {
      this._resolveOpen = resolve;
      this._rejectOpen = reject;
    });

    try {
      await scanChannels(this);
    } catch (err) {
      logerr("Problem during open scan", err);
    }

    await startScanningUserPhidgets();

    if (this._openTimeout) {
      this._openTimeoutTimer = setTimeout(() => {
        delete this._openTimeoutTimer;
        const reject = this._rejectOpen;
        delete this._rejectOpen;
        this.close().then(() => {
          if (reject) reject(new PhidgetError(ErrorCode.TIMEOUT, "Open timed out"));
        }).catch(err => {
          logwarn("Error calling close after open timeout", err);
          if (reject) reject(new PhidgetError(ErrorCode.TIMEOUT, "Open timed out"));
        });
      }, this._openTimeout);
    }

    return openPromise;
  }

  async close() {
    if (this._useropen) {
      logdebug("closing phidget");
      this._useropen = false;
      await this._close();
    }
  }

  getAttached() {
    return this._isattached;
  }

  getIsOpen() {
    return this._useropen;
  }

  getChannel() {
    if (!this._isattached && !this._detaching) return this._channel;
    return this._ch.index;
  }

  setChannel(ch) {
    this._channel = ch;
  }

  getChannelClass() {
    return this._class;
  }

  getChannelClassName() {
    return ChannelClassName[this._class];
  }

  getChannelName() {
    this._assertAttached();

    return this._ch.name;
  }

  getChannelSubclass() {
    this._assertAttached();

    return this._ch.subclass;
  }

  getDeviceClass() {
    this._assertAttached();

    return this._ch.parent.class;
  }

  getDeviceClassName() {
    this._assertAttached();

    return DeviceClassName[this._ch.parent.class];
  }

  getDeviceID() {
    this._assertAttached();

    return this._ch.parent.deviceID;
  }

  getDeviceLabel() {
    if (!this._isattached && !this._detaching) return this._deviceLabel ? this._deviceLabel : '';
    return this._ch.parent.label;
  }

  setDeviceLabel(label) {
    this._deviceLabel = label;
  }

  getDeviceName() {
    this._assertAttached();

    return this._ch.parent.name;
  }

  getDeviceSerialNumber() {
    if (!this._isattached && !this._detaching) return this._serialNumber;
    return this._ch.parent.serialNumber;
  }

  setDeviceSerialNumber(sn) {
    if (!isNaN(sn)) this._serialNumber = sn;
  }

  getDeviceSKU() {
    this._assertAttached();

    return this._ch.parent.sku;
  }

  getDeviceVersion() {
    this._assertAttached();

    return this._ch.parent.version;
  }

  getHub() {
    this._assertAttached();

    let hub = this._ch.parent;

    while (hub != undefined && hub.class !== DeviceClass.HUB) hub = hub.parent;

    if (hub == undefined) throw new PhidgetError(ErrorCode.WRONG_DEVICE, "Hub not found");
    return new PhidgetDevice(hub);
  }

  getHubPort() {
    if (!this._isattached && !this._detaching) return this._hubPort;
    return this._ch.parent.hubPort;
  }

  setHubPort(hubPort) {
    if (!isNaN(hubPort)) this._hubPort = hubPort;
  }

  getHubPortSpeed() {
    this._assertAttached();

    if (this._ch.parent.class !== DeviceClass.VINT) throw new PhidgetError(ErrorCode.WRONG_DEVICE);
    if (this._ch.parent.vintDeviceProps.commSpeed == undefined || this._ch.parent.vintDeviceProps.commSpeed == 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this._ch.parent.vintDeviceProps.commSpeed;
  }

  async setHubPortSpeed(hubPortSpeed) {
    this._assertAttached();

    if (this._ch.parent.class !== DeviceClass.VINT) throw new PhidgetError(ErrorCode.WRONG_DEVICE);
    const bp = new BridgePacket();
    bp.set({
      name: '0',
      type: 'u',
      value: hubPortSpeed
    });
    await bp.send(this._ch, 173);
  }

  getIsChannel() {
    return true;
  }

  getIsHubPortDevice() {
    if (!this._isattached && !this._detaching) return this._isHubPort;
    return this._ch.parent.isHubPort;
  }

  setIsHubPortDevice(isHubPort) {
    this._isHubPort = isHubPort;
  }

  getIsLocal() {
    if (!this._isattached && !this._detaching) return this._isLocal;
    return this._ch.parent.conn._isLocal;
  }

  setIsLocal(isLocal) {
    this._isLocal = isLocal;
  }

  getIsRemote() {
    if (!this._isattached && !this._detaching) return this._isRemote;
    return this._ch.parent.conn._isRemote;
  }

  setIsRemote(isRemote) {
    this._isRemote = isRemote;
  }

  getParent() {
    this._assertAttached();

    return new PhidgetDevice(this._ch.parent);
  }

  getDeviceFirmwareUpgradeString() {
    this._assertAttached();

    return this._ch.parent.fwstr;
  }

  async writeDeviceLabel(deviceLabel) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "s",
      value: deviceLabel
    });
    await bp.send(this._ch, 140);
  }

  getDeviceChannelCount(cls) {
    this._assertAttached();

    let count = 0;

    for (const ch of this._ch.parent.devDef.ch) {
      if (cls != undefined && ch.c == undefined) throw new PhidgetError(ErrorCode.UNSUPPORTED);
      if (cls == undefined || ch.c === cls) count++;
    }

    return count;
  }

  getDeviceVINTID() {
    this._assertAttached();

    if (this.deviceClass !== DeviceClass.VINT) throw new PhidgetError(ErrorCode.WRONG_DEVICE);
    return this._ch.parent.vintID;
  }

  getHubPortCount() {
    this._assertAttached();

    if (this.deviceClass !== DeviceClass.VINT && this.deviceClass !== DeviceClass.HUB) throw new PhidgetError(ErrorCode.WRONG_DEVICE);
    return this.hub._device.hubPortProps.length;
  }

  getHubPortSupportsSetSpeed() {
    this._assertAttached();

    if (this.deviceClass !== DeviceClass.VINT) throw new PhidgetError(ErrorCode.WRONG_DEVICE);
    return this.hub._device.hubPortProps[this.hubPort].portSuppSetSpeed;
  }

  getHubPortSupportsAutoSetSpeed() {
    this._assertAttached();

    if (this.deviceClass !== DeviceClass.VINT) throw new PhidgetError(ErrorCode.WRONG_DEVICE);
    return this.hub._device.hubPortProps[this.hubPort].portSuppAutoSetSpeed;
  }

  getMaxHubPortSpeed() {
    this._assertAttached();

    if (this.deviceClass !== DeviceClass.VINT) throw new PhidgetError(ErrorCode.WRONG_DEVICE);
    if (this.hub._device.hubPortProps[this.hubPort].portMaxSpeed === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.hub._device.hubPortProps[this.hubPort].portMaxSpeed;
  }

  getVINTDeviceSupportsSetSpeed() {
    this._assertAttached();

    if (this.deviceClass !== DeviceClass.VINT) throw new PhidgetError(ErrorCode.WRONG_DEVICE);
    return this._ch.parent.vintDeviceProps.suppSetSpeed;
  }

  getVINTDeviceSupportsAutoSetSpeed() {
    this._assertAttached();

    if (this.deviceClass !== DeviceClass.VINT) throw new PhidgetError(ErrorCode.WRONG_DEVICE);
    return this._ch.parent.vintDeviceProps.suppAutoSetSpeed;
  }

  getMaxVINTDeviceSpeed() {
    this._assertAttached();

    if (this.deviceClass !== DeviceClass.VINT) throw new PhidgetError(ErrorCode.WRONG_DEVICE);
    if (this._ch.parent.vintDeviceProps.maxSpeed === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this._ch.parent.vintDeviceProps.maxSpeed;
  }

  async reboot() {
    this._assertOpen();

    const bp = new BridgePacket();
    await bp.send(this._ch, 139, false);
  }

  async rebootFirmwareUpgrade(upgradeTimeout) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: upgradeTimeout
    });
    await bp.send(this._ch, 138, false);
  }

}
/** @public */


class PhidgetDevice extends Phidget {
  /** @internal */
  constructor(dev) {
    super(dev);
    this._device = dev;
    this.name = "PhidgetDevice";
  }

  toString() {
    return this._device.toString();
  }

  getConnection() {
    return this._device.conn;
  }

  getKey() {
    return 'dev' + this._device.id + "_" + this._device.conn._id;
  }

  getAttached() {
    return true;
  }

  getIsOpen() {
    return false;
  }

  getDeviceClass() {
    return this._device.class;
  }

  getDeviceClassName() {
    return DeviceClassName[this._device.class];
  }

  getDeviceID() {
    return this._device.deviceID;
  }

  getDeviceLabel() {
    return this._device.label;
  }

  getDeviceName() {
    return this._device.name;
  }

  getDeviceSerialNumber() {
    return this._device.serialNumber;
  }

  getDeviceSKU() {
    return this._device.sku;
  }

  getDeviceVersion() {
    return this._device.version;
  }

  getHub() {
    let hub = this._device;

    while (hub != undefined && hub.class !== DeviceClass.HUB) hub = hub.parent;

    if (hub == undefined) throw new PhidgetError(ErrorCode.WRONG_DEVICE, "Hub not found");
    return new PhidgetDevice(hub);
  }

  getHubPort() {
    return this._device.hubPort;
  }

  getHubPortSpeed() {
    if (this._device.class !== DeviceClass.VINT) throw new PhidgetError(ErrorCode.WRONG_DEVICE);
    if (this._device.vintDeviceProps.commSpeed == undefined || this._device.vintDeviceProps.commSpeed == 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this._device.vintDeviceProps.commSpeed;
  }

  getIsChannel() {
    return false;
  }

  getIsHubPortDevice() {
    return this._device.isHubPort;
  }

  getIsLocal() {
    return this._device.conn._isLocal;
  }

  getIsRemote() {
    return this._device.conn._isRemote;
  }

  getParent() {
    const parent = this._device.parent;
    if (!parent) return null;
    return new PhidgetDevice(parent);
  }

  getDeviceFirmwareUpgradeString() {
    return this._device.fwstr;
  }

  getDeviceChannelCount(cls) {
    let count = 0;

    for (const ch of this._device.devDef.ch) {
      if (cls != undefined && ch.c == undefined) throw new PhidgetError(ErrorCode.UNSUPPORTED);
      if (cls == undefined || ch.c === cls) count++;
    }

    return count;
  }

  getDeviceVINTID() {
    if (this.deviceClass !== DeviceClass.VINT) throw new PhidgetError(ErrorCode.WRONG_DEVICE);
    return this._device.vintID;
  }

  getHubPortCount() {
    if (this.deviceClass !== DeviceClass.VINT && this.deviceClass !== DeviceClass.HUB) throw new PhidgetError(ErrorCode.WRONG_DEVICE);
    return this.hub._device.hubPortProps.length;
  }

  getHubPortSupportsSetSpeed() {
    if (this.deviceClass !== DeviceClass.VINT) throw new PhidgetError(ErrorCode.WRONG_DEVICE);
    return this.hub._device.hubPortProps[this.hubPort].portSuppSetSpeed;
  }

  getHubPortSupportsAutoSetSpeed() {
    if (this.deviceClass !== DeviceClass.VINT) throw new PhidgetError(ErrorCode.WRONG_DEVICE);
    return this.hub._device.hubPortProps[this.hubPort].portSuppAutoSetSpeed;
  }

  getMaxHubPortSpeed() {
    if (this.deviceClass !== DeviceClass.VINT) throw new PhidgetError(ErrorCode.WRONG_DEVICE);
    if (this.hub._device.hubPortProps[this.hubPort].portMaxSpeed === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.hub._device.hubPortProps[this.hubPort].portMaxSpeed;
  }

  getVINTDeviceSupportsSetSpeed() {
    if (this.deviceClass !== DeviceClass.VINT) throw new PhidgetError(ErrorCode.WRONG_DEVICE);
    return this._device.vintDeviceProps.suppSetSpeed;
  }

  getVINTDeviceSupportsAutoSetSpeed() {
    if (this.deviceClass !== DeviceClass.VINT) throw new PhidgetError(ErrorCode.WRONG_DEVICE);
    return this._device.vintDeviceProps.suppAutoSetSpeed;
  }

  getMaxVINTDeviceSpeed() {
    if (this.deviceClass !== DeviceClass.VINT) throw new PhidgetError(ErrorCode.WRONG_DEVICE);
    if (this._device.vintDeviceProps.maxSpeed === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this._device.vintDeviceProps.maxSpeed;
  }

  getChannel() {
    throw new PhidgetError(ErrorCode.UNEXPECTED);
  }

  setChannel(_channel) {
    throw new PhidgetError(ErrorCode.UNEXPECTED);
  }

  getChannelClass() {
    throw new PhidgetError(ErrorCode.UNEXPECTED);
  }

  getChannelClassName() {
    throw new PhidgetError(ErrorCode.UNEXPECTED);
  }

  getChannelName() {
    throw new PhidgetError(ErrorCode.UNEXPECTED);
  }

  getChannelSubclass() {
    throw new PhidgetError(ErrorCode.UNEXPECTED);
  }

  close() {
    throw new PhidgetError(ErrorCode.UNEXPECTED);
  }

  setDeviceLabel(_deviceLabel) {
    throw new PhidgetError(ErrorCode.UNEXPECTED);
  }

  setDeviceSerialNumber(_deviceSerialNumber) {
    throw new PhidgetError(ErrorCode.UNEXPECTED);
  }

  setHubPort(_hubPort) {
    throw new PhidgetError(ErrorCode.UNEXPECTED);
  }

  setHubPortSpeed(_hubPortSpeed) {
    throw new PhidgetError(ErrorCode.UNEXPECTED);
  }

  setIsHubPortDevice(_isHubPortDevice) {
    throw new PhidgetError(ErrorCode.UNEXPECTED);
  }

  setIsLocal(_isLocal) {
    throw new PhidgetError(ErrorCode.UNEXPECTED);
  }

  setIsRemote(_isRemote) {
    throw new PhidgetError(ErrorCode.UNEXPECTED);
  }

  open(_timeout) {
    throw new PhidgetError(ErrorCode.UNEXPECTED);
  }

  writeDeviceLabel(_deviceLabel) {
    throw new PhidgetError(ErrorCode.UNEXPECTED);
  }

  reboot() {
    throw new PhidgetError(ErrorCode.UNEXPECTED);
  }

  rebootFirmwareUpgrade(_upgradeTimeout) {
    throw new PhidgetError(ErrorCode.UNEXPECTED);
  }

}

/** @internal */

class Channel {
  constructor(conn, dev, data) {
    this.lastErrorEventCode = null;
    this.lastErrorEventDesc = '';
    this.lastErrorEventTime = 0;
    this.conn = conn;
    this.parent = dev;
    this.id = data.id;
    this.chDef = data.chDef;
    this.uniqueIndex = data.uniqueIndex;
    this.index = data.index;
    this.isopen = false;
  }

  get subclass() {
    var _a;

    return (_a = this.chDef.s) !== null && _a !== void 0 ? _a : ChannelSubclass.NONE;
  }

  get isHubPort() {
    return this.parent.isHubPort;
  }

  match(userphid) {
    if (userphid._attaching || userphid._isattached) return false;
    if (userphid._class !== this.class) return false;

    if (userphid._serialNumber !== Phidget.ANY_SERIAL_NUMBER) {
      if (userphid._serialNumber != this.parent.serialNumber) return false;
    }

    if (userphid._channel !== Phidget.ANY_CHANNEL) {
      if (userphid._channel != this.index) return false;
    }

    if (userphid._hubPort !== Phidget.ANY_HUB_PORT) {
      if (userphid._hubPort != this.parent.hubPort) return false;
    }

    if (userphid._isHubPort !== this.isHubPort) return false;

    if (userphid._deviceLabel !== Phidget.ANY_LABEL) {
      if (userphid._deviceLabel !== this.parent.label) return false;
    }

    if (userphid._isLocal && this.conn._isRemote) return false;
    if (userphid._isRemote && this.conn._isLocal) return false;
    logdebug("matched:" + userphid + " -> " + this);
    return true;
  }

  async tryMatchOpen(userphid) {
    if (this.match(userphid)) {
      try {
        await this.open(userphid);
        return true;
      } catch (err) {
        if (userphid.onError) {
          try {
            if (err instanceof PhidgetError) {
              let code;

              switch (err.errorCode) {
                case ErrorCode.BUSY:
                  code = ErrorEventCode.BUSY;
                  break;

                case ErrorCode.BAD_VERSION:
                  code = ErrorEventCode.BAD_VERSION;
                  break;

                default:
                  code = ErrorEventCode.FAILURE;
                  break;
              }

              userphid.onError(code, err.message);
            } else if (err instanceof Error) {
              userphid.onError(ErrorEventCode.FAILURE, err.message);
            } else {
              userphid.onError(ErrorEventCode.FAILURE, "Error during open");
            }
          } catch (err) {
            logEventException(err);
          }
        } else {
          logerr("Error opening channel", err);
        }
      }
    }

    return false;
  }

  detach() {
    if (this.isopen) {
      if (this.userphid) {
        this.detaching = true;

        this.userphid._close(true).then(() => {
          this.isopen = false;
          delete this.userphid;
          delete this.detaching;
        }).catch(err => {
          this.isopen = false;
          delete this.userphid;
          delete this.detaching;
          logwarn("Error closing during detach", err);
        });
      }
    }
  }

  toString() {
    if (this.parent.class === DeviceClass.VINT) {
      if (this.isHubPort) return this.name + ' Ch:' + this.index + ' -> ' + this.parent.sku + ' Port:' + this.parent.hubPort + ' Serial#:' + this.parent.serialNumber;
      return this.name + ' Ch:' + this.index + ' -> ' + this.parent.sku + ' -> ' + this.parent.parent.sku + ' Port:' + this.parent.hubPort + ' Serial#:' + this.parent.serialNumber;
    }

    return this.name + ' Ch:' + this.index + ' -> ' + this.parent.sku + ' Serial#:' + this.parent.serialNumber;
  }

  supportedBridgePacket(bp) {
    if (this.chDef.p == undefined || this.chDef.p.includes(bp)) return true;
    return false;
  }

  bridgeInput(bp) {
    if (!this.userphid) return;

    switch (bp.vpkt) {
      case 0:
        this.userphid._handleSetStatus(bp);

        break;

      case 17:
        if (this.userphid._errorHandler) this.userphid._errorHandler(bp.getNumber(0));

        if (this.userphid.onError) {
          try {
            this.userphid.onError(bp.getNumber(0), bp.getString(1));
          } catch (err) {
            logEventException(err);
          }
        }

        break;

      case 172:
        this.parent.label = bp.getString(0);

        this.userphid._FIREPropertyChange('DeviceLabel', bp);

        break;

      case 176:
        this.parent.vintDeviceProps.commSpeed = bp.getNumber(0);

        this.userphid._FIREPropertyChange('HubPortSpeed', bp);

        break;

      case 139:
      case 138:
        break;

      case 173:
        if (this.conn._isRemote) this.parent.vintDeviceProps.commSpeed = bp.getNumber(0);
        break;

      case 140:
        if (this.conn._isRemote) this.parent.label = bp.getString(0);
        break;

      default:
        {
          if (!this.supportedBridgePacket(bp.vpkt)) throw new PhidgetError(ErrorCode.UNSUPPORTED);

          this.userphid._bridgeInput(bp);

          if (this.userphid._onInitialState && this.userphid._hasInitialState()) this.userphid._onInitialState();
          break;
        }
    }
  }

  sendErrorEvent(bp) {
    const code = bp.getNumber(0);
    const desc = bp.getString(1);
    const now = Date.now();

    if (this.lastErrorEventCode === code && this.lastErrorEventDesc === desc) {
      if (now - this.lastErrorEventTime < 1000) return;
    }

    this.lastErrorEventCode = code;
    this.lastErrorEventDesc = desc;
    this.lastErrorEventTime = now;
    bp.vpkt = 17;
    this.bridgeInput(bp);
  }

  clearErrorEvent() {
    this.lastErrorEventCode = null;
  }

}

/** @internal */

class NetworkChannel extends Channel {
  constructor(conn, dev, data) {
    super(conn, dev, data);
    this.cpversion = data.cpversion;
    this.name = data.name;
    this.class = data.class;
  }

  async open(userphid) {
    const devInfo = {
      phid: this.parent.id,
      channel: this.id,
      class: this.class,
      index: this.uniqueIndex,
      version: this.cpversion
    };

    try {
      userphid._attaching = true;
      const status = await this.conn._sendRequest(0, 0, 0, 30, 60, devInfo);
      userphid._attaching = false;
      this.isopen = true;
      this.userphid = userphid;
      const bp = new BridgePacket(this.conn, status);
      bp.deliver();
      await userphid._wasOpened(this);
    } catch (err) {
      userphid._attaching = false;
      userphid._isattached = false;
      throw err;
    }
  }

  async close() {
    if (this.detaching) return;
    const closePkt = {
      phid: this.parent.id,
      index: this.uniqueIndex
    };
    await this.conn._sendRequest(0, 0, 0, 30, 65, closePkt);
  }

  async send(bp) {
    const pkt = bp.getJsonOut(this);
    const response = await this.conn._sendRequest(0, 0, 0, 30, 70, pkt);
    return response;
  }

}

/** @internal */
const PhidgetDevices = {
  VINT: [{
    c: 21,
    s: "1014",
    i: 64,
    v: [800, 900],
    ch: [{
      n: 4
    }]
  }, {
    c: 21,
    s: "1017",
    i: 135,
    v: [200, 300],
    ch: [{
      n: 8
    }]
  }, {
    c: 10,
    s: "1055",
    i: 77,
    v: [200, 300],
    ch: [{}]
  }, {
    c: 21,
    s: "DIGITALINPUT_PORT",
    i: 1,
    v: [100, 200],
    ch: [{}]
  }, {
    c: 21,
    s: "DIGITALOUTPUT_PORT",
    i: 2,
    v: [100, 110],
    ch: [{
      s: 16
    }]
  }, {
    c: 21,
    s: "DIGITALOUTPUT_PORT",
    i: 2,
    v: [110, 200],
    ch: [{
      s: 16
    }]
  }, {
    c: 21,
    s: "VOLTAGEINPUT_PORT",
    i: 3,
    v: [100, 110],
    ch: [{
      s: 48
    }]
  }, {
    c: 21,
    s: "VOLTAGEINPUT_PORT",
    i: 3,
    v: [110, 200],
    ch: [{
      s: 48
    }]
  }, {
    c: 21,
    s: "VOLTAGERATIOINPUT_PORT",
    i: 4,
    v: [100, 200],
    ch: [{
      s: 64
    }]
  }, {
    c: 21,
    s: "ADP1000",
    i: 29,
    v: [100, 200],
    ch: [{}, {}]
  }, {
    c: 21,
    s: "DAQ1000",
    i: 50,
    v: [100, 110],
    ch: [{
      s: 64,
      n: 8
    }, {
      s: 48,
      n: 8
    }]
  }, {
    c: 21,
    s: "DAQ1000",
    i: 50,
    v: [110, 200],
    ch: [{
      s: 64,
      n: 8
    }, {
      s: 48,
      n: 8
    }]
  }, {
    c: 21,
    s: "OUT1000",
    i: 41,
    v: [100, 110],
    ch: [{}]
  }, {
    c: 21,
    s: "OUT1000",
    i: 41,
    v: [110, 200],
    ch: [{}]
  }, {
    c: 21,
    s: "OUT1001",
    i: 42,
    v: [100, 110],
    ch: [{}]
  }, {
    c: 21,
    s: "OUT1001",
    i: 42,
    v: [110, 200],
    ch: [{}]
  }, {
    c: 21,
    s: "OUT1002",
    i: 43,
    v: [100, 110],
    ch: [{}]
  }, {
    c: 21,
    s: "OUT1002",
    i: 43,
    v: [110, 200],
    ch: [{}]
  }, {
    c: 21,
    s: "DAQ1200",
    i: 28,
    v: [100, 200],
    ch: [{
      n: 4
    }]
  }, {
    c: 21,
    s: "OUT1100",
    i: 25,
    v: [100, 110],
    ch: [{
      s: 16,
      n: 4
    }]
  }, {
    c: 21,
    s: "OUT1100",
    i: 25,
    v: [110, 120],
    ch: [{
      s: 16,
      n: 4
    }]
  }, {
    c: 21,
    s: "OUT1100",
    i: 25,
    v: [120, 200],
    ch: [{
      s: 18,
      n: 4
    }]
  }, {
    c: 21,
    s: "DAQ1300",
    i: 32,
    v: [100, 200],
    ch: [{
      n: 4
    }]
  }, {
    c: 21,
    s: "DAQ1301",
    i: 54,
    v: [100, 200],
    ch: [{
      n: 16
    }]
  }, {
    c: 21,
    s: "DAQ1400",
    i: 34,
    v: [100, 120],
    ch: [{}, {}, {}, {}]
  }, {
    c: 21,
    s: "DAQ1400",
    i: 34,
    v: [120, 200],
    ch: [{}, {}, {}, {}]
  }, {
    c: 21,
    s: "DAQ1500",
    i: 24,
    v: [100, 200],
    ch: [{
      s: 65,
      n: 2
    }]
  }, {
    c: 21,
    s: "VCP1100",
    i: 64,
    v: [100, 200],
    ch: [{}]
  }, {
    c: 21,
    s: "DCC1000",
    i: 47,
    v: [100, 200],
    ch: [{}, {
      s: 96
    }, {
      s: 64
    }, {}, {}]
  }, {
    c: 21,
    s: "DCC1000",
    i: 47,
    v: [200, 210],
    ch: [{}, {
      s: 96
    }, {
      s: 64
    }, {}, {}, {}]
  }, {
    c: 21,
    s: "DCC1000",
    i: 47,
    v: [210, 300],
    ch: [{}, {
      s: 96
    }, {
      s: 64
    }, {}, {}, {}]
  }, {
    c: 21,
    s: "DCC1001",
    i: 68,
    v: [100, 120],
    ch: [{}, {}, {}]
  }, {
    c: 21,
    s: "DCC1001",
    i: 68,
    v: [120, 200],
    ch: [{}, {}, {}]
  }, {
    c: 21,
    s: "DCC1002",
    i: 70,
    v: [100, 110],
    ch: [{}, {}, {}]
  }, {
    c: 21,
    s: "DCC1002",
    i: 70,
    v: [110, 200],
    ch: [{}, {}, {}]
  }, {
    c: 21,
    s: "DCC1003",
    i: 73,
    v: [100, 110],
    ch: [{
      n: 2
    }]
  }, {
    c: 21,
    s: "DCC1003",
    i: 73,
    v: [110, 200],
    ch: [{
      n: 2
    }]
  }, {
    c: 21,
    s: "DCC1100",
    i: 65,
    v: [100, 120],
    ch: [{}, {}, {}]
  }, {
    c: 21,
    s: "DCC1100",
    i: 65,
    v: [120, 200],
    ch: [{}, {}, {}]
  }, {
    c: 21,
    s: "DST1000",
    i: 45,
    v: [100, 200],
    ch: [{}]
  }, {
    c: 21,
    s: "DST1001",
    i: 121,
    v: [100, 200],
    ch: [{}]
  }, {
    c: 21,
    s: "DST1002",
    i: 126,
    v: [100, 200],
    ch: [{}]
  }, {
    c: 21,
    s: "DST1200",
    i: 46,
    v: [100, 200],
    ch: [{}]
  }, {
    c: 21,
    s: "ENC1000",
    i: 18,
    v: [100, 200],
    ch: [{
      s: 96
    }]
  }, {
    c: 21,
    s: "HIN1101",
    i: 67,
    v: [100, 200],
    ch: [{}, {}]
  }, {
    c: 21,
    s: "HIN1000",
    i: 36,
    v: [100, 200],
    ch: [{
      n: 7
    }]
  }, {
    c: 21,
    s: "HIN1001",
    i: 56,
    v: [100, 200],
    ch: [{
      n: 4
    }, {}]
  }, {
    c: 21,
    s: "HIN1100",
    i: 37,
    v: [100, 200],
    ch: [{
      n: 2
    }, {}]
  }, {
    c: 21,
    s: "HUM1000",
    i: 20,
    v: [100, 200],
    ch: [{}, {}]
  }, {
    c: 21,
    s: "HUM1001",
    i: 127,
    v: [100, 200],
    ch: [{}, {}]
  }, {
    c: 21,
    s: "LCD1100",
    i: 40,
    v: [100, 200],
    ch: [{
      s: 80
    }]
  }, {
    c: 21,
    s: "LED1000",
    i: 39,
    v: [100, 200],
    ch: [{
      s: 17,
      n: 32
    }]
  }, {
    c: 21,
    s: "LUX1000",
    i: 33,
    v: [100, 200],
    ch: [{}]
  }, {
    c: 21,
    s: "HUM1100",
    i: 136,
    v: [100, 200],
    ch: [{}]
  }, {
    c: 21,
    s: "MOT1100",
    i: 51,
    v: [200, 300],
    ch: [{}]
  }, {
    c: 21,
    s: "MOT0100",
    i: 146,
    v: [100, 200],
    ch: [{}]
  }, {
    c: 21,
    s: "MOT1101",
    i: 52,
    v: [100, 200],
    ch: [{}, {}, {}, {}]
  }, {
    c: 21,
    s: "MOT1102",
    i: 137,
    v: [200, 300],
    ch: [{}, {}, {}, {
      s: 112
    }]
  }, {
    c: 21,
    s: "MOT1102",
    i: 140,
    v: [300, 400],
    ch: [{}, {}, {}, {
      s: 112
    }]
  }, {
    c: 21,
    s: "MOT0110",
    i: 141,
    v: [100, 200],
    ch: [{}, {}, {}, {
      s: 112
    }, {}]
  }, {
    c: 21,
    s: "PRE1000",
    i: 17,
    v: [100, 200],
    ch: [{}]
  }, {
    c: 21,
    s: "RCC1000",
    i: 49,
    v: [100, 110],
    ch: [{
      n: 16
    }]
  }, {
    c: 21,
    s: "RCC1000",
    i: 49,
    v: [110, 200],
    ch: [{
      n: 16
    }]
  }, {
    c: 21,
    s: "REL1000",
    i: 44,
    v: [100, 110],
    ch: [{
      n: 4
    }]
  }, {
    c: 21,
    s: "REL1000",
    i: 44,
    v: [110, 200],
    ch: [{
      n: 4
    }]
  }, {
    c: 21,
    s: "REL1100",
    i: 26,
    v: [100, 110],
    ch: [{
      s: 16,
      n: 4
    }]
  }, {
    c: 21,
    s: "REL1100",
    i: 26,
    v: [110, 120],
    ch: [{
      s: 16,
      n: 4
    }]
  }, {
    c: 21,
    s: "REL1100",
    i: 26,
    v: [120, 200],
    ch: [{
      s: 18,
      n: 4
    }]
  }, {
    c: 21,
    s: "REL1101",
    i: 27,
    v: [100, 110],
    ch: [{
      s: 16,
      n: 16
    }]
  }, {
    c: 21,
    s: "REL1101",
    i: 27,
    v: [110, 200],
    ch: [{
      s: 16,
      n: 16
    }]
  }, {
    c: 21,
    s: "REL1101",
    i: 130,
    v: [100, 300],
    ch: [{
      s: 18,
      n: 8
    }, {
      s: 16,
      n: 8
    }]
  }, {
    c: 21,
    s: "SAF1000",
    i: 38,
    v: [100, 110],
    ch: [{}, {}, {}]
  }, {
    c: 21,
    s: "SAF1000",
    i: 38,
    v: [110, 200],
    ch: [{}, {}, {}]
  }, {
    c: 21,
    s: "SND1000",
    i: 35,
    v: [100, 200],
    ch: [{}]
  }, {
    c: 21,
    s: "STC1000",
    i: 48,
    v: [100, 110],
    ch: [{}]
  }, {
    c: 21,
    s: "STC1000",
    i: 48,
    v: [110, 200],
    ch: [{}]
  }, {
    c: 21,
    s: "STC1001",
    i: 69,
    v: [100, 110],
    ch: [{}]
  }, {
    c: 21,
    s: "STC1001",
    i: 69,
    v: [110, 200],
    ch: [{}]
  }, {
    c: 21,
    s: "STC1002",
    i: 71,
    v: [100, 110],
    ch: [{}]
  }, {
    c: 21,
    s: "STC1002",
    i: 71,
    v: [110, 200],
    ch: [{}]
  }, {
    c: 21,
    s: "STC1003",
    i: 72,
    v: [100, 110],
    ch: [{}]
  }, {
    c: 21,
    s: "STC1003",
    i: 72,
    v: [110, 200],
    ch: [{}]
  }, {
    c: 21,
    s: "STC1003",
    i: 142,
    v: [200, 300],
    ch: [{}, {}]
  }, {
    c: 21,
    s: "STC1005",
    i: 147,
    v: [100, 200],
    ch: [{}, {}]
  }, {
    c: 21,
    s: "TMP1000",
    i: 19,
    v: [100, 200],
    ch: [{}]
  }, {
    c: 21,
    s: "TMP1100",
    i: 55,
    v: [100, 200],
    ch: [{
      s: 33
    }, {}, {}]
  }, {
    c: 21,
    s: "TMP1101",
    i: 21,
    v: [100, 200],
    ch: [{
      s: 33,
      n: 4
    }, {}, {
      n: 4
    }]
  }, {
    c: 21,
    s: "TMP1101",
    i: 143,
    v: [200, 300],
    ch: [{
      s: 33,
      n: 4
    }, {}, {
      n: 4
    }]
  }, {
    c: 21,
    s: "TMP1200",
    i: 16,
    v: [100, 200],
    ch: [{
      s: 32
    }, {}]
  }, {
    c: 21,
    s: "TMP1200",
    i: 78,
    v: [300, 400],
    ch: [{
      s: 32
    }, {}]
  }, {
    c: 21,
    s: "VCP1000",
    i: 53,
    v: [100, 200],
    ch: [{}]
  }, {
    c: 21,
    s: "VCP1001",
    i: 31,
    v: [100, 110],
    ch: [{}]
  }, {
    c: 21,
    s: "VCP1001",
    i: 31,
    v: [110, 200],
    ch: [{}]
  }, {
    c: 21,
    s: "VCP1002",
    i: 30,
    v: [100, 110],
    ch: [{}]
  }, {
    c: 21,
    s: "VCP1002",
    i: 30,
    v: [110, 200],
    ch: [{}]
  }, {
    c: 21,
    s: "FIRMWARE_UPGRADE_STM32F0",
    i: 4093,
    v: [100, 110],
    ch: [{}]
  }, {
    c: 21,
    s: "FIRMWARE_UPGRADE_STM32G0",
    i: 4093,
    v: [110, 114],
    ch: [{}]
  }, {
    c: 21,
    s: "FIRMWARE_UPGRADE_STM32G0",
    i: 4093,
    v: [114, 120],
    ch: [{}]
  }, {
    c: 21,
    s: "FIRMWARE_UPGRADE_STM32F3",
    i: 4093,
    v: [120, 200],
    ch: [{}]
  }, {
    c: 21,
    s: "FIRMWARE_UPGRADE_STM8S",
    i: 4094,
    v: [100, 200],
    ch: [{}]
  }, {
    c: 21,
    s: " ",
    i: 4080,
    v: [0, 9999],
    ch: [{}]
  }],
  USB: [{
    c: 9,
    s: "ifkit488",
    i: 33281,
    v: [0, 101],
    ch: [{
      s: 64,
      n: 4
    }, {
      n: 8
    }, {
      n: 8
    }]
  }, {
    c: 16,
    s: "1000",
    i: 33025,
    v: [200, 201],
    ch: [{}]
  }, {
    c: 16,
    s: "1000",
    i: 57,
    v: [200, 201],
    ch: [{}]
  }, {
    c: 16,
    s: "1000",
    i: 57,
    v: [300, 313],
    ch: [{}]
  }, {
    c: 16,
    s: "1000",
    i: 57,
    v: [313, 400],
    ch: [{}]
  }, {
    c: 16,
    s: "1001",
    i: 33028,
    v: [200, 201],
    ch: [{
      n: 4
    }]
  }, {
    c: 16,
    s: "1001",
    i: 56,
    v: [200, 201],
    ch: [{
      n: 4
    }]
  }, {
    c: 16,
    s: "1001",
    i: 56,
    v: [300, 313],
    ch: [{
      n: 4
    }]
  }, {
    c: 16,
    s: "1001",
    i: 56,
    v: [313, 400],
    ch: [{
      n: 4
    }]
  }, {
    c: 3,
    s: "1002",
    i: 55,
    v: [100, 200],
    ch: [{
      n: 4
    }]
  }, {
    c: 1,
    s: "1008",
    i: 113,
    v: [0, 200],
    ch: [{}]
  }, {
    c: 9,
    s: "1011",
    i: 54,
    v: [0, 200],
    ch: [{
      s: 48,
      n: 2
    }, {
      s: 64,
      n: 2
    }, {
      n: 2
    }, {
      n: 2
    }]
  }, {
    c: 9,
    s: "1012",
    i: 68,
    v: [0, 601],
    ch: [{
      n: 16
    }, {
      n: 16
    }]
  }, {
    c: 9,
    s: "1012",
    i: 68,
    v: [601, 602],
    ch: [{
      n: 16
    }, {
      n: 16
    }]
  }, {
    c: 9,
    s: "1012",
    i: 68,
    v: [602, 700],
    ch: [{
      n: 16
    }, {
      n: 16
    }]
  }, {
    c: 9,
    s: "1013",
    i: 69,
    v: [0, 821],
    ch: [{
      s: 48,
      n: 8
    }, {
      s: 64,
      n: 8
    }, {
      n: 8
    }, {
      n: 8
    }]
  }, {
    c: 9,
    s: "1013/1018/1019",
    i: 69,
    v: [821, 900],
    ch: [{
      s: 48,
      n: 8
    }, {
      s: 64,
      n: 8
    }, {
      n: 8
    }, {
      n: 8
    }]
  }, {
    c: 9,
    s: "1014",
    i: 64,
    v: [0, 704],
    ch: [{
      n: 4
    }]
  }, {
    c: 9,
    s: "1014",
    i: 64,
    v: [704, 800],
    ch: [{
      n: 4
    }]
  }, {
    c: 9,
    s: "1014",
    i: 64,
    v: [800, 900],
    ch: [{
      n: 4
    }]
  }, {
    c: 9,
    s: "1015",
    i: 118,
    v: [0, 9999],
    ch: [{}]
  }, {
    c: 9,
    s: "1016",
    i: 119,
    v: [0, 9999],
    ch: [{}]
  }, {
    c: 9,
    s: "1017",
    i: 129,
    v: [0, 9999],
    ch: [{
      n: 8
    }]
  }, {
    c: 9,
    s: "1017",
    i: 135,
    v: [200, 300],
    ch: [{
      n: 8
    }]
  }, {
    c: 9,
    s: "1010/1018/1019",
    i: 69,
    v: [900, 1000],
    ch: [{
      s: 48,
      n: 8
    }, {
      s: 64,
      n: 8
    }, {
      n: 8
    }, {
      n: 8
    }]
  }, {
    c: 9,
    s: "1010/1018/1019",
    i: 69,
    v: [1000, 1100],
    ch: [{
      s: 48,
      n: 8
    }, {
      s: 64,
      n: 8
    }, {
      n: 8
    }, {
      n: 8
    }]
  }, {
    c: 15,
    s: "1023",
    i: 48,
    v: [0, 104],
    ch: [{}]
  }, {
    c: 15,
    s: "1023",
    i: 48,
    v: [104, 200],
    ch: [{}]
  }, {
    c: 15,
    s: "1023",
    i: 49,
    v: [200, 201],
    ch: [{}, {}, {}, {}]
  }, {
    c: 15,
    s: "1023",
    i: 49,
    v: [201, 300],
    ch: [{}, {}, {}, {}]
  }, {
    c: 15,
    s: "1024",
    i: 52,
    v: [100, 200],
    ch: [{}, {}, {}, {}]
  }, {
    c: 11,
    s: "1030",
    i: 74,
    v: [100, 300],
    ch: [{
      s: 17,
      n: 64
    }]
  }, {
    c: 11,
    s: "1031",
    i: 76,
    v: [100, 200],
    ch: [{
      s: 17,
      n: 64
    }]
  }, {
    c: 11,
    s: "1032",
    i: 76,
    v: [200, 300],
    ch: [{
      s: 17,
      n: 64
    }]
  }, {
    c: 7,
    s: "1040",
    i: 121,
    v: [0, 9999],
    ch: [{}]
  }, {
    c: 17,
    s: "1041",
    i: 127,
    v: [200, 300],
    ch: [{}]
  }, {
    c: 17,
    s: "1042",
    i: 51,
    v: [300, 400],
    ch: [{}, {}, {}, {}]
  }, {
    c: 17,
    s: "1043",
    i: 127,
    v: [300, 400],
    ch: [{}]
  }, {
    c: 17,
    s: "1044",
    i: 51,
    v: [400, 500],
    ch: [{}, {}, {}, {}]
  }, {
    c: 17,
    s: "1044",
    i: 51,
    v: [500, 510],
    ch: [{}, {}, {}, {
      s: 112
    }]
  }, {
    c: 17,
    s: "1044",
    i: 51,
    v: [510, 600],
    ch: [{}, {}, {}, {
      s: 112
    }]
  }, {
    c: 19,
    s: "1045",
    i: 60,
    v: [100, 200],
    ch: [{}, {}]
  }, {
    c: 4,
    s: "1046",
    i: 59,
    v: [100, 102],
    ch: [{
      s: 65,
      n: 4
    }]
  }, {
    c: 4,
    s: "1046",
    i: 59,
    v: [102, 200],
    ch: [{
      s: 65,
      n: 4
    }]
  }, {
    c: 5,
    s: "1047",
    i: 79,
    v: [100, 200],
    ch: [{
      n: 4
    }, {
      n: 4
    }]
  }, {
    c: 5,
    s: "1047",
    i: 79,
    v: [200, 300],
    ch: [{
      n: 4
    }, {
      n: 4
    }]
  }, {
    c: 5,
    s: "1047",
    i: 79,
    v: [300, 400],
    ch: [{
      n: 4
    }, {
      n: 4
    }]
  }, {
    c: 19,
    s: "1048",
    i: 50,
    v: [100, 200],
    ch: [{
      s: 33,
      n: 4
    }, {}, {
      n: 4
    }]
  }, {
    c: 19,
    s: "1048",
    i: 50,
    v: [200, 300],
    ch: [{
      s: 33,
      n: 4
    }, {}, {
      n: 4
    }]
  }, {
    c: 17,
    s: "1049",
    i: 127,
    v: [0, 200],
    ch: [{}]
  }, {
    c: 19,
    s: "1051",
    i: 112,
    v: [0, 200],
    ch: [{
      s: 33
    }, {}]
  }, {
    c: 19,
    s: "1051",
    i: 112,
    v: [200, 300],
    ch: [{
      s: 33
    }, {}, {}]
  }, {
    c: 19,
    s: "1051",
    i: 112,
    v: [300, 400],
    ch: [{
      s: 33
    }, {}, {}]
  }, {
    c: 19,
    s: "1051",
    i: 112,
    v: [400, 500],
    ch: [{
      s: 33
    }, {}, {}]
  }, {
    c: 5,
    s: "1052",
    i: 75,
    v: [0, 101],
    ch: [{}, {}]
  }, {
    c: 5,
    s: "1052",
    i: 75,
    v: [101, 110],
    ch: [{}, {}]
  }, {
    c: 5,
    s: "1052",
    i: 75,
    v: [110, 300],
    ch: [{}, {}]
  }, {
    c: 1,
    s: "1053",
    i: 113,
    v: [300, 400],
    ch: [{}]
  }, {
    c: 6,
    s: "1054",
    i: 53,
    v: [0, 200],
    ch: [{
      n: 2
    }]
  }, {
    c: 10,
    s: "1055",
    i: 77,
    v: [100, 200],
    ch: [{}]
  }, {
    c: 10,
    s: "1055",
    i: 77,
    v: [200, 300],
    ch: [{}]
  }, {
    c: 17,
    s: "1056",
    i: 51,
    v: [0, 200],
    ch: [{}, {}, {}, {}]
  }, {
    c: 17,
    s: "1056",
    i: 51,
    v: [200, 300],
    ch: [{}, {}, {}, {}]
  }, {
    c: 5,
    s: "1057",
    i: 128,
    v: [300, 400],
    ch: [{}]
  }, {
    c: 5,
    s: "1057",
    i: 128,
    v: [400, 500],
    ch: [{}]
  }, {
    c: 14,
    s: "1058",
    i: 116,
    v: [100, 200],
    ch: [{}, {}]
  }, {
    c: 1,
    s: "1059",
    i: 126,
    v: [400, 500],
    ch: [{}]
  }, {
    c: 13,
    s: "1060",
    i: 88,
    v: [100, 200],
    ch: [{
      n: 2
    }, {
      n: 4
    }]
  }, {
    c: 2,
    s: "1061",
    i: 58,
    v: [100, 200],
    ch: [{
      n: 8
    }, {
      n: 8
    }]
  }, {
    c: 2,
    s: "1061",
    i: 58,
    v: [200, 300],
    ch: [{
      n: 8
    }, {
      n: 8
    }]
  }, {
    c: 2,
    s: "1061",
    i: 58,
    v: [300, 400],
    ch: [{
      n: 8
    }, {
      n: 8
    }]
  }, {
    c: 2,
    s: "RCC0004",
    i: 58,
    v: [400, 500],
    ch: [{
      n: 8
    }]
  }, {
    c: 18,
    s: "1062",
    i: 122,
    v: [100, 200],
    ch: [{
      n: 4
    }]
  }, {
    c: 18,
    s: "1063",
    i: 123,
    v: [100, 200],
    ch: [{}, {
      n: 4
    }, {}]
  }, {
    c: 13,
    s: "1064",
    i: 89,
    v: [100, 200],
    ch: [{
      n: 2
    }, {
      n: 2
    }]
  }, {
    c: 13,
    s: "1065",
    i: 62,
    v: [100, 200],
    ch: [{}, {
      n: 2
    }, {}, {
      s: 48,
      n: 2
    }, {}, {
      s: 64,
      n: 2
    }, {}]
  }, {
    c: 2,
    s: "1066",
    i: 130,
    v: [100, 200],
    ch: [{}, {}]
  }, {
    c: 18,
    s: "1067",
    i: 123,
    v: [200, 300],
    ch: [{}]
  }, {
    c: 18,
    s: "1067",
    i: 123,
    v: [300, 400],
    ch: [{}]
  }, {
    c: 9,
    s: "1202/1203",
    i: 125,
    v: [0, 120],
    ch: [{
      s: 48,
      n: 8
    }, {
      s: 64,
      n: 8
    }, {
      n: 8
    }, {
      n: 8
    }]
  }, {
    c: 9,
    s: "1202/1203",
    i: 125,
    v: [120, 200],
    ch: [{
      s: 48,
      n: 8
    }, {
      s: 64,
      n: 8
    }, {
      n: 8
    }, {
      n: 8
    }]
  }, {
    c: 20,
    s: "1202/1203",
    i: 125,
    v: [0, 200],
    n: 1,
    ch: [{
      s: 81
    }]
  }, {
    c: 9,
    s: "1202/1203",
    i: 125,
    v: [200, 300],
    ch: [{
      s: 48,
      n: 8
    }, {
      s: 64,
      n: 8
    }, {
      n: 8
    }, {
      n: 8
    }]
  }, {
    c: 20,
    s: "1202/1203",
    i: 125,
    v: [200, 9999],
    n: 1,
    ch: [{
      s: 81
    }]
  }, {
    c: 20,
    s: "1204",
    i: 61,
    v: [0, 9999],
    ch: [{
      s: 81,
      n: 2
    }]
  }, {
    c: 20,
    s: "1215/1216/1217/1218",
    i: 82,
    v: [0, 9999],
    ch: [{
      s: 81
    }]
  }, {
    c: 20,
    s: "1219/1220/1221/1222",
    i: 83,
    v: [0, 9999],
    ch: [{
      s: 81
    }, {
      n: 8
    }, {
      n: 8
    }]
  }, {
    c: 1,
    s: "MOT0100",
    i: 146,
    v: [100, 200],
    ch: [{}]
  }, {
    c: 17,
    s: "MOT0109",
    i: 140,
    v: [100, 200],
    ch: [{}, {}, {}, {
      s: 112
    }, {}]
  }, {
    c: 17,
    s: "MOT0110",
    i: 141,
    v: [100, 200],
    ch: [{}, {}, {}, {
      s: 112
    }, {}]
  }, {
    c: 8,
    s: "HUB0000",
    i: 63,
    v: [100, 200],
    ch: [{}]
  }, {
    c: 8,
    s: "HUB0000",
    i: 63,
    v: [300, 400],
    ch: [{}]
  }, {
    c: 8,
    s: "HUB0001",
    i: 67,
    v: [100, 115],
    ch: [{}]
  }, {
    c: 8,
    s: "HUB0001",
    i: 67,
    v: [115, 200],
    ch: [{}]
  }, {
    c: 8,
    s: "HUB5000",
    i: 66,
    v: [100, 200],
    ch: [{}]
  }, {
    c: 8,
    s: "HUB5000",
    i: 66,
    v: [200, 300],
    ch: [{}]
  }, {
    c: 23,
    s: "FIRMWARE_UPGRADE_M3",
    i: 152,
    v: [0, 9999],
    ch: [{}]
  }, {
    c: 23,
    s: "FIRMWARE_UPGRADE_STM32_USB",
    i: 156,
    v: [100, 200],
    ch: [{}]
  }, {
    c: 23,
    s: "FIRMWARE_UPGRADE_STM32G_USB",
    i: 156,
    v: [200, 300],
    ch: [{}]
  }, {
    c: 23,
    s: "FIRMWARE_UPGRADE_STM32L_USB",
    i: 156,
    v: [300, 400],
    ch: [{}]
  }, {
    c: 22,
    s: " ",
    i: 175,
    v: [0, 9999],
    ch: [{}]
  }],
  MESH: [],
  SPI: [{
    c: 8,
    s: "HUB0004",
    i: 1,
    v: [100, 200],
    ch: [{}]
  }, {
    c: 8,
    s: "HUB0004",
    i: 1,
    v: [200, 300],
    ch: [{}]
  }, {
    c: 23,
    s: "FIRMWARE_UPGRADE_M3",
    i: 2,
    v: [0, 9999],
    ch: [{}]
  }, {
    c: 22,
    s: " ",
    i: 65535,
    v: [0, 9999],
    ch: [{}]
  }],
  LIGHTNING: [],
  VIRTUAL: [{
    c: 24,
    s: "Dictionary",
    i: 0,
    v: [100, 200],
    ch: [{}]
  }]
};

function findPhidgetUniqueDevice(data) {
  var _a;

  const typeDevs = PhidgetDevices[data.type];

  for (const d of typeDevs) {
    if (d.v[0] > data.version || d.v[1] <= data.version) continue;

    if (data.type === 'VINT') {
      if (d.i !== data.vintID) continue;
    } else {
      if (d.i !== data.productID) continue;
      if (data.type === 'USB' && ((_a = d.n) !== null && _a !== void 0 ? _a : 0) !== data.interfaceNum) continue;
    }

    return d;
  }

  throw new PhidgetError(ErrorCode.UNEXPECTED, "Couldn't find device in device list!!");
}
/** @internal */

class Device {
  constructor(conn, data) {
    this.conn = conn;
    this.devDef = data.devDef;
    this.version = data.version;
    this.label = data.label;
    this.serialNumber = data.serialNumber;
    this.fwstr = data.fwstr;
    this.id = data.id;
    this.parent = data.parent;
    if (data.type === 'VINT') this.vintDeviceProps = data.vintDeviceProps;
    if (data.type === 'HUB') this.hubPortProps = data.hubPortProps;
  }

  get parentId() {
    var _a, _b;

    return (_b = (_a = this.parent) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : '0';
  }

  get vintID() {
    return this.devDef.i;
  }

  get sku() {
    return this.devDef.s;
  }

  get class() {
    return this.devDef.c;
  }

  get hubPort() {
    var _a, _b;

    return (_b = (_a = this.vintDeviceProps) === null || _a === void 0 ? void 0 : _a.hubPort) !== null && _b !== void 0 ? _b : 0;
  }

  get isHubPort() {
    var _a, _b;

    return (_b = (_a = this.vintDeviceProps) === null || _a === void 0 ? void 0 : _a.isHubPort) !== null && _b !== void 0 ? _b : false;
  }

  get index() {
    var _a, _b;

    return (_b = (_a = this.vintDeviceProps) === null || _a === void 0 ? void 0 : _a.uniqueIndex) !== null && _b !== void 0 ? _b : 0;
  }

  toString() {
    if (this.class === DeviceClass.VINT) {
      return this.sku + ' (' + this.name + ') v' + this.version + ' -> ' + this.parent.sku + ' Port:' + this.hubPort + ' Serial#:' + this.serialNumber + (this.conn._isRemote ? " NET" : " USB");
    }

    return this.sku + ' (' + this.name + ') v' + this.version + ' Serial#:' + this.serialNumber + (this.conn._isRemote ? " NET" : " USB");
  }

}

/** @internal */

class NetworkDevice extends Device {
  constructor(conn, data) {
    super(conn, data);
    this.deviceID = data.deviceID;
    this.name = data.name;
  }

  findPhidgetUniqueChannel(uniqueIndex) {
    var _a, _b;

    let index = 0;

    for (const c of this.devDef.ch) {
      if (uniqueIndex < index + ((_a = c.n) !== null && _a !== void 0 ? _a : 1)) return c;
      index += (_b = c.n) !== null && _b !== void 0 ? _b : 1;
    }

    throw new PhidgetError(ErrorCode.UNEXPECTED, "Couldn't find channel in channel list!!");
  }

}

const NET_MAJOR = 2;
const NET_MINOR = 3;
const NET_IDENT = "phidgetclient";
class NetworkConnectionBase extends PhidgetConnection {
  constructor(optsOrUriOrPort, optsOrHostname, opts) {
    let options = {};
    let uri = '';
    let hostname = '';
    let port = 0;

    if (optsOrUriOrPort != undefined && typeof optsOrUriOrPort === 'object') {
      options = optsOrUriOrPort;
    } else if (optsOrUriOrPort != undefined && typeof optsOrUriOrPort === 'string') {
      uri = optsOrUriOrPort;
      if (optsOrHostname != undefined && typeof optsOrHostname === 'object') options = optsOrHostname;
    } else if (optsOrUriOrPort != undefined && typeof optsOrUriOrPort === 'number') {
      port = optsOrUriOrPort;

      if (optsOrHostname != undefined && typeof optsOrHostname === 'string') {
        hostname = optsOrHostname;
        if (opts != undefined && typeof opts === 'object') options = opts;
      }
    }

    if (!options.name) options.name = uri;
    super(options);
    this._type = 1;
    this._generation = 0;
    this._timeout = 8000;
    this._reqseq = 10;
    this._requests = new Map();
    this._opened = false;
    this._uri = uri;

    if (options.hostname && hostname === '') {
      if (typeof options.hostname === 'string') hostname = options.hostname;
    }

    if (hostname === '') hostname = 'localhost';
    this._hostname = hostname;

    if (options.port && port === 0) {
      if (typeof options.port === 'number') port = options.port;
      if (typeof options.port === 'string') port = Number(options.port);
    }

    this._port = port;
    if (options.onConnect && typeof options.onConnect === 'function') this.onConnect = options.onConnect;else this.onConnect = null;
    if (options.onDisconnect && typeof options.onDisconnect === 'function') this.onDisconnect = options.onDisconnect;else this.onDisconnect = null;
    if (options.onAuthenticationNeeded && typeof options.onAuthenticationNeeded === 'function') this.onAuthenticationNeeded = options.onAuthenticationNeeded;else this.onAuthenticationNeeded = null;
    if (options.passwd) this._passwd = options.passwd;else this._passwd = '';
    this._handleAbandonedRequestsInterval = setInterval(this._handleAbandonedRequests.bind(this), 2000);
  }

  delete() {
    if (this._handleAbandonedRequestsInterval != undefined) {
      clearInterval(this._handleAbandonedRequestsInterval);
      delete this._handleAbandonedRequestsInterval;
    }

    super.delete();
  }

  setKeepAlive(timeout) {
    if (typeof timeout !== 'number' || isNaN(timeout)) throw 'invalid keep alive:' + timeout;
    this._timeout = timeout;
  }

  close() {
    logdebug("Network Connection close() called");
    this._opened = false;
    if (this._connectionMaintainer != undefined) clearTimeout(this._connectionMaintainer);
    delete this._connectionMaintainer;

    this._detachAllDevices();

    this._closesocket();
  }
  /** @internal */


  _onmessage(msg, req) {
    let json;

    if (msg !== undefined) {
      const tmp1 = msg.replace(/("[OI]"|"phid"|"chid"|"parent"):([0-9]+)/g, "$1:\"$2\"");
      const tmp2 = tmp1.replace(/([:[,])[-+]?nan(\([\w]*\))?/ig, "$1\"**NAN**\"");

      if (tmp1 !== tmp2) {
        json = JSON.parse(tmp2, (key, value) => {
          if (key == 'v') {
            if (value === "**NAN**") return NaN;
            if (Array.isArray(value)) return value.map(val => {
              if (val === "**NAN**") return NaN;
              return val;
            });
          }

          return value;
        });
      } else {
        json = JSON.parse(tmp2);
      }
    }

    try {
      if (this.connected) this._ondatamessage(json, req);else this._onauthmessage(json);
    } catch (err) {
      if (this.onError && err instanceof PhidgetError) {
        try {
          this.onError(err.errorCode, err.message);
        } catch (err) {
          logEventException(err);
        }

        loginfo("Error handling message from server", err);
      } else {
        logerr("Error handling message from server", err);
      }
    }
  }
  /** @internal */


  _handleAbandonedRequests() {
    for (const r of this._requests.entries()) {
      if (r[1].generation != this._generation) {
        r[1].onError(ErrorCode.CONNECTION_RESET, "Connection Reset");

        this._requests.delete(r[0]);

        continue;
      }

      if (tm() - r[1].time > 5000) {
        r[1].onTimeout();

        this._requests.delete(r[0]);
      }
    }
  }
  /** @internal */


  _getNextRequestSequence() {
    if (this._reqseq >= 65535) this._reqseq = 10;
    this._reqseq++;
    return this._reqseq;
  }
  /** @internal */


  _sendRequest(flags, reqseq, repseq, type, stype, data) {
    if (reqseq === 0) reqseq = this._getNextRequestSequence();
    return new promise((resolve, reject) => {
      this._requests.set(reqseq, {
        generation: this._generation,
        time: tm(),
        onReply: function (res) {
          if ('E' in res) {
            if (res.E !== ErrorCode.SUCCESS) {
              if (res.R != undefined) reject(new PhidgetError(res.E, res.R));
              reject(new PhidgetError(res.E));
            } else {
              if (res.R != undefined) resolve(res.R);
              resolve();
            }
          } else {
            resolve(res);
          }
        },
        onTimeout: function () {
          reject(new PhidgetError(ErrorCode.TIMEOUT));
        },
        onError: function (code, msg) {
          reject(new PhidgetError(code, msg));
        }
      });

      const json = JSON.stringify(data);
      const data2 = json.replace(/("[OI]"|"phid"|"channel"):"([0-9]+)"/g, "$1:$2");
      const req = new Request(data2.length, flags, reqseq, repseq, type, stype);

      this._send(req, data2);
    });
  }
  /** @internal */


  _sendReply(repseq, type, stype, reply) {
    const NRF_REPLY = 0x0002;

    const reqseq = this._getNextRequestSequence();

    let data = '';
    if (reply != undefined) data = JSON.stringify(reply);
    const req = new Request(data.length, NRF_REPLY, reqseq, repseq, type, stype);

    this._send(req, data);
  }
  /** @internal */


  _maintainConnection() {
    logdebug("Maintaining network connection..");

    const nextMaintainer = () => {
      if (!this._connectionMaintainer && this._opened) {
        logdebug(".. Check again in 4 seconds.");
        this._connectionMaintainer = setTimeout(this._maintainConnection.bind(this), 4000);
      }
    };

    if (this._connectionMaintainer) delete this._connectionMaintainer;

    if (this.connected) {
      logdebug(".. already connected ..");
      nextMaintainer();
    } else {
      logdebug(".. trying to connect ..");
      this.connect().then(() => {
        logdebug(".. connected!");
        nextMaintainer();
      }).catch(err => {
        if (this.onError && err instanceof PhidgetError) {
          try {
            this.onError(err.errorCode, err.message);
          } catch (err) {
            logEventException(err);
          }
        }

        logerr("Error connecting", err);
        logdebug(".. failed to connect! ..");
        nextMaintainer();
      });
    }
  }
  /** @internal */


  _doclose() {
    this._detachAllDevices();

    this._closesocket();
  }
  /** @internal */


  _onauthmessage(data) {
    if (this._onauthdata == undefined) throw new Error('packet recieved while not connected and authdata is not defined');

    this._onauthdata(data);
  }
  /** @internal */


  _ondatamessage(data, req) {
    const request = this._requests.get(req.repseq);

    if (request) {
      this._requests.delete(req.repseq);

      request.onReply(data);
    }

    if (req.flgs & 2) {
      if (request === undefined) throw new PhidgetError(ErrorCode.UNEXPECTED, 'No handler registered for reply: ' + req);
      return;
    }

    switch (req.type) {
      case 20:
        this._handleCommand(req);

        break;

      case 30:
        this._handleDevice(req, data);

        break;

      default:
        throw new PhidgetError(ErrorCode.INVALID, 'Unknown request type:' + req.type);
    }
  }
  /** @internal */


  _handleCommand(req) {
    switch (req.stype) {
      case 41:
        logdebug("Got a keepalive message");

        if (this._keepAliveTimeout != undefined) {
          logdebug("Cleaning previous keepalive timeout");
          clearTimeout(this._keepAliveTimeout);
        }

        this._keepAliveTimeout = setTimeout(() => {
          logdebug("Keepalive timeout passed");
          delete this._keepAliveTimeout;

          if (this.connected) {
            if (this.onError) {
              try {
                this.onError(ErrorCode.KEEP_ALIVE, "KeepAlive timeout. Closing connection to server.");
              } catch (err) {
                logEventException(err);
              }
            }

            logerr("KeepAlive timeout. Closing connection to server.");

            this._doclose();
          }
        }, this._timeout);

        this._sendReply(req.reqseq, 20, 41);

        return;

      default:
        throw new PhidgetError(ErrorCode.UNEXPECTED, 'Unknown command subrequest:' + req.stype);
    }
  }
  /** @internal */


  _handleDevice(req, data) {
    switch (req.stype) {
      case 50:
        this._handleDeviceAttach(data);

        return;

      case 55:
        this._handleDeviceDetach(data);

        return;

      case 70:
        this._handleBridgePacket(req, data);

        return;

      case 80:
        this._handleChannel(data);

        return;

      default:
        throw new PhidgetError(ErrorCode.UNEXPECTED, 'Unknown device subrequest:' + req.stype);
    }
  }
  /** @internal */


  _handleDeviceAttach(data) {
    var _a, _b, _c, _d, _e;

    const devDef = findPhidgetUniqueDevice(data);
    let devData;
    const baseData = {
      version: data.version,
      label: data.label,
      serialNumber: data.serialNumber,
      devDef: devDef,
      fwstr: (_a = data.fwstr) !== null && _a !== void 0 ? _a : devDef.s,
      id: data.phid,
      parent: (_b = this._getDevice(data.parent)) !== null && _b !== void 0 ? _b : undefined,
      deviceID: data.deviceID,
      name: data.name
    };

    if (data.type === 'VINT') {
      devData = Object.assign(Object.assign({}, baseData), {
        type: 'VINT',
        vintDeviceProps: {
          vintProto: (_c = data.vintProto) !== null && _c !== void 0 ? _c : 1,
          suppSetSpeed: data.suppSetSpeed ? !!data.suppSetSpeed : false,
          suppAutoSetSpeed: data.suppSetSpeed ? !!data.suppSetSpeed : false,
          maxSpeed: (_d = data.maxSpeed) !== null && _d !== void 0 ? _d : 4294967295,
          commSpeed: (_e = data.commSpeed) !== null && _e !== void 0 ? _e : 4294967295,
          hubPort: data.hubPort,
          isHubPort: !!data.isHubPort,
          uniqueIndex: data.index
        }
      });
    } else if (devDef.c === DeviceClass.HUB) {
      let hubPortCnt;
      if (data.hubPortsInfo) hubPortCnt = data.hubPortsInfo.portProto.length;else hubPortCnt = devDef.cn ? devDef.cn[0] : 6;
      const hubPortProps = [];

      for (let i = 0; i < hubPortCnt; i++) {
        if (data.hubPortsInfo) {
          hubPortProps.push({
            portProto: data.hubPortsInfo.portProto[i],
            portSuppSetSpeed: !!data.hubPortsInfo.portSuppSetSpeed[i],
            portSuppAutoSetSpeed: !!data.hubPortsInfo.portSuppSetSpeed[i],
            portMaxSpeed: data.hubPortsInfo.portMaxSpeed[i]
          });
        } else {
          hubPortProps.push({
            portProto: 1,
            portSuppSetSpeed: false,
            portSuppAutoSetSpeed: false,
            portMaxSpeed: 100000
          });
        }
      }

      devData = Object.assign(Object.assign({}, baseData), {
        type: 'HUB',
        hubPortProps: hubPortProps
      });
    } else {
      devData = Object.assign(Object.assign({}, baseData), {
        type: 'OTHER'
      });
    }

    const dev = new NetworkDevice(this, devData);

    this._deviceAttach(dev);
  }
  /** @internal */


  _handleDeviceDetach(data) {
    const dev = this._getDevice(data.phid);

    if (dev) this._deviceDetach(dev);
  }
  /** @internal */


  _handleChannel(data) {
    const dev = this._devices.get(data.parent);

    if (!dev) throw new PhidgetError(ErrorCode.UNEXPECTED, 'missing channel parent');
    const chDef = dev.findPhidgetUniqueChannel(data.uniqueIndex);
    const chData = {
      id: data.chid,
      chDef: chDef,
      uniqueIndex: data.uniqueIndex,
      index: data.index,
      cpversion: data.version,
      name: data.name,
      class: data.class
    };
    const ch = new NetworkChannel(this, dev, chData);

    this._channelAttach(ch);
  }
  /** @internal */


  _handleBridgePacket(req, data) {
    const bp = new BridgePacket(this, data);
    let reply;

    try {
      bp.deliver();
    } catch (err) {
      if (err instanceof PhidgetError) {
        reply = {
          E: err.errorCode,
          R: err.message
        };
      } else {
        reply = {
          E: ErrorCode.UNEXPECTED,
          R: '' + err
        };
      }
    }

    if (!bp.isEvent()) this._sendReply(req.reqseq, req.type, req.stype, reply);
  }
  /** @internal */


  _handshake() {
    return new promise((resolve, reject) => {
      const pkt = {
        type: this._protocol,
        pmajor: NET_MAJOR,
        pminor: NET_MINOR
      };
      const json = JSON.stringify(pkt);
      const req = new Request(json.length, 0, 0, 0, 10, 10);

      this._send(req, json);

      this._onauthdata = HandShakeS0;

      function HandShakeS0(data) {
        if (data.result !== ErrorCode.SUCCESS) {
          reject(new PhidgetError(data.result, 'server rejected handshake'));
          return;
        }

        this._nonceC = this._createSalt(16);
        const pkt = {
          ident: NET_IDENT,
          nonceC: this._nonceC
        };
        const json = JSON.stringify(pkt);
        const req = new Request(json.length, 0, 0, 0, 10, 30);

        try {
          this._send(req, json);
        } catch (err) {
          reject(err);
          return;
        }

        this._onauthdata = AuthS0;
      }

      function AuthS0(data) {
        if (data.result !== ErrorCode.SUCCESS) {
          reject(new PhidgetError(data.result, 'authentication failed'));
          return;
        }

        if (this._nonceC != data.nonceC) {
          reject(new PhidgetError(ErrorCode.UNEXPECTED, 'Authentication Failure: nonce do not match (' + this._nonceC + ') vs (' + data.nonceC + ')'));
          return;
        }

        const challenge = NET_IDENT + this._passwd + this._nonceC + data.nonceS + data.salt;

        const proof = this._hash(challenge);

        const pkt = {
          nonceC: this._nonceC,
          nonceS: data.nonceS,
          proof: proof
        };
        const json = JSON.stringify(pkt);
        const req = new Request(json.length, 0, 0, 0, 10, 32);

        try {
          this._send(req, json);
        } catch (err) {
          reject(err);
          return;
        }

        this._onauthdata = AuthReply;
      }

      function AuthReply(data) {
        delete this._onauthdata;

        if (data.E != ErrorCode.SUCCESS) {
          if (this.onAuthenticationNeeded) {
            let pass;

            try {
              pass = this.onAuthenticationNeeded();
            } catch (err) {
              logEventException(err);
            }

            if (pass != undefined && typeof pass === 'string') {
              this._passwd = pass;
              setTimeout(() => {
                this.connect().then(() => resolve()).catch(err => reject(err));
              }, 10);
              return;
            }
          } else {
            logwarn("A password is required for this server. Handle the onAuthenticationNeeded event to return a password.");
          }

          reject(new PhidgetError(data.E, 'authentication failed: server rejected proof'));
          return;
        }

        this.connected = true;

        if (this.onConnect) {
          try {
            this.onConnect();
          } catch (err) {
            logEventException(err);
          }
        }

        if (this._connectionMaintainer != undefined) clearTimeout(this._connectionMaintainer);
        delete this._connectionMaintainer;

        this._maintainConnection();

        resolve();
      }
    });
  }

}
function DecodeUTF8(bytes) {
  let s = '';
  let i = 0;

  while (i < bytes.length) {
    let c = bytes[i++];

    if (c > 127) {
      if (c > 191 && c < 224) {
        if (i >= bytes.length) throw 'UTF-8 decode: incomplete 2-byte sequence';
        c = (c & 31) << 6 | bytes[i] & 63;
      } else if (c > 223 && c < 240) {
        if (i + 1 >= bytes.length) throw 'UTF-8 decode: incomplete 3-byte sequence';
        c = (c & 15) << 12 | (bytes[i] & 63) << 6 | bytes[++i] & 63;
      } else if (c > 239 && c < 248) {
        if (i + 2 >= bytes.length) throw 'UTF-8 decode: incomplete 4-byte sequence';
        c = (c & 7) << 18 | (bytes[i] & 63) << 12 | (bytes[++i] & 63) << 6 | bytes[++i] & 63;
      } else throw 'UTF-8 decode: unknown multibyte start 0x' + c.toString(16) + ' at index ' + (i - 1);

      ++i;
    }

    if (c <= 0xffff) s += String.fromCharCode(c);else if (c <= 0x10ffff) {
      c -= 0x10000;
      s += String.fromCharCode(c >> 10 | 0xd800);
      s += String.fromCharCode(c & 0x3FF | 0xdc00);
    } else throw 'UTF-8 decode: code point 0x' + c.toString(16) + ' exceeds UTF-16 reach';
  }

  return s;
}
function EncodeUTF8(s) {
  let i = 0;
  const bytes = new Uint8Array(s.length * 4);

  for (let ci = 0; ci != s.length; ci++) {
    let c = s.charCodeAt(ci);

    if (c < 128) {
      bytes[i++] = c;
      continue;
    }

    if (c < 2048) {
      bytes[i++] = c >> 6 | 192;
    } else {
      if (c > 0xd7ff && c < 0xdc00) {
        if (++ci == s.length) throw 'UTF-8 encode: incomplete surrogate pair';
        const c2 = s.charCodeAt(ci);
        if (c2 < 0xdc00 || c2 > 0xdfff) throw 'UTF-8 encode: second char code 0x' + c2.toString(16) + ' at index ' + ci + ' in surrogate pair out of range';
        c = 0x10000 + ((c & 0x03ff) << 10) + (c2 & 0x03ff);
        bytes[i++] = c >> 18 | 240;
        bytes[i++] = c >> 12 & 63 | 128;
      } else {
        bytes[i++] = c >> 12 | 224;
      }

      bytes[i++] = c >> 6 & 63 | 128;
    }

    bytes[i++] = c & 63 | 128;
  }

  return bytes.subarray(0, i);
}

/**
 * @public
 */

class NetworkConnection extends NetworkConnectionBase {
  constructor(optsOrUriOrPort, optsOrHostname, opts) {
    super(optsOrUriOrPort, optsOrHostname, opts);
    if (this._port === 0) this._port = 8989;
    if (this._uri === '') this._uri = 'ws://' + this._hostname + ':' + this._port + '/phidgets';
    this._protocol = "www";
  }
  /**
   * Connects to the server. Once the initial connection has succeeded,
   * it will be maintained until close is called.
   *
   * It retryOnFail is true, the initial connect will retry on failure until a connection is established,
   * and connect() will not resolve until the connection is established.
   * Thisis allows connect to be called before the network server is running.
   *
   * If retryOnFail is false (the default), connect() will throw an exception
   * if the connection can not be established.
   *
   * @param retryOnFail - Keep trying to connect if the initial attempt fails. Defaults to false.
   */


  connect() {
    let retryOnFail = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return new promise((resolve, reject) => {
      this._opened = true;

      if (this.connected === true) {
        resolve();
        return;
      }

      if (retryOnFail) {
        this._resolveConnect = resolve;

        this._maintainConnection();

        return;
      }

      if (this._ws) {
        try {
          this._ws.close();
        } catch (e) {}

        delete this._ws;
      }

      try {
        let hasConnected = false;
        this._ws = new WebSocket(this._uri);
        this._ws.binaryType = 'arraybuffer';

        this._ws.onopen = () => {
          hasConnected = true;

          this._handshake().then(() => {
            if (this._resolveConnect) {
              this._resolveConnect();

              delete this._resolveConnect;
            }

            if (this._connectTimeout !== undefined) {
              clearTimeout(this._connectTimeout);
              delete this._connectTimeout;
            }

            resolve();
          }).catch(err => {
            if (this._connectTimeout !== undefined) {
              clearTimeout(this._connectTimeout);
              delete this._connectTimeout;
            }

            reject(err);
          });
        };

        this._ws.onclose = () => {
          this._doclose();
        };

        this._ws.onmessage = event => {
          try {
            const array = new Uint8Array(event.data);
            const req = new Request(array);
            let msg;

            if (req.len > 0) {
              const tmp1 = new Uint8Array(event.data, req.hdrlen, req.len);
              msg = DecodeUTF8(tmp1);
            }

            this._onmessage(msg, req);
          } catch (e) {
            if (this.onError) {
              let msg = "Error handling data from server";
              if (typeof e === 'string') msg = msg + ": " + e;else if (e instanceof Error) msg = msg + ": " + e.message;
              msg = msg + ". Resetting connection.";

              try {
                this.onError(ErrorCode.UNEXPECTED, msg);
              } catch (err) {
                logEventException(err);
              }

              loginfo(msg);
            } else {
              logerr("Error handling data from server - resetting connection", e);
            }

            this._doclose();
          }
        };

        this._ws.onerror = () => {
          const msg = "websocket error - check that server is available";

          this._doclose();

          if (!hasConnected) {
            reject(new PhidgetError(ErrorCode.CONNECTION_REFUSED, msg));
            return;
          }

          if (this.onError) {
            try {
              this.onError(ErrorCode.CONNECTION_REFUSED, msg);
            } catch (err) {
              logEventException(err);
            }

            loginfo(msg);
          } else {
            logerr(msg);
          }
        };

        this._connectTimeout = setTimeout(() => {
          delete this._connectTimeout;

          this._doclose();

          reject(new PhidgetError(ErrorCode.TIMEOUT, "Connection Timed Out"));
        }, this._timeout);
      } catch (err) {
        if (this._connectTimeout !== undefined) {
          clearTimeout(this._connectTimeout);
          delete this._connectTimeout;
        }

        reject(new PhidgetError(ErrorCode.UNEXPECTED, 'Error in connect', err));
      }
    });
  }
  /** @internal */


  _closesocket() {
    if (this.connected === true) {
      if (this.onDisconnect) {
        try {
          this.onDisconnect();
        } catch (err) {
          logEventException(err);
        }
      }
    }

    this.connected = false;

    if (this._connectTimeout !== undefined) {
      clearTimeout(this._connectTimeout);
      delete this._connectTimeout;
    }

    if (this._ws != undefined) {
      try {
        this._ws.onopen = null;
        this._ws.onclose = null;
        this._ws.onmessage = null;
        this._ws.onerror = null;

        this._ws.close();
      } catch (_a) {}

      delete this._ws;
    }

    this._generation++;
  }
  /** @internal */


  _send(req, data) {
    try {
      if (!this._ws || this._ws.readyState != WebSocket.OPEN) throw new PhidgetError(ErrorCode.UNEXPECTED, 'invalid websocket state');

      if (data.length > 0) {
        const dataArr = EncodeUTF8(data);
        req.len = dataArr.length;

        this._ws.send(req.buffer);

        this._ws.send(dataArr);
      } else {
        this._ws.send(req.buffer);
      }
    } catch (e) {
      let msg;
      if (typeof e === 'string') msg = e;else if (e instanceof Error) msg = e.message;else msg = 'Error in connect';
      throw new PhidgetError(ErrorCode.UNEXPECTED, msg);
    }
  }
  /** @internal */


  _hash(challenge) {
    const digest = sha256hash(challenge);
    let bin = '';

    for (let i = 0; i < digest.length; i += 2) {
      const b = parseInt(digest.substring(i, i + 2), 16);
      bin += String.fromCharCode(b);
    }

    return btoa(bin);
  }
  /** @internal */


  _createSalt(len) {
    const buf = new Uint8Array(len);
    crypto.getRandomValues(buf);
    return btoa(String.fromCharCode(...buf)).substring(len);
  }

}

class VoltageRatioInputBase extends PhidgetChannel {
  constructor(ch) {
    super(ch);
    this.onVoltageRatioChange = null;
    this.onSensorChange = null;
    this._class = ChannelClass.VOLTAGE_RATIO_INPUT;
    this.name = "VoltageRatioInput";
    this.data = this._initData();
  }
  /** @internal */


  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 56:
        this.data.bridgeEnabled = bp.entries[0].v;

        this._FIREPropertyChange('BridgeEnabled', bp);

        break;

      case 45:
        this.data.bridgeGain = bp.entries[0].v;

        this._FIREPropertyChange('BridgeGain', bp);

        break;

      case 54:
        if (bp.entryCount > 1) this.data.dataInterval = bp.entries[1].v;else this.data.dataInterval = bp.entries[0].v;

        this._FIREPropertyChange('DataInterval', bp);

        this._FIREPropertyChange('DataRate', bp);

        break;

      case 79:
        this.data.sensorType = bp.entries[0].v;

        this._FIREPropertyChange('SensorType', bp);

        break;

      case 122:
        this.data.sensorValueChangeTrigger = bp.entries[0].v;

        this._FIREPropertyChange('SensorValueChangeTrigger', bp);

        break;

      case 46:
        this.data.voltageRatioChangeTrigger = bp.entries[0].v;

        this._FIREPropertyChange('VoltageRatioChangeTrigger', bp);

        break;

      case 115:
        {
          this.data.sensorValue = bp.entries[0].v;
          const sensorUnit = {
            unit: bp.entries["UnitInfo.unit"].v,
            name: bp.entries["UnitInfo.name"].v,
            symbol: bp.entries["UnitInfo.symbol"].v
          };
          this.data.sensorUnit = sensorUnit;

          if (this._isAttachedDone && this.onSensorChange) {
            try {
              this.onSensorChange(this.data.sensorValue, this.data.sensorUnit);
            } catch (err) {
              logEventException(err);
            }
          }

          break;
        }

      default:
        throw new PhidgetError(ErrorCode.INVALID_PACKET, "Unsupported bridge packet: 0x" + bp.vpkt.toString(16));
    }
  }
  /** @internal */


  _initData() {
    return {
      bridgeEnabled: 2,
      bridgeGain: 2147483647,
      dataInterval: 1e+300,
      minDataInterval: 4294967295,
      maxDataInterval: 4294967295,
      minDataRate: 1e+300,
      maxDataRate: 1e+300,
      sensorType: 2147483647,
      sensorUnit: null,
      sensorValue: 1e+300,
      voltageRatio: 1e+300,
      minVoltageRatio: 1e+300,
      maxVoltageRatio: 1e+300,
      voltageRatioChangeTrigger: 1e+300,
      minVoltageRatioChangeTrigger: 1e+300,
      maxVoltageRatioChangeTrigger: 1e+300,
      sensorValueChangeTrigger: 1e+300
    };
  }
  /** @internal */


  _initAfterOpen() {}
  /** @internal */


  async _setDefaults() {}
  /** @internal */


  _hasInitialState() {
    return true;
  }
  /** @internal */


  _fireInitialEvents() {}
  /**
   * Enable power to the input and start collecting data by setting `bridgeEnabled` to true.
   * @throws {@link PhidgetError}
   */


  get bridgeEnabled() {
    return this.getBridgeEnabled();
  }
  /**
   * Choose a `bridgeGain` that best suits your application.
   *
   * *   For more information about the range and accuracy of each `bridgeGain` to decide which best suits your application, see your device's User Guide.
   * @throws {@link PhidgetError}
   */


  get bridgeGain() {
    return this.getBridgeGain();
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between events can also be affected by the change trigger.
   * @throws {@link PhidgetError}
   */


  get dataInterval() {
    return this.getDataInterval();
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataInterval() {
    return this.getMinDataInterval();
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataInterval() {
    return this.getMaxDataInterval();
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */


  get dataRate() {
    return this.getDataRate();
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataRate() {
    return this.getMinDataRate();
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataRate() {
    return this.getMaxDataRate();
  }
  /**
   * We sell a variety of analog sensors that do not have their own API, they simply output a voltage that can be converted to a digital value using a specific formula. By matching the `sensorType` to your analog sensor, the correct formula will automatically be applied to data when you get the `sensorValue` or subscribe to the `SensorChange` event.
   *
   * *   The `SensorChange` event has its own change trigger associated with it: `sensorValueChangeTrigger`.
   * *   Any data from getting the `sensorValue` or subscribing to the `SensorChange` event will have a `sensorUnit` associated with it.
   *
   * **Note:** Unlike other properties such as `Phidget.deviceSerialNumber` or `Phidget.channel`, `sensorType` is set after the device is opened, not before.
   * @throws {@link PhidgetError}
   */


  get sensorType() {
    return this.getSensorType();
  }
  /**
   * The unit of measurement that applies to the sensor values of the `sensorType` that has been selected.
   *
   * *   Helps keep track of the type of information being calculated from the voltage ratio input.
   * @throws {@link PhidgetError}
   */


  get sensorUnit() {
    return this.getSensorUnit();
  }
  /**
   * The most recent sensor value that the channel has reported.
   *
   * *   Use `sensorUnit` to get the measurement units that are associated with the `sensorValue`
   * @throws {@link PhidgetError}
   */


  get sensorValue() {
    return this.getSensorValue();
  }
  /**
   * The channel will not issue a `SensorChange` event until the sensor value has changed by the amount specified by the `sensorValueChangeTrigger`.
   *
   * *   Setting the `sensorValueChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   */


  get sensorValueChangeTrigger() {
    return this.getSensorValueChangeTrigger();
  }
  /**
   * The most recent voltage ratio value that the channel has reported.
   *
   * *   This value will always be between `minVoltageRatio` and `maxVoltageRatio`.
   * @throws {@link PhidgetError}
   */


  get voltageRatio() {
    return this.getVoltageRatio();
  }
  /**
   * The minimum value the `VoltageRatioChange` event will report.
   * @throws {@link PhidgetError}
   */


  get minVoltageRatio() {
    return this.getMinVoltageRatio();
  }
  /**
   * The maximum value the `VoltageRatioChange` event will report.
   * @throws {@link PhidgetError}
   */


  get maxVoltageRatio() {
    return this.getMaxVoltageRatio();
  }
  /**
   * The channel will not issue a `VoltageRatioChange` event until the voltage ratio value has changed by the amount specified by the `voltageRatioChangeTrigger`.
   *
   * *   Setting the `voltageRatioChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   */


  get voltageRatioChangeTrigger() {
    return this.getVoltageRatioChangeTrigger();
  }
  /**
   * The minimum value that `voltageRatioChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */


  get minVoltageRatioChangeTrigger() {
    return this.getMinVoltageRatioChangeTrigger();
  }
  /**
   * The maximum value that `voltageRatioChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxVoltageRatioChangeTrigger() {
    return this.getMaxVoltageRatioChangeTrigger();
  }
  /**
   * Enable power to the input and start collecting data by setting `bridgeEnabled` to true.
   * @returns The enabled value
   * @throws {@link PhidgetError}
   */


  getBridgeEnabled() {
    this._assertOpen();

    if (this.data.bridgeEnabled === 2) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return !!this.data.bridgeEnabled;
  }
  /**
   * Enable power to the input and start collecting data by setting `bridgeEnabled` to true.
   * @throws {@link PhidgetError}
   * @param bridgeEnabled - The enabled value
   */


  async setBridgeEnabled(bridgeEnabled) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: bridgeEnabled ? 1 : 0
    });
    await bp.send(this._ch, 56);
  }
  /**
   * Choose a `bridgeGain` that best suits your application.
   *
   * *   For more information about the range and accuracy of each `bridgeGain` to decide which best suits your application, see your device's User Guide.
   * @returns The bridge gain value
   * @throws {@link PhidgetError}
   */


  getBridgeGain() {
    this._assertOpen();

    if (this.data.bridgeGain === 2147483647) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.bridgeGain;
  }
  /**
   * Choose a `bridgeGain` that best suits your application.
   *
   * *   For more information about the range and accuracy of each `bridgeGain` to decide which best suits your application, see your device's User Guide.
   * @throws {@link PhidgetError}
   * @param bridgeGain - The bridge gain value
   */


  async setBridgeGain(bridgeGain) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: bridgeGain
    });
    await bp.send(this._ch, 45);
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between events can also be affected by the change trigger.
   * @returns The data interval for the channel
   * @throws {@link PhidgetError}
   */


  getDataInterval() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.dataInterval;
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between events can also be affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval for the channel
   */


  async setDataInterval(dataInterval) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: dataInterval
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getMinDataInterval() {
    this._assertOpen();

    if (this.data.minDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataInterval;
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getMaxDataInterval() {
    this._assertOpen();

    if (this.data.maxDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */


  getDataRate() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return 1000.0 / this.data.dataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */


  async setDataRate(dataRate) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: Math.round(1000.0 / dataRate)
    });
    bp.set({
      name: "1",
      type: "g",
      value: 1000.0 / dataRate
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMinDataRate() {
    this._assertOpen();

    if (this.data.minDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataRate;
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMaxDataRate() {
    this._assertOpen();

    if (this.data.maxDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataRate;
  }
  /**
   * We sell a variety of analog sensors that do not have their own API, they simply output a voltage that can be converted to a digital value using a specific formula. By matching the `sensorType` to your analog sensor, the correct formula will automatically be applied to data when you get the `sensorValue` or subscribe to the `SensorChange` event.
   *
   * *   The `SensorChange` event has its own change trigger associated with it: `sensorValueChangeTrigger`.
   * *   Any data from getting the `sensorValue` or subscribing to the `SensorChange` event will have a `sensorUnit` associated with it.
   *
   * **Note:** Unlike other properties such as `Phidget.deviceSerialNumber` or `Phidget.channel`, `sensorType` is set after the device is opened, not before.
   * @returns The sensor type value
   * @throws {@link PhidgetError}
   */


  getSensorType() {
    this._assertOpen();

    if (this.data.sensorType === 2147483647) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.sensorType;
  }
  /**
   * We sell a variety of analog sensors that do not have their own API, they simply output a voltage that can be converted to a digital value using a specific formula. By matching the `sensorType` to your analog sensor, the correct formula will automatically be applied to data when you get the `sensorValue` or subscribe to the `SensorChange` event.
   *
   * *   The `SensorChange` event has its own change trigger associated with it: `sensorValueChangeTrigger`.
   * *   Any data from getting the `sensorValue` or subscribing to the `SensorChange` event will have a `sensorUnit` associated with it.
   *
   * **Note:** Unlike other properties such as `Phidget.deviceSerialNumber` or `Phidget.channel`, `sensorType` is set after the device is opened, not before.
   * @throws {@link PhidgetError}
   * @param sensorType - The sensor type value
   */


  async setSensorType(sensorType) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: sensorType
    });
    await bp.send(this._ch, 79);
  }
  /**
   * The unit of measurement that applies to the sensor values of the `sensorType` that has been selected.
   *
   * *   Helps keep track of the type of information being calculated from the voltage ratio input.
   * @returns The sensor unit information corresponding to the `sensorValue`.
   * @throws {@link PhidgetError}
   */


  getSensorUnit() {
    this._assertOpen();

    if (this.data.sensorUnit === null) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.sensorUnit;
  }
  /**
   * The most recent sensor value that the channel has reported.
   *
   * *   Use `sensorUnit` to get the measurement units that are associated with the `sensorValue`
   * @returns The sensor value
   * @throws {@link PhidgetError}
   */


  getSensorValue() {
    this._assertOpen();

    if (this.data.sensorValue === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.sensorValue;
  }
  /**
   * The channel will not issue a `SensorChange` event until the sensor value has changed by the amount specified by the `sensorValueChangeTrigger`.
   *
   * *   Setting the `sensorValueChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */


  getSensorValueChangeTrigger() {
    this._assertOpen();

    if (this.data.sensorValueChangeTrigger === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.sensorValueChangeTrigger;
  }
  /**
   * The channel will not issue a `SensorChange` event until the sensor value has changed by the amount specified by the `sensorValueChangeTrigger`.
   *
   * *   Setting the `sensorValueChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   * @param sensorValueChangeTrigger - The change trigger value
   */


  async setSensorValueChangeTrigger(sensorValueChangeTrigger) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: sensorValueChangeTrigger
    });
    await bp.send(this._ch, 122);
  }
  /**
   * The most recent voltage ratio value that the channel has reported.
   *
   * *   This value will always be between `minVoltageRatio` and `maxVoltageRatio`.
   * @returns The voltage ratio value
   * @throws {@link PhidgetError}
   */


  getVoltageRatio() {
    this._assertOpen();

    if (this.data.voltageRatio === 1e+300 || Number.isNaN(this.data.voltageRatio)) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    if (this.data.voltageRatio > this.data.maxVoltageRatio) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE_HIGH);
    if (this.data.voltageRatio < this.data.minVoltageRatio) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE_LOW);
    return this.data.voltageRatio;
  }
  /**
   * The minimum value the `VoltageRatioChange` event will report.
   * @returns The voltage ratio value
   * @throws {@link PhidgetError}
   */


  getMinVoltageRatio() {
    this._assertOpen();

    if (this.data.minVoltageRatio === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minVoltageRatio;
  }
  /**
   * The maximum value the `VoltageRatioChange` event will report.
   * @returns The voltage ratio value
   * @throws {@link PhidgetError}
   */


  getMaxVoltageRatio() {
    this._assertOpen();

    if (this.data.maxVoltageRatio === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxVoltageRatio;
  }
  /**
   * The channel will not issue a `VoltageRatioChange` event until the voltage ratio value has changed by the amount specified by the `voltageRatioChangeTrigger`.
   *
   * *   Setting the `voltageRatioChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */


  getVoltageRatioChangeTrigger() {
    this._assertOpen();

    if (this.data.voltageRatioChangeTrigger === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.voltageRatioChangeTrigger;
  }
  /**
   * The channel will not issue a `VoltageRatioChange` event until the voltage ratio value has changed by the amount specified by the `voltageRatioChangeTrigger`.
   *
   * *   Setting the `voltageRatioChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   * @param voltageRatioChangeTrigger - The change trigger value
   */


  async setVoltageRatioChangeTrigger(voltageRatioChangeTrigger) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: voltageRatioChangeTrigger
    });
    await bp.send(this._ch, 46);
  }
  /**
   * The minimum value that `voltageRatioChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */


  getMinVoltageRatioChangeTrigger() {
    this._assertOpen();

    if (this.data.minVoltageRatioChangeTrigger === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minVoltageRatioChangeTrigger;
  }
  /**
   * The maximum value that `voltageRatioChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */


  getMaxVoltageRatioChangeTrigger() {
    this._assertOpen();

    if (this.data.maxVoltageRatioChangeTrigger === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxVoltageRatioChangeTrigger;
  }

}

const Units = [{
  unit: Unit.NONE,
  name: "none",
  symbol: ""
}, {
  unit: Unit.BOOLEAN,
  name: "boolean",
  symbol: ""
}, {
  unit: Unit.PERCENT,
  name: "percent",
  symbol: "%"
}, {
  unit: Unit.DECIBEL,
  name: "decibel",
  symbol: "dB"
}, {
  unit: Unit.MILLIMETER,
  name: "millimeter",
  symbol: "mm"
}, {
  unit: Unit.CENTIMETER,
  name: "centimeter",
  symbol: "cm"
}, {
  unit: Unit.METER,
  name: "meter",
  symbol: "m"
}, {
  unit: Unit.GRAM,
  name: "gram",
  symbol: "g"
}, {
  unit: Unit.KILOGRAM,
  name: "kilogram",
  symbol: "kg"
}, {
  unit: Unit.MILLIAMPERE,
  name: "milliampere",
  symbol: "mA"
}, {
  unit: Unit.AMPERE,
  name: "ampere",
  symbol: "A"
}, {
  unit: Unit.KILOPASCAL,
  name: "kilopascal",
  symbol: "kPa"
}, {
  unit: Unit.VOLT,
  name: "volt",
  symbol: "V"
}, {
  unit: Unit.DEGREE_CELCIUS,
  name: "degree Celsius",
  symbol: "\xB0C"
}, {
  unit: Unit.LUX,
  name: "lux",
  symbol: "lx"
}, {
  unit: Unit.GAUSS,
  name: "gauss",
  symbol: "G"
}, {
  unit: Unit.PH,
  name: "pH",
  symbol: ""
}, {
  unit: Unit.WATT,
  name: "watt",
  symbol: "W"
}];

function RoundDouble(num, decimals) {
  return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

/** @public */

class VoltageRatioInput extends VoltageRatioInputBase {
  /** @internal */
  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 10:
        if (bp.entryCount > 1) this.data.dataInterval = bp.getNumber(1);else this.data.dataInterval = bp.getNumber(0);

        this._FIREPropertyChange('DataInterval');

        this._FIREPropertyChange('DataRate');

        break;

      case 27:
        this.data.minDataInterval = bp.getNumber(0);

        this._FIREPropertyChange('MinDataInterval');

        break;

      case 79:
        super._bridgeInput(bp);

        this._bangSensorVoltage();

        break;

      case 102:
        {
          this.data.voltageRatio = bp.getNumber('0');

          const sentSensorEvent = this._bangSensorVoltage(true);

          if (sentSensorEvent && this._ch.conn._isRemote) throw new PhidgetError(ErrorCode.UNSUPPORTED);
          break;
        }

      case 45:
        super._bridgeInput(bp);

        switch (this._ch.chDef.uid) {
          case 97:
            switch (this.data.bridgeGain) {
              case BridgeGain.GAIN_1X:
                this.data.maxVoltageRatio = 0.85;
                this.data.minVoltageRatio = -0.85;
                break;

              case BridgeGain.GAIN_8X:
                this.data.maxVoltageRatio = 1.0 / 8;
                this.data.minVoltageRatio = -1.0 / 8;
                break;

              case BridgeGain.GAIN_16X:
                this.data.maxVoltageRatio = 1.0 / 16;
                this.data.minVoltageRatio = -1.0 / 16;
                break;

              case BridgeGain.GAIN_32X:
                this.data.maxVoltageRatio = 1.0 / 32;
                this.data.minVoltageRatio = -1.0 / 32;
                break;

              case BridgeGain.GAIN_64X:
                this.data.maxVoltageRatio = 1.0 / 64;
                this.data.minVoltageRatio = -1.0 / 64;
                break;

              case BridgeGain.GAIN_128X:
                this.data.maxVoltageRatio = 1.0 / 128;
                this.data.minVoltageRatio = -1.0 / 128;
                break;
            }

            this._FIREPropertyChange('MinVoltageRatio', bp);

            this._FIREPropertyChange('MaxVoltageRatio', bp);

            break;
        }

        break;

      default:
        super._bridgeInput(bp);

        break;
    }
  }
  /** @internal */


  _errorHandler(code) {
    switch (code) {
      case ErrorEventCode.SATURATION:
        this.data.voltageRatio = 1e+300;
        this.data.sensorValue = 1e+300;
        this._gotVoltageRatioChangeErrorEvent = true;
        break;
    }
  }
  /** @internal */


  _initAfterOpen() {
    super._initAfterOpen();

    if (this.data.sensorType === 2147483647) this.data.sensorType = VoltageRatioSensorType.VOLTAGE_RATIO;
    this.data.sensorUnit = this._getVoltageRatioSensorUnit(this.data.sensorType);
    this.data.sensorValue = this._getVoltageRatioSensorValue(this.data.voltageRatio, this.data.sensorType);
  }
  /** @internal */


  _hasInitialState() {
    if (this.data.voltageRatio == 1e+300 && !this._gotVoltageRatioChangeErrorEvent) return false;
    return super._hasInitialState();
  }
  /** @internal */


  _fireInitialEvents() {
    if (this.data.sensorType != VoltageRatioSensorType.VOLTAGE_RATIO) {
      if (this.data.sensorValue != 1e+300 && this.data.sensorUnit != null) if (this.onSensorChange) {
        try {
          this.onSensorChange(this.data.sensorValue, this.data.sensorUnit);
        } catch (err) {
          logEventException(err);
        }
      }
    } else {
      if (this.data.voltageRatio != 1e+300) if (this.onVoltageRatioChange) {
        try {
          this.onVoltageRatioChange(this.data.voltageRatio);
        } catch (err) {
          logEventException(err);
        }
      }
    }

    super._fireInitialEvents();
  }
  /** @internal */


  _bangSensorVoltage() {
    let includeVoltage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    let sensorValue;
    let unitInfo;
    let sentSensorEvent = false;
    const bp = new BridgePacket();

    if (this._ch.supportedBridgePacket(115) && this._ch.conn._isLocal && this.data.sensorType !== VoltageRatioSensorType.VOLTAGE_RATIO) {
      sensorValue = this._getVoltageRatioSensorValue(this.data.voltageRatio, this.data.sensorType);

      if (!this._getSensorValueInRange(sensorValue, this.data.sensorType)) {
        this.data.sensorValue = 1e+300;

        if (this._isAttachedDone) {
          bp.set({
            name: '0',
            type: 'd',
            value: ErrorEventCode.OUT_OF_RANGE
          });
          bp.set({
            name: '1',
            type: 's',
            value: 'Sensor value is ouside the valid range for this sensor.'
          });

          this._ch.sendErrorEvent(bp);
        }
      } else if (this.data.sensorValue === 1e+300 || Math.abs(sensorValue - this.data.sensorValue) >= this.data.sensorValueChangeTrigger) {
        this.data.sensorValue = sensorValue;

        if (this._isAttachedDone) {
          unitInfo = this._getVoltageRatioSensorUnit(this.data.sensorType);
          bp.set({
            name: '0',
            type: 'g',
            value: sensorValue
          });
          bp.set({
            name: 'UnitInfo.unit',
            type: 'g',
            value: unitInfo.unit
          });
          bp.set({
            name: 'UnitInfo.name',
            type: 's',
            value: unitInfo.name
          });
          bp.set({
            name: 'UnitInfo.symbol',
            type: 's',
            value: unitInfo.symbol
          });
          bp.sendToChannel(this._ch, 115);
        }
      }

      sentSensorEvent = true;
    } else if (includeVoltage) {
      this.data.sensorUnit = this._getVoltageRatioSensorUnit(this.data.sensorType);
      this.data.sensorValue = this._getVoltageRatioSensorValue(this.data.voltageRatio, this.data.sensorType);

      if (this._isAttachedDone && this.onVoltageRatioChange) {
        try {
          this.onVoltageRatioChange(this.data.voltageRatio);
        } catch (err) {
          logEventException(err);
        }
      }
    }

    return sentSensorEvent;
  }
  /** @internal */


  _getVoltageRatioSensorValue(voltageRatio, sensorType) {
    if (voltageRatio === 1e+300) {
      return 1e+300;
    }

    switch (sensorType) {
      case VoltageRatioSensorType.PN_1101_SHARP2D120X:
      case VoltageRatioSensorType.PN_3520:
        return RoundDouble(2.076 / (voltageRatio - 0.011), 2);

      case VoltageRatioSensorType.PN_1101_SHARP2Y0A21:
      case VoltageRatioSensorType.PN_3521:
        return RoundDouble(4.8 / (voltageRatio - 0.02), 2);

      case VoltageRatioSensorType.PN_1101_SHARP2Y0A02:
      case VoltageRatioSensorType.PN_3522:
        return RoundDouble(9.462 / (voltageRatio - 0.01692), 2);

      case VoltageRatioSensorType.PN_1102:
        return voltageRatio < 0.4 ? 1 : 0;

      case VoltageRatioSensorType.PN_1103:
        return voltageRatio < 0.1 ? 1 : 0;

      case VoltageRatioSensorType.PN_1104:
        return RoundDouble(voltageRatio * 2 - 1, 5);

      case VoltageRatioSensorType.PN_1105:
        return voltageRatio;

      case VoltageRatioSensorType.PN_1106:
        return voltageRatio;

      case VoltageRatioSensorType.PN_1107:
        return RoundDouble(voltageRatio * 190.6 - 40.2, 3);

      case VoltageRatioSensorType.PN_1108:
        return RoundDouble((0.5 - voltageRatio) * 1000, 2);

      case VoltageRatioSensorType.PN_1109:
        return voltageRatio;

      case VoltageRatioSensorType.PN_1110:
        return voltageRatio < 0.5 ? 1 : 0;

      case VoltageRatioSensorType.PN_1111:
        return RoundDouble(voltageRatio * 2 - 1, 5);

      case VoltageRatioSensorType.PN_1112:
        return voltageRatio;

      case VoltageRatioSensorType.PN_1113:
        return RoundDouble(voltageRatio * 2 - 1, 5);

      case VoltageRatioSensorType.PN_1115:
        return RoundDouble(voltageRatio / 0.004 + 10, 3);

      case VoltageRatioSensorType.PN_1116:
        return voltageRatio;

      case VoltageRatioSensorType.PN_1118_AC:
        return RoundDouble(voltageRatio * 69.38, 3);

      case VoltageRatioSensorType.PN_1118_DC:
        return RoundDouble(voltageRatio / 0.008 - 62.5, 3);

      case VoltageRatioSensorType.PN_1119_AC:
        return RoundDouble(voltageRatio * 27.75, 4);

      case VoltageRatioSensorType.PN_1119_DC:
        return RoundDouble(voltageRatio / 0.02 - 25, 4);

      case VoltageRatioSensorType.PN_1120:
        return voltageRatio;

      case VoltageRatioSensorType.PN_1121:
        return voltageRatio;

      case VoltageRatioSensorType.PN_1122_AC:
        return RoundDouble(voltageRatio * 42.04, 3);

      case VoltageRatioSensorType.PN_1122_DC:
        return RoundDouble(voltageRatio / 0.0132 - 37.8787, 3);

      case VoltageRatioSensorType.PN_1124:
      case VoltageRatioSensorType.PN_1125_TEMPERATURE:
        return RoundDouble(voltageRatio * 222.2 - 61.111, 3);

      case VoltageRatioSensorType.PN_1125_HUMIDITY:
        return RoundDouble(voltageRatio * 190.6 - 40.2, 3);

      case VoltageRatioSensorType.PN_1126:
        return RoundDouble(voltageRatio / 0.018 - 27.7777, 3);

      case VoltageRatioSensorType.PN_1128:
        return RoundDouble(voltageRatio * 1296, 2);

      case VoltageRatioSensorType.PN_1129:
        return voltageRatio > 0.5 ? 1 : 0;

      case VoltageRatioSensorType.PN_1131:
        return RoundDouble(15.311 * Math.exp(voltageRatio * 5.199), 2);

      case VoltageRatioSensorType.PN_1134:
        return voltageRatio;

      case VoltageRatioSensorType.PN_1136:
        return RoundDouble(voltageRatio / 0.2 - 2.5, 4);

      case VoltageRatioSensorType.PN_1137:
        return RoundDouble(voltageRatio / 0.057143 - 8.75, 4);

      case VoltageRatioSensorType.PN_1138:
        return RoundDouble(voltageRatio / 0.018 - 2.222, 3);

      case VoltageRatioSensorType.PN_1139:
        return RoundDouble(voltageRatio / 0.009 - 4.444, 3);

      case VoltageRatioSensorType.PN_1140:
        return RoundDouble(voltageRatio / 0.002421 + 3.478, 2);

      case VoltageRatioSensorType.PN_1141:
        return RoundDouble(voltageRatio / 0.0092 + 10.652, 2);

      case VoltageRatioSensorType.PN_1146:
        return RoundDouble(1.3927 * Math.exp(1.967 * voltageRatio), 2);

      case VoltageRatioSensorType.PN_3120:
        return RoundDouble(voltageRatio / 0.15432 - 0.647989, 4);

      case VoltageRatioSensorType.PN_3121:
        return RoundDouble(voltageRatio / 0.0617295 - 1.619971, 4);

      case VoltageRatioSensorType.PN_3122:
        return RoundDouble(voltageRatio / 0.0308647 - 3.239943, 3);

      case VoltageRatioSensorType.PN_3123:
        return RoundDouble(voltageRatio / 0.0154324 - 6.479886, 3);

      case VoltageRatioSensorType.PN_3130:
        return RoundDouble(voltageRatio * 190.6 - 40.2, 3);

      case VoltageRatioSensorType.VOLTAGE_RATIO:
      default:
        return voltageRatio;
    }
  }
  /** @internal */


  _getSensorValueInRange(sensorValue, sensorType) {
    if (sensorValue === 1e+300) {
      return false;
    }

    switch (sensorType) {
      case VoltageRatioSensorType.PN_1101_SHARP2D120X:
      case VoltageRatioSensorType.PN_3520:
        return sensorValue >= 4.0 && sensorValue <= 30.0;

      case VoltageRatioSensorType.PN_1101_SHARP2Y0A21:
      case VoltageRatioSensorType.PN_3521:
        return sensorValue >= 10.0 && sensorValue <= 80.0;

      case VoltageRatioSensorType.PN_1101_SHARP2Y0A02:
      case VoltageRatioSensorType.PN_3522:
        return sensorValue >= 20.0 && sensorValue <= 150.0;

      case VoltageRatioSensorType.PN_1102:
        return true;

      case VoltageRatioSensorType.PN_1103:
        return true;

      case VoltageRatioSensorType.PN_1104:
        return true;

      case VoltageRatioSensorType.PN_1105:
        return true;

      case VoltageRatioSensorType.PN_1106:
        return true;

      case VoltageRatioSensorType.PN_1107:
        return sensorValue >= 0.0 && sensorValue <= 100.0;

      case VoltageRatioSensorType.PN_1108:
        return sensorValue >= -500.0 && sensorValue <= 500.0;

      case VoltageRatioSensorType.PN_1109:
        return true;

      case VoltageRatioSensorType.PN_1110:
        return true;

      case VoltageRatioSensorType.PN_1111:
        return true;

      case VoltageRatioSensorType.PN_1112:
        return true;

      case VoltageRatioSensorType.PN_1113:
        return sensorValue >= -1.0 && sensorValue <= 1.0;

      case VoltageRatioSensorType.PN_1115:
        return sensorValue >= 20.0 && sensorValue <= 250.0;

      case VoltageRatioSensorType.PN_1116:
        return true;

      case VoltageRatioSensorType.PN_1118_AC:
        return sensorValue >= 0.0 && sensorValue <= 50.0;

      case VoltageRatioSensorType.PN_1118_DC:
        return sensorValue >= -50.0 && sensorValue <= 50.0;

      case VoltageRatioSensorType.PN_1119_AC:
        return sensorValue >= 0.0 && sensorValue <= 20.0;

      case VoltageRatioSensorType.PN_1119_DC:
        return sensorValue >= -20.0 && sensorValue <= 20.0;

      case VoltageRatioSensorType.PN_1120:
        return true;

      case VoltageRatioSensorType.PN_1121:
        return true;

      case VoltageRatioSensorType.PN_1122_AC:
        return sensorValue >= 0.0 && sensorValue <= 30.0;

      case VoltageRatioSensorType.PN_1122_DC:
        return sensorValue >= -30.0 && sensorValue <= 30.0;

      case VoltageRatioSensorType.PN_1124:
      case VoltageRatioSensorType.PN_1125_TEMPERATURE:
        return sensorValue >= -50.0 && sensorValue <= 150.0;

      case VoltageRatioSensorType.PN_1125_HUMIDITY:
        return sensorValue >= 0.0 && sensorValue <= 100.0;

      case VoltageRatioSensorType.PN_1126:
        return sensorValue >= -25.0 && sensorValue <= 25.0;

      case VoltageRatioSensorType.PN_1128:
        return sensorValue >= 15.24 && sensorValue <= 6500.0;

      case VoltageRatioSensorType.PN_1129:
        return true;

      case VoltageRatioSensorType.PN_1131:
        return sensorValue >= 0.0 && sensorValue <= 2000.0;

      case VoltageRatioSensorType.PN_1134:
        return true;

      case VoltageRatioSensorType.PN_1136:
        return sensorValue >= -2.0 && sensorValue <= 2.0;

      case VoltageRatioSensorType.PN_1137:
        return sensorValue >= -7.0 && sensorValue <= 7.0;

      case VoltageRatioSensorType.PN_1138:
        return sensorValue >= 0.0 && sensorValue <= 50.0;

      case VoltageRatioSensorType.PN_1139:
        return sensorValue >= 0.0 && sensorValue <= 100.0;

      case VoltageRatioSensorType.PN_1140:
        return sensorValue >= 20.0 && sensorValue <= 400.0;

      case VoltageRatioSensorType.PN_1141:
        return sensorValue >= 15.0 && sensorValue <= 115.0;

      case VoltageRatioSensorType.PN_1146:
        return sensorValue >= 1.5 && sensorValue <= 4.0;

      case VoltageRatioSensorType.PN_3120:
        return sensorValue >= 0.0 && sensorValue <= 4.5;

      case VoltageRatioSensorType.PN_3121:
        return sensorValue >= 0.0 && sensorValue <= 11.3;

      case VoltageRatioSensorType.PN_3122:
        return sensorValue >= 0.0 && sensorValue <= 22.7;

      case VoltageRatioSensorType.PN_3123:
        return sensorValue >= 0.0 && sensorValue <= 45.3;

      case VoltageRatioSensorType.PN_3130:
        return sensorValue >= 0.0 && sensorValue <= 100.0;

      case VoltageRatioSensorType.VOLTAGE_RATIO:
        return true;

      default:
        return true;
    }
  }
  /** @internal */


  _getVoltageRatioSensorUnit(sensorType) {
    switch (sensorType) {
      case VoltageRatioSensorType.PN_1146:
        return Units[Unit.MILLIMETER];

      case VoltageRatioSensorType.PN_1101_SHARP2D120X:
      case VoltageRatioSensorType.PN_1101_SHARP2Y0A21:
      case VoltageRatioSensorType.PN_1101_SHARP2Y0A02:
      case VoltageRatioSensorType.PN_1128:
      case VoltageRatioSensorType.PN_3520:
      case VoltageRatioSensorType.PN_3521:
      case VoltageRatioSensorType.PN_3522:
        return Units[Unit.CENTIMETER];

      case VoltageRatioSensorType.PN_1102:
      case VoltageRatioSensorType.PN_1103:
      case VoltageRatioSensorType.PN_1110:
      case VoltageRatioSensorType.PN_1129:
        return Units[Unit.BOOLEAN];

      case VoltageRatioSensorType.PN_1107:
      case VoltageRatioSensorType.PN_1125_HUMIDITY:
      case VoltageRatioSensorType.PN_3130:
        return Units[Unit.PERCENT];

      case VoltageRatioSensorType.PN_1108:
        return Units[Unit.GAUSS];

      case VoltageRatioSensorType.PN_1115:
      case VoltageRatioSensorType.PN_1126:
      case VoltageRatioSensorType.PN_1136:
      case VoltageRatioSensorType.PN_1137:
      case VoltageRatioSensorType.PN_1138:
      case VoltageRatioSensorType.PN_1139:
      case VoltageRatioSensorType.PN_1140:
      case VoltageRatioSensorType.PN_1141:
        return Units[Unit.KILOPASCAL];

      case VoltageRatioSensorType.PN_1118_AC:
      case VoltageRatioSensorType.PN_1119_AC:
      case VoltageRatioSensorType.PN_1122_AC:
      case VoltageRatioSensorType.PN_1118_DC:
      case VoltageRatioSensorType.PN_1119_DC:
      case VoltageRatioSensorType.PN_1122_DC:
        return Units[Unit.AMPERE];

      case VoltageRatioSensorType.PN_1124:
      case VoltageRatioSensorType.PN_1125_TEMPERATURE:
        return Units[Unit.DEGREE_CELCIUS];

      case VoltageRatioSensorType.PN_1131:
        return Units[Unit.GRAM];

      case VoltageRatioSensorType.PN_3120:
      case VoltageRatioSensorType.PN_3121:
      case VoltageRatioSensorType.PN_3122:
      case VoltageRatioSensorType.PN_3123:
        return Units[Unit.KILOGRAM];

      case VoltageRatioSensorType.VOLTAGE_RATIO:
      case VoltageRatioSensorType.PN_1104:
      case VoltageRatioSensorType.PN_1111:
      case VoltageRatioSensorType.PN_1113:
      case VoltageRatioSensorType.PN_1105:
      case VoltageRatioSensorType.PN_1106:
      case VoltageRatioSensorType.PN_1109:
      case VoltageRatioSensorType.PN_1112:
      case VoltageRatioSensorType.PN_1116:
      case VoltageRatioSensorType.PN_1120:
      case VoltageRatioSensorType.PN_1121:
      case VoltageRatioSensorType.PN_1134:
      default:
        return Units[Unit.NONE];
    }
  }

}

class DigitalInputBase extends PhidgetChannel {
  constructor(ch) {
    super(ch);
    this.onStateChange = null;
    this._class = ChannelClass.DIGITAL_INPUT;
    this.name = "DigitalInput";
    this.data = this._initData();
  }
  /** @internal */


  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 64:
        this.data.inputMode = bp.entries[0].v;

        this._FIREPropertyChange('InputMode', bp);

        break;

      case 74:
        this.data.powerSupply = bp.entries[0].v;

        this._FIREPropertyChange('PowerSupply', bp);

        break;

      case 90:
        {
          this.data.state = bp.entries[0].v;

          if (this._isAttachedDone && this.onStateChange) {
            try {
              this.onStateChange(!!this.data.state);
            } catch (err) {
              logEventException(err);
            }
          }

          break;
        }

      default:
        throw new PhidgetError(ErrorCode.INVALID_PACKET, "Unsupported bridge packet: 0x" + bp.vpkt.toString(16));
    }
  }
  /** @internal */


  _initData() {
    return {
      state: 2,
      powerSupply: 2147483647,
      inputMode: 2147483647
    };
  }
  /** @internal */


  _initAfterOpen() {}
  /** @internal */


  async _setDefaults() {}
  /** @internal */


  _hasInitialState() {
    return true;
  }
  /** @internal */


  _fireInitialEvents() {}
  /**
   * The input polarity mode for your channel.
   *
   * *   See your device's User Guide for more information about what value to chooose for the `InputMode`
   * @throws {@link PhidgetError}
   */


  get inputMode() {
    return this.getInputMode();
  }
  /**
   * Choose the power supply voltage.
   *
   * *   Set this to the voltage specified in the attached sensor's data sheet to power it.
   *
   * *   Set to `phidget22.PowerSupply.OFF` to turn off the supply to save power.
   * @throws {@link PhidgetError}
   */


  get powerSupply() {
    return this.getPowerSupply();
  }
  /**
   * The most recent state value that the channel has reported.
   * @throws {@link PhidgetError}
   */


  get state() {
    return this.getState();
  }
  /**
   * The input polarity mode for your channel.
   *
   * *   See your device's User Guide for more information about what value to chooose for the `InputMode`
   * @returns The input mode value
   * @throws {@link PhidgetError}
   */


  getInputMode() {
    this._assertOpen();

    if (this.data.inputMode === 2147483647) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.inputMode;
  }
  /**
   * The input polarity mode for your channel.
   *
   * *   See your device's User Guide for more information about what value to chooose for the `InputMode`
   * @throws {@link PhidgetError}
   * @param inputMode - The input mode value
   */


  async setInputMode(inputMode) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: inputMode
    });
    await bp.send(this._ch, 64);
  }
  /**
   * Choose the power supply voltage.
   *
   * *   Set this to the voltage specified in the attached sensor's data sheet to power it.
   *
   * *   Set to `phidget22.PowerSupply.OFF` to turn off the supply to save power.
   * @returns The power supply value
   * @throws {@link PhidgetError}
   */


  getPowerSupply() {
    this._assertOpen();

    if (this.data.powerSupply === 2147483647) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.powerSupply;
  }
  /**
   * Choose the power supply voltage.
   *
   * *   Set this to the voltage specified in the attached sensor's data sheet to power it.
   *
   * *   Set to `phidget22.PowerSupply.OFF` to turn off the supply to save power.
   * @throws {@link PhidgetError}
   * @param powerSupply - The power supply value
   */


  async setPowerSupply(powerSupply) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: powerSupply
    });
    await bp.send(this._ch, 74);
  }
  /**
   * The most recent state value that the channel has reported.
   * @returns The state value
   * @throws {@link PhidgetError}
   */


  getState() {
    this._assertOpen();

    if (this.data.state === 2) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return !!this.data.state;
  }

}

/** @public */

class DigitalInput extends DigitalInputBase {
  /** @internal */
  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 181:
        this.data.powerSupply = bp.entries[0].v;

        this._FIREPropertyChange('PowerSupply', bp);

        break;

      case 182:
        this.data.inputMode = bp.entries[0].v;

        this._FIREPropertyChange('InputMode', bp);

        break;

      default:
        super._bridgeInput(bp);

        break;
    }
  }

}

class DigitalOutputBase extends PhidgetChannel {
  constructor(ch) {
    super(ch);
    this._class = ChannelClass.DIGITAL_OUTPUT;
    this.name = "DigitalOutput";
    this.data = this._initData();
  }
  /** @internal */


  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 55:
        this.data.dutyCycle = bp.entries[0].v;

        this._FIREPropertyChange('DutyCycle', bp);

        break;

      case 146:
        break;

      case 156:
        this.data.frequency = bp.entries[0].v;

        this._FIREPropertyChange('Frequency', bp);

        break;

      case 67:
        this.data.LEDCurrentLimit = bp.entries[0].v;

        this._FIREPropertyChange('LEDCurrentLimit', bp);

        break;

      case 68:
        this.data.LEDForwardVoltage = bp.entries[0].v;

        this._FIREPropertyChange('LEDForwardVoltage', bp);

        break;

      case 147:
        break;

      case 82:
        this.data.state = bp.entries[0].v;

        this._FIREPropertyChange('State', bp);

        break;

      default:
        throw new PhidgetError(ErrorCode.INVALID_PACKET, "Unsupported bridge packet: 0x" + bp.vpkt.toString(16));
    }
  }
  /** @internal */


  _initData() {
    return {
      dutyCycle: 1e+300,
      maxDutyCycle: 1e+300,
      minDutyCycle: 1e+300,
      LEDCurrentLimit: 1e+300,
      minLEDCurrentLimit: 1e+300,
      maxLEDCurrentLimit: 1e+300,
      LEDForwardVoltage: 2147483647,
      state: 2,
      maxFailsafeTime: 4294967295,
      minFailsafeTime: 4294967295,
      frequency: 1e+300,
      maxFrequency: 1e+300,
      minFrequency: 1e+300
    };
  }
  /** @internal */


  _initAfterOpen() {}
  /** @internal */


  async _setDefaults() {}
  /** @internal */


  _hasInitialState() {
    return true;
  }
  /** @internal */


  _fireInitialEvents() {}
  /**
   * The `dutyCycle` represents the fraction of time the output is on (high).
   *
   * *   A `dutyCycle` of 1.0 translates to a high output, a `dutyCycle` of 0 translates to a low output.
   * *   A `dutyCycle` of 0.5 translates to an output that is high half the time, which results in an average output voltage of (output voltage x 0.5)
   * *   You can use the `dutyCycle` to create a dimming effect on LEDs.
   * @throws {@link PhidgetError}
   */


  get dutyCycle() {
    return this.getDutyCycle();
  }
  /**
   * The minimum value that `dutyCycle` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDutyCycle() {
    return this.getMinDutyCycle();
  }
  /**
   * The maximum value that `dutyCycle` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDutyCycle() {
    return this.getMaxDutyCycle();
  }
  /**
   * The minimum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @throws {@link PhidgetError}
   */


  get minFailsafeTime() {
    return this.getMinFailsafeTime();
  }
  /**
   * The maximum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @throws {@link PhidgetError}
   */


  get maxFailsafeTime() {
    return this.getMaxFailsafeTime();
  }
  /**
   * The `frequency` parameter sets the PWM frequency for all frequency-settable PWM outputs on the board.
   * @throws {@link PhidgetError}
   */


  get frequency() {
    return this.getFrequency();
  }
  /**
   * The minimum value that `frequency` can be set to.
   * @throws {@link PhidgetError}
   */


  get minFrequency() {
    return this.getMinFrequency();
  }
  /**
   * The maximum value that `frequency` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxFrequency() {
    return this.getMaxFrequency();
  }
  /**
   * The `LEDCurrentLimit` is the maximum amount of current that the controller will provide to the output.
   *
   * *   Reference the data sheet of the LED you are using before setting this value.
   * @throws {@link PhidgetError}
   */


  get LEDCurrentLimit() {
    return this.getLEDCurrentLimit();
  }
  /**
   * The minimum value that `LEDCurrentLimit` can be set to.
   * @throws {@link PhidgetError}
   */


  get minLEDCurrentLimit() {
    return this.getMinLEDCurrentLimit();
  }
  /**
   * The maximum value that `LEDCurrentLimit` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxLEDCurrentLimit() {
    return this.getMaxLEDCurrentLimit();
  }
  /**
   * The `LEDForwardVoltage` is the voltage that will be available to your LED.
   *
   * *   Reference the data sheet of the LED you are using before setting this value. Choose the `LEDForwardVoltage` that is closest to the forward voltage specified in the data sheet.
   * *   This forward voltage is shared for all channels on this device. Setting the LEDForwardVoltage on any channel will set the LEDForwardVoltage for all channels on the device.
   * @throws {@link PhidgetError}
   */


  get LEDForwardVoltage() {
    return this.getLEDForwardVoltage();
  }
  /**
   * The `state` will indicate whether the output is high (TRUE) or low (FALSE).
   *
   * *   If a `dutyCycle` has been set, the state will return as TRUE if the DutyCycle is above 0.5, or FALSE otherwise.
   * @throws {@link PhidgetError}
   */


  get state() {
    return this.getState();
  }
  /**
   * The `dutyCycle` represents the fraction of time the output is on (high).
   *
   * *   A `dutyCycle` of 1.0 translates to a high output, a `dutyCycle` of 0 translates to a low output.
   * *   A `dutyCycle` of 0.5 translates to an output that is high half the time, which results in an average output voltage of (output voltage x 0.5)
   * *   You can use the `dutyCycle` to create a dimming effect on LEDs.
   * @returns The duty cycle value
   * @throws {@link PhidgetError}
   */


  getDutyCycle() {
    this._assertOpen();

    if (this.data.dutyCycle === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.dutyCycle;
  }
  /**
   * The `dutyCycle` represents the fraction of time the output is on (high).
   *
   * *   A `dutyCycle` of 1.0 translates to a high output, a `dutyCycle` of 0 translates to a low output.
   * *   A `dutyCycle` of 0.5 translates to an output that is high half the time, which results in an average output voltage of (output voltage x 0.5)
   * *   You can use the `dutyCycle` to create a dimming effect on LEDs.
   * @throws {@link PhidgetError}
   * @param dutyCycle - The duty cycle value
   */


  async setDutyCycle(dutyCycle) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: dutyCycle
    });
    await bp.send(this._ch, 55);
  }
  /**
   * The minimum value that `dutyCycle` can be set to.
   * @returns The duty cycle value
   * @throws {@link PhidgetError}
   */


  getMinDutyCycle() {
    this._assertOpen();

    if (this.data.minDutyCycle === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDutyCycle;
  }
  /**
   * The maximum value that `dutyCycle` can be set to.
   * @returns The duty cycle value
   * @throws {@link PhidgetError}
   */


  getMaxDutyCycle() {
    this._assertOpen();

    if (this.data.maxDutyCycle === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDutyCycle;
  }
  /**
   * Enables the **failsafe** feature for the channel, with a given **failsafe time**.
   *
   * The **failsafe** feature is intended for use in applications where it is important for the channel to enter a known _safe state_ if the program controlling it locks up or crashes. If you do not enable the failsafe feature, the channel will carry out whatever instructions it was last given until it is explicitly told to stop.
   *
   * Enabling the failsafe feature starts a recurring **failsafe timer** for the channel. Once the failsafe timer is enabled, it must be reset within the specified time or the channel will enter a **failsafe state**. The failsafe timer may be reset by sending any valid command to the device\*. Resetting the failsafe timer will reload the timer with the specified _failsafe time_, starting when the message to reset the timer is received by the Phidget.
   *
   * _\*(**get** requests do not typically send commands and won't reset the failsafe timer)_
   *
   * For example: if the failsafe is enabled with a **failsafe time** of 1000ms, you will have 1000ms to reset the failsafe timer. Every time the failsafe timer is reset, you will have 1000ms from that time to reset the failsafe again.
   *
   * If the failsafe timer is not reset before it runs out, the channel will enter a **failsafe state**. For Digital Output channels, this will set the output State to FALSE. Once the channel enters the **failsafe state**, it will reject any further input until the channel is reopened.
   *
   * To prevent the channel from falsely entering the failsafe state, we recommend resetting the failsafe timer as frequently as is practical for your application. A good rule of thumb is to not let more than a third of the failsafe time pass before resetting the timer.
   *
   * Once the failsafe timer has been set, it cannot be disabled by any means other than closing and reopening the channel.
   * @throws {@link PhidgetError}
   * @param failsafeTime - Failsafe timeout in milliseconds
   */


  async enableFailsafe(failsafeTime) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: failsafeTime
    });
    await bp.send(this._ch, 146);
  }
  /**
   * The minimum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @returns The failsafe time
   * @throws {@link PhidgetError}
   */


  getMinFailsafeTime() {
    this._assertOpen();

    if (this.data.minFailsafeTime === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minFailsafeTime;
  }
  /**
   * The maximum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @returns The failsafe time
   * @throws {@link PhidgetError}
   */


  getMaxFailsafeTime() {
    this._assertOpen();

    if (this.data.maxFailsafeTime === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxFailsafeTime;
  }
  /**
   * The `frequency` parameter sets the PWM frequency for all frequency-settable PWM outputs on the board.
   * @returns The PWM frequency
   * @throws {@link PhidgetError}
   */


  getFrequency() {
    this._assertOpen();

    if (this.data.frequency === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.frequency;
  }
  /**
   * The `frequency` parameter sets the PWM frequency for all frequency-settable PWM outputs on the board.
   * @throws {@link PhidgetError}
   * @param frequency - The PWM frequency
   */


  async setFrequency(frequency) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: frequency
    });
    await bp.send(this._ch, 156);
  }
  /**
   * The minimum value that `frequency` can be set to.
   * @returns The frequency
   * @throws {@link PhidgetError}
   */


  getMinFrequency() {
    this._assertOpen();

    if (this.data.minFrequency === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minFrequency;
  }
  /**
   * The maximum value that `frequency` can be set to.
   * @returns The frequency
   * @throws {@link PhidgetError}
   */


  getMaxFrequency() {
    this._assertOpen();

    if (this.data.maxFrequency === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxFrequency;
  }
  /**
   * The `LEDCurrentLimit` is the maximum amount of current that the controller will provide to the output.
   *
   * *   Reference the data sheet of the LED you are using before setting this value.
   * @returns The current limit value
   * @throws {@link PhidgetError}
   */


  getLEDCurrentLimit() {
    this._assertOpen();

    if (this.data.LEDCurrentLimit === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.LEDCurrentLimit;
  }
  /**
   * The `LEDCurrentLimit` is the maximum amount of current that the controller will provide to the output.
   *
   * *   Reference the data sheet of the LED you are using before setting this value.
   * @throws {@link PhidgetError}
   * @param LEDCurrentLimit - The current limit value
   */


  async setLEDCurrentLimit(LEDCurrentLimit) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: LEDCurrentLimit
    });
    await bp.send(this._ch, 67);
  }
  /**
   * The minimum value that `LEDCurrentLimit` can be set to.
   * @returns The current limit value
   * @throws {@link PhidgetError}
   */


  getMinLEDCurrentLimit() {
    this._assertOpen();

    if (this.data.minLEDCurrentLimit === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minLEDCurrentLimit;
  }
  /**
   * The maximum value that `LEDCurrentLimit` can be set to.
   * @returns The current limit value
   * @throws {@link PhidgetError}
   */


  getMaxLEDCurrentLimit() {
    this._assertOpen();

    if (this.data.maxLEDCurrentLimit === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxLEDCurrentLimit;
  }
  /**
   * The `LEDForwardVoltage` is the voltage that will be available to your LED.
   *
   * *   Reference the data sheet of the LED you are using before setting this value. Choose the `LEDForwardVoltage` that is closest to the forward voltage specified in the data sheet.
   * *   This forward voltage is shared for all channels on this device. Setting the LEDForwardVoltage on any channel will set the LEDForwardVoltage for all channels on the device.
   * @returns The forward voltage value
   * @throws {@link PhidgetError}
   */


  getLEDForwardVoltage() {
    this._assertOpen();

    if (this.data.LEDForwardVoltage === 2147483647) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.LEDForwardVoltage;
  }
  /**
   * The `LEDForwardVoltage` is the voltage that will be available to your LED.
   *
   * *   Reference the data sheet of the LED you are using before setting this value. Choose the `LEDForwardVoltage` that is closest to the forward voltage specified in the data sheet.
   * *   This forward voltage is shared for all channels on this device. Setting the LEDForwardVoltage on any channel will set the LEDForwardVoltage for all channels on the device.
   * @throws {@link PhidgetError}
   * @param LEDForwardVoltage - The forward voltage value
   */


  async setLEDForwardVoltage(LEDForwardVoltage) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: LEDForwardVoltage
    });
    await bp.send(this._ch, 68);
  }
  /**
   * Resets the failsafe timer, if one has been set. See `enableFailsafe()` for details.
   *
   * This function will fail if no failsafe timer has been set for the channel.
   * @throws {@link PhidgetError}
   */


  async resetFailsafe() {
    this._assertOpen();

    const bp = new BridgePacket();
    await bp.send(this._ch, 147);
  }
  /**
   * The `state` will indicate whether the output is high (TRUE) or low (FALSE).
   *
   * *   If a `dutyCycle` has been set, the state will return as TRUE if the DutyCycle is above 0.5, or FALSE otherwise.
   * @returns The state value
   * @throws {@link PhidgetError}
   */


  getState() {
    this._assertOpen();

    if (this.data.state === 2) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return !!this.data.state;
  }
  /**
   * The `state` will dictate whether the output is constantly high (TRUE) or low (FALSE).
   *
   * *   This will override any `dutyCycle` that may have been set on the channel.
   * *   Setting the `state` to TRUE is the same as setting `dutyCycle` to 1.0, and setting the `state` to FALSE is the same as setting a `dutyCycle` of 0.0.
   * @throws {@link PhidgetError}
   * @param state - The state value
   */


  async setState(state) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: state ? 1 : 0
    });
    await bp.send(this._ch, 82);
  }

}

/** @public */

class DigitalOutput extends DigitalOutputBase {
  /** @internal */
  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 55:
        this.data.state = bp.getNumber(0) ? 1 : 0;

        super._bridgeInput(bp);

        break;

      case 82:
        this.data.dutyCycle = bp.getBoolean(0) ? 1 : 0;

        super._bridgeInput(bp);

        break;

      default:
        super._bridgeInput(bp);

        break;
    }
  }
  /** @internal */


  _errorHandler(code) {
    switch (code) {
      case ErrorEventCode.FAILSAFE_CONDITION:
        this.data.state = 0;
        this.data.dutyCycle = 0;
        break;

      case ErrorEventCode.INVALID_STATE_CONDITION:
        this.data.state = 2;
        this.data.dutyCycle = 1e+300;
        break;
    }
  }

}

class RCServoBase extends PhidgetChannel {
  constructor(ch) {
    super(ch);
    this.onPositionChange = null;
    this.onVelocityChange = null;
    this.onTargetPositionReached = null;
    this._class = ChannelClass.RC_SERVO;
    this.name = "RCServo";
    this.data = this._initData();
  }
  /** @internal */


  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 40:
        this.data.acceleration = bp.entries[0].v;

        this._FIREPropertyChange('Acceleration', bp);

        break;

      case 54:
        if (bp.entryCount > 1) this.data.dataInterval = bp.entries[1].v;else this.data.dataInterval = bp.entries[0].v;

        this._FIREPropertyChange('DataInterval', bp);

        this._FIREPropertyChange('DataRate', bp);

        break;

      case 57:
        this.data.engaged = bp.entries[0].v;

        this._FIREPropertyChange('Engaged', bp);

        break;

      case 146:
        break;

      case 70:
        this.data.minPulseWidth = bp.entries[0].v;

        this._FIREPropertyChange('MinPulseWidth', bp);

        break;

      case 69:
        this.data.maxPulseWidth = bp.entries[0].v;

        this._FIREPropertyChange('MaxPulseWidth', bp);

        break;

      case 147:
        break;

      case 81:
        this.data.speedRampingState = bp.entries[0].v;

        this._FIREPropertyChange('SpeedRampingState', bp);

        break;

      case 83:
        this.data.targetPosition = bp.entries[0].v;

        this._FIREPropertyChange('TargetPosition', bp);

        break;

      case 55:
        this.data.torque = bp.entries[0].v;

        this._FIREPropertyChange('Torque', bp);

        break;

      case 85:
        this.data.velocityLimit = bp.entries[0].v;

        this._FIREPropertyChange('VelocityLimit', bp);

        break;

      case 86:
        this.data.voltage = bp.entries[0].v;

        this._FIREPropertyChange('Voltage', bp);

        break;

      default:
        throw new PhidgetError(ErrorCode.INVALID_PACKET, "Unsupported bridge packet: 0x" + bp.vpkt.toString(16));
    }
  }
  /** @internal */


  _initData() {
    return {
      maxPulseWidthLimit: 1e+300,
      maxPulseWidth: 1e+300,
      maxPosition: 1e+300,
      maxVelocityLimit: 1e+300,
      maxAcceleration: 1e+300,
      maxTorque: 1e+300,
      minTorque: 1e+300,
      minPulseWidthLimit: 1e+300,
      minPulseWidth: 1e+300,
      minPosition: 1e+300,
      minVelocityLimit: 1e+300,
      minAcceleration: 1e+300,
      position: 1e+300,
      targetPosition: 1e+300,
      velocityLimit: 1e+300,
      velocity: 1e+300,
      acceleration: 1e+300,
      torque: 1e+300,
      isMoving: 2,
      engaged: 2,
      speedRampingState: 2,
      voltage: 2147483647,
      dataInterval: 1e+300,
      maxDataInterval: 4294967295,
      minDataInterval: 4294967295,
      minDataRate: 1e+300,
      maxDataRate: 1e+300,
      maxFailsafeTime: 4294967295,
      minFailsafeTime: 4294967295
    };
  }
  /** @internal */


  _initAfterOpen() {}
  /** @internal */


  async _setDefaults() {}
  /** @internal */


  _hasInitialState() {
    return true;
  }
  /** @internal */


  _fireInitialEvents() {}
  /**
   * When changing velocity, the RC servo motor will accelerate/decelerate at this rate.
   *
   * *   The acceleration is bounded by `maxAcceleration` and `minAcceleration`.
   *
   * *   Using the **default settings** this acceleration will correspond acceleration of servo arm in **degrees/s2**, for many standard RC servos.
   *
   * *   `speedRampingState` controls whether or not the acceleration value is actually applied when trying to reach a target position.
   * *   There is a practical limit on how fast your RC servo motor can accelerate. This is based on the load and physical design of the motor.
   * *   The units for `targetPosition`, `velocityLimit`, and `acceleration` are configured by scaling the internal timing (set with `minPulseWidth` and `maxPulseWidth`) to a user specified range with `minPosition` and `maxPosition`.
   *
   *
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @throws {@link PhidgetError}
   */


  get acceleration() {
    return this.getAcceleration();
  }
  /**
   * The minimum value that `acceleration` can be set to.
   *
   * *   This value depends on `minPosition`/`maxPosition` and `minPulseWidth`/`maxPulseWidth`
   * .
   *
   *
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @throws {@link PhidgetError}
   */


  get minAcceleration() {
    return this.getMinAcceleration();
  }
  /**
   * The maximum acceleration that `acceleration` can be set to.
   *
   * *   This value depends on `minPosition`/`maxPosition` and `minPulseWidth`/`maxPulseWidth`.
   *
   *
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @throws {@link PhidgetError}
   */


  get maxAcceleration() {
    return this.getMaxAcceleration();
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `PositionChange` / `VelocityChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * @throws {@link PhidgetError}
   */


  get dataInterval() {
    return this.getDataInterval();
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataInterval() {
    return this.getMinDataInterval();
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataInterval() {
    return this.getMaxDataInterval();
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */


  get dataRate() {
    return this.getDataRate();
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataRate() {
    return this.getMinDataRate();
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataRate() {
    return this.getMaxDataRate();
  }
  /**
   * When engaged, a RC servo motor has the ability to be positioned. When disengaged, no commands are sent to the RC servo motor.
   *
   * *   There is no position feedback to the controller, so the RC servo motor will immediately snap to the `targetPosition` after being engaged from a disengaged state.
   * *   This property is useful for relaxing a servo once it has reached a given position.
   * *   If you are concerned about tracking position accurately, you should not disengage the motor while `isMoving` is true.
   * @throws {@link PhidgetError}
   */


  get engaged() {
    return this.getEngaged();
  }
  /**
   * The minimum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @throws {@link PhidgetError}
   */


  get minFailsafeTime() {
    return this.getMinFailsafeTime();
  }
  /**
   * The maximum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @throws {@link PhidgetError}
   */


  get maxFailsafeTime() {
    return this.getMaxFailsafeTime();
  }
  /**
   * `isMoving` returns true if the RC servo motor is currently in motion.
   *
   * *   The controller cannot know if the RC servo motor is physically moving. When `isMoving` is false, it simply means there are no commands in the pipeline to the RC servo motor.
   * @throws {@link PhidgetError}
   */


  get isMoving() {
    return this.getIsMoving();
  }
  /**
   * The most recent position of the RC servo motor that the controller has reported.
   *
   * *   This value will always be between `minPosition` and `maxPosition`.
   *
   * *   Using the **default settings** this position will correspond to the rotation of the servo arm in **degrees**, for many standard RC servos.
   *
   *
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @throws {@link PhidgetError}
   */


  get position() {
    return this.getPosition();
  }
  /**
   * The minimum position that `targetPosition` can be set to.
   *
   * *   The units for `targetPosition`, `velocityLimit`, and `acceleration` are configured by scaling the internal timing (set with `minPulseWidth` and `maxPulseWidth`) to a user specified range with `minPosition` and `maxPosition`.
   *
   *
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @throws {@link PhidgetError}
   */


  get minPosition() {
    return this.getMinPosition();
  }

  set minPosition(minPosition) {
    this.setMinPosition(minPosition);
  }
  /**
   * The maximum position `targetPosition` can be set to.
   *
   * *   The units for `targetPosition`, `velocityLimit`, and `acceleration` are configured by scaling the internal timing (set with `minPulseWidth` and `maxPulseWidth`) to a user specified range with `minPosition` and `maxPosition`.
   *
   *
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @throws {@link PhidgetError}
   */


  get maxPosition() {
    return this.getMaxPosition();
  }

  set maxPosition(maxPosition) {
    this.setMaxPosition(maxPosition);
  }
  /**
   * The `minPulseWidth` represents the minimum pulse width that your RC servo motor specifies.
   *
   * *   This value can be found in the data sheet of most RC servo motors.
   * *   The units for `targetPosition`, `velocityLimit`, and `acceleration` are configured by scaling the internal timing (set with `minPulseWidth` and `maxPulseWidth`) to a user specified range with `minPosition` and `maxPosition`.
   *
   *
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @throws {@link PhidgetError}
   */


  get minPulseWidth() {
    return this.getMinPulseWidth();
  }
  /**
   * The `maxPulseWidth` represents the maximum pulse width that your RC servo motor specifies.
   *
   * *   This value can be found in the data sheet of most RC servo motors.
   * *   The units for `targetPosition`, `velocityLimit`, and `acceleration` are configured by scaling the internal timing (set with `minPulseWidth` and `maxPulseWidth`) to a user specified range with `minPosition` and `maxPosition`.
   *
   *
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @throws {@link PhidgetError}
   */


  get maxPulseWidth() {
    return this.getMaxPulseWidth();
  }
  /**
   * The minimum pulse width that `minPulseWidth` can be set to.
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @throws {@link PhidgetError}
   */


  get minPulseWidthLimit() {
    return this.getMinPulseWidthLimit();
  }
  /**
   * The maximum pulse width that `maxPulseWidth` can be set to.
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @throws {@link PhidgetError}
   */


  get maxPulseWidthLimit() {
    return this.getMaxPulseWidthLimit();
  }
  /**
   * When speed ramping state is enabled, the controller will take the `acceleration` and `velocityLimit` properties into account when moving the RC servo motor, usually resulting in smooth motion. If speed ramping state is not enabled, the controller will simply set the RC servo motor to the requested position.
   * @throws {@link PhidgetError}
   */


  get speedRampingState() {
    return this.getSpeedRampingState();
  }
  /**
   * If the RC servo motor is configured and `targetPosition` is set, the controller will continuously try to reach targeted position.
   *
   * *   The target position is bounded by `minPosition` and `maxPosition`.
   *
   * *   Using the **default settings** this position will correspond to the rotation of the servo arm in **degrees**, for many standard RC servos.
   *
   * *   If the RC servo motor is not engaged, then the position cannot be read.
   * *   The position can still be set while the RC servo motor is not engaged. Once engaged, the RC servo motor will snap to position, assuming it is not there already.
   * *   The units for `targetPosition`, `velocityLimit`, and `acceleration` are configured by scaling the internal timing (set with `minPulseWidth` and `maxPulseWidth`) to a user specified range with `minPosition` and `maxPosition`.
   *
   * ### Position and Pulse Width
   *
   * *   An RC servo motor's position is controlled using a type of **Pulse Width Modulation**, sending voltage pulses of a given time span, or **Pulse Width** to the servo.
   * *   The servo translates the **Pulse Width** of the control signal to a corresponding position of the servo arm.
   * *   Knowing this, a servo's range of motion can be thought of in terms of a `minPulseWidth` and a `maxPulseWidth` corresponding to range of pulse widths that produce the servo arm's full **range of movement**.
   *
   * *   In Phidget22, you can adjust the `minPulseWidth` and `maxPulseWidth` stored by the library to match the desired **range of movement** you expect from your servo.
   *
   * *   Since directly setting the timing of RC servo pulse widths is not very intuitive for most purpses, we map these pulse widths to a user-defied _**Minimum**_ and _**Maximum**_ **Position**.This allows you to define the servo's position in terms best suited to your application, such as degrees, fractions of a rotation, or even some measure of speed for a continuous-rotation servo.
   * *   By setting the servo's `targetPosition` to `maxPosition`, the controller will send pulses of `maxPulseWidth` to the servo.
   *     *   Similarly, `minPosition` will send pulses of `minPulseWidth` to the servo
   *     *   `maxPosition` can be set smaller than `minPosition` to invert movement of the servo, if it helps your application.
   * *   Setting a `targetPosition` will transate the position between `minPosition` and `maxPosition` to a corresponding **Pulse Width** between `minPulseWidth` and `maxPulseWidth`, in turn sending the servo arm to the desired position.
   * *   Setting `velocityLimit` and `acceleration` for your servo will limit the rate of change of the servo's position in terms of one _**UserUnit**_ per second (or /s2). Here, a _**UserUnit**_ is whatever distance is maked by the change of the `targetPosition` by **1.0**
   *
   * ### Adjusting the Servo's Limits
   *
   * *   **To tune your program to a specific servo:**
   *
   * 1.  First adjust the servo's range of motion by setting the `maxPulseWidth` and `minPulseWidth`. You can use the default values for these _(or the ones on your servo's datasheet)_ as a starting point.
   * 2.  Send the servo to `maxPosition` and `minPosition` to check the results. Repeat steps 1 and 2 as nessesarry.
   * 3.  Set the `maxPosition` and `minPosition` to match whatever numbers you find best suited to your application.
   * @throws {@link PhidgetError}
   */


  get targetPosition() {
    return this.getTargetPosition();
  }
  /**
   * The `torque` is a ratio of the maximum available torque.
   *
   * *   The torque is bounded by `minTorque` and `maxTorque`
   * *   Increasing the torque will increase the speed and power consumption of the RC servo motor.
   * @throws {@link PhidgetError}
   */


  get torque() {
    return this.getTorque();
  }
  /**
   * The minimum value that `torque` can be set to.
   *
   * *   `torque` is a ratio of the maximum available torque, therefore the minimum torque is a unitless constant.
   * @throws {@link PhidgetError}
   */


  get minTorque() {
    return this.getMinTorque();
  }
  /**
   * The maximum value that `torque` can be set to.
   *
   * *   `torque` is a ratio of the maximum available torque, therefore the minimum torque is a unitless constant.
   * @throws {@link PhidgetError}
   */


  get maxTorque() {
    return this.getMaxTorque();
  }
  /**
   * The velocity that the RC servo motor is being driven at.
   *
   * *   A negative value means the RC servo motor is moving towards a lower position.
   * *   The velocity range of the RC servo motor will be from -`velocityLimit` to +`velocityLimit`, depending on direction.
   * *   This is not the actual physical velocity of the RC servo motor.
   *
   *
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @throws {@link PhidgetError}
   */


  get velocity() {
    return this.getVelocity();
  }
  /**
   * When moving, the RC servo motor velocity will be limited by this value.*   The velocity limit is bounded by `minVelocityLimit` and `maxVelocityLimit`.
   *
   * *   Using the **default settings** this velocity will correspond to the maximum speed of rotation of servo arm in **degrees/s**, for many standard RC servos.
   *
   * *   `speedRampingState` controls whether or not the velocity limit value is actually applied when trying to reach a target position.
   * *   The velocity range of the RC servo motor will be from -`velocityLimit` to +`velocityLimit`, depending on direction.
   * *   Note that when this value is set to 0, the RC servo motor will not move.
   * *   There is a practical limit on how fast your servo can rotate, based on the physical design of the motor.
   * *   The units for `targetPosition`, `velocityLimit`, and `acceleration` are configured by scaling the internal timing (set with `minPulseWidth` and `maxPulseWidth`) to a user specified range with `minPosition` and `maxPosition`.
   *
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @throws {@link PhidgetError}
   */


  get velocityLimit() {
    return this.getVelocityLimit();
  }
  /**
   * The minimum velocity `velocityLimit` can be set to.
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @throws {@link PhidgetError}
   */


  get minVelocityLimit() {
    return this.getMinVelocityLimit();
  }
  /**
   * The maximum velocity `velocityLimit` can be set to. This value depends on `minPosition`/`maxPosition` and `minPulseWidth`/`maxPulseWidth`.
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @throws {@link PhidgetError}
   */


  get maxVelocityLimit() {
    return this.getMaxVelocityLimit();
  }
  /**
   * The supply voltage for the RC servo motor.
   *
   * *   If your controller supports multiple RC servo motors, every motor will have the same supply voltage. It is not possible to set individual supply voltages.
   * @throws {@link PhidgetError}
   */


  get voltage() {
    return this.getVoltage();
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `PositionChange` / `VelocityChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getDataInterval() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.dataInterval;
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `PositionChange` / `VelocityChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */


  async setDataInterval(dataInterval) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: dataInterval
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getMinDataInterval() {
    this._assertOpen();

    if (this.data.minDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataInterval;
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getMaxDataInterval() {
    this._assertOpen();

    if (this.data.maxDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */


  getDataRate() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return 1000.0 / this.data.dataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */


  async setDataRate(dataRate) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: Math.round(1000.0 / dataRate)
    });
    bp.set({
      name: "1",
      type: "g",
      value: 1000.0 / dataRate
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMinDataRate() {
    this._assertOpen();

    if (this.data.minDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataRate;
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMaxDataRate() {
    this._assertOpen();

    if (this.data.maxDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataRate;
  }
  /**
   * When engaged, a RC servo motor has the ability to be positioned. When disengaged, no commands are sent to the RC servo motor.
   *
   * *   There is no position feedback to the controller, so the RC servo motor will immediately snap to the `targetPosition` after being engaged from a disengaged state.
   * *   This property is useful for relaxing a servo once it has reached a given position.
   * *   If you are concerned about tracking position accurately, you should not disengage the motor while `isMoving` is true.
   * @returns The engaged value
   * @throws {@link PhidgetError}
   */


  getEngaged() {
    this._assertOpen();

    if (this.data.engaged === 2) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return !!this.data.engaged;
  }
  /**
   * When engaged, a RC servo motor has the ability to be positioned. When disengaged, no commands are sent to the RC servo motor.
   *
   * *   There is no position feedback to the controller, so the RC servo motor will immediately snap to the `targetPosition` after being engaged from a disengaged state.
   * *   This property is useful for relaxing a servo once it has reached a given position.
   * *   If you are concerned about tracking position accurately, you should not disengage the motor while `isMoving` is true.
   * @throws {@link PhidgetError}
   * @param engaged - The engaged value
   */


  async setEngaged(engaged) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: engaged ? 1 : 0
    });
    await bp.send(this._ch, 57);
  }
  /**
   * Enables the **failsafe** feature for the channel, with a given **failsafe time**.
   *
   * The **failsafe** feature is intended for use in applications where it is important for the channel to enter a known _safe state_ if the program controlling it locks up or crashes. If you do not enable the failsafe feature, the channel will carry out whatever instructions it was last given until it is explicitly told to stop.
   *
   * Enabling the failsafe feature starts a recurring **failsafe timer** for the channel. Once the failsafe timer is enabled, it must be reset within the specified time or the channel will enter a **failsafe state**. The failsafe timer may be reset by sending any valid command to the device\*. Resetting the failsafe timer will reload the timer with the specified _failsafe time_, starting when the message to reset the timer is received by the Phidget.
   *
   * _\*(**get** requests do not typically send commands and won't reset the failsafe timer)_
   *
   * For example: if the failsafe is enabled with a **failsafe time** of 1000ms, you will have 1000ms to reset the failsafe timer. Every time the failsafe timer is reset, you will have 1000ms from that time to reset the failsafe again.
   *
   * If the failsafe timer is not reset before it runs out, the channel will enter a **failsafe state**. For RC Servo channels, this will disengage the servo. Once the channel enters the **failsafe state**, it will reject any further input until the channel is reopened.
   *
   * To prevent the channel from falsely entering the failsafe state, we recommend resetting the failsafe timer as frequently as is practical for your application. A good rule of thumb is to not let more than a third of the failsafe time pass before resetting the timer.
   *
   * Once the failsafe timer has been set, it cannot be disabled by any means other than closing and reopening the channel.
   * @throws {@link PhidgetError}
   * @param failsafeTime - Failsafe timeout in milliseconds
   */


  async enableFailsafe(failsafeTime) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: failsafeTime
    });
    await bp.send(this._ch, 146);
  }
  /**
   * The minimum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @returns The failsafe time
   * @throws {@link PhidgetError}
   */


  getMinFailsafeTime() {
    this._assertOpen();

    if (this.data.minFailsafeTime === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minFailsafeTime;
  }
  /**
   * The maximum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @returns The failsafe time
   * @throws {@link PhidgetError}
   */


  getMaxFailsafeTime() {
    this._assertOpen();

    if (this.data.maxFailsafeTime === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxFailsafeTime;
  }
  /**
   * `isMoving` returns true if the RC servo motor is currently in motion.
   *
   * *   The controller cannot know if the RC servo motor is physically moving. When `isMoving` is false, it simply means there are no commands in the pipeline to the RC servo motor.
   * @returns The moving value
   * @throws {@link PhidgetError}
   */


  getIsMoving() {
    this._assertOpen();

    if (this.data.isMoving === 2) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return !!this.data.isMoving;
  }
  /**
   * The minimum position that `targetPosition` can be set to.
   *
   * *   The units for `targetPosition`, `velocityLimit`, and `acceleration` are configured by scaling the internal timing (set with `minPulseWidth` and `maxPulseWidth`) to a user specified range with `minPosition` and `maxPosition`.
   *
   *
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @returns The position value
   * @throws {@link PhidgetError}
   */


  getMinPosition() {
    this._assertOpen();

    if (this.data.minPosition === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minPosition;
  }
  /**
   * The maximum position `targetPosition` can be set to.
   *
   * *   The units for `targetPosition`, `velocityLimit`, and `acceleration` are configured by scaling the internal timing (set with `minPulseWidth` and `maxPulseWidth`) to a user specified range with `minPosition` and `maxPosition`.
   *
   *
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @returns The position value
   * @throws {@link PhidgetError}
   */


  getMaxPosition() {
    this._assertOpen();

    if (this.data.maxPosition === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxPosition;
  }
  /**
   * The `minPulseWidth` represents the minimum pulse width that your RC servo motor specifies.
   *
   * *   This value can be found in the data sheet of most RC servo motors.
   * *   The units for `targetPosition`, `velocityLimit`, and `acceleration` are configured by scaling the internal timing (set with `minPulseWidth` and `maxPulseWidth`) to a user specified range with `minPosition` and `maxPosition`.
   *
   *
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @throws {@link PhidgetError}
   * @param minPulseWidth - The pulse width value
   */


  async setMinPulseWidth(minPulseWidth) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: minPulseWidth
    });
    await bp.send(this._ch, 70);
  }
  /**
   * The `minPulseWidth` represents the minimum pulse width that your RC servo motor specifies.
   *
   * *   This value can be found in the data sheet of most RC servo motors.
   * *   The units for `targetPosition`, `velocityLimit`, and `acceleration` are configured by scaling the internal timing (set with `minPulseWidth` and `maxPulseWidth`) to a user specified range with `minPosition` and `maxPosition`.
   *
   *
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @returns The pulse width value
   * @throws {@link PhidgetError}
   */


  getMinPulseWidth() {
    this._assertOpen();

    if (this.data.minPulseWidth === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minPulseWidth;
  }
  /**
   * The `maxPulseWidth` represents the maximum pulse width that your RC servo motor specifies.
   *
   * *   This value can be found in the data sheet of most RC servo motors.
   * *   The units for `targetPosition`, `velocityLimit`, and `acceleration` are configured by scaling the internal timing (set with `minPulseWidth` and `maxPulseWidth`) to a user specified range with `minPosition` and `maxPosition`.
   *
   *
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @throws {@link PhidgetError}
   * @param maxPulseWidth - The pulse width value
   */


  async setMaxPulseWidth(maxPulseWidth) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: maxPulseWidth
    });
    await bp.send(this._ch, 69);
  }
  /**
   * The `maxPulseWidth` represents the maximum pulse width that your RC servo motor specifies.
   *
   * *   This value can be found in the data sheet of most RC servo motors.
   * *   The units for `targetPosition`, `velocityLimit`, and `acceleration` are configured by scaling the internal timing (set with `minPulseWidth` and `maxPulseWidth`) to a user specified range with `minPosition` and `maxPosition`.
   *
   *
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @returns The pulse width value
   * @throws {@link PhidgetError}
   */


  getMaxPulseWidth() {
    this._assertOpen();

    if (this.data.maxPulseWidth === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxPulseWidth;
  }
  /**
   * The minimum pulse width that `minPulseWidth` can be set to.
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @returns The pulse width value
   * @throws {@link PhidgetError}
   */


  getMinPulseWidthLimit() {
    this._assertOpen();

    if (this.data.minPulseWidthLimit === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minPulseWidthLimit;
  }
  /**
   * The maximum pulse width that `maxPulseWidth` can be set to.
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @returns The pulse width value
   * @throws {@link PhidgetError}
   */


  getMaxPulseWidthLimit() {
    this._assertOpen();

    if (this.data.maxPulseWidthLimit === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxPulseWidthLimit;
  }
  /**
   * Resets the failsafe timer, if one has been set. See `enableFailsafe()` for details.
   *
   * This function will fail if no failsafe timer has been set for the channel.
   * @throws {@link PhidgetError}
   */


  async resetFailsafe() {
    this._assertOpen();

    const bp = new BridgePacket();
    await bp.send(this._ch, 147);
  }
  /**
   * When speed ramping state is enabled, the controller will take the `acceleration` and `velocityLimit` properties into account when moving the RC servo motor, usually resulting in smooth motion. If speed ramping state is not enabled, the controller will simply set the RC servo motor to the requested position.
   * @returns The speed ramping state value
   * @throws {@link PhidgetError}
   */


  getSpeedRampingState() {
    this._assertOpen();

    if (this.data.speedRampingState === 2) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return !!this.data.speedRampingState;
  }
  /**
   * When speed ramping state is enabled, the controller will take the `acceleration` and `velocityLimit` properties into account when moving the RC servo motor, usually resulting in smooth motion. If speed ramping state is not enabled, the controller will simply set the RC servo motor to the requested position.
   * @throws {@link PhidgetError}
   * @param speedRampingState - The speed ramping state value
   */


  async setSpeedRampingState(speedRampingState) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: speedRampingState ? 1 : 0
    });
    await bp.send(this._ch, 81);
  }
  /**
   * The `torque` is a ratio of the maximum available torque.
   *
   * *   The torque is bounded by `minTorque` and `maxTorque`
   * *   Increasing the torque will increase the speed and power consumption of the RC servo motor.
   * @returns The torque value.
   * @throws {@link PhidgetError}
   */


  getTorque() {
    this._assertOpen();

    if (this.data.torque === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.torque;
  }
  /**
   * The `torque` is a ratio of the maximum available torque.
   *
   * *   The torque is bounded by `minTorque` and `maxTorque`
   * *   Increasing the torque will increase the speed and power consumption of the RC servo motor.
   * @throws {@link PhidgetError}
   * @param torque - The torque value.
   */


  async setTorque(torque) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: torque
    });
    await bp.send(this._ch, 55);
  }
  /**
   * The minimum value that `torque` can be set to.
   *
   * *   `torque` is a ratio of the maximum available torque, therefore the minimum torque is a unitless constant.
   * @returns The torque value
   * @throws {@link PhidgetError}
   */


  getMinTorque() {
    this._assertOpen();

    if (this.data.minTorque === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minTorque;
  }
  /**
   * The maximum value that `torque` can be set to.
   *
   * *   `torque` is a ratio of the maximum available torque, therefore the minimum torque is a unitless constant.
   * @returns The torque value
   * @throws {@link PhidgetError}
   */


  getMaxTorque() {
    this._assertOpen();

    if (this.data.maxTorque === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxTorque;
  }
  /**
   * The supply voltage for the RC servo motor.
   *
   * *   If your controller supports multiple RC servo motors, every motor will have the same supply voltage. It is not possible to set individual supply voltages.
   * @returns The voltage value
   * @throws {@link PhidgetError}
   */


  getVoltage() {
    this._assertOpen();

    if (this.data.voltage === 2147483647) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.voltage;
  }
  /**
   * The supply voltage for the RC servo motor.
   *
   * *   If your controller supports multiple RC servo motors, every motor will have the same supply voltage. It is not possible to set individual supply voltages.
   * @throws {@link PhidgetError}
   * @param voltage - The voltage value
   */


  async setVoltage(voltage) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: voltage
    });
    await bp.send(this._ch, 86);
  }

}

/** @public */

class RCServo extends RCServoBase {
  /** @internal */
  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 57:
        if (bp.getBoolean(0) === true && this.data.velocityLimit !== 0 && this.data.position !== this.data.targetPosition) this.data.isMoving = 1;

        super._bridgeInput(bp);

        break;

      case 85:
        if (this.data.engaged && bp.getNumber(0) !== 0 && this.data.position !== this.data.targetPosition) this.data.isMoving = 1;

        super._bridgeInput(bp);

        break;

      case 83:
        if (this.data.engaged && this.data.velocityLimit !== 0 && this.data.position !== bp.getNumber(0)) this.data.isMoving = 1;

        super._bridgeInput(bp);

        break;

      case 29:
        this.data.position = bp.getNumber(0);

        if (this._isAttachedDone && this.onPositionChange) {
          try {
            this.onPositionChange(this._positionUser(this.data.position));
          } catch (err) {
            logEventException(err);
          }
        }

        break;

      case 100:
        this.data.velocity = bp.getNumber(0);

        if (this._isAttachedDone && this.onVelocityChange) {
          try {
            this.onVelocityChange(this._velocityUser(this.data.velocity));
          } catch (err) {
            logEventException(err);
          }
        }

        break;

      case 94:
        this.data.position = bp.getNumber(0);
        this.data.isMoving = 0;

        if (this._isAttachedDone && this.onTargetPositionReached) {
          try {
            this.onTargetPositionReached(this._positionUser(this.data.position));
          } catch (err) {
            logEventException(err);
          }
        }

        break;

      default:
        super._bridgeInput(bp);

        break;
    }
  }
  /** @internal */


  _positionUser(position_us) {
    return this.data.minPosition + (position_us - this.data.minPulseWidth) / (this.data.maxPulseWidth - this.data.minPulseWidth) * this.data.maxPosition - this.data.minPosition;
  }
  /** @internal */


  _positionUS(position_user) {
    if (this.data.maxPosition > this.data.minPosition) return this.data.minPulseWidth + (this.data.maxPulseWidth - this.data.minPulseWidth) * (position_user - this.data.minPosition) / (this.data.maxPosition - this.data.minPosition);
    return this.data.maxPulseWidth + (this.data.maxPulseWidth - this.data.minPulseWidth) * (position_user - this.data.maxPosition) / (this.data.maxPosition - this.data.minPosition);
  }
  /** @internal */


  _velocityUser(velocity_us) {
    return Math.abs(this.data.maxPosition - this.data.minPosition) * velocity_us / (this.data.maxPulseWidth - this.data.minPulseWidth);
  }
  /** @internal */


  _velocityUS(velocity_user) {
    return (this.data.maxPulseWidth - this.data.minPulseWidth) * velocity_user / Math.abs(this.data.maxPosition - this.data.minPosition);
  }
  /** @internal */


  _accelUser(accel_us) {
    return Math.abs(this.data.maxPosition - this.data.minPosition) * accel_us / (this.data.maxPulseWidth - this.data.minPulseWidth);
  }
  /** @internal */


  _accelUS(accel_user) {
    return (this.data.maxPulseWidth - this.data.minPulseWidth) * accel_user / Math.abs(this.data.maxPosition - this.data.minPosition);
  }

  getAcceleration() {
    this._assertOpen();

    if (this.data.acceleration === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this._accelUser(this.data.acceleration);
  }

  getMinAcceleration() {
    this._assertOpen();

    if (this.data.minAcceleration === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this._accelUser(this.data.minAcceleration);
  }

  getMaxAcceleration() {
    this._assertOpen();

    if (this.data.maxAcceleration === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this._accelUser(this.data.maxAcceleration);
  }

  getPosition() {
    this._assertOpen();

    if (this.data.position === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this._positionUser(this.data.position);
  }

  setMaxPosition(maxPosition) {
    this._assertOpen();

    this.data.maxPosition = maxPosition;
  }

  setMinPosition(minPosition) {
    this._assertOpen();

    this.data.minPosition = minPosition;
  }

  getTargetPosition() {
    this._assertOpen();

    if (this.data.targetPosition === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this._positionUser(this.data.targetPosition);
  }

  getVelocity() {
    this._assertOpen();

    if (this.data.velocity === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this._velocityUser(this.data.velocity);
  }

  getVelocityLimit() {
    this._assertOpen();

    if (this.data.velocityLimit === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this._velocityUser(this.data.velocityLimit);
  }

  getMinVelocityLimit() {
    this._assertOpen();

    if (this.data.minVelocityLimit === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this._velocityUser(this.data.minVelocityLimit);
  }

  getMaxVelocityLimit() {
    this._assertOpen();

    if (this.data.maxVelocityLimit === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this._velocityUser(this.data.maxVelocityLimit);
  }

  async setAcceleration(acceleration) {
    this._assertOpen();

    acceleration = this._accelUS(acceleration);
    if (acceleration < this.data.minAcceleration || acceleration > this.data.maxAcceleration) throw new PhidgetError(ErrorCode.INVALID_ARGUMENT, "Value must be in range: " + this.minAcceleration + " - " + this.maxAcceleration + ".");
    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: acceleration
    });
    await bp.send(this._ch, 40);
  }

  async setTargetPosition(targetPosition) {
    this._assertOpen();

    targetPosition = this._positionUS(targetPosition);
    if (targetPosition < this.data.minPulseWidth || targetPosition > this.data.maxPulseWidth) throw new PhidgetError(ErrorCode.INVALID_ARGUMENT, "Value must be in range: " + this.minPosition + " - " + this.maxPosition + ".");
    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: targetPosition
    });
    await bp.send(this._ch, 83);
  }

  async setVelocityLimit(velocityLimit) {
    this._assertOpen();

    velocityLimit = this._velocityUS(velocityLimit);
    if (velocityLimit < this.data.minVelocityLimit || velocityLimit > this.data.maxVelocityLimit) throw new PhidgetError(ErrorCode.INVALID_ARGUMENT, "Value must be in range: " + this.minVelocityLimit + " - " + this.maxVelocityLimit + ".");
    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: velocityLimit
    });
    await bp.send(this._ch, 85);
  }

}

class VoltageOutputBase extends PhidgetChannel {
  constructor(ch) {
    super(ch);
    this._class = ChannelClass.VOLTAGE_OUTPUT;
    this.name = "VoltageOutput";
    this.data = this._initData();
  }
  /** @internal */


  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 56:
        this.data.enabled = bp.entries[0].v;

        this._FIREPropertyChange('Enabled', bp);

        break;

      case 146:
        break;

      case 147:
        break;

      case 86:
        this.data.voltage = bp.entries[0].v;

        this._FIREPropertyChange('Voltage', bp);

        break;

      case 87:
        this.data.voltageOutputRange = bp.entries[0].v;

        this._FIREPropertyChange('VoltageOutputRange', bp);

        break;

      default:
        throw new PhidgetError(ErrorCode.INVALID_PACKET, "Unsupported bridge packet: 0x" + bp.vpkt.toString(16));
    }
  }
  /** @internal */


  _initData() {
    return {
      enabled: 2,
      maxVoltage: 1e+300,
      minVoltage: 1e+300,
      voltage: 1e+300,
      voltageOutputRange: 2147483647,
      maxFailsafeTime: 4294967295,
      minFailsafeTime: 4294967295
    };
  }
  /** @internal */


  _initAfterOpen() {}
  /** @internal */


  async _setDefaults() {}
  /** @internal */


  _hasInitialState() {
    return true;
  }
  /** @internal */


  _fireInitialEvents() {}
  /**
   * Enable the output voltage by setting `enabled` to true.
   *
   * *   Disable the output by seting `enabled` to false to save power.
   * @throws {@link PhidgetError}
   */


  get enabled() {
    return this.getEnabled();
  }
  /**
   * The minimum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @throws {@link PhidgetError}
   */


  get minFailsafeTime() {
    return this.getMinFailsafeTime();
  }
  /**
   * The maximum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @throws {@link PhidgetError}
   */


  get maxFailsafeTime() {
    return this.getMaxFailsafeTime();
  }
  /**
   * The voltage value that the channel will output.
   *
   * *   The `voltage` value is bounded by `minVoltage` and `maxVoltage`.
   * *   The voltage value will not be output until `enabled` is set to true.
   * @throws {@link PhidgetError}
   */


  get voltage() {
    return this.getVoltage();
  }
  /**
   * The minimum value that `voltage` can be set to.
   * @throws {@link PhidgetError}
   */


  get minVoltage() {
    return this.getMinVoltage();
  }
  /**
   * The maximum value that `voltage` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxVoltage() {
    return this.getMaxVoltage();
  }
  /**
   * Choose a `voltageOutputRange` that best suits your application.
   *
   * *   Changing the `voltageOutputRange` will also affect the `minVoltage` and `maxVoltage` values.
   * @throws {@link PhidgetError}
   */


  get voltageOutputRange() {
    return this.getVoltageOutputRange();
  }
  /**
   * Enable the output voltage by setting `enabled` to true.
   *
   * *   Disable the output by seting `enabled` to false to save power.
   * @throws {@link PhidgetError}
   * @param enabled - The enabled value
   */


  async setEnabled(enabled) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: enabled ? 1 : 0
    });
    await bp.send(this._ch, 56);
  }
  /**
   * Enable the output voltage by setting `enabled` to true.
   *
   * *   Disable the output by seting `enabled` to false to save power.
   * @returns The enabled value
   * @throws {@link PhidgetError}
   */


  getEnabled() {
    this._assertOpen();

    if (this.data.enabled === 2) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return !!this.data.enabled;
  }
  /**
   * Enables the **failsafe** feature for the channel, with a given **failsafe time**.
   *
   * The **failsafe** feature is intended for use in applications where it is important for the channel to enter a known _safe state_ if the program controlling it locks up or crashes. If you do not enable the failsafe feature, the channel will carry out whatever instructions it was last given until it is explicitly told to stop.
   *
   * Enabling the failsafe feature starts a recurring **failsafe timer** for the channel. Once the failsafe timer is enabled, it must be reset within the specified time or the channel will enter a **failsafe state**. The failsafe timer may be reset by sending any valid command to the device\*. Resetting the failsafe timer will reload the timer with the specified _failsafe time_, starting when the message to reset the timer is received by the Phidget.
   *
   * _\*(**get** requests do not typically send commands and won't reset the failsafe timer)_
   *
   * For example: if the failsafe is enabled with a **failsafe time** of 1000ms, you will have 1000ms to reset the failsafe timer. Every time the failsafe timer is reset, you will have 1000ms from that time to reset the failsafe again.
   *
   * If the failsafe timer is not reset before it runs out, the channel will enter a **failsafe state**. For Voltage Output channels, this will set the output voltage to 0V. Once the channel enters the **failsafe state**, it will reject any further input until the channel is reopened.
   *
   * To prevent the channel from falsely entering the failsafe state, we recommend resetting the failsafe timer as frequently as is practical for your application. A good rule of thumb is to not let more than a third of the failsafe time pass before resetting the timer.
   *
   * Once the failsafe timer has been set, it cannot be disabled by any means other than closing and reopening the channel.
   * @throws {@link PhidgetError}
   * @param failsafeTime - Failsafe timeout in milliseconds
   */


  async enableFailsafe(failsafeTime) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: failsafeTime
    });
    await bp.send(this._ch, 146);
  }
  /**
   * The minimum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @returns The failsafe time
   * @throws {@link PhidgetError}
   */


  getMinFailsafeTime() {
    this._assertOpen();

    if (this.data.minFailsafeTime === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minFailsafeTime;
  }
  /**
   * The maximum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @returns The failsafe time
   * @throws {@link PhidgetError}
   */


  getMaxFailsafeTime() {
    this._assertOpen();

    if (this.data.maxFailsafeTime === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxFailsafeTime;
  }
  /**
   * Resets the failsafe timer, if one has been set. See `enableFailsafe()` for details.
   *
   * This function will fail if no failsafe timer has been set for the channel.
   * @throws {@link PhidgetError}
   */


  async resetFailsafe() {
    this._assertOpen();

    const bp = new BridgePacket();
    await bp.send(this._ch, 147);
  }
  /**
   * The voltage value that the channel will output.
   *
   * *   The `voltage` value is bounded by `minVoltage` and `maxVoltage`.
   * *   The voltage value will not be output until `enabled` is set to true.
   * @returns The voltage value
   * @throws {@link PhidgetError}
   */


  getVoltage() {
    this._assertOpen();

    if (this.data.voltage === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.voltage;
  }
  /**
   * The voltage value that the channel will output.
   *
   * *   The `voltage` value is bounded by `minVoltage` and `maxVoltage`.
   * *   The voltage value will not be output until `enabled` is set to true.
   * @throws {@link PhidgetError}
   * @param voltage - The voltage value
   */


  async setVoltage(voltage) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: voltage
    });
    await bp.send(this._ch, 86);
  }
  /**
   * The minimum value that `voltage` can be set to.
   * @returns The voltage value
   * @throws {@link PhidgetError}
   */


  getMinVoltage() {
    this._assertOpen();

    if (this.data.minVoltage === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minVoltage;
  }
  /**
   * The maximum value that `voltage` can be set to.
   * @returns The voltage value
   * @throws {@link PhidgetError}
   */


  getMaxVoltage() {
    this._assertOpen();

    if (this.data.maxVoltage === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxVoltage;
  }
  /**
   * Choose a `voltageOutputRange` that best suits your application.
   *
   * *   Changing the `voltageOutputRange` will also affect the `minVoltage` and `maxVoltage` values.
   * @returns The output range value
   * @throws {@link PhidgetError}
   */


  getVoltageOutputRange() {
    this._assertOpen();

    if (this.data.voltageOutputRange === 2147483647) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.voltageOutputRange;
  }
  /**
   * Choose a `voltageOutputRange` that best suits your application.
   *
   * *   Changing the `voltageOutputRange` will also affect the `minVoltage` and `maxVoltage` values.
   * @throws {@link PhidgetError}
   * @param voltageOutputRange - The output range value
   */


  async setVoltageOutputRange(voltageOutputRange) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: voltageOutputRange
    });
    await bp.send(this._ch, 87);
  }

}

/** @public */

class VoltageOutput extends VoltageOutputBase {
  /** @internal */
  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 87:
        super._bridgeInput(bp);

        switch (this.data.voltageOutputRange) {
          case VoltageOutputRange.VOLTS_10:
            this.data.minVoltage = -10;
            this.data.maxVoltage = 10;
            break;

          case VoltageOutputRange.VOLTS_5:
            this.data.minVoltage = 0;
            this.data.maxVoltage = 5;
            break;
        }

        this._FIREPropertyChange('MinVoltage', bp);

        this._FIREPropertyChange('MaxVoltage', bp);

        break;

      default:
        super._bridgeInput(bp);

        break;
    }
  }

}

class AccelerometerBase extends PhidgetChannel {
  constructor(ch) {
    super(ch);
    this.onAccelerationChange = null;
    this._class = ChannelClass.ACCELEROMETER;
    this.name = "Accelerometer";
    this.data = this._initData();
  }
  /** @internal */


  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 46:
        this.data.accelerationChangeTrigger = bp.entries[0].v;

        this._FIREPropertyChange('AccelerationChangeTrigger', bp);

        break;

      case 54:
        if (bp.entryCount > 1) this.data.dataInterval = bp.entries[1].v;else this.data.dataInterval = bp.entries[0].v;

        this._FIREPropertyChange('DataInterval', bp);

        this._FIREPropertyChange('DataRate', bp);

        break;

      case 170:
        this.data.heatingEnabled = bp.entries[0].v;

        this._FIREPropertyChange('HeatingEnabled', bp);

        break;

      case 145:
        this.data.precision = bp.entries[0].v;

        this._FIREPropertyChange('Precision', bp);

        break;

      case 1:
        {
          this.data.acceleration = bp.entries[0].v;
          this.data.timestamp = bp.entries[1].v;

          if (this._isAttachedDone && this.onAccelerationChange) {
            try {
              this.onAccelerationChange(this.data.acceleration, this.data.timestamp);
            } catch (err) {
              logEventException(err);
            }
          }

          break;
        }

      default:
        throw new PhidgetError(ErrorCode.INVALID_PACKET, "Unsupported bridge packet: 0x" + bp.vpkt.toString(16));
    }
  }
  /** @internal */


  _initData() {
    return {
      dataInterval: 1e+300,
      timestamp: 1e+300,
      maxDataInterval: 4294967295,
      minDataRate: 1e+300,
      maxDataRate: 1e+300,
      maxAcceleration: [1e+300, 1e+300, 1e+300],
      maxAccelerationChangeTrigger: 1e+300,
      minDataInterval: 4294967295,
      minAcceleration: [1e+300, 1e+300, 1e+300],
      minAccelerationChangeTrigger: 1e+300,
      acceleration: [1e+300, 1e+300, 1e+300],
      accelerationChangeTrigger: 1e+300,
      axisCount: 2147483647,
      precision: 2147483647,
      heatingEnabled: 2
    };
  }
  /** @internal */


  _initAfterOpen() {}
  /** @internal */


  async _setDefaults() {}
  /** @internal */


  _hasInitialState() {
    return true;
  }
  /** @internal */


  _fireInitialEvents() {}
  /**
   * The most recent acceleration value that the channel has reported.
   *
   * *   This value will always be between `minAcceleration` and `maxAcceleration`.
   * @throws {@link PhidgetError}
   */


  get acceleration() {
    return this.getAcceleration();
  }
  /**
   * The minimum value the `AccelerationChange` event will report.
   * @throws {@link PhidgetError}
   */


  get minAcceleration() {
    return this.getMinAcceleration();
  }
  /**
   * The maximum value the `AccelerationChange` event will report.
   * @throws {@link PhidgetError}
   */


  get maxAcceleration() {
    return this.getMaxAcceleration();
  }
  /**
   * The channel will not issue a `AccelerationChange` event until the acceleration value has changed by the amount specified by the `accelerationChangeTrigger`.
   *
   * *   Setting the `accelerationChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   */


  get accelerationChangeTrigger() {
    return this.getAccelerationChangeTrigger();
  }
  /**
   * The minimum value that `accelerationChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */


  get minAccelerationChangeTrigger() {
    return this.getMinAccelerationChangeTrigger();
  }
  /**
   * The maximum value that `accelerationChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxAccelerationChangeTrigger() {
    return this.getMaxAccelerationChangeTrigger();
  }
  /**
   * The number of axes the channel can measure acceleration on.
   *
   * *   See your device's User Guide for more information about the number of axes and their orientation.
   * @throws {@link PhidgetError}
   */


  get axisCount() {
    return this.getAxisCount();
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `AccelerationChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `AccelerationChange` events can also be affected by the `accelerationChangeTrigger`.
   * @throws {@link PhidgetError}
   */


  get dataInterval() {
    return this.getDataInterval();
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataInterval() {
    return this.getMinDataInterval();
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataInterval() {
    return this.getMaxDataInterval();
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */


  get dataRate() {
    return this.getDataRate();
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataRate() {
    return this.getMinDataRate();
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataRate() {
    return this.getMaxDataRate();
  }
  /**
   * Set to TRUE to enable the temperature stabilization feature of this device. This enables onboard heating elements to bring the board up to a known temperature to minimize ambient temerature effects on the sensor's reading. You can leave this setting FALSE to conserve power consumption.
   *
   * If you enable heating, it is strongly recommended to keep the board in its enclosure to keep it insulated from moving air.
   *
   * This property is shared by any and all spatial-related objects on this device (Accelerometer, Gyroscope, Magnetometer, Spatial)
   * @throws {@link PhidgetError}
   */


  get heatingEnabled() {
    return this.getHeatingEnabled();
  }
  /**
   * Selects between high/low precision sensing chips.
   * @throws {@link PhidgetError}
   * @internal
   */


  get precision() {
    return this.getPrecision();
  }
  /**
   * The most recent timestamp value that the channel has reported. This is an extremely accurate time measurement streamed from the device.
   *
   * *   If your application requires a time measurement, you should use this value over a local software timestamp.
   * @throws {@link PhidgetError}
   */


  get timestamp() {
    return this.getTimestamp();
  }
  /**
   * The most recent acceleration value that the channel has reported.
   *
   * *   This value will always be between `minAcceleration` and `maxAcceleration`.
   * @returns The acceleration values
   * @throws {@link PhidgetError}
   */


  getAcceleration() {
    this._assertOpen();

    if (this.data.acceleration.includes(1e+300)) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.acceleration;
  }
  /**
   * The minimum value the `AccelerationChange` event will report.
   * @returns The minimum acceleration value
   * @throws {@link PhidgetError}
   */


  getMinAcceleration() {
    this._assertOpen();

    if (this.data.minAcceleration.includes(1e+300)) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minAcceleration;
  }
  /**
   * The maximum value the `AccelerationChange` event will report.
   * @returns The maximum acceleration values
   * @throws {@link PhidgetError}
   */


  getMaxAcceleration() {
    this._assertOpen();

    if (this.data.maxAcceleration.includes(1e+300)) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxAcceleration;
  }
  /**
   * The channel will not issue a `AccelerationChange` event until the acceleration value has changed by the amount specified by the `accelerationChangeTrigger`.
   *
   * *   Setting the `accelerationChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */


  getAccelerationChangeTrigger() {
    this._assertOpen();

    if (this.data.accelerationChangeTrigger === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.accelerationChangeTrigger;
  }
  /**
   * The channel will not issue a `AccelerationChange` event until the acceleration value has changed by the amount specified by the `accelerationChangeTrigger`.
   *
   * *   Setting the `accelerationChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   * @param accelerationChangeTrigger - The change trigger value
   */


  async setAccelerationChangeTrigger(accelerationChangeTrigger) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: accelerationChangeTrigger
    });
    await bp.send(this._ch, 46);
  }
  /**
   * The minimum value that `accelerationChangeTrigger` can be set to.
   * @returns The minimum change trigger value
   * @throws {@link PhidgetError}
   */


  getMinAccelerationChangeTrigger() {
    this._assertOpen();

    if (this.data.minAccelerationChangeTrigger === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minAccelerationChangeTrigger;
  }
  /**
   * The maximum value that `accelerationChangeTrigger` can be set to.
   * @returns The maximum change trigger value
   * @throws {@link PhidgetError}
   */


  getMaxAccelerationChangeTrigger() {
    this._assertOpen();

    if (this.data.maxAccelerationChangeTrigger === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxAccelerationChangeTrigger;
  }
  /**
   * The number of axes the channel can measure acceleration on.
   *
   * *   See your device's User Guide for more information about the number of axes and their orientation.
   * @returns The number of axes
   * @throws {@link PhidgetError}
   */


  getAxisCount() {
    this._assertOpen();

    if (this.data.axisCount === 2147483647) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.axisCount;
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `AccelerationChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `AccelerationChange` events can also be affected by the `accelerationChangeTrigger`.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getDataInterval() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.dataInterval;
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `AccelerationChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `AccelerationChange` events can also be affected by the `accelerationChangeTrigger`.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */


  async setDataInterval(dataInterval) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: dataInterval
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The minimum data interval value
   * @throws {@link PhidgetError}
   */


  getMinDataInterval() {
    this._assertOpen();

    if (this.data.minDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataInterval;
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getMaxDataInterval() {
    this._assertOpen();

    if (this.data.maxDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */


  getDataRate() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return 1000.0 / this.data.dataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */


  async setDataRate(dataRate) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: Math.round(1000.0 / dataRate)
    });
    bp.set({
      name: "1",
      type: "g",
      value: 1000.0 / dataRate
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMinDataRate() {
    this._assertOpen();

    if (this.data.minDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataRate;
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMaxDataRate() {
    this._assertOpen();

    if (this.data.maxDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataRate;
  }
  /**
   * Set to TRUE to enable the temperature stabilization feature of this device. This enables onboard heating elements to bring the board up to a known temperature to minimize ambient temerature effects on the sensor's reading. You can leave this setting FALSE to conserve power consumption.
   *
   * If you enable heating, it is strongly recommended to keep the board in its enclosure to keep it insulated from moving air.
   *
   * This property is shared by any and all spatial-related objects on this device (Accelerometer, Gyroscope, Magnetometer, Spatial)
   * @returns Whether self-heating temperature stabilization is enabled
   * @throws {@link PhidgetError}
   */


  getHeatingEnabled() {
    this._assertOpen();

    if (this.data.heatingEnabled === 2) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return !!this.data.heatingEnabled;
  }
  /**
   * Set to TRUE to enable the temperature stabilization feature of this device. This enables onboard heating elements to bring the board up to a known temperature to minimize ambient temerature effects on the sensor's reading. You can leave this setting FALSE to conserve power consumption.
   *
   * If you enable heating, it is strongly recommended to keep the board in its enclosure to keep it insulated from moving air.
   *
   * This property is shared by any and all spatial-related objects on this device (Accelerometer, Gyroscope, Magnetometer, Spatial)
   * @throws {@link PhidgetError}
   * @param heatingEnabled - Whether self-heating temperature stabilization is enabled
   */


  async setHeatingEnabled(heatingEnabled) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: heatingEnabled ? 1 : 0
    });
    await bp.send(this._ch, 170);
  }
  /**
   * Selects between high/low precision sensing chips.
   * @returns The sensor precision value
   * @throws {@link PhidgetError}
   * @internal
   */


  getPrecision() {
    this._assertOpen();

    if (this.data.precision === 2147483647) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.precision;
  }
  /**
   * Selects between high/low precision sensing chips.
   * @throws {@link PhidgetError}
   * @param precision - The sensor precision value
   * @internal
   */


  async setPrecision(precision) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: precision
    });
    await bp.send(this._ch, 145);
  }
  /**
   * The most recent timestamp value that the channel has reported. This is an extremely accurate time measurement streamed from the device.
   *
   * *   If your application requires a time measurement, you should use this value over a local software timestamp.
   * @returns The timestamp value
   * @throws {@link PhidgetError}
   */


  getTimestamp() {
    this._assertOpen();

    if (this.data.timestamp === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.timestamp;
  }

}

/** @public */

class Accelerometer extends AccelerometerBase {
  /** @internal */
  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 10:
        if (bp.entryCount > 1) this.data.dataInterval = bp.getNumber(1);else this.data.dataInterval = bp.getNumber(0);

        this._FIREPropertyChange('DataInterval');

        this._FIREPropertyChange('DataRate');

        break;

      case 179:
        this.data.heatingEnabled = bp.entries[0].v;

        this._FIREPropertyChange('HeatingEnabled', bp);

        break;

      default:
        super._bridgeInput(bp);

        break;
    }
  }
  /** @internal */


  _errorHandler(code) {
    switch (code) {
      case ErrorEventCode.SATURATION:
        this.data.acceleration = [1e+300, 1e+300, 1e+300];
        this.data.timestamp = 1e+300;
        this._gotAccelerationChangeErrorEvent = true;
        break;
    }
  }

}

var global$1 = global$D;
var aCallable = aCallable$8;
var toObject = toObject$3;
var IndexedObject = indexedObject;
var lengthOfArrayLike = lengthOfArrayLike$3;
var TypeError$1 = global$1.TypeError;
var createMethod$1 = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aCallable(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(O);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError$1('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};
var arrayReduce = {
  left: createMethod$1(false),
  right: createMethod$1(true)
};

var fails$1 = fails$f;
var arrayMethodIsStrict$1 = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails$1(function () {
    method.call(null, argument || function () { return 1; }, 1);
  });
};

var $$1 = _export;
var $reduce = arrayReduce.left;
var arrayMethodIsStrict = arrayMethodIsStrict$1;
var CHROME_VERSION = engineV8Version;
var IS_NODE = engineIsNode;
var STRICT_METHOD = arrayMethodIsStrict('reduce');
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
$$1({ target: 'Array', proto: true, forced: !STRICT_METHOD || CHROME_BUG }, {
  reduce: function reduce(callbackfn ) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  }
});

var entryVirtual$1 = entryVirtual$3;
var reduce$3 = entryVirtual$1('Array').reduce;

var isPrototypeOf$1 = objectIsPrototypeOf;
var method$1 = reduce$3;
var ArrayPrototype = Array.prototype;
var reduce$2 = function (it) {
  var own = it.reduce;
  return it === ArrayPrototype || (isPrototypeOf$1(ArrayPrototype, it) && own === ArrayPrototype.reduce) ? method$1 : own;
};

var parent$1 = reduce$2;
var reduce$1 = parent$1;

var reduce = reduce$1;

class VoltageInputBase extends PhidgetChannel {
  constructor(ch) {
    super(ch);
    this.onVoltageChange = null;
    this.onSensorChange = null;
    this._class = ChannelClass.VOLTAGE_INPUT;
    this.name = "VoltageInput";
    this.data = this._initData();
  }
  /** @internal */


  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 54:
        if (bp.entryCount > 1) this.data.dataInterval = bp.entries[1].v;else this.data.dataInterval = bp.entries[0].v;

        this._FIREPropertyChange('DataInterval', bp);

        this._FIREPropertyChange('DataRate', bp);

        break;

      case 74:
        this.data.powerSupply = bp.entries[0].v;

        this._FIREPropertyChange('PowerSupply', bp);

        break;

      case 79:
        this.data.sensorType = bp.entries[0].v;

        this._FIREPropertyChange('SensorType', bp);

        break;

      case 122:
        this.data.sensorValueChangeTrigger = bp.entries[0].v;

        this._FIREPropertyChange('SensorValueChangeTrigger', bp);

        break;

      case 46:
        this.data.voltageChangeTrigger = bp.entries[0].v;

        this._FIREPropertyChange('VoltageChangeTrigger', bp);

        break;

      case 87:
        this.data.voltageRange = bp.entries[0].v;

        this._FIREPropertyChange('VoltageRange', bp);

        break;

      case 115:
        {
          this.data.sensorValue = bp.entries[0].v;
          const sensorUnit = {
            unit: bp.entries["UnitInfo.unit"].v,
            name: bp.entries["UnitInfo.name"].v,
            symbol: bp.entries["UnitInfo.symbol"].v
          };
          this.data.sensorUnit = sensorUnit;

          if (this._isAttachedDone && this.onSensorChange) {
            try {
              this.onSensorChange(this.data.sensorValue, this.data.sensorUnit);
            } catch (err) {
              logEventException(err);
            }
          }

          break;
        }

      default:
        throw new PhidgetError(ErrorCode.INVALID_PACKET, "Unsupported bridge packet: 0x" + bp.vpkt.toString(16));
    }
  }
  /** @internal */


  _initData() {
    return {
      dataInterval: 1e+300,
      minDataInterval: 4294967295,
      maxDataInterval: 4294967295,
      minDataRate: 1e+300,
      maxDataRate: 1e+300,
      powerSupply: 2147483647,
      sensorType: 2147483647,
      sensorUnit: null,
      sensorValue: 1e+300,
      voltage: 1e+300,
      minVoltage: 1e+300,
      maxVoltage: 1e+300,
      voltageChangeTrigger: 1e+300,
      minVoltageChangeTrigger: 1e+300,
      maxVoltageChangeTrigger: 1e+300,
      voltageRange: 2147483647,
      sensorValueChangeTrigger: 1e+300
    };
  }
  /** @internal */


  _initAfterOpen() {}
  /** @internal */


  async _setDefaults() {}
  /** @internal */


  _hasInitialState() {
    return true;
  }
  /** @internal */


  _fireInitialEvents() {}
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between events can also be affected by the change trigger.
   * @throws {@link PhidgetError}
   */


  get dataInterval() {
    return this.getDataInterval();
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataInterval() {
    return this.getMinDataInterval();
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataInterval() {
    return this.getMaxDataInterval();
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */


  get dataRate() {
    return this.getDataRate();
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataRate() {
    return this.getMinDataRate();
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataRate() {
    return this.getMaxDataRate();
  }
  /**
   * Choose the power supply voltage.
   *
   * *   Set this to the voltage specified in the attached sensor's data sheet to power it.
   *
   * *   Set to `phidget22.PowerSupply.OFF` to turn off the supply to save power.
   * @throws {@link PhidgetError}
   */


  get powerSupply() {
    return this.getPowerSupply();
  }
  /**
   * We sell a variety of analog sensors that do not have their own API, they simply output a voltage that can be converted to a digital value using a specific formula. By matching the `sensorType` to your analog sensor, the correct formula will automatically be applied to data when you get the `sensorValue` or subscribe to the `SensorChange` event.
   *
   * *   The `SensorChange` event has its own change trigger associated with it: `sensorValueChangeTrigger`.
   * *   Any data from getting the `sensorValue` or subscribing to the `SensorChange` event will have a `sensorUnit` associated with it.
   *
   * **Note:** Unlike other properties such as `Phidget.deviceSerialNumber` or `Phidget.channel`, `sensorType` is set after the device is opened, not before.
   * @throws {@link PhidgetError}
   */


  get sensorType() {
    return this.getSensorType();
  }
  /**
   * The unit of measurement that applies to the sensor values of the `sensorType` that has been selected.
   *
   * *   Helps keep track of the type of information being calculated from the voltage input.
   * @throws {@link PhidgetError}
   */


  get sensorUnit() {
    return this.getSensorUnit();
  }
  /**
   * The most recent sensor value that the channel has reported.
   *
   * *   Use `sensorUnit` to get the measurement units that are associated with the `sensorValue`
   * @throws {@link PhidgetError}
   */


  get sensorValue() {
    return this.getSensorValue();
  }
  /**
   * The channel will not issue a `SensorChange` event until the sensor value has changed by the amount specified by the `sensorValueChangeTrigger`.
   *
   * *   Setting the `sensorValueChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   */


  get sensorValueChangeTrigger() {
    return this.getSensorValueChangeTrigger();
  }
  /**
   * The most recent voltage value that the channel has reported.
   *
   * *   This value will always be between `minVoltage` and `maxVoltage`.
   * @throws {@link PhidgetError}
   */


  get voltage() {
    return this.getVoltage();
  }
  /**
   * The minimum value the `VoltageChange` event will report.
   * @throws {@link PhidgetError}
   */


  get minVoltage() {
    return this.getMinVoltage();
  }
  /**
   * The maximum value the `VoltageChange` event will report.
   * @throws {@link PhidgetError}
   */


  get maxVoltage() {
    return this.getMaxVoltage();
  }
  /**
   * The channel will not issue a `VoltageChange` event until the voltage value has changed by the amount specified by the `voltageChangeTrigger`.
   *
   * *   Setting the `voltageChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   */


  get voltageChangeTrigger() {
    return this.getVoltageChangeTrigger();
  }
  /**
   * The minimum value that `voltageChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */


  get minVoltageChangeTrigger() {
    return this.getMinVoltageChangeTrigger();
  }
  /**
   * The maximum value that `voltageChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxVoltageChangeTrigger() {
    return this.getMaxVoltageChangeTrigger();
  }
  /**
   * The voltage range you choose should allow you to measure the full range of your input signal.
   *
   * *   A larger `voltageRange` equates to less resolution.
   * *   If a `Saturation` event occurs, increase the voltage range.
   * @throws {@link PhidgetError}
   */


  get voltageRange() {
    return this.getVoltageRange();
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between events can also be affected by the change trigger.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getDataInterval() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.dataInterval;
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between events can also be affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */


  async setDataInterval(dataInterval) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: dataInterval
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getMinDataInterval() {
    this._assertOpen();

    if (this.data.minDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataInterval;
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getMaxDataInterval() {
    this._assertOpen();

    if (this.data.maxDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */


  getDataRate() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return 1000.0 / this.data.dataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */


  async setDataRate(dataRate) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: Math.round(1000.0 / dataRate)
    });
    bp.set({
      name: "1",
      type: "g",
      value: 1000.0 / dataRate
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMinDataRate() {
    this._assertOpen();

    if (this.data.minDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataRate;
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMaxDataRate() {
    this._assertOpen();

    if (this.data.maxDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataRate;
  }
  /**
   * Choose the power supply voltage.
   *
   * *   Set this to the voltage specified in the attached sensor's data sheet to power it.
   *
   * *   Set to `phidget22.PowerSupply.OFF` to turn off the supply to save power.
   * @returns The power supply value
   * @throws {@link PhidgetError}
   */


  getPowerSupply() {
    this._assertOpen();

    if (this.data.powerSupply === 2147483647) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.powerSupply;
  }
  /**
   * Choose the power supply voltage.
   *
   * *   Set this to the voltage specified in the attached sensor's data sheet to power it.
   *
   * *   Set to `phidget22.PowerSupply.OFF` to turn off the supply to save power.
   * @throws {@link PhidgetError}
   * @param powerSupply - The power supply value
   */


  async setPowerSupply(powerSupply) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: powerSupply
    });
    await bp.send(this._ch, 74);
  }
  /**
   * We sell a variety of analog sensors that do not have their own API, they simply output a voltage that can be converted to a digital value using a specific formula. By matching the `sensorType` to your analog sensor, the correct formula will automatically be applied to data when you get the `sensorValue` or subscribe to the `SensorChange` event.
   *
   * *   The `SensorChange` event has its own change trigger associated with it: `sensorValueChangeTrigger`.
   * *   Any data from getting the `sensorValue` or subscribing to the `SensorChange` event will have a `sensorUnit` associated with it.
   *
   * **Note:** Unlike other properties such as `Phidget.deviceSerialNumber` or `Phidget.channel`, `sensorType` is set after the device is opened, not before.
   * @returns The sensor type value
   * @throws {@link PhidgetError}
   */


  getSensorType() {
    this._assertOpen();

    if (this.data.sensorType === 2147483647) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.sensorType;
  }
  /**
   * We sell a variety of analog sensors that do not have their own API, they simply output a voltage that can be converted to a digital value using a specific formula. By matching the `sensorType` to your analog sensor, the correct formula will automatically be applied to data when you get the `sensorValue` or subscribe to the `SensorChange` event.
   *
   * *   The `SensorChange` event has its own change trigger associated with it: `sensorValueChangeTrigger`.
   * *   Any data from getting the `sensorValue` or subscribing to the `SensorChange` event will have a `sensorUnit` associated with it.
   *
   * **Note:** Unlike other properties such as `Phidget.deviceSerialNumber` or `Phidget.channel`, `sensorType` is set after the device is opened, not before.
   * @throws {@link PhidgetError}
   * @param sensorType - The sensor type value
   */


  async setSensorType(sensorType) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: sensorType
    });
    await bp.send(this._ch, 79);
  }
  /**
   * The unit of measurement that applies to the sensor values of the `sensorType` that has been selected.
   *
   * *   Helps keep track of the type of information being calculated from the voltage input.
   * @returns The sensor unit information corresponding to the `sensorValue`.
   * @throws {@link PhidgetError}
   */


  getSensorUnit() {
    this._assertOpen();

    if (this.data.sensorUnit === null) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.sensorUnit;
  }
  /**
   * The most recent sensor value that the channel has reported.
   *
   * *   Use `sensorUnit` to get the measurement units that are associated with the `sensorValue`
   * @returns The sensor value
   * @throws {@link PhidgetError}
   */


  getSensorValue() {
    this._assertOpen();

    if (this.data.sensorValue === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.sensorValue;
  }
  /**
   * The channel will not issue a `SensorChange` event until the sensor value has changed by the amount specified by the `sensorValueChangeTrigger`.
   *
   * *   Setting the `sensorValueChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */


  getSensorValueChangeTrigger() {
    this._assertOpen();

    if (this.data.sensorValueChangeTrigger === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.sensorValueChangeTrigger;
  }
  /**
   * The channel will not issue a `SensorChange` event until the sensor value has changed by the amount specified by the `sensorValueChangeTrigger`.
   *
   * *   Setting the `sensorValueChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   * @param sensorValueChangeTrigger - The change trigger value
   */


  async setSensorValueChangeTrigger(sensorValueChangeTrigger) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: sensorValueChangeTrigger
    });
    await bp.send(this._ch, 122);
  }
  /**
   * The most recent voltage value that the channel has reported.
   *
   * *   This value will always be between `minVoltage` and `maxVoltage`.
   * @returns The voltage value
   * @throws {@link PhidgetError}
   */


  getVoltage() {
    this._assertOpen();

    if (this.data.voltage === 1e+300 || Number.isNaN(this.data.voltage)) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    if (this.data.voltage > this.data.maxVoltage) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE_HIGH);
    if (this.data.voltage < this.data.minVoltage) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE_LOW);
    return this.data.voltage;
  }
  /**
   * The minimum value the `VoltageChange` event will report.
   * @returns The voltage value
   * @throws {@link PhidgetError}
   */


  getMinVoltage() {
    this._assertOpen();

    if (this.data.minVoltage === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minVoltage;
  }
  /**
   * The maximum value the `VoltageChange` event will report.
   * @returns The voltage value
   * @throws {@link PhidgetError}
   */


  getMaxVoltage() {
    this._assertOpen();

    if (this.data.maxVoltage === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxVoltage;
  }
  /**
   * The channel will not issue a `VoltageChange` event until the voltage value has changed by the amount specified by the `voltageChangeTrigger`.
   *
   * *   Setting the `voltageChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */


  getVoltageChangeTrigger() {
    this._assertOpen();

    if (this.data.voltageChangeTrigger === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.voltageChangeTrigger;
  }
  /**
   * The channel will not issue a `VoltageChange` event until the voltage value has changed by the amount specified by the `voltageChangeTrigger`.
   *
   * *   Setting the `voltageChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   * @param voltageChangeTrigger - The change trigger value
   */


  async setVoltageChangeTrigger(voltageChangeTrigger) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: voltageChangeTrigger
    });
    await bp.send(this._ch, 46);
  }
  /**
   * The minimum value that `voltageChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */


  getMinVoltageChangeTrigger() {
    this._assertOpen();

    if (this.data.minVoltageChangeTrigger === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minVoltageChangeTrigger;
  }
  /**
   * The maximum value that `voltageChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */


  getMaxVoltageChangeTrigger() {
    this._assertOpen();

    if (this.data.maxVoltageChangeTrigger === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxVoltageChangeTrigger;
  }
  /**
   * The voltage range you choose should allow you to measure the full range of your input signal.
   *
   * *   A larger `voltageRange` equates to less resolution.
   * *   If a `Saturation` event occurs, increase the voltage range.
   * @returns The voltage range value
   * @throws {@link PhidgetError}
   */


  getVoltageRange() {
    this._assertOpen();

    if (this.data.voltageRange === 2147483647) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.voltageRange;
  }
  /**
   * The voltage range you choose should allow you to measure the full range of your input signal.
   *
   * *   A larger `voltageRange` equates to less resolution.
   * *   If a `Saturation` event occurs, increase the voltage range.
   * @throws {@link PhidgetError}
   * @param voltageRange - The voltage range value
   */


  async setVoltageRange(voltageRange) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: voltageRange
    });
    await bp.send(this._ch, 87);
  }

}

/** @public */

class VoltageInput extends VoltageInputBase {
  constructor(ch) {
    super(ch);
    this._private = {
      voltageBuffer: [],
      voltageBufferIndex: 0,
      voltageBufferReady: false,
      motionSensorCountdown: 0,
      motionSensorBaseline: 1e+300,
      VOLTAGE_BUFFER_LEN: 25
    };
  }
  /** @internal */


  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 10:
        if (bp.entryCount > 1) this.data.dataInterval = bp.getNumber(1);else this.data.dataInterval = bp.getNumber(0);

        this._FIREPropertyChange('DataInterval', bp);

        this._FIREPropertyChange('DataRate', bp);

        break;

      case 27:
        this.data.minDataInterval = bp.getNumber(0);

        this._FIREPropertyChange('MinDataInterval', bp);

        break;

      case 79:
        super._bridgeInput(bp);

        this._bangSensorVoltage();

        switch (this.data.sensorType) {
          case VoltageSensorType.PN_MOT2002_LOW:
          case VoltageSensorType.PN_MOT2002_MED:
          case VoltageSensorType.PN_MOT2002_HIGH:
            {
              const subbp = new BridgePacket();
              subbp.set({
                name: '0',
                type: 'u',
                value: 200
              });
              subbp.sendToChannel(this._ch, 54);
              break;
            }
        }

        break;

      case 101:
        {
          this.data.voltage = bp.getNumber('0');

          this._updateVoltageBuffer(this.data.voltage);

          const sentSensorEvent = this._bangSensorVoltage(true);

          if (sentSensorEvent && this._ch.conn._isRemote) throw new PhidgetError(ErrorCode.UNSUPPORTED);
          break;
        }

      case 87:
        super._bridgeInput(bp);

        switch (this.data.voltageRange) {
          case VoltageRange.MILLIVOLTS_10:
            this.data.minVoltage = -0.01;
            this.data.maxVoltage = 0.01;
            break;

          case VoltageRange.MILLIVOLTS_40:
            this.data.minVoltage = -0.04;
            this.data.maxVoltage = 0.04;
            break;

          case VoltageRange.MILLIVOLTS_200:
            this.data.minVoltage = -0.2;
            this.data.maxVoltage = 0.2;
            break;

          case VoltageRange.MILLIVOLTS_312_5:
            this.data.minVoltage = -0.3125;
            this.data.maxVoltage = 0.3125;
            break;

          case VoltageRange.MILLIVOLTS_400:
            this.data.minVoltage = -0.4;
            this.data.maxVoltage = 0.4;
            break;

          case VoltageRange.MILLIVOLTS_1000:
            this.data.minVoltage = -1.0;
            this.data.maxVoltage = 1.0;
            break;

          case VoltageRange.VOLTS_2:
            this.data.minVoltage = -2.0;
            this.data.maxVoltage = 2.0;
            break;

          case VoltageRange.VOLTS_5:
            this.data.minVoltage = -5.0;
            this.data.maxVoltage = 5.0;
            break;

          case VoltageRange.VOLTS_15:
            this.data.minVoltage = -15.0;
            this.data.maxVoltage = 15.0;
            break;

          case VoltageRange.VOLTS_40:
            this.data.minVoltage = -40.0;
            this.data.maxVoltage = 40.0;
            break;

          case VoltageRange.AUTO:
            switch (this._ch.chDef.uid) {
              case 411:
                this.data.minVoltage = -40.0;
                this.data.maxVoltage = 40.0;
                break;

              case 413:
                this.data.minVoltage = -1.0;
                this.data.maxVoltage = 1.0;
                break;
            }

        }

        this._FIREPropertyChange('MinVoltage', bp);

        this._FIREPropertyChange('MaxVoltage', bp);

        break;

      case 181:
        this.data.powerSupply = bp.entries[0].v;

        this._FIREPropertyChange('PowerSupply', bp);

        break;

      default:
        super._bridgeInput(bp);

        break;
    }
  }
  /** @internal */


  _errorHandler(code) {
    switch (code) {
      case ErrorEventCode.SATURATION:
        this.data.voltage = 1e+300;
        this.data.sensorValue = 1e+300;
        this._gotVoltageChangeErrorEvent = true;
        break;
    }
  }
  /** @internal */


  _initAfterOpen() {
    super._initAfterOpen();

    this._private = {
      voltageBuffer: [],
      voltageBufferIndex: 0,
      voltageBufferReady: false,
      motionSensorCountdown: 0,
      motionSensorBaseline: 1e+300,
      VOLTAGE_BUFFER_LEN: 25
    };
    if (this.data.sensorType === 2147483647) this.data.sensorType = VoltageSensorType.VOLTAGE;
    this.data.sensorUnit = this._getVoltageSensorUnit(this.data.sensorType);
    this.data.sensorValue = this._getVoltageSensorValue(this.data.voltage, this.data.sensorType);
  }
  /** @internal */


  _hasInitialState() {
    if (this.data.voltage == 1e+300 && !this._gotVoltageChangeErrorEvent) return false;
    return super._hasInitialState();
  }
  /** @internal */


  _fireInitialEvents() {
    if (this.data.sensorType != VoltageSensorType.VOLTAGE) {
      if (this.data.sensorValue != 1e+300 && this.data.sensorUnit != null) if (this.onSensorChange) {
        try {
          this.onSensorChange(this.data.sensorValue, this.data.sensorUnit);
        } catch (err) {
          logEventException(err);
        }
      }
    } else {
      if (this.data.voltage != 1e+300) if (this.onVoltageChange) {
        try {
          this.onVoltageChange(this.data.voltage);
        } catch (err) {
          logEventException(err);
        }
      }
    }

    super._fireInitialEvents();
  }
  /** @internal */


  _bangSensorVoltage() {
    let includeVoltage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    let sensorValue;
    let unitInfo;
    let sentSensorEvent = false;

    if (this._ch.supportedBridgePacket(115) && this._ch.conn._isLocal && this.data.sensorType !== VoltageSensorType.VOLTAGE) {
      sensorValue = this._getVoltageSensorValue(this.data.voltage, this.data.sensorType);

      if (!this._getSensorValueInRange(sensorValue, this.data.sensorType)) {
        this.data.sensorValue = 1e+300;

        if (this._isAttachedDone) {
          const bp = new BridgePacket();
          bp.set({
            name: '0',
            type: 'd',
            value: ErrorEventCode.OUT_OF_RANGE
          });
          bp.set({
            name: '1',
            type: 's',
            value: 'Sensor value is outside the valid range for this sensor.'
          });

          this._ch.sendErrorEvent(bp);
        }
      } else if (this.data.sensorValue === 1e+300 || Math.abs(sensorValue - this.data.sensorValue) >= this.data.sensorValueChangeTrigger) {
        this.data.sensorValue = sensorValue;

        if (this._isAttachedDone) {
          unitInfo = this._getVoltageSensorUnit(this.data.sensorType);
          const bp = new BridgePacket();
          bp.set({
            name: '0',
            type: 'g',
            value: sensorValue
          });
          bp.set({
            name: 'UnitInfo.unit',
            type: 'g',
            value: unitInfo.unit
          });
          bp.set({
            name: 'UnitInfo.name',
            type: 's',
            value: unitInfo.name
          });
          bp.set({
            name: 'UnitInfo.symbol',
            type: 's',
            value: unitInfo.symbol
          });
          bp.sendToChannel(this._ch, 115);
        }
      }

      sentSensorEvent = true;
    } else if (includeVoltage) {
      this.data.sensorUnit = this._getVoltageSensorUnit(this.data.sensorType);
      this.data.sensorValue = this._getVoltageSensorValue(this.data.voltage, this.data.sensorType);

      if (this._isAttachedDone && this.onVoltageChange) {
        try {
          this.onVoltageChange(this.data.voltage);
        } catch (err) {
          logEventException(err);
        }
      }
    }

    return sentSensorEvent;
  }
  /** @internal */


  _updateVoltageBuffer(voltage) {
    this._private.voltageBuffer.push(voltage);

    if (this._private.voltageBuffer.length >= this._private.VOLTAGE_BUFFER_LEN) {
      this._private.voltageBufferReady = true;
      if (this._private.voltageBuffer.length > this._private.VOLTAGE_BUFFER_LEN) this._private.voltageBuffer.shift();
    }
  }
  /** @internal */


  _getVoltageSensorValue(voltage, sensorType) {
    if (voltage === 1e+300) return 1e+300;

    switch (sensorType) {
      case VoltageSensorType.PN_1114:
        return RoundDouble(voltage / 0.02 - 50, 3);

      case VoltageSensorType.PN_1117:
        return RoundDouble(voltage * 12 - 30, 3);

      case VoltageSensorType.PN_1123:
        return RoundDouble(voltage * 12 - 30, 3);

      case VoltageSensorType.PN_1127:
        return RoundDouble(voltage * 200, 2);

      case VoltageSensorType.PN_1130_PH:
        return RoundDouble(voltage * 3.56 - 1.889, 4);

      case VoltageSensorType.PN_1130_ORP:
        return RoundDouble((2.5 - voltage) / 1.037, 5);

      case VoltageSensorType.PN_1132:
        return RoundDouble(voltage / 0.225, 4);

      case VoltageSensorType.PN_1133:
        return RoundDouble(16.801 * Math.log(voltage * 200) + 9.872, 4);

      case VoltageSensorType.PN_1135:
        return RoundDouble((voltage - 2.5) / 0.0681, 3);

      case VoltageSensorType.PN_1142:
        return RoundDouble(voltage * 295.7554 + 33.67076, 2);

      case VoltageSensorType.PN_1143:
        return RoundDouble(Math.exp(voltage * 4.77 - 0.56905), 4);

      case VoltageSensorType.PN_3500:
        return RoundDouble(voltage / 0.5, 4);

      case VoltageSensorType.PN_3501:
        return RoundDouble(voltage / 0.2, 4);

      case VoltageSensorType.PN_3502:
        return RoundDouble(voltage / 0.1, 4);

      case VoltageSensorType.PN_3503:
        return RoundDouble(voltage / 0.05, 3);

      case VoltageSensorType.PN_3507:
        return RoundDouble(voltage * 50, 3);

      case VoltageSensorType.PN_3508:
        return RoundDouble(voltage * 50, 3);

      case VoltageSensorType.PN_3509:
        return RoundDouble(voltage * 40, 3);

      case VoltageSensorType.PN_3510:
        return RoundDouble(voltage * 15, 4);

      case VoltageSensorType.PN_3511:
        return RoundDouble(voltage * 2, 4);

      case VoltageSensorType.PN_3512:
        return RoundDouble(voltage * 20, 3);

      case VoltageSensorType.PN_3513:
        return RoundDouble(voltage * 200, 2);

      case VoltageSensorType.PN_3514:
        return RoundDouble(voltage * 1500, 1);

      case VoltageSensorType.PN_3515:
        return RoundDouble(voltage * 1500, 1);

      case VoltageSensorType.PN_3516:
        return RoundDouble(voltage * 250, 2);

      case VoltageSensorType.PN_3517:
        return RoundDouble(voltage * 250, 2);

      case VoltageSensorType.PN_3518:
        return RoundDouble(voltage * 110, 3);

      case VoltageSensorType.PN_3519:
        return RoundDouble(voltage * 330, 2);

      case VoltageSensorType.PN_3584:
        return RoundDouble(voltage * 10, 4);

      case VoltageSensorType.PN_3585:
        return RoundDouble(voltage * 20, 3);

      case VoltageSensorType.PN_3586:
        return RoundDouble(voltage * 50, 3);

      case VoltageSensorType.PN_3587:
        return RoundDouble(voltage * 20 - 50, 3);

      case VoltageSensorType.PN_3588:
        return RoundDouble(voltage * 40 - 100, 3);

      case VoltageSensorType.PN_3589:
        return RoundDouble(voltage * 100 - 250, 3);

      case VoltageSensorType.PN_MOT2002_LOW:
        return this._doMotionSensorCalculations(0.8) ? 1 : 0;

      case VoltageSensorType.PN_MOT2002_MED:
        return this._doMotionSensorCalculations(0.4) ? 1 : 0;

      case VoltageSensorType.PN_MOT2002_HIGH:
        return this._doMotionSensorCalculations(0.04) ? 1 : 0;

      case VoltageSensorType.PN_VCP4114:
        return RoundDouble((voltage - 2.5) / 0.0625, 3);

      case VoltageSensorType.VOLTAGE:
      default:
        return voltage;
    }
  }
  /** @internal */


  _getSensorValueInRange(sensorValue, sensorType) {
    if (sensorValue === 1e+300) {
      return false;
    }

    switch (sensorType) {
      case VoltageSensorType.PN_1114:
        return sensorValue >= -40.0 && sensorValue <= 125.0;

      case VoltageSensorType.PN_1117:
        return sensorValue >= -30.0 && sensorValue <= 30.0;

      case VoltageSensorType.PN_1123:
        return sensorValue >= -30.0 && sensorValue <= 30.0;

      case VoltageSensorType.PN_1127:
        return sensorValue >= 0.0 && sensorValue <= 1000.0;

      case VoltageSensorType.PN_1130_PH:
        return sensorValue >= 0.0 && sensorValue <= 14.0;

      case VoltageSensorType.PN_1130_ORP:
        return sensorValue >= -2.0 && sensorValue <= 2.0;

      case VoltageSensorType.PN_1132:
        return sensorValue >= 4.0 && sensorValue <= 20.0;

      case VoltageSensorType.PN_1133:
        return sensorValue >= 50.0 && sensorValue <= 100.0;

      case VoltageSensorType.PN_1135:
        return sensorValue >= -30.0 && sensorValue <= 30.0;

      case VoltageSensorType.PN_1142:
        return sensorValue >= 0.0 && sensorValue <= 1000.0;

      case VoltageSensorType.PN_1143:
        return sensorValue >= 0.0 && sensorValue <= 70000.0;

      case VoltageSensorType.PN_3500:
        return sensorValue >= 0.0 && sensorValue <= 10.0;

      case VoltageSensorType.PN_3501:
        return sensorValue >= 0.0 && sensorValue <= 25.0;

      case VoltageSensorType.PN_3502:
        return sensorValue >= 0.0 && sensorValue <= 50.0;

      case VoltageSensorType.PN_3503:
        return sensorValue >= 0.0 && sensorValue <= 100.0;

      case VoltageSensorType.PN_3507:
        return sensorValue >= 0.0 && sensorValue <= 250.0;

      case VoltageSensorType.PN_3508:
        return sensorValue >= 0.0 && sensorValue <= 250.0;

      case VoltageSensorType.PN_3509:
        return sensorValue >= 0.0 && sensorValue <= 200.0;

      case VoltageSensorType.PN_3510:
        return sensorValue >= 0.0 && sensorValue <= 75.0;

      case VoltageSensorType.PN_3511:
        return sensorValue >= 0.0 && sensorValue <= 10.0;

      case VoltageSensorType.PN_3512:
        return sensorValue >= 0.0 && sensorValue <= 100.0;

      case VoltageSensorType.PN_3513:
        return sensorValue >= 0.0 && sensorValue <= 1000.0;

      case VoltageSensorType.PN_3514:
        return sensorValue >= 0.0 && sensorValue <= 7500.0;

      case VoltageSensorType.PN_3515:
        return sensorValue >= 0.0 && sensorValue <= 7500.0;

      case VoltageSensorType.PN_3516:
        return sensorValue >= 0.0 && sensorValue <= 1250.0;

      case VoltageSensorType.PN_3517:
        return sensorValue >= 0.0 && sensorValue <= 1250.0;

      case VoltageSensorType.PN_3518:
        return sensorValue >= 0.0 && sensorValue <= 550.0;

      case VoltageSensorType.PN_3519:
        return sensorValue >= 0.0 && sensorValue <= 1650.0;

      case VoltageSensorType.PN_3584:
        return sensorValue >= 0.0 && sensorValue <= 50.0;

      case VoltageSensorType.PN_3585:
        return sensorValue >= 0.0 && sensorValue <= 100.0;

      case VoltageSensorType.PN_3586:
        return sensorValue >= 0.0 && sensorValue <= 250.0;

      case VoltageSensorType.PN_3587:
        return sensorValue >= -50.0 && sensorValue <= 50.0;

      case VoltageSensorType.PN_3588:
        return sensorValue >= -100.0 && sensorValue <= 100.0;

      case VoltageSensorType.PN_3589:
        return sensorValue >= -250.0 && sensorValue <= 250.0;

      case VoltageSensorType.PN_MOT2002_LOW:
      case VoltageSensorType.PN_MOT2002_MED:
      case VoltageSensorType.PN_MOT2002_HIGH:
        return this._private.motionSensorBaseline !== 1e+300;

      case VoltageSensorType.PN_VCP4114:
        return sensorValue >= -25.0 && sensorValue <= 25.0;

      case VoltageSensorType.VOLTAGE:
      default:
        return true;
    }
  }
  /** @internal */


  _getVoltageSensorUnit(sensorType) {
    switch (sensorType) {
      case VoltageSensorType.PN_1130_PH:
        return Units[Unit.PH];

      case VoltageSensorType.PN_1114:
        return Units[Unit.DEGREE_CELCIUS];

      case VoltageSensorType.PN_1127:
      case VoltageSensorType.PN_1142:
      case VoltageSensorType.PN_1143:
        return Units[Unit.LUX];

      case VoltageSensorType.PN_1132:
      case VoltageSensorType.PN_3511:
      case VoltageSensorType.PN_3512:
      case VoltageSensorType.PN_3513:
        return Units[Unit.MILLIAMPERE];

      case VoltageSensorType.PN_1133:
        return Units[Unit.DECIBEL];

      case VoltageSensorType.PN_3500:
      case VoltageSensorType.PN_3501:
      case VoltageSensorType.PN_3502:
      case VoltageSensorType.PN_3503:
      case VoltageSensorType.PN_3584:
      case VoltageSensorType.PN_3585:
      case VoltageSensorType.PN_3586:
      case VoltageSensorType.PN_3587:
      case VoltageSensorType.PN_3588:
      case VoltageSensorType.PN_3589:
      case VoltageSensorType.PN_VCP4114:
        return Units[Unit.AMPERE];

      case VoltageSensorType.PN_3514:
      case VoltageSensorType.PN_3515:
      case VoltageSensorType.PN_3516:
      case VoltageSensorType.PN_3517:
      case VoltageSensorType.PN_3518:
      case VoltageSensorType.PN_3519:
        return Units[Unit.WATT];

      case VoltageSensorType.PN_MOT2002_LOW:
      case VoltageSensorType.PN_MOT2002_MED:
      case VoltageSensorType.PN_MOT2002_HIGH:
        return Units[Unit.BOOLEAN];

      case VoltageSensorType.PN_1117:
      case VoltageSensorType.PN_1123:
      case VoltageSensorType.PN_1130_ORP:
      case VoltageSensorType.PN_1135:
      case VoltageSensorType.PN_3507:
      case VoltageSensorType.PN_3508:
      case VoltageSensorType.PN_3509:
      case VoltageSensorType.PN_3510:
      case VoltageSensorType.VOLTAGE:
      default:
        return Units[Unit.VOLT];
    }
  }
  /** @internal */


  _doMotionSensorCalculations(threshold) {
    const p = this._private;
    const voltageBuffer = p.voltageBuffer;
    const index = p.voltageBufferIndex;
    let startAvgDiff = 0;
    let endAvgDiff = 0;
    let longTermAvg = 0;
    let longTermDiff = 0;
    let triggered = false;

    if (p.voltageBufferReady) {
      longTermAvg = reduce(voltageBuffer).call(voltageBuffer, (prev, curr) => prev + curr) / p.VOLTAGE_BUFFER_LEN;
      longTermDiff = reduce(voltageBuffer).call(voltageBuffer, (prev, curr) => prev + Math.abs(curr - longTermAvg), 0) / p.VOLTAGE_BUFFER_LEN;

      if (longTermDiff < 0.1) {
        p.motionSensorBaseline = longTermAvg;
      } else if (p.motionSensorBaseline === 1e+300) {
        return 2;
      }

      for (let i = 0; i < 5; i++) {
        startAvgDiff += Math.abs(voltageBuffer[(index + p.VOLTAGE_BUFFER_LEN - (i + 5)) % p.VOLTAGE_BUFFER_LEN] - p.motionSensorBaseline);
        endAvgDiff += Math.abs(voltageBuffer[(index + p.VOLTAGE_BUFFER_LEN - i) % p.VOLTAGE_BUFFER_LEN] - p.motionSensorBaseline);
      }

      startAvgDiff /= 5;
      endAvgDiff /= 5;

      if (p.motionSensorCountdown !== 0) {
        p.motionSensorCountdown--;
        triggered = true;
      }

      if (startAvgDiff > threshold && endAvgDiff > threshold) {
        p.motionSensorCountdown = 10;
        triggered = true;
      }

      return triggered;
    }

    return 2;
  }

}

class CapacitiveTouchBase extends PhidgetChannel {
  constructor(ch) {
    super(ch);
    this.onTouch = null;
    this.onTouchEnd = null;
    this._class = ChannelClass.CAPACITIVE_TOUCH;
    this.name = "CapacitiveTouch";
    this.data = this._initData();
  }
  /** @internal */


  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 54:
        if (bp.entryCount > 1) this.data.dataInterval = bp.entries[1].v;else this.data.dataInterval = bp.entries[0].v;

        this._FIREPropertyChange('DataInterval', bp);

        this._FIREPropertyChange('DataRate', bp);

        break;

      case 66:
        this.data.sensitivity = bp.entries[0].v;

        this._FIREPropertyChange('Sensitivity', bp);

        break;

      case 46:
        this.data.touchValueChangeTrigger = bp.entries[0].v;

        this._FIREPropertyChange('TouchValueChangeTrigger', bp);

        break;

      case 96:
        {
          this.data.touchValue = bp.entries[0].v;

          if (this._isAttachedDone && this.onTouch) {
            try {
              this.onTouch(this.data.touchValue);
            } catch (err) {
              logEventException(err);
            }
          }

          break;
        }

      case 137:
        {
          if (this._isAttachedDone && this.onTouchEnd) {
            try {
              this.onTouchEnd();
            } catch (err) {
              logEventException(err);
            }
          }

          break;
        }

      default:
        throw new PhidgetError(ErrorCode.INVALID_PACKET, "Unsupported bridge packet: 0x" + bp.vpkt.toString(16));
    }
  }
  /** @internal */


  _initData() {
    return {
      touchValueChangeTrigger: 1e+300,
      minTouchValueChangeTrigger: 1e+300,
      maxTouchValueChangeTrigger: 1e+300,
      dataInterval: 1e+300,
      minDataInterval: 4294967295,
      maxDataInterval: 4294967295,
      minDataRate: 1e+300,
      maxDataRate: 1e+300,
      sensitivity: 1e+300,
      minSensitivity: 1e+300,
      maxSensitivity: 1e+300,
      maxTouchValue: 1e+300,
      minTouchValue: 1e+300,
      touchValue: 1e+300,
      isTouched: 2
    };
  }
  /** @internal */


  _initAfterOpen() {}
  /** @internal */


  async _setDefaults() {}
  /** @internal */


  _hasInitialState() {
    return true;
  }
  /** @internal */


  _fireInitialEvents() {}
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `Touch` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `Touch` events can also be affected by the `touchValueChangeTrigger`.
   * @throws {@link PhidgetError}
   */


  get dataInterval() {
    return this.getDataInterval();
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataInterval() {
    return this.getMinDataInterval();
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataInterval() {
    return this.getMaxDataInterval();
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */


  get dataRate() {
    return this.getDataRate();
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataRate() {
    return this.getMinDataRate();
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataRate() {
    return this.getMaxDataRate();
  }
  /**
   * Determines the sensitivity of all capacitive regions on the device.
   *
   * *   Higher values result in greater touch sensitivity.
   * *   The sensitivity value is bounded by `minSensitivity` and `maxSensitivity`.
   * @throws {@link PhidgetError}
   */


  get sensitivity() {
    return this.getSensitivity();
  }
  /**
   * The minimum value that `sensitivity` can be set to.
   * @throws {@link PhidgetError}
   */


  get minSensitivity() {
    return this.getMinSensitivity();
  }
  /**
   * The maximum value that `sensitivity` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxSensitivity() {
    return this.getMaxSensitivity();
  }
  /**
   * The most recent touch state that the channel has reported.
   *
   * *   This will be 0 or 1
   *
   * *   0 is not touched
   * *   1 is touched
   * @throws {@link PhidgetError}
   */


  get isTouched() {
    return this.getIsTouched();
  }
  /**
   * The most recent touch value that the channel has reported.
   *
   * *   This will be 0 or 1 for button-type inputs, or a ratio between 0-1 for axis-type inputs.
   * *   This value is bounded by `minTouchValue` and `maxTouchValue`
   * *   The value is not reset when the touch ends
   * @throws {@link PhidgetError}
   */


  get touchValue() {
    return this.getTouchValue();
  }
  /**
   * The minimum value the `Touch` event will report.
   * @throws {@link PhidgetError}
   */


  get minTouchValue() {
    return this.getMinTouchValue();
  }
  /**
   * The maximum value the `Touch` event will report.
   * @throws {@link PhidgetError}
   */


  get maxTouchValue() {
    return this.getMaxTouchValue();
  }
  /**
   * The channel will not issue a `Touch` event until the touch value has changed by the amount specified by the `touchValueChangeTrigger`.
   *
   * *   Setting the `touchValueChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   */


  get touchValueChangeTrigger() {
    return this.getTouchValueChangeTrigger();
  }
  /**
   * The minimum value that `touchValueChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */


  get minTouchValueChangeTrigger() {
    return this.getMinTouchValueChangeTrigger();
  }
  /**
   * The maximum value that `touchValueChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxTouchValueChangeTrigger() {
    return this.getMaxTouchValueChangeTrigger();
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `Touch` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `Touch` events can also be affected by the `touchValueChangeTrigger`.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getDataInterval() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.dataInterval;
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `Touch` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `Touch` events can also be affected by the `touchValueChangeTrigger`.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */


  async setDataInterval(dataInterval) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: dataInterval
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The minimum data interval value
   * @throws {@link PhidgetError}
   */


  getMinDataInterval() {
    this._assertOpen();

    if (this.data.minDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataInterval;
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The maximum data interval value
   * @throws {@link PhidgetError}
   */


  getMaxDataInterval() {
    this._assertOpen();

    if (this.data.maxDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */


  getDataRate() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return 1000.0 / this.data.dataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */


  async setDataRate(dataRate) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: Math.round(1000.0 / dataRate)
    });
    bp.set({
      name: "1",
      type: "g",
      value: 1000.0 / dataRate
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMinDataRate() {
    this._assertOpen();

    if (this.data.minDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataRate;
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMaxDataRate() {
    this._assertOpen();

    if (this.data.maxDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataRate;
  }
  /**
   * The most recent touch state that the channel has reported.
   *
   * *   This will be 0 or 1
   *
   * *   0 is not touched
   * *   1 is touched
   * @returns The touched state
   * @throws {@link PhidgetError}
   */


  getIsTouched() {
    this._assertOpen();

    if (this.data.isTouched === 2) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return !!this.data.isTouched;
  }
  /**
   * Determines the sensitivity of all capacitive regions on the device.
   *
   * *   Higher values result in greater touch sensitivity.
   * *   The sensitivity value is bounded by `minSensitivity` and `maxSensitivity`.
   * @returns The sensitivity value
   * @throws {@link PhidgetError}
   */


  getSensitivity() {
    this._assertOpen();

    if (this.data.sensitivity === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.sensitivity;
  }
  /**
   * Determines the sensitivity of all capacitive regions on the device.
   *
   * *   Higher values result in greater touch sensitivity.
   * *   The sensitivity value is bounded by `minSensitivity` and `maxSensitivity`.
   * @throws {@link PhidgetError}
   * @param sensitivity - The sensitivity value
   */


  async setSensitivity(sensitivity) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: sensitivity
    });
    await bp.send(this._ch, 66);
  }
  /**
   * The minimum value that `sensitivity` can be set to.
   * @returns The minimum sensitivity value
   * @throws {@link PhidgetError}
   */


  getMinSensitivity() {
    this._assertOpen();

    if (this.data.minSensitivity === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minSensitivity;
  }
  /**
   * The maximum value that `sensitivity` can be set to.
   * @returns The maximum sensitivity value
   * @throws {@link PhidgetError}
   */


  getMaxSensitivity() {
    this._assertOpen();

    if (this.data.maxSensitivity === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxSensitivity;
  }
  /**
   * The most recent touch value that the channel has reported.
   *
   * *   This will be 0 or 1 for button-type inputs, or a ratio between 0-1 for axis-type inputs.
   * *   This value is bounded by `minTouchValue` and `maxTouchValue`
   * *   The value is not reset when the touch ends
   * @returns The touch input value
   * @throws {@link PhidgetError}
   */


  getTouchValue() {
    this._assertOpen();

    if (this.data.touchValue === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.touchValue;
  }
  /**
   * The minimum value the `Touch` event will report.
   * @returns The minimum touch input value
   * @throws {@link PhidgetError}
   */


  getMinTouchValue() {
    this._assertOpen();

    if (this.data.minTouchValue === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minTouchValue;
  }
  /**
   * The maximum value the `Touch` event will report.
   * @returns The maximum touch input value
   * @throws {@link PhidgetError}
   */


  getMaxTouchValue() {
    this._assertOpen();

    if (this.data.maxTouchValue === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxTouchValue;
  }
  /**
   * The channel will not issue a `Touch` event until the touch value has changed by the amount specified by the `touchValueChangeTrigger`.
   *
   * *   Setting the `touchValueChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */


  getTouchValueChangeTrigger() {
    this._assertOpen();

    if (this.data.touchValueChangeTrigger === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.touchValueChangeTrigger;
  }
  /**
   * The channel will not issue a `Touch` event until the touch value has changed by the amount specified by the `touchValueChangeTrigger`.
   *
   * *   Setting the `touchValueChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   * @param touchValueChangeTrigger - The change trigger value
   */


  async setTouchValueChangeTrigger(touchValueChangeTrigger) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: touchValueChangeTrigger
    });
    await bp.send(this._ch, 46);
  }
  /**
   * The minimum value that `touchValueChangeTrigger` can be set to.
   * @returns The minimum change trigger value
   * @throws {@link PhidgetError}
   */


  getMinTouchValueChangeTrigger() {
    this._assertOpen();

    if (this.data.minTouchValueChangeTrigger === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minTouchValueChangeTrigger;
  }
  /**
   * The maximum value that `touchValueChangeTrigger` can be set to.
   * @returns The maximum change trigger value
   * @throws {@link PhidgetError}
   */


  getMaxTouchValueChangeTrigger() {
    this._assertOpen();

    if (this.data.maxTouchValueChangeTrigger === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxTouchValueChangeTrigger;
  }

}

/** @public */

class CapacitiveTouch extends CapacitiveTouchBase {
  /** @internal */
  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 96:
        this.data.isTouched = 1;

        super._bridgeInput(bp);

        break;

      case 137:
        this.data.isTouched = 0;

        super._bridgeInput(bp);

        break;

      default:
        super._bridgeInput(bp);

        break;
    }
  }

}

class RFIDBase extends PhidgetChannel {
  constructor(ch) {
    super(ch);
    this.onTag = null;
    this.onTagLost = null;
    this._class = ChannelClass.RFID;
    this.name = "RFID";
    this.data = this._initData();
  }
  /** @internal */


  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 41:
        this.data.antennaEnabled = bp.entries[0].v;

        this._FIREPropertyChange('AntennaEnabled', bp);

        break;

      case 103:
        break;

      default:
        throw new PhidgetError(ErrorCode.INVALID_PACKET, "Unsupported bridge packet: 0x" + bp.vpkt.toString(16));
    }
  }
  /** @internal */


  _initData() {
    return {
      lastTagString: null,
      lastTagProtocol: 0,
      antennaEnabled: 2,
      tagPresent: 2
    };
  }
  /** @internal */


  _initAfterOpen() {}
  /** @internal */


  async _setDefaults() {}
  /** @internal */


  _hasInitialState() {
    return true;
  }
  /** @internal */


  _fireInitialEvents() {}
  /**
   * The on/off state of the antenna.
   *
   * *   You can turn the antenna off to save power.
   * *   You must turn the antenna on in order to detect and read RFID tags.
   * @throws {@link PhidgetError}
   */


  get antennaEnabled() {
    return this.getAntennaEnabled();
  }
  /**
   * This property is true if a compatibile RFID tag is being read by the reader.
   *
   * *   `TagPresent` will remain true until the tag is out of range and can no longer be read.
   * @throws {@link PhidgetError}
   */


  get tagPresent() {
    return this.getTagPresent();
  }
  /**
   * The on/off state of the antenna.
   *
   * *   You can turn the antenna off to save power.
   * *   You must turn the antenna on in order to detect and read RFID tags.
   * @returns The state of the antenna
   * @throws {@link PhidgetError}
   */


  getAntennaEnabled() {
    this._assertOpen();

    if (this.data.antennaEnabled === 2) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return !!this.data.antennaEnabled;
  }
  /**
   * The on/off state of the antenna.
   *
   * *   You can turn the antenna off to save power.
   * *   You must turn the antenna on in order to detect and read RFID tags.
   * @throws {@link PhidgetError}
   * @param antennaEnabled - The state of the antenna
   */


  async setAntennaEnabled(antennaEnabled) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: antennaEnabled ? 1 : 0
    });
    await bp.send(this._ch, 41);
  }
  /**
   * This property is true if a compatibile RFID tag is being read by the reader.
   *
   * *   `TagPresent` will remain true until the tag is out of range and can no longer be read.
   * @returns Tag is in range
   * @throws {@link PhidgetError}
   */


  getTagPresent() {
    this._assertOpen();

    if (this.data.tagPresent === 2) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return !!this.data.tagPresent;
  }
  /**
   * Writes data to the tag being currently read by the reader.
   *
   * *   You cannot write to a read-only or locked tag.
   * @throws {@link PhidgetError}
   * @param tagString - The data to write to the tag
   * @param protocol - The communication protocol to use
   * @param lockTag - If true, permanently locks the tag so that it cannot be re-written after this write.
   */


  async write(tagString, protocol, lockTag) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "s",
      value: tagString
    });
    bp.set({
      name: "1",
      type: "d",
      value: protocol
    });
    bp.set({
      name: "2",
      type: "d",
      value: lockTag ? 1 : 0
    });
    await bp.send(this._ch, 103);
  }

}

/** @public */

class RFID extends RFIDBase {
  constructor(ch) {
    super(ch);
    this._transactionLock = new PhidgetLock();
    this._private = {
      latestTagString: ''
    };
  }
  /** @internal */


  _initAfterOpen() {
    super._initAfterOpen();

    this._private = {
      latestTagString: ''
    };
  }
  /** @internal */


  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 92:
        {
          this.data.tagPresent = 1;
          const tag = bp.getString(0);
          const protocol = bp.getNumber(1);

          if (this._isAttachedDone && this.onTag) {
            try {
              this.onTag(tag, protocol);
            } catch (err) {
              logEventException(err);
            }
          }

          this.data.lastTagString = tag;
          this.data.lastTagProtocol = protocol;
          break;
        }

      case 93:
        {
          this.data.tagPresent = 0;
          const tag = bp.getString(0);
          const protocol = bp.getNumber(1);

          if (this._isAttachedDone && this.onTagLost) {
            try {
              this.onTagLost(tag, protocol);
            } catch (err) {
              logEventException(err);
            }
          }

          break;
        }

      case 41:
        if (this.data.tagPresent === 2) this.data.tagPresent = 0;

        super._bridgeInput(bp);

        break;

      default:
        super._bridgeInput(bp);

        break;
    }
  }

  getLastTag() {
    this._assertOpen();

    if (!this.data.lastTagString) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return {
      tagString: this.data.lastTagString,
      protocol: this.data.lastTagProtocol
    };
  }
  /** @internal */


  _setLatestTagString(tagString) {
    this._private.latestTagString = tagString;
    if (this._private.resolveLatestTag) this._private.resolveLatestTag(tagString);
  }
  /** @internal */


  async _waitForTag(expectedString, timeout) {
    await new promise((resolve, reject) => {
      const timer = setTimeout(reject, timeout);

      this._private.resolveLatestTag = function (tagString) {
        if (expectedString && expectedString === tagString) {
          clearTimeout(timer);
          resolve();
        }
      };
    });
  }

}

class GPSBase extends PhidgetChannel {
  constructor(ch) {
    super(ch);
    this.onPositionChange = null;
    this.onHeadingChange = null;
    this.onPositionFixStateChange = null;
    this._class = ChannelClass.GPS;
    this.name = "GPS";
    this.data = this._initData();
  }
  /** @internal */


  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 110:
        {
          this.data.heading = bp.entries[0].v;
          this.data.velocity = bp.entries[1].v;

          if (this._isAttachedDone && this.onHeadingChange) {
            try {
              this.onHeadingChange(this.data.heading, this.data.velocity);
            } catch (err) {
              logEventException(err);
            }
          }

          break;
        }

      case 29:
        {
          this.data.latitude = bp.entries[0].v;
          this.data.longitude = bp.entries[1].v;
          this.data.altitude = bp.entries[2].v;

          if (this._isAttachedDone && this.onPositionChange) {
            try {
              this.onPositionChange(this.data.latitude, this.data.longitude, this.data.altitude);
            } catch (err) {
              logEventException(err);
            }
          }

          break;
        }

      case 30:
        {
          this.data.positionFixState = bp.entries[0].v;

          if (this._isAttachedDone && this.onPositionFixStateChange) {
            try {
              this.onPositionFixStateChange(!!this.data.positionFixState);
            } catch (err) {
              logEventException(err);
            }
          }

          break;
        }

      default:
        throw new PhidgetError(ErrorCode.INVALID_PACKET, "Unsupported bridge packet: 0x" + bp.vpkt.toString(16));
    }
  }
  /** @internal */


  _initData() {
    return {
      altitude: 1e+300,
      date: null,
      heading: 1e+300,
      latitude: 1e+300,
      longitude: 1e+300,
      NMEAData: null,
      positionFixState: 2,
      time: null,
      velocity: 1e+300
    };
  }
  /** @internal */


  _initAfterOpen() {}
  /** @internal */


  async _setDefaults() {}
  /** @internal */


  _hasInitialState() {
    return true;
  }
  /** @internal */


  _fireInitialEvents() {}
  /**
   * The altitude above mean sea level in meters.
   * @throws {@link PhidgetError}
   */


  get altitude() {
    return this.getAltitude();
  }
  /**
   * The UTC date of the last received position.
   * @throws {@link PhidgetError}
   */


  get date() {
    return this.getDate();
  }
  /**
   * The current date and time in UTC
   * @throws {@link PhidgetError}
   */


  get dateAndTime() {
    return this.getDateAndTime();
  }
  /**
   * The current true course over ground of the GPS
   * @throws {@link PhidgetError}
   */


  get heading() {
    return this.getHeading();
  }
  /**
   * The latitude of the GPS in degrees
   * @throws {@link PhidgetError}
   */


  get latitude() {
    return this.getLatitude();
  }
  /**
   * The longitude of the GPS.
   * @throws {@link PhidgetError}
   */


  get longitude() {
    return this.getLongitude();
  }
  /**
   * The NMEA data structure.
   * @throws {@link PhidgetError}
   */


  get NMEAData() {
    return this.getNMEAData();
  }
  /**
   * The status of the position fix
   *
   * *   True if a fix is available and latitude, longitude, and altitude can be read. False if the fix is not available.
   * @throws {@link PhidgetError}
   */


  get positionFixState() {
    return this.getPositionFixState();
  }
  /**
   * The current UTC time of the GPS
   * @throws {@link PhidgetError}
   */


  get time() {
    return this.getTime();
  }
  /**
   * The current speed over ground of the GPS.
   * @throws {@link PhidgetError}
   */


  get velocity() {
    return this.getVelocity();
  }
  /**
   * The altitude above mean sea level in meters.
   * @returns Altitude of the GPS
   * @throws {@link PhidgetError}
   */


  getAltitude() {
    this._assertOpen();

    if (this.data.altitude === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.altitude;
  }
  /**
   * The UTC date of the last received position.
   * @returns Date of last position
   * @throws {@link PhidgetError}
   */


  getDate() {
    this._assertOpen();

    if (this.data.date === null) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.date;
  }
  /**
   * The current true course over ground of the GPS
   * @returns Heading of the GPS
   * @throws {@link PhidgetError}
   */


  getHeading() {
    this._assertOpen();

    if (this.data.heading === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.heading;
  }
  /**
   * The latitude of the GPS in degrees
   * @returns Latitude of the GPS
   * @throws {@link PhidgetError}
   */


  getLatitude() {
    this._assertOpen();

    if (this.data.latitude === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.latitude;
  }
  /**
   * The longitude of the GPS.
   * @returns Longtidue of the GPS
   * @throws {@link PhidgetError}
   */


  getLongitude() {
    this._assertOpen();

    if (this.data.longitude === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.longitude;
  }
  /**
   * The NMEA data structure.
   * @returns NMEA Data structure
   * @throws {@link PhidgetError}
   */


  getNMEAData() {
    this._assertOpen();

    if (this.data.NMEAData === null) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.NMEAData;
  }
  /**
   * The status of the position fix
   *
   * *   True if a fix is available and latitude, longitude, and altitude can be read. False if the fix is not available.
   * @returns Status of the position fix
   * @throws {@link PhidgetError}
   */


  getPositionFixState() {
    this._assertOpen();

    if (this.data.positionFixState === 2) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return !!this.data.positionFixState;
  }
  /**
   * The current UTC time of the GPS
   * @returns Current time
   * @throws {@link PhidgetError}
   */


  getTime() {
    this._assertOpen();

    if (this.data.time === null) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.time;
  }
  /**
   * The current speed over ground of the GPS.
   * @returns Velocity of the GPS
   * @throws {@link PhidgetError}
   */


  getVelocity() {
    this._assertOpen();

    if (this.data.velocity === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.velocity;
  }

}

function readGPGGA(bp) {
  return {
    latitude: bp.getNumber("GPGGA.latitude"),
    longitude: bp.getNumber("GPGGA.longitude"),
    fixQuality: bp.getNumber("GPGGA.fixQuality"),
    numSatellites: bp.getNumber("GPGGA.numSatellites"),
    horizontalDilution: bp.getNumber("GPGGA.horizontalDilution"),
    altitude: bp.getNumber("GPGGA.altitude"),
    heightOfGeoid: bp.getNumber("GPGGA.heightOfGeoid")
  };
}

function readGPGSA(bp) {
  return {
    mode: String.fromCharCode(bp.getNumber("GPGSA.mode")),
    fixType: bp.getNumber("GPGSA.fixType"),
    satUsed: bp.getArray("GPGSA.satUsed"),
    posnDilution: bp.getNumber("GPGSA.posnDilution"),
    horizDilution: bp.getNumber("GPGSA.horizDilution"),
    vertDilution: bp.getNumber("GPGSA.vertDilution")
  };
}

function readGPRMC(bp) {
  return {
    status: String.fromCharCode(bp.getNumber("GPRMC.status")),
    latitude: bp.getNumber("GPRMC.latitude"),
    longitude: bp.getNumber("GPRMC.longitude"),
    speedKnots: bp.getNumber("GPRMC.speedKnots"),
    heading: bp.getNumber("GPRMC.heading"),
    magneticVariation: bp.getNumber("GPRMC.magneticVariation"),
    mode: String.fromCharCode(bp.getNumber("GPRMC.mode"))
  };
}

function readGPVTG(bp) {
  return {
    trueHeading: bp.getNumber("GPVTG.trueHeading"),
    magneticHeading: bp.getNumber("GPVTG.magneticHeading"),
    speedKnots: bp.getNumber("GPVTG.speedKnots"),
    speed: bp.getNumber("GPVTG.speed"),
    mode: String.fromCharCode(bp.getNumber("GPVTG.mode"))
  };
}

function readNMEAData(bp) {
  return {
    GGA: readGPGGA(bp),
    GSA: readGPGSA(bp),
    RMC: readGPRMC(bp),
    VTG: readGPVTG(bp)
  };
}
/** @public */


class GPS extends GPSBase {
  /** @internal */
  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 9:
        this.data.NMEAData = readNMEAData(bp);
        break;

      case 108:
        this.data.time = {
          tm_ms: bp.getNumber("GPSTime.tm_ms"),
          tm_sec: bp.getNumber("GPSTime.tm_sec"),
          tm_min: bp.getNumber("GPSTime.tm_min"),
          tm_hour: bp.getNumber("GPSTime.tm_hour")
        };
        break;

      case 109:
        this.data.date = {
          tm_mday: bp.getNumber("GPSDate.tm_mday"),
          tm_mon: bp.getNumber("GPSDate.tm_mon"),
          tm_year: bp.getNumber("GPSDate.tm_year")
        };
        break;

      default:
        super._bridgeInput(bp);

        break;
    }
  }

  getDateAndTime() {
    this._assertOpen();

    if (this.data.time === null) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    if (this.data.date === null) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    const date = new Date(Date.UTC(this.data.date.tm_year, this.data.date.tm_mon, this.data.date.tm_mday, this.data.time.tm_hour, this.data.time.tm_min, this.data.time.tm_sec, this.data.time.tm_ms));
    return date;
  }

}

class GyroscopeBase extends PhidgetChannel {
  constructor(ch) {
    super(ch);
    this.onAngularRateUpdate = null;
    this._class = ChannelClass.GYROSCOPE;
    this.name = "Gyroscope";
    this.data = this._initData();
  }
  /** @internal */


  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 54:
        if (bp.entryCount > 1) this.data.dataInterval = bp.entries[1].v;else this.data.dataInterval = bp.entries[0].v;

        this._FIREPropertyChange('DataInterval', bp);

        this._FIREPropertyChange('DataRate', bp);

        break;

      case 170:
        this.data.heatingEnabled = bp.entries[0].v;

        this._FIREPropertyChange('HeatingEnabled', bp);

        break;

      case 145:
        this.data.precision = bp.entries[0].v;

        this._FIREPropertyChange('Precision', bp);

        break;

      case 106:
        break;

      case 2:
        {
          this.data.angularRate = bp.entries[0].v;
          this.data.timestamp = bp.entries[1].v;

          if (this._isAttachedDone && this.onAngularRateUpdate) {
            try {
              this.onAngularRateUpdate(this.data.angularRate, this.data.timestamp);
            } catch (err) {
              logEventException(err);
            }
          }

          break;
        }

      default:
        throw new PhidgetError(ErrorCode.INVALID_PACKET, "Unsupported bridge packet: 0x" + bp.vpkt.toString(16));
    }
  }
  /** @internal */


  _initData() {
    return {
      dataInterval: 1e+300,
      maxDataInterval: 4294967295,
      minDataRate: 1e+300,
      maxDataRate: 1e+300,
      maxAngularRate: [1e+300, 1e+300, 1e+300],
      minDataInterval: 4294967295,
      minAngularRate: [1e+300, 1e+300, 1e+300],
      angularRate: [1e+300, 1e+300, 1e+300],
      axisCount: 2147483647,
      timestamp: 1e+300,
      precision: 2147483647,
      heatingEnabled: 2
    };
  }
  /** @internal */


  _initAfterOpen() {}
  /** @internal */


  async _setDefaults() {}
  /** @internal */


  _hasInitialState() {
    return true;
  }
  /** @internal */


  _fireInitialEvents() {}
  /**
   * The most recent angular rate value that the channel has reported.
   *
   * *   This value will always be between `minAngularRate` and `maxAngularRate`.
   * @throws {@link PhidgetError}
   */


  get angularRate() {
    return this.getAngularRate();
  }
  /**
   * The minimum value the `AngularRateUpdate` event will report.
   * @throws {@link PhidgetError}
   */


  get minAngularRate() {
    return this.getMinAngularRate();
  }
  /**
   * The maximum value the `AngularRateUpdate` event will report.
   * @throws {@link PhidgetError}
   */


  get maxAngularRate() {
    return this.getMaxAngularRate();
  }
  /**
   * The number of axes the channel can measure angular rate on.
   *
   * *   See your device's User Guide for more information about the number of axes and their orientation.
   * @throws {@link PhidgetError}
   */


  get axisCount() {
    return this.getAxisCount();
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `AngularRateUpdate` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * @throws {@link PhidgetError}
   */


  get dataInterval() {
    return this.getDataInterval();
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataInterval() {
    return this.getMinDataInterval();
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataInterval() {
    return this.getMaxDataInterval();
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */


  get dataRate() {
    return this.getDataRate();
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataRate() {
    return this.getMinDataRate();
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataRate() {
    return this.getMaxDataRate();
  }
  /**
   * Set to TRUE to enable the temperature stabilization feature of this device. This enables onboard heating elements to bring the board up to a known temperature to minimize ambient temerature effects on the sensor's reading. You can leave this setting FALSE to conserve power consumption.
   *
   * If you enable heating, it is strongly recommended to keep the board in its enclosure to keep it insulated from moving air.
   *
   * This property is shared by any and all spatial-related objects on this device (Accelerometer, Gyroscope, Magnetometer, Spatial)
   * @throws {@link PhidgetError}
   */


  get heatingEnabled() {
    return this.getHeatingEnabled();
  }
  /**
   * Selects between high/low precision sensing chips.
   * @throws {@link PhidgetError}
   * @internal
   */


  get precision() {
    return this.getPrecision();
  }
  /**
   * The most recent timestamp value that the channel has reported. This is an extremely accurate time measurement streamed from the device.
   *
   * *   If your application requires a time measurement, you should use this value over a local software timestamp.
   * @throws {@link PhidgetError}
   */


  get timestamp() {
    return this.getTimestamp();
  }
  /**
   * The most recent angular rate value that the channel has reported.
   *
   * *   This value will always be between `minAngularRate` and `maxAngularRate`.
   * @returns The last reported angular rate
   * @throws {@link PhidgetError}
   */


  getAngularRate() {
    this._assertOpen();

    if (this.data.angularRate.includes(1e+300)) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.angularRate;
  }
  /**
   * The minimum value the `AngularRateUpdate` event will report.
   * @returns The angular rate values
   * @throws {@link PhidgetError}
   */


  getMinAngularRate() {
    this._assertOpen();

    if (this.data.minAngularRate.includes(1e+300)) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minAngularRate;
  }
  /**
   * The maximum value the `AngularRateUpdate` event will report.
   * @returns The angular rate values
   * @throws {@link PhidgetError}
   */


  getMaxAngularRate() {
    this._assertOpen();

    if (this.data.maxAngularRate.includes(1e+300)) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxAngularRate;
  }
  /**
   * The number of axes the channel can measure angular rate on.
   *
   * *   See your device's User Guide for more information about the number of axes and their orientation.
   * @returns Axis count value
   * @throws {@link PhidgetError}
   */


  getAxisCount() {
    this._assertOpen();

    if (this.data.axisCount === 2147483647) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.axisCount;
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `AngularRateUpdate` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getDataInterval() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.dataInterval;
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `AngularRateUpdate` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */


  async setDataInterval(dataInterval) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: dataInterval
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getMinDataInterval() {
    this._assertOpen();

    if (this.data.minDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataInterval;
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getMaxDataInterval() {
    this._assertOpen();

    if (this.data.maxDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */


  getDataRate() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return 1000.0 / this.data.dataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */


  async setDataRate(dataRate) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: Math.round(1000.0 / dataRate)
    });
    bp.set({
      name: "1",
      type: "g",
      value: 1000.0 / dataRate
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMinDataRate() {
    this._assertOpen();

    if (this.data.minDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataRate;
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMaxDataRate() {
    this._assertOpen();

    if (this.data.maxDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataRate;
  }
  /**
   * Set to TRUE to enable the temperature stabilization feature of this device. This enables onboard heating elements to bring the board up to a known temperature to minimize ambient temerature effects on the sensor's reading. You can leave this setting FALSE to conserve power consumption.
   *
   * If you enable heating, it is strongly recommended to keep the board in its enclosure to keep it insulated from moving air.
   *
   * This property is shared by any and all spatial-related objects on this device (Accelerometer, Gyroscope, Magnetometer, Spatial)
   * @returns Whether self-heating temperature stabilization is enabled
   * @throws {@link PhidgetError}
   */


  getHeatingEnabled() {
    this._assertOpen();

    if (this.data.heatingEnabled === 2) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return !!this.data.heatingEnabled;
  }
  /**
   * Set to TRUE to enable the temperature stabilization feature of this device. This enables onboard heating elements to bring the board up to a known temperature to minimize ambient temerature effects on the sensor's reading. You can leave this setting FALSE to conserve power consumption.
   *
   * If you enable heating, it is strongly recommended to keep the board in its enclosure to keep it insulated from moving air.
   *
   * This property is shared by any and all spatial-related objects on this device (Accelerometer, Gyroscope, Magnetometer, Spatial)
   * @throws {@link PhidgetError}
   * @param heatingEnabled - Whether self-heating temperature stabilization is enabled
   */


  async setHeatingEnabled(heatingEnabled) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: heatingEnabled ? 1 : 0
    });
    await bp.send(this._ch, 170);
  }
  /**
   * Selects between high/low precision sensing chips.
   * @returns The sensor precision value
   * @throws {@link PhidgetError}
   * @internal
   */


  getPrecision() {
    this._assertOpen();

    if (this.data.precision === 2147483647) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.precision;
  }
  /**
   * Selects between high/low precision sensing chips.
   * @throws {@link PhidgetError}
   * @param precision - The sensor precision value
   * @internal
   */


  async setPrecision(precision) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: precision
    });
    await bp.send(this._ch, 145);
  }
  /**
   * The most recent timestamp value that the channel has reported. This is an extremely accurate time measurement streamed from the device.
   *
   * *   If your application requires a time measurement, you should use this value over a local software timestamp.
   * @returns The timestamp value
   * @throws {@link PhidgetError}
   */


  getTimestamp() {
    this._assertOpen();

    if (this.data.timestamp === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.timestamp;
  }
  /**
   * Re-zeros the gyroscope in 1-2 seconds.
   *
   * *   The device must be stationary when zeroing.
   * *   The angular rate will be reported as 0.0°/s while zeroing.
   * *   Zeroing the gyroscope is a method of compensating for the drift that is inherent to all gyroscopes. See your device's User Guide for more information on dealing with drift.
   * @throws {@link PhidgetError}
   */


  async zero() {
    this._assertOpen();

    const bp = new BridgePacket();
    await bp.send(this._ch, 106);
  }

}

/** @public */

class Gyroscope extends GyroscopeBase {
  /** @internal */
  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 10:
        if (bp.entryCount > 1) this.data.dataInterval = bp.getNumber(1);else this.data.dataInterval = bp.getNumber(0);

        this._FIREPropertyChange('DataInterval');

        this._FIREPropertyChange('DataRate');

        break;

      case 179:
        this.data.heatingEnabled = bp.entries[0].v;

        this._FIREPropertyChange('HeatingEnabled', bp);

        break;

      default:
        super._bridgeInput(bp);

        break;
    }
  }
  /** @internal */


  _errorHandler(code) {
    switch (code) {
      case ErrorEventCode.SATURATION:
        this.data.angularRate = [1e+300, 1e+300, 1e+300];
        this.data.timestamp = 1e+300;
        this._gotAngularRateUpdateErrorEvent = true;
        break;
    }
  }

}

class MagnetometerBase extends PhidgetChannel {
  constructor(ch) {
    super(ch);
    this.onMagneticFieldChange = null;
    this._class = ChannelClass.MAGNETOMETER;
    this.name = "Magnetometer";
    this.data = this._initData();
  }
  /** @internal */


  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 50:
        break;

      case 54:
        if (bp.entryCount > 1) this.data.dataInterval = bp.entries[1].v;else this.data.dataInterval = bp.entries[0].v;

        this._FIREPropertyChange('DataInterval', bp);

        this._FIREPropertyChange('DataRate', bp);

        break;

      case 170:
        this.data.heatingEnabled = bp.entries[0].v;

        this._FIREPropertyChange('HeatingEnabled', bp);

        break;

      case 46:
        this.data.magneticFieldChangeTrigger = bp.entries[0].v;

        this._FIREPropertyChange('MagneticFieldChangeTrigger', bp);

        break;

      case 35:
        break;

      case 37:
        break;

      case 18:
        {
          this.data.magneticField = bp.entries[0].v;
          this.data.timestamp = bp.entries[1].v;

          if (this._isAttachedDone && this.onMagneticFieldChange) {
            try {
              this.onMagneticFieldChange(this.data.magneticField, this.data.timestamp);
            } catch (err) {
              logEventException(err);
            }
          }

          break;
        }

      default:
        throw new PhidgetError(ErrorCode.INVALID_PACKET, "Unsupported bridge packet: 0x" + bp.vpkt.toString(16));
    }
  }
  /** @internal */


  _initData() {
    return {
      dataInterval: 1e+300,
      maxDataInterval: 4294967295,
      minDataRate: 1e+300,
      maxDataRate: 1e+300,
      maxMagneticField: [1e+300, 1e+300, 1e+300],
      maxMagneticFieldChangeTrigger: 1e+300,
      minDataInterval: 4294967295,
      minMagneticField: [1e+300, 1e+300, 1e+300],
      minMagneticFieldChangeTrigger: 1e+300,
      magneticField: [1e+300, 1e+300, 1e+300],
      magneticFieldChangeTrigger: 1e+300,
      axisCount: 2147483647,
      timestamp: 1e+300,
      heatingEnabled: 2
    };
  }
  /** @internal */


  _initAfterOpen() {}
  /** @internal */


  async _setDefaults() {}
  /** @internal */


  _hasInitialState() {
    return true;
  }
  /** @internal */


  _fireInitialEvents() {}
  /**
   * The number of axes the channel can measure field strength on.
   *
   * *   See your device's User Guide for more information about the number of axes and their orientation.
   * @throws {@link PhidgetError}
   */


  get axisCount() {
    return this.getAxisCount();
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `MagneticFieldChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `MagneticFieldChange` events can also be affected by the `magneticFieldChangeTrigger`.
   * @throws {@link PhidgetError}
   */


  get dataInterval() {
    return this.getDataInterval();
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataInterval() {
    return this.getMinDataInterval();
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataInterval() {
    return this.getMaxDataInterval();
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */


  get dataRate() {
    return this.getDataRate();
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataRate() {
    return this.getMinDataRate();
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataRate() {
    return this.getMaxDataRate();
  }
  /**
   * Set to TRUE to enable the temperature stabilization feature of this device. This enables onboard heating elements to bring the board up to a known temperature to minimize ambient temerature effects on the sensor's reading. You can leave this setting FALSE to conserve power consumption.
   *
   * If you enable heating, it is strongly recommended to keep the board in its enclosure to keep it insulated from moving air.
   *
   * This property is shared by any and all spatial-related objects on this device (Accelerometer, Gyroscope, Magnetometer, Spatial)
   * @throws {@link PhidgetError}
   */


  get heatingEnabled() {
    return this.getHeatingEnabled();
  }
  /**
   * The most recent field strength value that the channel has reported.
   *
   * *   This value will always be between `minMagneticField` and `maxMagneticField`.
   * @throws {@link PhidgetError}
   */


  get magneticField() {
    return this.getMagneticField();
  }
  /**
   * The minimum value the `MagneticFieldChange` event will report.Any readings outside this range will result in a `Saturation` event. This check is done after calibration values have been applied, which will affect your magnetometer's range accordingly.
   * @throws {@link PhidgetError}
   */


  get minMagneticField() {
    return this.getMinMagneticField();
  }
  /**
   * The maximum value the `MagneticFieldChange` event will report.Any readings outside this range will result in a `Saturation` event. This check is done after calibration values have been applied, which will affect your magnetometer's range accordingly.
   * @throws {@link PhidgetError}
   */


  get maxMagneticField() {
    return this.getMaxMagneticField();
  }
  /**
   * The channel will not issue a `MagneticFieldChange` event until the field strength value has changed by the amount specified by the `magneticFieldChangeTrigger`.
   *
   * *   Setting the `magneticFieldChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   */


  get magneticFieldChangeTrigger() {
    return this.getMagneticFieldChangeTrigger();
  }
  /**
   * The minimum value that `magneticFieldChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */


  get minMagneticFieldChangeTrigger() {
    return this.getMinMagneticFieldChangeTrigger();
  }
  /**
   * The maximum value that `magneticFieldChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxMagneticFieldChangeTrigger() {
    return this.getMaxMagneticFieldChangeTrigger();
  }
  /**
   * The most recent timestamp value that the channel has reported. This is an extremely accurate time measurement streamed from the device.
   *
   * *   If your application requires a time measurement, you should use this value over a local software timestamp.
   * @throws {@link PhidgetError}
   */


  get timestamp() {
    return this.getTimestamp();
  }
  /**
   * The number of axes the channel can measure field strength on.
   *
   * *   See your device's User Guide for more information about the number of axes and their orientation.
   * @returns The axis count value
   * @throws {@link PhidgetError}
   */


  getAxisCount() {
    this._assertOpen();

    if (this.data.axisCount === 2147483647) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.axisCount;
  }
  /**
   * Calibrate your device for the environment it will be used in.
   *
   * *   Due to physical location, hard and soft iron offsets, and even bias errors, your device should be calibrated. We have created a calibration program that will provide you with the `MagnetometerCorrectionParameters` for your specific situation. See your device's User Guide for more information.
   * @throws {@link PhidgetError}
   * @param magneticField - Ambient magnetic field value.
   * @param offset0 - Provided by calibration program.
   * @param offset1 - Provided by calibration program.
   * @param offset2 - Provided by calibration program.
   * @param gain0 - Provided by calibration program.
   * @param gain1 - Provided by calibration program.
   * @param gain2 - Provided by calibration program.
   * @param T0 - Provided by calibration program.
   * @param T1 - Provided by calibration program.
   * @param T2 - Provided by calibration program.
   * @param T3 - Provided by calibration program.
   * @param T4 - Provided by calibration program.
   * @param T5 - Provided by calibration program.
   */


  async setCorrectionParameters(magneticField, offset0, offset1, offset2, gain0, gain1, gain2, T0, T1, T2, T3, T4, T5) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: magneticField
    });
    bp.set({
      name: "1",
      type: "g",
      value: offset0
    });
    bp.set({
      name: "2",
      type: "g",
      value: offset1
    });
    bp.set({
      name: "3",
      type: "g",
      value: offset2
    });
    bp.set({
      name: "4",
      type: "g",
      value: gain0
    });
    bp.set({
      name: "5",
      type: "g",
      value: gain1
    });
    bp.set({
      name: "6",
      type: "g",
      value: gain2
    });
    bp.set({
      name: "7",
      type: "g",
      value: T0
    });
    bp.set({
      name: "8",
      type: "g",
      value: T1
    });
    bp.set({
      name: "9",
      type: "g",
      value: T2
    });
    bp.set({
      name: "10",
      type: "g",
      value: T3
    });
    bp.set({
      name: "11",
      type: "g",
      value: T4
    });
    bp.set({
      name: "12",
      type: "g",
      value: T5
    });
    await bp.send(this._ch, 50);
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `MagneticFieldChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `MagneticFieldChange` events can also be affected by the `magneticFieldChangeTrigger`.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getDataInterval() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.dataInterval;
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `MagneticFieldChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `MagneticFieldChange` events can also be affected by the `magneticFieldChangeTrigger`.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */


  async setDataInterval(dataInterval) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: dataInterval
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getMinDataInterval() {
    this._assertOpen();

    if (this.data.minDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataInterval;
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getMaxDataInterval() {
    this._assertOpen();

    if (this.data.maxDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */


  getDataRate() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return 1000.0 / this.data.dataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */


  async setDataRate(dataRate) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: Math.round(1000.0 / dataRate)
    });
    bp.set({
      name: "1",
      type: "g",
      value: 1000.0 / dataRate
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMinDataRate() {
    this._assertOpen();

    if (this.data.minDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataRate;
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMaxDataRate() {
    this._assertOpen();

    if (this.data.maxDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataRate;
  }
  /**
   * Set to TRUE to enable the temperature stabilization feature of this device. This enables onboard heating elements to bring the board up to a known temperature to minimize ambient temerature effects on the sensor's reading. You can leave this setting FALSE to conserve power consumption.
   *
   * If you enable heating, it is strongly recommended to keep the board in its enclosure to keep it insulated from moving air.
   *
   * This property is shared by any and all spatial-related objects on this device (Accelerometer, Gyroscope, Magnetometer, Spatial)
   * @returns Whether self-heating temperature stabilization is enabled
   * @throws {@link PhidgetError}
   */


  getHeatingEnabled() {
    this._assertOpen();

    if (this.data.heatingEnabled === 2) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return !!this.data.heatingEnabled;
  }
  /**
   * Set to TRUE to enable the temperature stabilization feature of this device. This enables onboard heating elements to bring the board up to a known temperature to minimize ambient temerature effects on the sensor's reading. You can leave this setting FALSE to conserve power consumption.
   *
   * If you enable heating, it is strongly recommended to keep the board in its enclosure to keep it insulated from moving air.
   *
   * This property is shared by any and all spatial-related objects on this device (Accelerometer, Gyroscope, Magnetometer, Spatial)
   * @throws {@link PhidgetError}
   * @param heatingEnabled - Whether self-heating temperature stabilization is enabled
   */


  async setHeatingEnabled(heatingEnabled) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: heatingEnabled ? 1 : 0
    });
    await bp.send(this._ch, 170);
  }
  /**
   * The most recent field strength value that the channel has reported.
   *
   * *   This value will always be between `minMagneticField` and `maxMagneticField`.
   * @returns The channel's measured MagneticField
   * @throws {@link PhidgetError}
   */


  getMagneticField() {
    this._assertOpen();

    if (this.data.magneticField.includes(1e+300)) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.magneticField;
  }
  /**
   * The minimum value the `MagneticFieldChange` event will report.Any readings outside this range will result in a `Saturation` event. This check is done after calibration values have been applied, which will affect your magnetometer's range accordingly.
   * @returns The field strength value
   * @throws {@link PhidgetError}
   */


  getMinMagneticField() {
    this._assertOpen();

    if (this.data.minMagneticField.includes(1e+300)) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minMagneticField;
  }
  /**
   * The maximum value the `MagneticFieldChange` event will report.Any readings outside this range will result in a `Saturation` event. This check is done after calibration values have been applied, which will affect your magnetometer's range accordingly.
   * @returns The field strength value
   * @throws {@link PhidgetError}
   */


  getMaxMagneticField() {
    this._assertOpen();

    if (this.data.maxMagneticField.includes(1e+300)) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxMagneticField;
  }
  /**
   * The channel will not issue a `MagneticFieldChange` event until the field strength value has changed by the amount specified by the `magneticFieldChangeTrigger`.
   *
   * *   Setting the `magneticFieldChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */


  getMagneticFieldChangeTrigger() {
    this._assertOpen();

    if (this.data.magneticFieldChangeTrigger === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.magneticFieldChangeTrigger;
  }
  /**
   * The channel will not issue a `MagneticFieldChange` event until the field strength value has changed by the amount specified by the `magneticFieldChangeTrigger`.
   *
   * *   Setting the `magneticFieldChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   * @param magneticFieldChangeTrigger - The change trigger value
   */


  async setMagneticFieldChangeTrigger(magneticFieldChangeTrigger) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: magneticFieldChangeTrigger
    });
    await bp.send(this._ch, 46);
  }
  /**
   * The minimum value that `magneticFieldChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */


  getMinMagneticFieldChangeTrigger() {
    this._assertOpen();

    if (this.data.minMagneticFieldChangeTrigger === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minMagneticFieldChangeTrigger;
  }
  /**
   * The maximum value that `magneticFieldChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */


  getMaxMagneticFieldChangeTrigger() {
    this._assertOpen();

    if (this.data.maxMagneticFieldChangeTrigger === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxMagneticFieldChangeTrigger;
  }
  /**
   * Resets the `MagnetometerCorrectionParameters` to their default values.
   *
   * *   Due to physical location, hard and soft iron offsets, and even bias errors, your device should be calibrated. We have created a calibration program that will provide you with the `MagnetometerCorrectionParameters` for your specific situation. See your device's User Guide for more information.
   * @throws {@link PhidgetError}
   */


  async resetCorrectionParameters() {
    this._assertOpen();

    const bp = new BridgePacket();
    await bp.send(this._ch, 35);
  }
  /**
   * Saves the `MagnetometerCorrectionParameters`.
   *
   * *   Due to physical location, hard and soft iron offsets, and even bias errors, your device should be calibrated. We have created a calibration program that will provide you with the `MagnetometerCorrectionParameters` for your specific situation. See your device's User Guide for more information.
   * @throws {@link PhidgetError}
   */


  async saveCorrectionParameters() {
    this._assertOpen();

    const bp = new BridgePacket();
    await bp.send(this._ch, 37);
  }
  /**
   * The most recent timestamp value that the channel has reported. This is an extremely accurate time measurement streamed from the device.
   *
   * *   If your application requires a time measurement, you should use this value over a local software timestamp.
   * @returns The timestamp value
   * @throws {@link PhidgetError}
   */


  getTimestamp() {
    this._assertOpen();

    if (this.data.timestamp === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.timestamp;
  }

}

/** @public */

class Magnetometer extends MagnetometerBase {
  constructor(ch) {
    super(ch);
    this.transactionLock = new PhidgetLock();
  }
  /** @internal */


  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 10:
        if (bp.entryCount > 1) this.data.dataInterval = bp.getNumber(1);else this.data.dataInterval = bp.getNumber(0);

        this._FIREPropertyChange('DataInterval');

        this._FIREPropertyChange('DataRate');

        break;

      case 179:
        this.data.heatingEnabled = bp.entries[0].v;

        this._FIREPropertyChange('HeatingEnabled', bp);

        break;

      default:
        super._bridgeInput(bp);

        break;
    }
  }
  /** @internal */


  _errorHandler(code) {
    switch (code) {
      case ErrorEventCode.SATURATION:
        this.data.magneticField = [1e+300, 1e+300, 1e+300];
        this.data.timestamp = 1e+300;
        this._gotMagneticFieldChangeErrorEvent = true;
        break;
    }
  }

}

class SpatialBase extends PhidgetChannel {
  constructor(ch) {
    super(ch);
    this.onSpatialData = null;
    this.onAlgorithmData = null;
    this._class = ChannelClass.SPATIAL;
    this.name = "Spatial";
    this.data = this._initData();
  }
  /** @internal */


  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 174:
        break;

      case 149:
        this.data.algorithm = bp.entries[0].v;

        this._FIREPropertyChange('Algorithm', bp);

        break;

      case 151:
        this.data.algorithmMagnetometerGain = bp.entries[0].v;

        this._FIREPropertyChange('AlgorithmMagnetometerGain', bp);

        break;

      case 54:
        if (bp.entryCount > 1) this.data.dataInterval = bp.entries[1].v;else this.data.dataInterval = bp.entries[0].v;

        this._FIREPropertyChange('DataInterval', bp);

        this._FIREPropertyChange('DataRate', bp);

        break;

      case 170:
        this.data.heatingEnabled = bp.entries[0].v;

        this._FIREPropertyChange('HeatingEnabled', bp);

        break;

      case 50:
        break;

      case 145:
        this.data.precision = bp.entries[0].v;

        this._FIREPropertyChange('Precision', bp);

        break;

      case 35:
        break;

      case 37:
        break;

      case 150:
        break;

      case 106:
        break;

      case 89:
        {
          if (this._isAttachedDone && this.onSpatialData) {
            try {
              this.onSpatialData(bp.entries[0].v, bp.entries[1].v, bp.entries[2].v, bp.entries[3].v);
            } catch (err) {
              logEventException(err);
            }
          }

          break;
        }

      default:
        throw new PhidgetError(ErrorCode.INVALID_PACKET, "Unsupported bridge packet: 0x" + bp.vpkt.toString(16));
    }
  }
  /** @internal */


  _initData() {
    return {
      dataInterval: 1e+300,
      maxDataInterval: 4294967295,
      minDataInterval: 4294967295,
      minDataRate: 1e+300,
      maxDataRate: 1e+300,
      precision: 2147483647,
      algorithm: 2147483647,
      algorithmMagnetometerGain: 1e+300,
      maxAcceleration: [1e+300, 1e+300, 1e+300],
      minAcceleration: [1e+300, 1e+300, 1e+300],
      maxAngularRate: [1e+300, 1e+300, 1e+300],
      minAngularRate: [1e+300, 1e+300, 1e+300],
      maxMagneticField: [1e+300, 1e+300, 1e+300],
      minMagneticField: [1e+300, 1e+300, 1e+300],
      heatingEnabled: 2,
      quaternion: null,
      eulerAngles: null
    };
  }
  /** @internal */


  _initAfterOpen() {}
  /** @internal */


  async _setDefaults() {}
  /** @internal */


  _hasInitialState() {
    return true;
  }
  /** @internal */


  _fireInitialEvents() {}
  /**
   * The minimum acceleration the sensor will measure.
   * @throws {@link PhidgetError}
   */


  get minAcceleration() {
    return this.getMinAcceleration();
  }
  /**
   * The maximum acceleration the sensor will measure.
   * @throws {@link PhidgetError}
   */


  get maxAcceleration() {
    return this.getMaxAcceleration();
  }
  /**
   * Selects the IMU/AHRS algorithm.
   * @throws {@link PhidgetError}
   */


  get algorithm() {
    return this.getAlgorithm();
  }
  /**
   * Sets the gain for the magnetometer in the AHRS algorithm. Lower gains reduce sensor noise while slowing response time.
   * @throws {@link PhidgetError}
   */


  get algorithmMagnetometerGain() {
    return this.getAlgorithmMagnetometerGain();
  }
  /**
   * The minimum angular rate the sensor will measure.
   * @throws {@link PhidgetError}
   */


  get minAngularRate() {
    return this.getMinAngularRate();
  }
  /**
   * The maximum angular rate the sensor will measure.
   * @throws {@link PhidgetError}
   */


  get maxAngularRate() {
    return this.getMaxAngularRate();
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `SpatialData` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * @throws {@link PhidgetError}
   */


  get dataInterval() {
    return this.getDataInterval();
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataInterval() {
    return this.getMinDataInterval();
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataInterval() {
    return this.getMaxDataInterval();
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */


  get dataRate() {
    return this.getDataRate();
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataRate() {
    return this.getMinDataRate();
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataRate() {
    return this.getMaxDataRate();
  }
  /**
   * Gets the latest device orientation in the form of Euler angles. (Pitch, roll, and yaw)
   * @throws {@link PhidgetError}
   */


  get eulerAngles() {
    return this.getEulerAngles();
  }
  /**
   * Set to TRUE to enable the temperature stabilization feature of this device. This enables on-board heating elements to bring the board up to a known temperature to minimize ambient temperature effects on the sensor's reading. You can leave this setting FALSE to conserve power consumption.
   *
   * If you enable heating, it is strongly recommended to keep the board in its enclosure to keep it insulated from moving air.
   *
   * This property is shared by any and all spatial-related objects on this device (Accelerometer, Gyroscope, Magnetometer, Spatial)
   * @throws {@link PhidgetError}
   */


  get heatingEnabled() {
    return this.getHeatingEnabled();
  }
  /**
   * The minimum field strength the sensor will measure.
   * @throws {@link PhidgetError}
   */


  get minMagneticField() {
    return this.getMinMagneticField();
  }
  /**
   * The maximum field strength the sensor will measure.
   * @throws {@link PhidgetError}
   */


  get maxMagneticField() {
    return this.getMaxMagneticField();
  }
  /**
   * Selects between high/low precision sensing chips.
   * @throws {@link PhidgetError}
   * @internal
   */


  get precision() {
    return this.getPrecision();
  }
  /**
   * Gets the latest AHRS/IMU quaternion sent from the device.
   * @throws {@link PhidgetError}
   */


  get quaternion() {
    return this.getQuaternion();
  }
  /**
   * The minimum acceleration the sensor will measure.
   * @returns The minimum acceleration value
   * @throws {@link PhidgetError}
   */


  getMinAcceleration() {
    this._assertOpen();

    if (this.data.minAcceleration.includes(1e+300)) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minAcceleration;
  }
  /**
   * The maximum acceleration the sensor will measure.
   * @returns The maximum acceleration values
   * @throws {@link PhidgetError}
   */


  getMaxAcceleration() {
    this._assertOpen();

    if (this.data.maxAcceleration.includes(1e+300)) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxAcceleration;
  }
  /**
   * Calibrate your device for the environment it will be used in.
   *
   * *   Setting these parameters will allow you to tune the AHRS algorithm on the device to your specific application.
   * @throws {@link PhidgetError}
   * @param angularVelocityThreshold - The maximum angular velocity reading where the device is assumed to be "at rest"
   * @param angularVelocityDeltaThreshold - The acceptable amount of change in angular velocity between measurements before movement is assumed.
   * @param accelerationThreshold - The maximum acceleration applied to the device (minus gravity) where it is assumed to be "at rest". This is also the maximum acceleration allowable before the device stops correcting to the acceleration vector.
   * @param magTime - The time it will take to correct the heading 95% of the way to aligning with the compass (in seconds),up to 15 degrees of error. Beyond 15 degrees, this is the time it will take for the bearing to move 45 degrees towards the compass reading. Remember you can zero the algorithm at any time to instantly realign the spatial with acceleration and magnetic field vectors regardless of magnitude.
   * @param accelTime - The time it will take to correct the pitch and roll 95% of the way to aligning with the accelerometer (in seconds).
   * @param biasTime - The time it will take to have the gyro biases settle to within 95% of the measured steady state (in seconds).
   */


  async setAHRSParameters(angularVelocityThreshold, angularVelocityDeltaThreshold, accelerationThreshold, magTime, accelTime, biasTime) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: angularVelocityThreshold
    });
    bp.set({
      name: "1",
      type: "g",
      value: angularVelocityDeltaThreshold
    });
    bp.set({
      name: "2",
      type: "g",
      value: accelerationThreshold
    });
    bp.set({
      name: "3",
      type: "g",
      value: magTime
    });
    bp.set({
      name: "4",
      type: "g",
      value: accelTime
    });
    bp.set({
      name: "5",
      type: "g",
      value: biasTime
    });
    await bp.send(this._ch, 174);
  }
  /**
   * Selects the IMU/AHRS algorithm.
   * @returns The sensor algorithm
   * @throws {@link PhidgetError}
   */


  getAlgorithm() {
    this._assertOpen();

    if (this.data.algorithm === 2147483647) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.algorithm;
  }
  /**
   * Selects the IMU/AHRS algorithm.
   * @throws {@link PhidgetError}
   * @param algorithm - The sensor algorithm
   */


  async setAlgorithm(algorithm) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: algorithm
    });
    await bp.send(this._ch, 149);
  }
  /**
   * Sets the gain for the magnetometer in the AHRS algorithm. Lower gains reduce sensor noise while slowing response time.
   * @returns The AHRS algorithm magnetometer gain
   * @throws {@link PhidgetError}
   */


  getAlgorithmMagnetometerGain() {
    this._assertOpen();

    if (this.data.algorithmMagnetometerGain === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.algorithmMagnetometerGain;
  }
  /**
   * Sets the gain for the magnetometer in the AHRS algorithm. Lower gains reduce sensor noise while slowing response time.
   * @throws {@link PhidgetError}
   * @param algorithmMagnetometerGain - The AHRS algorithm magnetometer gain
   */


  async setAlgorithmMagnetometerGain(algorithmMagnetometerGain) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: algorithmMagnetometerGain
    });
    await bp.send(this._ch, 151);
  }
  /**
   * The minimum angular rate the sensor will measure.
   * @returns The angular rate values
   * @throws {@link PhidgetError}
   */


  getMinAngularRate() {
    this._assertOpen();

    if (this.data.minAngularRate.includes(1e+300)) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minAngularRate;
  }
  /**
   * The maximum angular rate the sensor will measure.
   * @returns The angular rate values
   * @throws {@link PhidgetError}
   */


  getMaxAngularRate() {
    this._assertOpen();

    if (this.data.maxAngularRate.includes(1e+300)) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxAngularRate;
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `SpatialData` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getDataInterval() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.dataInterval;
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `SpatialData` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */


  async setDataInterval(dataInterval) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: dataInterval
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getMinDataInterval() {
    this._assertOpen();

    if (this.data.minDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataInterval;
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getMaxDataInterval() {
    this._assertOpen();

    if (this.data.maxDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */


  getDataRate() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return 1000.0 / this.data.dataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */


  async setDataRate(dataRate) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: Math.round(1000.0 / dataRate)
    });
    bp.set({
      name: "1",
      type: "g",
      value: 1000.0 / dataRate
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMinDataRate() {
    this._assertOpen();

    if (this.data.minDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataRate;
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMaxDataRate() {
    this._assertOpen();

    if (this.data.maxDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataRate;
  }
  /**
   * Set to TRUE to enable the temperature stabilization feature of this device. This enables on-board heating elements to bring the board up to a known temperature to minimize ambient temperature effects on the sensor's reading. You can leave this setting FALSE to conserve power consumption.
   *
   * If you enable heating, it is strongly recommended to keep the board in its enclosure to keep it insulated from moving air.
   *
   * This property is shared by any and all spatial-related objects on this device (Accelerometer, Gyroscope, Magnetometer, Spatial)
   * @returns Whether self-heating temperature stabilization is enabled
   * @throws {@link PhidgetError}
   */


  getHeatingEnabled() {
    this._assertOpen();

    if (this.data.heatingEnabled === 2) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return !!this.data.heatingEnabled;
  }
  /**
   * Set to TRUE to enable the temperature stabilization feature of this device. This enables on-board heating elements to bring the board up to a known temperature to minimize ambient temperature effects on the sensor's reading. You can leave this setting FALSE to conserve power consumption.
   *
   * If you enable heating, it is strongly recommended to keep the board in its enclosure to keep it insulated from moving air.
   *
   * This property is shared by any and all spatial-related objects on this device (Accelerometer, Gyroscope, Magnetometer, Spatial)
   * @throws {@link PhidgetError}
   * @param heatingEnabled - Whether self-heating temperature stabilization is enabled
   */


  async setHeatingEnabled(heatingEnabled) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: heatingEnabled ? 1 : 0
    });
    await bp.send(this._ch, 170);
  }
  /**
   * The minimum field strength the sensor will measure.
   * @returns The field strength value
   * @throws {@link PhidgetError}
   */


  getMinMagneticField() {
    this._assertOpen();

    if (this.data.minMagneticField.includes(1e+300)) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minMagneticField;
  }
  /**
   * The maximum field strength the sensor will measure.
   * @returns The field strength value
   * @throws {@link PhidgetError}
   */


  getMaxMagneticField() {
    this._assertOpen();

    if (this.data.maxMagneticField.includes(1e+300)) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxMagneticField;
  }
  /**
   * Calibrate your device for the environment it will be used in.
   *
   * *   Due to physical location, hard and soft iron offsets, and even bias errors, your device should be calibrated. We have created a calibration program that will provide you with the `MagnetometerCorrectionParameters` for your specific situation. See your device's User Guide for more information.
   * @throws {@link PhidgetError}
   * @param magneticField - Ambient magnetic field value.
   * @param offset0 - Provided by calibration program.
   * @param offset1 - Provided by calibration program.
   * @param offset2 - Provided by calibration program.
   * @param gain0 - Provided by calibration program.
   * @param gain1 - Provided by calibration program.
   * @param gain2 - Provided by calibration program.
   * @param T0 - Provided by calibration program.
   * @param T1 - Provided by calibration program.
   * @param T2 - Provided by calibration program.
   * @param T3 - Provided by calibration program.
   * @param T4 - Provided by calibration program.
   * @param T5 - Provided by calibration program.
   */


  async setMagnetometerCorrectionParameters(magneticField, offset0, offset1, offset2, gain0, gain1, gain2, T0, T1, T2, T3, T4, T5) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: magneticField
    });
    bp.set({
      name: "1",
      type: "g",
      value: offset0
    });
    bp.set({
      name: "2",
      type: "g",
      value: offset1
    });
    bp.set({
      name: "3",
      type: "g",
      value: offset2
    });
    bp.set({
      name: "4",
      type: "g",
      value: gain0
    });
    bp.set({
      name: "5",
      type: "g",
      value: gain1
    });
    bp.set({
      name: "6",
      type: "g",
      value: gain2
    });
    bp.set({
      name: "7",
      type: "g",
      value: T0
    });
    bp.set({
      name: "8",
      type: "g",
      value: T1
    });
    bp.set({
      name: "9",
      type: "g",
      value: T2
    });
    bp.set({
      name: "10",
      type: "g",
      value: T3
    });
    bp.set({
      name: "11",
      type: "g",
      value: T4
    });
    bp.set({
      name: "12",
      type: "g",
      value: T5
    });
    await bp.send(this._ch, 50);
  }
  /**
   * Selects between high/low precision sensing chips.
   * @returns The sensor precision value
   * @throws {@link PhidgetError}
   * @internal
   */


  getPrecision() {
    this._assertOpen();

    if (this.data.precision === 2147483647) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.precision;
  }
  /**
   * Selects between high/low precision sensing chips.
   * @throws {@link PhidgetError}
   * @param precision - The sensor precision value
   * @internal
   */


  async setPrecision(precision) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: precision
    });
    await bp.send(this._ch, 145);
  }
  /**
   * Resets the `MagnetometerCorrectionParameters` to their default values.
   *
   * *   Due to physical location, hard and soft iron offsets, and even bias errors, your device should be calibrated. We have created a calibration program that will provide you with the `MagnetometerCorrectionParameters` for your specific situation. See your device's User Guide for more information.
   * @throws {@link PhidgetError}
   */


  async resetMagnetometerCorrectionParameters() {
    this._assertOpen();

    const bp = new BridgePacket();
    await bp.send(this._ch, 35);
  }
  /**
   * Saves the `MagnetometerCorrectionParameters`.
   *
   * *   Due to physical location, hard and soft iron offsets, and even bias errors, your device should be calibrated. We have created a calibration program that will provide you with the `MagnetometerCorrectionParameters` for your specific situation. See your device's User Guide for more information.
   * @throws {@link PhidgetError}
   */


  async saveMagnetometerCorrectionParameters() {
    this._assertOpen();

    const bp = new BridgePacket();
    await bp.send(this._ch, 37);
  }
  /**
   * Zeros the AHRS algorithm.
   * @throws {@link PhidgetError}
   */


  async zeroAlgorithm() {
    this._assertOpen();

    const bp = new BridgePacket();
    await bp.send(this._ch, 150);
  }
  /**
   * Re-zeros the gyroscope in 1-2 seconds.
   *
   * *   The device must be stationary when zeroing.
   * *   The angular rate will be reported as 0.0°/s while zeroing.
   * *   Zeroing the gyroscope is a method of compensating for the drift that is inherent to all gyroscopes. See your device's User Guide for more information on dealing with drift.
   * @throws {@link PhidgetError}
   */


  async zeroGyro() {
    this._assertOpen();

    const bp = new BridgePacket();
    await bp.send(this._ch, 106);
  }

}

/** @public */

class Spatial extends SpatialBase {
  constructor(ch) {
    super(ch);
    this._transactionLock = new PhidgetLock();
  }
  /** @internal */


  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 10:
        {
          if (bp.entryCount > 1) this.data.dataInterval = bp.getNumber(1);else this.data.dataInterval = bp.getNumber(0);

          this._FIREPropertyChange('DataInterval');

          this._FIREPropertyChange('DataRate');

          break;
        }

      case 148:
        {
          const quaternion = bp.getArray(0);
          const timestamp = bp.getNumber(1);
          this.data.quaternion = {
            x: quaternion[0],
            y: quaternion[1],
            z: quaternion[2],
            w: quaternion[3]
          };

          if (this._isAttachedDone && this.onAlgorithmData) {
            try {
              this.onAlgorithmData(quaternion, timestamp);
            } catch (err) {
              logEventException(err);
            }
          }

          break;
        }

      case 179:
        this.data.heatingEnabled = bp.entries[0].v;

        this._FIREPropertyChange('HeatingEnabled', bp);

        break;

      default:
        super._bridgeInput(bp);

        break;
    }
  }
  /** @internal */


  _hasInitialState() {
    if (this.data.quaternion === null) return false;
    return true;
  }

  getQuaternion() {
    this._assertOpen();

    if (this.data.quaternion === null) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.quaternion;
  }

  getEulerAngles() {
    this._assertOpen();

    if (this.data.quaternion === null) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    const roll_rad = Math.atan2(2.0 * (this.data.quaternion.x * this.data.quaternion.w + this.data.quaternion.y * this.data.quaternion.z), 1 - 2.0 * (this.data.quaternion.x * this.data.quaternion.x + this.data.quaternion.y * this.data.quaternion.y));
    const pitch_rad = Math.asin(2.0 * (this.data.quaternion.w * this.data.quaternion.y - this.data.quaternion.z * this.data.quaternion.x));
    const heading_rad = Math.atan2(2.0 * (this.data.quaternion.w * this.data.quaternion.z + this.data.quaternion.x * this.data.quaternion.y), 1 - 2.0 * (this.data.quaternion.y * this.data.quaternion.y + this.data.quaternion.z * this.data.quaternion.z));
    const eulerAngles = {
      heading: heading_rad * 180.0 / Math.PI,
      pitch: pitch_rad * 180.0 / Math.PI,
      roll: roll_rad * 180.0 / Math.PI
    };
    return eulerAngles;
  }

}

class TemperatureSensorBase extends PhidgetChannel {
  constructor(ch) {
    super(ch);
    this.onTemperatureChange = null;
    this._class = ChannelClass.TEMPERATURE_SENSOR;
    this.name = "TemperatureSensor";
    this.data = this._initData();
  }
  /** @internal */


  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 54:
        if (bp.entryCount > 1) this.data.dataInterval = bp.entries[1].v;else this.data.dataInterval = bp.entries[0].v;

        this._FIREPropertyChange('DataInterval', bp);

        this._FIREPropertyChange('DataRate', bp);

        break;

      case 76:
        this.data.RTDType = bp.entries[0].v;

        this._FIREPropertyChange('RTDType', bp);

        break;

      case 77:
        this.data.RTDWireSetup = bp.entries[0].v;

        this._FIREPropertyChange('RTDWireSetup', bp);

        break;

      case 46:
        this.data.temperatureChangeTrigger = bp.entries[0].v;

        this._FIREPropertyChange('TemperatureChangeTrigger', bp);

        break;

      case 84:
        this.data.thermocoupleType = bp.entries[0].v;

        this._FIREPropertyChange('ThermocoupleType', bp);

        break;

      case 95:
        {
          this.data.temperature = bp.entries[0].v;

          if (this._isAttachedDone && this.onTemperatureChange) {
            try {
              this.onTemperatureChange(this.data.temperature);
            } catch (err) {
              logEventException(err);
            }
          }

          break;
        }

      default:
        throw new PhidgetError(ErrorCode.INVALID_PACKET, "Unsupported bridge packet: 0x" + bp.vpkt.toString(16));
    }
  }
  /** @internal */


  _initData() {
    return {
      dataInterval: 1e+300,
      maxDataInterval: 4294967295,
      minDataRate: 1e+300,
      maxDataRate: 1e+300,
      maxTemperature: 1e+300,
      maxTemperatureChangeTrigger: 1e+300,
      minDataInterval: 4294967295,
      minTemperature: 1e+300,
      minTemperatureChangeTrigger: 1e+300,
      temperature: 1e+300,
      temperatureChangeTrigger: 1e+300,
      RTDType: 2147483647,
      RTDWireSetup: 2147483647,
      thermocoupleType: 2147483647
    };
  }
  /** @internal */


  _initAfterOpen() {}
  /** @internal */


  async _setDefaults() {}
  /** @internal */


  _hasInitialState() {
    return true;
  }
  /** @internal */


  _fireInitialEvents() {}
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `TemperatureChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `TemperatureChange` events can also be affected by the `temperatureChangeTrigger`.
   * @throws {@link PhidgetError}
   */


  get dataInterval() {
    return this.getDataInterval();
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataInterval() {
    return this.getMinDataInterval();
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataInterval() {
    return this.getMaxDataInterval();
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */


  get dataRate() {
    return this.getDataRate();
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataRate() {
    return this.getMinDataRate();
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataRate() {
    return this.getMaxDataRate();
  }
  /**
   * The `RTDType` must correspond to the RTD type you are using in your application.
   *
   * *   If you are unsure which `RTDType` to use, visit your device's User Guide for more information.
   * @throws {@link PhidgetError}
   */


  get RTDType() {
    return this.getRTDType();
  }
  /**
   * The `RTDWireSetup` must correspond to the wire configuration you are using in your application.
   *
   * *   If you are unsure which `RTDWireSetup` to use, visit your device's User Guide for more information.
   * @throws {@link PhidgetError}
   */


  get RTDWireSetup() {
    return this.getRTDWireSetup();
  }
  /**
   * The most recent temperature value that the channel has reported.
   *
   * *   This value will always be between `minTemperature` and `maxTemperature`.
   * @throws {@link PhidgetError}
   */


  get temperature() {
    return this.getTemperature();
  }
  /**
   * The minimum value the `TemperatureChange` event will report.
   * @throws {@link PhidgetError}
   */


  get minTemperature() {
    return this.getMinTemperature();
  }
  /**
   * The maximum value the `TemperatureChange` event will report.
   * @throws {@link PhidgetError}
   */


  get maxTemperature() {
    return this.getMaxTemperature();
  }
  /**
   * The channel will not issue a `TemperatureChange` event until the temperature value has changed by the amount specified by the `temperatureChangeTrigger`.
   *
   * *   Setting the `temperatureChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   */


  get temperatureChangeTrigger() {
    return this.getTemperatureChangeTrigger();
  }
  /**
   * The minimum value that `temperatureChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */


  get minTemperatureChangeTrigger() {
    return this.getMinTemperatureChangeTrigger();
  }
  /**
   * The maximum value that `temperatureChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxTemperatureChangeTrigger() {
    return this.getMaxTemperatureChangeTrigger();
  }
  /**
   * The `thermocoupleType` must correspond to the thermocouple type you are using in your application.
   *
   * *   If you are unsure which `thermocoupleType` to use, visit the [Thermocouple Primer](https://www.phidgets.com/docs/Thermocouple_Primer) for more information.
   * @throws {@link PhidgetError}
   */


  get thermocoupleType() {
    return this.getThermocoupleType();
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `TemperatureChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `TemperatureChange` events can also be affected by the `temperatureChangeTrigger`.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getDataInterval() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.dataInterval;
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `TemperatureChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `TemperatureChange` events can also be affected by the `temperatureChangeTrigger`.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */


  async setDataInterval(dataInterval) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: dataInterval
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getMinDataInterval() {
    this._assertOpen();

    if (this.data.minDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataInterval;
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getMaxDataInterval() {
    this._assertOpen();

    if (this.data.maxDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */


  getDataRate() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return 1000.0 / this.data.dataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */


  async setDataRate(dataRate) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: Math.round(1000.0 / dataRate)
    });
    bp.set({
      name: "1",
      type: "g",
      value: 1000.0 / dataRate
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMinDataRate() {
    this._assertOpen();

    if (this.data.minDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataRate;
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMaxDataRate() {
    this._assertOpen();

    if (this.data.maxDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataRate;
  }
  /**
   * The `RTDType` must correspond to the RTD type you are using in your application.
   *
   * *   If you are unsure which `RTDType` to use, visit your device's User Guide for more information.
   * @returns The RTD type
   * @throws {@link PhidgetError}
   */


  getRTDType() {
    this._assertOpen();

    if (this.data.RTDType === 2147483647) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.RTDType;
  }
  /**
   * The `RTDType` must correspond to the RTD type you are using in your application.
   *
   * *   If you are unsure which `RTDType` to use, visit your device's User Guide for more information.
   * @throws {@link PhidgetError}
   * @param RTDType - The RTD type
   */


  async setRTDType(RTDType) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: RTDType
    });
    await bp.send(this._ch, 76);
  }
  /**
   * The `RTDWireSetup` must correspond to the wire configuration you are using in your application.
   *
   * *   If you are unsure which `RTDWireSetup` to use, visit your device's User Guide for more information.
   * @returns The RTD wire setup
   * @throws {@link PhidgetError}
   */


  getRTDWireSetup() {
    this._assertOpen();

    if (this.data.RTDWireSetup === 2147483647) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.RTDWireSetup;
  }
  /**
   * The `RTDWireSetup` must correspond to the wire configuration you are using in your application.
   *
   * *   If you are unsure which `RTDWireSetup` to use, visit your device's User Guide for more information.
   * @throws {@link PhidgetError}
   * @param RTDWireSetup - The RTD wire setup
   */


  async setRTDWireSetup(RTDWireSetup) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: RTDWireSetup
    });
    await bp.send(this._ch, 77);
  }
  /**
   * The most recent temperature value that the channel has reported.
   *
   * *   This value will always be between `minTemperature` and `maxTemperature`.
   * @returns The temperature value
   * @throws {@link PhidgetError}
   */


  getTemperature() {
    this._assertOpen();

    if (this.data.temperature === 1e+300 || Number.isNaN(this.data.temperature)) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    if (this.data.temperature > this.data.maxTemperature) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE_HIGH);
    if (this.data.temperature < this.data.minTemperature) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE_LOW);
    return this.data.temperature;
  }
  /**
   * The minimum value the `TemperatureChange` event will report.
   * @returns The temperature value
   * @throws {@link PhidgetError}
   */


  getMinTemperature() {
    this._assertOpen();

    if (this.data.minTemperature === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minTemperature;
  }
  /**
   * The maximum value the `TemperatureChange` event will report.
   * @returns The temperature value
   * @throws {@link PhidgetError}
   */


  getMaxTemperature() {
    this._assertOpen();

    if (this.data.maxTemperature === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxTemperature;
  }
  /**
   * The channel will not issue a `TemperatureChange` event until the temperature value has changed by the amount specified by the `temperatureChangeTrigger`.
   *
   * *   Setting the `temperatureChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */


  getTemperatureChangeTrigger() {
    this._assertOpen();

    if (this.data.temperatureChangeTrigger === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.temperatureChangeTrigger;
  }
  /**
   * The channel will not issue a `TemperatureChange` event until the temperature value has changed by the amount specified by the `temperatureChangeTrigger`.
   *
   * *   Setting the `temperatureChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   * @param temperatureChangeTrigger - The change trigger value
   */


  async setTemperatureChangeTrigger(temperatureChangeTrigger) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: temperatureChangeTrigger
    });
    await bp.send(this._ch, 46);
  }
  /**
   * The minimum value that `temperatureChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */


  getMinTemperatureChangeTrigger() {
    this._assertOpen();

    if (this.data.minTemperatureChangeTrigger === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minTemperatureChangeTrigger;
  }
  /**
   * The maximum value that `temperatureChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */


  getMaxTemperatureChangeTrigger() {
    this._assertOpen();

    if (this.data.maxTemperatureChangeTrigger === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxTemperatureChangeTrigger;
  }
  /**
   * The `thermocoupleType` must correspond to the thermocouple type you are using in your application.
   *
   * *   If you are unsure which `thermocoupleType` to use, visit the [Thermocouple Primer](https://www.phidgets.com/docs/Thermocouple_Primer) for more information.
   * @returns The thermocouple type
   * @throws {@link PhidgetError}
   */


  getThermocoupleType() {
    this._assertOpen();

    if (this.data.thermocoupleType === 2147483647) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.thermocoupleType;
  }
  /**
   * The `thermocoupleType` must correspond to the thermocouple type you are using in your application.
   *
   * *   If you are unsure which `thermocoupleType` to use, visit the [Thermocouple Primer](https://www.phidgets.com/docs/Thermocouple_Primer) for more information.
   * @throws {@link PhidgetError}
   * @param thermocoupleType - The thermocouple type
   */


  async setThermocoupleType(thermocoupleType) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: thermocoupleType
    });
    await bp.send(this._ch, 84);
  }

}

/** @public */

class TemperatureSensor extends TemperatureSensorBase {
  /** @internal */
  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 10:
        if (bp.entryCount > 1) this.data.dataInterval = bp.getNumber(1);else this.data.dataInterval = bp.getNumber(0);

        this._FIREPropertyChange('DataInterval');

        this._FIREPropertyChange('DataRate');

        break;

      case 76:
        this.data.temperature = 1e+300;

        super._bridgeInput(bp);

        break;

      case 84:
        super._bridgeInput(bp);

        this.data.temperature = 1e+300;

        switch (this.data.thermocoupleType) {
          case ThermocoupleType.J:
            this.data.minTemperature = 0;
            this.data.maxTemperature = 750;
            break;

          case ThermocoupleType.K:
            this.data.minTemperature = -200;
            this.data.maxTemperature = 1250;
            break;

          case ThermocoupleType.E:
            this.data.minTemperature = -200;
            this.data.maxTemperature = 900;
            break;

          case ThermocoupleType.T:
            this.data.minTemperature = -200;
            this.data.maxTemperature = 350;
            break;
        }

        this._FIREPropertyChange('MinTemperature', bp);

        this._FIREPropertyChange('MaxTemperature', bp);

        break;

      case 180:
        this.data.RTDWireSetup = bp.entries[0].v;

        this._FIREPropertyChange('RTDWireSetup', bp);

        break;

      default:
        super._bridgeInput(bp);

        break;
    }
  }
  /** @internal */


  _errorHandler(code) {
    switch (code) {
      case ErrorEventCode.SATURATION:
      case ErrorEventCode.OUT_OF_RANGE:
        this.data.temperature = 1e+300;
        this._gotTemperatureChangeErrorEvent = true;
        break;
    }
  }

}

class EncoderBase extends PhidgetChannel {
  constructor(ch) {
    super(ch);
    this.onPositionChange = null;
    this._class = ChannelClass.ENCODER;
    this.name = "Encoder";
    this.data = this._initData();
  }
  /** @internal */


  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 56:
        this.data.enabled = bp.entries[0].v;

        this._FIREPropertyChange('Enabled', bp);

        break;

      case 54:
        if (bp.entryCount > 1) this.data.dataInterval = bp.entries[1].v;else this.data.dataInterval = bp.entries[0].v;

        this._FIREPropertyChange('DataInterval', bp);

        this._FIREPropertyChange('DataRate', bp);

        break;

      case 65:
        this.data.IOMode = bp.entries[0].v;

        this._FIREPropertyChange('IOMode', bp);

        break;

      case 46:
        this.data.positionChangeTrigger = bp.entries[0].v;

        this._FIREPropertyChange('PositionChangeTrigger', bp);

        break;

      default:
        throw new PhidgetError(ErrorCode.INVALID_PACKET, "Unsupported bridge packet: 0x" + bp.vpkt.toString(16));
    }
  }
  /** @internal */


  _initData() {
    return {
      dataInterval: 1e+300,
      minDataInterval: 4294967295,
      maxDataInterval: 4294967295,
      minDataRate: 1e+300,
      maxDataRate: 1e+300,
      maxPositionChangeTrigger: 4294967295,
      minPositionChangeTrigger: 4294967295,
      position: 9223372036854776000,
      indexPosition: 9223372036854776000,
      positionChangeTrigger: 4294967295,
      enabled: 2,
      IOMode: 2147483647
    };
  }
  /** @internal */


  _initAfterOpen() {}
  /** @internal */


  async _setDefaults() {}
  /** @internal */


  _hasInitialState() {
    return true;
  }
  /** @internal */


  _fireInitialEvents() {}
  /**
   * The enabled state of the encoder.
   * @throws {@link PhidgetError}
   */


  get enabled() {
    return this.getEnabled();
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `PositionChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `PositionChange` events can also be affected by the `positionChangeTrigger`.
   * @throws {@link PhidgetError}
   */


  get dataInterval() {
    return this.getDataInterval();
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataInterval() {
    return this.getMinDataInterval();
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataInterval() {
    return this.getMaxDataInterval();
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */


  get dataRate() {
    return this.getDataRate();
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataRate() {
    return this.getMinDataRate();
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataRate() {
    return this.getMaxDataRate();
  }
  /**
   * The most recent position of the index channel calculated by the Phidgets library.
   *
   * *   The index channel will usually pulse once per rotation.
   * *   Setting the encoder position will move the index position the same amount so their relative position stays the same.
   * *   Index position is tracked locally as the last position at which the index was triggered. Setting position will only affect the local copy of the index position value. This means that index positions seen by multiple network applications may not agree.
   * @throws {@link PhidgetError}
   */


  get indexPosition() {
    return this.getIndexPosition();
  }
  /**
   * The encoder interface mode. Match the mode to the type of encoder you have attached.
   *
   * *   It is recommended to only change this when the encoder disabled in order to avoid unexpected results.
   * @throws {@link PhidgetError}
   */


  get IOMode() {
    return this.getIOMode();
  }
  /**
   * The most recent position value calculated by the Phidgets library.
   *
   * *   Position counts quadrature edges within a quadrature cycle. This means there are four counts per full quadrature cycle.
   * *   Position is tracked locally as the total position change from the time the channel is opened. Setting position will only affect the local copy of the position value. This means that positions seen by multiple network applications may not agree.
   * @throws {@link PhidgetError}
   */


  get position() {
    return this.getPosition();
  }

  set position(position) {
    this.setPosition(position);
  }
  /**
   * The channel will not issue a `PositionChange` event until the position value has changed by the amount specified by the `positionChangeTrigger`.
   *
   * *   Setting the `positionChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   */


  get positionChangeTrigger() {
    return this.getPositionChangeTrigger();
  }
  /**
   * The minimum value that `positionChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */


  get minPositionChangeTrigger() {
    return this.getMinPositionChangeTrigger();
  }
  /**
   * The maximum value that `positionChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxPositionChangeTrigger() {
    return this.getMaxPositionChangeTrigger();
  }
  /**
   * The enabled state of the encoder.
   * @throws {@link PhidgetError}
   * @param enabled - The enabled value
   */


  async setEnabled(enabled) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: enabled ? 1 : 0
    });
    await bp.send(this._ch, 56);
  }
  /**
   * The enabled state of the encoder.
   * @returns The enabled value
   * @throws {@link PhidgetError}
   */


  getEnabled() {
    this._assertOpen();

    if (this.data.enabled === 2) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return !!this.data.enabled;
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `PositionChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `PositionChange` events can also be affected by the `positionChangeTrigger`.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getDataInterval() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.dataInterval;
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `PositionChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `PositionChange` events can also be affected by the `positionChangeTrigger`.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */


  async setDataInterval(dataInterval) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: dataInterval
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getMinDataInterval() {
    this._assertOpen();

    if (this.data.minDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataInterval;
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getMaxDataInterval() {
    this._assertOpen();

    if (this.data.maxDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */


  getDataRate() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return 1000.0 / this.data.dataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */


  async setDataRate(dataRate) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: Math.round(1000.0 / dataRate)
    });
    bp.set({
      name: "1",
      type: "g",
      value: 1000.0 / dataRate
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMinDataRate() {
    this._assertOpen();

    if (this.data.minDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataRate;
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMaxDataRate() {
    this._assertOpen();

    if (this.data.maxDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataRate;
  }
  /**
   * The most recent position of the index channel calculated by the Phidgets library.
   *
   * *   The index channel will usually pulse once per rotation.
   * *   Setting the encoder position will move the index position the same amount so their relative position stays the same.
   * *   Index position is tracked locally as the last position at which the index was triggered. Setting position will only affect the local copy of the index position value. This means that index positions seen by multiple network applications may not agree.
   * @returns The index position value
   * @throws {@link PhidgetError}
   */


  getIndexPosition() {
    this._assertOpen();

    if (this.data.indexPosition === 9223372036854776000) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.indexPosition;
  }
  /**
   * The encoder interface mode. Match the mode to the type of encoder you have attached.
   *
   * *   It is recommended to only change this when the encoder disabled in order to avoid unexpected results.
   * @returns The IO mode value.
   * @throws {@link PhidgetError}
   */


  getIOMode() {
    this._assertOpen();

    if (this.data.IOMode === 2147483647) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.IOMode;
  }
  /**
   * The encoder interface mode. Match the mode to the type of encoder you have attached.
   *
   * *   It is recommended to only change this when the encoder disabled in order to avoid unexpected results.
   * @throws {@link PhidgetError}
   * @param IOMode - The IO mode value.
   */


  async setIOMode(IOMode) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: IOMode
    });
    await bp.send(this._ch, 65);
  }
  /**
   * The most recent position value calculated by the Phidgets library.
   *
   * *   Position counts quadrature edges within a quadrature cycle. This means there are four counts per full quadrature cycle.
   * *   Position is tracked locally as the total position change from the time the channel is opened. Setting position will only affect the local copy of the position value. This means that positions seen by multiple network applications may not agree.
   * @returns The position value
   * @throws {@link PhidgetError}
   */


  getPosition() {
    this._assertOpen();

    if (this.data.position === 9223372036854776000) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.position;
  }
  /**
   * The channel will not issue a `PositionChange` event until the position value has changed by the amount specified by the `positionChangeTrigger`.
   *
   * *   Setting the `positionChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */


  getPositionChangeTrigger() {
    this._assertOpen();

    if (this.data.positionChangeTrigger === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.positionChangeTrigger;
  }
  /**
   * The channel will not issue a `PositionChange` event until the position value has changed by the amount specified by the `positionChangeTrigger`.
   *
   * *   Setting the `positionChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   * @param positionChangeTrigger - The change trigger value
   */


  async setPositionChangeTrigger(positionChangeTrigger) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: positionChangeTrigger
    });
    await bp.send(this._ch, 46);
  }
  /**
   * The minimum value that `positionChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */


  getMinPositionChangeTrigger() {
    this._assertOpen();

    if (this.data.minPositionChangeTrigger === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minPositionChangeTrigger;
  }
  /**
   * The maximum value that `positionChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */


  getMaxPositionChangeTrigger() {
    this._assertOpen();

    if (this.data.maxPositionChangeTrigger === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxPositionChangeTrigger;
  }

}

/** @public */

class Encoder extends EncoderBase {
  /** @internal */
  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 29:
        {
          const positionChange = bp.getNumber(0);
          const timeChange = bp.getNumber(1);
          const indexTriggered = bp.getBoolean(2);
          let indexPosition = 0;

          if (indexTriggered) {
            indexPosition = bp.getNumber(3);
            this.data.indexPosition = this.data.position + indexPosition;
          }

          this.data.position += positionChange;

          if (this._isAttachedDone && this.onPositionChange) {
            try {
              this.onPositionChange(positionChange, timeChange, indexTriggered);
            } catch (err) {
              logEventException(err);
            }
          }

          break;
        }

      default:
        super._bridgeInput(bp);

        break;
    }
  }

  setPosition(position) {
    this._assertOpen();

    if (this.data.indexPosition != 9223372036854776000) this.data.indexPosition += position - this.data.position;
    this.data.position = position;
  }

}

class FrequencyCounterBase extends PhidgetChannel {
  constructor(ch) {
    super(ch);
    this.onFrequencyChange = null;
    this.onCountChange = null;
    this._class = ChannelClass.FREQUENCY_COUNTER;
    this.name = "FrequencyCounter";
    this.data = this._initData();
  }
  /** @internal */


  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 56:
        this.data.enabled = bp.entries[0].v;

        this._FIREPropertyChange('Enabled', bp);

        break;

      case 54:
        if (bp.entryCount > 1) this.data.dataInterval = bp.entries[1].v;else this.data.dataInterval = bp.entries[0].v;

        this._FIREPropertyChange('DataInterval', bp);

        this._FIREPropertyChange('DataRate', bp);

        break;

      case 59:
        this.data.filterType = bp.entries[0].v;

        this._FIREPropertyChange('FilterType', bp);

        break;

      case 64:
        this.data.inputMode = bp.entries[0].v;

        this._FIREPropertyChange('InputMode', bp);

        break;

      case 74:
        this.data.powerSupply = bp.entries[0].v;

        this._FIREPropertyChange('PowerSupply', bp);

        break;

      case 7:
        {
          if (this._isAttachedDone && this.onCountChange) {
            try {
              this.onCountChange(bp.entries[0].v, bp.entries[1].v);
            } catch (err) {
              logEventException(err);
            }
          }

          break;
        }

      case 20:
        {
          this.data.frequency = bp.entries[0].v;

          if (this._isAttachedDone && this.onFrequencyChange) {
            try {
              this.onFrequencyChange(this.data.frequency);
            } catch (err) {
              logEventException(err);
            }
          }

          break;
        }

      default:
        throw new PhidgetError(ErrorCode.INVALID_PACKET, "Unsupported bridge packet: 0x" + bp.vpkt.toString(16));
    }
  }
  /** @internal */


  _initData() {
    return {
      totalTicksSinceLastCount: 0,
      frequencyPrecision: 0,
      dataInterval: 1e+300,
      minDataInterval: 4294967295,
      maxDataInterval: 4294967295,
      minDataRate: 1e+300,
      maxDataRate: 1e+300,
      maxFrequency: 1e+300,
      maxFrequencyCutoff: 1e+300,
      minFrequencyCutoff: 1e+300,
      count: 18446744073709552000,
      timeElapsed: 1e+300,
      frequencyCutoff: 1e+300,
      frequency: 1e+300,
      filterType: 2147483647,
      powerSupply: 2147483647,
      inputMode: 2147483647,
      enabled: 2
    };
  }
  /** @internal */


  _initAfterOpen() {}
  /** @internal */


  async _setDefaults() {}
  /** @internal */


  _hasInitialState() {
    return true;
  }
  /** @internal */


  _fireInitialEvents() {}
  /**
   * The most recent count value the channel has reported.
   *
   * *   The count represents the total number of pulses since the the channel was opened, or last reset.
   * @throws {@link PhidgetError}
   */


  get count() {
    return this.getCount();
  }
  /**
   * Enables or disables the channel.
   *
   * *   When a channel is disabled, it will not longer register counts, therefore the `timeElapsed` and `count` will not be updated until the channel is re-enabled.
   * @throws {@link PhidgetError}
   */


  get enabled() {
    return this.getEnabled();
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `CountChange` / `FrequencyChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * @throws {@link PhidgetError}
   */


  get dataInterval() {
    return this.getDataInterval();
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataInterval() {
    return this.getMinDataInterval();
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataInterval() {
    return this.getMaxDataInterval();
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */


  get dataRate() {
    return this.getDataRate();
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataRate() {
    return this.getMinDataRate();
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataRate() {
    return this.getMaxDataRate();
  }
  /**
   * Determines the signal type that the channel responds to.
   *
   * *   The filter type is chosen based on the type of input signal. See the `phidget22.FrequencyFilterType` entry under Enumerations for more information.
   * @throws {@link PhidgetError}
   */


  get filterType() {
    return this.getFilterType();
  }
  /**
   * The most recent frequency value that the channel has reported.
   *
   * *   This value will always be between 0 Hz and `maxFrequency`.
   * @throws {@link PhidgetError}
   */


  get frequency() {
    return this.getFrequency();
  }
  /**
   * The maximum value the `FrequencyChange` event will report.
   * @throws {@link PhidgetError}
   */


  get maxFrequency() {
    return this.getMaxFrequency();
  }
  /**
   * The frequency at which zero hertz is assumed.
   *
   * *   This means any frequency at or below the `frequencyCutoff` value will be reported as 0 Hz.
   *
   * *   This property is stored locally, so other users who have this Phidget open over a network connection won't see the effects of your selected cutoff.
   * @throws {@link PhidgetError}
   */


  get frequencyCutoff() {
    return this.getFrequencyCutoff();
  }

  set frequencyCutoff(frequencyCutoff) {
    this.setFrequencyCutoff(frequencyCutoff);
  }
  /**
   * The minimum value that `frequencyCutoff` can be set to.
   * @throws {@link PhidgetError}
   */


  get minFrequencyCutoff() {
    return this.getMinFrequencyCutoff();
  }
  /**
   * The maximum value that `frequencyCutoff` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxFrequencyCutoff() {
    return this.getMaxFrequencyCutoff();
  }
  /**
   * The input polarity mode for your channel.
   *
   * *   See your device's User Guide for more information about what value to chooose for the `inputMode`
   * @throws {@link PhidgetError}
   */


  get inputMode() {
    return this.getInputMode();
  }
  /**
   * Choose the power supply voltage.
   *
   * *   Set this to the voltage specified in the attached sensor's data sheet to power it.
   *
   * *   Set to `phidget22.PowerSupply.OFF` to turn off the supply to save power.
   * @throws {@link PhidgetError}
   */


  get powerSupply() {
    return this.getPowerSupply();
  }
  /**
   * The amount of time the frequency counter has been enabled for.
   *
   * *   This property complements `count`, the total number of pulses detected since the channel was opened, or last reset.
   * @throws {@link PhidgetError}
   */


  get timeElapsed() {
    return this.getTimeElapsed();
  }
  /**
   * The most recent count value the channel has reported.
   *
   * *   The count represents the total number of pulses since the the channel was opened, or last reset.
   * @returns The count value
   * @throws {@link PhidgetError}
   */


  getCount() {
    this._assertOpen();

    if (this.data.count === 18446744073709552000) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.count;
  }
  /**
   * Enables or disables the channel.
   *
   * *   When a channel is disabled, it will not longer register counts, therefore the `timeElapsed` and `count` will not be updated until the channel is re-enabled.
   * @throws {@link PhidgetError}
   * @param enabled - The enabled value
   */


  async setEnabled(enabled) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: enabled ? 1 : 0
    });
    await bp.send(this._ch, 56);
  }
  /**
   * Enables or disables the channel.
   *
   * *   When a channel is disabled, it will not longer register counts, therefore the `timeElapsed` and `count` will not be updated until the channel is re-enabled.
   * @returns The enabled value
   * @throws {@link PhidgetError}
   */


  getEnabled() {
    this._assertOpen();

    if (this.data.enabled === 2) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return !!this.data.enabled;
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `CountChange` / `FrequencyChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getDataInterval() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.dataInterval;
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `CountChange` / `FrequencyChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */


  async setDataInterval(dataInterval) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: dataInterval
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getMinDataInterval() {
    this._assertOpen();

    if (this.data.minDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataInterval;
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getMaxDataInterval() {
    this._assertOpen();

    if (this.data.maxDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */


  getDataRate() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return 1000.0 / this.data.dataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */


  async setDataRate(dataRate) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: Math.round(1000.0 / dataRate)
    });
    bp.set({
      name: "1",
      type: "g",
      value: 1000.0 / dataRate
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMinDataRate() {
    this._assertOpen();

    if (this.data.minDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataRate;
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMaxDataRate() {
    this._assertOpen();

    if (this.data.maxDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataRate;
  }
  /**
   * Determines the signal type that the channel responds to.
   *
   * *   The filter type is chosen based on the type of input signal. See the `phidget22.FrequencyFilterType` entry under Enumerations for more information.
   * @returns The filter value
   * @throws {@link PhidgetError}
   */


  getFilterType() {
    this._assertOpen();

    if (this.data.filterType === 2147483647) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.filterType;
  }
  /**
   * Determines the signal type that the channel responds to.
   *
   * *   The filter type is chosen based on the type of input signal. See the `phidget22.FrequencyFilterType` entry under Enumerations for more information.
   * @throws {@link PhidgetError}
   * @param filterType - The filter value
   */


  async setFilterType(filterType) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: filterType
    });
    await bp.send(this._ch, 59);
  }
  /**
   * The most recent frequency value that the channel has reported.
   *
   * *   This value will always be between 0 Hz and `maxFrequency`.
   * @returns The frequency value
   * @throws {@link PhidgetError}
   */


  getFrequency() {
    this._assertOpen();

    if (this.data.frequency === 1e+300 || Number.isNaN(this.data.frequency)) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    if (this.data.frequency > this.data.maxFrequency) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE_HIGH);
    return this.data.frequency;
  }
  /**
   * The maximum value the `FrequencyChange` event will report.
   * @returns The frequency value
   * @throws {@link PhidgetError}
   */


  getMaxFrequency() {
    this._assertOpen();

    if (this.data.maxFrequency === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxFrequency;
  }
  /**
   * The frequency at which zero hertz is assumed.
   *
   * *   This means any frequency at or below the `frequencyCutoff` value will be reported as 0 Hz.
   *
   * *   This property is stored locally, so other users who have this Phidget open over a network connection won't see the effects of your selected cutoff.
   * @returns The frequency cutoff value
   * @throws {@link PhidgetError}
   */


  getFrequencyCutoff() {
    this._assertOpen();

    if (this.data.frequencyCutoff === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.frequencyCutoff;
  }
  /**
   * The minimum value that `frequencyCutoff` can be set to.
   * @returns The frequency value
   * @throws {@link PhidgetError}
   */


  getMinFrequencyCutoff() {
    this._assertOpen();

    if (this.data.minFrequencyCutoff === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minFrequencyCutoff;
  }
  /**
   * The maximum value that `frequencyCutoff` can be set to.
   * @returns The frequency value
   * @throws {@link PhidgetError}
   */


  getMaxFrequencyCutoff() {
    this._assertOpen();

    if (this.data.maxFrequencyCutoff === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxFrequencyCutoff;
  }
  /**
   * The input polarity mode for your channel.
   *
   * *   See your device's User Guide for more information about what value to chooose for the `inputMode`
   * @returns The input mode value
   * @throws {@link PhidgetError}
   */


  getInputMode() {
    this._assertOpen();

    if (this.data.inputMode === 2147483647) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.inputMode;
  }
  /**
   * The input polarity mode for your channel.
   *
   * *   See your device's User Guide for more information about what value to chooose for the `inputMode`
   * @throws {@link PhidgetError}
   * @param inputMode - The input mode value
   */


  async setInputMode(inputMode) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: inputMode
    });
    await bp.send(this._ch, 64);
  }
  /**
   * Choose the power supply voltage.
   *
   * *   Set this to the voltage specified in the attached sensor's data sheet to power it.
   *
   * *   Set to `phidget22.PowerSupply.OFF` to turn off the supply to save power.
   * @returns The power supply value
   * @throws {@link PhidgetError}
   */


  getPowerSupply() {
    this._assertOpen();

    if (this.data.powerSupply === 2147483647) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.powerSupply;
  }
  /**
   * Choose the power supply voltage.
   *
   * *   Set this to the voltage specified in the attached sensor's data sheet to power it.
   *
   * *   Set to `phidget22.PowerSupply.OFF` to turn off the supply to save power.
   * @throws {@link PhidgetError}
   * @param powerSupply - The power supply value
   */


  async setPowerSupply(powerSupply) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: powerSupply
    });
    await bp.send(this._ch, 74);
  }
  /**
   * The amount of time the frequency counter has been enabled for.
   *
   * *   This property complements `count`, the total number of pulses detected since the channel was opened, or last reset.
   * @returns The time value
   * @throws {@link PhidgetError}
   */


  getTimeElapsed() {
    this._assertOpen();

    if (this.data.timeElapsed === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.timeElapsed;
  }

}

/** @public */

class FrequencyCounter extends FrequencyCounterBase {
  /** @internal */
  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 21:
        {
          const ticks = bp.getNumber(0);
          const counts = bp.getNumber(1);
          const ticksAtLastCount = bp.getNumber(2);
          let cutoffTime;
          let precision;
          let d;
          this.data.timeElapsed += ticks;
          this.data.count += counts;

          if (counts == 0) {
            if (Number.isNaN(this.data.totalTicksSinceLastCount)) return;
            this.data.totalTicksSinceLastCount += ticks;
            cutoffTime = Math.round(1000 / this.data.frequencyCutoff);

            if (this.data.totalTicksSinceLastCount > cutoffTime) {
              this.data.frequency = 0;

              if (this._isAttachedDone && this.onCountChange) {
                try {
                  this.onCountChange(0, this.data.totalTicksSinceLastCount);
                } catch (err) {
                  logEventException(err);
                }
              }

              if (this._isAttachedDone && this.onFrequencyChange) {
                try {
                  this.onFrequencyChange(this.data.frequency);
                } catch (err) {
                  logEventException(err);
                }
              }

              this.data.totalTicksSinceLastCount = Number.NaN;
            }

            return;
          }

          if (Number.isNaN(this.data.totalTicksSinceLastCount)) {
            this.data.totalTicksSinceLastCount = ticks - ticksAtLastCount;
            return;
          }

          const countTimeSpan = this.data.totalTicksSinceLastCount + ticksAtLastCount;
          this.data.totalTicksSinceLastCount = ticks - ticksAtLastCount;
          d = this.data.frequencyCutoff;
          precision = 2;

          while (d < 1) {
            precision++;
            d *= 10;
          }

          this.data.frequency = RoundDouble(counts / (countTimeSpan / 1000.0), precision);

          if (this._isAttachedDone && this.onCountChange) {
            try {
              this.onCountChange(counts, countTimeSpan);
            } catch (err) {
              logEventException(err);
            }
          }

          if (this._isAttachedDone && this.onFrequencyChange) {
            try {
              this.onFrequencyChange(this.data.frequency);
            } catch (err) {
              logEventException(err);
            }
          }

          break;
        }

      case 56:
        if (!bp.getBoolean(0)) this.data.frequency = 1e+300;

        super._bridgeInput(bp);

        break;

      case 181:
        this.data.powerSupply = bp.entries[0].v;

        this._FIREPropertyChange('PowerSupply', bp);

        break;

      case 182:
        this.data.inputMode = bp.entries[0].v;

        this._FIREPropertyChange('InputMode', bp);

        break;

      default:
        super._bridgeInput(bp);

        break;
    }
  }

  setFrequencyCutoff(frequencyCutoff) {
    this._assertOpen();

    if (frequencyCutoff < this.data.minFrequencyCutoff || frequencyCutoff > this.data.maxFrequencyCutoff) throw new PhidgetError(ErrorCode.INVALID_ARGUMENT, "Value must be in range: " + this.data.minFrequencyCutoff + " - " + this.data.maxFrequencyCutoff + ".");
    this.data.frequencyCutoff = frequencyCutoff;
  }

  reset() {
    this._assertOpen();

    this.data.count = 0;
    this.data.timeElapsed = 0;
    this.data.frequency = 1e+300;
  }

}

class IRBase extends PhidgetChannel {
  constructor(ch) {
    super(ch);
    this.onCode = null;
    this.onLearn = null;
    this.onRawData = null;
    this._class = ChannelClass.IR;
    this.name = "IR";
    this.data = this._initData();
  }

  static get RAW_DATA_LONG_SPACE() {
    return 4294967295;
  }

  static get MAX_CODE_BIT_COUNT() {
    return 128;
  }

  static get MAX_CODE_STRING_LENGTH() {
    return 33;
  }
  /** @internal */


  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 97:
        break;

      case 98:
        break;

      case 99:
        break;

      case 32:
        {
          if (this._isAttachedDone && this.onRawData) {
            try {
              this.onRawData(bp.entries[0].v);
            } catch (err) {
              logEventException(err);
            }
          }

          break;
        }

      default:
        throw new PhidgetError(ErrorCode.INVALID_PACKET, "Unsupported bridge packet: 0x" + bp.vpkt.toString(16));
    }
  }
  /** @internal */


  _initData() {
    return {
      lastCodeInfo: null,
      lastLearnedCodeInfo: null,
      lastCodeStr: null,
      lastCodeBitCount: 0,
      lastLearnedCodeStr: null
    };
  }
  /** @internal */


  _initAfterOpen() {}
  /** @internal */


  async _setDefaults() {}
  /** @internal */


  _hasInitialState() {
    return true;
  }
  /** @internal */


  _fireInitialEvents() {}
  /**
   * Transmits a repeat of the last transmited code.
   *
   * *   Depending on the CodeInfo structure, this may be a retransmission of the code itself, or there may be a special repeat code.
   * @throws {@link PhidgetError}
   */


  async transmitRepeat() {
    this._assertOpen();

    const bp = new BridgePacket();
    await bp.send(this._ch, 99);
  }

}

/** @public */

class IR extends IRBase {
  /** @internal */
  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 33:
        if (this._isAttachedDone && this.onCode) {
          try {
            this.onCode(this.data.lastCodeStr, this.data.lastCodeBitCount, true);
          } catch (err) {
            logEventException(err);
          }
        }

        break;

      case 5:
        this.data.lastCodeStr = bp.getString(0);
        this.data.lastCodeBitCount = bp.getNumber(1);

        if (this._isAttachedDone && this.onCode) {
          try {
            this.onCode(this.data.lastCodeStr, this.data.lastCodeBitCount, bp.getBoolean(2));
          } catch (err) {
            logEventException(err);
          }
        }

        break;

      case 25:
        {
          const toggleString = String.fromCharCode(...bp.getArray("CodeInfo.toggleMask")).replace(/\u0000/g, '');
          const repeatArr = bp.getArray("CodeInfo.repeat");

          while (repeatArr[repeatArr.length - 1] === 0) repeatArr.pop();

          this.data.lastLearnedCodeStr = bp.getString("0");
          this.data.lastLearnedCodeInfo = {
            bitCount: bp.getNumber("CodeInfo.bitCount"),
            encoding: bp.getNumber("CodeInfo.encoding"),
            length: bp.getNumber("CodeInfo.length"),
            gap: bp.getNumber("CodeInfo.gap"),
            trail: bp.getNumber("CodeInfo.trail"),
            header: bp.getArray("CodeInfo.header"),
            one: bp.getArray("CodeInfo.one"),
            zero: bp.getArray("CodeInfo.zero"),
            repeat: repeatArr,
            minRepeat: bp.getNumber("CodeInfo.minRepeat"),
            dutyCycle: bp.getNumber("CodeInfo.dutyCycle"),
            carrierFrequency: bp.getNumber("CodeInfo.carrierFrequency"),
            toggleMask: toggleString
          };

          if (this._isAttachedDone && this.onLearn) {
            try {
              this.onLearn(this.data.lastLearnedCodeStr, this.data.lastLearnedCodeInfo);
            } catch (err) {
              logEventException(err);
            }
          }

          break;
        }

      default:
        super._bridgeInput(bp);

        break;
    }
  }

  async transmit(code, ci) {
    this._assertOpen();

    const codeInfo = {
      bitCount: 0,
      encoding: IRCodeEncoding.SPACE,
      length: IRCodeLength.CONSTANT,
      gap: 0,
      trail: 0,
      minRepeat: 0,
      dutyCycle: 0,
      carrierFrequency: 0,
      header: [0, 0],
      one: [0, 0],
      zero: [0, 0],
      repeat: [],
      toggleMask: ''
    };
    if (ci.bitCount !== undefined) codeInfo.bitCount = ci.bitCount;
    if (ci.encoding !== undefined) codeInfo.encoding = ci.encoding;
    if (ci.length !== undefined) codeInfo.length = ci.length;
    if (ci.gap !== undefined) codeInfo.gap = ci.gap;
    if (ci.trail !== undefined) codeInfo.trail = ci.trail;
    if (ci.minRepeat !== undefined) codeInfo.minRepeat = ci.minRepeat;
    if (ci.dutyCycle !== undefined) codeInfo.dutyCycle = ci.dutyCycle;
    if (ci.carrierFrequency !== undefined) codeInfo.carrierFrequency = ci.carrierFrequency;

    if (ci.header !== undefined) {
      if (!Array.isArray(ci.header)) throw new PhidgetError(ErrorCode.INVALID_ARGUMENT, 'invalid value - header must be Array');
      if (ci.header.length != 2) throw new PhidgetError(ErrorCode.INVALID_ARGUMENT, 'invalid value - header must have length 2');
      codeInfo.header = ci.header;
    }

    if (ci.one !== undefined) {
      if (!Array.isArray(ci.one)) throw new PhidgetError(ErrorCode.INVALID_ARGUMENT, 'invalid value - one must be Array');
      if (ci.one.length != 2) throw new PhidgetError(ErrorCode.INVALID_ARGUMENT, 'invalid value - one must have length 2');
      codeInfo.one = ci.one;
    }

    if (ci.zero !== undefined) {
      if (!Array.isArray(ci.zero)) throw new PhidgetError(ErrorCode.INVALID_ARGUMENT, 'invalid value - zero must be Array');
      if (ci.zero.length != 2) throw new PhidgetError(ErrorCode.INVALID_ARGUMENT, 'invalid value - zero must have length 2');
      codeInfo.zero = ci.zero;
    }

    const repeatArr = new Array(26).fill(0);

    if (ci.repeat !== undefined) {
      if (!Array.isArray(ci.repeat)) throw new PhidgetError(ErrorCode.INVALID_ARGUMENT, 'invalid value - repeat must be Array');
      if (ci.repeat.length > 26) throw new PhidgetError(ErrorCode.INVALID_ARGUMENT, 'invalid value - repeat must have length <= 26');

      for (let i = 0; i < ci.repeat.length; i++) repeatArr[i] = ci.repeat[i];
    }

    const toggleMaskArr = new Array(33).fill(0);

    if (ci.toggleMask !== undefined) {
      if (typeof ci.toggleMask !== 'string') throw new PhidgetError(ErrorCode.INVALID_ARGUMENT, 'invalid value - toggleMask must be a string');
      if (ci.toggleMask.length > 33) throw new PhidgetError(ErrorCode.INVALID_ARGUMENT, 'invalid value - toggleMask must have length <= 33');

      for (let i = 0; i < ci.toggleMask.length; i++) toggleMaskArr[i] = ci.toggleMask.charCodeAt(i);
    }

    const bp = new BridgePacket();
    bp.set({
      name: 'code',
      type: 's',
      value: code
    });
    bp.set({
      name: 'CodeInfo.bitCount',
      type: 'u',
      value: codeInfo.bitCount
    });
    bp.set({
      name: 'CodeInfo.encoding',
      type: 'd',
      value: codeInfo.encoding
    });
    bp.set({
      name: 'CodeInfo.length',
      type: 'd',
      value: codeInfo.length
    });
    bp.set({
      name: 'CodeInfo.gap',
      type: 'u',
      value: codeInfo.gap
    });
    bp.set({
      name: 'CodeInfo.trail',
      type: 'u',
      value: codeInfo.trail
    });
    bp.set({
      name: 'CodeInfo.header',
      type: 'U',
      value: codeInfo.header
    });
    bp.set({
      name: 'CodeInfo.one',
      type: 'U',
      value: codeInfo.one
    });
    bp.set({
      name: 'CodeInfo.zero',
      type: 'U',
      value: codeInfo.zero
    });
    bp.set({
      name: 'CodeInfo.repeat',
      type: 'U',
      value: repeatArr
    });
    bp.set({
      name: 'CodeInfo.minRepeat',
      type: 'u',
      value: codeInfo.minRepeat
    });
    bp.set({
      name: 'CodeInfo.dutyCycle',
      type: 'g',
      value: codeInfo.dutyCycle
    });
    bp.set({
      name: 'CodeInfo.carrierFrequency',
      type: 'u',
      value: codeInfo.carrierFrequency
    });
    bp.set({
      name: 'CodeInfo.toggleMask',
      type: 'R',
      value: toggleMaskArr
    });
    await bp.send(this._ch, 97);
  }

  async transmitRaw(data) {
    let carrierFrequency = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    let dutyCycle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    let gap = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: 'data',
      type: 'U',
      value: data
    });
    bp.set({
      name: 'carrierFrequency',
      type: 'u',
      value: carrierFrequency
    });
    bp.set({
      name: 'dutyCycle',
      type: 'g',
      value: dutyCycle
    });
    bp.set({
      name: 'gap',
      type: 'u',
      value: gap
    });
    await bp.send(this._ch, 98);
  }

  getLastCode() {
    this._assertOpen();

    if (this.data.lastCodeStr == undefined) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return {
      code: this.data.lastCodeStr,
      bitCount: this.data.lastCodeBitCount
    };
  }

  getLastLearnedCode() {
    this._assertOpen();

    if (this.data.lastLearnedCodeStr == undefined || this.data.lastLearnedCodeInfo == undefined) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return {
      code: this.data.lastLearnedCodeStr,
      codeInfo: this.data.lastLearnedCodeInfo
    };
  }

}

class PHSensorBase extends PhidgetChannel {
  constructor(ch) {
    super(ch);
    this.onPHChange = null;
    this._class = ChannelClass.PH_SENSOR;
    this.name = "PHSensor";
    this.data = this._initData();
  }
  /** @internal */


  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 134:
        this.data.correctionTemperature = bp.entries[0].v;

        this._FIREPropertyChange('CorrectionTemperature', bp);

        break;

      case 54:
        if (bp.entryCount > 1) this.data.dataInterval = bp.entries[1].v;else this.data.dataInterval = bp.entries[0].v;

        this._FIREPropertyChange('DataInterval', bp);

        this._FIREPropertyChange('DataRate', bp);

        break;

      case 46:
        this.data.PHChangeTrigger = bp.entries[0].v;

        this._FIREPropertyChange('PHChangeTrigger', bp);

        break;

      case 133:
        {
          this.data.PH = bp.entries[0].v;

          if (this._isAttachedDone && this.onPHChange) {
            try {
              this.onPHChange(this.data.PH);
            } catch (err) {
              logEventException(err);
            }
          }

          break;
        }

      default:
        throw new PhidgetError(ErrorCode.INVALID_PACKET, "Unsupported bridge packet: 0x" + bp.vpkt.toString(16));
    }
  }
  /** @internal */


  _initData() {
    return {
      dataInterval: 1e+300,
      maxDataInterval: 4294967295,
      minDataRate: 1e+300,
      maxDataRate: 1e+300,
      maxPH: 1e+300,
      maxPHChangeTrigger: 1e+300,
      minDataInterval: 4294967295,
      minPH: 1e+300,
      minPHChangeTrigger: 1e+300,
      PH: 1e+300,
      PHChangeTrigger: 1e+300,
      correctionTemperature: 1e+300,
      minCorrectionTemperature: 1e+300,
      maxCorrectionTemperature: 1e+300
    };
  }
  /** @internal */


  _initAfterOpen() {}
  /** @internal */


  async _setDefaults() {}
  /** @internal */


  _hasInitialState() {
    return true;
  }
  /** @internal */


  _fireInitialEvents() {}
  /**
   * Set this property to the measured temperature of the solution to correct the slope of the pH conversion for temperature.
   * @throws {@link PhidgetError}
   */


  get correctionTemperature() {
    return this.getCorrectionTemperature();
  }
  /**
   * The minimum value that `correctionTemperature` can be set to.
   * @throws {@link PhidgetError}
   */


  get minCorrectionTemperature() {
    return this.getMinCorrectionTemperature();
  }
  /**
   * The maximum value that `correctionTemperature` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxCorrectionTemperature() {
    return this.getMaxCorrectionTemperature();
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `PHChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `PHChange` events can also be affected by the `PHChangeTrigger`.
   * @throws {@link PhidgetError}
   */


  get dataInterval() {
    return this.getDataInterval();
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataInterval() {
    return this.getMinDataInterval();
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataInterval() {
    return this.getMaxDataInterval();
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */


  get dataRate() {
    return this.getDataRate();
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataRate() {
    return this.getMinDataRate();
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataRate() {
    return this.getMaxDataRate();
  }
  /**
   * The most recent pH value that the channel has reported.
   *
   * *   This value will always be between `minPH` and `maxPH`.
   * @throws {@link PhidgetError}
   */


  get PH() {
    return this.getPH();
  }
  /**
   * The minimum value the `PHChange` event will report.
   * @throws {@link PhidgetError}
   */


  get minPH() {
    return this.getMinPH();
  }
  /**
   * The maximum value the `PHChange` event will report.
   * @throws {@link PhidgetError}
   */


  get maxPH() {
    return this.getMaxPH();
  }
  /**
   * The channel will not issue a `PHChange` event until the pH value has changed by the amount specified by the `PHChangeTrigger`.
   *
   * *   Setting the `PHChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   */


  get PHChangeTrigger() {
    return this.getPHChangeTrigger();
  }
  /**
   * The minimum value that `PHChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */


  get minPHChangeTrigger() {
    return this.getMinPHChangeTrigger();
  }
  /**
   * The maximum value that `PHChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxPHChangeTrigger() {
    return this.getMaxPHChangeTrigger();
  }
  /**
   * Set this property to the measured temperature of the solution to correct the slope of the pH conversion for temperature.
   * @returns The temperature of the solution to correct the pH measurement.
   * @throws {@link PhidgetError}
   */


  getCorrectionTemperature() {
    this._assertOpen();

    if (this.data.correctionTemperature === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.correctionTemperature;
  }
  /**
   * Set this property to the measured temperature of the solution to correct the slope of the pH conversion for temperature.
   * @throws {@link PhidgetError}
   * @param correctionTemperature - The temperature of the solution to correct the pH measurement.
   */


  async setCorrectionTemperature(correctionTemperature) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: correctionTemperature
    });
    await bp.send(this._ch, 134);
  }
  /**
   * The minimum value that `correctionTemperature` can be set to.
   * @returns The minimum temperature that can be corrected for.
   * @throws {@link PhidgetError}
   */


  getMinCorrectionTemperature() {
    this._assertOpen();

    if (this.data.minCorrectionTemperature === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minCorrectionTemperature;
  }
  /**
   * The maximum value that `correctionTemperature` can be set to.
   * @returns The maximum temperature that can be corrected for.
   * @throws {@link PhidgetError}
   */


  getMaxCorrectionTemperature() {
    this._assertOpen();

    if (this.data.maxCorrectionTemperature === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxCorrectionTemperature;
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `PHChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `PHChange` events can also be affected by the `PHChangeTrigger`.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getDataInterval() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.dataInterval;
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `PHChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `PHChange` events can also be affected by the `PHChangeTrigger`.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */


  async setDataInterval(dataInterval) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: dataInterval
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getMinDataInterval() {
    this._assertOpen();

    if (this.data.minDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataInterval;
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getMaxDataInterval() {
    this._assertOpen();

    if (this.data.maxDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */


  getDataRate() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return 1000.0 / this.data.dataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */


  async setDataRate(dataRate) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: Math.round(1000.0 / dataRate)
    });
    bp.set({
      name: "1",
      type: "g",
      value: 1000.0 / dataRate
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMinDataRate() {
    this._assertOpen();

    if (this.data.minDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataRate;
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMaxDataRate() {
    this._assertOpen();

    if (this.data.maxDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataRate;
  }
  /**
   * The most recent pH value that the channel has reported.
   *
   * *   This value will always be between `minPH` and `maxPH`.
   * @returns The pH value
   * @throws {@link PhidgetError}
   */


  getPH() {
    this._assertOpen();

    if (this.data.PH === 1e+300 || Number.isNaN(this.data.PH)) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    if (this.data.PH > this.data.maxPH) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE_HIGH);
    if (this.data.PH < this.data.minPH) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE_LOW);
    return this.data.PH;
  }
  /**
   * The minimum value the `PHChange` event will report.
   * @returns The pH value
   * @throws {@link PhidgetError}
   */


  getMinPH() {
    this._assertOpen();

    if (this.data.minPH === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minPH;
  }
  /**
   * The maximum value the `PHChange` event will report.
   * @returns The pH value
   * @throws {@link PhidgetError}
   */


  getMaxPH() {
    this._assertOpen();

    if (this.data.maxPH === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxPH;
  }
  /**
   * The channel will not issue a `PHChange` event until the pH value has changed by the amount specified by the `PHChangeTrigger`.
   *
   * *   Setting the `PHChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */


  getPHChangeTrigger() {
    this._assertOpen();

    if (this.data.PHChangeTrigger === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.PHChangeTrigger;
  }
  /**
   * The channel will not issue a `PHChange` event until the pH value has changed by the amount specified by the `PHChangeTrigger`.
   *
   * *   Setting the `PHChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   * @param PHChangeTrigger - The change trigger value
   */


  async setPHChangeTrigger(PHChangeTrigger) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: PHChangeTrigger
    });
    await bp.send(this._ch, 46);
  }
  /**
   * The minimum value that `PHChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */


  getMinPHChangeTrigger() {
    this._assertOpen();

    if (this.data.minPHChangeTrigger === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minPHChangeTrigger;
  }
  /**
   * The maximum value that `PHChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */


  getMaxPHChangeTrigger() {
    this._assertOpen();

    if (this.data.maxPHChangeTrigger === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxPHChangeTrigger;
  }

}

/** @public */

class PHSensor extends PHSensorBase {}

class DCMotorBase extends PhidgetChannel {
  constructor(ch) {
    super(ch);
    this.onBrakingStrengthChange = null;
    this.onVelocityUpdate = null;
    this.onBackEMFChange = null;
    this._class = ChannelClass.DC_MOTOR;
    this.name = "DCMotor";
    this.data = this._initData();
  }
  /** @internal */


  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 40:
        this.data.acceleration = bp.entries[0].v;

        this._FIREPropertyChange('Acceleration', bp);

        break;

      case 42:
        this.data.backEMFSensingState = bp.entries[0].v;

        this._FIREPropertyChange('BackEMFSensingState', bp);

        break;

      case 51:
        this.data.currentLimit = bp.entries[0].v;

        this._FIREPropertyChange('CurrentLimit', bp);

        break;

      case 119:
        this.data.currentRegulatorGain = bp.entries[0].v;

        this._FIREPropertyChange('CurrentRegulatorGain', bp);

        break;

      case 54:
        if (bp.entryCount > 1) this.data.dataInterval = bp.entries[1].v;else this.data.dataInterval = bp.entries[0].v;

        this._FIREPropertyChange('DataInterval', bp);

        this._FIREPropertyChange('DataRate', bp);

        break;

      case 146:
        break;

      case 58:
        this.data.fanMode = bp.entries[0].v;

        this._FIREPropertyChange('FanMode', bp);

        break;

      case 147:
        break;

      case 44:
        this.data.targetBrakingStrength = bp.entries[0].v;

        this._FIREPropertyChange('TargetBrakingStrength', bp);

        break;

      case 55:
        this.data.targetVelocity = bp.entries[0].v;

        this._FIREPropertyChange('TargetVelocity', bp);

        break;

      case 3:
        {
          this.data.backEMF = bp.entries[0].v;

          if (this._isAttachedDone && this.onBackEMFChange) {
            try {
              this.onBackEMFChange(this.data.backEMF);
            } catch (err) {
              logEventException(err);
            }
          }

          break;
        }

      case 121:
        {
          this.data.brakingStrength = bp.entries[0].v;

          if (this._isAttachedDone && this.onBrakingStrengthChange) {
            try {
              this.onBrakingStrengthChange(this.data.brakingStrength);
            } catch (err) {
              logEventException(err);
            }
          }

          break;
        }

      case 16:
        {
          this.data.velocity = bp.entries[0].v;

          if (this._isAttachedDone && this.onVelocityUpdate) {
            try {
              this.onVelocityUpdate(this.data.velocity);
            } catch (err) {
              logEventException(err);
            }
          }

          break;
        }

      default:
        throw new PhidgetError(ErrorCode.INVALID_PACKET, "Unsupported bridge packet: 0x" + bp.vpkt.toString(16));
    }
  }
  /** @internal */


  _initData() {
    return {
      dataInterval: 1e+300,
      minDataInterval: 4294967295,
      maxDataInterval: 4294967295,
      minDataRate: 1e+300,
      maxDataRate: 1e+300,
      currentLimit: 1e+300,
      maxCurrentLimit: 1e+300,
      minCurrentLimit: 1e+300,
      currentRegulatorGain: 1e+300,
      maxCurrentRegulatorGain: 1e+300,
      minCurrentRegulatorGain: 1e+300,
      targetVelocity: 1e+300,
      maxVelocity: 1e+300,
      minVelocity: 1e+300,
      maxAcceleration: 1e+300,
      minAcceleration: 1e+300,
      acceleration: 1e+300,
      targetBrakingStrength: 1e+300,
      maxBrakingStrength: 1e+300,
      minBrakingStrength: 1e+300,
      backEMFSensingState: 2,
      backEMF: 1e+300,
      fanMode: 2147483647,
      velocity: 1e+300,
      brakingStrength: 1e+300,
      maxFailsafeTime: 4294967295,
      minFailsafeTime: 4294967295
    };
  }
  /** @internal */


  _initAfterOpen() {}
  /** @internal */


  async _setDefaults() {}
  /** @internal */


  _hasInitialState() {
    return true;
  }
  /** @internal */


  _fireInitialEvents() {}
  /**
   * The rate at which the controller can change the motor's `velocity`.
   *
   * *   The acceleration is bounded by `minAcceleration` and `maxAcceleration`
   * @throws {@link PhidgetError}
   */


  get acceleration() {
    return this.getAcceleration();
  }
  /**
   * The minimum value that `acceleration` can be set to.
   * @throws {@link PhidgetError}
   */


  get minAcceleration() {
    return this.getMinAcceleration();
  }
  /**
   * The maximum value that `acceleration` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxAcceleration() {
    return this.getMaxAcceleration();
  }
  /**
   * The most recent `backEMF` value that the controller has reported.
   * @throws {@link PhidgetError}
   */


  get backEMF() {
    return this.getBackEMF();
  }
  /**
   * When `backEMFSensingState` is enabled, the controller will measure and report the `backEMF`.
   *
   * *   The motor will coast (freewheel) 5% of the time while the back EMF is being measured (800μs every 16ms). Therefore, at a `velocity` of 100%, the motor will only be driven for 95% of the time.
   * @throws {@link PhidgetError}
   */


  get backEMFSensingState() {
    return this.getBackEMFSensingState();
  }
  /**
   * The most recent braking strength value that the controller has reported. See `targetBrakingStrength` for details.
   * @throws {@link PhidgetError}
   */


  get brakingStrength() {
    return this.getBrakingStrength();
  }
  /**
   * The minimum value that `targetBrakingStrength` can be set to. See `targetBrakingStrength` for details.
   * @throws {@link PhidgetError}
   */


  get minBrakingStrength() {
    return this.getMinBrakingStrength();
  }
  /**
   * The maximum value that `targetBrakingStrength` can be set to. See `targetBrakingStrength` for details.
   * @throws {@link PhidgetError}
   */


  get maxBrakingStrength() {
    return this.getMaxBrakingStrength();
  }
  /**
   * The controller will limit the current through the motor to the `currentLimit` value.
   * @throws {@link PhidgetError}
   */


  get currentLimit() {
    return this.getCurrentLimit();
  }
  /**
   * The minimum value that `currentLimit` can be set to.
   * @throws {@link PhidgetError}
   */


  get minCurrentLimit() {
    return this.getMinCurrentLimit();
  }
  /**
   * The maximum value that `currentLimit` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxCurrentLimit() {
    return this.getMaxCurrentLimit();
  }
  /**
   * Depending on power supply voltage and motor coil inductance, current through the motor can change relatively slowly or extremely rapidly. A physically larger DC Motor will typically have a lower inductance, requiring a higher current regulator gain. A higher power supply voltage will result in motor current changing more rapidly, requiring a higher current regulator gain. If the current regulator gain is too small, spikes in current will occur, causing large variations in torque, and possibly damaging the motor controller. If the current regulator gain is too high, the current will jitter, causing the motor to sound 'rough', especially when changing directions.
   *
   * As a rule of thumb, we recommend setting this value as follows:
   *
   * CurrentRegulatorGain = CurrentLimit \* (Voltage / 12)
   * @throws {@link PhidgetError}
   */


  get currentRegulatorGain() {
    return this.getCurrentRegulatorGain();
  }
  /**
   * The minimum value that `currentRegulatorGain` can be set to.
   * @throws {@link PhidgetError}
   */


  get minCurrentRegulatorGain() {
    return this.getMinCurrentRegulatorGain();
  }
  /**
   * The maximum value that `currentRegulatorGain` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxCurrentRegulatorGain() {
    return this.getMaxCurrentRegulatorGain();
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `VelocityUpdate` / `BrakingStrengthChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   *
   * *   Note: `BrakingStrengthChange` events will only fire if a change in braking has occurred.
   * @throws {@link PhidgetError}
   */


  get dataInterval() {
    return this.getDataInterval();
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataInterval() {
    return this.getMinDataInterval();
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataInterval() {
    return this.getMaxDataInterval();
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */


  get dataRate() {
    return this.getDataRate();
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataRate() {
    return this.getMinDataRate();
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataRate() {
    return this.getMaxDataRate();
  }
  /**
   * The minimum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @throws {@link PhidgetError}
   */


  get minFailsafeTime() {
    return this.getMinFailsafeTime();
  }
  /**
   * The maximum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @throws {@link PhidgetError}
   */


  get maxFailsafeTime() {
    return this.getMaxFailsafeTime();
  }
  /**
   * The `fanMode` dictates the operating condition of the fan.
   *
   * *   Choose between on, off, or automatic (based on temperature).
   * *   If the `fanMode` is set to automatic, the fan will turn on when the temperature reaches 70°C and it will remain on until the temperature falls below 55°C.
   * *   If the `fanMode` is off, the controller will still turn on the fan if the temperature reaches 85°C and it will remain on until it falls below 70°C.
   * @throws {@link PhidgetError}
   */


  get fanMode() {
    return this.getFanMode();
  }
  /**
   * This setting allows you to choose how hard the motor will resist being turned when it is not being driven forward or reverse (`velocity` = 0). The `targetBrakingStrength` sets the relative amount of electrical braking to be applied to the DC motor, with `minBrakingStrength` corresponding to no braking (free-wheeling), and `maxBrakingStrength` indicating full braking.
   *
   * *   A low `targetBrakingStrength` value corresponds to free-wheeling. This means:
   *     *   The motor will continue to rotate after the controller is no longer driving the motor (`velocity` = 0), due to its momentum.
   *     *   The motor shaft will provide little resistance to being turned when it is stopped.
   * *   As `targetBrakingStrength` increases, this will engage electrical braking of the DC motor. This means:
   *     *   The motor will stop more quickly if it is in motion when braking is requested.
   *     *   The motor shaft will resist rotation by outside forces.
   * *   Braking will be added gradually, according to the `acceleration` setting, once the motor controller's `velocity` reaches 0.0
   * *   Braking will be immediately stopped when a new (non-zero) `targetVelocity` is set, and the motor will accelerate to the requested velocity.
   * *   Braking mode is enabled by setting the `velocity` to 0.0
   * @throws {@link PhidgetError}
   */


  get targetBrakingStrength() {
    return this.getTargetBrakingStrength();
  }
  /**
   * The average voltage across the motor is based on the `targetVelocity` value.
   *
   * *   At a constant load, increasing the target velocity will increase the speed of the motor.
   * *   `targetVelocity` is bounded by -`maxVelocity` and +`maxVelocity`, where a sign change (±) is indicitave of a direction change.
   * *   Setting `targetVelocity` to `minVelocity` will stop the motor. See `targetBrakingStrength` for more information on stopping the motor.
   * *   The units of `targetVelocity` and `acceleration` refer to 'duty cycle'. This is because the controller controls velocity by rapidly switching the power on/off (i.e. changing the duty cycle) in order to manipulate the voltage across the motor.
   * @throws {@link PhidgetError}
   */


  get targetVelocity() {
    return this.getTargetVelocity();
  }
  /**
   * The most recent velocity value that the controller has reported.
   * @throws {@link PhidgetError}
   */


  get velocity() {
    return this.getVelocity();
  }
  /**
   * The minimum value that `targetVelocity` can be set to.
   *
   * *   Set the `targetVelocity` to `minVelocity` to stop the motor. See `targetBrakingStrength` for more information on stopping the motor.
   * *   `targetVelocity` is bounded by -`maxVelocity` and +`maxVelocity`, where a sign change (±) is indicitave of a direction change.
   * @throws {@link PhidgetError}
   */


  get minVelocity() {
    return this.getMinVelocity();
  }
  /**
   * The maximum value that `targetVelocity` can be set to.
   *
   * *   `targetVelocity` is bounded by -`maxVelocity` and +`maxVelocity`, where a sign change (±) is indicitave of a direction change.
   * @throws {@link PhidgetError}
   */


  get maxVelocity() {
    return this.getMaxVelocity();
  }
  /**
   * The rate at which the controller can change the motor's `velocity`.
   *
   * *   The acceleration is bounded by `minAcceleration` and `maxAcceleration`
   * @returns The acceleration value
   * @throws {@link PhidgetError}
   */


  getAcceleration() {
    this._assertOpen();

    if (this.data.acceleration === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.acceleration;
  }
  /**
   * The rate at which the controller can change the motor's `velocity`.
   *
   * *   The acceleration is bounded by `minAcceleration` and `maxAcceleration`
   * @throws {@link PhidgetError}
   * @param acceleration - The acceleration value
   */


  async setAcceleration(acceleration) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: acceleration
    });
    await bp.send(this._ch, 40);
  }
  /**
   * The minimum value that `acceleration` can be set to.
   * @returns The acceleration value.
   * @throws {@link PhidgetError}
   */


  getMinAcceleration() {
    this._assertOpen();

    if (this.data.minAcceleration === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minAcceleration;
  }
  /**
   * The maximum value that `acceleration` can be set to.
   * @returns The acceleration value.
   * @throws {@link PhidgetError}
   */


  getMaxAcceleration() {
    this._assertOpen();

    if (this.data.maxAcceleration === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxAcceleration;
  }
  /**
   * The most recent `backEMF` value that the controller has reported.
   * @returns The back EMF value
   * @throws {@link PhidgetError}
   */


  getBackEMF() {
    this._assertOpen();

    if (this.data.backEMF === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.backEMF;
  }
  /**
   * When `backEMFSensingState` is enabled, the controller will measure and report the `backEMF`.
   *
   * *   The motor will coast (freewheel) 5% of the time while the back EMF is being measured (800μs every 16ms). Therefore, at a `velocity` of 100%, the motor will only be driven for 95% of the time.
   * @returns The back EMF state
   * @throws {@link PhidgetError}
   */


  getBackEMFSensingState() {
    this._assertOpen();

    if (this.data.backEMFSensingState === 2) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return !!this.data.backEMFSensingState;
  }
  /**
   * When `backEMFSensingState` is enabled, the controller will measure and report the `backEMF`.
   *
   * *   The motor will coast (freewheel) 5% of the time while the back EMF is being measured (800μs every 16ms). Therefore, at a `velocity` of 100%, the motor will only be driven for 95% of the time.
   * @throws {@link PhidgetError}
   * @param backEMFSensingState - The back EMF state
   */


  async setBackEMFSensingState(backEMFSensingState) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: backEMFSensingState ? 1 : 0
    });
    await bp.send(this._ch, 42);
  }
  /**
   * The most recent braking strength value that the controller has reported. See `targetBrakingStrength` for details.
   * @returns The braking strength value
   * @throws {@link PhidgetError}
   */


  getBrakingStrength() {
    this._assertOpen();

    if (this.data.brakingStrength === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.brakingStrength;
  }
  /**
   * The minimum value that `targetBrakingStrength` can be set to. See `targetBrakingStrength` for details.
   * @returns The braking strength value
   * @throws {@link PhidgetError}
   */


  getMinBrakingStrength() {
    this._assertOpen();

    if (this.data.minBrakingStrength === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minBrakingStrength;
  }
  /**
   * The maximum value that `targetBrakingStrength` can be set to. See `targetBrakingStrength` for details.
   * @returns The braking strength value
   * @throws {@link PhidgetError}
   */


  getMaxBrakingStrength() {
    this._assertOpen();

    if (this.data.maxBrakingStrength === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxBrakingStrength;
  }
  /**
   * The controller will limit the current through the motor to the `currentLimit` value.
   * @returns The current value
   * @throws {@link PhidgetError}
   */


  getCurrentLimit() {
    this._assertOpen();

    if (this.data.currentLimit === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.currentLimit;
  }
  /**
   * The controller will limit the current through the motor to the `currentLimit` value.
   * @throws {@link PhidgetError}
   * @param currentLimit - The current value
   */


  async setCurrentLimit(currentLimit) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: currentLimit
    });
    await bp.send(this._ch, 51);
  }
  /**
   * The minimum value that `currentLimit` can be set to.
   * @returns The current value
   * @throws {@link PhidgetError}
   */


  getMinCurrentLimit() {
    this._assertOpen();

    if (this.data.minCurrentLimit === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minCurrentLimit;
  }
  /**
   * The maximum value that `currentLimit` can be set to.
   * @returns The current value
   * @throws {@link PhidgetError}
   */


  getMaxCurrentLimit() {
    this._assertOpen();

    if (this.data.maxCurrentLimit === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxCurrentLimit;
  }
  /**
   * Depending on power supply voltage and motor coil inductance, current through the motor can change relatively slowly or extremely rapidly. A physically larger DC Motor will typically have a lower inductance, requiring a higher current regulator gain. A higher power supply voltage will result in motor current changing more rapidly, requiring a higher current regulator gain. If the current regulator gain is too small, spikes in current will occur, causing large variations in torque, and possibly damaging the motor controller. If the current regulator gain is too high, the current will jitter, causing the motor to sound 'rough', especially when changing directions.
   *
   * As a rule of thumb, we recommend setting this value as follows:
   *
   * CurrentRegulatorGain = CurrentLimit \* (Voltage / 12)
   * @returns The current regulator gain value
   * @throws {@link PhidgetError}
   */


  getCurrentRegulatorGain() {
    this._assertOpen();

    if (this.data.currentRegulatorGain === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.currentRegulatorGain;
  }
  /**
   * Depending on power supply voltage and motor coil inductance, current through the motor can change relatively slowly or extremely rapidly. A physically larger DC Motor will typically have a lower inductance, requiring a higher current regulator gain. A higher power supply voltage will result in motor current changing more rapidly, requiring a higher current regulator gain. If the current regulator gain is too small, spikes in current will occur, causing large variations in torque, and possibly damaging the motor controller. If the current regulator gain is too high, the current will jitter, causing the motor to sound 'rough', especially when changing directions.
   *
   * As a rule of thumb, we recommend setting this value as follows:
   *
   * CurrentRegulatorGain = CurrentLimit \* (Voltage / 12)
   * @throws {@link PhidgetError}
   * @param currentRegulatorGain - The current regulator gain value
   */


  async setCurrentRegulatorGain(currentRegulatorGain) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: currentRegulatorGain
    });
    await bp.send(this._ch, 119);
  }
  /**
   * The minimum value that `currentRegulatorGain` can be set to.
   * @returns The current regulator gain value
   * @throws {@link PhidgetError}
   */


  getMinCurrentRegulatorGain() {
    this._assertOpen();

    if (this.data.minCurrentRegulatorGain === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minCurrentRegulatorGain;
  }
  /**
   * The maximum value that `currentRegulatorGain` can be set to.
   * @returns The current regulator gain value
   * @throws {@link PhidgetError}
   */


  getMaxCurrentRegulatorGain() {
    this._assertOpen();

    if (this.data.maxCurrentRegulatorGain === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxCurrentRegulatorGain;
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `VelocityUpdate` / `BrakingStrengthChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   *
   * *   Note: `BrakingStrengthChange` events will only fire if a change in braking has occurred.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getDataInterval() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.dataInterval;
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `VelocityUpdate` / `BrakingStrengthChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   *
   * *   Note: `BrakingStrengthChange` events will only fire if a change in braking has occurred.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */


  async setDataInterval(dataInterval) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: dataInterval
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getMinDataInterval() {
    this._assertOpen();

    if (this.data.minDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataInterval;
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getMaxDataInterval() {
    this._assertOpen();

    if (this.data.maxDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */


  getDataRate() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return 1000.0 / this.data.dataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */


  async setDataRate(dataRate) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: Math.round(1000.0 / dataRate)
    });
    bp.set({
      name: "1",
      type: "g",
      value: 1000.0 / dataRate
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMinDataRate() {
    this._assertOpen();

    if (this.data.minDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataRate;
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMaxDataRate() {
    this._assertOpen();

    if (this.data.maxDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataRate;
  }
  /**
   * Enables the **failsafe** feature for the channel, with a given **failsafe time**.
   *
   * The **failsafe** feature is intended for use in applications where it is important for the channel to enter a known _safe state_ if the program controlling it locks up or crashes. If you do not enable the failsafe feature, the channel will carry out whatever instructions it was last given until it is explicitly told to stop.
   *
   * Enabling the failsafe feature starts a recurring **failsafe timer** for the channel. Once the failsafe timer is enabled, it must be reset within the specified time or the channel will enter a **failsafe state**. The failsafe timer may be reset by sending any valid command to the device\*. Resetting the failsafe timer will reload the timer with the specified _failsafe time_, starting when the message to reset the timer is received by the Phidget.
   *
   * _\*(**get** requests do not typically send commands and won't reset the failsafe timer)_
   *
   * For example: if the failsafe is enabled with a **failsafe time** of 1000ms, you will have 1000ms to reset the failsafe timer. Every time the failsafe timer is reset, you will have 1000ms from that time to reset the failsafe again.
   *
   * If the failsafe timer is not reset before it runs out, the channel will enter a **failsafe state**. For DC Motor channels, this will disengage the motor. Once the channel enters the **failsafe state**, it will reject any further input until the channel is reopened.
   *
   * To prevent the channel from falsely entering the failsafe state, we recommend resetting the failsafe timer as frequently as is practical for your application. A good rule of thumb is to not let more than a third of the failsafe time pass before resetting the timer.
   *
   * Once the failsafe timer has been set, it cannot be disabled by any means other than closing and reopening the channel.
   * @throws {@link PhidgetError}
   * @param failsafeTime - Failsafe timeout in milliseconds
   */


  async enableFailsafe(failsafeTime) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: failsafeTime
    });
    await bp.send(this._ch, 146);
  }
  /**
   * The minimum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @returns The failsafe time
   * @throws {@link PhidgetError}
   */


  getMinFailsafeTime() {
    this._assertOpen();

    if (this.data.minFailsafeTime === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minFailsafeTime;
  }
  /**
   * The maximum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @returns The failsafe time
   * @throws {@link PhidgetError}
   */


  getMaxFailsafeTime() {
    this._assertOpen();

    if (this.data.maxFailsafeTime === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxFailsafeTime;
  }
  /**
   * The `fanMode` dictates the operating condition of the fan.
   *
   * *   Choose between on, off, or automatic (based on temperature).
   * *   If the `fanMode` is set to automatic, the fan will turn on when the temperature reaches 70°C and it will remain on until the temperature falls below 55°C.
   * *   If the `fanMode` is off, the controller will still turn on the fan if the temperature reaches 85°C and it will remain on until it falls below 70°C.
   * @returns The fan mode
   * @throws {@link PhidgetError}
   */


  getFanMode() {
    this._assertOpen();

    if (this.data.fanMode === 2147483647) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.fanMode;
  }
  /**
   * The `fanMode` dictates the operating condition of the fan.
   *
   * *   Choose between on, off, or automatic (based on temperature).
   * *   If the `fanMode` is set to automatic, the fan will turn on when the temperature reaches 70°C and it will remain on until the temperature falls below 55°C.
   * *   If the `fanMode` is off, the controller will still turn on the fan if the temperature reaches 85°C and it will remain on until it falls below 70°C.
   * @throws {@link PhidgetError}
   * @param fanMode - The fan mode
   */


  async setFanMode(fanMode) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: fanMode
    });
    await bp.send(this._ch, 58);
  }
  /**
   * Resets the failsafe timer, if one has been set. See `enableFailsafe()` for details.
   *
   * This function will fail if no failsafe timer has been set for the channel.
   * @throws {@link PhidgetError}
   */


  async resetFailsafe() {
    this._assertOpen();

    const bp = new BridgePacket();
    await bp.send(this._ch, 147);
  }
  /**
   * This setting allows you to choose how hard the motor will resist being turned when it is not being driven forward or reverse (`velocity` = 0). The `targetBrakingStrength` sets the relative amount of electrical braking to be applied to the DC motor, with `minBrakingStrength` corresponding to no braking (free-wheeling), and `maxBrakingStrength` indicating full braking.
   *
   * *   A low `targetBrakingStrength` value corresponds to free-wheeling. This means:
   *     *   The motor will continue to rotate after the controller is no longer driving the motor (`velocity` = 0), due to its momentum.
   *     *   The motor shaft will provide little resistance to being turned when it is stopped.
   * *   As `targetBrakingStrength` increases, this will engage electrical braking of the DC motor. This means:
   *     *   The motor will stop more quickly if it is in motion when braking is requested.
   *     *   The motor shaft will resist rotation by outside forces.
   * *   Braking will be added gradually, according to the `acceleration` setting, once the motor controller's `velocity` reaches 0.0
   * *   Braking will be immediately stopped when a new (non-zero) `targetVelocity` is set, and the motor will accelerate to the requested velocity.
   * *   Braking mode is enabled by setting the `velocity` to 0.0
   * @returns The braking strength value
   * @throws {@link PhidgetError}
   */


  getTargetBrakingStrength() {
    this._assertOpen();

    if (this.data.targetBrakingStrength === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.targetBrakingStrength;
  }
  /**
   * This setting allows you to choose how hard the motor will resist being turned when it is not being driven forward or reverse (`velocity` = 0). The `targetBrakingStrength` sets the relative amount of electrical braking to be applied to the DC motor, with `minBrakingStrength` corresponding to no braking (free-wheeling), and `maxBrakingStrength` indicating full braking.
   *
   * *   A low `targetBrakingStrength` value corresponds to free-wheeling. This means:
   *     *   The motor will continue to rotate after the controller is no longer driving the motor (`velocity` = 0), due to its momentum.
   *     *   The motor shaft will provide little resistance to being turned when it is stopped.
   * *   As `targetBrakingStrength` increases, this will engage electrical braking of the DC motor. This means:
   *     *   The motor will stop more quickly if it is in motion when braking is requested.
   *     *   The motor shaft will resist rotation by outside forces.
   * *   Braking will be added gradually, according to the `acceleration` setting, once the motor controller's `velocity` reaches 0.0
   * *   Braking will be immediately stopped when a new (non-zero) `targetVelocity` is set, and the motor will accelerate to the requested velocity.
   * *   Braking mode is enabled by setting the `velocity` to 0.0
   * @throws {@link PhidgetError}
   * @param targetBrakingStrength - The braking strength value
   */


  async setTargetBrakingStrength(targetBrakingStrength) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: targetBrakingStrength
    });
    await bp.send(this._ch, 44);
  }
  /**
   * The average voltage across the motor is based on the `targetVelocity` value.
   *
   * *   At a constant load, increasing the target velocity will increase the speed of the motor.
   * *   `targetVelocity` is bounded by -`maxVelocity` and +`maxVelocity`, where a sign change (±) is indicitave of a direction change.
   * *   Setting `targetVelocity` to `minVelocity` will stop the motor. See `targetBrakingStrength` for more information on stopping the motor.
   * *   The units of `targetVelocity` and `acceleration` refer to 'duty cycle'. This is because the controller controls velocity by rapidly switching the power on/off (i.e. changing the duty cycle) in order to manipulate the voltage across the motor.
   * @returns The velocity value
   * @throws {@link PhidgetError}
   */


  getTargetVelocity() {
    this._assertOpen();

    if (this.data.targetVelocity === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.targetVelocity;
  }
  /**
   * The average voltage across the motor is based on the `targetVelocity` value.
   *
   * *   At a constant load, increasing the target velocity will increase the speed of the motor.
   * *   `targetVelocity` is bounded by -`maxVelocity` and +`maxVelocity`, where a sign change (±) is indicitave of a direction change.
   * *   Setting `targetVelocity` to `minVelocity` will stop the motor. See `targetBrakingStrength` for more information on stopping the motor.
   * *   The units of `targetVelocity` and `acceleration` refer to 'duty cycle'. This is because the controller controls velocity by rapidly switching the power on/off (i.e. changing the duty cycle) in order to manipulate the voltage across the motor.
   * @throws {@link PhidgetError}
   * @param targetVelocity - The velocity value
   */


  async setTargetVelocity(targetVelocity) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: targetVelocity
    });
    await bp.send(this._ch, 55);
  }
  /**
   * The most recent velocity value that the controller has reported.
   * @returns The velocity value
   * @throws {@link PhidgetError}
   */


  getVelocity() {
    this._assertOpen();

    if (this.data.velocity === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.velocity;
  }
  /**
   * The minimum value that `targetVelocity` can be set to.
   *
   * *   Set the `targetVelocity` to `minVelocity` to stop the motor. See `targetBrakingStrength` for more information on stopping the motor.
   * *   `targetVelocity` is bounded by -`maxVelocity` and +`maxVelocity`, where a sign change (±) is indicitave of a direction change.
   * @returns The velocity value
   * @throws {@link PhidgetError}
   */


  getMinVelocity() {
    this._assertOpen();

    if (this.data.minVelocity === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minVelocity;
  }
  /**
   * The maximum value that `targetVelocity` can be set to.
   *
   * *   `targetVelocity` is bounded by -`maxVelocity` and +`maxVelocity`, where a sign change (±) is indicitave of a direction change.
   * @returns The velocity value
   * @throws {@link PhidgetError}
   */


  getMaxVelocity() {
    this._assertOpen();

    if (this.data.maxVelocity === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxVelocity;
  }

}

/** @public */

class DCMotor extends DCMotorBase {}

class CurrentInputBase extends PhidgetChannel {
  constructor(ch) {
    super(ch);
    this.onCurrentChange = null;
    this._class = ChannelClass.CURRENT_INPUT;
    this.name = "CurrentInput";
    this.data = this._initData();
  }
  /** @internal */


  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 46:
        this.data.currentChangeTrigger = bp.entries[0].v;

        this._FIREPropertyChange('CurrentChangeTrigger', bp);

        break;

      case 54:
        if (bp.entryCount > 1) this.data.dataInterval = bp.entries[1].v;else this.data.dataInterval = bp.entries[0].v;

        this._FIREPropertyChange('DataInterval', bp);

        this._FIREPropertyChange('DataRate', bp);

        break;

      case 74:
        this.data.powerSupply = bp.entries[0].v;

        this._FIREPropertyChange('PowerSupply', bp);

        break;

      case 8:
        {
          this.data.current = bp.entries[0].v;

          if (this._isAttachedDone && this.onCurrentChange) {
            try {
              this.onCurrentChange(this.data.current);
            } catch (err) {
              logEventException(err);
            }
          }

          break;
        }

      default:
        throw new PhidgetError(ErrorCode.INVALID_PACKET, "Unsupported bridge packet: 0x" + bp.vpkt.toString(16));
    }
  }
  /** @internal */


  _initData() {
    return {
      dataInterval: 1e+300,
      minDataInterval: 4294967295,
      maxDataInterval: 4294967295,
      minDataRate: 1e+300,
      maxDataRate: 1e+300,
      maxCurrent: 1e+300,
      maxCurrentChangeTrigger: 1e+300,
      minCurrent: 1e+300,
      minCurrentChangeTrigger: 1e+300,
      current: 1e+300,
      currentChangeTrigger: 1e+300,
      powerSupply: 2147483647
    };
  }
  /** @internal */


  _initAfterOpen() {}
  /** @internal */


  async _setDefaults() {}
  /** @internal */


  _hasInitialState() {
    return true;
  }
  /** @internal */


  _fireInitialEvents() {}
  /**
   * The most recent current value that the channel has reported.
   *
   * *   This value will always be between `minCurrent` and `maxCurrent`.
   * @throws {@link PhidgetError}
   */


  get current() {
    return this.getCurrent();
  }
  /**
   * The minimum value the `CurrentChange` event will report.
   * @throws {@link PhidgetError}
   */


  get minCurrent() {
    return this.getMinCurrent();
  }
  /**
   * The maximum value the `CurrentChange` event will report.
   * @throws {@link PhidgetError}
   */


  get maxCurrent() {
    return this.getMaxCurrent();
  }
  /**
   * The channel will not issue a `CurrentChange` event until the current value has changed by the amount specified by the `currentChangeTrigger`.
   *
   * *   Setting the `currentChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   */


  get currentChangeTrigger() {
    return this.getCurrentChangeTrigger();
  }
  /**
   * The minimum value that `currentChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */


  get minCurrentChangeTrigger() {
    return this.getMinCurrentChangeTrigger();
  }
  /**
   * The maximum value that `currentChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxCurrentChangeTrigger() {
    return this.getMaxCurrentChangeTrigger();
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `CurrentChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `CurrentChange` events can also be affected by the `currentChangeTrigger`.
   * @throws {@link PhidgetError}
   */


  get dataInterval() {
    return this.getDataInterval();
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataInterval() {
    return this.getMinDataInterval();
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataInterval() {
    return this.getMaxDataInterval();
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */


  get dataRate() {
    return this.getDataRate();
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataRate() {
    return this.getMinDataRate();
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataRate() {
    return this.getMaxDataRate();
  }
  /**
   * Choose the power supply voltage.
   *
   * *   Set this to the voltage specified in the attached sensor's data sheet to power it.
   *
   * *   Set to `phidget22.PowerSupply.OFF` to turn off the supply to save power.
   * @throws {@link PhidgetError}
   */


  get powerSupply() {
    return this.getPowerSupply();
  }
  /**
   * The most recent current value that the channel has reported.
   *
   * *   This value will always be between `minCurrent` and `maxCurrent`.
   * @returns The current value
   * @throws {@link PhidgetError}
   */


  getCurrent() {
    this._assertOpen();

    if (this.data.current === 1e+300 || Number.isNaN(this.data.current)) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    if (this.data.current > this.data.maxCurrent) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE_HIGH);
    if (this.data.current < this.data.minCurrent) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE_LOW);
    return this.data.current;
  }
  /**
   * The minimum value the `CurrentChange` event will report.
   * @returns The current value
   * @throws {@link PhidgetError}
   */


  getMinCurrent() {
    this._assertOpen();

    if (this.data.minCurrent === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minCurrent;
  }
  /**
   * The maximum value the `CurrentChange` event will report.
   * @returns The current value
   * @throws {@link PhidgetError}
   */


  getMaxCurrent() {
    this._assertOpen();

    if (this.data.maxCurrent === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxCurrent;
  }
  /**
   * The channel will not issue a `CurrentChange` event until the current value has changed by the amount specified by the `currentChangeTrigger`.
   *
   * *   Setting the `currentChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */


  getCurrentChangeTrigger() {
    this._assertOpen();

    if (this.data.currentChangeTrigger === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.currentChangeTrigger;
  }
  /**
   * The channel will not issue a `CurrentChange` event until the current value has changed by the amount specified by the `currentChangeTrigger`.
   *
   * *   Setting the `currentChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   * @param currentChangeTrigger - The change trigger value
   */


  async setCurrentChangeTrigger(currentChangeTrigger) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: currentChangeTrigger
    });
    await bp.send(this._ch, 46);
  }
  /**
   * The minimum value that `currentChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */


  getMinCurrentChangeTrigger() {
    this._assertOpen();

    if (this.data.minCurrentChangeTrigger === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minCurrentChangeTrigger;
  }
  /**
   * The maximum value that `currentChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */


  getMaxCurrentChangeTrigger() {
    this._assertOpen();

    if (this.data.maxCurrentChangeTrigger === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxCurrentChangeTrigger;
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `CurrentChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `CurrentChange` events can also be affected by the `currentChangeTrigger`.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getDataInterval() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.dataInterval;
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `CurrentChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `CurrentChange` events can also be affected by the `currentChangeTrigger`.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */


  async setDataInterval(dataInterval) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: dataInterval
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getMinDataInterval() {
    this._assertOpen();

    if (this.data.minDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataInterval;
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getMaxDataInterval() {
    this._assertOpen();

    if (this.data.maxDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */


  getDataRate() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return 1000.0 / this.data.dataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */


  async setDataRate(dataRate) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: Math.round(1000.0 / dataRate)
    });
    bp.set({
      name: "1",
      type: "g",
      value: 1000.0 / dataRate
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMinDataRate() {
    this._assertOpen();

    if (this.data.minDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataRate;
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMaxDataRate() {
    this._assertOpen();

    if (this.data.maxDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataRate;
  }
  /**
   * Choose the power supply voltage.
   *
   * *   Set this to the voltage specified in the attached sensor's data sheet to power it.
   *
   * *   Set to `phidget22.PowerSupply.OFF` to turn off the supply to save power.
   * @returns The power supply value
   * @throws {@link PhidgetError}
   */


  getPowerSupply() {
    this._assertOpen();

    if (this.data.powerSupply === 2147483647) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.powerSupply;
  }
  /**
   * Choose the power supply voltage.
   *
   * *   Set this to the voltage specified in the attached sensor's data sheet to power it.
   *
   * *   Set to `phidget22.PowerSupply.OFF` to turn off the supply to save power.
   * @throws {@link PhidgetError}
   * @param powerSupply - The power supply value
   */


  async setPowerSupply(powerSupply) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: powerSupply
    });
    await bp.send(this._ch, 74);
  }

}

/** @public */

class CurrentInput extends CurrentInputBase {
  /** @internal */
  _errorHandler(code) {
    switch (code) {
      case ErrorEventCode.SATURATION:
        this.data.current = 1e+300;
        this._gotCurrentChangeErrorEvent = true;
        break;
    }
  }
  /** @internal */


  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 181:
        this.data.powerSupply = bp.entries[0].v;

        this._FIREPropertyChange('PowerSupply', bp);

        break;

      default:
        super._bridgeInput(bp);

        break;
    }
  }

}

class StepperBase extends PhidgetChannel {
  constructor(ch) {
    super(ch);
    this.onPositionChange = null;
    this.onVelocityChange = null;
    this.onStopped = null;
    this._class = ChannelClass.STEPPER;
    this.name = "Stepper";
    this.data = this._initData();
  }
  /** @internal */


  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 40:
        this.data.acceleration = bp.entries[0].v;

        this._FIREPropertyChange('Acceleration', bp);

        break;

      case 49:
        this.data.controlMode = bp.entries[0].v;

        this._FIREPropertyChange('ControlMode', bp);

        break;

      case 51:
        this.data.currentLimit = bp.entries[0].v;

        this._FIREPropertyChange('CurrentLimit', bp);

        break;

      case 54:
        if (bp.entryCount > 1) this.data.dataInterval = bp.entries[1].v;else this.data.dataInterval = bp.entries[0].v;

        this._FIREPropertyChange('DataInterval', bp);

        this._FIREPropertyChange('DataRate', bp);

        break;

      case 57:
        this.data.engaged = bp.entries[0].v;

        this._FIREPropertyChange('Engaged', bp);

        break;

      case 146:
        break;

      case 63:
        this.data.holdingCurrentLimit = bp.entries[0].v;

        this._FIREPropertyChange('HoldingCurrentLimit', bp);

        break;

      case 147:
        break;

      case 83:
        this.data.targetPosition = bp.entries[0].v;

        this._FIREPropertyChange('TargetPosition', bp);

        break;

      case 85:
        this.data.velocityLimit = bp.entries[0].v;

        this._FIREPropertyChange('VelocityLimit', bp);

        break;

      case 91:
        {
          if (this._isAttachedDone && this.onStopped) {
            try {
              this.onStopped();
            } catch (err) {
              logEventException(err);
            }
          }

          break;
        }

      default:
        throw new PhidgetError(ErrorCode.INVALID_PACKET, "Unsupported bridge packet: 0x" + bp.vpkt.toString(16));
    }
  }
  /** @internal */


  _initData() {
    return {
      positionOffset: 0,
      dataInterval: 1e+300,
      minDataRate: 1e+300,
      maxDataRate: 1e+300,
      holdingCurrentLimit: 1e+300,
      minDataInterval: 4294967295,
      maxDataInterval: 4294967295,
      maxPosition: 9223372036854776000,
      maxVelocityLimit: 1e+300,
      maxAcceleration: 1e+300,
      maxCurrentLimit: 1e+300,
      minPosition: 9223372036854776000,
      minVelocityLimit: 1e+300,
      minAcceleration: 1e+300,
      minCurrentLimit: 1e+300,
      controlMode: 2147483647,
      position: 9223372036854776000,
      targetPosition: 9223372036854776000,
      velocityLimit: 1e+300,
      velocity: 1e+300,
      acceleration: 1e+300,
      currentLimit: 1e+300,
      isMoving: 2,
      engaged: 2,
      rescaleFactor: 1e+300,
      maxFailsafeTime: 4294967295,
      minFailsafeTime: 4294967295
    };
  }
  /** @internal */


  _initAfterOpen() {}
  /** @internal */


  async _setDefaults() {}
  /** @internal */


  _hasInitialState() {
    return true;
  }
  /** @internal */


  _fireInitialEvents() {}
  /**
   * The rate at which the controller can change the motor's `velocity`.
   *
   * *   Units for `position`, `velocity`, and `acceleration` can be set by the user through the `rescaleFactor`.The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * *   The default units for this motor controller are **1/16steps per count**.
   * *   Changing the acceleration value while the stepper is in motion (especially at speeds higher than 1000 1/16th steps/s) can cause unpredictable results due to the inability of the processor tocalculate a new acceleration curve quickly enough. Generally you should wait until the motor is stationary until calling this function.
   * @throws {@link PhidgetError}
   */


  get acceleration() {
    return this.getAcceleration();
  }
  /**
   * The minimum value that `acceleration` can be set to.
   *
   * *   Units for `position`, `velocity`, and `acceleration` can be set by the user through the `rescaleFactor`.The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * *   The default units for this motor controller are **1/16steps per count**.
   * @throws {@link PhidgetError}
   */


  get minAcceleration() {
    return this.getMinAcceleration();
  }
  /**
   * The maximum value that `acceleration` can be set to.
   *
   * *   Units for `position`, `velocity`, and `acceleration` can be set by the user through the `rescaleFactor`.The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * *   The default units for this motor controller are **1/16steps per count**.
   * @throws {@link PhidgetError}
   */


  get maxAcceleration() {
    return this.getMaxAcceleration();
  }
  /**
   * Use `phidget22.StepperControlMode.STEP` mode when you want to set a `targetPosition` for the Stepper motor. Use `phidget22.StepperControlMode.RUN` mode when you simply want the Stepper motor to rotate continuously in a specific direction.
   *
   * Changing the control mode while the motor is running will not have an effect on the motor's movements until a new `targetPosition` or `velocityLimit` is set.
   *
   * In `phidget22.StepperControlMode.RUN` mode, setting a `velocityLimit` will also set the target position of the controller to `minPosition` or `maxPosition`, corresponding to the direction of movement.
   * @throws {@link PhidgetError}
   */


  get controlMode() {
    return this.getControlMode();
  }
  /**
   * The current through the motor will be limited by the `currentLimit`.
   *
   * *   See your Stepper motor's data sheet for more information about what value the `currentLimit` should be.
   * @throws {@link PhidgetError}
   */


  get currentLimit() {
    return this.getCurrentLimit();
  }
  /**
   * The minimum value that `currentLimit` and `holdingCurrentLimit` can be set to.
   *
   * *   Reference your controller's User Guide for more information about how the `holdingCurrentLimit` and `currentLimit` can be used in your application.
   * @throws {@link PhidgetError}
   */


  get minCurrentLimit() {
    return this.getMinCurrentLimit();
  }
  /**
   * The maximum value that `currentLimit` and `holdingCurrentLimit` can be set to.
   *
   * *   Reference your controller's User Guide for more information about how the `holdingCurrentLimit` and `currentLimit` can be used in your application.
   * @throws {@link PhidgetError}
   */


  get maxCurrentLimit() {
    return this.getMaxCurrentLimit();
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `PositionChange` / `VelocityChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * @throws {@link PhidgetError}
   */


  get dataInterval() {
    return this.getDataInterval();
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataInterval() {
    return this.getMinDataInterval();
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataInterval() {
    return this.getMaxDataInterval();
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */


  get dataRate() {
    return this.getDataRate();
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataRate() {
    return this.getMinDataRate();
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataRate() {
    return this.getMaxDataRate();
  }
  /**
   * When this property is true, the controller will supply power to the motor coils.
   *
   * *   The controller must be `engaged` in order to move the Stepper motor, or have it hold position.
   * @throws {@link PhidgetError}
   */


  get engaged() {
    return this.getEngaged();
  }
  /**
   * The minimum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @throws {@link PhidgetError}
   */


  get minFailsafeTime() {
    return this.getMinFailsafeTime();
  }
  /**
   * The maximum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @throws {@link PhidgetError}
   */


  get maxFailsafeTime() {
    return this.getMaxFailsafeTime();
  }
  /**
   * The `holdingCurrentLimit` will activate when the `targetPosition` has been reached. It will limit current through the motor.
   *
   * *   When the motor is not stopped, the current through the motor is limited by the `currentLimit`.
   * *   If no `holdingCurrentLimit` is specified, the `currentLimit` value will persist when the motor is stopped.
   * *   Reference your controller's User Guide for more information about how the `holdingCurrentLimit` and `currentLimit` can be used in your application.
   * @throws {@link PhidgetError}
   */


  get holdingCurrentLimit() {
    return this.getHoldingCurrentLimit();
  }
  /**
   * `isMoving` returns true while the controller is sending commands to the motor. Note: there is no feedback to the controller, so it does not know whether the motor shaft is actually moving or not.
   * @throws {@link PhidgetError}
   */


  get isMoving() {
    return this.getIsMoving();
  }
  /**
   * The most recent position value that the controller has reported.
   *
   * *   This value will always be between `minPosition` and `maxPosition`.
   * *   Units for `position`, `velocity`, and `acceleration` can be set by the user through the `rescaleFactor`.The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * *   The default units for this motor controller are **1/16steps per count**.
   * @throws {@link PhidgetError}
   */


  get position() {
    return this.getPosition();
  }
  /**
   * The minimum value that `targetPosition` can be set to.
   *
   * *   Units for `position`, `velocity`, and `acceleration` can be set by the user through the `rescaleFactor`.The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * *   The default units for this motor controller are **1/16steps per count**.
   * @throws {@link PhidgetError}
   */


  get minPosition() {
    return this.getMinPosition();
  }
  /**
   * The maximum value that `targetPosition` can be set to.
   *
   * *   Units for `position`, `velocity`, and `acceleration` can be set by the user through the `rescaleFactor`.The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * *   The default units for this motor controller are **1/16steps per count**.
   * @throws {@link PhidgetError}
   */


  get maxPosition() {
    return this.getMaxPosition();
  }
  /**
   * Applies a factor to the \[user units\] per step to all movement parameters to make the units in your application is more intuitive.
   *
   * *   For example, starting from position 0 and setting a new position with a rescale factor, the stepper will move `position` / `rescaleFactor` steps.
   * *   In this way, units for `position`, `velocity`, and `acceleration` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * *   The default units for this motor controller are **1/16steps per count**.
   *
   *
   * RescaleFactor = (1/16) \* (MotorStepAngle/Degrees Per UserUnit)
   * @throws {@link PhidgetError}
   */


  get rescaleFactor() {
    return this.getRescaleFactor();
  }

  set rescaleFactor(rescaleFactor) {
    this.setRescaleFactor(rescaleFactor);
  }
  /**
   * If the controller is configured and the `targetPosition` is set, the Stepper motor will move towards the `targetPosition` at the specified `acceleration` and `velocity`.
   *
   * *   `targetPosition` is only used when the `controlMode` is set to step mode.
   * *   Units for `position`, `velocity`, and `acceleration` can be set by the user through the `rescaleFactor`.The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * *   The default units for this motor controller are **1/16steps per count**.
   * @throws {@link PhidgetError}
   */


  get targetPosition() {
    return this.getTargetPosition();
  }
  /**
   * The most recent velocity value that the controller has reported.
   *
   * *   This value is bounded by `minVelocityLimit` and `maxVelocityLimit`.
   * *   Units for `position`, `velocity`, and `acceleration` can be set by the user through the `rescaleFactor`.The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * *   The default units for this motor controller are **1/16steps per count**.
   * @throws {@link PhidgetError}
   */


  get velocity() {
    return this.getVelocity();
  }
  /**
   * When moving, the Stepper motor velocity will be limited by this value.
   *
   * *   The `velocityLimit` is bounded by `minVelocityLimit` and `maxVelocityLimit`.
   * *   When in step mode, the `minVelocityLimit` has a value of 0. This is because the sign (±) of the `targetPosition` will indicate the direction.
   * *   When in run mode, the `minVelocityLimit` has a value of -`maxVelocityLimit`. This is because there is no target position, so the direction is defined by the sign (±) of the `velocityLimit`.
   * *   Units for `position`, `velocity`, and `acceleration` can be set by the user through the `rescaleFactor`.The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * *   The default units for this motor controller are **1/16steps per count**.
   * *   While `velocityLimit` is listed as a double, it is rounded down to an integer number of 1/16th steps when sent to the board since the board is limited by a minimum unit of 1/16th steps/s. This is especially important to consider when using different `rescaleFactor` values where converting to units of, for example, RPM results in 1.5RPM (80 1/16th steps/s) and 1.509375 RPM (80.5 1/16th steps/s) both being sent to the board as 80 1/16th steps/s.
   * @throws {@link PhidgetError}
   */


  get velocityLimit() {
    return this.getVelocityLimit();
  }
  /**
   * The minimum value that `velocityLimit` can be set to.
   *
   * *   Units for `position`, `velocity`, and `acceleration` can be set by the user through the `rescaleFactor`.The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * *   The default units for this motor controller are **1/16steps per count**.
   * @throws {@link PhidgetError}
   */


  get minVelocityLimit() {
    return this.getMinVelocityLimit();
  }
  /**
   * The maximum value that `velocityLimit` can be set to.
   *
   * *   Units for `position`, `velocity`, and `acceleration` can be set by the user through the `rescaleFactor`.The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * *   The default units for this motor controller are **1/16steps per count**.
   * @throws {@link PhidgetError}
   */


  get maxVelocityLimit() {
    return this.getMaxVelocityLimit();
  }
  /**
   * Use `phidget22.StepperControlMode.STEP` mode when you want to set a `targetPosition` for the Stepper motor. Use `phidget22.StepperControlMode.RUN` mode when you simply want the Stepper motor to rotate continuously in a specific direction.
   *
   * Changing the control mode while the motor is running will not have an effect on the motor's movements until a new `targetPosition` or `velocityLimit` is set.
   *
   * In `phidget22.StepperControlMode.RUN` mode, setting a `velocityLimit` will also set the target position of the controller to `minPosition` or `maxPosition`, corresponding to the direction of movement.
   * @returns The control mode value
   * @throws {@link PhidgetError}
   */


  getControlMode() {
    this._assertOpen();

    if (this.data.controlMode === 2147483647) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.controlMode;
  }
  /**
   * Use `phidget22.StepperControlMode.STEP` mode when you want to set a `targetPosition` for the Stepper motor. Use `phidget22.StepperControlMode.RUN` mode when you simply want the Stepper motor to rotate continuously in a specific direction.
   *
   * Changing the control mode while the motor is running will not have an effect on the motor's movements until a new `targetPosition` or `velocityLimit` is set.
   *
   * In `phidget22.StepperControlMode.RUN` mode, setting a `velocityLimit` will also set the target position of the controller to `minPosition` or `maxPosition`, corresponding to the direction of movement.
   * @throws {@link PhidgetError}
   * @param controlMode - The control mode value
   */


  async setControlMode(controlMode) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: controlMode
    });
    await bp.send(this._ch, 49);
  }
  /**
   * The current through the motor will be limited by the `currentLimit`.
   *
   * *   See your Stepper motor's data sheet for more information about what value the `currentLimit` should be.
   * @returns The current limit value
   * @throws {@link PhidgetError}
   */


  getCurrentLimit() {
    this._assertOpen();

    if (this.data.currentLimit === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.currentLimit;
  }
  /**
   * The current through the motor will be limited by the `currentLimit`.
   *
   * *   See your Stepper motor's data sheet for more information about what value the `currentLimit` should be.
   * @throws {@link PhidgetError}
   * @param currentLimit - The current limit value
   */


  async setCurrentLimit(currentLimit) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: currentLimit
    });
    await bp.send(this._ch, 51);
  }
  /**
   * The minimum value that `currentLimit` and `holdingCurrentLimit` can be set to.
   *
   * *   Reference your controller's User Guide for more information about how the `holdingCurrentLimit` and `currentLimit` can be used in your application.
   * @returns The current limit
   * @throws {@link PhidgetError}
   */


  getMinCurrentLimit() {
    this._assertOpen();

    if (this.data.minCurrentLimit === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minCurrentLimit;
  }
  /**
   * The maximum value that `currentLimit` and `holdingCurrentLimit` can be set to.
   *
   * *   Reference your controller's User Guide for more information about how the `holdingCurrentLimit` and `currentLimit` can be used in your application.
   * @returns The current limit
   * @throws {@link PhidgetError}
   */


  getMaxCurrentLimit() {
    this._assertOpen();

    if (this.data.maxCurrentLimit === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxCurrentLimit;
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `PositionChange` / `VelocityChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getDataInterval() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.dataInterval;
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `PositionChange` / `VelocityChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */


  async setDataInterval(dataInterval) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: dataInterval
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getMinDataInterval() {
    this._assertOpen();

    if (this.data.minDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataInterval;
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getMaxDataInterval() {
    this._assertOpen();

    if (this.data.maxDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */


  getDataRate() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return 1000.0 / this.data.dataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */


  async setDataRate(dataRate) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: Math.round(1000.0 / dataRate)
    });
    bp.set({
      name: "1",
      type: "g",
      value: 1000.0 / dataRate
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMinDataRate() {
    this._assertOpen();

    if (this.data.minDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataRate;
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMaxDataRate() {
    this._assertOpen();

    if (this.data.maxDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataRate;
  }
  /**
   * When this property is true, the controller will supply power to the motor coils.
   *
   * *   The controller must be `engaged` in order to move the Stepper motor, or have it hold position.
   * @returns The engaged state
   * @throws {@link PhidgetError}
   */


  getEngaged() {
    this._assertOpen();

    if (this.data.engaged === 2) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return !!this.data.engaged;
  }
  /**
   * When this property is true, the controller will supply power to the motor coils.
   *
   * *   The controller must be `engaged` in order to move the Stepper motor, or have it hold position.
   * @throws {@link PhidgetError}
   * @param engaged - The engaged state
   */


  async setEngaged(engaged) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: engaged ? 1 : 0
    });
    await bp.send(this._ch, 57);
  }
  /**
   * Enables the **failsafe** feature for the channel, with a given **failsafe time**.
   *
   * The **failsafe** feature is intended for use in applications where it is important for the channel to enter a known _safe state_ if the program controlling it locks up or crashes. If you do not enable the failsafe feature, the channel will carry out whatever instructions it was last given until it is explicitly told to stop.
   *
   * Enabling the failsafe feature starts a recurring **failsafe timer** for the channel. Once the failsafe timer is enabled, it must be reset within the specified time or the channel will enter a **failsafe state**. The failsafe timer may be reset by sending any valid command to the device\*. Resetting the failsafe timer will reload the timer with the specified _failsafe time_, starting when the message to reset the timer is received by the Phidget.
   *
   * _\*(**get** requests do not typically send commands and won't reset the failsafe timer)_
   *
   * For example: if the failsafe is enabled with a **failsafe time** of 1000ms, you will have 1000ms to reset the failsafe timer. Every time the failsafe timer is reset, you will have 1000ms from that time to reset the failsafe again.
   *
   * If the failsafe timer is not reset before it runs out, the channel will enter a **failsafe state**. For Stepper Motor channels, this will disengage the motor. Once the channel enters the **failsafe state**, it will reject any further input until the channel is reopened.
   *
   * To prevent the channel from falsely entering the failsafe state, we recommend resetting the failsafe timer as frequently as is practical for your application. A good rule of thumb is to not let more than a third of the failsafe time pass before resetting the timer.
   *
   * Once the failsafe timer has been set, it cannot be disabled by any means other than closing and reopening the channel.
   * @throws {@link PhidgetError}
   * @param failsafeTime - Failsafe timeout in milliseconds
   */


  async enableFailsafe(failsafeTime) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: failsafeTime
    });
    await bp.send(this._ch, 146);
  }
  /**
   * The minimum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @returns The failsafe time
   * @throws {@link PhidgetError}
   */


  getMinFailsafeTime() {
    this._assertOpen();

    if (this.data.minFailsafeTime === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minFailsafeTime;
  }
  /**
   * The maximum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @returns The failsafe time
   * @throws {@link PhidgetError}
   */


  getMaxFailsafeTime() {
    this._assertOpen();

    if (this.data.maxFailsafeTime === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxFailsafeTime;
  }
  /**
   * The `holdingCurrentLimit` will activate when the `targetPosition` has been reached. It will limit current through the motor.
   *
   * *   When the motor is not stopped, the current through the motor is limited by the `currentLimit`.
   * *   If no `holdingCurrentLimit` is specified, the `currentLimit` value will persist when the motor is stopped.
   * *   Reference your controller's User Guide for more information about how the `holdingCurrentLimit` and `currentLimit` can be used in your application.
   * @returns The current value
   * @throws {@link PhidgetError}
   */


  getHoldingCurrentLimit() {
    this._assertOpen();

    if (this.data.holdingCurrentLimit === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.holdingCurrentLimit;
  }
  /**
   * The `holdingCurrentLimit` will activate when the `targetPosition` has been reached. It will limit current through the motor.
   *
   * *   When the motor is not stopped, the current through the motor is limited by the `currentLimit`.
   * *   If no `holdingCurrentLimit` is specified, the `currentLimit` value will persist when the motor is stopped.
   * *   Reference your controller's User Guide for more information about how the `holdingCurrentLimit` and `currentLimit` can be used in your application.
   * @throws {@link PhidgetError}
   * @param holdingCurrentLimit - The current value
   */


  async setHoldingCurrentLimit(holdingCurrentLimit) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: holdingCurrentLimit
    });
    await bp.send(this._ch, 63);
  }
  /**
   * `isMoving` returns true while the controller is sending commands to the motor. Note: there is no feedback to the controller, so it does not know whether the motor shaft is actually moving or not.
   * @returns The moving state
   * @throws {@link PhidgetError}
   */


  getIsMoving() {
    this._assertOpen();

    if (this.data.isMoving === 2) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return !!this.data.isMoving;
  }
  /**
   * Applies a factor to the \[user units\] per step to all movement parameters to make the units in your application is more intuitive.
   *
   * *   For example, starting from position 0 and setting a new position with a rescale factor, the stepper will move `position` / `rescaleFactor` steps.
   * *   In this way, units for `position`, `velocity`, and `acceleration` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * *   The default units for this motor controller are **1/16steps per count**.
   *
   *
   * RescaleFactor = (1/16) \* (MotorStepAngle/Degrees Per UserUnit)
   * @returns The rescale factor value
   * @throws {@link PhidgetError}
   */


  getRescaleFactor() {
    this._assertOpen();

    if (this.data.rescaleFactor === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.rescaleFactor;
  }
  /**
   * Resets the failsafe timer, if one has been set. See `enableFailsafe()` for details.
   *
   * This function will fail if no failsafe timer has been set for the channel.
   * @throws {@link PhidgetError}
   */


  async resetFailsafe() {
    this._assertOpen();

    const bp = new BridgePacket();
    await bp.send(this._ch, 147);
  }

}

/** @public */

class Stepper extends StepperBase {
  /** @internal */
  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 29:
        this.data.position = bp.getNumber(0);

        if (this._isAttachedDone && this.onPositionChange) {
          try {
            this.onPositionChange((this.data.position + this.data.positionOffset) * this.data.rescaleFactor);
          } catch (err) {
            logEventException(err);
          }
        }

        break;

      case 100:
        this.data.velocity = bp.getNumber(0);

        if (this._isAttachedDone && this.onVelocityChange) {
          try {
            this.onVelocityChange(this.data.velocity * this.data.rescaleFactor);
          } catch (err) {
            logEventException(err);
          }
        }

        break;

      case 49:
        switch (bp.getNumber(0)) {
          case StepperControlMode.STEP:
            this.data.minVelocityLimit = 0;
            break;

          case StepperControlMode.RUN:
            this.data.minVelocityLimit = -this.data.maxVelocityLimit;
            break;
        }

        super._bridgeInput(bp);

        break;

      case 91:
        this.data.isMoving = 0;

        super._bridgeInput(bp);

        break;

      case 57:
        if (bp.getBoolean(0) == true && this.data.velocityLimit !== 0 && this.data.position !== this.data.targetPosition) this.data.isMoving = 1;

        super._bridgeInput(bp);

        break;

      case 85:
        if (this.data.engaged && bp.getNumber(0) !== 0 && this.data.position !== this.data.targetPosition) this.data.isMoving = 1;

        super._bridgeInput(bp);

        break;

      case 83:
        if (this.data.engaged && this.data.velocityLimit !== 0 && this.data.position !== bp.getNumber(0)) this.data.isMoving = 1;

        super._bridgeInput(bp);

        break;

      default:
        super._bridgeInput(bp);

        break;
    }
  }
  /** @internal */


  _initAfterOpen() {
    super._initAfterOpen();

    if (this.data.position == 9223372036854776000) this.data.position = 0;
    if (this.data.velocity == 1e+300) this.data.velocity = 0;
    if (this.data.isMoving == 2) this.data.isMoving = 0;
  }

  getAcceleration() {
    this._assertOpen();

    if (this.data.acceleration === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.acceleration * this.data.rescaleFactor;
  }

  async setAcceleration(acceleration) {
    this._assertOpen();

    const calcAccel = acceleration / this.data.rescaleFactor;
    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: calcAccel
    });
    await bp.send(this._ch, 40);
  }

  getMinAcceleration() {
    this._assertOpen();

    if (this.data.minAcceleration === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minAcceleration * this.data.rescaleFactor;
  }

  getMaxAcceleration() {
    this._assertOpen();

    if (this.data.maxAcceleration === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxAcceleration * this.data.rescaleFactor;
  }

  getPosition() {
    this._assertOpen();

    if (this.data.position === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return (this.data.position + this.data.positionOffset) * this.data.rescaleFactor;
  }

  getMinPosition() {
    this._assertOpen();

    if (this.data.minPosition === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return (this.data.minPosition + this.data.positionOffset) * this.data.rescaleFactor;
  }

  getMaxPosition() {
    this._assertOpen();

    if (this.data.maxPosition === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return (this.data.maxPosition + this.data.positionOffset) * this.data.rescaleFactor;
  }

  setRescaleFactor(rescaleFactor) {
    this._assertOpen();

    this.data.rescaleFactor = rescaleFactor;
  }

  getTargetPosition() {
    this._assertOpen();

    if (this.data.targetPosition === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return (this.data.targetPosition + this.data.positionOffset) * this.data.rescaleFactor;
  }

  async setTargetPosition(targetPosition) {
    this._assertOpen();

    const calcPosition = targetPosition / this.data.rescaleFactor - this.data.positionOffset;
    if (calcPosition < this.data.minPosition || calcPosition > this.data.maxPosition) throw new PhidgetError(ErrorCode.INVALID_ARGUMENT, "Value must be in range: " + this.minPosition + " - " + this.maxPosition + ".");
    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "l",
      value: calcPosition
    });
    await bp.send(this._ch, 83);
  }

  getVelocity() {
    this._assertOpen();

    if (this.data.velocity === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.velocity * this.data.rescaleFactor;
  }

  getVelocityLimit() {
    this._assertOpen();

    if (this.data.velocityLimit === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.velocityLimit * this.data.rescaleFactor;
  }

  async setVelocityLimit(velocityLimit) {
    this._assertOpen();

    const calcLimit = velocityLimit / this.data.rescaleFactor;
    if (calcLimit < this.data.minVelocityLimit || calcLimit > this.data.maxVelocityLimit) throw new PhidgetError(ErrorCode.INVALID_ARGUMENT, "Value must be in range: " + this.minVelocityLimit + " - " + this.maxVelocityLimit + ".");
    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: calcLimit
    });
    await bp.send(this._ch, 85);
  }

  getMaxVelocityLimit() {
    this._assertOpen();

    if (this.data.maxVelocityLimit === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxVelocityLimit * this.data.rescaleFactor;
  }

  getMinVelocityLimit() {
    this._assertOpen();

    if (this.data.minVelocityLimit === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minVelocityLimit * this.data.rescaleFactor;
  }

  addPositionOffset(positionOffset) {
    this._assertOpen();

    this.data.positionOffset += positionOffset / this.data.rescaleFactor;
  }

}

class LCDBase extends PhidgetChannel {
  constructor(ch) {
    super(ch);
    this._class = ChannelClass.LCD;
    this.name = "LCD";
    this.data = this._initData();
  }
  /** @internal */


  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 43:
        this.data.backlight = bp.entries[0].v;

        this._FIREPropertyChange('Backlight', bp);

        break;

      case 47:
        break;

      case 4:
        break;

      case 48:
        this.data.contrast = bp.entries[0].v;

        this._FIREPropertyChange('Contrast', bp);

        break;

      case 6:
        break;

      case 52:
        this.data.cursorBlink = bp.entries[0].v;

        this._FIREPropertyChange('CursorBlink', bp);

        break;

      case 53:
        this.data.cursorOn = bp.entries[0].v;

        this._FIREPropertyChange('CursorOn', bp);

        break;

      case 13:
        break;

      case 14:
        break;

      case 15:
        break;

      case 19:
        break;

      case 62:
        this.data.frameBuffer = bp.entries[0].v;

        this._FIREPropertyChange('FrameBuffer', bp);

        break;

      case 24:
        break;

      case 38:
        break;

      case 78:
        this.data.screenSize = bp.entries[0].v;

        this._FIREPropertyChange('ScreenSize', bp);

        break;

      case 80:
        this.data.sleeping = bp.entries[0].v;

        this._FIREPropertyChange('Sleeping', bp);

        break;

      case 104:
        break;

      case 105:
        break;

      default:
        throw new PhidgetError(ErrorCode.INVALID_PACKET, "Unsupported bridge packet: 0x" + bp.vpkt.toString(16));
    }
  }
  /** @internal */


  _initData() {
    return {
      fontWidth: [255, 255, 255],
      fontHeight: [255, 255, 255],
      backlight: 1e+300,
      minBacklight: 1e+300,
      maxBacklight: 1e+300,
      contrast: 1e+300,
      minContrast: 1e+300,
      maxContrast: 1e+300,
      cursorBlink: 2,
      cursorOn: 2,
      frameBuffer: 2147483647,
      height: 2147483647,
      width: 2147483647,
      screenSize: 2147483647,
      sleeping: 2,
      autoFlush: 2
    };
  }
  /** @internal */


  _initAfterOpen() {}
  /** @internal */


  async _setDefaults() {}
  /** @internal */


  _hasInitialState() {
    return true;
  }
  /** @internal */


  _fireInitialEvents() {}
  /**
   * Set to true to automatically flush the LCD screen after every message that writes to the LCD.
   * @throws {@link PhidgetError}
   */


  get autoFlush() {
    return this.getAutoFlush();
  }

  set autoFlush(autoFlush) {
    this.setAutoFlush(autoFlush);
  }
  /**
   * The `backlight` affects the brightness of the LCD screen.
   *
   * *   `backlight` is bounded by `minBacklight` and `maxBacklight`.
   * @throws {@link PhidgetError}
   */


  get backlight() {
    return this.getBacklight();
  }
  /**
   * The minimum value that `backlight` can be set to.
   * @throws {@link PhidgetError}
   */


  get minBacklight() {
    return this.getMinBacklight();
  }
  /**
   * The maximum value that `backlight` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxBacklight() {
    return this.getMaxBacklight();
  }
  /**
   * Contrast level of the text or graphic pixels.
   *
   * *   A higher contrast will make the image darker.
   * *   `contrast` is bounded by `minContrast` and `maxContrast`.
   * @throws {@link PhidgetError}
   */


  get contrast() {
    return this.getContrast();
  }
  /**
   * The minimum value that `contrast` can be set to.
   * @throws {@link PhidgetError}
   */


  get minContrast() {
    return this.getMinContrast();
  }
  /**
   * The maximum value that `contrast` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxContrast() {
    return this.getMaxContrast();
  }
  /**
   * When `cursorBlink` is true, the device will cause the cursor to periodically blink.
   * @throws {@link PhidgetError}
   */


  get cursorBlink() {
    return this.getCursorBlink();
  }
  /**
   * When `cursorOn` is true, the device will underline to the cursor position.
   * @throws {@link PhidgetError}
   */


  get cursorOn() {
    return this.getCursorOn();
  }
  /**
   * The frame buffer that is currently being used.
   *
   * *   Commands sent to the device are performed on this buffer.
   * @throws {@link PhidgetError}
   */


  get frameBuffer() {
    return this.getFrameBuffer();
  }
  /**
   * The height of the LCD screen attached to the channel.
   * @throws {@link PhidgetError}
   */


  get height() {
    return this.getHeight();
  }
  /**
   * The size of the LCD screen attached to the channel.
   * @throws {@link PhidgetError}
   */


  get screenSize() {
    return this.getScreenSize();
  }
  /**
   * The on/off state of `sleeping`. Putting the device to sleep turns off the display and backlight in order to save power.
   *
   * *   The device will still take commands while asleep, and will wake up if the screen is flushed, or if the contrast or backlight are changed.
   * *   When the device wakes up, it will return to its last known state, taking into account any changes that happened while asleep.
   * @throws {@link PhidgetError}
   */


  get sleeping() {
    return this.getSleeping();
  }
  /**
   * The width of the LCD screen attached to the channel.
   * @throws {@link PhidgetError}
   */


  get width() {
    return this.getWidth();
  }
  /**
   * Set to true to automatically flush the LCD screen after every message that writes to the LCD.
   * @returns Allows setting the LCD to flush the screen automatically
   * @throws {@link PhidgetError}
   */


  getAutoFlush() {
    this._assertOpen();

    if (this.data.autoFlush === 2) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return !!this.data.autoFlush;
  }
  /**
   * The `backlight` affects the brightness of the LCD screen.
   *
   * *   `backlight` is bounded by `minBacklight` and `maxBacklight`.
   * @returns The backlight value
   * @throws {@link PhidgetError}
   */


  getBacklight() {
    this._assertOpen();

    if (this.data.backlight === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.backlight;
  }
  /**
   * The `backlight` affects the brightness of the LCD screen.
   *
   * *   `backlight` is bounded by `minBacklight` and `maxBacklight`.
   * @throws {@link PhidgetError}
   * @param backlight - The backlight value
   */


  async setBacklight(backlight) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: backlight
    });
    await bp.send(this._ch, 43);
  }
  /**
   * The minimum value that `backlight` can be set to.
   * @returns The backlight value
   * @throws {@link PhidgetError}
   */


  getMinBacklight() {
    this._assertOpen();

    if (this.data.minBacklight === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minBacklight;
  }
  /**
   * The maximum value that `backlight` can be set to.
   * @returns The backlight value
   * @throws {@link PhidgetError}
   */


  getMaxBacklight() {
    this._assertOpen();

    if (this.data.maxBacklight === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxBacklight;
  }
  /**
   * Clears all pixels in the current frame buffer.
   *
   * *   Changes made to the frame buffer must be flushed to the LCD screen using `flush()`.
   * @throws {@link PhidgetError}
   */


  async clear() {
    this._assertOpen();

    const bp = new BridgePacket();
    await bp.send(this._ch, 4);
  }
  /**
   * Contrast level of the text or graphic pixels.
   *
   * *   A higher contrast will make the image darker.
   * *   `contrast` is bounded by `minContrast` and `maxContrast`.
   * @returns The contrast value
   * @throws {@link PhidgetError}
   */


  getContrast() {
    this._assertOpen();

    if (this.data.contrast === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.contrast;
  }
  /**
   * Contrast level of the text or graphic pixels.
   *
   * *   A higher contrast will make the image darker.
   * *   `contrast` is bounded by `minContrast` and `maxContrast`.
   * @throws {@link PhidgetError}
   * @param contrast - The contrast value
   */


  async setContrast(contrast) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: contrast
    });
    await bp.send(this._ch, 48);
  }
  /**
   * The minimum value that `contrast` can be set to.
   * @returns The contrast value.
   * @throws {@link PhidgetError}
   */


  getMinContrast() {
    this._assertOpen();

    if (this.data.minContrast === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minContrast;
  }
  /**
   * The maximum value that `contrast` can be set to.
   * @returns The contrast value.
   * @throws {@link PhidgetError}
   */


  getMaxContrast() {
    this._assertOpen();

    if (this.data.maxContrast === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxContrast;
  }
  /**
   * Copies all pixels from a specified rectangular region to another.
   * @throws {@link PhidgetError}
   * @param sourceFramebuffer - Index number of the frame buffer containing the source rectangle
   * @param destFramebuffer - Index number of the frame buffer containing the destination rectangle
   * @param sourceX1 - X coordinate of upper left corner of source rectangle
   * @param sourceY1 - Y coordinate of upper left corner of source rectangle
   * @param sourceX2 - X coordinate of bottom right corner of source rectangle
   * @param sourceY2 - Y coordinate of bottom right corner of source rectangle
   * @param destX - X coordinate of upper left corner of destination rectangle
   * @param destY - Y coordinate of upper left corner of destination rectangle
   * @param inverted - If true, copied pixels are inverted
   */


  async copy(sourceFramebuffer, destFramebuffer, sourceX1, sourceY1, sourceX2, sourceY2, destX, destY, inverted) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: sourceFramebuffer
    });
    bp.set({
      name: "1",
      type: "d",
      value: destFramebuffer
    });
    bp.set({
      name: "2",
      type: "d",
      value: sourceX1
    });
    bp.set({
      name: "3",
      type: "d",
      value: sourceY1
    });
    bp.set({
      name: "4",
      type: "d",
      value: sourceX2
    });
    bp.set({
      name: "5",
      type: "d",
      value: sourceY2
    });
    bp.set({
      name: "6",
      type: "d",
      value: destX
    });
    bp.set({
      name: "7",
      type: "d",
      value: destY
    });
    bp.set({
      name: "8",
      type: "d",
      value: inverted ? 1 : 0
    });
    await bp.send(this._ch, 6);
  }
  /**
   * When `cursorBlink` is true, the device will cause the cursor to periodically blink.
   * @returns The cursor blink mode
   * @throws {@link PhidgetError}
   */


  getCursorBlink() {
    this._assertOpen();

    if (this.data.cursorBlink === 2) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return !!this.data.cursorBlink;
  }
  /**
   * When `cursorBlink` is true, the device will cause the cursor to periodically blink.
   * @throws {@link PhidgetError}
   * @param cursorBlink - The cursor blink mode
   */


  async setCursorBlink(cursorBlink) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: cursorBlink ? 1 : 0
    });
    await bp.send(this._ch, 52);
  }
  /**
   * When `cursorOn` is true, the device will underline to the cursor position.
   * @returns The cursor on value
   * @throws {@link PhidgetError}
   */


  getCursorOn() {
    this._assertOpen();

    if (this.data.cursorOn === 2) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return !!this.data.cursorOn;
  }
  /**
   * When `cursorOn` is true, the device will underline to the cursor position.
   * @throws {@link PhidgetError}
   * @param cursorOn - The cursor on value
   */


  async setCursorOn(cursorOn) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: cursorOn ? 1 : 0
    });
    await bp.send(this._ch, 53);
  }
  /**
   * Draws a straight line in the current frame buffer between two specified points
   *
   * *   Changes made to the frame buffer must be flushed to the LCD screen using `flush()`.
   * @throws {@link PhidgetError}
   * @param x1 - X coordinate of the first point
   * @param y1 - Y coordinate of the first point
   * @param x2 - X coordinate of the second point
   * @param y2 - Y coordinate of the second point
   */


  async drawLine(x1, y1, x2, y2) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: x1
    });
    bp.set({
      name: "1",
      type: "d",
      value: y1
    });
    bp.set({
      name: "2",
      type: "d",
      value: x2
    });
    bp.set({
      name: "3",
      type: "d",
      value: y2
    });
    await bp.send(this._ch, 13);
  }
  /**
   * Draws, erases, or inverts a single specified pixel.
   *
   * *   Changes made to the frame buffer must be flushed to the LCD screen using `flush()`.
   * @throws {@link PhidgetError}
   * @param x - The X coordinate of the pixel
   * @param y - The Y coordinate of the pixel
   * @param pixelState - The new state of the pixel.
   */


  async drawPixel(x, y, pixelState) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: x
    });
    bp.set({
      name: "1",
      type: "d",
      value: y
    });
    bp.set({
      name: "2",
      type: "d",
      value: pixelState
    });
    await bp.send(this._ch, 14);
  }
  /**
   * Draws a rectangle in the current frame buffer using the specified points
   *
   * *   Changes made to the frame buffer must be flushed to the LCD screen using `flush()`.
   * @throws {@link PhidgetError}
   * @param x1 - The X coordinate of the top-left corner of the rectangle
   * @param y1 - The Y coordinate of the top-left corner of the rectangle
   * @param x2 - The X coordinate of the bottom-right corner of the rectangle
   * @param y2 - The Y coordinate of the bottom-right corner of the rectangle
   * @param filled - If true, the rectangle will be solid. If false, just a single pixel outline.
   * @param inverted - If true, clears the region instead of drawing
   */


  async drawRect(x1, y1, x2, y2, filled, inverted) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: x1
    });
    bp.set({
      name: "1",
      type: "d",
      value: y1
    });
    bp.set({
      name: "2",
      type: "d",
      value: x2
    });
    bp.set({
      name: "3",
      type: "d",
      value: y2
    });
    bp.set({
      name: "4",
      type: "d",
      value: filled ? 1 : 0
    });
    bp.set({
      name: "5",
      type: "d",
      value: inverted ? 1 : 0
    });
    await bp.send(this._ch, 15);
  }
  /**
   * Flushes the buffered LCD contents to the LCD screen.
   * @throws {@link PhidgetError}
   */


  async flush() {
    this._assertOpen();

    const bp = new BridgePacket();
    await bp.send(this._ch, 19);
  }
  /**
   * Sets the size of the specified font.
   * @throws {@link PhidgetError}
   * @param font - The specified font
   * @param width - The width of the font
   * @param height - The height of the font
   */


  async setFontSize(font, width, height) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: font
    });
    bp.set({
      name: "1",
      type: "d",
      value: width
    });
    bp.set({
      name: "2",
      type: "d",
      value: height
    });
    await bp.send(this._ch, 61);
  }
  /**
   * The frame buffer that is currently being used.
   *
   * *   Commands sent to the device are performed on this buffer.
   * @returns The current frame buffer
   * @throws {@link PhidgetError}
   */


  getFrameBuffer() {
    this._assertOpen();

    if (this.data.frameBuffer === 2147483647) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.frameBuffer;
  }
  /**
   * The frame buffer that is currently being used.
   *
   * *   Commands sent to the device are performed on this buffer.
   * @throws {@link PhidgetError}
   * @param frameBuffer - The current frame buffer
   */


  async setFrameBuffer(frameBuffer) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: frameBuffer
    });
    await bp.send(this._ch, 62);
  }
  /**
   * The height of the LCD screen attached to the channel.
   * @returns The height value
   * @throws {@link PhidgetError}
   */


  getHeight() {
    this._assertOpen();

    if (this.data.height === 2147483647) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.height;
  }
  /**
   * Initializes the Text LCD display
   * @throws {@link PhidgetError}
   */


  async initialize() {
    this._assertOpen();

    const bp = new BridgePacket();
    await bp.send(this._ch, 24);
  }
  /**
   * Writes the specified frame buffer to flash memory
   *
   * *   Use sparingly. The flash memory is only designed to be written to 10,000 times before it may become unusable. This method can only be called one time each time the channel is opened.
   * @throws {@link PhidgetError}
   * @param frameBuffer - The frame buffer to be saved
   */


  async saveFrameBuffer(frameBuffer) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: frameBuffer
    });
    await bp.send(this._ch, 38);
  }
  /**
   * The size of the LCD screen attached to the channel.
   * @returns The screen size
   * @throws {@link PhidgetError}
   */


  getScreenSize() {
    this._assertOpen();

    if (this.data.screenSize === 2147483647) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.screenSize;
  }
  /**
   * The size of the LCD screen attached to the channel.
   * @throws {@link PhidgetError}
   * @param screenSize - The screen size
   */


  async setScreenSize(screenSize) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: screenSize
    });
    await bp.send(this._ch, 78);
  }
  /**
   * The on/off state of `sleeping`. Putting the device to sleep turns off the display and backlight in order to save power.
   *
   * *   The device will still take commands while asleep, and will wake up if the screen is flushed, or if the contrast or backlight are changed.
   * *   When the device wakes up, it will return to its last known state, taking into account any changes that happened while asleep.
   * @returns The sleep status
   * @throws {@link PhidgetError}
   */


  getSleeping() {
    this._assertOpen();

    if (this.data.sleeping === 2) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return !!this.data.sleeping;
  }
  /**
   * The on/off state of `sleeping`. Putting the device to sleep turns off the display and backlight in order to save power.
   *
   * *   The device will still take commands while asleep, and will wake up if the screen is flushed, or if the contrast or backlight are changed.
   * *   When the device wakes up, it will return to its last known state, taking into account any changes that happened while asleep.
   * @throws {@link PhidgetError}
   * @param sleeping - The sleep status
   */


  async setSleeping(sleeping) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: sleeping ? 1 : 0
    });
    await bp.send(this._ch, 80);
  }
  /**
   * The width of the LCD screen attached to the channel.
   * @returns The width value
   * @throws {@link PhidgetError}
   */


  getWidth() {
    this._assertOpen();

    if (this.data.width === 2147483647) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.width;
  }
  /**
   * Writes text to the current frame buffer at the specified location
   *
   * *   Changes made to the frame buffer must be flushed to the LCD screen using `flush()`.
   * @throws {@link PhidgetError}
   * @param font - The font of the text
   * @param xPosition - The X position of the start of the text string
   * @param yPosition - The Y position of the start of the text string
   * @param text - The text to be written
   */


  async writeText(font, xPosition, yPosition, text) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: font
    });
    bp.set({
      name: "1",
      type: "d",
      value: xPosition
    });
    bp.set({
      name: "2",
      type: "d",
      value: yPosition
    });
    bp.set({
      name: "3",
      type: "s",
      value: text
    });
    await bp.send(this._ch, 105);
  }

}

/** @public */

class LCD extends LCDBase {
  constructor(ch) {
    super(ch);
    this._transactionLock = new PhidgetLock();
  }
  /** @internal */


  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 61:
        {
          const font = bp.getNumber(0);
          const width = bp.getNumber(1);
          const height = bp.getNumber(2);
          this.data.fontWidth[font] = width;
          this.data.fontHeight[font] = height;

          this._FIREPropertyChange('FontSize', bp);

          break;
        }

      case 78:
        this._setWidthHeightFromScreenSize(bp.getNumber(0));

        super._bridgeInput(bp);

        break;

      case 43:
      case 48:
      case 19:
        if (this.deviceID === DeviceID.PN_LCD1100) this.data.sleeping = 0;

        super._bridgeInput(bp);

        break;

      default:
        super._bridgeInput(bp);

        break;
    }
  }
  /** @internal */


  _setWidthHeightFromScreenSize(size) {
    switch (size) {
      case LCDScreenSize.NO_SCREEN:
        this.data.height = 0;
        this.data.width = 0;
        break;

      case LCDScreenSize.DIMENSIONS_1X8:
        this.data.height = 1;
        this.data.width = 8;
        break;

      case LCDScreenSize.DIMENSIONS_2X8:
        this.data.height = 2;
        this.data.width = 8;
        break;

      case LCDScreenSize.DIMENSIONS_1X16:
        this.data.height = 1;
        this.data.width = 16;
        break;

      case LCDScreenSize.DIMENSIONS_2X16:
        this.data.height = 2;
        this.data.width = 16;
        break;

      case LCDScreenSize.DIMENSIONS_4X16:
        this.data.height = 4;
        this.data.width = 16;
        break;

      case LCDScreenSize.DIMENSIONS_2X20:
        this.data.height = 2;
        this.data.width = 20;
        break;

      case LCDScreenSize.DIMENSIONS_4X20:
        this.data.height = 4;
        this.data.width = 20;
        break;

      case LCDScreenSize.DIMENSIONS_2X24:
        this.data.height = 2;
        this.data.width = 24;
        break;

      case LCDScreenSize.DIMENSIONS_1X40:
        this.data.height = 1;
        this.data.width = 40;
        break;

      case LCDScreenSize.DIMENSIONS_2X40:
        this.data.height = 2;
        this.data.width = 40;
        break;

      case LCDScreenSize.DIMENSIONS_4X40:
        this.data.height = 4;
        this.data.width = 40;
        break;
    }
  }

  setAutoFlush(autoFlush) {
    this._assertOpen();

    this.data.autoFlush = autoFlush ? 1 : 0;
  }

  async setCharacterBitmap(font, character, bitmap) {
    this._assertOpen();

    const fontSize = this.getFontSize(font);
    const bp = new BridgePacket();
    if (fontSize.width <= 0) throw new PhidgetError(ErrorCode.INVALID_ARGUMENT, "invalid arg (getFontSize): " + font);
    if (fontSize.height <= 0) throw new PhidgetError(ErrorCode.INVALID_ARGUMENT, "invalid arg (getFontSize): " + font);
    bp.set({
      name: "0",
      type: "d",
      value: font
    });
    bp.set({
      name: "1",
      type: "s",
      value: character
    });
    bp.set({
      name: "2",
      type: "R",
      value: bitmap
    });
    await bp.send(this._ch, 47);
  }

  getMaxCharacters(font) {
    this._assertOpen();

    let maxChars;
    let fontSize;

    switch (this.deviceID) {
      case DeviceID.PN_LCD1100:
        fontSize = this.getFontSize(font);
        if (fontSize.width <= 0) throw new PhidgetError(ErrorCode.INVALID_ARGUMENT, "Font width is <= 0.");
        if (fontSize.height <= 0) throw new PhidgetError(ErrorCode.INVALID_ARGUMENT, "Font height is <= 0.");
        maxChars = Math.floor(Math.min(255, this.data.width / fontSize.width * (this.data.height / fontSize.height)));
        break;

      case DeviceID.PN_1202_1203:
      case DeviceID.PN_1204:
      case DeviceID.PN_1215__1218:
      case DeviceID.PN_1219__1222:
        maxChars = 0xff;
        break;

      default:
        throw new PhidgetError(ErrorCode.UNEXPECTED);
    }

    return maxChars;
  }

  getFontSize(font) {
    this._assertOpen();

    const fontSize = {
      width: 0,
      height: 0
    };

    switch (font) {
      case LCDFont.DIMENSIONS_6X10:
        fontSize.width = 6;
        fontSize.height = 10;
        break;

      case LCDFont.DIMENSIONS_5X8:
        fontSize.width = 5;
        fontSize.height = 8;
        break;

      case LCDFont.DIMENSIONS_6X12:
        fontSize.width = 6;
        fontSize.height = 12;
        break;

      case LCDFont.USER1:
      case LCDFont.USER2:
        fontSize.width = this.data.fontWidth[font];
        fontSize.height = this.data.fontHeight[font];
        break;

      default:
        throw new PhidgetError(ErrorCode.INVALID_ARGUMENT, "Invalid font.");
    }

    return fontSize;
  }

  async writeBitmap(xpos, ypos, xsize, ysize, bitmap) {
    this._assertOpen();

    const bp = new BridgePacket();
    if (xsize <= 0 || ysize <= 0) throw new PhidgetError(ErrorCode.INVALID_ARGUMENT, "invalid arg (size cannot be <=0) " + (xsize <= 0 ? xsize : ysize));
    bp.set({
      name: "0",
      type: "d",
      value: xpos
    });
    bp.set({
      name: "1",
      type: "d",
      value: ypos
    });
    bp.set({
      name: "2",
      type: "d",
      value: xsize
    });
    bp.set({
      name: "3",
      type: "d",
      value: ysize
    });
    bp.set({
      name: "4",
      type: "R",
      value: bitmap
    });
    await bp.send(this._ch, 104);
  }

}

class MotorPositionControllerBase extends PhidgetChannel {
  constructor(ch) {
    super(ch);
    this.onPositionChange = null;
    this.onDutyCycleUpdate = null;
    this._class = ChannelClass.MOTOR_POSITION_CONTROLLER;
    this.name = "MotorPositionController";
    this.data = this._initData();
  }
  /** @internal */


  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 40:
        this.data.acceleration = bp.entries[0].v;

        this._FIREPropertyChange('Acceleration', bp);

        break;

      case 51:
        this.data.currentLimit = bp.entries[0].v;

        this._FIREPropertyChange('CurrentLimit', bp);

        break;

      case 119:
        this.data.currentRegulatorGain = bp.entries[0].v;

        this._FIREPropertyChange('CurrentRegulatorGain', bp);

        break;

      case 54:
        if (bp.entryCount > 1) this.data.dataInterval = bp.entries[1].v;else this.data.dataInterval = bp.entries[0].v;

        this._FIREPropertyChange('DataInterval', bp);

        this._FIREPropertyChange('DataRate', bp);

        break;

      case 120:
        this.data.deadBand = bp.entries[0].v;

        this._FIREPropertyChange('DeadBand', bp);

        break;

      case 57:
        this.data.engaged = bp.entries[0].v;

        this._FIREPropertyChange('Engaged', bp);

        break;

      case 146:
        break;

      case 58:
        this.data.fanMode = bp.entries[0].v;

        this._FIREPropertyChange('FanMode', bp);

        break;

      case 65:
        this.data.IOMode = bp.entries[0].v;

        this._FIREPropertyChange('IOMode', bp);

        break;

      case 136:
        this.data.kd = bp.entries[0].v;

        this._FIREPropertyChange('Kd', bp);

        break;

      case 142:
        this.data.ki = bp.entries[0].v;

        this._FIREPropertyChange('Ki', bp);

        break;

      case 135:
        this.data.kp = bp.entries[0].v;

        this._FIREPropertyChange('Kp', bp);

        break;

      case 147:
        break;

      case 141:
        this.data.stallVelocity = bp.entries[0].v;

        this._FIREPropertyChange('StallVelocity', bp);

        break;

      case 44:
        this.data.targetBrakingStrength = bp.entries[0].v;

        this._FIREPropertyChange('TargetBrakingStrength', bp);

        break;

      case 83:
        this.data.targetPosition = bp.entries[0].v;

        this._FIREPropertyChange('TargetPosition', bp);

        break;

      case 55:
        this.data.velocityLimit = bp.entries[0].v;

        this._FIREPropertyChange('VelocityLimit', bp);

        break;

      case 16:
        {
          this.data.dutyCycle = bp.entries[0].v;

          if (this._isAttachedDone && this.onDutyCycleUpdate) {
            try {
              this.onDutyCycleUpdate(this.data.dutyCycle);
            } catch (err) {
              logEventException(err);
            }
          }

          break;
        }

      default:
        throw new PhidgetError(ErrorCode.INVALID_PACKET, "Unsupported bridge packet: 0x" + bp.vpkt.toString(16));
    }
  }
  /** @internal */


  _initData() {
    return {
      positionOffset: 0,
      dataInterval: 1e+300,
      minDataInterval: 4294967295,
      maxDataInterval: 4294967295,
      minDataRate: 1e+300,
      maxDataRate: 1e+300,
      currentLimit: 1e+300,
      maxCurrentLimit: 1e+300,
      minCurrentLimit: 1e+300,
      currentRegulatorGain: 1e+300,
      dutyCycle: 1e+300,
      engaged: 2,
      maxCurrentRegulatorGain: 1e+300,
      minCurrentRegulatorGain: 1e+300,
      velocityLimit: 1e+300,
      minVelocityLimit: 1e+300,
      maxVelocityLimit: 1e+300,
      maxAcceleration: 1e+300,
      minAcceleration: 1e+300,
      acceleration: 1e+300,
      targetPosition: 9223372036854776000,
      position: 9223372036854776000,
      maxPosition: 9223372036854776000,
      minPosition: 9223372036854776000,
      rescaleFactor: 1e+300,
      fanMode: 2147483647,
      deadBand: 4294967295,
      kp: 1e+300,
      kd: 1e+300,
      ki: 1e+300,
      IOMode: 2147483647,
      stallVelocity: 1e+300,
      minStallVelocity: 1e+300,
      maxStallVelocity: 1e+300,
      maxFailsafeTime: 4294967295,
      minFailsafeTime: 4294967295,
      targetBrakingStrength: 1e+300,
      maxBrakingStrength: 1e+300,
      minBrakingStrength: 1e+300
    };
  }
  /** @internal */


  _initAfterOpen() {}
  /** @internal */


  async _setDefaults() {}
  /** @internal */


  _hasInitialState() {
    return true;
  }
  /** @internal */


  _fireInitialEvents() {}
  /**
   * The rate at which the controller can change the motor's velocity.
   *
   * *   Units for `position`, `velocityLimit`, `acceleration`, and `deadBand` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * @throws {@link PhidgetError}
   */


  get acceleration() {
    return this.getAcceleration();
  }
  /**
   * The minimum value that `acceleration` can be set to.
   *
   * *   Units for `position`, `velocityLimit`, `acceleration`, and `deadBand` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * @throws {@link PhidgetError}
   */


  get minAcceleration() {
    return this.getMinAcceleration();
  }
  /**
   * The maximum value that `acceleration` can be set to.
   *
   * *   Units for `position`, `velocityLimit`, `acceleration`, and `deadBand` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * @throws {@link PhidgetError}
   */


  get maxAcceleration() {
    return this.getMaxAcceleration();
  }
  /**
   * The minimum value that `targetBrakingStrength` can be set to. See `targetBrakingStrength` for details.
   * @throws {@link PhidgetError}
   */


  get minBrakingStrength() {
    return this.getMinBrakingStrength();
  }
  /**
   * The maximum value that `targetBrakingStrength` can be set to. See `targetBrakingStrength` for details.
   * @throws {@link PhidgetError}
   */


  get maxBrakingStrength() {
    return this.getMaxBrakingStrength();
  }
  /**
   * The controller will limit the current through the motor to this value.
   * @throws {@link PhidgetError}
   */


  get currentLimit() {
    return this.getCurrentLimit();
  }
  /**
   * The minimum current limit that can be set for the device.
   * @throws {@link PhidgetError}
   */


  get minCurrentLimit() {
    return this.getMinCurrentLimit();
  }
  /**
   * The maximum current limit that can be set for the device.
   * @throws {@link PhidgetError}
   */


  get maxCurrentLimit() {
    return this.getMaxCurrentLimit();
  }
  /**
   * Depending on power supply voltage and motor coil inductance, current through the motor can change relatively slowly or extremely rapidly. A physically larger DC Motor will typically have a lower inductance, requiring a higher current regulator gain. A higher power supply voltage will result in motor current changing more rapidly, requiring a higher current regulator gain. If the current regulator gain is too small, spikes in current will occur, causing large variations in torque, and possibly damaging the motor controller. If the current regulator gain is too high, the current will jitter, causing the motor to sound 'rough', especially when changing directions. Each DC Motor we sell specifies a suitable current regulator gain.
   * @throws {@link PhidgetError}
   */


  get currentRegulatorGain() {
    return this.getCurrentRegulatorGain();
  }
  /**
   * The minimum current regulator gain for the device.
   * @throws {@link PhidgetError}
   */


  get minCurrentRegulatorGain() {
    return this.getMinCurrentRegulatorGain();
  }
  /**
   * The maximum current regulator gain for the device.
   * @throws {@link PhidgetError}
   */


  get maxCurrentRegulatorGain() {
    return this.getMaxCurrentRegulatorGain();
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `PositionChange` / `DutyCycleUpdate` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * @throws {@link PhidgetError}
   */


  get dataInterval() {
    return this.getDataInterval();
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataInterval() {
    return this.getMinDataInterval();
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataInterval() {
    return this.getMaxDataInterval();
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */


  get dataRate() {
    return this.getDataRate();
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataRate() {
    return this.getMinDataRate();
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataRate() {
    return this.getMaxDataRate();
  }
  /**
   * Depending on your system, it may not be possible to bring the position error (`targetPosition` - `position`) to zero. A small error can lead to the motor continually 'hunting' for a target position, which can cause unwanted effects. By setting a non-zero `deadBand`, the position controller will relax control of the motor within the deadband, preventing the 'hunting' behavior.
   *
   * *   Units for `position`, `velocityLimit`, `acceleration`, and `deadBand` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * @throws {@link PhidgetError}
   */


  get deadBand() {
    return this.getDeadBand();
  }
  /**
   * The most recent duty cycle value that the controller has reported.
   *
   * *   This value will be between -1 and 1 where a sign change (±) is indicitave of a direction change.
   * *   Note that `dutyCycle` is merely an indication of the average voltage across the motor. At a constant load, an increase in `dutyCycle` indicates an increase in motor speed.
   * *   The units of `dutyCycle` refer to 'duty cycle'. This is because the controller must rapidly switch the power on/off (i.e. change the duty cycle) in order to manipulate the voltage across the motor.
   * @throws {@link PhidgetError}
   */


  get dutyCycle() {
    return this.getDutyCycle();
  }
  /**
   * When engaged, a motor has the ability to be positioned. When disengaged, no commands are sent to the motor.
   *
   * *   This function is useful for completely relaxing a motor once it has reached the target position.
   * @throws {@link PhidgetError}
   */


  get engaged() {
    return this.getEngaged();
  }
  /**
   * The minimum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @throws {@link PhidgetError}
   */


  get minFailsafeTime() {
    return this.getMinFailsafeTime();
  }
  /**
   * The maximum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @throws {@link PhidgetError}
   */


  get maxFailsafeTime() {
    return this.getMaxFailsafeTime();
  }
  /**
   * The `fanMode` dictates the operating condition of the fan.
   *
   * *   Choose between on, off, or automatic (based on temperature).
   * *   If the `fanMode` is set to automatic, the fan will turn on when the temperature reaches 70°C and it will remain on until the temperature falls below 55°C.
   * *   If the `fanMode` is off, the controller will still turn on the fan if the temperature reaches 85°C and it will remain on until it falls below 70°C.
   * @throws {@link PhidgetError}
   */


  get fanMode() {
    return this.getFanMode();
  }
  /**
   * The encoder interface mode. Match the mode to the type of encoder you have attached.
   *
   * *   It is recommended to only change this when the encoder disabled in order to avoid unexpected results.
   * @throws {@link PhidgetError}
   */


  get IOMode() {
    return this.getIOMode();
  }
  /**
   * Derivative gain constant. A higher `kd` will help reduce oscillations.
   * @throws {@link PhidgetError}
   */


  get kd() {
    return this.getKd();
  }
  /**
   * Integral gain constant. The integral term will help eliminate steady-state error.
   * @throws {@link PhidgetError}
   */


  get ki() {
    return this.getKi();
  }
  /**
   * Proportional gain constant. A small `kp` value will result in a less responsive controller, however, if `kp` is too high, the system can become unstable.
   * @throws {@link PhidgetError}
   */


  get kp() {
    return this.getKp();
  }
  /**
   * The most recent position value that the controller has reported.
   *
   * *   This value will always be between `minPosition` and `maxPosition`.
   * *   Units for `position`, `velocityLimit`, `acceleration`, and `deadBand` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * @throws {@link PhidgetError}
   */


  get position() {
    return this.getPosition();
  }
  /**
   * The minimum value that `targetPosition` can be set to.
   *
   * *   Units for `position`, `velocityLimit`, `acceleration`, and `deadBand` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * @throws {@link PhidgetError}
   */


  get minPosition() {
    return this.getMinPosition();
  }
  /**
   * The maximum value that `targetPosition` can be set to.
   *
   * *   Units for `position`, `velocityLimit`, `acceleration`, and `deadBand` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * @throws {@link PhidgetError}
   */


  get maxPosition() {
    return this.getMaxPosition();
  }
  /**
   * Change the units of your parameters so that your application is more intuitive.
   *
   * *   Units for `position`, `velocityLimit`, `acceleration`, and `deadBand` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * @throws {@link PhidgetError}
   */


  get rescaleFactor() {
    return this.getRescaleFactor();
  }

  set rescaleFactor(rescaleFactor) {
    this.setRescaleFactor(rescaleFactor);
  }
  /**
   * Before reading this description, it is important to note the difference between the units of `stallVelocity` and `dutyCycle`.
   *
   * *   `dutyCycle` is a number between -1 and 1 with units of 'duty cycle'. It simply represents the average voltage across the motor.
   * *   `stallVelocity` represents a real velocity (e.g. m/s, RPM, etc.) and the units are determined by the `rescaleFactor`. With a `rescaleFactor` of 1, the default units would be in commutations per second.
   *
   * If the load on your motor is large, your motor may begin rotating more slowly, or even fully stall. Depending on the voltage across your motor, this may result in a large amount of current through both the controller and the motor. In order to prevent damage in these situations, you can use the `stallVelocity` property.
   *
   * The `stallVelocity` should be set to the lowest velocity you would expect from your motor. The controller will then monitor the motor's velocity, as well as the `dutyCycle`, and prevent a 'dangerous stall' from occuring. If the controller detects a dangerous stall, it will immediately disengage the motor (i.e. `engaged` will be set to false) and an error will be reported to your program.
   *
   * *   A 'dangerous stall' will occur faster when the `dutyCycle` is higher (i.e. when the average voltage across the motor is higher)
   * *   A 'dangerous stall' will occur faster as (`stallVelocity` - motor velocity) becomes larger .
   *
   * Setting `stallVelocity` to 0 will turn off stall protection functionality.
   * @throws {@link PhidgetError}
   */


  get stallVelocity() {
    return this.getStallVelocity();
  }
  /**
   * The lower bound of `stallVelocity`.
   * @throws {@link PhidgetError}
   */


  get minStallVelocity() {
    return this.getMinStallVelocity();
  }
  /**
   * The upper bound of `stallVelocity`.
   * @throws {@link PhidgetError}
   */


  get maxStallVelocity() {
    return this.getMaxStallVelocity();
  }
  /**
   * This setting allows you to choose how hard the motor will resist being turned when it is not being driven forward or reverse. The `targetBrakingStrength` sets the relative amount of electrical braking to be applied to the DC motor, with `minBrakingStrength` corresponding to no braking (free-wheeling), and `maxBrakingStrength` indicating full braking.
   *
   * *   A low `targetBrakingStrength` value corresponds to free-wheeling. This means:
   *     *   The motor will continue to rotate after the controller is no longer driving the motor, due to its momentum.
   *     *   The motor shaft will provide little resistance to being turned when it is stopped.
   * *   As `targetBrakingStrength` increases, this will engage electrical braking of the DC motor. This means:
   *     *   The motor will stop more quickly if it is in motion when braking is requested.
   *     *   The motor shaft will resist rotation by outside forces.
   * *   This braking will only be applied during Failsafe and Emergency Stop conditions.
   * @throws {@link PhidgetError}
   */


  get targetBrakingStrength() {
    return this.getTargetBrakingStrength();
  }
  /**
   * If the controller is configured and the `targetPosition` is set, the motor will try to reach the `targetPosition`.
   *
   * *   If the `deadBand` is non-zero, the final position of the motor may not match the `targetPosition`
   * *   Units for `position`, `velocityLimit`, `acceleration`, and `deadBand` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * @throws {@link PhidgetError}
   */


  get targetPosition() {
    return this.getTargetPosition();
  }
  /**
   * When moving, the motor velocity will be limited by this value.
   *
   * *   `velocityLimit` is bounded by `minVelocityLimit` and `maxVelocityLimit`.
   * *   Units for `position`, `velocityLimit`, `acceleration`, and `deadBand` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * @throws {@link PhidgetError}
   */


  get velocityLimit() {
    return this.getVelocityLimit();
  }
  /**
   * The minimum value that `velocityLimit` can be set to.
   *
   * *   Units for `position`, `velocityLimit`, `acceleration`, and `deadBand` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * @throws {@link PhidgetError}
   */


  get minVelocityLimit() {
    return this.getMinVelocityLimit();
  }
  /**
   * The maximum value that `velocityLimit` can be set to.
   *
   * *   Units for `position`, `velocityLimit`, `acceleration`, and `deadBand` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * @throws {@link PhidgetError}
   */


  get maxVelocityLimit() {
    return this.getMaxVelocityLimit();
  }
  /**
   * The minimum value that `targetBrakingStrength` can be set to. See `targetBrakingStrength` for details.
   * @returns The braking strength value
   * @throws {@link PhidgetError}
   */


  getMinBrakingStrength() {
    this._assertOpen();

    if (this.data.minBrakingStrength === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minBrakingStrength;
  }
  /**
   * The maximum value that `targetBrakingStrength` can be set to. See `targetBrakingStrength` for details.
   * @returns The braking strength value
   * @throws {@link PhidgetError}
   */


  getMaxBrakingStrength() {
    this._assertOpen();

    if (this.data.maxBrakingStrength === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxBrakingStrength;
  }
  /**
   * The controller will limit the current through the motor to this value.
   * @returns Motor current limit
   * @throws {@link PhidgetError}
   */


  getCurrentLimit() {
    this._assertOpen();

    if (this.data.currentLimit === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.currentLimit;
  }
  /**
   * The controller will limit the current through the motor to this value.
   * @throws {@link PhidgetError}
   * @param currentLimit - Motor current limit
   */


  async setCurrentLimit(currentLimit) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: currentLimit
    });
    await bp.send(this._ch, 51);
  }
  /**
   * The minimum current limit that can be set for the device.
   * @returns Minimum current limit
   * @throws {@link PhidgetError}
   */


  getMinCurrentLimit() {
    this._assertOpen();

    if (this.data.minCurrentLimit === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minCurrentLimit;
  }
  /**
   * The maximum current limit that can be set for the device.
   * @returns Maximum current limit
   * @throws {@link PhidgetError}
   */


  getMaxCurrentLimit() {
    this._assertOpen();

    if (this.data.maxCurrentLimit === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxCurrentLimit;
  }
  /**
   * Depending on power supply voltage and motor coil inductance, current through the motor can change relatively slowly or extremely rapidly. A physically larger DC Motor will typically have a lower inductance, requiring a higher current regulator gain. A higher power supply voltage will result in motor current changing more rapidly, requiring a higher current regulator gain. If the current regulator gain is too small, spikes in current will occur, causing large variations in torque, and possibly damaging the motor controller. If the current regulator gain is too high, the current will jitter, causing the motor to sound 'rough', especially when changing directions. Each DC Motor we sell specifies a suitable current regulator gain.
   * @returns Current Regulator Gain
   * @throws {@link PhidgetError}
   */


  getCurrentRegulatorGain() {
    this._assertOpen();

    if (this.data.currentRegulatorGain === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.currentRegulatorGain;
  }
  /**
   * Depending on power supply voltage and motor coil inductance, current through the motor can change relatively slowly or extremely rapidly. A physically larger DC Motor will typically have a lower inductance, requiring a higher current regulator gain. A higher power supply voltage will result in motor current changing more rapidly, requiring a higher current regulator gain. If the current regulator gain is too small, spikes in current will occur, causing large variations in torque, and possibly damaging the motor controller. If the current regulator gain is too high, the current will jitter, causing the motor to sound 'rough', especially when changing directions. Each DC Motor we sell specifies a suitable current regulator gain.
   * @throws {@link PhidgetError}
   * @param currentRegulatorGain - Current Regulator Gain
   */


  async setCurrentRegulatorGain(currentRegulatorGain) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: currentRegulatorGain
    });
    await bp.send(this._ch, 119);
  }
  /**
   * The minimum current regulator gain for the device.
   * @returns Minimum current regulator gain
   * @throws {@link PhidgetError}
   */


  getMinCurrentRegulatorGain() {
    this._assertOpen();

    if (this.data.minCurrentRegulatorGain === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minCurrentRegulatorGain;
  }
  /**
   * The maximum current regulator gain for the device.
   * @returns Maximum current regulator gain
   * @throws {@link PhidgetError}
   */


  getMaxCurrentRegulatorGain() {
    this._assertOpen();

    if (this.data.maxCurrentRegulatorGain === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxCurrentRegulatorGain;
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `PositionChange` / `DutyCycleUpdate` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getDataInterval() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.dataInterval;
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `PositionChange` / `DutyCycleUpdate` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */


  async setDataInterval(dataInterval) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: dataInterval
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getMinDataInterval() {
    this._assertOpen();

    if (this.data.minDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataInterval;
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getMaxDataInterval() {
    this._assertOpen();

    if (this.data.maxDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */


  getDataRate() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return 1000.0 / this.data.dataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */


  async setDataRate(dataRate) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: Math.round(1000.0 / dataRate)
    });
    bp.set({
      name: "1",
      type: "g",
      value: 1000.0 / dataRate
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMinDataRate() {
    this._assertOpen();

    if (this.data.minDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataRate;
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMaxDataRate() {
    this._assertOpen();

    if (this.data.maxDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataRate;
  }
  /**
   * The most recent duty cycle value that the controller has reported.
   *
   * *   This value will be between -1 and 1 where a sign change (±) is indicitave of a direction change.
   * *   Note that `dutyCycle` is merely an indication of the average voltage across the motor. At a constant load, an increase in `dutyCycle` indicates an increase in motor speed.
   * *   The units of `dutyCycle` refer to 'duty cycle'. This is because the controller must rapidly switch the power on/off (i.e. change the duty cycle) in order to manipulate the voltage across the motor.
   * @returns The duty cycle value.
   * @throws {@link PhidgetError}
   */


  getDutyCycle() {
    this._assertOpen();

    if (this.data.dutyCycle === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.dutyCycle;
  }
  /**
   * When engaged, a motor has the ability to be positioned. When disengaged, no commands are sent to the motor.
   *
   * *   This function is useful for completely relaxing a motor once it has reached the target position.
   * @returns The engaged value.
   * @throws {@link PhidgetError}
   */


  getEngaged() {
    this._assertOpen();

    if (this.data.engaged === 2) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return !!this.data.engaged;
  }
  /**
   * When engaged, a motor has the ability to be positioned. When disengaged, no commands are sent to the motor.
   *
   * *   This function is useful for completely relaxing a motor once it has reached the target position.
   * @throws {@link PhidgetError}
   * @param engaged - The engaged value.
   */


  async setEngaged(engaged) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: engaged ? 1 : 0
    });
    await bp.send(this._ch, 57);
  }
  /**
   * Enables the **failsafe** feature for the channel, with a given **failsafe time**.
   *
   * The **failsafe** feature is intended for use in applications where it is important for the channel to enter a known _safe state_ if the program controlling it locks up or crashes. If you do not enable the failsafe feature, the channel will carry out whatever instructions it was last given until it is explicitly told to stop.
   *
   * Enabling the failsafe feature starts a recurring **failsafe timer** for the channel. Once the failsafe timer is enabled, it must be reset within the specified time or the channel will enter a **failsafe state**. The failsafe timer may be reset by sending any valid command to the device\*. Resetting the failsafe timer will reload the timer with the specified _failsafe time_, starting when the message to reset the timer is received by the Phidget.
   *
   * _\*(**get** requests do not typically send commands and won't reset the failsafe timer)_
   *
   * For example: if the failsafe is enabled with a **failsafe time** of 1000ms, you will have 1000ms to reset the failsafe timer. Every time the failsafe timer is reset, you will have 1000ms from that time to reset the failsafe again.
   *
   * If the failsafe timer is not reset before it runs out, the channel will enter a **failsafe state**. For Motor Position Controller channels, this will disengage the motor. Once the channel enters the **failsafe state**, it will reject any further input until the channel is reopened.
   *
   * To prevent the channel from falsely entering the failsafe state, we recommend resetting the failsafe timer as frequently as is practical for your application. A good rule of thumb is to not let more than a third of the failsafe time pass before resetting the timer.
   *
   * Once the failsafe timer has been set, it cannot be disabled by any means other than closing and reopening the channel.
   * @throws {@link PhidgetError}
   * @param failsafeTime - Failsafe timeout in milliseconds
   */


  async enableFailsafe(failsafeTime) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: failsafeTime
    });
    await bp.send(this._ch, 146);
  }
  /**
   * The minimum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @returns The failsafe time
   * @throws {@link PhidgetError}
   */


  getMinFailsafeTime() {
    this._assertOpen();

    if (this.data.minFailsafeTime === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minFailsafeTime;
  }
  /**
   * The maximum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @returns The failsafe time
   * @throws {@link PhidgetError}
   */


  getMaxFailsafeTime() {
    this._assertOpen();

    if (this.data.maxFailsafeTime === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxFailsafeTime;
  }
  /**
   * The `fanMode` dictates the operating condition of the fan.
   *
   * *   Choose between on, off, or automatic (based on temperature).
   * *   If the `fanMode` is set to automatic, the fan will turn on when the temperature reaches 70°C and it will remain on until the temperature falls below 55°C.
   * *   If the `fanMode` is off, the controller will still turn on the fan if the temperature reaches 85°C and it will remain on until it falls below 70°C.
   * @returns The fan mode
   * @throws {@link PhidgetError}
   */


  getFanMode() {
    this._assertOpen();

    if (this.data.fanMode === 2147483647) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.fanMode;
  }
  /**
   * The `fanMode` dictates the operating condition of the fan.
   *
   * *   Choose between on, off, or automatic (based on temperature).
   * *   If the `fanMode` is set to automatic, the fan will turn on when the temperature reaches 70°C and it will remain on until the temperature falls below 55°C.
   * *   If the `fanMode` is off, the controller will still turn on the fan if the temperature reaches 85°C and it will remain on until it falls below 70°C.
   * @throws {@link PhidgetError}
   * @param fanMode - The fan mode
   */


  async setFanMode(fanMode) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: fanMode
    });
    await bp.send(this._ch, 58);
  }
  /**
   * The encoder interface mode. Match the mode to the type of encoder you have attached.
   *
   * *   It is recommended to only change this when the encoder disabled in order to avoid unexpected results.
   * @returns The IO mode value.
   * @throws {@link PhidgetError}
   */


  getIOMode() {
    this._assertOpen();

    if (this.data.IOMode === 2147483647) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.IOMode;
  }
  /**
   * The encoder interface mode. Match the mode to the type of encoder you have attached.
   *
   * *   It is recommended to only change this when the encoder disabled in order to avoid unexpected results.
   * @throws {@link PhidgetError}
   * @param IOMode - The IO mode value.
   */


  async setIOMode(IOMode) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: IOMode
    });
    await bp.send(this._ch, 65);
  }
  /**
   * Change the units of your parameters so that your application is more intuitive.
   *
   * *   Units for `position`, `velocityLimit`, `acceleration`, and `deadBand` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * @returns The rescale factor value
   * @throws {@link PhidgetError}
   */


  getRescaleFactor() {
    this._assertOpen();

    if (this.data.rescaleFactor === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.rescaleFactor;
  }
  /**
   * Resets the failsafe timer, if one has been set. See `enableFailsafe()` for details.
   *
   * This function will fail if no failsafe timer has been set for the channel.
   * @throws {@link PhidgetError}
   */


  async resetFailsafe() {
    this._assertOpen();

    const bp = new BridgePacket();
    await bp.send(this._ch, 147);
  }
  /**
   * This setting allows you to choose how hard the motor will resist being turned when it is not being driven forward or reverse. The `targetBrakingStrength` sets the relative amount of electrical braking to be applied to the DC motor, with `minBrakingStrength` corresponding to no braking (free-wheeling), and `maxBrakingStrength` indicating full braking.
   *
   * *   A low `targetBrakingStrength` value corresponds to free-wheeling. This means:
   *     *   The motor will continue to rotate after the controller is no longer driving the motor, due to its momentum.
   *     *   The motor shaft will provide little resistance to being turned when it is stopped.
   * *   As `targetBrakingStrength` increases, this will engage electrical braking of the DC motor. This means:
   *     *   The motor will stop more quickly if it is in motion when braking is requested.
   *     *   The motor shaft will resist rotation by outside forces.
   * *   This braking will only be applied during Failsafe and Emergency Stop conditions.
   * @returns The braking strength value
   * @throws {@link PhidgetError}
   */


  getTargetBrakingStrength() {
    this._assertOpen();

    if (this.data.targetBrakingStrength === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.targetBrakingStrength;
  }
  /**
   * This setting allows you to choose how hard the motor will resist being turned when it is not being driven forward or reverse. The `targetBrakingStrength` sets the relative amount of electrical braking to be applied to the DC motor, with `minBrakingStrength` corresponding to no braking (free-wheeling), and `maxBrakingStrength` indicating full braking.
   *
   * *   A low `targetBrakingStrength` value corresponds to free-wheeling. This means:
   *     *   The motor will continue to rotate after the controller is no longer driving the motor, due to its momentum.
   *     *   The motor shaft will provide little resistance to being turned when it is stopped.
   * *   As `targetBrakingStrength` increases, this will engage electrical braking of the DC motor. This means:
   *     *   The motor will stop more quickly if it is in motion when braking is requested.
   *     *   The motor shaft will resist rotation by outside forces.
   * *   This braking will only be applied during Failsafe and Emergency Stop conditions.
   * @throws {@link PhidgetError}
   * @param targetBrakingStrength - The braking strength value
   */


  async setTargetBrakingStrength(targetBrakingStrength) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: targetBrakingStrength
    });
    await bp.send(this._ch, 44);
  }

}

/** @public */

class MotorPositionController extends MotorPositionControllerBase {
  /** @internal */
  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 29:
        this.data.position = bp.getNumber(0);

        if (this._isAttachedDone && this.onPositionChange) {
          try {
            this.onPositionChange((this.data.position + this.data.positionOffset) * this.data.rescaleFactor);
          } catch (err) {
            logEventException(err);
          }
        }

        break;

      default:
        super._bridgeInput(bp);

        break;
    }
  }
  /** @internal */


  _errorHandler(code) {
    switch (code) {
      case ErrorEventCode.MOTOR_STALL_CONDITION:
        this.data.engaged = 0;
        break;
    }
  }

  getAcceleration() {
    this._assertOpen();

    if (this.data.acceleration === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.acceleration * Math.abs(this.data.rescaleFactor);
  }

  async setAcceleration(acceleration) {
    this._assertOpen();

    const calcAccel = acceleration / Math.abs(this.data.rescaleFactor);
    if (calcAccel < this.data.minAcceleration || calcAccel > this.data.maxAcceleration) throw new PhidgetError(ErrorCode.INVALID_ARGUMENT, "Value must be in range: " + this.minAcceleration + " - " + this.maxAcceleration + ".");
    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: calcAccel
    });
    await bp.send(this._ch, 40);
  }

  getMinAcceleration() {
    this._assertOpen();

    if (this.data.minAcceleration === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minAcceleration * Math.abs(this.data.rescaleFactor);
  }

  getMaxAcceleration() {
    this._assertOpen();

    if (this.data.maxAcceleration === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxAcceleration * Math.abs(this.data.rescaleFactor);
  }

  addPositionOffset(positionOffset) {
    this._assertOpen();

    this.data.positionOffset += positionOffset / this.data.rescaleFactor;
  }

  getDeadBand() {
    this._assertOpen();

    if (this.data.deadBand === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.deadBand * Math.abs(this.data.rescaleFactor);
  }

  async setDeadBand(deadBand) {
    this._assertOpen();

    const calcDeadband = deadBand / Math.abs(this.data.rescaleFactor);
    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: calcDeadband
    });
    await bp.send(this._ch, 120);
  }

  getPosition() {
    this._assertOpen();

    if (this.data.position === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return (this.data.position + this.data.positionOffset) * this.data.rescaleFactor;
  }

  getMinPosition() {
    this._assertOpen();

    if (this.data.minPosition === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return (this.data.minPosition + this.data.positionOffset) * Math.abs(this.data.rescaleFactor);
  }

  getMaxPosition() {
    this._assertOpen();

    if (this.data.maxPosition === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return (this.data.maxPosition + this.data.positionOffset) * Math.abs(this.data.rescaleFactor);
  }

  setRescaleFactor(rescaleFactor) {
    this._assertOpen();

    this.data.rescaleFactor = rescaleFactor;
  }

  getTargetPosition() {
    this._assertOpen();

    if (this.data.targetPosition === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return (this.data.targetPosition + this.data.positionOffset) * this.data.rescaleFactor;
  }

  async setTargetPosition(targetPosition) {
    this._assertOpen();

    const calcPosition = targetPosition / this.data.rescaleFactor - this.data.positionOffset;
    if (calcPosition < this.data.minPosition || calcPosition > this.data.maxPosition) throw new PhidgetError(ErrorCode.INVALID_ARGUMENT, "Value must be in range: " + this.minPosition + " - " + this.maxPosition + ".");
    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "l",
      value: calcPosition
    });
    await bp.send(this._ch, 83);
  }

  getVelocityLimit() {
    this._assertOpen();

    if (this.data.velocityLimit === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.velocityLimit * Math.abs(this.data.rescaleFactor);
  }

  getStallVelocity() {
    this._assertOpen();

    if (this.data.stallVelocity === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.stallVelocity * Math.abs(this.data.rescaleFactor);
  }

  async setStallVelocity(stallVelocity) {
    this._assertOpen();

    const calcVelocity = stallVelocity / Math.abs(this.data.rescaleFactor);
    if (calcVelocity < this.data.minStallVelocity || calcVelocity > this.data.maxStallVelocity) throw new PhidgetError(ErrorCode.INVALID_ARGUMENT, "Value must be in range: " + this.minStallVelocity + " - " + this.maxStallVelocity + ".");
    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: calcVelocity
    });
    await bp.send(this._ch, 141);
  }

  async setVelocityLimit(velocityLimit) {
    this._assertOpen();

    const calcLimit = velocityLimit / Math.abs(this.data.rescaleFactor);
    if (calcLimit < this.data.minVelocityLimit || calcLimit > this.data.maxVelocityLimit) throw new PhidgetError(ErrorCode.INVALID_ARGUMENT, "Value must be in range: " + this.minVelocityLimit + " - " + this.maxVelocityLimit + ".");
    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: calcLimit
    });
    await bp.send(this._ch, 55);
  }

  getMinStallVelocity() {
    this._assertOpen();

    if (this.data.minStallVelocity === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minStallVelocity * Math.abs(this.data.rescaleFactor);
  }

  getMaxStallVelocity() {
    this._assertOpen();

    if (this.data.maxStallVelocity === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxStallVelocity * Math.abs(this.data.rescaleFactor);
  }

  getMinVelocityLimit() {
    this._assertOpen();

    if (this.data.minVelocityLimit === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minVelocityLimit * Math.abs(this.data.rescaleFactor);
  }

  getMaxVelocityLimit() {
    this._assertOpen();

    if (this.data.maxVelocityLimit === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxVelocityLimit * Math.abs(this.data.rescaleFactor);
  }

  getKd() {
    this._assertOpen();

    if (this.data.kd === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);

    switch (this._ch.chDef.uid) {
      case 268:
        return this.data.kd / Math.abs(this.data.rescaleFactor);

      default:
        return this.data.kd;
    }
  }

  async setKd(kd) {
    this._assertOpen();

    const bp = new BridgePacket();

    switch (this._ch.chDef.uid) {
      case 268:
        bp.set({
          name: "0",
          type: "g",
          value: kd * Math.abs(this.data.rescaleFactor)
        });
        break;

      default:
        bp.set({
          name: "0",
          type: "g",
          value: kd
        });
        break;
    }

    await bp.send(this._ch, 136);
  }

  getKi() {
    this._assertOpen();

    if (this.data.ki === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);

    switch (this._ch.chDef.uid) {
      case 268:
        return this.data.ki / Math.abs(this.data.rescaleFactor);

      default:
        return this.data.ki;
    }
  }

  async setKi(ki) {
    this._assertOpen();

    const bp = new BridgePacket();

    switch (this._ch.chDef.uid) {
      case 268:
        bp.set({
          name: "0",
          type: "g",
          value: ki * Math.abs(this.data.rescaleFactor)
        });
        break;

      default:
        bp.set({
          name: "0",
          type: "g",
          value: ki
        });
        break;
    }

    await bp.send(this._ch, 142);
  }

  getKp() {
    this._assertOpen();

    if (this.data.kp === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);

    switch (this._ch.chDef.uid) {
      case 268:
        return this.data.kp / Math.abs(this.data.rescaleFactor);

      default:
        return this.data.kp;
    }
  }

  async setKp(kp) {
    this._assertOpen();

    const bp = new BridgePacket();

    switch (this._ch.chDef.uid) {
      case 268:
        bp.set({
          name: "0",
          type: "g",
          value: kp * Math.abs(this.data.rescaleFactor)
        });
        break;

      default:
        bp.set({
          name: "0",
          type: "g",
          value: kp
        });
        break;
    }

    await bp.send(this._ch, 135);
  }

}

class BLDCMotorBase extends PhidgetChannel {
  constructor(ch) {
    super(ch);
    this.onBrakingStrengthChange = null;
    this.onPositionChange = null;
    this.onVelocityUpdate = null;
    this._class = ChannelClass.BLDC_MOTOR;
    this.name = "BLDCMotor";
    this.data = this._initData();
  }
  /** @internal */


  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 40:
        this.data.acceleration = bp.entries[0].v;

        this._FIREPropertyChange('Acceleration', bp);

        break;

      case 51:
        this.data.currentLimit = bp.entries[0].v;

        this._FIREPropertyChange('CurrentLimit', bp);

        break;

      case 54:
        if (bp.entryCount > 1) this.data.dataInterval = bp.entries[1].v;else this.data.dataInterval = bp.entries[0].v;

        this._FIREPropertyChange('DataInterval', bp);

        this._FIREPropertyChange('DataRate', bp);

        break;

      case 146:
        break;

      case 147:
        break;

      case 141:
        this.data.stallVelocity = bp.entries[0].v;

        this._FIREPropertyChange('StallVelocity', bp);

        break;

      case 44:
        this.data.targetBrakingStrength = bp.entries[0].v;

        this._FIREPropertyChange('TargetBrakingStrength', bp);

        break;

      case 55:
        this.data.targetVelocity = bp.entries[0].v;

        this._FIREPropertyChange('TargetVelocity', bp);

        break;

      case 121:
        {
          this.data.brakingStrength = bp.entries[0].v;

          if (this._isAttachedDone && this.onBrakingStrengthChange) {
            try {
              this.onBrakingStrengthChange(this.data.brakingStrength);
            } catch (err) {
              logEventException(err);
            }
          }

          break;
        }

      case 16:
        {
          this.data.velocity = bp.entries[0].v;

          if (this._isAttachedDone && this.onVelocityUpdate) {
            try {
              this.onVelocityUpdate(this.data.velocity);
            } catch (err) {
              logEventException(err);
            }
          }

          break;
        }

      default:
        throw new PhidgetError(ErrorCode.INVALID_PACKET, "Unsupported bridge packet: 0x" + bp.vpkt.toString(16));
    }
  }
  /** @internal */


  _initData() {
    return {
      positionOffset: 0,
      dataInterval: 1e+300,
      minDataInterval: 4294967295,
      maxDataInterval: 4294967295,
      minDataRate: 1e+300,
      maxDataRate: 1e+300,
      currentLimit: 1e+300,
      maxCurrentLimit: 1e+300,
      minCurrentLimit: 1e+300,
      acceleration: 1e+300,
      targetBrakingStrength: 1e+300,
      maxAcceleration: 1e+300,
      maxBrakingStrength: 1e+300,
      maxVelocity: 1e+300,
      maxPosition: 9223372036854776000,
      minVelocity: 1e+300,
      minAcceleration: 1e+300,
      minBrakingStrength: 1e+300,
      minPosition: 9223372036854776000,
      position: 9223372036854776000,
      rescaleFactor: 1e+300,
      targetVelocity: 1e+300,
      velocity: 1e+300,
      brakingStrength: 1e+300,
      stallVelocity: 1e+300,
      minStallVelocity: 1e+300,
      maxStallVelocity: 1e+300,
      maxFailsafeTime: 4294967295,
      minFailsafeTime: 4294967295
    };
  }
  /** @internal */


  _initAfterOpen() {}
  /** @internal */


  async _setDefaults() {}
  /** @internal */


  _hasInitialState() {
    return true;
  }
  /** @internal */


  _fireInitialEvents() {}
  /**
   * The rate at which the controller can change the motor's `velocity`.
   *
   * *   The acceleration is bounded by `minAcceleration` and `maxAcceleration`
   * @throws {@link PhidgetError}
   */


  get acceleration() {
    return this.getAcceleration();
  }
  /**
   * The minimum value that `acceleration` can be set to.
   * @throws {@link PhidgetError}
   */


  get minAcceleration() {
    return this.getMinAcceleration();
  }
  /**
   * The maximum value that `acceleration` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxAcceleration() {
    return this.getMaxAcceleration();
  }
  /**
   * The most recent braking strength value that the controller has reported.
   * @throws {@link PhidgetError}
   */


  get brakingStrength() {
    return this.getBrakingStrength();
  }
  /**
   * The minimum value that `targetBrakingStrength` can be set to.
   * @throws {@link PhidgetError}
   */


  get minBrakingStrength() {
    return this.getMinBrakingStrength();
  }
  /**
   * The maximum value that `targetBrakingStrength` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxBrakingStrength() {
    return this.getMaxBrakingStrength();
  }
  /**
   * The controller will limit the current through the motor to the `currentLimit` value.
   * @throws {@link PhidgetError}
   */


  get currentLimit() {
    return this.getCurrentLimit();
  }
  /**
   * The minimum value that `currentLimit` can be set to.
   * @throws {@link PhidgetError}
   */


  get minCurrentLimit() {
    return this.getMinCurrentLimit();
  }
  /**
   * The maximum value that `currentLimit` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxCurrentLimit() {
    return this.getMaxCurrentLimit();
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `VelocityUpdate` / `PositionChange` / `BrakingStrengthChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * @throws {@link PhidgetError}
   */


  get dataInterval() {
    return this.getDataInterval();
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataInterval() {
    return this.getMinDataInterval();
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataInterval() {
    return this.getMaxDataInterval();
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */


  get dataRate() {
    return this.getDataRate();
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataRate() {
    return this.getMinDataRate();
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataRate() {
    return this.getMaxDataRate();
  }
  /**
   * The minimum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @throws {@link PhidgetError}
   */


  get minFailsafeTime() {
    return this.getMinFailsafeTime();
  }
  /**
   * The maximum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @throws {@link PhidgetError}
   */


  get maxFailsafeTime() {
    return this.getMaxFailsafeTime();
  }
  /**
   * The most recent position value that the controller has reported.
   *
   * *   Position values are calculated using Hall Effect sensors mounted on the motor, therefore, the resolution of position depends on the motor you are using.
   * *   Units for `position` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees. For more information on how to apply the `rescaleFactor` to your application, see your controller's User Guide.
   * @throws {@link PhidgetError}
   */


  get position() {
    return this.getPosition();
  }
  /**
   * The lower bound of `position`.
   * @throws {@link PhidgetError}
   */


  get minPosition() {
    return this.getMinPosition();
  }
  /**
   * The upper bound of `position`.
   * @throws {@link PhidgetError}
   */


  get maxPosition() {
    return this.getMaxPosition();
  }
  /**
   * Change the units of your parameters so that your application is more intuitive.
   *
   * *   Units for `position` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees. For more information on how to apply the `rescaleFactor` to your application, see your controller's User Guide.
   * @throws {@link PhidgetError}
   */


  get rescaleFactor() {
    return this.getRescaleFactor();
  }

  set rescaleFactor(rescaleFactor) {
    this.setRescaleFactor(rescaleFactor);
  }
  /**
   * Before reading this description, it is important to note the difference between the units of `stallVelocity` and `velocity`.
   *
   * *   `velocity` is a number between -1 and 1 with units of 'duty cycle'. It simply represents the average voltage across the motor.
   * *   `stallVelocity` represents a real velocity (e.g. m/s, RPM, etc.) and the units are determined by the `rescaleFactor`. With a `rescaleFactor` of 1, the default units would be in commutations per second.
   *
   * If the load on your motor is large, your motor may begin rotating more slowly, or even fully stall. Depending on the voltage across your motor, this may result in a large amount of current through both the controller and the motor. In order to prevent damage in these situations, you can use the `stallVelocity` property.
   *
   * The `stallVelocity` should be set to the lowest velocity you would expect from your motor. The controller will then monitor the motor's velocity, as well as the `velocity`, and prevent a 'dangerous stall' from occuring. If the controller detects a dangerous stall, it will immediately reduce the `velocity` (i.e. average voltage) to 0 and an error will be reported to your program.
   *
   * *   A 'dangerous stall' will occur faster when the `velocity` is higher (i.e. when the average voltage across the motor is higher)
   * *   A 'dangerous stall' will occur faster as (`stallVelocity` - motor velocity) becomes larger .
   *
   * Setting `stallVelocity` to 0 will turn off stall protection functionality.
   * @throws {@link PhidgetError}
   */


  get stallVelocity() {
    return this.getStallVelocity();
  }
  /**
   * The lower bound of `stallVelocity`.
   * @throws {@link PhidgetError}
   */


  get minStallVelocity() {
    return this.getMinStallVelocity();
  }
  /**
   * The upper bound of `stallVelocity`.
   * @throws {@link PhidgetError}
   */


  get maxStallVelocity() {
    return this.getMaxStallVelocity();
  }
  /**
   * When a motor is not being actively driven forward or reverse, you can choose if the motor will be allowed to freely turn, or will resist being turned.
   *
   * *   A low `targetBrakingStrength` value corresponds to free wheeling, this will have the following effects:
   *     *   The motor will continue to rotate after the controller is no longer driving the motor (i.e. `velocity` is 0), due to inertia.
   *     *   The motor shaft will provide little resistance to being turned when it is stopped.
   * *   A higher `targetBrakingStrength` value will resist being turned, this will have the following effects:
   *     *   The motor will more stop more quickly if it is in motion and braking has been requested. It will fight against the rotation of the shaft.
   * *   Braking mode is enabled by setting the `velocity` to `minVelocity`
   * @throws {@link PhidgetError}
   */


  get targetBrakingStrength() {
    return this.getTargetBrakingStrength();
  }
  /**
   * The average voltage across the motor is based on the `targetVelocity` value.
   *
   * *   At a constant load, increasing the target velocity will increase the speed of the motor.
   * *   `targetVelocity` is bounded by -`maxVelocity` and +`maxVelocity`, where a sign change (±) is indicitave of a direction change.
   * *   Setting `targetVelocity` to `minVelocity` will stop the motor. See `targetBrakingStrength` for more information on stopping the motor.
   * *   The units of `targetVelocity` and `acceleration` refer to 'duty cycle'. This is because the controller must rapidly switch the power on/off (i.e. change the duty cycle) in order to manipulate the voltage across the motor.
   * @throws {@link PhidgetError}
   */


  get targetVelocity() {
    return this.getTargetVelocity();
  }
  /**
   * The most recent velocity value that the controller has reported.
   * @throws {@link PhidgetError}
   */


  get velocity() {
    return this.getVelocity();
  }
  /**
   * The minimum value that `targetVelocity` can be set to.
   *
   * *   Set the `targetVelocity` to `minVelocity` to stop the motor. See `targetBrakingStrength` for more information on stopping the motor.
   * *   `targetVelocity` is bounded by -`maxVelocity` and +`maxVelocity`, where a sign change (±) is indicitave of a direction change.
   * @throws {@link PhidgetError}
   */


  get minVelocity() {
    return this.getMinVelocity();
  }
  /**
   * The maximum value that `targetVelocity` can be set to.
   *
   * *   `targetVelocity` is bounded by -`maxVelocity` and +`maxVelocity`, where a sign change (±) is indicitave of a direction change.
   * @throws {@link PhidgetError}
   */


  get maxVelocity() {
    return this.getMaxVelocity();
  }
  /**
   * The rate at which the controller can change the motor's `velocity`.
   *
   * *   The acceleration is bounded by `minAcceleration` and `maxAcceleration`
   * @returns The acceleration value
   * @throws {@link PhidgetError}
   */


  getAcceleration() {
    this._assertOpen();

    if (this.data.acceleration === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.acceleration;
  }
  /**
   * The rate at which the controller can change the motor's `velocity`.
   *
   * *   The acceleration is bounded by `minAcceleration` and `maxAcceleration`
   * @throws {@link PhidgetError}
   * @param acceleration - The acceleration value
   */


  async setAcceleration(acceleration) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: acceleration
    });
    await bp.send(this._ch, 40);
  }
  /**
   * The minimum value that `acceleration` can be set to.
   * @returns The acceleration value.
   * @throws {@link PhidgetError}
   */


  getMinAcceleration() {
    this._assertOpen();

    if (this.data.minAcceleration === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minAcceleration;
  }
  /**
   * The maximum value that `acceleration` can be set to.
   * @returns The acceleration value.
   * @throws {@link PhidgetError}
   */


  getMaxAcceleration() {
    this._assertOpen();

    if (this.data.maxAcceleration === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxAcceleration;
  }
  /**
   * The most recent braking strength value that the controller has reported.
   * @returns The braking strength value
   * @throws {@link PhidgetError}
   */


  getBrakingStrength() {
    this._assertOpen();

    if (this.data.brakingStrength === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.brakingStrength;
  }
  /**
   * The minimum value that `targetBrakingStrength` can be set to.
   * @returns The braking value
   * @throws {@link PhidgetError}
   */


  getMinBrakingStrength() {
    this._assertOpen();

    if (this.data.minBrakingStrength === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minBrakingStrength;
  }
  /**
   * The maximum value that `targetBrakingStrength` can be set to.
   * @returns The braking value
   * @throws {@link PhidgetError}
   */


  getMaxBrakingStrength() {
    this._assertOpen();

    if (this.data.maxBrakingStrength === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxBrakingStrength;
  }
  /**
   * The controller will limit the current through the motor to the `currentLimit` value.
   * @returns The current value
   * @throws {@link PhidgetError}
   */


  getCurrentLimit() {
    this._assertOpen();

    if (this.data.currentLimit === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.currentLimit;
  }
  /**
   * The controller will limit the current through the motor to the `currentLimit` value.
   * @throws {@link PhidgetError}
   * @param currentLimit - The current value
   */


  async setCurrentLimit(currentLimit) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: currentLimit
    });
    await bp.send(this._ch, 51);
  }
  /**
   * The minimum value that `currentLimit` can be set to.
   * @returns The current value
   * @throws {@link PhidgetError}
   */


  getMinCurrentLimit() {
    this._assertOpen();

    if (this.data.minCurrentLimit === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minCurrentLimit;
  }
  /**
   * The maximum value that `currentLimit` can be set to.
   * @returns The current value
   * @throws {@link PhidgetError}
   */


  getMaxCurrentLimit() {
    this._assertOpen();

    if (this.data.maxCurrentLimit === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxCurrentLimit;
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `VelocityUpdate` / `PositionChange` / `BrakingStrengthChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getDataInterval() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.dataInterval;
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `VelocityUpdate` / `PositionChange` / `BrakingStrengthChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */


  async setDataInterval(dataInterval) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: dataInterval
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getMinDataInterval() {
    this._assertOpen();

    if (this.data.minDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataInterval;
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getMaxDataInterval() {
    this._assertOpen();

    if (this.data.maxDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */


  getDataRate() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return 1000.0 / this.data.dataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */


  async setDataRate(dataRate) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: Math.round(1000.0 / dataRate)
    });
    bp.set({
      name: "1",
      type: "g",
      value: 1000.0 / dataRate
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMinDataRate() {
    this._assertOpen();

    if (this.data.minDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataRate;
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMaxDataRate() {
    this._assertOpen();

    if (this.data.maxDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataRate;
  }
  /**
   * Enables the **failsafe** feature for the channel, with a given **failsafe time**.
   *
   * The **failsafe** feature is intended for use in applications where it is important for the channel to enter a known _safe state_ if the program controlling it locks up or crashes. If you do not enable the failsafe feature, the channel will carry out whatever instructions it was last given until it is explicitly told to stop.
   *
   * Enabling the failsafe feature starts a recurring **failsafe timer** for the channel. Once the failsafe timer is enabled, it must be reset within the specified time or the channel will enter a **failsafe state**. The failsafe timer may be reset by sending any valid command to the device\*. Resetting the failsafe timer will reload the timer with the specified _failsafe time_, starting when the message to reset the timer is received by the Phidget.
   *
   * _\*(**get** requests do not typically send commands and won't reset the failsafe timer)_
   *
   * For example: if the failsafe is enabled with a **failsafe time** of 1000ms, you will have 1000ms to reset the failsafe timer. Every time the failsafe timer is reset, you will have 1000ms from that time to reset the failsafe again.
   *
   * If the failsafe timer is not reset before it runs out, the channel will enter a **failsafe state**. For BLDC Motor channels, this will disengage the motor. Once the channel enters the **failsafe state**, it will reject any further input until the channel is reopened.
   *
   * To prevent the channel from falsely entering the failsafe state, we recommend resetting the failsafe timer as frequently as is practical for your application. A good rule of thumb is to not let more than a third of the failsafe time pass before resetting the timer.
   *
   * Once the failsafe timer has been set, it cannot be disabled by any means other than closing and reopening the channel.
   * @throws {@link PhidgetError}
   * @param failsafeTime - Failsafe timeout in milliseconds
   */


  async enableFailsafe(failsafeTime) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: failsafeTime
    });
    await bp.send(this._ch, 146);
  }
  /**
   * The minimum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @returns The failsafe time
   * @throws {@link PhidgetError}
   */


  getMinFailsafeTime() {
    this._assertOpen();

    if (this.data.minFailsafeTime === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minFailsafeTime;
  }
  /**
   * The maximum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @returns The failsafe time
   * @throws {@link PhidgetError}
   */


  getMaxFailsafeTime() {
    this._assertOpen();

    if (this.data.maxFailsafeTime === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxFailsafeTime;
  }
  /**
   * Change the units of your parameters so that your application is more intuitive.
   *
   * *   Units for `position` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees. For more information on how to apply the `rescaleFactor` to your application, see your controller's User Guide.
   * @returns The rescale factor value
   * @throws {@link PhidgetError}
   */


  getRescaleFactor() {
    this._assertOpen();

    if (this.data.rescaleFactor === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.rescaleFactor;
  }
  /**
   * Resets the failsafe timer, if one has been set. See `enableFailsafe()` for details.
   *
   * This function will fail if no failsafe timer has been set for the channel.
   * @throws {@link PhidgetError}
   */


  async resetFailsafe() {
    this._assertOpen();

    const bp = new BridgePacket();
    await bp.send(this._ch, 147);
  }
  /**
   * When a motor is not being actively driven forward or reverse, you can choose if the motor will be allowed to freely turn, or will resist being turned.
   *
   * *   A low `targetBrakingStrength` value corresponds to free wheeling, this will have the following effects:
   *     *   The motor will continue to rotate after the controller is no longer driving the motor (i.e. `velocity` is 0), due to inertia.
   *     *   The motor shaft will provide little resistance to being turned when it is stopped.
   * *   A higher `targetBrakingStrength` value will resist being turned, this will have the following effects:
   *     *   The motor will more stop more quickly if it is in motion and braking has been requested. It will fight against the rotation of the shaft.
   * *   Braking mode is enabled by setting the `velocity` to `minVelocity`
   * @returns The braking value
   * @throws {@link PhidgetError}
   */


  getTargetBrakingStrength() {
    this._assertOpen();

    if (this.data.targetBrakingStrength === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.targetBrakingStrength;
  }
  /**
   * When a motor is not being actively driven forward or reverse, you can choose if the motor will be allowed to freely turn, or will resist being turned.
   *
   * *   A low `targetBrakingStrength` value corresponds to free wheeling, this will have the following effects:
   *     *   The motor will continue to rotate after the controller is no longer driving the motor (i.e. `velocity` is 0), due to inertia.
   *     *   The motor shaft will provide little resistance to being turned when it is stopped.
   * *   A higher `targetBrakingStrength` value will resist being turned, this will have the following effects:
   *     *   The motor will more stop more quickly if it is in motion and braking has been requested. It will fight against the rotation of the shaft.
   * *   Braking mode is enabled by setting the `velocity` to `minVelocity`
   * @throws {@link PhidgetError}
   * @param targetBrakingStrength - The braking value
   */


  async setTargetBrakingStrength(targetBrakingStrength) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: targetBrakingStrength
    });
    await bp.send(this._ch, 44);
  }
  /**
   * The average voltage across the motor is based on the `targetVelocity` value.
   *
   * *   At a constant load, increasing the target velocity will increase the speed of the motor.
   * *   `targetVelocity` is bounded by -`maxVelocity` and +`maxVelocity`, where a sign change (±) is indicitave of a direction change.
   * *   Setting `targetVelocity` to `minVelocity` will stop the motor. See `targetBrakingStrength` for more information on stopping the motor.
   * *   The units of `targetVelocity` and `acceleration` refer to 'duty cycle'. This is because the controller must rapidly switch the power on/off (i.e. change the duty cycle) in order to manipulate the voltage across the motor.
   * @returns The velocity value
   * @throws {@link PhidgetError}
   */


  getTargetVelocity() {
    this._assertOpen();

    if (this.data.targetVelocity === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.targetVelocity;
  }
  /**
   * The average voltage across the motor is based on the `targetVelocity` value.
   *
   * *   At a constant load, increasing the target velocity will increase the speed of the motor.
   * *   `targetVelocity` is bounded by -`maxVelocity` and +`maxVelocity`, where a sign change (±) is indicitave of a direction change.
   * *   Setting `targetVelocity` to `minVelocity` will stop the motor. See `targetBrakingStrength` for more information on stopping the motor.
   * *   The units of `targetVelocity` and `acceleration` refer to 'duty cycle'. This is because the controller must rapidly switch the power on/off (i.e. change the duty cycle) in order to manipulate the voltage across the motor.
   * @throws {@link PhidgetError}
   * @param targetVelocity - The velocity value
   */


  async setTargetVelocity(targetVelocity) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: targetVelocity
    });
    await bp.send(this._ch, 55);
  }
  /**
   * The most recent velocity value that the controller has reported.
   * @returns The velocity value
   * @throws {@link PhidgetError}
   */


  getVelocity() {
    this._assertOpen();

    if (this.data.velocity === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.velocity;
  }
  /**
   * The minimum value that `targetVelocity` can be set to.
   *
   * *   Set the `targetVelocity` to `minVelocity` to stop the motor. See `targetBrakingStrength` for more information on stopping the motor.
   * *   `targetVelocity` is bounded by -`maxVelocity` and +`maxVelocity`, where a sign change (±) is indicitave of a direction change.
   * @returns The velocity value
   * @throws {@link PhidgetError}
   */


  getMinVelocity() {
    this._assertOpen();

    if (this.data.minVelocity === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minVelocity;
  }
  /**
   * The maximum value that `targetVelocity` can be set to.
   *
   * *   `targetVelocity` is bounded by -`maxVelocity` and +`maxVelocity`, where a sign change (±) is indicitave of a direction change.
   * @returns The velocity value
   * @throws {@link PhidgetError}
   */


  getMaxVelocity() {
    this._assertOpen();

    if (this.data.maxVelocity === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxVelocity;
  }

}

/** @public */

class BLDCMotor extends BLDCMotorBase {
  /** @internal */
  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 29:
        this.data.position = bp.getNumber(0);

        if (this._isAttachedDone && this.onPositionChange) {
          try {
            this.onPositionChange((this.data.position + this.data.positionOffset) * this.data.rescaleFactor);
          } catch (err) {
            logEventException(err);
          }
        }

        break;

      default:
        super._bridgeInput(bp);

        break;
    }
  }

  setRescaleFactor(rescaleFactor) {
    this._assertOpen();

    this.data.rescaleFactor = rescaleFactor;
  }

  getPosition() {
    this._assertOpen();

    if (this.data.position === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.position * this.data.rescaleFactor;
  }

  getMinPosition() {
    this._assertOpen();

    if (this.data.minPosition === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return (this.data.minPosition + this.data.positionOffset) * this.data.rescaleFactor;
  }

  getMaxPosition() {
    this._assertOpen();

    if (this.data.maxPosition === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return (this.data.maxPosition + this.data.positionOffset) * this.data.rescaleFactor;
  }

  addPositionOffset(positionOffset) {
    this._assertOpen();

    this.data.positionOffset += positionOffset / this.data.rescaleFactor;
  }

  async setStallVelocity(stallVelocity) {
    this._assertOpen();

    const calcVelocity = stallVelocity / this.data.rescaleFactor;
    if (calcVelocity < this.data.minStallVelocity || calcVelocity > this.data.maxStallVelocity) throw new PhidgetError(ErrorCode.INVALID_ARGUMENT, "Value must be in range: " + this.minStallVelocity + " - " + this.maxStallVelocity + ".");
    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: calcVelocity
    });
    await bp.send(this._ch, 141);
  }

  getStallVelocity() {
    this._assertOpen();

    if (this.data.stallVelocity === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.stallVelocity * this.data.rescaleFactor;
  }

  getMinStallVelocity() {
    this._assertOpen();

    if (this.data.minStallVelocity === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minStallVelocity * this.data.rescaleFactor;
  }

  getMaxStallVelocity() {
    this._assertOpen();

    if (this.data.maxStallVelocity === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxStallVelocity * this.data.rescaleFactor;
  }

}

class DistanceSensorBase extends PhidgetChannel {
  constructor(ch) {
    super(ch);
    this.onDistanceChange = null;
    this.onSonarReflectionsUpdate = null;
    this._class = ChannelClass.DISTANCE_SENSOR;
    this.name = "DistanceSensor";
    this.data = this._initData();
  }
  /** @internal */


  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 54:
        if (bp.entryCount > 1) this.data.dataInterval = bp.entries[1].v;else this.data.dataInterval = bp.entries[0].v;

        this._FIREPropertyChange('DataInterval', bp);

        this._FIREPropertyChange('DataRate', bp);

        break;

      case 46:
        this.data.distanceChangeTrigger = bp.entries[0].v;

        this._FIREPropertyChange('DistanceChangeTrigger', bp);

        break;

      case 75:
        this.data.sonarQuietMode = bp.entries[0].v;

        this._FIREPropertyChange('SonarQuietMode', bp);

        break;

      case 12:
        {
          this.data.distance = bp.entries[0].v;

          if (this._isAttachedDone && this.onDistanceChange) {
            try {
              this.onDistanceChange(this.data.distance);
            } catch (err) {
              logEventException(err);
            }
          }

          break;
        }

      case 88:
        {
          if (this._isAttachedDone && this.onSonarReflectionsUpdate) {
            try {
              this.onSonarReflectionsUpdate(bp.entries[0].v, bp.entries[1].v, bp.entries[2].v);
            } catch (err) {
              logEventException(err);
            }
          }

          break;
        }

      default:
        throw new PhidgetError(ErrorCode.INVALID_PACKET, "Unsupported bridge packet: 0x" + bp.vpkt.toString(16));
    }
  }
  /** @internal */


  _initData() {
    return {
      amplitudes: [4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295],
      distances: [4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295],
      count: 0,
      dataInterval: 1e+300,
      maxDataInterval: 4294967295,
      minDataRate: 1e+300,
      maxDataRate: 1e+300,
      maxDistance: 4294967295,
      maxDistanceChangeTrigger: 4294967295,
      minDataInterval: 4294967295,
      minDistance: 4294967295,
      minDistanceChangeTrigger: 4294967295,
      distance: 4294967295,
      distanceChangeTrigger: 4294967295,
      sonarQuietMode: 2
    };
  }
  /** @internal */


  _initAfterOpen() {}
  /** @internal */


  async _setDefaults() {}
  /** @internal */


  _hasInitialState() {
    return true;
  }
  /** @internal */


  _fireInitialEvents() {}
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between events can also be affected by the `distanceChangeTrigger`.
   * @throws {@link PhidgetError}
   */


  get dataInterval() {
    return this.getDataInterval();
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataInterval() {
    return this.getMinDataInterval();
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataInterval() {
    return this.getMaxDataInterval();
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */


  get dataRate() {
    return this.getDataRate();
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataRate() {
    return this.getMinDataRate();
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataRate() {
    return this.getMaxDataRate();
  }
  /**
   * The most recent distance value that the channel has reported.
   *
   * *   This value will always be between `minDistance` and `maxDistance`.
   * @throws {@link PhidgetError}
   */


  get distance() {
    return this.getDistance();
  }
  /**
   * The minimum distance that a event will report.
   * @throws {@link PhidgetError}
   */


  get minDistance() {
    return this.getMinDistance();
  }
  /**
   * The maximum distance that a event will report.
   * @throws {@link PhidgetError}
   */


  get maxDistance() {
    return this.getMaxDistance();
  }
  /**
   * The channel will not issue an event until the distance value has changed by the amount specified by the `distanceChangeTrigger`.
   *
   * *   Setting the `distanceChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering,
   * @throws {@link PhidgetError}
   */


  get distanceChangeTrigger() {
    return this.getDistanceChangeTrigger();
  }
  /**
   * The minimum value that `distanceChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDistanceChangeTrigger() {
    return this.getMinDistanceChangeTrigger();
  }
  /**
   * The maximum value that `distanceChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDistanceChangeTrigger() {
    return this.getMaxDistanceChangeTrigger();
  }
  /**
   * When set to true, the device will operate more quietly.
   *
   * *   The measurable range is reduced when operating in quiet mode.
   * @throws {@link PhidgetError}
   */


  get sonarQuietMode() {
    return this.getSonarQuietMode();
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between events can also be affected by the `distanceChangeTrigger`.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getDataInterval() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.dataInterval;
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between events can also be affected by the `distanceChangeTrigger`.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */


  async setDataInterval(dataInterval) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: dataInterval
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getMinDataInterval() {
    this._assertOpen();

    if (this.data.minDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataInterval;
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getMaxDataInterval() {
    this._assertOpen();

    if (this.data.maxDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */


  getDataRate() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return 1000.0 / this.data.dataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */


  async setDataRate(dataRate) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: Math.round(1000.0 / dataRate)
    });
    bp.set({
      name: "1",
      type: "g",
      value: 1000.0 / dataRate
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMinDataRate() {
    this._assertOpen();

    if (this.data.minDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataRate;
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMaxDataRate() {
    this._assertOpen();

    if (this.data.maxDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataRate;
  }
  /**
   * The most recent distance value that the channel has reported.
   *
   * *   This value will always be between `minDistance` and `maxDistance`.
   * @returns The distance value
   * @throws {@link PhidgetError}
   */


  getDistance() {
    this._assertOpen();

    if (this.data.distance === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    if (this.data.distance > this.data.maxDistance) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE_HIGH);
    if (this.data.distance < this.data.minDistance) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE_LOW);
    return this.data.distance;
  }
  /**
   * The minimum distance that a event will report.
   * @returns The distance value
   * @throws {@link PhidgetError}
   */


  getMinDistance() {
    this._assertOpen();

    if (this.data.minDistance === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDistance;
  }
  /**
   * The maximum distance that a event will report.
   * @returns The distance value
   * @throws {@link PhidgetError}
   */


  getMaxDistance() {
    this._assertOpen();

    if (this.data.maxDistance === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDistance;
  }
  /**
   * The channel will not issue an event until the distance value has changed by the amount specified by the `distanceChangeTrigger`.
   *
   * *   Setting the `distanceChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering,
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */


  getDistanceChangeTrigger() {
    this._assertOpen();

    if (this.data.distanceChangeTrigger === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.distanceChangeTrigger;
  }
  /**
   * The channel will not issue an event until the distance value has changed by the amount specified by the `distanceChangeTrigger`.
   *
   * *   Setting the `distanceChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering,
   * @throws {@link PhidgetError}
   * @param distanceChangeTrigger - The change trigger value
   */


  async setDistanceChangeTrigger(distanceChangeTrigger) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: distanceChangeTrigger
    });
    await bp.send(this._ch, 46);
  }
  /**
   * The minimum value that `distanceChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */


  getMinDistanceChangeTrigger() {
    this._assertOpen();

    if (this.data.minDistanceChangeTrigger === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDistanceChangeTrigger;
  }
  /**
   * The maximum value that `distanceChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */


  getMaxDistanceChangeTrigger() {
    this._assertOpen();

    if (this.data.maxDistanceChangeTrigger === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDistanceChangeTrigger;
  }
  /**
   * When set to true, the device will operate more quietly.
   *
   * *   The measurable range is reduced when operating in quiet mode.
   * @returns The quiet mode value
   * @throws {@link PhidgetError}
   */


  getSonarQuietMode() {
    this._assertOpen();

    if (this.data.sonarQuietMode === 2) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return !!this.data.sonarQuietMode;
  }
  /**
   * When set to true, the device will operate more quietly.
   *
   * *   The measurable range is reduced when operating in quiet mode.
   * @throws {@link PhidgetError}
   * @param sonarQuietMode - The quiet mode value
   */


  async setSonarQuietMode(sonarQuietMode) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: sonarQuietMode ? 1 : 0
    });
    await bp.send(this._ch, 75);
  }

}

/** @public */

class DistanceSensor extends DistanceSensorBase {
  /** @internal */
  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 88:
        this.data.distances = bp.getArray(0);
        this.data.amplitudes = bp.getArray(1);
        this.data.count = bp.getNumber(2);

        super._bridgeInput(bp);

        break;

      default:
        super._bridgeInput(bp);

        break;
    }
  }
  /** @internal */


  _errorHandler(code) {
    switch (code) {
      case ErrorEventCode.SATURATION:
      case ErrorEventCode.OUT_OF_RANGE:
        this.data.distance = 4294967295;
        this._gotDistanceChangeErrorEvent = true;
        break;
    }
  }

  getSonarReflections() {
    this._assertOpen();

    return {
      distances: this.data.distances,
      amplitudes: this.data.amplitudes,
      count: this.data.count
    };
  }

}

class HumiditySensorBase extends PhidgetChannel {
  constructor(ch) {
    super(ch);
    this.onHumidityChange = null;
    this._class = ChannelClass.HUMIDITY_SENSOR;
    this.name = "HumiditySensor";
    this.data = this._initData();
  }
  /** @internal */


  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 54:
        if (bp.entryCount > 1) this.data.dataInterval = bp.entries[1].v;else this.data.dataInterval = bp.entries[0].v;

        this._FIREPropertyChange('DataInterval', bp);

        this._FIREPropertyChange('DataRate', bp);

        break;

      case 46:
        this.data.humidityChangeTrigger = bp.entries[0].v;

        this._FIREPropertyChange('HumidityChangeTrigger', bp);

        break;

      case 22:
        {
          this.data.humidity = bp.entries[0].v;

          if (this._isAttachedDone && this.onHumidityChange) {
            try {
              this.onHumidityChange(this.data.humidity);
            } catch (err) {
              logEventException(err);
            }
          }

          break;
        }

      default:
        throw new PhidgetError(ErrorCode.INVALID_PACKET, "Unsupported bridge packet: 0x" + bp.vpkt.toString(16));
    }
  }
  /** @internal */


  _initData() {
    return {
      dataInterval: 1e+300,
      maxDataInterval: 4294967295,
      minDataRate: 1e+300,
      maxDataRate: 1e+300,
      maxHumidity: 1e+300,
      maxHumidityChangeTrigger: 1e+300,
      minDataInterval: 4294967295,
      minHumidity: 1e+300,
      minHumidityChangeTrigger: 1e+300,
      humidity: 1e+300,
      humidityChangeTrigger: 1e+300
    };
  }
  /** @internal */


  _initAfterOpen() {}
  /** @internal */


  async _setDefaults() {}
  /** @internal */


  _hasInitialState() {
    return true;
  }
  /** @internal */


  _fireInitialEvents() {}
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `HumidityChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `HumidityChange` events can also be affected by the `humidityChangeTrigger`.
   * @throws {@link PhidgetError}
   */


  get dataInterval() {
    return this.getDataInterval();
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataInterval() {
    return this.getMinDataInterval();
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataInterval() {
    return this.getMaxDataInterval();
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */


  get dataRate() {
    return this.getDataRate();
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataRate() {
    return this.getMinDataRate();
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataRate() {
    return this.getMaxDataRate();
  }
  /**
   * The most recent humidity value that the channel has reported.
   *
   * *   This value will always be between `minHumidity` and `maxHumidity`.
   * @throws {@link PhidgetError}
   */


  get humidity() {
    return this.getHumidity();
  }
  /**
   * The minimum value that the `HumidityChange` event will report.
   * @throws {@link PhidgetError}
   */


  get minHumidity() {
    return this.getMinHumidity();
  }
  /**
   * The maximum value that the `HumidityChange` event will report.
   * @throws {@link PhidgetError}
   */


  get maxHumidity() {
    return this.getMaxHumidity();
  }
  /**
   * The channel will not issue a `HumidityChange` event until the humidity value has changed by the amount specified by the `humidityChangeTrigger`.
   *
   * *   Setting the `humidityChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering.
   * @throws {@link PhidgetError}
   */


  get humidityChangeTrigger() {
    return this.getHumidityChangeTrigger();
  }
  /**
   * The minimum value that `humidityChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */


  get minHumidityChangeTrigger() {
    return this.getMinHumidityChangeTrigger();
  }
  /**
   * The maximum value that `humidityChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxHumidityChangeTrigger() {
    return this.getMaxHumidityChangeTrigger();
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `HumidityChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `HumidityChange` events can also be affected by the `humidityChangeTrigger`.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getDataInterval() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.dataInterval;
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `HumidityChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `HumidityChange` events can also be affected by the `humidityChangeTrigger`.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */


  async setDataInterval(dataInterval) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: dataInterval
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getMinDataInterval() {
    this._assertOpen();

    if (this.data.minDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataInterval;
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getMaxDataInterval() {
    this._assertOpen();

    if (this.data.maxDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */


  getDataRate() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return 1000.0 / this.data.dataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */


  async setDataRate(dataRate) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: Math.round(1000.0 / dataRate)
    });
    bp.set({
      name: "1",
      type: "g",
      value: 1000.0 / dataRate
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMinDataRate() {
    this._assertOpen();

    if (this.data.minDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataRate;
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMaxDataRate() {
    this._assertOpen();

    if (this.data.maxDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataRate;
  }
  /**
   * The most recent humidity value that the channel has reported.
   *
   * *   This value will always be between `minHumidity` and `maxHumidity`.
   * @returns The humidity value
   * @throws {@link PhidgetError}
   */


  getHumidity() {
    this._assertOpen();

    if (this.data.humidity === 1e+300 || Number.isNaN(this.data.humidity)) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    if (this.data.humidity > this.data.maxHumidity) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE_HIGH);
    if (this.data.humidity < this.data.minHumidity) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE_LOW);
    return this.data.humidity;
  }
  /**
   * The minimum value that the `HumidityChange` event will report.
   * @returns The humidity value
   * @throws {@link PhidgetError}
   */


  getMinHumidity() {
    this._assertOpen();

    if (this.data.minHumidity === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minHumidity;
  }
  /**
   * The maximum value that the `HumidityChange` event will report.
   * @returns The humidity value
   * @throws {@link PhidgetError}
   */


  getMaxHumidity() {
    this._assertOpen();

    if (this.data.maxHumidity === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxHumidity;
  }
  /**
   * The channel will not issue a `HumidityChange` event until the humidity value has changed by the amount specified by the `humidityChangeTrigger`.
   *
   * *   Setting the `humidityChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */


  getHumidityChangeTrigger() {
    this._assertOpen();

    if (this.data.humidityChangeTrigger === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.humidityChangeTrigger;
  }
  /**
   * The channel will not issue a `HumidityChange` event until the humidity value has changed by the amount specified by the `humidityChangeTrigger`.
   *
   * *   Setting the `humidityChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering.
   * @throws {@link PhidgetError}
   * @param humidityChangeTrigger - The change trigger value
   */


  async setHumidityChangeTrigger(humidityChangeTrigger) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: humidityChangeTrigger
    });
    await bp.send(this._ch, 46);
  }
  /**
   * The minimum value that `humidityChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */


  getMinHumidityChangeTrigger() {
    this._assertOpen();

    if (this.data.minHumidityChangeTrigger === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minHumidityChangeTrigger;
  }
  /**
   * The maximum value that `humidityChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */


  getMaxHumidityChangeTrigger() {
    this._assertOpen();

    if (this.data.maxHumidityChangeTrigger === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxHumidityChangeTrigger;
  }

}

/** @public */

class HumiditySensor extends HumiditySensorBase {
  /** @internal */
  _errorHandler(code) {
    switch (code) {
      case ErrorEventCode.SATURATION:
        this.data.humidity = 1e+300;
        this._gotHumidityChangeErrorEvent = true;
        break;
    }
  }

}

class LightSensorBase extends PhidgetChannel {
  constructor(ch) {
    super(ch);
    this.onIlluminanceChange = null;
    this._class = ChannelClass.LIGHT_SENSOR;
    this.name = "LightSensor";
    this.data = this._initData();
  }
  /** @internal */


  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 54:
        if (bp.entryCount > 1) this.data.dataInterval = bp.entries[1].v;else this.data.dataInterval = bp.entries[0].v;

        this._FIREPropertyChange('DataInterval', bp);

        this._FIREPropertyChange('DataRate', bp);

        break;

      case 46:
        this.data.illuminanceChangeTrigger = bp.entries[0].v;

        this._FIREPropertyChange('IlluminanceChangeTrigger', bp);

        break;

      case 23:
        {
          this.data.illuminance = bp.entries[0].v;

          if (this._isAttachedDone && this.onIlluminanceChange) {
            try {
              this.onIlluminanceChange(this.data.illuminance);
            } catch (err) {
              logEventException(err);
            }
          }

          break;
        }

      default:
        throw new PhidgetError(ErrorCode.INVALID_PACKET, "Unsupported bridge packet: 0x" + bp.vpkt.toString(16));
    }
  }
  /** @internal */


  _initData() {
    return {
      dataInterval: 1e+300,
      maxDataInterval: 4294967295,
      minDataRate: 1e+300,
      maxDataRate: 1e+300,
      maxIlluminance: 1e+300,
      maxIlluminanceChangeTrigger: 1e+300,
      minDataInterval: 4294967295,
      minIlluminance: 1e+300,
      minIlluminanceChangeTrigger: 1e+300,
      illuminance: 1e+300,
      illuminanceChangeTrigger: 1e+300
    };
  }
  /** @internal */


  _initAfterOpen() {}
  /** @internal */


  async _setDefaults() {}
  /** @internal */


  _hasInitialState() {
    return true;
  }
  /** @internal */


  _fireInitialEvents() {}
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `IlluminanceChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `IlluminanceChange` events can also be affected by the `illuminanceChangeTrigger`.
   * @throws {@link PhidgetError}
   */


  get dataInterval() {
    return this.getDataInterval();
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataInterval() {
    return this.getMinDataInterval();
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataInterval() {
    return this.getMaxDataInterval();
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */


  get dataRate() {
    return this.getDataRate();
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataRate() {
    return this.getMinDataRate();
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataRate() {
    return this.getMaxDataRate();
  }
  /**
   * The most recent illuminance value that the channel has reported.
   *
   * *   This value will always be between `minIlluminance` and `maxIlluminance`.
   * @throws {@link PhidgetError}
   */


  get illuminance() {
    return this.getIlluminance();
  }
  /**
   * The minimum value the `IlluminanceChange` event will report.
   * @throws {@link PhidgetError}
   */


  get minIlluminance() {
    return this.getMinIlluminance();
  }
  /**
   * The maximum value the `IlluminanceChange` event will report.
   * @throws {@link PhidgetError}
   */


  get maxIlluminance() {
    return this.getMaxIlluminance();
  }
  /**
   * The channel will not issue a `IlluminanceChange` event until the illuminance value has changed by the amount specified by the `illuminanceChangeTrigger`.
   *
   * *   Setting the `illuminanceChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   */


  get illuminanceChangeTrigger() {
    return this.getIlluminanceChangeTrigger();
  }
  /**
   * The minimum value that `illuminanceChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */


  get minIlluminanceChangeTrigger() {
    return this.getMinIlluminanceChangeTrigger();
  }
  /**
   * The maximum value that `illuminanceChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxIlluminanceChangeTrigger() {
    return this.getMaxIlluminanceChangeTrigger();
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `IlluminanceChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `IlluminanceChange` events can also be affected by the `illuminanceChangeTrigger`.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getDataInterval() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.dataInterval;
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `IlluminanceChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `IlluminanceChange` events can also be affected by the `illuminanceChangeTrigger`.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */


  async setDataInterval(dataInterval) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: dataInterval
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getMinDataInterval() {
    this._assertOpen();

    if (this.data.minDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataInterval;
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getMaxDataInterval() {
    this._assertOpen();

    if (this.data.maxDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */


  getDataRate() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return 1000.0 / this.data.dataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */


  async setDataRate(dataRate) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: Math.round(1000.0 / dataRate)
    });
    bp.set({
      name: "1",
      type: "g",
      value: 1000.0 / dataRate
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMinDataRate() {
    this._assertOpen();

    if (this.data.minDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataRate;
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMaxDataRate() {
    this._assertOpen();

    if (this.data.maxDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataRate;
  }
  /**
   * The most recent illuminance value that the channel has reported.
   *
   * *   This value will always be between `minIlluminance` and `maxIlluminance`.
   * @returns The illuminance value
   * @throws {@link PhidgetError}
   */


  getIlluminance() {
    this._assertOpen();

    if (this.data.illuminance === 1e+300 || Number.isNaN(this.data.illuminance)) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    if (this.data.illuminance > this.data.maxIlluminance) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE_HIGH);
    if (this.data.illuminance < this.data.minIlluminance) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE_LOW);
    return this.data.illuminance;
  }
  /**
   * The minimum value the `IlluminanceChange` event will report.
   * @returns The illuminance value
   * @throws {@link PhidgetError}
   */


  getMinIlluminance() {
    this._assertOpen();

    if (this.data.minIlluminance === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minIlluminance;
  }
  /**
   * The maximum value the `IlluminanceChange` event will report.
   * @returns The illuminance value
   * @throws {@link PhidgetError}
   */


  getMaxIlluminance() {
    this._assertOpen();

    if (this.data.maxIlluminance === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxIlluminance;
  }
  /**
   * The channel will not issue a `IlluminanceChange` event until the illuminance value has changed by the amount specified by the `illuminanceChangeTrigger`.
   *
   * *   Setting the `illuminanceChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */


  getIlluminanceChangeTrigger() {
    this._assertOpen();

    if (this.data.illuminanceChangeTrigger === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.illuminanceChangeTrigger;
  }
  /**
   * The channel will not issue a `IlluminanceChange` event until the illuminance value has changed by the amount specified by the `illuminanceChangeTrigger`.
   *
   * *   Setting the `illuminanceChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   * @param illuminanceChangeTrigger - The change trigger value
   */


  async setIlluminanceChangeTrigger(illuminanceChangeTrigger) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: illuminanceChangeTrigger
    });
    await bp.send(this._ch, 46);
  }
  /**
   * The minimum value that `illuminanceChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */


  getMinIlluminanceChangeTrigger() {
    this._assertOpen();

    if (this.data.minIlluminanceChangeTrigger === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minIlluminanceChangeTrigger;
  }
  /**
   * The maximum value that `illuminanceChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */


  getMaxIlluminanceChangeTrigger() {
    this._assertOpen();

    if (this.data.maxIlluminanceChangeTrigger === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxIlluminanceChangeTrigger;
  }

}

/** @public */

class LightSensor extends LightSensorBase {
  /** @internal */
  _errorHandler(code) {
    switch (code) {
      case ErrorEventCode.SATURATION:
        this.data.illuminance = 1e+300;
        this._gotIlluminanceChangeErrorEvent = true;
        break;
    }
  }

}

class PressureSensorBase extends PhidgetChannel {
  constructor(ch) {
    super(ch);
    this.onPressureChange = null;
    this._class = ChannelClass.PRESSURE_SENSOR;
    this.name = "PressureSensor";
    this.data = this._initData();
  }
  /** @internal */


  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 54:
        if (bp.entryCount > 1) this.data.dataInterval = bp.entries[1].v;else this.data.dataInterval = bp.entries[0].v;

        this._FIREPropertyChange('DataInterval', bp);

        this._FIREPropertyChange('DataRate', bp);

        break;

      case 46:
        this.data.pressureChangeTrigger = bp.entries[0].v;

        this._FIREPropertyChange('PressureChangeTrigger', bp);

        break;

      case 31:
        {
          this.data.pressure = bp.entries[0].v;

          if (this._isAttachedDone && this.onPressureChange) {
            try {
              this.onPressureChange(this.data.pressure);
            } catch (err) {
              logEventException(err);
            }
          }

          break;
        }

      default:
        throw new PhidgetError(ErrorCode.INVALID_PACKET, "Unsupported bridge packet: 0x" + bp.vpkt.toString(16));
    }
  }
  /** @internal */


  _initData() {
    return {
      dataInterval: 1e+300,
      maxDataInterval: 4294967295,
      minDataRate: 1e+300,
      maxDataRate: 1e+300,
      maxPressure: 1e+300,
      maxPressureChangeTrigger: 1e+300,
      minDataInterval: 4294967295,
      minPressure: 1e+300,
      minPressureChangeTrigger: 1e+300,
      pressure: 1e+300,
      pressureChangeTrigger: 1e+300
    };
  }
  /** @internal */


  _initAfterOpen() {}
  /** @internal */


  async _setDefaults() {}
  /** @internal */


  _hasInitialState() {
    return true;
  }
  /** @internal */


  _fireInitialEvents() {}
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `PressureChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `PressureChange` events can also be affected by the `pressureChangeTrigger`.
   * @throws {@link PhidgetError}
   */


  get dataInterval() {
    return this.getDataInterval();
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataInterval() {
    return this.getMinDataInterval();
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataInterval() {
    return this.getMaxDataInterval();
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */


  get dataRate() {
    return this.getDataRate();
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataRate() {
    return this.getMinDataRate();
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataRate() {
    return this.getMaxDataRate();
  }
  /**
   * The most recent pressure value that the channel has reported.
   *
   * *   This value will always be between `minPressure` and `maxPressure`.
   * @throws {@link PhidgetError}
   */


  get pressure() {
    return this.getPressure();
  }
  /**
   * The minimum value the `PressureChange` event will report.
   * @throws {@link PhidgetError}
   */


  get minPressure() {
    return this.getMinPressure();
  }
  /**
   * The maximum value the `PressureChange` event will report.
   * @throws {@link PhidgetError}
   */


  get maxPressure() {
    return this.getMaxPressure();
  }
  /**
   * The channel will not issue a `PressureChange` event until the pressure value has changed by the amount specified by the `pressureChangeTrigger`.
   *
   * *   Setting the `pressureChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   */


  get pressureChangeTrigger() {
    return this.getPressureChangeTrigger();
  }
  /**
   * The minimum value that `pressureChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */


  get minPressureChangeTrigger() {
    return this.getMinPressureChangeTrigger();
  }
  /**
   * The maximum value that `pressureChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxPressureChangeTrigger() {
    return this.getMaxPressureChangeTrigger();
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `PressureChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `PressureChange` events can also be affected by the `pressureChangeTrigger`.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getDataInterval() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.dataInterval;
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `PressureChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `PressureChange` events can also be affected by the `pressureChangeTrigger`.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */


  async setDataInterval(dataInterval) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: dataInterval
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getMinDataInterval() {
    this._assertOpen();

    if (this.data.minDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataInterval;
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getMaxDataInterval() {
    this._assertOpen();

    if (this.data.maxDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */


  getDataRate() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return 1000.0 / this.data.dataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */


  async setDataRate(dataRate) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: Math.round(1000.0 / dataRate)
    });
    bp.set({
      name: "1",
      type: "g",
      value: 1000.0 / dataRate
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMinDataRate() {
    this._assertOpen();

    if (this.data.minDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataRate;
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMaxDataRate() {
    this._assertOpen();

    if (this.data.maxDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataRate;
  }
  /**
   * The most recent pressure value that the channel has reported.
   *
   * *   This value will always be between `minPressure` and `maxPressure`.
   * @returns The pressure value
   * @throws {@link PhidgetError}
   */


  getPressure() {
    this._assertOpen();

    if (this.data.pressure === 1e+300 || Number.isNaN(this.data.pressure)) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    if (this.data.pressure > this.data.maxPressure) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE_HIGH);
    if (this.data.pressure < this.data.minPressure) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE_LOW);
    return this.data.pressure;
  }
  /**
   * The minimum value the `PressureChange` event will report.
   * @returns The pressure value
   * @throws {@link PhidgetError}
   */


  getMinPressure() {
    this._assertOpen();

    if (this.data.minPressure === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minPressure;
  }
  /**
   * The maximum value the `PressureChange` event will report.
   * @returns The pressure value
   * @throws {@link PhidgetError}
   */


  getMaxPressure() {
    this._assertOpen();

    if (this.data.maxPressure === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxPressure;
  }
  /**
   * The channel will not issue a `PressureChange` event until the pressure value has changed by the amount specified by the `pressureChangeTrigger`.
   *
   * *   Setting the `pressureChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */


  getPressureChangeTrigger() {
    this._assertOpen();

    if (this.data.pressureChangeTrigger === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.pressureChangeTrigger;
  }
  /**
   * The channel will not issue a `PressureChange` event until the pressure value has changed by the amount specified by the `pressureChangeTrigger`.
   *
   * *   Setting the `pressureChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   * @param pressureChangeTrigger - The change trigger value
   */


  async setPressureChangeTrigger(pressureChangeTrigger) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: pressureChangeTrigger
    });
    await bp.send(this._ch, 46);
  }
  /**
   * The minimum value that `pressureChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */


  getMinPressureChangeTrigger() {
    this._assertOpen();

    if (this.data.minPressureChangeTrigger === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minPressureChangeTrigger;
  }
  /**
   * The maximum value that `pressureChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */


  getMaxPressureChangeTrigger() {
    this._assertOpen();

    if (this.data.maxPressureChangeTrigger === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxPressureChangeTrigger;
  }

}

/** @public */

class PressureSensor extends PressureSensorBase {
  /** @internal */
  _errorHandler(code) {
    switch (code) {
      case ErrorEventCode.SATURATION:
        this.data.pressure = 1e+300;
        this._gotPressureChangeErrorEvent = true;
        break;
    }
  }

}

class ResistanceInputBase extends PhidgetChannel {
  constructor(ch) {
    super(ch);
    this.onResistanceChange = null;
    this._class = ChannelClass.RESISTANCE_INPUT;
    this.name = "ResistanceInput";
    this.data = this._initData();
  }
  /** @internal */


  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 54:
        if (bp.entryCount > 1) this.data.dataInterval = bp.entries[1].v;else this.data.dataInterval = bp.entries[0].v;

        this._FIREPropertyChange('DataInterval', bp);

        this._FIREPropertyChange('DataRate', bp);

        break;

      case 46:
        this.data.resistanceChangeTrigger = bp.entries[0].v;

        this._FIREPropertyChange('ResistanceChangeTrigger', bp);

        break;

      case 77:
        this.data.RTDWireSetup = bp.entries[0].v;

        this._FIREPropertyChange('RTDWireSetup', bp);

        break;

      case 36:
        {
          this.data.resistance = bp.entries[0].v;

          if (this._isAttachedDone && this.onResistanceChange) {
            try {
              this.onResistanceChange(this.data.resistance);
            } catch (err) {
              logEventException(err);
            }
          }

          break;
        }

      default:
        throw new PhidgetError(ErrorCode.INVALID_PACKET, "Unsupported bridge packet: 0x" + bp.vpkt.toString(16));
    }
  }
  /** @internal */


  _initData() {
    return {
      dataInterval: 1e+300,
      maxDataInterval: 4294967295,
      minDataRate: 1e+300,
      maxDataRate: 1e+300,
      maxResistance: 1e+300,
      maxResistanceChangeTrigger: 1e+300,
      minDataInterval: 4294967295,
      minResistance: 1e+300,
      minResistanceChangeTrigger: 1e+300,
      resistance: 1e+300,
      resistanceChangeTrigger: 1e+300,
      RTDWireSetup: 2147483647
    };
  }
  /** @internal */


  _initAfterOpen() {}
  /** @internal */


  async _setDefaults() {}
  /** @internal */


  _hasInitialState() {
    return true;
  }
  /** @internal */


  _fireInitialEvents() {}
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `ResistanceChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `ResistanceChange` events can also be affected by the `resistanceChangeTrigger`.
   * @throws {@link PhidgetError}
   */


  get dataInterval() {
    return this.getDataInterval();
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataInterval() {
    return this.getMinDataInterval();
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataInterval() {
    return this.getMaxDataInterval();
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */


  get dataRate() {
    return this.getDataRate();
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataRate() {
    return this.getMinDataRate();
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataRate() {
    return this.getMaxDataRate();
  }
  /**
   * The most recent resistance value that the channel has reported.
   *
   * *   This value will always be between `minResistance` and `maxResistance`.
   * *   The `resistance` value will change when the device is also being used as a temperature sensor. This is a side effect of increasing accuracy on the temperature channel.
   * @throws {@link PhidgetError}
   */


  get resistance() {
    return this.getResistance();
  }
  /**
   * The minimum value the `ResistanceChange` event will report.
   *
   * *   When the device is also being used as a TemperatureSensor the `minResistance` and `maxResistance` will not represent the true input range. This is a side effect of increasing accuracy on the temperature channel.
   * @throws {@link PhidgetError}
   */


  get minResistance() {
    return this.getMinResistance();
  }
  /**
   * The maximum value the `ResistanceChange` event will report.
   * @throws {@link PhidgetError}
   */


  get maxResistance() {
    return this.getMaxResistance();
  }
  /**
   * The channel will not issue a `ResistanceChange` event until the resistance value has changed by the amount specified by the `resistanceChangeTrigger`.
   *
   * *   Setting the `resistanceChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   */


  get resistanceChangeTrigger() {
    return this.getResistanceChangeTrigger();
  }
  /**
   * The minimum value that the `resistanceChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */


  get minResistanceChangeTrigger() {
    return this.getMinResistanceChangeTrigger();
  }
  /**
   * The maximum value that `resistanceChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxResistanceChangeTrigger() {
    return this.getMaxResistanceChangeTrigger();
  }
  /**
   * Select the RTD wiring configuration.
   *
   * *   More information about RTD wiring can be found in the user guide.
   * @throws {@link PhidgetError}
   */


  get RTDWireSetup() {
    return this.getRTDWireSetup();
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `ResistanceChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `ResistanceChange` events can also be affected by the `resistanceChangeTrigger`.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getDataInterval() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.dataInterval;
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `ResistanceChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `ResistanceChange` events can also be affected by the `resistanceChangeTrigger`.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */


  async setDataInterval(dataInterval) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: dataInterval
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getMinDataInterval() {
    this._assertOpen();

    if (this.data.minDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataInterval;
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getMaxDataInterval() {
    this._assertOpen();

    if (this.data.maxDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */


  getDataRate() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return 1000.0 / this.data.dataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */


  async setDataRate(dataRate) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: Math.round(1000.0 / dataRate)
    });
    bp.set({
      name: "1",
      type: "g",
      value: 1000.0 / dataRate
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMinDataRate() {
    this._assertOpen();

    if (this.data.minDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataRate;
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMaxDataRate() {
    this._assertOpen();

    if (this.data.maxDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataRate;
  }
  /**
   * The most recent resistance value that the channel has reported.
   *
   * *   This value will always be between `minResistance` and `maxResistance`.
   * *   The `resistance` value will change when the device is also being used as a temperature sensor. This is a side effect of increasing accuracy on the temperature channel.
   * @returns The resistance value
   * @throws {@link PhidgetError}
   */


  getResistance() {
    this._assertOpen();

    if (this.data.resistance === 1e+300 || Number.isNaN(this.data.resistance)) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    if (this.data.resistance > this.data.maxResistance) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE_HIGH);
    if (this.data.resistance < this.data.minResistance) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE_LOW);
    return this.data.resistance;
  }
  /**
   * The minimum value the `ResistanceChange` event will report.
   *
   * *   When the device is also being used as a TemperatureSensor the `minResistance` and `maxResistance` will not represent the true input range. This is a side effect of increasing accuracy on the temperature channel.
   * @returns The minimum resistance
   * @throws {@link PhidgetError}
   */


  getMinResistance() {
    this._assertOpen();

    if (this.data.minResistance === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minResistance;
  }
  /**
   * The maximum value the `ResistanceChange` event will report.
   * @returns The resistance value
   * @throws {@link PhidgetError}
   */


  getMaxResistance() {
    this._assertOpen();

    if (this.data.maxResistance === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxResistance;
  }
  /**
   * The channel will not issue a `ResistanceChange` event until the resistance value has changed by the amount specified by the `resistanceChangeTrigger`.
   *
   * *   Setting the `resistanceChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */


  getResistanceChangeTrigger() {
    this._assertOpen();

    if (this.data.resistanceChangeTrigger === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.resistanceChangeTrigger;
  }
  /**
   * The channel will not issue a `ResistanceChange` event until the resistance value has changed by the amount specified by the `resistanceChangeTrigger`.
   *
   * *   Setting the `resistanceChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   * @param resistanceChangeTrigger - The change trigger value
   */


  async setResistanceChangeTrigger(resistanceChangeTrigger) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: resistanceChangeTrigger
    });
    await bp.send(this._ch, 46);
  }
  /**
   * The minimum value that the `resistanceChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */


  getMinResistanceChangeTrigger() {
    this._assertOpen();

    if (this.data.minResistanceChangeTrigger === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minResistanceChangeTrigger;
  }
  /**
   * The maximum value that `resistanceChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */


  getMaxResistanceChangeTrigger() {
    this._assertOpen();

    if (this.data.maxResistanceChangeTrigger === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxResistanceChangeTrigger;
  }
  /**
   * Select the RTD wiring configuration.
   *
   * *   More information about RTD wiring can be found in the user guide.
   * @returns Wire setup value
   * @throws {@link PhidgetError}
   */


  getRTDWireSetup() {
    this._assertOpen();

    if (this.data.RTDWireSetup === 2147483647) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.RTDWireSetup;
  }
  /**
   * Select the RTD wiring configuration.
   *
   * *   More information about RTD wiring can be found in the user guide.
   * @throws {@link PhidgetError}
   * @param RTDWireSetup - Wire setup value
   */


  async setRTDWireSetup(RTDWireSetup) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: RTDWireSetup
    });
    await bp.send(this._ch, 77);
  }

}

/** @public */

class ResistanceInput extends ResistanceInputBase {
  /** @internal */
  _errorHandler(code) {
    switch (code) {
      case ErrorEventCode.SATURATION:
        this.data.resistance = 1e+300;
        this._gotResistanceChangeErrorEvent = true;
        break;
    }
  }
  /** @internal */


  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 180:
        this.data.RTDWireSetup = bp.entries[0].v;

        this._FIREPropertyChange('RTDWireSetup', bp);

        break;

      default:
        super._bridgeInput(bp);

        break;
    }
  }

}

class PowerGuardBase extends PhidgetChannel {
  constructor(ch) {
    super(ch);
    this._class = ChannelClass.POWER_GUARD;
    this.name = "PowerGuard";
    this.data = this._initData();
  }
  /** @internal */


  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 146:
        break;

      case 58:
        this.data.fanMode = bp.entries[0].v;

        this._FIREPropertyChange('FanMode', bp);

        break;

      case 71:
        this.data.overVoltage = bp.entries[0].v;

        this._FIREPropertyChange('OverVoltage', bp);

        break;

      case 56:
        this.data.powerEnabled = bp.entries[0].v;

        this._FIREPropertyChange('PowerEnabled', bp);

        break;

      case 147:
        break;

      default:
        throw new PhidgetError(ErrorCode.INVALID_PACKET, "Unsupported bridge packet: 0x" + bp.vpkt.toString(16));
    }
  }
  /** @internal */


  _initData() {
    return {
      powerEnabled: 2,
      overVoltage: 1e+300,
      maxOverVoltage: 1e+300,
      minOverVoltage: 1e+300,
      fanMode: 2147483647,
      maxFailsafeTime: 4294967295,
      minFailsafeTime: 4294967295
    };
  }
  /** @internal */


  _initAfterOpen() {}
  /** @internal */


  async _setDefaults() {}
  /** @internal */


  _hasInitialState() {
    return true;
  }
  /** @internal */


  _fireInitialEvents() {}
  /**
   * The minimum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @throws {@link PhidgetError}
   */


  get minFailsafeTime() {
    return this.getMinFailsafeTime();
  }
  /**
   * The maximum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @throws {@link PhidgetError}
   */


  get maxFailsafeTime() {
    return this.getMaxFailsafeTime();
  }
  /**
   * The `fanMode` dictates the operating condition of the fan.
   *
   * *   Choose between on, off, or automatic (based on temperature).
   * *   If the `fanMode` is set to automatic, the fan will turn on when the temperature reaches 70°C and it will remain on until the temperature falls below 55°C.
   * *   If the `fanMode` is off, the device will still turn on the fan if the temperature reaches 85°C and it will remain on until it falls below 70°C.
   * @throws {@link PhidgetError}
   */


  get fanMode() {
    return this.getFanMode();
  }
  /**
   * The device constantly monitors the output voltage, and if it exceeds the `overVoltage` value, it will disconnect the input from the output.
   *
   * *   This functionality is critical for protecting power supplies from regenerated voltage coming from motors. Many power supplies assume that a higher than output expected voltage is related to an internal failure to the power supply, and will permanently disable themselves to protect the system. A typical safe value is to set OverVoltage to 1-2 volts higher than the output voltage of the supply. For instance, a 12V supply would be protected by setting OverVoltage to 13V.
   * *   The device will connect the input to the output again when the voltage drops to (`overVoltage` - 1V)
   * @throws {@link PhidgetError}
   */


  get overVoltage() {
    return this.getOverVoltage();
  }
  /**
   * The minimum value that `overVoltage` can be set to.
   * @throws {@link PhidgetError}
   */


  get minOverVoltage() {
    return this.getMinOverVoltage();
  }
  /**
   * The maximum value that `overVoltage` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxOverVoltage() {
    return this.getMaxOverVoltage();
  }
  /**
   * When `powerEnabled` is true, the device will connect the input to the output and begin monitoring.
   *
   * *   The output voltage is constantly monitored and will be automatically disconnected from the input when the output exceeds the `overVoltage` value.
   * *   `powerEnabled` allows the device to operate as a Solid State Relay, powering on or off all devices connected to the output.
   * @throws {@link PhidgetError}
   */


  get powerEnabled() {
    return this.getPowerEnabled();
  }
  /**
   * Enables the **failsafe** feature for the channel, with a given **failsafe time**.
   *
   * The **failsafe** feature is intended for use in applications where it is important for the channel to enter a known _safe state_ if the program controlling it locks up or crashes. If you do not enable the failsafe feature, the channel will carry out whatever instructions it was last given until it is explicitly told to stop.
   *
   * Enabling the failsafe feature starts a recurring **failsafe timer** for the channel. Once the failsafe timer is enabled, it must be reset within the specified time or the channel will enter a **failsafe state**. The failsafe timer may be reset by sending any valid command to the device\*. Resetting the failsafe timer will reload the timer with the specified _failsafe time_, starting when the message to reset the timer is received by the Phidget.
   *
   * _\*(**get** requests do not typically send commands and won't reset the failsafe timer)_
   *
   * For example: if the failsafe is enabled with a **failsafe time** of 1000ms, you will have 1000ms to reset the failsafe timer. Every time the failsafe timer is reset, you will have 1000ms from that time to reset the failsafe again.
   *
   * If the failsafe timer is not reset before it runs out, the channel will enter a **failsafe state**. For Power Guard channels, this will turn off the output. Once the channel enters the **failsafe state**, it will reject any further input until the channel is reopened.
   *
   * To prevent the channel from falsely entering the failsafe state, we recommend resetting the failsafe timer as frequently as is practical for your application. A good rule of thumb is to not let more than a third of the failsafe time pass before resetting the timer.
   *
   * Once the failsafe timer has been set, it cannot be disabled by any means other than closing and reopening the channel.
   * @throws {@link PhidgetError}
   * @param failsafeTime - Failsafe timeout in milliseconds
   */


  async enableFailsafe(failsafeTime) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: failsafeTime
    });
    await bp.send(this._ch, 146);
  }
  /**
   * The minimum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @returns The failsafe time
   * @throws {@link PhidgetError}
   */


  getMinFailsafeTime() {
    this._assertOpen();

    if (this.data.minFailsafeTime === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minFailsafeTime;
  }
  /**
   * The maximum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @returns The failsafe time
   * @throws {@link PhidgetError}
   */


  getMaxFailsafeTime() {
    this._assertOpen();

    if (this.data.maxFailsafeTime === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxFailsafeTime;
  }
  /**
   * The `fanMode` dictates the operating condition of the fan.
   *
   * *   Choose between on, off, or automatic (based on temperature).
   * *   If the `fanMode` is set to automatic, the fan will turn on when the temperature reaches 70°C and it will remain on until the temperature falls below 55°C.
   * *   If the `fanMode` is off, the device will still turn on the fan if the temperature reaches 85°C and it will remain on until it falls below 70°C.
   * @returns The fan mode value
   * @throws {@link PhidgetError}
   */


  getFanMode() {
    this._assertOpen();

    if (this.data.fanMode === 2147483647) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.fanMode;
  }
  /**
   * The `fanMode` dictates the operating condition of the fan.
   *
   * *   Choose between on, off, or automatic (based on temperature).
   * *   If the `fanMode` is set to automatic, the fan will turn on when the temperature reaches 70°C and it will remain on until the temperature falls below 55°C.
   * *   If the `fanMode` is off, the device will still turn on the fan if the temperature reaches 85°C and it will remain on until it falls below 70°C.
   * @throws {@link PhidgetError}
   * @param fanMode - The fan mode value
   */


  async setFanMode(fanMode) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: fanMode
    });
    await bp.send(this._ch, 58);
  }
  /**
   * The device constantly monitors the output voltage, and if it exceeds the `overVoltage` value, it will disconnect the input from the output.
   *
   * *   This functionality is critical for protecting power supplies from regenerated voltage coming from motors. Many power supplies assume that a higher than output expected voltage is related to an internal failure to the power supply, and will permanently disable themselves to protect the system. A typical safe value is to set OverVoltage to 1-2 volts higher than the output voltage of the supply. For instance, a 12V supply would be protected by setting OverVoltage to 13V.
   * *   The device will connect the input to the output again when the voltage drops to (`overVoltage` - 1V)
   * @returns The voltage value
   * @throws {@link PhidgetError}
   */


  getOverVoltage() {
    this._assertOpen();

    if (this.data.overVoltage === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.overVoltage;
  }
  /**
   * The device constantly monitors the output voltage, and if it exceeds the `overVoltage` value, it will disconnect the input from the output.
   *
   * *   This functionality is critical for protecting power supplies from regenerated voltage coming from motors. Many power supplies assume that a higher than output expected voltage is related to an internal failure to the power supply, and will permanently disable themselves to protect the system. A typical safe value is to set OverVoltage to 1-2 volts higher than the output voltage of the supply. For instance, a 12V supply would be protected by setting OverVoltage to 13V.
   * *   The device will connect the input to the output again when the voltage drops to (`overVoltage` - 1V)
   * @throws {@link PhidgetError}
   * @param overVoltage - The voltage value
   */


  async setOverVoltage(overVoltage) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: overVoltage
    });
    await bp.send(this._ch, 71);
  }
  /**
   * The minimum value that `overVoltage` can be set to.
   * @returns The voltage value
   * @throws {@link PhidgetError}
   */


  getMinOverVoltage() {
    this._assertOpen();

    if (this.data.minOverVoltage === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minOverVoltage;
  }
  /**
   * The maximum value that `overVoltage` can be set to.
   * @returns The voltage value
   * @throws {@link PhidgetError}
   */


  getMaxOverVoltage() {
    this._assertOpen();

    if (this.data.maxOverVoltage === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxOverVoltage;
  }
  /**
   * When `powerEnabled` is true, the device will connect the input to the output and begin monitoring.
   *
   * *   The output voltage is constantly monitored and will be automatically disconnected from the input when the output exceeds the `overVoltage` value.
   * *   `powerEnabled` allows the device to operate as a Solid State Relay, powering on or off all devices connected to the output.
   * @returns The power enabled value.
   * @throws {@link PhidgetError}
   */


  getPowerEnabled() {
    this._assertOpen();

    if (this.data.powerEnabled === 2) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return !!this.data.powerEnabled;
  }
  /**
   * When `powerEnabled` is true, the device will connect the input to the output and begin monitoring.
   *
   * *   The output voltage is constantly monitored and will be automatically disconnected from the input when the output exceeds the `overVoltage` value.
   * *   `powerEnabled` allows the device to operate as a Solid State Relay, powering on or off all devices connected to the output.
   * @throws {@link PhidgetError}
   * @param powerEnabled - The power enabled value.
   */


  async setPowerEnabled(powerEnabled) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: powerEnabled ? 1 : 0
    });
    await bp.send(this._ch, 56);
  }
  /**
   * Resets the failsafe timer, if one has been set. See `enableFailsafe()` for details.
   *
   * This function will fail if no failsafe timer has been set for the channel.
   * @throws {@link PhidgetError}
   */


  async resetFailsafe() {
    this._assertOpen();

    const bp = new BridgePacket();
    await bp.send(this._ch, 147);
  }

}

/** @public */

class PowerGuard extends PowerGuardBase {}

class SoundSensorBase extends PhidgetChannel {
  constructor(ch) {
    super(ch);
    this.onSPLChange = null;
    this._class = ChannelClass.SOUND_SENSOR;
    this.name = "SoundSensor";
    this.data = this._initData();
  }
  /** @internal */


  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 54:
        if (bp.entryCount > 1) this.data.dataInterval = bp.entries[1].v;else this.data.dataInterval = bp.entries[0].v;

        this._FIREPropertyChange('DataInterval', bp);

        this._FIREPropertyChange('DataRate', bp);

        break;

      case 46:
        this.data.SPLChangeTrigger = bp.entries[0].v;

        this._FIREPropertyChange('SPLChangeTrigger', bp);

        break;

      case 116:
        this.data.SPLRange = bp.entries[0].v;

        this._FIREPropertyChange('SPLRange', bp);

        break;

      case 11:
        {
          this.data.dB = bp.entries[0].v;
          this.data.dBA = bp.entries[1].v;
          this.data.dBC = bp.entries[2].v;
          this.data.octaves = bp.entries[3].v;

          if (this._isAttachedDone && this.onSPLChange) {
            try {
              this.onSPLChange(this.data.dB, this.data.dBA, this.data.dBC, this.data.octaves);
            } catch (err) {
              logEventException(err);
            }
          }

          break;
        }

      default:
        throw new PhidgetError(ErrorCode.INVALID_PACKET, "Unsupported bridge packet: 0x" + bp.vpkt.toString(16));
    }
  }
  /** @internal */


  _initData() {
    return {
      lastdB: 0,
      dataInterval: 1e+300,
      maxDataInterval: 4294967295,
      minDataRate: 1e+300,
      maxDataRate: 1e+300,
      maxdB: 1e+300,
      maxSPLChangeTrigger: 1e+300,
      minDataInterval: 4294967295,
      noiseFloor: 1e+300,
      minSPLChangeTrigger: 1e+300,
      dB: 1e+300,
      dBA: 1e+300,
      dBC: 1e+300,
      octaves: [1e+300, 1e+300, 1e+300, 1e+300, 1e+300, 1e+300, 1e+300, 1e+300, 1e+300, 1e+300],
      SPLRange: 2147483647,
      SPLChangeTrigger: 1e+300
    };
  }
  /** @internal */


  _initAfterOpen() {}
  /** @internal */


  async _setDefaults() {}
  /** @internal */


  _hasInitialState() {
    return true;
  }
  /** @internal */


  _fireInitialEvents() {}
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `SPLChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `SPLChange` events can also be affected by the `SPLChangeTrigger`.
   * @throws {@link PhidgetError}
   */


  get dataInterval() {
    return this.getDataInterval();
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataInterval() {
    return this.getMinDataInterval();
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataInterval() {
    return this.getMaxDataInterval();
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */


  get dataRate() {
    return this.getDataRate();
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get minDataRate() {
    return this.getMinDataRate();
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxDataRate() {
    return this.getMaxDataRate();
  }
  /**
   * The most recent dB SPL value that has been calculated.
   *
   * *   This value is bounded by `maxdB`.
   * @throws {@link PhidgetError}
   */


  get dB() {
    return this.getdB();
  }
  /**
   * The maximum value the `SPLChange` event will report.
   * @throws {@link PhidgetError}
   */


  get maxdB() {
    return this.getMaxdB();
  }
  /**
   * The most recent dBA SPL value that has been calculated.
   *
   * *   The dBA SPL value is calculated by applying a A-weighted filter to the `octaves` data.
   * @throws {@link PhidgetError}
   */


  get dBA() {
    return this.getdBA();
  }
  /**
   * The most recent dBC SPL value that has been calculated.
   *
   * *   The dBC SPL value is calculated by applying a C-weighted filter to the `octaves` data.
   * @throws {@link PhidgetError}
   */


  get dBC() {
    return this.getdBC();
  }
  /**
   * The minimum SPL value that the channel can accurately measure.
   *
   * *   Input SPLs below this level will not produce an output from the microphone.
   * @throws {@link PhidgetError}
   */


  get noiseFloor() {
    return this.getNoiseFloor();
  }
  /**
   * The unweighted value of each frequency band.
   *
   * *   The following frequency bands are represented:
   *
   * *   octaves\[0\] = 31.5 Hz
   * *   octaves\[1\] = 63 Hz
   * *   octaves\[2\] = 125 Hz
   * *   octaves\[3\] = 250 Hz
   * *   octaves\[4\] = 500 Hz
   * *   octaves\[5\] = 1 kHz
   * *   octaves\[6\] = 2 kHz
   * *   octaves\[7\] = 4 kHz
   * *   octaves\[8\] = 8 kHz
   * *   octaves\[9\] = 16 kHz
   * @throws {@link PhidgetError}
   */


  get octaves() {
    return this.getOctaves();
  }
  /**
   * The channel will not issue a `SPLChange` event until the `dB` value has changed by the amount specified by the `SPLChangeTrigger`.
   *
   * *   Setting the `SPLChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   */


  get SPLChangeTrigger() {
    return this.getSPLChangeTrigger();
  }
  /**
   * The minimum value that `SPLChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */


  get minSPLChangeTrigger() {
    return this.getMinSPLChangeTrigger();
  }
  /**
   * The maximum value that `SPLChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */


  get maxSPLChangeTrigger() {
    return this.getMaxSPLChangeTrigger();
  }
  /**
   * When selecting a range, first decide how sensitive you want the microphone to be. Select a smaller range when you want more sensitivity from the microphone.
   *
   * *   If a `Saturation` event occurrs, increase the range.
   * @throws {@link PhidgetError}
   */


  get SPLRange() {
    return this.getSPLRange();
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `SPLChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `SPLChange` events can also be affected by the `SPLChangeTrigger`.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getDataInterval() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.dataInterval;
  }
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `SPLChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `SPLChange` events can also be affected by the `SPLChangeTrigger`.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */


  async setDataInterval(dataInterval) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: dataInterval
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getMinDataInterval() {
    this._assertOpen();

    if (this.data.minDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataInterval;
  }
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */


  getMaxDataInterval() {
    this._assertOpen();

    if (this.data.maxDataInterval === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */


  getDataRate() {
    this._assertOpen();

    if (this.data.dataInterval === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return 1000.0 / this.data.dataInterval;
  }
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */


  async setDataRate(dataRate) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "u",
      value: Math.round(1000.0 / dataRate)
    });
    bp.set({
      name: "1",
      type: "g",
      value: 1000.0 / dataRate
    });
    await bp.send(this._ch, 54);
  }
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMinDataRate() {
    this._assertOpen();

    if (this.data.minDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minDataRate;
  }
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */


  getMaxDataRate() {
    this._assertOpen();

    if (this.data.maxDataRate === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxDataRate;
  }
  /**
   * The most recent dB SPL value that has been calculated.
   *
   * *   This value is bounded by `maxdB`.
   * @returns The dB value
   * @throws {@link PhidgetError}
   */


  getdB() {
    this._assertOpen();

    if (this.data.dB === 1e+300 || Number.isNaN(this.data.dB)) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    if (this.data.dB > this.data.maxdB) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE_HIGH);
    return this.data.dB;
  }
  /**
   * The maximum value the `SPLChange` event will report.
   * @returns The dB value
   * @throws {@link PhidgetError}
   */


  getMaxdB() {
    this._assertOpen();

    if (this.data.maxdB === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxdB;
  }
  /**
   * The most recent dBA SPL value that has been calculated.
   *
   * *   The dBA SPL value is calculated by applying a A-weighted filter to the `octaves` data.
   * @returns The dBA value
   * @throws {@link PhidgetError}
   */


  getdBA() {
    this._assertOpen();

    if (this.data.dBA === 1e+300 || Number.isNaN(this.data.dBA)) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.dBA;
  }
  /**
   * The most recent dBC SPL value that has been calculated.
   *
   * *   The dBC SPL value is calculated by applying a C-weighted filter to the `octaves` data.
   * @returns The dBC value
   * @throws {@link PhidgetError}
   */


  getdBC() {
    this._assertOpen();

    if (this.data.dBC === 1e+300 || Number.isNaN(this.data.dBC)) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.dBC;
  }
  /**
   * The minimum SPL value that the channel can accurately measure.
   *
   * *   Input SPLs below this level will not produce an output from the microphone.
   * @returns The noise floor value.
   * @throws {@link PhidgetError}
   */


  getNoiseFloor() {
    this._assertOpen();

    if (this.data.noiseFloor === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.noiseFloor;
  }
  /**
   * The unweighted value of each frequency band.
   *
   * *   The following frequency bands are represented:
   *
   * *   octaves\[0\] = 31.5 Hz
   * *   octaves\[1\] = 63 Hz
   * *   octaves\[2\] = 125 Hz
   * *   octaves\[3\] = 250 Hz
   * *   octaves\[4\] = 500 Hz
   * *   octaves\[5\] = 1 kHz
   * *   octaves\[6\] = 2 kHz
   * *   octaves\[7\] = 4 kHz
   * *   octaves\[8\] = 8 kHz
   * *   octaves\[9\] = 16 kHz
   * @returns The octave values
   * @throws {@link PhidgetError}
   */


  getOctaves() {
    this._assertOpen();

    if (this.data.octaves.includes(1e+300)) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.octaves;
  }
  /**
   * The channel will not issue a `SPLChange` event until the `dB` value has changed by the amount specified by the `SPLChangeTrigger`.
   *
   * *   Setting the `SPLChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */


  getSPLChangeTrigger() {
    this._assertOpen();

    if (this.data.SPLChangeTrigger === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.SPLChangeTrigger;
  }
  /**
   * The channel will not issue a `SPLChange` event until the `dB` value has changed by the amount specified by the `SPLChangeTrigger`.
   *
   * *   Setting the `SPLChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   * @param SPLChangeTrigger - The change trigger value
   */


  async setSPLChangeTrigger(SPLChangeTrigger) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "g",
      value: SPLChangeTrigger
    });
    await bp.send(this._ch, 46);
  }
  /**
   * The minimum value that `SPLChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */


  getMinSPLChangeTrigger() {
    this._assertOpen();

    if (this.data.minSPLChangeTrigger === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.minSPLChangeTrigger;
  }
  /**
   * The maximum value that `SPLChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */


  getMaxSPLChangeTrigger() {
    this._assertOpen();

    if (this.data.maxSPLChangeTrigger === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.maxSPLChangeTrigger;
  }
  /**
   * When selecting a range, first decide how sensitive you want the microphone to be. Select a smaller range when you want more sensitivity from the microphone.
   *
   * *   If a `Saturation` event occurrs, increase the range.
   * @returns The range value.
   * @throws {@link PhidgetError}
   */


  getSPLRange() {
    this._assertOpen();

    if (this.data.SPLRange === 2147483647) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.SPLRange;
  }
  /**
   * When selecting a range, first decide how sensitive you want the microphone to be. Select a smaller range when you want more sensitivity from the microphone.
   *
   * *   If a `Saturation` event occurrs, increase the range.
   * @throws {@link PhidgetError}
   * @param SPLRange - The range value.
   */


  async setSPLRange(SPLRange) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: SPLRange
    });
    await bp.send(this._ch, 116);
  }

}

/** @public */

class SoundSensor extends SoundSensorBase {
  /** @internal */
  _hasInitialState() {
    if (this.data.dB == 1e+300) return false;
    return true;
  }
  /** @internal */


  _fireInitialEvents() {
    if (this.data.dB != 1e+300) {
      if (this.onSPLChange) {
        try {
          this.onSPLChange(this.data.dB, this.data.dBA, this.data.dBC, this.data.octaves);
        } catch (err) {
          logEventException(err);
        }
      }
    }
  }

}

class HubBase extends PhidgetChannel {
  constructor(ch) {
    super(ch);
    this._class = ChannelClass.HUB;
    this.name = "Hub";
    this.data = this._initData();
  }
  /** @internal */


  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 60:
        break;

      case 183:
        break;

      case 72:
        break;

      case 73:
        break;

      default:
        throw new PhidgetError(ErrorCode.INVALID_PACKET, "Unsupported bridge packet: 0x" + bp.vpkt.toString(16));
    }
  }
  /** @internal */


  _initData() {
    return {};
  }
  /** @internal */


  _initAfterOpen() {}
  /** @internal */


  async _setDefaults() {}
  /** @internal */


  _hasInitialState() {
    return true;
  }
  /** @internal */


  _fireInitialEvents() {}
  /**
   * Sets a flag on this hub port which forces the next VINT devices plugged in to stay in firmware upgrade mode.
   * @throws {@link PhidgetError}
   * @param port - The port the device is plugged into
   * @param timeout - The time to leave the flag set for
   * @internal
   */


  async setFirmwareUpgradeFlag(port, timeout) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: port
    });
    bp.set({
      name: "1",
      type: "u",
      value: timeout
    });
    await bp.send(this._ch, 60);
  }
  /**
   * Enables / disables Auto Set Speed on the hub port. When enabled, and a supported VINT device is attached, the **HubPortSpeed** will automatically be set to the fastest reliable speed. This is enabled by default on supported VINT Hubs.
   * @throws {@link PhidgetError}
   * @param port - The Hub port
   * @param state - The AutoSetSpeed state
   */


  async setPortAutoSetSpeed(port, state) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: port
    });
    bp.set({
      name: "1",
      type: "d",
      value: state ? 1 : 0
    });
    await bp.send(this._ch, 183);
  }
  /**
   * Sets the mode of the selected port. This could be used to set a port back to VINT mode if it was left in digital/analog mode.
   * @throws {@link PhidgetError}
   * @param port - The port being set
   * @param mode - The mode the port is being set to
   */


  async setPortMode(port, mode) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: port
    });
    bp.set({
      name: "1",
      type: "d",
      value: mode
    });
    await bp.send(this._ch, 72);
  }
  /**
   * Controls power to the VINT Hub Port.
   * @throws {@link PhidgetError}
   * @param port - The Hub port
   * @param state - The power state
   */


  async setPortPower(port, state) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "d",
      value: port
    });
    bp.set({
      name: "1",
      type: "d",
      value: state ? 1 : 0
    });
    await bp.send(this._ch, 73);
  }

}

/** @public */

class Hub extends HubBase {
  async getPortMode(port) {
    var _a;

    this._assertAttached();

    if (!this._ch.conn._isLocal) throw new PhidgetError(ErrorCode.UNSUPPORTED);
    if (port < 0 || port > this.hubPortCount - 1) throw new PhidgetError(ErrorCode.INVALID_ARGUMENT, "Value must be in range: 0 - " + (this.hubPortCount - 1) + ".");
    await this.hub._device.openAndUpdatePortProperties(port);
    const mode = (_a = this.hub._device.hubPortProps) === null || _a === void 0 ? void 0 : _a[port].portMode;
    if (mode == undefined) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return mode;
  }

  async getPortPower(port) {
    var _a;

    this._assertAttached();

    if (!this._ch.conn._isLocal) throw new PhidgetError(ErrorCode.UNSUPPORTED);
    if (port < 0 || port > this.hubPortCount - 1) throw new PhidgetError(ErrorCode.INVALID_ARGUMENT, "Value must be in range: 0 - " + (this.hubPortCount - 1) + ".");
    await this.hub._device.openAndUpdatePortProperties(port);
    const power = (_a = this.hub._device.hubPortProps) === null || _a === void 0 ? void 0 : _a[port].portPowered;
    if (power == undefined) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return power;
  }

  getPortMaxSpeed(port) {
    var _a;

    this._assertAttached();

    if (!this._ch.conn._isLocal) throw new PhidgetError(ErrorCode.UNSUPPORTED);
    if (port < 0 || port > this.hubPortCount - 1) throw new PhidgetError(ErrorCode.INVALID_ARGUMENT, "Value must be in range: 0 - " + (this.hubPortCount - 1) + ".");
    const portMaxSpeed = (_a = this.hub._device.hubPortProps) === null || _a === void 0 ? void 0 : _a[port].portMaxSpeed;
    if (portMaxSpeed == undefined) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return portMaxSpeed;
  }

  getPortSupportsAutoSetSpeed(port) {
    var _a;

    this._assertAttached();

    if (!this._ch.conn._isLocal) throw new PhidgetError(ErrorCode.UNSUPPORTED);
    if (port < 0 || port > this.hubPortCount - 1) throw new PhidgetError(ErrorCode.INVALID_ARGUMENT, "Value must be in range: 0 - " + (this.hubPortCount - 1) + ".");
    const portSuppAutoSetSpeed = (_a = this.hub._device.hubPortProps) === null || _a === void 0 ? void 0 : _a[port].portSuppAutoSetSpeed;
    if (portSuppAutoSetSpeed == undefined) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return portSuppAutoSetSpeed;
  }

  getPortSupportsSetSpeed(port) {
    var _a;

    this._assertAttached();

    if (!this._ch.conn._isLocal) throw new PhidgetError(ErrorCode.UNSUPPORTED);
    if (port < 0 || port > this.hubPortCount - 1) throw new PhidgetError(ErrorCode.INVALID_ARGUMENT, "Value must be in range: 0 - " + (this.hubPortCount - 1) + ".");
    const portSuppSetSpeed = (_a = this.hub._device.hubPortProps) === null || _a === void 0 ? void 0 : _a[port].portSuppSetSpeed;
    if (portSuppSetSpeed == undefined) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return portSuppSetSpeed;
  }

  async setFirmwareUpgradeFlag(port, timeout) {
    this._assertAttached();

    if (port < 0 || port > this.hubPortCount - 1) throw new PhidgetError(ErrorCode.INVALID_ARGUMENT, "Value must be in range: 0 - " + (this.hubPortCount - 1) + ".");
    await super.setFirmwareUpgradeFlag(port, timeout);
  }

  async setPortMode(port, mode) {
    this._assertAttached();

    if (port < 0 || port > this.hubPortCount - 1) throw new PhidgetError(ErrorCode.INVALID_ARGUMENT, "Value must be in range: 0 - " + (this.hubPortCount - 1) + ".");
    await super.setPortMode(port, mode);
  }

  async setPortPower(port, state) {
    this._assertAttached();

    if (port < 0 || port > this.hubPortCount - 1) throw new PhidgetError(ErrorCode.INVALID_ARGUMENT, "Value must be in range: 0 - " + (this.hubPortCount - 1) + ".");
    await super.setPortPower(port, state);
  }

  async setPortAutoSetSpeed(port, state) {
    this._assertAttached();

    if (port < 0 || port > this.hubPortCount - 1) throw new PhidgetError(ErrorCode.INVALID_ARGUMENT, "Value must be in range: 0 - " + (this.hubPortCount - 1) + ".");
    await super.setPortAutoSetSpeed(port, state);
  }

}

class FirmwareUpgradeBase extends PhidgetChannel {
  constructor(ch) {
    super(ch);
    /**
     * **ProgressChange** event
     *  * `progress` - The progress, range is 0-1.
     * ---
     * Occurs on firmware upgrade progress.
     * @internal
     */

    this.onProgressChange = null;
    this._class = ChannelClass.FIRMWARE_UPGRADE;
    this.name = "FirmwareUpgrade";
    this.data = this._initData();
  }
  /** @internal */


  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 112:
        break;

      case 113:
        {
          this.data.progress = bp.entries[0].v;

          if (this._isAttachedDone && this.onProgressChange) {
            try {
              this.onProgressChange(this.data.progress);
            } catch (err) {
              logEventException(err);
            }
          }

          break;
        }

      default:
        throw new PhidgetError(ErrorCode.INVALID_PACKET, "Unsupported bridge packet: 0x" + bp.vpkt.toString(16));
    }
  }
  /** @internal */


  _initData() {
    return {
      actualDeviceID: 2147483647,
      actualDeviceVINTID: 4294967295,
      actualDeviceSKU: null,
      actualDeviceVersion: 2147483647,
      actualDeviceName: null,
      progress: 1e+300
    };
  }
  /** @internal */


  _initAfterOpen() {}
  /** @internal */


  async _setDefaults() {}
  /** @internal */


  _hasInitialState() {
    return true;
  }
  /** @internal */


  _fireInitialEvents() {}
  /**
   * TODO: Text Here
   * @throws {@link PhidgetError}
   * @internal
   */


  get actualDeviceID() {
    return this.getActualDeviceID();
  }
  /**
   * TODO: Text Here
   * @throws {@link PhidgetError}
   * @internal
   */


  get actualDeviceName() {
    return this.getActualDeviceName();
  }
  /**
   * TODO: Text Here
   * @throws {@link PhidgetError}
   * @internal
   */


  get actualDeviceSKU() {
    return this.getActualDeviceSKU();
  }
  /**
   * TODO: Text Here
   * @throws {@link PhidgetError}
   * @internal
   */


  get actualDeviceVersion() {
    return this.getActualDeviceVersion();
  }
  /**
   * TODO: Text Here
   * @throws {@link PhidgetError}
   * @internal
   */


  get actualDeviceVINTID() {
    return this.getActualDeviceVINTID();
  }
  /**
   * TODO: Text Here
   * @throws {@link PhidgetError}
   * @internal
   */


  get progress() {
    return this.getProgress();
  }
  /**
   * TODO: Text Here
   * @returns Device ID
   * @throws {@link PhidgetError}
   * @internal
   */


  getActualDeviceID() {
    this._assertOpen();

    if (this.data.actualDeviceID === 2147483647) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.actualDeviceID;
  }
  /**
   * TODO: Text Here
   * @returns Name of the device
   * @throws {@link PhidgetError}
   * @internal
   */


  getActualDeviceName() {
    this._assertOpen();

    if (this.data.actualDeviceName === null) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.actualDeviceName;
  }
  /**
   * TODO: Text Here
   * @returns Device SKU
   * @throws {@link PhidgetError}
   * @internal
   */


  getActualDeviceSKU() {
    this._assertOpen();

    if (this.data.actualDeviceSKU === null) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.actualDeviceSKU;
  }
  /**
   * TODO: Text Here
   * @returns Firmware version
   * @throws {@link PhidgetError}
   * @internal
   */


  getActualDeviceVersion() {
    this._assertOpen();

    if (this.data.actualDeviceVersion === 2147483647) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.actualDeviceVersion;
  }
  /**
   * TODO: Text Here
   * @returns Device VINT ID
   * @throws {@link PhidgetError}
   * @internal
   */


  getActualDeviceVINTID() {
    this._assertOpen();

    if (this.data.actualDeviceVINTID === 4294967295) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.actualDeviceVINTID;
  }
  /**
   * TODO: Text Here
   * @returns Firmware update progress
   * @throws {@link PhidgetError}
   * @internal
   */


  getProgress() {
    this._assertOpen();

    if (this.data.progress === 1e+300) throw new PhidgetError(ErrorCode.UNKNOWN_VALUE);
    return this.data.progress;
  }

}

/** @internal */

class FirmwareUpgrade extends FirmwareUpgradeBase {
  /** @internal */
  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 114:
        break;

      default:
        super._bridgeInput(bp);

        break;
    }
  }
  /** @internal */


  sendFirmware(_data) {
    throw new Error('Method not implemented.');
  }

}

class GenericBase extends PhidgetChannel {
  constructor(ch) {
    super(ch);
    this._class = ChannelClass.GENERIC;
    this.name = "Generic";
    this.data = this._initData();
  }
  /** @internal */


  _bridgeInput(bp) {
    switch (bp.vpkt) {
      default:
        throw new PhidgetError(ErrorCode.INVALID_PACKET, "Unsupported bridge packet: 0x" + bp.vpkt.toString(16));
    }
  }
  /** @internal */


  _initData() {
    return {};
  }
  /** @internal */


  _initAfterOpen() {}
  /** @internal */


  async _setDefaults() {}
  /** @internal */


  _hasInitialState() {
    return true;
  }
  /** @internal */


  _fireInitialEvents() {}

}

/** @internal */

class Generic extends GenericBase {
  /** @internal */
  _bridgeInput(bp) {
    switch (bp.vpkt) {
      default:
        super._bridgeInput(bp);

        break;
    }
  }
  /** @internal */


  sendChannelPacket(_packetType, _index, _packet) {
    throw new Error('Method not implemented.');
  }
  /** @internal */


  sendDevicePacket(_packetType, _packet) {
    throw new Error('Method not implemented.');
  }
  /** @internal */


  sendPacket(_packet) {
    throw new Error('Method not implemented.');
  }

}

var whitespaces$2 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var uncurryThis = functionUncurryThis;
var requireObjectCoercible = requireObjectCoercible$4;
var toString = toString$5;
var whitespaces$1 = whitespaces$2;
var replace = uncurryThis(''.replace);
var whitespace = '[' + whitespaces$1 + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '');
    return string;
  };
};
var stringTrim = {
  start: createMethod(1),
  end: createMethod(2),
  trim: createMethod(3)
};

var PROPER_FUNCTION_NAME = functionName.PROPER;
var fails = fails$f;
var whitespaces = whitespaces$2;
var non = '\u200B\u0085\u180E';
var stringTrimForced = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  });
};

var $ = _export;
var $trim = stringTrim.trim;
var forcedStringTrimMethod = stringTrimForced;
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});

var entryVirtual = entryVirtual$3;
var trim$3 = entryVirtual('String').trim;

var isPrototypeOf = objectIsPrototypeOf;
var method = trim$3;
var StringPrototype = String.prototype;
var trim$2 = function (it) {
  var own = it.trim;
  return typeof it == 'string' || it === StringPrototype
    || (isPrototypeOf(StringPrototype, it) && own === StringPrototype.trim) ? method : own;
};

var parent = trim$2;
var trim$1 = parent;

var trim = trim$1;

class DictionaryBase extends PhidgetChannel {
  constructor(ch) {
    super(ch);
    this.onAdd = null;
    this.onUpdate = null;
    this.onRemove = null;
    this._class = ChannelClass.DICTIONARY;
    this.name = "Dictionary";
    this.data = this._initData();
  }
  /** @internal */


  _bridgeInput(bp) {
    switch (bp.vpkt) {
      case 123:
        break;

      case 131:
        break;

      case 129:
        break;

      case 127:
        break;

      case 132:
        break;

      case 130:
        break;

      case 125:
        break;

      case 124:
        {
          if (this._isAttachedDone && this.onAdd) {
            try {
              this.onAdd(bp.entries[0].v, bp.entries[1].v);
            } catch (err) {
              logEventException(err);
            }
          }

          break;
        }

      case 128:
        {
          if (this._isAttachedDone && this.onRemove) {
            try {
              this.onRemove(bp.entries[0].v);
            } catch (err) {
              logEventException(err);
            }
          }

          break;
        }

      case 126:
        {
          if (this._isAttachedDone && this.onUpdate) {
            try {
              this.onUpdate(bp.entries[0].v, bp.entries[1].v);
            } catch (err) {
              logEventException(err);
            }
          }

          break;
        }

      default:
        throw new PhidgetError(ErrorCode.INVALID_PACKET, "Unsupported bridge packet: 0x" + bp.vpkt.toString(16));
    }
  }
  /** @internal */


  _initData() {
    return {};
  }
  /** @internal */


  _initAfterOpen() {}
  /** @internal */


  async _setDefaults() {}
  /** @internal */


  _hasInitialState() {
    return true;
  }
  /** @internal */


  _fireInitialEvents() {}
  /**
   * Adds a new key value pair to the dictionary. It is an error if the key already exits.
   * @throws {@link PhidgetError}
   * @param key - The key to add
   * @param value - The value to add
   */


  async add(key, value) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "s",
      value: key
    });
    bp.set({
      name: "1",
      type: "s",
      value: value
    });
    await bp.send(this._ch, 123);
  }
  /**
   * Removes every key from the dictionary
   * @throws {@link PhidgetError}
   */


  async removeAll() {
    this._assertOpen();

    const bp = new BridgePacket();
    await bp.send(this._ch, 131);
  }
  /**
   * Removes the key from the dictionary
   * @throws {@link PhidgetError}
   * @param key - The key to remove
   */


  async remove(key) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "s",
      value: key
    });
    await bp.send(this._ch, 127);
  }
  /**
   * Sets the value of a key, or creates the key value pair if the key does not already exist.
   * @throws {@link PhidgetError}
   * @param key - The key to set
   * @param value - The value to set
   */


  async set(key, value) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "s",
      value: key
    });
    bp.set({
      name: "1",
      type: "s",
      value: value
    });
    await bp.send(this._ch, 130);
  }
  /**
   * Updates a key value pair in the dictionary. It is an error if the key does not exist.
   * @throws {@link PhidgetError}
   * @param key - The key to update
   * @param value - The value to set
   */


  async update(key, value) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "s",
      value: key
    });
    bp.set({
      name: "1",
      type: "s",
      value: value
    });
    await bp.send(this._ch, 125);
  }

}

/** @public */

class Dictionary extends DictionaryBase {
  async get(key, def) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "s",
      value: key
    });

    try {
      const val = await bp.send(this._ch, 129);
      return val;
    } catch (err) {
      if (def !== undefined) return def;
      if (err instanceof PhidgetError && err.errorCode === ErrorCode.NO_SUCH_ENTITY) return null;
      throw err;
    }
  }

  async scan(key) {
    this._assertOpen();

    const bp = new BridgePacket();
    bp.set({
      name: "0",
      type: "s",
      value: key !== null && key !== void 0 ? key : ''
    });
    const list = await bp.send(this._ch, 132);
    if (list.length == 0) return [];
    return trim(list).call(list).split('\n');
  }

}

/** @internal */

function CreatePhidgetChannel(ch) {
  switch (ch.class) {
    case ChannelClass.ACCELEROMETER:
      return new Accelerometer(ch);

    case ChannelClass.BLDC_MOTOR:
      return new BLDCMotor(ch);

    case ChannelClass.CAPACITIVE_TOUCH:
      return new CapacitiveTouch(ch);

    case ChannelClass.CURRENT_INPUT:
      return new CurrentInput(ch);

    case ChannelClass.DC_MOTOR:
      return new DCMotor(ch);

    case ChannelClass.DICTIONARY:
      return new Dictionary(ch);

    case ChannelClass.DIGITAL_INPUT:
      return new DigitalInput(ch);

    case ChannelClass.DIGITAL_OUTPUT:
      return new DigitalOutput(ch);

    case ChannelClass.DISTANCE_SENSOR:
      return new DistanceSensor(ch);

    case ChannelClass.ENCODER:
      return new Encoder(ch);

    case ChannelClass.FIRMWARE_UPGRADE:
      return new FirmwareUpgrade(ch);

    case ChannelClass.FREQUENCY_COUNTER:
      return new FrequencyCounter(ch);

    case ChannelClass.GENERIC:
      return new Generic(ch);

    case ChannelClass.GPS:
      return new GPS(ch);

    case ChannelClass.GYROSCOPE:
      return new Gyroscope(ch);

    case ChannelClass.HUB:
      return new Hub(ch);

    case ChannelClass.HUMIDITY_SENSOR:
      return new HumiditySensor(ch);

    case ChannelClass.IR:
      return new IR(ch);

    case ChannelClass.LCD:
      return new LCD(ch);

    case ChannelClass.LIGHT_SENSOR:
      return new LightSensor(ch);

    case ChannelClass.MAGNETOMETER:
      return new Magnetometer(ch);

    case ChannelClass.MOTOR_POSITION_CONTROLLER:
      return new MotorPositionController(ch);

    case ChannelClass.PH_SENSOR:
      return new PHSensor(ch);

    case ChannelClass.POWER_GUARD:
      return new PowerGuard(ch);

    case ChannelClass.PRESSURE_SENSOR:
      return new PressureSensor(ch);

    case ChannelClass.RC_SERVO:
      return new RCServo(ch);

    case ChannelClass.RESISTANCE_INPUT:
      return new ResistanceInput(ch);

    case ChannelClass.RFID:
      return new RFID(ch);

    case ChannelClass.SOUND_SENSOR:
      return new SoundSensor(ch);

    case ChannelClass.SPATIAL:
      return new Spatial(ch);

    case ChannelClass.STEPPER:
      return new Stepper(ch);

    case ChannelClass.TEMPERATURE_SENSOR:
      return new TemperatureSensor(ch);

    case ChannelClass.VOLTAGE_INPUT:
      return new VoltageInput(ch);

    case ChannelClass.VOLTAGE_OUTPUT:
      return new VoltageOutput(ch);

    case ChannelClass.VOLTAGE_RATIO_INPUT:
      return new VoltageRatioInput(ch);

    default:
      throw new Error("Invalid Channel Class");
  }
}

/**
 * @public
 */

class Manager {
  /**
   * The Phidget Manager allows tracking of which Phidgets are available to be controlled from the current program.
   * This is useful for listing all available Phidgets so you can select which ones to use at runtime.
   *
   * You do not need to use a Phidget Manager if you know what Phidgets will be required for your application
   * in advance.
   *
   * Phidget channels that become available will each send an Attach event, and Phidgets that are removed
   * from the system will send corresponding Detach events. If you are using a Phidget Manager, your program
   * is responsible for keeping track of available Phidgets using these events.
   *
   * @param opts - Event callbacks can be specified via this object
   */
  constructor(opts) {
    this.onDeviceAttach = null;
    this.onDeviceDetach = null;
    this.onAttach = null;
    this.onDetach = null;
    this._isopen = false;

    if (typeof opts === 'object') {
      if ('onDeviceAttach' in opts && typeof opts.onDeviceAttach === 'function') this.onDeviceAttach = opts.onDeviceAttach;
      if ('onDeviceDetach' in opts && typeof opts.onDeviceDetach === 'function') this.onDeviceDetach = opts.onDeviceDetach;
      if ('onAttach' in opts && typeof opts.onAttach === 'function') this.onAttach = opts.onAttach;
      if ('onDetach' in opts && typeof opts.onDetach === 'function') this.onDetach = opts.onDetach;
    }
  }

  open() {
    if (this._isopen) return;
    Managers.push(this);

    for (const conn of Connections) {
      if (this.onDeviceAttach) {
        for (const d of values(_context = conn._devices).call(_context)) {
          var _context;

          const phid = new PhidgetDevice(d);

          try {
            this.onDeviceAttach(phid);
          } catch (err) {
            logEventException(err);
          }
        }
      }

      if (this.onAttach) {
        for (const ch of values(_context2 = conn._channels).call(_context2)) {
          var _context2;

          const phid = CreatePhidgetChannel(ch);

          try {
            this.onAttach(phid);
          } catch (err) {
            logEventException(err);
          }
        }
      }
    }

    this._isopen = true;
  }

  close() {
    this._isopen = false;
    if (Managers.includes(this)) Managers.splice(Managers.indexOf(this), 1);
  }
  /** @internal */


  _deviceAttach(dev) {
    if (this._isopen && this.onDeviceAttach) {
      const phdev = new PhidgetDevice(dev);

      try {
        this.onDeviceAttach(phdev);
      } catch (err) {
        logEventException(err);
      }
    }
  }
  /** @internal */


  _deviceDetach(dev) {
    if (this._isopen && this.onDeviceDetach) {
      const phdev = new PhidgetDevice(dev);

      try {
        this.onDeviceDetach(phdev);
      } catch (err) {
        logEventException(err);
      }
    }
  }
  /** @internal */


  _channelAttach(ch) {
    if (this._isopen && this.onAttach) {
      const phch = CreatePhidgetChannel(ch);

      try {
        this.onAttach(phch);
      } catch (err) {
        logEventException(err);
      }
    }
  }
  /** @internal */


  _channelDetach(ch) {
    if (this._isopen && this.onDetach) {
      const phch = CreatePhidgetChannel(ch);

      try {
        this.onDetach(phch);
      } catch (err) {
        logEventException(err);
      }
    }
  }

}

export { Accelerometer, BLDCMotor, BridgeGain, CapacitiveTouch, ChannelClass, ChannelSubclass, NetworkConnection as Connection, CurrentInput, DCMotor, DataAdapterEndianness, DataAdapterHandshakeMode, DataAdapterIOVoltage, DataAdapterParity, DataAdapterProtocol, DataAdapterSPIMode, DataAdapterStopBits, DeviceClass, DeviceID, Dictionary, DigitalInput, DigitalOutput, DistanceSensor, Encoder, EncoderIOMode, ErrorCode, ErrorEventCode, FanMode, FirmwareUpgrade, FrequencyCounter, FrequencyFilterType, GPS, Generic, Gyroscope, Hub, HubPortMode, HumiditySensor, IR, IRCodeEncoding, IRCodeLength, InputMode, JSLibraryVersion, LCD, LCDFont, LCDPixelState, LCDScreenSize, LEDForwardVoltage, LibraryVersion, LightSensor, Log, LogLevel, Magnetometer, Manager, MeshMode, MotorDriveType, MotorPositionController, MotorPositionType, NetworkConnection, PHSensor, PacketErrorCode, Phidget, PhidgetConnection, PhidgetError, PowerGuard, PowerSupply, PressureSensor, RCServo, RCServoVoltage, RFID, RFIDProtocol, RTDType, RTDWireSetup, ResistanceInput, SPLRange, SoundSensor, Spatial, SpatialAlgorithm, SpatialPrecision, Stepper, StepperControlMode, TemperatureSensor, ThermocoupleType, Unit, VoltageInput, VoltageOutput, VoltageOutputRange, VoltageRange, VoltageRatioInput, VoltageRatioSensorType, VoltageSensorType };
//# sourceMappingURL=phidget22.net.esm.js.map
