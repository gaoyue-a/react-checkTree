import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://cn.vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 配置路径别名
  server: {
    port: 8080
    // proxy: {
    //   "/api": {
    //     target: "https://yourBaseUrl",
    //     changeOrigin: true,
    //     cookieDomainRewrite: "",
    //     secure: false
    //   }
    // }
  }
})
