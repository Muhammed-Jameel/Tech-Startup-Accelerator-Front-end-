'use strict';

var test = require('tape');

if (typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol') {
	test('has native Symbol.toStringTag support', function (t) {
		t.equal(typeof Symbol, 'function');
		t.equal(typeof Symbol.toStringTag, 'symbol');
		t.end();
	});
	return;
}

var hasSymbolToStringTag = require('../../shams');

test('polyfilled Symbols', function (t) {
	/* eslint-disable global-require */
	t.equal(hasSymbolToStringTag(), false, 'hasSymbolToStringTag is false before polyfilling');
	require('core-js/fn/symbol');
	require('core-js/fn/symbol/to-string-tag');

	require('../tests')(t);

	var hasToStringTagAfter = hasSymbolToStringTag();
	t.equal(hasToStringTagAfter, true, 'hasSymbolToStringTag is true after polyfilling');
	/* eslint-enable global-require */
	t.end();
});
