import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const topRanking: FC<IProps> = () => {
  return <div>Template</div>
}

export default memo(topRanking)
