module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#DFDED1",
          secondary: "#FFA2B6",
          accent: "#E43D12",
          neutral: "#73726D",
          "base-100": "#EBE9E1",
          info: '#4f4f4f',
        },
      },
    ],
  },
};
