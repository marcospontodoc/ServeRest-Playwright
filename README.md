# ServeRest E2E Tests

E2E automated tests for the [ServeRest](https://front.serverest.dev) application using **Playwright, TypeScript and Page Object Model (POM)**.

## Technologies

- Playwright
- TypeScript
- Node.js
- Docker
- REST API
- Page Object Model

## Test Scope

- Login
- User registration
- Adding products to the shopping list
- Product registration 

> The shopping cart is currently out of scope because it is still under development.

## Project Structure

```text
ServeRest-Playwright/
├── fixtures/
├── pages/
├── tests/
├── utils/
├── .env.example
├── Dockerfile
├── docker-compose.yml
└── playwright.config.ts
```

## Environment

The tests run against the remote ServeRest environment.

Create a `.env` file based on `.env.example`:

```env
BASE_URL=https://front.serverest.dev
API_URL=https://serverest.dev
```

The `.env` file is not committed to the repository.

## Installation

```bash
npm install
npx playwright install
```

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test:

```bash
npx playwright test tests/login.spec.ts
```

Run only Chromium:

```bash
npx playwright test --project=chromium
```

Run with the browser visible:

```bash
npx playwright test --headed
```

Open the HTML report:

```bash
npx playwright show-report
```

## Docker

Build the image:

```bash
docker compose build
```

Run all tests:

```bash
docker compose run --rm tests
```

Run only Chromium:

```bash
docker compose run --rm tests npx playwright test --project=chromium
```

## Test Data

Test users are generated dynamically to avoid dependencies on fixed accounts, since the ServeRest database is periodically reset.

Different user types are supported, including:

- Administrator
- Regular user

API setup is used when necessary to prepare test data.

## Author

**Marcos Paulo**

QA / Software Testing
