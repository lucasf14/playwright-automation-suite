# CAG Automation Challenge

## Project Description

This repository contains automated UI and API tests for the Constellation Automotive Group's **Take-Home Code Challenge**.
The tests cover key functionalities such as user login, PIM employee management, dashboard validation, and API CRUD operations using Playwright.

## Project Structure
```bash
src/
├── ui/
│   ├── pages/             # Page Object Models (Login, Dashboard, PIM)
│   ├── tests/             # UI tests (login, PIM, sidebar)
├── clients/
│   └── apiClient.ts       # API client creation
├── schemas/
│   └── user.schema.ts     # JSON schema for API user validation
├── tests/
│   └── api/               # API tests for Users and Authentication
```

## Setup
1. Install Dependencies
```bash
npm install
```

2. Install Playwright Browsers
```
npx playwright install
```

3. Copy the example environment file
```bash
cp .env.example .env
```

4. Edit the **.env** file and set your own credentials and URLs
```bash
API_BASE_URL=https://reqres.in
X_API_KEY=<your_api_key>
UI_BASE_URL=https://opensource-demo.orangehrmlive.com
UI_USERNAME=<your_username>
UI_PASSWORD=<your_password>
```

## Next Steps
1. Run all tests
```bash
npx playwright test
```

2. Run UI Tests on Chromium
```bash
npx playwright test --project=chromium
```

3. Run UI Tests on Firefox
```bash
npx playwright test --project=firefox
```

4. Run UI Tests on Safari
```bash
npx playwright test --project=webkit
```

5. Run API Tests
```bash
npx playwright test --project=api
```

6. View Test Results
```bash
npx playwright show-report
```

## Design Decisions
- **Playwright** was chosen for both UI and API testing to have a single framework covering all suggested scenarios.
- **Page Object Models (POM)** is used for UI tests to improve readability and maintainability.
- **Retry logic** is integrated in tests that interact with dynamic content (on employee search) to reduce flakiness.
- **toHaveScreenshot** is used selectively on the dashboard's Quick Launch widget, which is the only reliably static element at page load, avoiding flaky tests caused by dynamic widgets (e.g. dashboard's pie charts).

## Known Issues
- Employee search in the PIM page can occasionally fail even with retry logic due to timing issues with the table updates.
