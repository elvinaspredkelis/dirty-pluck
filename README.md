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

To add `dirty-pluck` to your project, run:

NPM

```bash
npm install dirty-pluck
```

Yarn

```bash
yarn add dirty-pluck
```

## Usage

```javascript
import pluck from "dirty-pluck";

const data = {
  restaurant: {
    reviews: [{ rating: 8.5 }, { rating: 2.7 }, { rating: 9.1 }],
  },
};

const value = pluck(data, "restaurant.reviews.rating");
// => value = [8.5, 2.7, 9.1]
```
