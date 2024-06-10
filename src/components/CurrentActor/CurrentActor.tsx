'use client'

import { login } from "@/actions/login";

import { Button } from "@/components/Button";

export function CurrentActor() {
    const handler = async () => {
        const res = await login()
        console.log(res)
    }
    return (
        <div>
            <Button onClick={handler}>Log in</Button>
        </div>
    )
}