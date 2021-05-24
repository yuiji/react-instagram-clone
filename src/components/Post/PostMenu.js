import React, { useState, useContext } from 'react'
import { PostContext } from '../../contexts/PostContext'

import { ReactComponent as LikeSvg } from '../../assets/icons/like.svg'
import { ReactComponent as LikeFillSvg } from '../../assets/icons/like-fill.svg'
import { ReactComponent as CommentSvg } from '../../assets/icons/comment.svg'
import { ReactComponent as DirectSvg } from '../../assets/icons/direct.svg'
import { ReactComponent as SaveSvg } from '../../assets/icons/save.svg'
import { ReactComponent as SaveFillSvg } from '../../assets/icons/save-fill.svg'

import '../../styles/PostMenu.css'

const PostMenu = ({ id }) => {
  const { changeLike } = useContext(PostContext)
  const [like, setLike] = useState(false)
  const [save, setSave] = useState(false)

  const likeHandler = () => {
    setLike(true)
    changeLike(id, 'like')
  }

  const unlikeHandler = () => {
    setLike(false)
    changeLike(id, 'unlike')
  }

  const saveHandler = () => {
    setSave(!save)
  }

  return (
    <div className="post__menu">
      <div className="post__menu__like__section">
        {like ? <LikeFillSvg onClick={unlikeHandler} /> : <LikeSvg onClick={likeHandler} />}
        <CommentSvg />
        <DirectSvg />
      </div>
      {save ? <SaveFillSvg onClick={saveHandler} /> : <SaveSvg onClick={saveHandler} />}
    </div>
  )
}

export default PostMenu