import {ReactNode} from 'react'

interface TileBackgroundProps {
  children: ReactNode
}

export default ({children}: TileBackgroundProps) => <div className="absolute h-full w-full">{children}</div>
