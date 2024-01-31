# useragent-wizard

[![GitHub license](https://img.shields.io/github/license/mayurchhapra/random-useragent-generator)](https://github.com/mayurchhapra/random-useragent-generator/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/mayurchhapra/random-useragent-generator)](https://github.com/mayurchhapra/random-useragent-generator/issues)
[![GitHub stars](https://img.shields.io/github/stars/mayurchhapra/random-useragent-generator)](https://github.com/mayurchhapra/random-useragent-generator/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/mayurchhapra/random-useragent-generator)](https://github.com/mayurchhapra/random-useragent-generator/network)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/mayurchhapra/random-useragent-generator/CI%2FCD)](https://github.com/mayurchhapra/random-useragent-generator/actions)


A TypeScript library for generating random user agents for various web browsers and platforms.


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [TypeScript](#typescript)
  - [ES6](#es6)
  - [CommonJS](#commonjs)
  - [Options](#options)
- [Examples](#examples)
- [Contribution](#contribution)
- [Development](#development)
- [Issues](#issues)
- [License](#license)
- [Our Contributors](#our-contributors)

## Installation

```bash
npm install useragent-wizard
```

## Usage

### TypeScript

```typescript
import { generateUserAgent } from 'useragent-wizard';

const randomUserAgent = generateUserAgent();
console.log(randomUserAgent);
```

### ES6

```javascript
import { generateUserAgent } from 'useragent-wizard';

const randomUserAgent = generateUserAgent();
console.log(randomUserAgent);
```

### CommonJS

```javascript
const { generateUserAgent } = require('useragent-wizard');

const randomUserAgent = generateUserAgent();
console.log(randomUserAgent);
```

## Options
You can specify a browser for which to generate a user agent:

```typescript
import { generateUserAgent } from 'useragent-wizard';

const chromeUserAgent = generateUserAgent('chrome');
console.log(chromeUserAgent);
```

Possible values for the browser parameter are: `chrome` | `firefox` | `safari` | `ie` | `edge` | `android`. If no browser is specified, a random browser will be chosen.


## Examples

```typescript
import { generateUserAgent } from 'useragent-wizard';


// Generate a random user agent
const randomUserAgent = generateUserAgent();
console.log(randomUserAgent);

// Output:
// => Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.9999.99 Safari/537.36


// Generate a Chrome user agent
const chromeUserAgent = generateUserAgent('chrome');
console.log(chromeUserAgent);

// Output:
// => Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.9999.99 Safari/537.36


// Generate an Android user agent
const androidUserAgent = generateUserAgent('android');
console.log(androidUserAgent);

// Output:
// => Mozilla/5.0 (Linux; Android 10; Pixel 3 Build/QQ3A.200705.002) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/84.0.4147.125 Mobile Safari/537.36
```

## Contribution

We welcome contributions from the community. If you'd like to contribute, please follow these guidelines:

1. Fork the repository and clone it locally.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure tests pass.
4. Push your changes to your fork and submit a pull request to the `main` branch of the `mayurchhapra/random-useragent-generator` repository.

## Development

To set up the development environment, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/mayurchhapra/random-useragent-generator.git
cd random-useragent-generator
```

2. Install the dependencies:

```bash
npm install
```

3. Build the library:

```bash
npm run build
```

## Issues
If you encounter any problems, please [open an issue](https://github.com/mayurchhapra/random-useragent-generator/issues) along with a detailed description on GitHub.

## License
This project is licensed under the [ISC License](https://github.com/mayurchhapra/random-useragent-generator/blob/main/LICENSE).

## Our Contributors ✨
<a href="https://github.com/mayurchhapra/random-useragent-generator/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=mayurchhapra/random-useragent-generator" />
</a>



