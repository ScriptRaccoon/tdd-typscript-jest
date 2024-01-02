# TDD in TypeScript with Jest

This is a small repository used for a tutorial on TDD in TypeScript with [Jest](https://jestjs.io/).

## Setup

1. Install the dependencies:

#### With pnpm

```bash
pnpm add -D jest @types/jest ts-jest typescript
```

#### With npm

```bash
npm install -D jest @types/jest ts-jest typescript
```

2. Create `jest.config.js`.

```js
/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
	preset: "ts-jest",
	testEnvironment: "node",
}
```

3. Create `tsconfig.json`.

```json
{
	"compilerOptions": {
		"target": "es6",
		"moduleResolution": "node",
		"esModuleInterop": true,
		"types": ["@types/jest"],
		"outDir": "./dist"
	},
	"include": ["src/**/*.ts"],
	"exclude": ["node_modules/", "**/*.spec.ts"]
}
```

4. (optional) Add scripts to `package.json`.

```json
{
	// rest of the file...
	"type": "module",
	"scripts": {
		"build": "tsc",
		"test": "jest --passWithNoTests",
		"test:watch": "jest --passWithNoTests --watchAll",
		"coverage": "jest --passWithNoTests --coverage"
	}
}
```

Now write tests in test files named `*.spec.ts`.
