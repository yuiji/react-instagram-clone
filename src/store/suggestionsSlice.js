import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const getRandomImage = () => {
  return `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`
}

const suggestionsSlice = createSlice({
  name: 'postSlice',
  initialState: {
    suggestions: [
      {
        id: uuidv4(),
        username: 'alper',
        imageUrl: getRandomImage(),
      },
      {
        id: uuidv4(),
        username: 'yuiji',
        imageUrl: getRandomImage(),
      },
      {
        id: uuidv4(),
        username: 'yalperg',
        imageUrl: getRandomImage(),
      },
      {
        id: uuidv4(),
        username: 'alper_gl',
        imageUrl: getRandomImage(),
      },
      {
        id: uuidv4(),
        username: 'lprg2',
        imageUrl: getRandomImage(),
      },
    ],
  },
  reducers: {},
})

export const suggestionsActions = suggestionsSlice.actions
export default suggestionsSlice
