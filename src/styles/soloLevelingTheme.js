// Solo Leveling Theme - Inspired by the anime's dark and mystical aesthetic

export const soloLevelingTheme = {
  // Primary Colors - Dark purples and deep blues
  colors: {
    // Background colors
    primary: '#0A0A0F', // Deep dark background
    secondary: '#1A1A2E', // Slightly lighter dark
    tertiary: '#16213E', // Dark blue-purple
    
    // Accent colors
    accent: {
      purple: '#6C5CE7', // Bright purple (mana/magic)
      gold: '#FDCB6E', // Golden yellow (power/level up)
      orange: '#E17055', // Orange-red (energy/fire)
      blue: '#74B9FF', // Light blue (ice/water)
      silver: '#B2BEC3', // Silver-gray (metal/weapons)
    },
    
    // Text colors
    text: {
      primary: '#FFFFFF', // Pure white
      secondary: '#DDD6FE', // Light purple-white
      muted: '#A0AEC0', // Gray
      accent: '#FDCB6E', // Gold for highlights
    },
    
    // UI Elements
    border: {
      primary: '#2D3748', // Dark gray
      accent: '#6C5CE7', // Purple
      glow: '#FDCB6E', // Gold glow
    },
    
    // Status colors
    status: {
      success: '#68D391', // Green
      warning: '#F6AD55', // Orange
      error: '#FC8181', // Red
      info: '#63B3ED', // Blue
    },
    
    // Gradients
    gradients: {
      primary: 'linear-gradient(135deg, #0A0A0F 0%, #1A1A2E 50%, #16213E 100%)',
      secondary: 'linear-gradient(135deg, #1A1A2E 0%, #16213E 50%, #0A0A0F 100%)',
      purple: 'linear-gradient(135deg, #6C5CE7 0%, #A29BFE 100%)',
      gold: 'linear-gradient(135deg, #FDCB6E 0%, #E17055 100%)',
      mana: 'linear-gradient(135deg, #74B9FF 0%, #6C5CE7 100%)',
      shadow: 'linear-gradient(180deg, rgba(108, 92, 231, 0.3) 0%, rgba(26, 26, 46, 0.8) 100%)',
    }
  },
  
  // Typography
  typography: {
    fontFamily: {
      primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      heading: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      mono: "'JetBrains Mono', 'Fira Code', monospace",
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
  },
  
  // Spacing
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
  },
  
  // Border radius
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    full: '9999px',
  },
  
  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgba(108, 92, 231, 0.05)',
    md: '0 4px 6px -1px rgba(108, 92, 231, 0.1), 0 2px 4px -1px rgba(108, 92, 231, 0.06)',
    lg: '0 10px 15px -3px rgba(108, 92, 231, 0.1), 0 4px 6px -2px rgba(108, 92, 231, 0.05)',
    xl: '0 20px 25px -5px rgba(108, 92, 231, 0.1), 0 10px 10px -5px rgba(108, 92, 231, 0.04)',
    glow: '0 0 20px rgba(253, 203, 110, 0.3), 0 0 40px rgba(108, 92, 231, 0.2)',
    purple: '0 0 30px rgba(108, 92, 231, 0.4)',
    gold: '0 0 30px rgba(253, 203, 110, 0.4)',
  },
  
  // Animations
  animations: {
    transition: {
      fast: '0.15s ease-in-out',
      normal: '0.3s ease-in-out',
      slow: '0.5s ease-in-out',
    },
    keyframes: {
      glow: `
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(253, 203, 110, 0.3); }
          50% { box-shadow: 0 0 30px rgba(253, 203, 110, 0.6), 0 0 40px rgba(108, 92, 231, 0.3); }
        }
      `,
      pulse: `
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `,
      float: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `,
    },
  },
  
  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  // Z-index
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modal: 1040,
    popover: 1050,
    tooltip: 1060,
  },
};

// Helper functions for styled-components
export const getColor = (path) => (props) => {
  const keys = path.split('.');
  let value = props.theme || soloLevelingTheme;
  
  for (const key of keys) {
    value = value[key];
    if (!value) return '#FFFFFF'; // fallback
  }
  
  return value;
};

export const getSpacing = (size) => (props) => {
  return (props.theme?.spacing || soloLevelingTheme.spacing)[size] || size;
};

export const getShadow = (type) => (props) => {
  return (props.theme?.shadows || soloLevelingTheme.shadows)[type] || 'none';
};

export default soloLevelingTheme;