import React, {useEffect,useState} from 'react'

const Darkmode=()=>{
    const [theme, settheme] = useState("light")


useEffect(() => {
  if (theme ==="dark"){
    document.documentElement.classList.add("dark");
  }else{
    document.documentElement.classList.remove("dark");
  }
}, [theme])

const toggleTheme=()=>{
    settheme(theme === "dark" ? "light" : "dark");
}


  return (
      <button
      className='bg-gray-700 text-white px-2 py-1 rounded-full shadow'
      onClick={toggleTheme}
      >
       {theme === "dark" ? "light Mode" : "Dark Mode"}
      </button>
    
  );
};

export default Darkmode
