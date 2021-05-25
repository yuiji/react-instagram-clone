import React, { Component, createContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import avatar from '../assets/images/avatar.jpg'

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
        photo: avatar,
        followers: ['user-1', 'user-2', 'user-3', 'user-4'],
        following: ['user-1', 'user-2', 'user-3', 'user-4','user-5', 'user-6'],
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
