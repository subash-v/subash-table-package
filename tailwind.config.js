

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        "0_auto_20px": "0 auto 20px",
      },
      colors: {
        "to-[#464646]": "#464646",
        "bg-[#005c4b]": "#005c4b",
        "bg-[#2d532d]": "#2d532d",
        "msg-time-color": "#8796a1",
        "msg-text-white": "#ffffff",
        "msg-text-black": "#000",
        slate: {
          200: "#90CDF4",
        },
      },
      backgroundColor: {
        "skeleton-bg": "bg-slate-200",
        "chat-bg": "hsl(0, 0%, 90%)",
        "bg-send": "#E8FFDB",
        "bg-sent": "#FFFFFF",
        "quoted-msg-color": "#DDD",
      },
      borderRadius: {
        "br-0_10px_10px": "0 10px 10px",
        "br-10px_0_10px_10px": "10px 0 10px 10px",
        "br-rounded-md": "0.375rem",
      },
    },
  },
  plugins: [],
};
