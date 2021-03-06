/**
 * Computes for each j the largest 0 <= i < j such that
 * p.slice(0, i) is p.slice(j-i, j).
 *
 * This is the "f[j]" table found in
 * "Fast pattern matching in strings" by Knuth, Morris, and Pratt,
 * although here indices are 0-based hence all indices and inputs are one less
 * than in that paper.
 *
 * @param {ArrayLike} p
 * @param {number} pi
 * @param {number} pj
 * @param {number[]} t
 * @param {number} ti
 */
const build = (p, pi, pj, t, ti) => {
	t[ti] = -1;
	let si = ti;
	let m = -1;
	for (let i = pi; i < pj; ++i) {
		while (m >= 0 && p[i] !== p[pi + m]) m = t[ti + m];
		t[++si] = ++m;
	}
};

export default build;
