import { Dispatch, SetStateAction } from "react";
import { MultiIntentType } from "../../types/commonTypes";

export interface ConversationsProps extends MultiIntentType {
    setSelectedIntents: Dispatch<SetStateAction<string[]>>
    searchTerm: string
    onIntentSelect: (id: string) => void
    handleShowAllClick: (id: string) => void
}