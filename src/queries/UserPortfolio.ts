import { graphql } from "../graphql";

export const UserPortfolio =
	graphql(`query UserPortfolio($wallet: String!, $includeUnverified: Boolean, $includeCompressed: Boolean) {
  stakedTensorians(owner: $wallet) {
    ...ReducedMintWithColl
    __typename
  }
  userActiveListingsV2(
    wallets: [$wallet]
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
  userTswapOrders(owner: $wallet) {
    ...ReducedTSwapPoolWithColl
    __typename
  }
  userHswapOrders(owner: $wallet) {
    ...ReducedHSwapPoolWithColl
    __typename
  }
  userTAmmOrders(owner: $wallet) {
    ...ReducedTAmmPoolWithColl
    __typename
  }
  userTcompBids(owner: $wallet) {
    ...ReducedTCompBidWithColl
    __typename
  }
  userPortfolioCollections(
    wallets: [$wallet]
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
    wallets: [$wallet]
    filterOutOwn: true
    includeCompressed: $includeCompressed
  ) {
    ...ReducedMintBid
    __typename
  }
  userPNL(wallet: $wallet) {
    totalValue
    totalCostBasis
    totalPNL
    slugPNL {
      slug
      value
      costBasis
      pnl
      __typename
    }
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

fragment ReducedTSwapPoolWithColl on TSwapPoolWithColl {
  pool {
    ...ReducedTSwapPool
    __typename
  }
  slug
  collName
  floorPrice
  numMints
  __typename
}

fragment ReducedTSwapPool on TSwapPool {
  address
  ownerAddress
  whitelistAddress
  poolType
  curveType
  startingPrice
  delta
  mmCompoundFees
  mmFeeBalance
  mmFeeBps
  takerSellCount
  takerBuyCount
  nftsHeld
  solBalance
  createdUnix
  statsTakerSellCount
  statsTakerBuyCount
  statsAccumulatedMmProfit
  margin
  marginNr
  lastTransactedAt
  maxTakerSellCount
  nftsForSale {
    ...ReducedMint
    __typename
  }
  __typename
}

fragment ReducedHSwapPoolWithColl on HSwapPoolWithColl {
  pool {
    ...ReducedHSwapPool
    __typename
  }
  slug
  collName
  floorPrice
  numMints
  __typename
}

fragment ReducedHSwapPool on HSwapPool {
  address
  pairType
  delta
  curveType
  baseSpotPrice
  feeBps
  mathCounter
  assetReceiver
  boxes {
    address
    vaultTokenAccount
    mint {
      ...ReducedMint
      __typename
    }
    __typename
  }
  feeBalance
  buyOrdersQuantity
  fundsSolOrTokenBalance
  createdAt
  lastTransactedAt
  __typename
}

fragment ReducedTAmmPoolWithColl on TAmmPoolWithColl {
  pool {
    ...ReducedTAmmPool
    __typename
  }
  slug
  collName
  floorPrice
  numMints
  __typename
}

fragment ReducedTAmmPool on TAmmPool {
  address
  owner
  whitelist
  poolType
  curveType
  startingPrice
  delta
  mmCompoundFees
  mmFeeBps
  priceOffset
  nftsHeld
  solBalance
  createdUnix
  statsTakerSellCount
  statsTakerBuyCount
  statsAccumulatedMmProfit
  sharedEscrow
  marginNr
  updatedUnix
  maxTakerSellCount
  nftsForSale {
    ...ReducedMint
    __typename
  }
  __typename
}

fragment ReducedTCompBidWithColl on TCompBidWithColl {
  bid {
    ...ReducedTCompBid
    __typename
  }
  marginNr
  collInfo {
    slug
    name
    floorPrice
    numMints
    __typename
  }
  __typename
}

fragment ReducedTCompBid on TCompBid {
  address
  target
  targetId
  field
  fieldId
  amount
  solBalance
  ownerAddress
  filledQuantity
  quantity
  margin
  marginNr
  createdAt
  attributes {
    trait_type
    value
    __typename
  }
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
