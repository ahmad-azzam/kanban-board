import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";

const App = () => {
  return (
    <>
      <div className="font-nunito">
        <Routes>
          <Route path="/v1/auth" element={<Auth />} />
        </Routes>
      </div>
    </>
  )
}

export default App;