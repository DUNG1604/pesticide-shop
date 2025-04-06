/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  media: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true, // Center the container content (this will add automatic margin)
      padding: '0', // Optional: Remove default padding
      screens: {
        sm: "100%", // For small screens
        md: "100%", // For medium screens
        lg: "100%", // For large screens
        xl: "100%", // For extra large screens
        "2xl": "100%" // For 2xl screens
      }
    },
    extend: {
      fontFamily: {
        sans: ["Open Sans", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"]
      },
      keyframes: {
        slideIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        }
      },
      animation: {
        slideIn: "slideIn 0.1s ease-out"
      },
      colors: {
        // Màu chủ đạo
        green_1: "#057134",
        green_2: "#43b443",
        green_3: "#8cc644",
        green_4: "#dde635",
        // Button
        button_green: "#43b443",
        button_hover: "#3fa63f",
        // Text
        text_main: "#143324",
        text_orange:"#f09521",
        // Background
        title: "#143324",
        title1: "#f79121",
        title2: "#E57B18",// Màu cam
        primary1: "#057134",
        primary: "#43b443",// Màu chính (xanh lá)
        secondary: "#90ca38",
        secondary2: "#43b443", //mau button
        secondary3: "#3fa63f", //màu hover button
        bg1: "#eeeee6",   // Màu nền 1 (xám nhạt)
        warning: "#ffc107",  // Màu cảnh báo nhẹ (vàng)
        info: "#17a2b8",     // Màu thông tin (xanh ngọc)
        light: "#f8f9fa",    // Màu nền sáng
        dark: "#343a40",     // Màu nền tối
        background: "#f4f4f4", // Màu nền tổng thể của web
        text: "#333333"      // Màu chữ chính
      },
    }
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.wrapper': {
          'max-width': '1200px',
          'margin-left': 'auto',
          'margin-right': 'auto',
          'padding-left': '8px',
          'padding-right': '8px',
        }
      });
    }
  ]
};
