import React, { useEffect, useState } from "react";
import { IntentType } from "./types/commonTypes";
import IntentDetailsPopup from "./components/IntentDetailsPopup";
import SearchIntent from "./components/SearchIntent";
import {
  CompanyLogoContainer,
  Container,
  PageHeader,
  SaveButton,
  SaveContainer,
} from "./App.styles";
import CategorySelect from "./components/CategorySelect";
import ConversationPresets from "./components/ConversationPresets";
import Conversations from "./components/Conversations";
import Logo from './assets/logo.jpg';

const App = () => {
  const [allIntents, setAllIntents] = useState<IntentType[]>([]);
  const [selectedIntents, setSelectedIntents] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedItemData, setExpandedItemData] = useState<IntentType | null>(null);

  const getAllIntents = () => {
    fetch("data/intents.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAllIntents(data["intents"]);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllIntents();
  }, []);

  const onIntentSelect = (id: string) => {
    if (selectedIntents.includes(id)) {
      selectedIntents.splice(selectedIntents.indexOf(id), 1);
      setSelectedIntents([...selectedIntents]);
    } else {
      setSelectedIntents([...selectedIntents, id]);
    }
  };

  const setItemData = (id?: string) => {
    setExpandedItemData(allIntents.find((intent) => intent?.id === id) || null)
  };
  
  const saveSelectedIntents = () => {
      console.log(`Selected Intents: ${selectedIntents}`)
  }

  return (
    <>
      <Container>
        <PageHeader>
          <CompanyLogoContainer>
            <img src={Logo} alt="Company logo - ultimate.ai" />
          </CompanyLogoContainer>
          <SearchIntent
            searchTerm={searchTerm}
            modifySearchTerm={setSearchTerm}
          />
          <CategorySelect />
        </PageHeader>
        <ConversationPresets totalIntents={allIntents.length || 0} selectedIntents={selectedIntents} setSelectedIntents={setSelectedIntents} />
        <Conversations allIntents={allIntents} selectedIntents={selectedIntents} setSelectedIntents={setSelectedIntents} searchTerm={searchTerm}
          onIntentSelect={onIntentSelect} handleShowAllClick={setItemData} />
      </Container>
      <SaveContainer>
        <SaveButton onClick={saveSelectedIntents}>Save</SaveButton>
      </SaveContainer>
      {expandedItemData && (
        <IntentDetailsPopup
          intentData={expandedItemData}
          handlePopupClick={setItemData}
        />
      )}
    </>
  );
};

export default App;
