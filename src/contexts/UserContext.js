import React, { Component, createContext } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const UserContext = createContext()

class UserContextProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        id: uuidv4(),
        username: 'yalperg',
        name: 'Yunus Alper Göl',
        bio: 'DEU | Computer Science',
        followers: [1, 2, 3, 4, 5],
        following: [1, 2, 3, 4],
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
          {
            id: uuidv4(),
            imageUrl: 'https://source.unsplash.com/random',
          },
        ],
      },
    }
  }

  render() {
    return (
      <UserContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

export default UserContextProvider
