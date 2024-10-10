# KoinX Backend Assignment

## Overview
This project implements a backend service for cryptocurrency using Node.js, Express, and MongoDB. It fetches cryptocurrency data from an external API (CoinGecko API) and stores it for analysis.

## Features
- Fetch and save cryptocurrency data at regular intervals.
- Provide statistics such as the latest price, market capitalization, and standard deviation of prices for specified cryptocurrencies.


## Public API

### Get stats

```http
  GET https://koin-x-backend-assignment-ankur-singhs-projects-b0407e94.vercel.app/api/v1/crypto/stats
  
  BODY 
  {
    "coin":"your_coin_name"
  }
```



### Get deviation

```http
  GET https://koin-x-backend-assignment-ankur-singhs-projects-b0407e94.vercel.app/api/v1/crypto/deviation

  BODY 
  {
    "coin":"your_coin_name"
  }
```