import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const SectionContainer = ({children}: Props) => <div
  className="mx-auto max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0">{children}</div>

export default SectionContainer;
