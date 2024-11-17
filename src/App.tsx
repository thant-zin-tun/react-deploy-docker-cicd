import { useEffect, useState } from 'react'
import './App.css'

//Usage of Custom.module.css
import styles from  './Custom.module.css'
import AboutPage from './pages/about/AboutPage'
import { useThemeMode } from './hooks/themeMode'
import { getInitialMode } from './layouts/Layout'
import ContactPage from './pages/contact/ContactPage'
//useState

type HobbiesType =  string[]
type EmployeeType = {
  name: string,
  age: number,
  position: string,
  isActive: boolean,
  address: {
    city: string,
    state: string
  }
}

const  App:React.FC = () => {

  const [counter,setCounter] = useState<number>(0);
  const [hobbies,setHobbies] = useState<HobbiesType>(["football","basketball","Tennis"]);
  const [employee,setEmployee] = useState<EmployeeType>({
    name: "Thant Zin Tun",
    age: 27,
    position:"Frontend Developer",
    isActive: true,
    address: {
      city: "North Dagon",
      state:"Yangon"
    }
  })
  const handle_counter = () => {
    setCounter(counter => counter + 1);
  }
  const [data,setData] = useState<any>([]);

  const fetch_product = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setData(data);
    console.log("Call Again");
    return data;
  }

  useEffect(() => {
    fetch_product();
  },[])
  const scroll = () => {
      window.addEventListener("scroll",() => {
        console.log("Window Scroll");
      })
  }

  useEffect(() => {
    scroll();

    return () => {
      window.removeEventListener("scroll",scroll);
    }
  },[])

  const {dispatch,state} = useThemeMode();

  const toggle_theme = () => {
    const preMode = getInitialMode();
    preMode.mode == "DARK" ? dispatch("LIGHT") : dispatch("DARK");
  }

  return(
    <div className={`container ${ state.mode == "LIGHT" ? 'light_color' : ""}`}>
      <button onClick={() => toggle_theme()}>Change to { state.mode == "DARK" ? "LIGHT" : "DARK"}</button>
      <h1>Hello, React Developer Version 2</h1>
s
      {/* Hook Testing */}
      <button onClick={handle_counter}>Click increase to {counter}</button>

      <div className={styles.divider}></div>

      <button onClick={() => {
        setHobbies([...hobbies, 'Boxing'])
      }}>Add Hobbies {hobbies.length}</button>

      <ul style={{
        listStyleType:"none"
      }}>
      {
        hobbies.map((hobby: string,index: number) => (
          <li key={index}>{index}. {hobby}</li>
        ) )
      }
      </ul>

      <div className={styles.divider}></div>

      <button onClick={() => {
        setEmployee({...employee, name: "Aung Aung", age: employee.age + 1 })
      }}>Update Employee</button>

      <div className={styles.employee_information_container}>
          <span>Name: {employee.name}</span>
          <span>Age: {employee.age}</span>
          <span>Position: {employee.position}</span>
          <span>City: {employee.address.city}</span>
          <span>State: {employee.address.state}</span>
      </div>
      
      {
        data.length > 0 ? <h5>{data[0]["title"]}</h5> : "Loading..."
      }


      <AboutPage mode={state.mode}  />

      <ContactPage />
      
    </div>
  )
}

export default App
