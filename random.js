/**
 * A simple random number generator that can be seeded for repeatable number
 * generation.
 */
class RandomGenerator {
  static #max = Math.pow(2, 32);
  seed = Math.round(Math.random() * RandomGenerator.#max);

  /**
   * Generate the next random number and update the seed.
   *
   * @returns {number} A random number between 0 and 1.
   */
  number() {
    this.seed += (this.seed * this.seed) | 5;
    return (this.seed >>> 32) / RandomGenerator.#max;
  }
}
