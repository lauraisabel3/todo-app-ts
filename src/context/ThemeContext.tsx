import { createContext, useState } from "react";


export type ThemeContextType = {
  theme: boolean ;
  handleTheme?: () => void;
}

type UserContextProps = {
  children: React.ReactNode
}


export const ThemeContext = createContext<ThemeContextType | null>(null)

export const ThemeContextProvider = ({children}: UserContextProps) => {
  const [theme, setTheme] = useState(false)

  const handleTheme = () => {
    setTheme(!theme)
  }
  return (
    <ThemeContext.Provider value={{theme,handleTheme}}>
      {children}
    </ThemeContext.Provider>
  )


}


// export const MyGlobalContext = createContext<AppContext>({
//   theme: false,
//   setTheme: () => {},
// })

// export const useGlobalContext = () => useContext(MyGlobalContext)

// const ThemeContext = React.createContext<AppContext | null>(null);

// export const ThemeContextProvider = ({children}:{children:any}) => {

//   const [theme, setTheme] = useState<AppContext>(false)

//   return(
//     <ThemeContext.Provider value={{theme, setTheme}}>
//       {children}
//     </ThemeContext.Provider>
//   )
// }

// export default ThemeContext