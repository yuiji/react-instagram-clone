import React, { Component, createContext } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const PostContext = createContext()

class PostContextProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [
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
          userImg: this.getRandomImage(),
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
          userImg: this.getRandomImage(),
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
    }
  }

  changeLikeHandler = (id, type) => {
    const idx = this.state.posts.findIndex(post => post.id === id)
    const newPosts = [...this.state.posts]

    if (type === 'like') newPosts[idx].likes++
    if (type === 'unlike') newPosts[idx].likes--

    this.setState({
      posts: newPosts,
    })
  }

  addCommentHandler = (id, comment) => {
    if(comment.comment === '') return 
    const idx = this.state.posts.findIndex(post => post.id === id)
    const newPosts = [...this.state.posts]

    newPosts[idx].comments.push({
      id: uuidv4(),
      commentName: comment.name,
      comment: comment.comment,
    })

    this.setState({
      posts: newPosts,
    })
  }

  getRandomImage = () => {
    return `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`
  }

  render() {
    return (
      <PostContext.Provider
        value={{
          ...this.state,
          changeLike: this.changeLikeHandler,
          addComment: this.addCommentHandler,
        }}>
        {this.props.children}
      </PostContext.Provider>
    )
  }
}

export default PostContextProvider
