import { IntentType } from "../../types/commonTypes";

export interface IntentDetailsPopupProps {
    intentData: IntentType | undefined
    handlePopupClick: (id?: string) => void
}
