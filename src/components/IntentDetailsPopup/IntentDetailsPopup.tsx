import React, { useEffect, useRef } from "react";
import CloseButton from "../CloseButton/CloseButton";
import { IntentName } from "../IntentCard/IntentCard.styles";
import { BotExpressionText, BotReplyText, DescriptionText, IntentNameContainer, PlaceHolder, PopupHeader, PopupContainer, TransparentDiv, List } from "./IntentDetailsPopup.styles";
import { IntentDetailsPopupProps } from "./IntentDetailsPopup.types";


const IntentDetailsPopup = ({ intentData, handlePopupClick }: IntentDetailsPopupProps) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleonClick);

    return () => document.removeEventListener("mousedown", handleonClick);
  }, []);

  const handleonClick = (e: any) => {
    if (popupRef && !popupRef?.current?.contains(e.target)) {
      handlePopupClick();
    }
  }

  return (
    <TransparentDiv>
      <PopupContainer ref={popupRef}>
        <PopupHeader>
          <IntentNameContainer>
            <IntentName><b>Title:</b> {intentData?.name}</IntentName>
          </IntentNameContainer>
          <CloseButton handlePopupClose={handlePopupClick} />
        </PopupHeader>
          <DescriptionText><b>Description:</b> {intentData?.description}</DescriptionText>
          <BotReplyText>
            For below questions/messages, the bot replies:  <PlaceHolder>{intentData?.reply?.text}</PlaceHolder>
          </BotReplyText>
          <List>
          {intentData?.trainingData?.expressions?.map((expression, idx) => <BotExpressionText key={`expression_${idx}`}>{expression.text}</BotExpressionText>)}
          </List>
      </PopupContainer>
    </TransparentDiv>
  );
}

export default IntentDetailsPopup;