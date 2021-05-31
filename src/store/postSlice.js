import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const getRandomImage = () => {
  return `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`
}

const postSlice = createSlice({
  name: 'postSlice',
  initialState: {
    posts: [
      {
        id: uuidv4(),
        name: 'yalperg',
        likes: 151,
        userImg: getRandomImage(),
        postImg: 'https://source.unsplash.com/random',
        comments: [
          {
            id: uuidv4(),
            commentName: 'yalperg',
            comment:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, praesentium.',
          },
          {
            id: uuidv4(),
            commentName: 'yalperg',
            comment:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, praesentium.',
          },
          {
            id: uuidv4(),
            commentName: 'yalperg',
            comment:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, praesentium.',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'yuiji',
        likes: 27,
        userImg: getRandomImage(),
        postImg: 'https://source.unsplash.com/random',
        comments: [
          {
            id: uuidv4(),
            commentName: 'yalperg',
            comment:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, praesentium.',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'yuiji',
        likes: 350,
        userImg: getRandomImage(),
        postImg: 'https://source.unsplash.com/random',
        comments: [
          {
            id: uuidv4(),
            commentName: 'yalperg',
            comment:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, praesentium.',
          },
        ],
      },
    ],
  },
  reducers: {
    changeLikeHandler(state, action) {
      const {id, type} = action.payload
      const idx = state.posts.findIndex(post => post.id === id)

      if (type === 'like') state.posts[idx].likes++
      if (type === 'unlike') state.posts[idx].likes--
    },
    addCommentHandler(state, action) {
      const { id, comment }  = action.payload
      if (comment.comment === '') return
      const idx = state.posts.findIndex(post => post.id === id)

      state.posts[idx].comments.push({
        id: uuidv4(),
        commentName: comment.name,
        comment: comment.comment,
      })
    },
  },
})

export const postActions = postSlice.actions
export default postSlice
