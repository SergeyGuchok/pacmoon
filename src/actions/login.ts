'use server'

import { twitterClient } from "@/app/lib/twitter";

export async function login () {
    try {
        const { ...data } = await twitterClient.generateAuthLink(
            'https://pacboard.io'
        );

        // const accessToken = await twitterClient.login({
        //     oauth_token,
        //     oauth_token_secret: oauth_token_secret,
        //     oauth_verifier,
        // });

        return data

    } catch (err) {
        return { error: JSON.stringify(err) }
    }
}