import React from 'react'


const TableData = ({loading, posts})=> {

    if (loading) {
        return (
            <h3>Loading...</h3>
        )
    }

    return (
        <ul>
            {posts.map(item => (
                <li key={item.id}>
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <h3>{item.name} </h3>
                                <div>{item.goal}</div>
                            </td>
                            <td> {item.items}</td>
                        </tr>
                        </tbody>
                    </table>
                </li>
            ))}
        </ul>
    )
}

export default TableData;