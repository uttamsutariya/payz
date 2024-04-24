import { Button } from "./button"

interface AppbarProps {
    isAuthenticated: boolean
    onSignin: () => void
    onSignout: () => void
}

export const Appbar = ({ isAuthenticated, onSignin, onSignout }: AppbarProps) => {
    return (
        <div className="flex justify-between border-b px-4">
            <div className="text-lg font-extrabold flex flex-col justify-center">PayZ</div>
            <div className="flex flex-col justify-center pt-2">
                <Button onClick={isAuthenticated ? onSignout : onSignin}>{isAuthenticated ? "Logout" : "Login"}</Button>
            </div>
        </div>
    )
}
