import React, { Component, createContext } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const SuggestionsContext = createContext()

class SuggestionsContextProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      suggestions: [
        {
          id: uuidv4(),
          username: 'alper',
          imageUrl: this.getRandomImage(),
        },
        {
          id: uuidv4(),
          username: 'yuiji',
          imageUrl: this.getRandomImage(),
        },
        {
          id: uuidv4(),
          username: 'yalperg',
          imageUrl: this.getRandomImage(),
        },
        {
          id: uuidv4(),
          username: 'alper_gl',
          imageUrl: this.getRandomImage(),
        },
        {
          id: uuidv4(),
          username: 'lprg2',
          imageUrl: this.getRandomImage(),
        },
      ],
    }
  }

  getRandomImage = () => {
    return `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`
  }

  render() {
    return (
      <SuggestionsContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </SuggestionsContext.Provider>
    )
  }
}

export default SuggestionsContextProvider
