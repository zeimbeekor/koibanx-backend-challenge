<p>
  <img src="https://img.shields.io/badge/npm-v8.5.5-blue.svg"
  alt="npm version" />
  <img src="https://img.shields.io/badge/node-%3E%3D%2016.15.0-blue.svg"
  alt="prerequisite node version" />
</p>

# Koibanx Backend Challenge

Koibanx Backend Challenge

## Features

- Create stores
- Get a list of all stores (includes pagination)
- JestJS, Prettier, ESLint, Husky, Lint Stage, Docker Compose, MongoDB (with Mongoose)
- Authentication/Authorization with Bcrypt (include refactor)
- Environment variables
- Logger
- Testing (unit test/integration test)
- Error handling
- Bcrypt
- Password hash generation was refactored and better maintenance in the future (filename: pwd-encrypter.js) `(additional)`
- Middlewares
- Data validator for JavaScript with Joi
- Secure express settings for HTTP headers with helmet `(additional)`
- Validations for pre-commit and pre-push `(additional)`
- Pagination
- DTO
- Others

## Pre Requisities

- [NodeJS](https://nodejs.org/en/)
- [JestJS](https://jestjs.io/docs/getting-started)
- [Docker Desktop](https://www.docker.com/get-started/)
- [Docker Compose](https://docs.docker.com/compose/install/#install-compose)

**Important !**: _Docker Desktop for Mac & Windows already includes Compose, no need to install it separately._

## Environment variables

```bash
cp .env.example .env
```

## Running the app

```bash
# install dependencies
npm install

# run in dev mode (with nodemod)
npm run start:dev

# run in dev prod (without nodemod)
npm run start
```

## Testing

```bash
# using JestJS
npm test
```

## ESLint

```bash
# linter
npm run eslint
```

## Conventional Commits

A specification for adding human and machine readable meaning to commit messages [read more](https://www.conventionalcommits.org/en/v1.0.0/)

Recommended Commit Message Format [read more](https://www.npmjs.com/package/git-commit-msg-linter)

```text
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: Optional, can be anything specifying the scope of the commit change.
  |                          For example $location|$browser|$compile|$rootScope|ngHref|ngClick|ngView, etc.
  |                          In App Development, scope can be a page, a module or a component.
  │
  └─⫸ Commit Type: feat|fix|docs|style|refactor|test|chore|perf|ci|build|temp
```

## Docker

```bash
# run docker compose (docker compose up -d)
make up
```

## Postman Collection

Download: [Koibank Backend Challegen](https://github.com/zeimbeekor/koibanx-backend-challenge/blob/master/misc/docs/store-api.postman_collection.json)

## Screenshots

[Click Here!](https://github.com/zeimbeekor/koibanx-backend-challenge/blob/master/misc/README.md)

## Contributing

* [Alvaro Vega Plata](https://github.com/zeimbeekor)

## License

Check the [LICENSE](LICENSE) file for details
