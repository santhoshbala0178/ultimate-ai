import React, { useEffect, useState } from 'react';
import { SelectAll } from './SelectAllConversations.styles';
import { SelectAllProps } from './SelectAllConversations.types';

const SelectAllConversations = ({ allIntents, selectedIntents, setSelectedIntents }: SelectAllProps) => {
    const [allSelected, setAllselected] = useState(false)

    const handleSelectAll = (e: any) => {
        if (!allSelected) {
            setSelectedIntents(allIntents.map((intent) => intent?.id))
        }
        else {
            setSelectedIntents([])
        }
    }

    useEffect(() => {
        if (selectedIntents.length > 0 && selectedIntents.length === allIntents.length) {
            setAllselected(true)
        }
        else {
            setAllselected(false)
        }
    }, [selectedIntents.length, allIntents.length])

    return <SelectAll allSelected={allSelected} onClick={(e) => handleSelectAll(e)}> {allSelected ? 'Unselect All' : 'Select All'} </SelectAll>
}

export default SelectAllConversations;
