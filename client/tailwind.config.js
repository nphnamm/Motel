/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width:{
        '1100':'1100px'
      },
      backgroundColor:{
        primary:"#003b95",
        secondary1:'#1266dd',
        secondary2:'#f73859'
      },
      textColor:{
        primary:"#003b95",
        secondary1:'#1266dd',
        secondary2:'#f73859'
      }

    },
  },
  plugins: [],
}
