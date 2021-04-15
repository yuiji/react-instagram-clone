import React, { useState } from 'react'

import '../../styles/PostMenu.css'
import { ReactComponent as LikeSvg } from '../../assets/icons/like.svg'
import { ReactComponent as LikeFillSvg } from '../../assets/icons/like-fill.svg'
import { ReactComponent as CommentSvg } from '../../assets/icons/comment.svg'
import { ReactComponent as DirectSvg } from '../../assets/icons/direct.svg'
import { ReactComponent as SaveSvg } from '../../assets/icons/save.svg'

const PostMenu = () => {
  const [like, setLike] = useState(false)

  const likeHandler = () => {
    setLike(!like)
  }

  return (
    <div className="post__menu">
      <div className="post__menu__like__section">
        {like ? <LikeFillSvg onClick={likeHandler} /> : <LikeSvg onClick={likeHandler} />}
        <CommentSvg />
        <DirectSvg />
      </div>
      <SaveSvg />
    </div>
  )
}

export default PostMenu