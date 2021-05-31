import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
import avatar from '../assets/images/avatar.jpg'

const userSlice = createSlice({
  name: 'postSlice',
  initialState: {
    user: {
      id: uuidv4(),
      username: 'yalperg',
      name: 'Yunus Alper Göl',
      bio: 'DEU | Computer Science',
      photo: avatar,
      followers: ['user-1', 'user-2', 'user-3', 'user-4'],
      following: ['user-1', 'user-2', 'user-3', 'user-4', 'user-5', 'user-6'],
      posts: [
        {
          id: uuidv4(),
          imageUrl: 'https://source.unsplash.com/random',
        },
        {
          id: uuidv4(),
          imageUrl: 'https://source.unsplash.com/random',
        },
        {
          id: uuidv4(),
          imageUrl: 'https://source.unsplash.com/random',
        },
        {
          id: uuidv4(),
          imageUrl: 'https://source.unsplash.com/random',
        },
        {
          id: uuidv4(),
          imageUrl: 'https://source.unsplash.com/random',
        },
        {
          id: uuidv4(),
          imageUrl: 'https://source.unsplash.com/random',
        },
        {
          id: uuidv4(),
          imageUrl: 'https://source.unsplash.com/random',
        },
        {
          id: uuidv4(),
          imageUrl: 'https://source.unsplash.com/random',
        },
        {
          id: uuidv4(),
          imageUrl: 'https://source.unsplash.com/random',
        },
      ],
    },
  },
  reducers: {},
})

export const userActions = userSlice.actions
export default userSlice
