export default defineAppConfig({
  ui: {
    colors: {
      primary: 'brand',
    },
  },
  header: {
    title: '',
    logo: {
      light: '/logo-light.svg',
      dark: '/logo-dark.svg',
      alt: 'TBCX Design Docs',
    },
  },
  assistant: {
    floatingInput: true,
    explainWithAi: true,
    faqQuestions: [],
    shortcuts: {
      focusInput: 'meta_i',
    },
    icons: {
      trigger: 'i-lucide-sparkles',
      explain: 'i-lucide-brain',
    },
  },
})

