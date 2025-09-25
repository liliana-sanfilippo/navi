import * as React from 'react'
import { Chunk } from '@liliana-sanfilippo/navi'

export type ViewHeadRenderer = (chunks: Chunk[]) => React.ReactNode

export const ViewHeadRendererContext = React.createContext<null | ViewHeadRenderer>(
  null,
)
