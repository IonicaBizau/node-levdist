# levdist [![Support this project][donate-now]][paypal-donations]

A minimal algorithm for computing Levenshtein distance in JavaScript.

## Installation

```sh
$ npm i --save levdist
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

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2014#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md