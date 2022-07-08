module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#780707",
          secondary: "#930606",
          accent: "#EE2828",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
     
    ],
  },
  plugins: [require("daisyui")],
}