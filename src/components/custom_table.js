import { AddProduct } from "../product/addproduct";

export const CustumTable = ({ data }) => {
    return (
        <div style={{"width":"30%"}}>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((e) => (
                        <tr key={e.id}>
                            <th scope="row">{e.id}</th>
                            <td>{e.name}</td>
                            <td>{e.email}</td>
                            <td>{e.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <AddProduct/>
        </div>
    );
};