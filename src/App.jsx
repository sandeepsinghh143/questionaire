import './App.css'
import Header from './components/Header'
import Lesson from './pages/Lesson'
import lesson from "./questions"
import { Route, Routes, NavLink } from 'react-router-dom'
import Flagged from './pages/Flagged'

function App() {
  let dataLesson=JSON.parse(localStorage.getItem("data"));
  if(!dataLesson){
    localStorage.setItem(JSON.stringify("data"), lesson);
    dataLesson=lesson;
  }
  return (
    <>
    <Header/>
    <div className='navigate'>
        <NavLink to="/" className={"div"}>All Questions</NavLink>
        <NavLink to="/flagged" className={"div"}>Flagged Questions</NavLink>
      </div>
    <Routes>
      <Route path="/" element={<Lesson dataLesson={dataLesson}/>}></Route>
      <Route path="/flagged" element={<Flagged dataLesson={dataLesson}/>}></Route>
    </Routes>
    </>
  )
}

export default App
