import React from "react";
import Presets from "../Presets";
import { PresetsProps } from "../Presets/Presets.types";
import {
  ConversationPresetsContainer,
  Header,
} from "./ConversationPresets.styles";

const ConversationPresets = ({ totalIntents, selectedIntents, setSelectedIntents }: PresetsProps) => (
  <ConversationPresetsContainer>
    <Header>Predefined Conversation Presets: </Header>
    <Presets totalIntents={totalIntents} selectedIntents={selectedIntents} setSelectedIntents={setSelectedIntents} />
  </ConversationPresetsContainer>
)

export default ConversationPresets;
