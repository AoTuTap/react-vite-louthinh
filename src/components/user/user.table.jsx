import React, { useEffect, useState } from 'react';
import { Space, Table, Tag, Popconfirm, Button, notification } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import UpdateUserModal from './update.user.modal';
import ViewUserDetail from './view.user.details';
import { deleteUerApi } from '../../services/api.service';


const UserTable = (props) => {

  const { dataUsers, loadUser } = props;
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [dataUpdate, setDataUpdate] = useState("");
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [dataDetail, setDataDetail] = useState("");


  const columns = [
    {
      title: 'Id',
      dataIndex: '_id',
      render: (_, record) => {
        return (
          <a href='#' onClick={() => {
            setIsDetailOpen(true);
            setDataDetail(record);
          }}>
            {record._id}
          </a>
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
          <Popconfirm
            title="Delete user"
            description={`Are you sure to delete ${record.fullName} ?`}
            onConfirm={() => { handleDelete(record._id) }}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
          </Popconfirm>

        </div>

      ),
    },
  ];


  const handleDelete = async (id) => {
    const res = await deleteUerApi(id);
    if (res.data) {
      notification.success({
        message: "Delete User",
        description: "Xóa user thành công"
      })
      await loadUser();
    } else {
      notification.error({
        message: "Error delete user",
        description: JSON.stringify(res.message)
      })
    }
    console.log(">>> Check Res", res);
  };


  const cancel = (e) => {
    console.log(e);
    message.error('Click on No');
  };

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

      <ViewUserDetail
        isDetailOpen={isDetailOpen}
        setIsDetailOpen={setIsDetailOpen}
        dataDetail={dataDetail}
        setDataDetail={setDataDetail}
      />
    </>
  )

}

export default UserTable