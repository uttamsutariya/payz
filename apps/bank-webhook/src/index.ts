import express from "express"
import db from "@repo/db/client"

const app = express()
app.use(express.json())

app.post("/hdfcWebhook", async (req, res) => {
    // validate the request from bank

    const paymentInformation = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount,
    }

    try {
        await db.$transaction([
            db.balance.update({
                where: {
                    userId: paymentInformation.userId,
                },
                data: {
                    amount: {
                        increment: paymentInformation.amount,
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
