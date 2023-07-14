import react from '@vitejs/plugin-react'

export default {
    jsx: 'react',
    loader: {
        '.js': 'jsx' 
      },
 plugins: [react()]
}