# Playwright Test Automation Suite

## Project Description

This repository contains an **automated UI and API testing suite** built with **Playwright** and **TypeScript/JavaScript**.
The project demonstrates best practices in test automation, covering:

- REST API testing (CRUD operations, authentication, schema validation)
- UI testing (login, employee management, dashboards, navigation)
- Visual regression testing
- Reusable utilities and Page Object Model (POM) design

It is intended as a **portfolio-ready demonstration** of a robust test automation framework.

---

## Project Structure

```
src/
├── ui/
│   ├── pages/        # Page Object classes (Login, Dashboard, PIM)
│   ├── tests/        # UI test files
│   └── fixtures/     # Test data files and reusable helpers
├── clients/
│   └── apiClient.ts  # API client creation
├── schemas/
│   └── user.schema.ts # JSON schema for API response validation
├── tests/
│   └── api/          # API test files
└── utils/            # Reusable utilities (e.g., data generator)
```

---

## Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Install Playwright Browsers
```bash
npx playwright install
```

### 3. Copy the environment example
```bash
cp .env.example .env
```

### 4. Configure environment variables
```env
UI_BASE_URL=<your_ui_url>
UI_USERNAME=<your_username>
UI_PASSWORD=<your_password>
API_BASE_URL=<your_api_url>
X_API_KEY=<your_api_key>
```

---

## Running Tests

### Run all tests
```bash
npx playwright test
```

### Run UI tests per browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run API tests only
```bash
npx playwright test --project=api
```

### View HTML report
```bash
npx playwright show-report
```

---

## Design Decisions
- **Playwright** was chosen for both UI and API testing to have a single framework covering all suggested scenarios.
- **Page Object Models (POM)** is used for UI tests to improve readability and maintainability.
- **Retry logic** is integrated in tests that interact with dynamic content (on employee search) to reduce flakiness.
- **toHaveScreenshot** is used selectively on the dashboard's Quick Launch widget, which is the only reliably static element at page load, avoiding flaky tests caused by dynamic widgets (e.g. dashboard's pie charts).

---

## Key Features

- API testing with CRUD, authentication, negative scenarios, and schema validation
- UI testing including login, employee management, dashboards, and navigation
- Data-driven tests using utility functions
- Reusable fixtures for better test organization
- CI/CD ready (GitHub Actions supported)
- Environment-based configuration

---

## Known Issues

- Dynamic UI components (e.g., tables or dashboard widgets) may occasionally cause flaky behavior
- Visual snapshots may differ slightly across operating systems (macOS vs Linux)
