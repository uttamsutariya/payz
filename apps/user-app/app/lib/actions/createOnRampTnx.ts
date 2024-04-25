"use server"

import { getServerSession } from "next-auth"
import { authOptions } from "../auth"
import db from "@repo/db/client"

export async function createOnRampTransaction(provider: string, amount: number) {
    if (amount <= 0) {
        return {
            message: "Amount must be greater than 0",
        }
    }

    const session = await getServerSession(authOptions)

    if (!session?.user || !session.user?.id) {
        return {
            message: "Unauthenticated request",
        }
    }

    const token = `token_${Math.floor(Math.random() * 100000000).toString()}`

    await db.onRampTransaction.create({
        data: {
            provider,
            token,
            amount: amount * 100,
            startTime: new Date(),
            status: "Processing",
            userId: Number(session?.user?.id),
        },
    })

    return {
        message: "done",
    }
}
