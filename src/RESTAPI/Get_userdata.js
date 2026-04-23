import axios from "axios"
import { useEffect, useState } from "react"
import { CustumTable } from "../components/custom_table"

const Getuserdata = () => {
    const [user, setuser] = useState([])
    useEffect(() => {

        const getuserdetails = async () => {
            //   async non-blocking 
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            setuser(response.data)

        }
        getuserdetails()
    },)
    return (
        <div>
            <h1>Get User Details</h1>
             <CustumTable data={user} />
        </div>
    )
}

export default Getuserdata