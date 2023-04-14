import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { FriendWrapper } from './styled'

interface IProps {
  children?: ReactNode
}

const Focus: FC<IProps> = () => {
  return (
    <FriendWrapper>
      <div className="content wrap-v2">
        <div className="pic">
          <a className="login" href="/#">
            立即登录
          </a>
        </div>
      </div>
    </FriendWrapper>
  )
}

export default memo(Focus)
