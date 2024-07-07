import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { fetchAllUserApi } from "../services/api.service";
import { useState, useEffect } from "react";


const UserPage = () => {
    const [dataUsers, setDataUsers] = useState([]);

    const loadUser = async () => {
        const res = await fetchAllUserApi()
        setDataUsers(res.data)
    }

    useEffect(() => {
        loadUser();
    }, [])
    return (
        <div style={{ padding: "15px" }}>
            <UserForm loadUser={loadUser} />
            <UserTable
                dataUsers={dataUsers}
            />
        </div>
    )
}

export default UserPage;