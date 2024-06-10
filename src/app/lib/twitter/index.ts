import { TwitterApiRateLimitPlugin } from '@twitter-api-v2/plugin-rate-limit'
import { TwitterApi } from 'twitter-api-v2';

import {TwitterApiTokens} from "twitter-api-v2";

const rateLimitPlugin = new TwitterApiRateLimitPlugin()

console.log(process.env.TWITTER_API_KEY, process.env.TWITER_API_KEY_SECRET)

const client = new TwitterApi({
    appKey: process.env.TWITTER_API_KEY,
    appSecret: process.env.TWITTER_API_KEY_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
} as TwitterApiTokens, { plugins: [rateLimitPlugin] });

const bearer = new TwitterApi(process.env.TWITER_BEARER_TOKEN as string, { plugins: [rateLimitPlugin] });

export const twitterClient = client.readWrite;
export const twitterBearer = bearer.readOnly;