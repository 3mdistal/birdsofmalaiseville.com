import type { Breakpoint } from './breakpoints'
import { breakpoints } from './breakpoints'

export default function generateFluidClampString(
  minSizeInRem: number,
  maxSizeInRem: number,
  minBreakpoint: Breakpoint,
  maxBreakpoint: Breakpoint,
) {
  const minViewportWidthInRem = breakpoints[minBreakpoint]
  const maxViewportWidthInRem = breakpoints[maxBreakpoint]

  // Calculate the slope (how much the size changes per rem of viewport width)
  const slope = (maxSizeInRem - minSizeInRem) / (maxViewportWidthInRem - minViewportWidthInRem)

  // Calculate the intercept (the size at the minimum viewport width)
  const intercept = minSizeInRem - minViewportWidthInRem * slope

  // Construct the clamp() function string
  const clampString = `clamp(${minSizeInRem}rem, ${intercept}rem + ${slope * 100}vw, ${maxSizeInRem}rem)`

  return clampString
}
