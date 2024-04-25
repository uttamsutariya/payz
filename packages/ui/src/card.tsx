import { ReactNode } from "react"

export function Card({ title, children }: { title: string; children?: ReactNode }): JSX.Element {
    return (
        <div className="border p-4 shadow-lg hover:shadow-2xl bg-slate-100 rounded-md">
            <h1 className="text-xl font-semibold border-b pb-2">{title}</h1>
            <p>{children}</p>
        </div>
    )
}
