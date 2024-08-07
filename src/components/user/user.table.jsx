import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import UpdateUserModal from './update.user.modal';


const UserTable = (props) => {

  const { dataUsers, loadUser } = props;
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [dataUpdate, setDataUpdate] = useState("");


  const columns = [
    {
      title: 'Id',
      dataIndex: '_id',
      render: (_, record) => {
        return (
          <a href='#'>{record._id}</a>
        )
      }
    },
    {
      title: 'Full Name',
      dataIndex: 'fullName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div style={{ display: "flex", gap: "20px" }}>
          <EditOutlined
            onClick={() => {
              setDataUpdate(record)
              setIsModalUpdateOpen(true)
            }
            }
            style={{ cursor: "pointer", color: "orange" }} />
          <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
        </div>

      ),
    },
  ];
  console.log("RENDER 000")

  return (
    <>
    <Table columns={columns} dataSource={dataUsers}
      rowKey={"_id"}
    />
      <UpdateUserModal
        isModalUpdateOpen={isModalUpdateOpen}
        setIsModalUpdateOpen={setIsModalUpdateOpen}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
        loadUser={loadUser}
      />
    </>
  )

}

export default UserTable