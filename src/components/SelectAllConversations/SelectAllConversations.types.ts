import { Dispatch, SetStateAction } from "react";
import { MultiIntentType } from "../../types/commonTypes";

export interface SelectAllProps extends MultiIntentType {
    setSelectedIntents: Dispatch<SetStateAction<string[]>>
}
