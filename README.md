# levdist [![Support this project][donate-now]][paypal-donations]

A minimal algorithm for computing Levenshtein distance in JavaScript.

## Installation

```sh
$ npm i -g levdist
```

## Example

```js
// Dependencies
var LevDist = require("levdist");

// Output the levdist of these two words
console.log(LevDist("live", "life"));
// => 1
```

## Documentation

### `LevDist(s, t)`
Calculates the Levenshtein distance.

#### Params
- **String** `s`: The first string.
- **String** `t`: The second string.

#### Return
- **Number** The Levenshtein distance value.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`levenshtein-array`](https://github.com/IonicaBizau/node-levenshtein-array)

 - [`line-diff`](https://github.com/IonicaBizau/node-line-diff)

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2014

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md