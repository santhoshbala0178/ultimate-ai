import { Dispatch, SetStateAction } from "react";

export interface PresetsProps {
    totalIntents: number
    selectedIntents: string[]
    setSelectedIntents: Dispatch<SetStateAction<string[]>>
}
