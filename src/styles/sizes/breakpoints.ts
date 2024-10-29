export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export const breakpoints: Record<Breakpoint, number> = {
  xs: 32,
  sm: 48,
  md: 64,
  lg: 80,
  xl: 96,
  '2xl': 112,
}
