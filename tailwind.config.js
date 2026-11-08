export default {
darkMode: 'class',
content: [
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}"
],
theme: {
extend: {
colors: {
canvas: '#090d16',
panel: '#18181b',
indigo: '#6366f1',
cyan: '#06b6d4',
emerald: '#10b981'
},
boxShadow: {
'glow-indigo': '0 0 0 1px rgba(99, 102, 241, 0.35), 0 0 24px rgba(99, 102, 241, 0.35)',
'glow-cyan': '0 0 0 1px rgba(6, 182, 212, 0.35), 0 0 24px rgba(6, 182, 212, 0.35)'
},
backdropBlur: {
xs: '2px',
soft: '6px',
panel: '12px'
}
}
},
plugins: []
};
