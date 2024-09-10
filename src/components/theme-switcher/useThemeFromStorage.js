import { useEffect, useState } from "react";

const useThemeFromStorage = (key, color) => {
  const [themeColor, setThemeColor] = useState(() => {
    if (localStorage.getItem(key)){
      return localStorage.getItem(key);
    } else {
      return color;
    }
  });
  useEffect(() => {
    // if(localStorage.get(key)){
    //   setThemeColor(localStorage.get(key))
    // } else {
      localStorage.setItem(key, themeColor);
      // setThemeColor(color)
    // }
  }, [key, themeColor])

  return [
    themeColor,
    setThemeColor
  ]
}

export default useThemeFromStorage;