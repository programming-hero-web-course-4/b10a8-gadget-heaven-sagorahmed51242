/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        outlineOffset: {
                '0': '0px',          // Default
                '1': '1px',          // 1 pixel offset
                '2': '2px',          // 2 pixels offset
                '4': '4px',          // 4 pixels offset
                '6': '6px',          // 6 pixels offset
                '8': '8px',          // 8 pixels offset
                '10': '10px',        // 10 pixels offset
                '12': '12px',        // 12 pixels offset
                '16': '16px',    // Custom offset
            },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}

