import DashboardBreadcrumbs from './DashboardBreadcrumbs';
import { Space, Table, Tag } from 'antd';


const ServiceManage = () => {

    const breadcrumbList=['Dashboard','Service'];

    const data = [
        {
          key: '1',
          email: 'john@gmail.com',
          brand: "Lamborghini",
          model: "Urus",
          service:"Engine Oil",
          status: "pending",
          payment: "paid",
        },
        {
          key: '2',
          email: 'Andrew342@yahoo.com',
          brand: "Lamborghini",
          model: "Hurracan",
          service:"Rear Windshield",
          status: "pending",
          payment: "paid",
        },
        {
          key: '3',
          email: 'Bob234@outlook.com',
          brand: "Ford",
          model: "Mustang",
          service:"Wheel Care ",
          status: "completed",
          payment: "paid",
        },
        {
          key: '4',
          email: 'Andrew985@gmail.com',
          brand: "Toyota",
          model: "Fortuner",
          service:"Car Wash & Clean",
          status: "completed",
          payment: "paid",
        },
      ];

    const columns = [{
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        fixed: 'left',
        width: 300
      },
      {
        title: 'Vehicle Brand',
        dataIndex: 'brand',
        key: 'brand',
        width: 200
      },
      {
        title: 'Brand Model',
        dataIndex: 'model',
        key: 'model',
        width: 200
      },
      {
        title: 'Service',
        dataIndex: 'service',
        key: 'service',
        width: 200
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        width: 200
      },
      {
        title: 'Payment',
        dataIndex: 'payment',
        key: 'payment',
        width: 200
      },
    //   {
    //     title: 'Action',
    //     key: 'action',
    //     render: () => (
    //       <Space size="middle">
    //         <h4>Notify</h4>
    //         <h4>Delete</h4>
    //       </Space>
    //     ),
    //     fixed: 'right',
    //     width: 300
    //   },
    ]
  return (
    <>
        <div className='mt-10'>
            <DashboardBreadcrumbs title='Service Manage' breadcrumbList={breadcrumbList} />
            <div className='service-table'>
                <Table 
                columns={columns} 
                dataSource={data}  
                scroll={{
                    x: 2000,
                }} 
                pagination={false}
                />
            </div>
        </div>
    </>
  )
}

export default ServiceManage



{/* <table>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Vehicle Brand</th>
                            <th>Brand Model</th>
                            <th>Amount</th>
                            <th>Payment Status</th>
                            <th>Service Status</th>
                            <th>Actions</th>
                        </tr>
                       
                    </thead>
                    <tbody>
                        {Array.from({length:10}).map((_,i) => (
                            <tr key={i}>
                                <td>info@gmail.com</td>
                                <td>Lamborghini</td>
                                <td>Urus</td>
                                <td>45,000</td>
                                <td>Paid</td>
                                <td>Pending</td>
                                <td className='flex'>
                                    <h4>Notify</h4>
                                    <h4>Delete</h4>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table> */}