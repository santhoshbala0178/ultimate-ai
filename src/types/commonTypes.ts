import { Dispatch, SetStateAction } from 'react'

interface TextDataType {
  id: string
  text: string
}

export interface IntentType {
  id: string
  name: string
  description: string
  trainingData: {
    expressionCount: number
    expressions: TextDataType[]
  }
  reply: TextDataType
}

export interface MultiIntentType {
  allIntents: IntentType[]
  selectedIntents: string[]
}
