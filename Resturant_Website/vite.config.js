import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Darkmode from './src/component/Darkmode'


// module.exports={
//   Darkmode:"class",
//   content:["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]
//   theme:{
//     extened:{},
//   },
//   plugins:[react(),  tailwindcss(),],
// }

export default defineConfig({
  plugins: [react(),  tailwindcss(),],
  
})
