import { Route, Routes } from "react-router-dom"
import { ViewCounterSlice } from "./Redux-tool/viewCounterslice"

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<ViewCounterSlice />} />
        </Routes>
    )
}

export default App