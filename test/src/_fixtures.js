import {build} from '#module';

const _lpsa = (p, pi, pj) => {
	// eslint-disable-next-line unicorn/no-new-array
	const t = new Array(pj - pi + 1);
	build(p, pi, pj, t, 0);
	return t;
};

export const lpsa = (input) => _lpsa(input, 0, input.length);
