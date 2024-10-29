import { fontSizes } from './font-sizes'
import { paddingSizes } from './padding-sizes'
import { widths } from './widths'

export default function SizeVars({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={
        {
          '--h1-font-size': fontSizes.h1,
          '--h2-font-size': fontSizes.h2,
          '--h3-font-size': fontSizes.h3,
          '--p-font-size': fontSizes.p,
          '--big-p-font-size': fontSizes.bigP,
          '--padding-edges': paddingSizes.edges,
          '--content-width': widths.contentWidth,
          display: 'contents',
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  )
}
