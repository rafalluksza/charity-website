import React from 'react'


const TableData = ({loading, posts})=> {

    if (loading) {
        return (
            <h3>Loading...</h3>
        )
    }

    return (
                    <table>
                        <tbody>
                        {posts.map(item => (
                        <tr key={item.uid}>
                            <td>
                                <h3>{item.name} </h3>
                                <div>{item.goal}</div>
                            </td>
                            <td> {item.items}</td>
                        </tr>
                        ))}
                        </tbody>
                    </table>
    )
}

export default TableData;