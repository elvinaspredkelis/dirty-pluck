# dirty-pluck

## Introduction

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
