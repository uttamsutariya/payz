"use client"

import { ReactNode } from "react"

interface ButtonProps {
    disabled: boolean
    children: ReactNode
    onClick: () => void
}

export const Button = ({ onClick, children, disabled }: ButtonProps) => {
    return (
        <button disabled={disabled} onClick={onClick} type="button" className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer disabled:cursor-not-allowed">
            {children}
        </button>
    )
}
