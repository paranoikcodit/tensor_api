# Tensor API Client

A TypeScript client for interacting with the Tensor Trade GraphQL API, built with Bun and urql.

## Overview

This library provides a simple, type-safe client for accessing the Tensor Trade GraphQL API. It's specifically designed to query NFT mint data and portfolio information from the Tensor marketplace.

## Features

- 🚀 Built with [Bun](https://bun.sh) for fast performance
- 📡 Direct GraphQL integration with Tensor Trade API
- 🔐 No authentication required for public queries
- 📦 Lightweight with minimal dependencies
- 🎯 TypeScript support with full type safety

## Installation

```bash
bun install
```

## Usage

### Basic Setup

```typescript
import { createClient } from 'tensor_api';

const client = createClient();
```

### Querying User Portfolio Mints

```typescript
import { createClient } from 'tensor_api';
import { UserPortfolioMints } from 'tensor_api/queries';

const client = createClient();

const result = await client.query(UserPortfolioMints, {
  sortBy: 'CREATED_AT_DESC',
  limit: 10
});

console.log(result.data);
```

## Dependencies

- `@urql/core` - GraphQL client
- `gql.tada` - Type-safe GraphQL queries

## Development

This project was created using `bun init` in bun v1.2.17. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

### Running the project

```bash
bun run src/index.ts
```

### Adding new GraphQL queries

1. Create a new file in `src/queries/`
2. Use the `graphql` function from `src/graphql.ts` to define your query
3. Import and use it with the client

## API Reference

### createClient()

Creates a new GraphQL client instance configured for the Tensor Trade API.

```typescript
const client = createClient();
```

### UserPortfolioMints

A predefined GraphQL query to fetch user portfolio mint data.

Parameters:
- `sortBy`: CollectionMintsSortBy (optional)
- `filters`: CollectionMintsFilters (optional)
- `cursor`: String (optional)
- `limit`: Int (optional)
- `includeUnverified`: Boolean (optional)
- `includeCompressed`: Boolean (optional)
- `includeFrozen`: Boolean (optional)

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request
