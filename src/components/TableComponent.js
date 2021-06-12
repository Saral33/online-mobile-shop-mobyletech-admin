import React from 'react'
import {Table} from 'antd'

const TableComponent = () => {


    const data = [
        {
        key: '1',
        product:'Samsung Galaxy s7',
        qty: 5,
        price: '$ 400'
        },
        {
        key: '2',
        product:'Samsung Galaxy s7',
        qty: 5,
        price: '$ 400'
        },
        {
        key: '3',
        product:'Samsung Galaxy s7',
        qty: 5,
        price: '$ 400'
        },
]

    return (
        <Table dataSource={data}>
            <Table.Column dataIndex="key"/>
            <Table.Column title="Product" dataIndex="product"/>
            <Table.Column title="Qty" dataIndex="qty"/>
            <Table.Column title="Amount" dataIndex="price" />
          
        </Table>
    )
}

export default TableComponent
