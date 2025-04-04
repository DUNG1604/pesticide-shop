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
        title: "#143324",
        title1: "#f79121",
        title2: "#E57B18",// Màu cam
        primary: "#057134", // Màu chính (xanh lá)
        secondary: "#90ca38",
        secondary2: "#0B7B4D", //mau button
        secondary3: "#338C6B", //màu hover button
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
        }
      });
    }
  ]
};
