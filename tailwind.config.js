/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},

    // all font families
    fontFamily: {
      "cormorant" : ["Cormorant Garamond", "serif"],
      "inter" : ["Inter", "sans-serif"],
      "DMsans" : ["DM Sans", "sans-serif"],
      "oswald" : ["Oswald", "sans-seri"],
    },

    // all colors
    colors : {
      "raja" : "#0B0109",
      "shenapoti" : "#EF0101",
    },

    // container part and padding on both side of container
    container : {
      center: true,
      padding : {
        DEFAULT : "10px",
        sm : "30px",
        md : "60px",
        lg : "100px",
        xl : "120px",
        // "2xl" : "38px",
      },
    },
  },
  plugins: [],
}