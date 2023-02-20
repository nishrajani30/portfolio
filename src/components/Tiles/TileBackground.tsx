import {ReactNode} from 'react'

interface TileBackgroundProps {
  children: ReactNode
}

const TileBackground = ({children}: TileBackgroundProps) => <div className="absolute h-full w-full">{children}</div>

export default TileBackground;
