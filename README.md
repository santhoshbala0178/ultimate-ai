## Steps to run the app

`yarn install` - To install all dependencies

`yarn start` - To Start the application in dev mode

`yarn test` - To run the test cases (Only 2 test cases are present currenly)

## Product features and assumptions

### Search Conversations

Searches across all the Intents available and returns the Intents whose Name or
Description matches the query. In real world if we use api for search, we can
add throttle or debounce. Since the data is minimal, these features are not
added.

### Select Category

This feature is a dummy implementation and can be used to filter the intents
based on user's choice.(Assumed that categories filter would be an added feature
from the requirement document i.e. airline, eCommerce)

### Predefined Conversation Presets

From the requirements, it is understood that user would be new to the chatbot
creation process, so adding Predefined sets would help the user to choose
multiple Intents based on their criteria. Ofcourse, these can be edited once the
user understands the platform better.

### Select All Conversations

This feature is used to select/unselect all the available Intents. This would
also automatically update the predefined presets selection in the UI.

### Conversation Card

This covers all the details regarding the intent with the option to
select/unselect the intent. Following details are displayed in the card,

- Displays the Name and Description of the intent
- Checkbox to select/unselect the intent
- Displays one Expression example and the corresponding reply from the chatbot
- Show All Details - On Click, Displays the entire list of expressions in a
  popup

### Save Footer

This is a sticky footer with a save button. On click of the save button, the
selected intent Ids are printed in the console. In future, this data can be used
to fire a POST/PUT api accordingly.

### Show All Details Popup

This is a simple popup, which shows all the details about a particular intent.

## Technical Takeaways

### Setup

- This project is bootstrapped using CRA
- Added Typescript to build type safe application
- Used Styled-Components for styling, so that most of the styles can be reused
  for React Native in future
- Additionally Husky and Prettier configurations are added to ensure code
  formatting on commits

### Assumptions and Roadmap

- State Management Library (Redux) can be used in the real time application. I
  chose not to use Redux, since the application is simple and to avoid
  complexities and boiler plate code.
- Predefined Conversation Presets are maintained as constants locally.
- Header area including Name and Description of an Intent Card is made
  clickable, so that user can select the intent comfartably without focusing on
  checkbox.
- Select Category Component is uncontrolled with no functionality. Added for
  usage in the future.
- In Show All Details popup, we can let the user customize intent by
  adding/editing expressions in the future.
- Animations can be added in the future to make the application more
  interactive. Ex. Sample Chat in the Intent Card can be animated.

### Component Folder Structure

```
Component/
    ├── Component.tsx   # Compontent file
    ├── index.ts
    ├── Component.styles.tsx       # Styles for the component are maintained in this file
    ├── Component.types.tsx        # Types and Props for the component are maintained in this file
    └── __tests__
        ├── Component.mocks.ts     # Mock data used in the test cases are maintained in this file
        └── Component.tests.tsx     # Test cases for the component are maintained in this file
```

### Theme

- Theme used in the application is maintained in `src/theme/common.ts` file.
- Current theme includes the colors from Ultimate.ai logo.
- Changing the colors in the theme file can change the entire color scheme of
  the application.
- Currently only colors are maintained. In the future we can maintain other
  parameters such as padding, margin, width, etc.

### Common Typescript Types

Common types used across the application are maintained in
`src/types/commonTypes.ts`

### Tests

Tests are added only for IntentCard component. Similar test cases can be written
to test all the other components.

### Assets

Images used in the application are maintained in `src/assets` folder
