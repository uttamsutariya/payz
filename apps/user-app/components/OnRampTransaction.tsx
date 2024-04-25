import { Card } from "@repo/ui/card"
import { OnRampTransaction as OnRampTransactionType } from "../types"

interface OnRampTransactionProps {
    transactions: OnRampTransactionType[]
}

const OnRampTransaction = ({ transactions }: OnRampTransactionProps) => {
    return (
        <Card title="Recent Transactions">
            {!transactions.length ? (
                <div className="text-center pb-8 pt-8">No Recent transactions</div>
            ) : (
                transactions.map((t, index) => (
                    <div className="flex justify-between" key={index}>
                        <div>
                            <div className="text-sm">Received INR</div>
                            <div className="text-slate-600 text-xs">{t.time.toDateString()}</div>
                        </div>
                        <div className="flex justify-center gap-4">
                            <span className={`${t.status === "Processing" ? "text-blue-700" : t.status === "Success" ? "text-green-700" : "text-red-700"} font-semibold`}>{t.status}</span>
                            <span>+ Rs {t.amount / 100}</span>
                        </div>
                    </div>
                ))
            )}
        </Card>
    )
}

export default OnRampTransaction
