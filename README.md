# 🚦 Cypress Automation Framework: Scalable & Modular QA System

A modular, future-proof Cypress Automation Framework designed for scalable test automation across web applications.  
Built with Page Object Models, API Testing, E2E Scenarios, and CI/CD Integration, this framework is reusable across multiple projects.

---
1. Create and switch to a new branch
   
    git checkout -b project-setup

2. Create folder structure for reusable modules

   mkdir -p framework modules/page-objects tests/e2e tests/api tests/component tools/ci docs reports examples


3. Add placeholder files (so Git tracks empty folders)

    echo "# Cypress Automation Framework Utilities" > framework/README.md
    echo "# Page Object Models" > modules/page-objects/README.md
    echo "# E2E Scenarios" > tests/e2e/README.md
    echo "# API Tests" > tests/api/README.md
    echo "# Component Tests" > tests/component/README.md
    echo "# CI/CD & Tooling" > tools/ci/README.md
    echo "# Documentation" > docs/README.md
    echo "# Reports (ignored in .gitignore)" > reports/README.md
    echo "# Example Test Data" > examples/README.md


4. Stage and commit changes 
    git add .
    git commit -m "Project setup: modular Cypress framework with reusable structure"

5. Push new branch to GitHub
    git push -u origin project-setup


6. Framework scaffolding (local-first)
    npm init -y

    1.Core Cypress & TypeScript
    npm install cypress typescript ts-node --save-dev
    2.Linters & formatters
    npm install eslint prettier eslint-config-prettier eslint-plugin-prettier --save-dev
    3.Optional plugins & utilities
    npm install @cypress/webpack-dev-server mochawesome cypress-axe cypress-file-upload --save-dev
    npm install cypress-file-upload cypress-axe --save-dev


7.Initialize TypeScript config
npx tsc --init

Recommended tsconfig.json for Cypress:
{
  "compilerOptions": {
    "target": "ES6",
    "lib": ["es6", "dom"],
    "types": ["cypress", "node"],
    "moduleResolution": "node",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "strict": true
  },
  "include": ["**/*.ts"]
}
Step 3: Set up ESLint & Prettier
Create .eslintrc.json:
 {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:cypress/recommended",
    "prettier"
  ],
  "plugins": ["@typescript-eslint", "cypress", "prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}



Create .prettierrc:
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100
}

Step 4: Cypress Configuration
Create cypress.config.ts in project root

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',
    supportFile: 'framework/commands/index.ts',
    specPattern: 'tests/e2e/**/*.spec.ts',
    setupNodeEvents(on, config) {
      // configure plugins here if needed
    }
  },
  video: false,
  screenshotsFolder: 'reports/screenshots',
  videosFolder: 'reports/videos'
});





