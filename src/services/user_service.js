import axios from "axios"

  const  getuserdetails = async () =>{
            //   async non-blocking 
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            console.log(response.data)

        }
export default getuserdetails        