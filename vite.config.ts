import preact from '@preact/preset-vite'
import { presetAttributify, presetIcons, presetUno } from 'unocss'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
const config = defineConfig({
  plugins: [
    preact(),
    Unocss({
      theme: {
        fontFamily: {
          sans: '"Inter", Inter var,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
        },
      },
      presets: [
        presetIcons({
          extraProperties: {
            display: 'inline-block',
            height: '1.2em',
            width: '1.2em',
            'vertical-align': 'text-bottom',
          },
        }),
        presetAttributify(),
        presetUno(),
      ],
    }),
  ],
})

export default config