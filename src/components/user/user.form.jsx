import { Button, Input, notification, Modal } from "antd"
import axios from "axios";
import { useState } from "react"
import { createUerApi } from "../../services/api.service";

const UserForm = (props) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { loadUser } = props

    const handleSubmit = async () => {
        const res = await createUerApi(fullName, email, password, phone);
        if (res.data) {
            notification.success({
                message: "Create User",
                description: "Tao user thanh cong"
            })
            resetAndCloseModal()
            await loadUser()
        } else {
            notification.error({
                message: "Error create user",
                description: JSON.stringify(res.message)
            })
        }
        console.log(">>> Check Res", res);
    };

    const resetAndCloseModal = () => {
        setIsModalOpen(false);
        setEmail("");
        setFullName("");
        setPhone("");
        setPassword("");
    }


    return (
        <div className="user-form" style={{ margin: "20px 0" }}>
            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h3>Table Users</h3>
                    <Button
                        onClick={() => { setIsModalOpen(true) }}
                        type="primary">Create User</Button>
                </div>
                <Modal title="Create Users"
                    open={isModalOpen}
                    onOk={() => handleSubmit()}
                    onCancel={() => resetAndCloseModal()}
                    maskClosable={false}
                    okText="Create"
                >
                <div>
                    <span>Full Name</span>
                    <Input
                        value={fullName}
                        onChange={(event) => { setFullName(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Email</span>
                    <Input
                        value={email}
                        onChange={(event) => { setEmail(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password
                        value={password}
                        onChange={(event) => { setPassword(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Phone number</span>
                    <Input
                        value={phone}
                        onChange={(event) => { setPhone(event.target.value) }}
                    />
                </div>
                </Modal>
            </div>
        </div>
    )
}

export default UserForm