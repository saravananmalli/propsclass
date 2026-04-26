import { Route, Routes } from "react-router-dom"
import { ViewCounterSlice } from "./Redux-tool/viewCounterslice"
import CustomCard from "./components/card"

const App = () => {
    return (
        <Routes>
            <Route path="/counter" element={<ViewCounterSlice />} />
            <Route path="/" element={<CustomCard />} />
        </Routes>
    )
}

export default App