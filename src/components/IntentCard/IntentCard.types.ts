import { IntentType } from "../../types/commonTypes";

export interface IntentCardProps {
    intentData: IntentType
    handleOnClick: (id: string) => void
    handleShowAllClick: (id: string) => void
    isSelected: boolean
}
