import { ReactNode } from 'react'
import { TagContainer } from './Styles'

export type Props = {
  size?: 'small' | 'big'
  children: ReactNode
}

const Tag = ({ size = 'small', children }: Props) => {
  return <TagContainer size={size}>{children}</TagContainer>
}

export default Tag
