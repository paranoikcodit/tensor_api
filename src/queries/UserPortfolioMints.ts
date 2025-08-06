import { graphql } from "../graphql";

export const UserPortfolioMints = graphql(`
query UserPortfolioMints(
	$sortBy: CollectionMintsSortBy!
	$filters: CollectionMintsFilters
	$cursor: String
	$limit: Int
	$includeUnverified: Boolean
	$includeCompressed: Boolean
	$includeFrozen: Boolean
) {
	mintsV2(
		sortBy: $sortBy
		filters: $filters
		cursor: $cursor
		limit: $limit
		includeFrozen: $includeFrozen
		includeUnverified: $includeUnverified
		includeCompressed: $includeCompressed
	) {
		mints {
			...MintWithTx
			mint {
				numMints
				collection {
					name
					imageUri
					slugDisplay
					__typename
				}
				__typename
			}
			__typename
		}
		page {
			endCursor
			hasMore
			__typename
		}
		__typename
	}
}

fragment MintWithTx on MintWithTx {
	mint {
		...MintV2
		__typename
	}
	tx {
		...ReducedParsedTx
		__typename
	}
	__typename
}

fragment MintV2 on MintV2 {
	onchainId
	slug
	compressed
	owner
	name
	imageUri
	animationUri
	metadataUri
	metadataFetchedAt
	files {
		type
		uri
		__typename
	}
	sellRoyaltyFeeBPS
	tokenStandard
	tokenEdition
	attributes {
		trait_type
		value
		__typename
	}
	lastSale {
		price
		txAt
		__typename
	}
	accState
	hidden
	rarityRankHrtt
	rarityRankStat
	rarityRankTeam
	rarityRankTn
	inscription {
		...InscriptionData
		__typename
	}
	tokenProgram
	metadataProgram
	transferHookProgram
	listingNormalizedPrice
	hybridAmount
	__typename
}

fragment InscriptionData on InscriptionData {
	inscription
	inscriptionData
	immutable
	order
	spl20 {
		p
		tick
		amt
		__typename
	}
	__typename
}

fragment ReducedParsedTx on ParsedTransaction {
	source
	txKey
	txId
	txType
	grossAmount
	sellerId
	buyerId
	txAt
	blockNumber
	txMetadata {
		auctionHouse
		urlId
		sellerRef
		tokenAcc
		__typename
	}
	poolOnchainId
	lockOnchainId
	__typename
}`);
