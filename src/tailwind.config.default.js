module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./index.html'],
  },
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    preflight: true,
  },
  important: true,
}
