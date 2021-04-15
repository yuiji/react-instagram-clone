import React, { Component, createContext } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const PostContext = createContext()

class PostContextProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [{
        id: uuidv4(),
        name: 'yalperg',
        likes: 150,
        userImg: this.getRandomImage(),
        postImg: 'https://source.unsplash.com/random',
        comments: [
          { 
            id: uuidv4(),
            commentName: 'yalperg',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, praesentium.'
          },
          { 
            id: uuidv4(),
            commentName: 'yalperg',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, praesentium.'
          },
          { 
            id: uuidv4(),
            commentName: 'yalperg',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, praesentium.'
          }]
      },
      { 
        id: uuidv4(),
        name: 'yalperg',
        likes: 151,
        userImg: this.getRandomImage(),
        postImg: 'https://source.unsplash.com/random',
        comments: [
          { 
            id: uuidv4(),
            commentName: 'yalperg',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, praesentium.'
          },
          { 
            id: uuidv4(),
            commentName: 'yalperg',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, praesentium.'
          },
          { 
            id: uuidv4(),
            commentName: 'yalperg',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, praesentium.'
          }]
      }]
    }
  }

  getRandomImage = () => {
    return `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`
  }

  render() {
    return (
      <PostContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </PostContext.Provider>
    )
  }
}

export default PostContextProvider

