import express from "express"
import db from "@repo/db/client"

const app = express()
app.use(express.json())

app.post("/hdfcWebhook", async (req, res) => {
    const paymentInformation = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount,
    }

    const tnx = await db.onRampTransaction.findFirst({
        where: {
            token: paymentInformation.token,
        },
    })

    if (tnx?.status !== "Processing") {
        return res.status(411).json({
            message: "Can't proceed with Failed / Successfull transaction",
        })
    }

    try {
        await db.$transaction([
            db.balance.updateMany({
                where: {
                    userId: Number(paymentInformation.userId),
                },
                data: {
                    amount: {
                        increment: Number(paymentInformation.amount),
                    },
                },
            }),
            db.onRampTransaction.update({
                where: {
                    token: paymentInformation.token,
                },
                data: {
                    status: "Success",
                },
            }),
        ])

        res.status(200).json({
            message: "Captured",
        })
    } catch (error) {
        console.log(error)
        res.status(411).json({
            message: "Error processing webhook",
        })
    }
})

const PORT = 3003

app.listen(PORT, () => {
    console.log(`bank webhook running on ${PORT}`)
})
