import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PRESET_IDS } from '../../constants/intentPresets';
import { PresetsBlock, SelectIntentsBlock } from './Presets.styles';
import { PresetsProps } from './Presets.types';

const Presets = ({ totalIntents, selectedIntents, setSelectedIntents }: PresetsProps) => {
    const [multiSelect, setMultiSelect] = useState<string[]>([])

    const handleMultiSelectOnClick = (e: any) => {
        const currentSelect: string = e?.target?.innerText
        if (currentSelect) {
            if (multiSelect.includes(currentSelect)) {
                const filteredIntents = selectedIntents.filter((intentId) => !(PRESET_IDS[currentSelect].includes(intentId)))
                multiSelect.splice(multiSelect.indexOf(currentSelect), 1)
                setSelectedIntents([...filteredIntents])
                setMultiSelect([...multiSelect])
            }
            else {
                setSelectedIntents([...selectedIntents, ...PRESET_IDS[currentSelect]])
                setMultiSelect([...multiSelect, currentSelect])
            }
        }
    }

    useEffect(() => {
        const length = selectedIntents.length;
        if(length === 0 ) setMultiSelect([])
        if(length === totalIntents) setMultiSelect(Object.keys(PRESET_IDS))
    }, [selectedIntents, totalIntents])

    return (
        <SelectIntentsBlock onClick={(e) => handleMultiSelectOnClick(e)}>
            {Object.keys(PRESET_IDS).map((id) => <PresetsBlock key={`${id}`} isSelected={multiSelect.includes(id)}>{id}</PresetsBlock>)}
        </SelectIntentsBlock>
    )
}

export default Presets;