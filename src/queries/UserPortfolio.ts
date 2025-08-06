import { graphql } from "../graphql";

export const UserPortfolio =
	graphql(`query UserPortfolio($wallet: [String!]!, $includeUnverified: Boolean, $includeCompressed: Boolean) {
  userActiveListingsV2(
    wallets: $wallet
    slug: null
    sortBy: PriceAsc
    includeCompressed: $includeCompressed
  ) {
    txs {
      ...ReducedLinkedTxMintWithColl
      __typename
    }
    __typename
  }
  userPortfolioCollections(
    wallets: $wallet
    includeUnverified: $includeUnverified
    includeCompressed: $includeCompressed
  ) {
    slug
    slugDisplay
    tensorVerified
    name
    imageUri
    statsV2 {
      buyNowPrice
      sellNowPrice
      numMints
      __typename
    }
    sellRoyaltyFeeBPS
    tokenStandard
    listedCount
    mintCount
    bidCount
    favCount
    compressed
    inscription
    inscriptionMetaplex
    spl20
    spl20Deployment
    spl20Liquid
    isJpegsFun
    __typename
  }
  userPortfolioBids(
    wallets: $wallet
    filterOutOwn: true
    includeCompressed: $includeCompressed
  ) {
    ...ReducedMintBid
    __typename
  }
}

fragment ReducedMintWithColl on MintWithColl {
  ...ReducedMint
  collName
  slug
  slugDisplay
  numMints
  __typename
}

fragment ReducedMint on TLinkedTxMintTV2 {
  onchainId
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
  ...MintRarityFields
  staked {
    stakedAt
    activatedAt
    stakedByOwner
    __typename
  }
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

fragment MintRarityFields on TLinkedTxMintTV2 {
  rarityRankHrtt
  rarityRankStat
  rarityRankTeam
  rarityRankTn
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

fragment ReducedLinkedTxMintWithColl on LinkedTransactionMintWithColl {
  tx {
    ...ReducedParsedTx
    __typename
  }
  mint {
    ...ReducedMintWithColl
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
}


fragment ReducedMintBid on MintBid {
  mint {
    slug
    numMints
    ...ReducedMint
    __typename
  }
  bidder
  margin
  price
  mp
  validFrom
  expiry
  isTopBid
  reaction {
    ...ReducedOfferReaction
    __typename
  }
  __typename
}

fragment ReducedOfferReaction on OfferReaction {
  owner
  mintOnchainId
  reaction
  amount
  createdAt
  __typename
}`);
