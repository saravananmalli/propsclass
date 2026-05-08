import { Route, Routes } from "react-router-dom"
import { ViewCounterSlice } from "./Redux-tool/viewCounterslice"
import CustomCard from "./components/card"
import Home from "./hooks/callbcck-memo-ref-hooks/HomeComponent"
import { Useref } from "./hooks/useref/userefcount"
import Realapi from "./product/Realapi"

const App = () => {
    return (
        <Routes>
            <Route path="/counter" element={<ViewCounterSlice />} />
            <Route path="/" element={<CustomCard />} />
            <Route path="/homecomp" element={<Home />} />
            <Route path="/homeuseref" element={<Useref />} />
            <Route path="/restapi" element={<Realapi />} />





        </Routes>
    )
}

export default App