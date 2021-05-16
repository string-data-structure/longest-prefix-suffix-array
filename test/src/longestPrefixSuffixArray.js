import test from 'ava';

import {lpsa} from './_fixtures.js';

const isLongestPrefixSuffixArray = (t, table, input) => {
	t.is(table[0], -1);
	for (let i = 1; i <= input.length; ++i) {
		t.not(table[i], -1);
		// Prefix and suffix match
		t.is(input.slice(0, table[i]), input.slice(i - table[i], i));
		if (table[i] + 1 < i) {
			// A longer prefix/suffix pair does not match
			t.not(input.slice(0, table[i] + 1), input.slice(i - (table[i] + 1), i));
		}
	}
};

const macro = (t, input, expected) => {
	const table = lpsa(input);
	t.deepEqual(table, expected);
	isLongestPrefixSuffixArray(t, table, input);
};

macro.title = (title, input, expected) =>
	title ?? `lpsa(${input}) is ${JSON.stringify(expected)}`;

const auto = (t, input) => {
	const table = lpsa(input);
	isLongestPrefixSuffixArray(t, table, input);
};

auto.title = (title, input) =>
	title ?? `isLongestPrefixSuffixArray(lpsa(${input}))`;

test(macro, '', [-1]);
test(macro, 'abcd', [-1, 0, 0, 0, 0]);
test(macro, 'aaaa', [-1, 0, 1, 2, 3]);
test(macro, 'axax', [-1, 0, 0, 1, 2]);
test(macro, 'axxa', [-1, 0, 0, 0, 1]);
test(macro, 'aaaab', [-1, 0, 1, 2, 3, 0]);
test(macro, 'abcabcacab', [-1, 0, 0, 0, 1, 2, 3, 4, 0, 1, 2]);
test(macro, 'abracadabra', [-1, 0, 0, 0, 1, 0, 1, 0, 1, 2, 3, 4]);
test(
	macro,
	'abaababaabaababaababa',
	[-1, 0, 0, 1, 1, 2, 3, 2, 3, 4, 5, 6, 4, 5, 6, 7, 8, 9, 10, 11, 7, 8],
);

test(auto, 'eifoiwhfeldkasjflkdshfldshflkkdadkkkkkkkkkkkkasjfdljfdleifo');
test(auto, 'aaaaaaaaaaaabbbbbbbbbbaaaaaaaaabbbbbbbb');
