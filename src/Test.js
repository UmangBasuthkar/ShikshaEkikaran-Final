import React from "react";
import Object from './Assignment.json';

export const Test = () =>
{
    console.log(Object)
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">LATITUDE</th>
                        <th scope="col">LONGITUDE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                            Object.map(
                            (record) => 
                            {
                                return (<tr><td>{record.id}</td><td>{record.name}</td><td>{record.lati}</td><td>{record.lon}</td></tr>);
                            }
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};