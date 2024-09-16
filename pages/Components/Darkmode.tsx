"use client";
import React, {useState, useEffect} from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';


const DarkMode = () => {
    const [theme, setTheme] = useState(
        typeof window !== "undefined" && localStorage.getItem ("theme") ? localStorage.getItem("theme") : "light"
    );

    const element = typeof document !== "undefined" ? document.documentElement : null;

    useEffect(() => {
        if (theme === "dark"){
            element.classList.add("dark");
        } else {
            element?.classList.remove("light");
            element?.classList.remove("dark");
        }
    }, [theme]);

  return (
    <div>
        {theme === "dark" ? 
            (<FaSun onClick={() => setTheme("light")}/>)
            : 
            (<FaMoon onClick={() => setTheme("dark")}/>)
    }
    </div>
  )
}

export default DarkMode