import { Button, Drawer } from 'antd';


const ViewUserDetail = (props) => {
    const { isDetailOpen, setIsDetailOpen, dataDetail, setDataDetail } = props;
    console.log(">>> Data Detail:", dataDetail);

    const onClose = () => {
        setIsDetailOpen(false);
        setDataDetail("");
    };

    return (
        <>
            <Drawer title="Chi tiết User" onClose={onClose} open={isDetailOpen}>
                <p>Id: {dataDetail._id}</p>
                <p>Full Name: {dataDetail.fullName}</p>
                <p>Email: {dataDetail.email}</p>
                <p>Phone: {dataDetail.phone}</p>
            </Drawer>
        </>
    )
}
export default ViewUserDetail;