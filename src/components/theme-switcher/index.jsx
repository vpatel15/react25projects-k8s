import React from 'react';
import useThemeFromStorage from './useThemeFromStorage';

export default function ThemeSwitcher() {
  const [themeColoe, setThemeColor] = useThemeFromStorage('theme', '#ffffff');

  const handleThemeChange = () => {
    setThemeColor(themeColoe === '#ffffff' ? '#000000' : '#ffffff')
  }

  return (
    <div style={{backgroundColor: themeColoe}}>
      <p>Hi There!</p>
      <button onClick={handleThemeChange}>Change</button>
    </div>
  )
}