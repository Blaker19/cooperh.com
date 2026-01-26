module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: "class",
    theme: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
      },
      extend: {
        colors: {
          transparent: "transparent",
          current: "currentColor",
          purple: "#6c36f6",
          warning: "#6de8f8",
          light: "#F8F7F6",
          dark: "#050C17",
          gray: "#7780A1",
          white: "#FFFFFF",
        },
        backgroundImage: {
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
          "gradient-liner": "linear-gradient(var(--tw-gradient-stops))",
        },
      },
    },
    plugins: [require("@tailwindcss/forms")],
  };
  