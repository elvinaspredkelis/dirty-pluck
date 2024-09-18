# dirty-pluck

<p>
  <a href="https://www.npmjs.com/package/dirty-pluck">
  <img alt="NPM Version" src="https://img.shields.io/npm/v/dirty-pluck?logo=npm&color=38C160">
  </a>
  <a href="https://bundlephobia.com/package/dirty-pluck">
    <img alt="NPM Bundle Size" src="https://img.shields.io/bundlephobia/minzip/dirty-pluck?label=bundle%20size&logo=npm">
  </a>
</p>

`dirty-pluck` is a tiny and straight-forward library for plucking JSON values. It's great for adapters of all sorts.

## Installation

To add `dirty-pluck` to your project, you can use your favorite package manager.

```bash
npm install dirty-pluck
```

```bash
yarn add dirty-pluck
```

## Usage

`dirty-pluck` is opinionated and not meant to be a query language. However, it's as simple as it gets if you want to pluck whatever values that get in the way.

```javascript
import pluck from "dirty-pluck";

const data = {
  restaurant: {
    title: "The Best Restaurant",
    reviews: [{ rating: 8.5 }, { rating: 2.7 }, { rating: 9.1 }],
  },
};

pluck(data, "restaurant.title");
// => ["The Best Restaurant"]

pluck(data, "restaurant.reviews");
// => [{ rating: 8.5 }, { rating: 2.7 }, { rating: 9.1 }]

pluck(data, "restaurant.reviews.rating");
// => [8.5, 2.7, 9.1]
```

## Licence

`dirty-pluck` is released under the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgements

This package is inspired by [JSONata](https://github.com/jsonata-js/jsonata) and [JMESpath](https://github.com/jmespath/jmespath.js) and fostered by the people at [Primevise](https://primevise.com) and [Mintis](https://mintis.app)
