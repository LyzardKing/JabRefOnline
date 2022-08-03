import { Config } from 'tailwindcss'

// TODO: Renable lint as soon as this file is converted to typescript
import colors from 'tailwindcss/colors'
import plugin from 'tailwindcss/plugin'

// @ts-ignore: has no type info
import lineClamp from '@tailwindcss/line-clamp'
import forms from '@tailwindcss/forms'

// Flip object horizontally or vertically
// Adapted from https://github.com/tailwindlabs/tailwindcss/discussions/2146
const flip = plugin(({ addUtilities }) => {
  addUtilities({
    '.flip-horizontal': {
      '--tw-scale-x': '-1',
    },
    '.flip-vertical': {
      '--tw-scale-y': '-1',
    },
  })
})

export default <Config>{
  content: [`components/**/*.{vue,js}`, `layouts/**/*.vue`, `pages/**/*.vue`],
  plugins: [lineClamp, forms, flip],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
      primary: colors.indigo,
      secondary: colors.rose,
      highlight: colors.indigo,
      info: colors.black,
      success: colors.green,
      warning: colors.amber,
      error: colors.red,
    },
  },
}