export type OnRampTransaction = {
    time: Date
    amount: number
    status: "Processing" | "Failure" | "Success"
    provider: string
}
