import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
  name: string
  age: number
  height?: number
}

const Download: FC<IProps> = (props) => {
  return (
    <div>
      <div>name: {props.name}</div>
      <div>age: {props.age}</div>
      <div>height: {props.height}</div>
      <div>{props.children}</div>
    </div>
  )
}

// Download.defaultProps = {
//   name: 'www',
//   height: 1.88
// }

// Download.displayName = '哈哈哈哈哈'

// 直接对props进行类型约束
// const Download = (props: IProps) => {
//   return (
//     <div>
//       <div>name: {props.name}</div>
//       <div>age: {props.age}</div>
//       <div>height: {props.height}</div>
//     </div>
//   )
// }

export default memo(Download)
