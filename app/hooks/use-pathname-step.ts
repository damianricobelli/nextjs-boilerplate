import { usePathname } from "next/navigation"
import { Step } from "../components/stepper"

export function usePathnameStep(){
    const pathname = usePathname()
    const step = pathname.split("/")[1] as Step
    return step
}