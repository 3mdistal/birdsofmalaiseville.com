import generateFluidClampString from './generateFluidClampString'

export const fontSizes = {
  h1: generateFluidClampString(5, 8, 'sm', 'xl'),
  h2: generateFluidClampString(4, 5.5, 'sm', 'xl'),
  h3: generateFluidClampString(2.5, 3.25, 'sm', 'xl'),
  bigP: generateFluidClampString(1, 1.5, 'sm', 'xl'),
  p: generateFluidClampString(1, 1.25, 'sm', 'xl'),
}
