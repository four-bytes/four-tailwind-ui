import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@lib': fileURLToPath(new URL('../../src', import.meta.url))
      }
    }
  },

  title: 'Four Tailwind UI',
  description: 'Vue 3 + Tailwind CSS UI Components',
  
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Components', link: '/components/button' },
      {
        text: 'Links',
        items: [
          { text: 'GitHub', link: 'https://github.com/four-bytes/four-tailwind-ui' },
          { text: 'npm', link: 'https://www.npmjs.com/package/@four-bytes/four-tailwind-ui' },
        ],
      },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Installation', link: '/guide/installation' },
          ],
        },
      ],
      '/components/': [
        {
          text: 'Forms',
          items: [
            { text: 'Button', link: '/components/button' },
            { text: 'InputField', link: '/components/input-field' },
            { text: 'SelectField', link: '/components/select-field' },
            { text: 'CheckboxField', link: '/components/checkbox-field' },
            { text: 'TextareaField', link: '/components/textarea-field' },
          ],
        },
        {
          text: 'Feedback',
          items: [
            { text: 'Alert', link: '/components/alert' },
            { text: 'Badge', link: '/components/badge' },
            { text: 'Toast', link: '/components/toast' },
          ],
        },
        {
          text: 'Overlays',
          items: [
            { text: 'Modal', link: '/components/modal' },
            { text: 'FormDialog', link: '/components/form-dialog' },
            { text: 'ConfirmDialog', link: '/components/confirm-dialog' },
          ],
        },
        {
          text: 'Layout',
          items: [
            { text: 'AdminLayout', link: '/components/admin-layout' },
            { text: 'ThemeProvider', link: '/components/theme-provider' },
          ],
        },
        {
          text: 'Data Display',
          items: [
            { text: 'Avatar', link: '/components/avatar' },
            { text: 'Card', link: '/components/card' },
            { text: 'Icons', link: '/components/icons' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/four-bytes/four-tailwind-ui' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright Four Bytes',
    },
  },
})
