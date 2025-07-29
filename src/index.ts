import { Client, cacheExchange, fetchExchange } from "@urql/core";

export { UserPortfolioMints } from "./queries/UserPortfolioMints";

export const createClient = () =>
	new Client({
		fetchOptions: () => ({
			headers: {
				"user-agent":
					"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
			},
		}),
		url: "https://graphql.tensor.trade/graphql",
		exchanges: [cacheExchange, fetchExchange],
	});
