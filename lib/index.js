/**
 * LevDist
 * Calculates the Levenshtein distance.
 *
 * @name LevDist
 * @function
 * @param {String} s The first string.
 * @param {String} t The second string.
 * @return {Number} The Levenshtein distance value.
 */
function LevDist (s, t) {
    var d = []
      , n = s.length
      , m = t.length
      , i
      , j
      , s_i
      , t_j
      , cost
      , mi
      , b
      , c
      ;

    if (n == 0) return m;
    if (m == 0) return n;

    // Step 1
    for (i = n; i >= 0; --i) { d[i] = []; }

    // Step 2
    for (i = n; i >= 0; --i) { d[i][0] = i; }
    for (j = m; j >= 0; --j) { d[0][j] = j; }

    // Step 3
    for (i = 1; i <= n; ++i) {
        s_i = s.charAt(i - 1);

        // Step 4
        for (j = 1; j <= m; ++j) {

            // Check the jagged ld total so far
            if (i == j && d[i][j] > 4) { return n; }

            t_j = t.charAt(j - 1);

            // Step 5
            cost = (s_i == t_j) ? 0 : 1;

            //Calculate the minimum
            mi = d[i - 1][j] + 1;
            b = d[i][j - 1] + 1;
            c = d[i - 1][j - 1] + cost;

            if (b < mi) { mi = b; }
            if (c < mi) { mi = c; }

            // Step 6
            d[i][j] = mi;

            //Damerau transposition
            if (i > 1 && j > 1 && s_i == t.charAt(j - 2) && s.charAt(i - 2) == t_j) {
                d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + cost);
            }
        }
    }

    // Step 7
    return d[n][m];
}

module.exports = LevDist;
