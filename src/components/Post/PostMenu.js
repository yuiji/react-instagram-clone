import React, { useState } from 'react'

import '../../styles/PostMenu.css'
import { ReactComponent as LikeSvg } from '../../assets/icons/like.svg'
import { ReactComponent as LikeFillSvg } from '../../assets/icons/like-fill.svg'
import { ReactComponent as CommentSvg } from '../../assets/icons/comment.svg'
import { ReactComponent as DirectSvg } from '../../assets/icons/direct.svg'
import { ReactComponent as SaveSvg } from '../../assets/icons/save.svg'
import { ReactComponent as SaveFillSvg } from '../../assets/icons/save-fill.svg'

const PostMenu = () => {
  const [like, setLike] = useState(false)
  const [save, setSave] = useState(false)

  const likeHandler = () => {
    setLike(!like)
  }

  const saveHandler = () => {
    setSave(!save)
  }

  return (
    <div className="post__menu">
      <div className="post__menu__like__section">
        {like ? <LikeFillSvg onClick={likeHandler} /> : <LikeSvg onClick={likeHandler} />}
        <CommentSvg />
        <DirectSvg />
      </div>
      {save ? <SaveFillSvg onClick={saveHandler} /> : <SaveSvg onClick={saveHandler} />}
    </div>
  )
}

export default PostMenu