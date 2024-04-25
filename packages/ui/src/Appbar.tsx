import { Button } from "./button"

interface AppbarProps {
    user?: {
        name?: string | null
    }
    isAuthenticated: boolean
    onSignin: () => void
    onSignout: () => void
}

export const Appbar = ({ isAuthenticated, onSignin, onSignout, user }: AppbarProps) => {
    return (
        <div className="flex items-center justify-between border-b px-4">
            <div className="text-lg font-extrabold flex flex-col justify-center">PayZ</div>
            {!!user?.name && <p className="font-semibold">Welcome {user?.name?.toUpperCase()}</p>}
            <div className="flex flex-col justify-center pt-2">
                <Button onClick={isAuthenticated ? onSignout : onSignin}>{isAuthenticated ? "Logout" : "Login"}</Button>
            </div>
        </div>
    )
}
