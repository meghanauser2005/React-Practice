
import ApiCalling from "./Apicalling"
import Axiostopic from "./Axiostopic"
import Form from "./Form"
import Fun from "./Fun"
import Demodata from "./javaapi/Demodata"
import Postdata from "./javaapi/Postdata"
import Props from "./Props"
import Single from "./Single"
import States from "./States"
import { Routes, Route } from 'react-router-dom'

function App(){
  return(
    <div>
      {/* <States/>
      <Props/>
      <Form/>
      <Fun/> */}
      {/* <ApiCalling/> */}
      
      <Routes>
        <Route path="/" element={<Axiostopic/>} />
        <Route path="/single/:id" element={<Single/>} />
        <Route path="/demodata" element={<Demodata/>} />
        <Route path="/postdata" element={<Postdata/>} />
      </Routes>
    </div>
      
  )
}

export default App