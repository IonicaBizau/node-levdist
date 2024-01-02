declare module 'levdist' {
    /**
     * Calculates the Levenshtein distance.
     *
     * @param {string} s The first string.
     * @param {string} t The second string.
     * @return {number} The Levenshtein distance value.
     */
    type LevDist = (s: string, t: string) => number;

    export = LevDist;
}
