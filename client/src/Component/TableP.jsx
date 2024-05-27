import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

export default function Table() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:8000/api/get');
                setData(response.data.users);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    const exportToExcel = () => {
        const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        const fileExtension = '.xlsx';
        const fileName = 'payroll_data';

        const exportData = data.map(item => {
            return {
                Name: item.name,
                Hour: item.hour,
                'Hourly Wage': item.hourlywage,
                'Total Salary': item.TotalSalary
            };
        });

        const ws = XLSX.utils.json_to_sheet(exportData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const dataBlob = new Blob([excelBuffer], { type: fileType });
        const url = URL.createObjectURL(dataBlob);

        const link = document.createElement('a');
        link.href = url;
        link.download = fileName + fileExtension;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <div className="container">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-6">
                                <h2>Payroll</h2>
                            </div>
                            <div className="col-sm-6">
                                <button className="btn btn-success" onClick={exportToExcel}>
                                    <span>Export To Excel</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Hour</th>
                                <th>Hourly Wage</th>
                                <th>Total Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((elem, index) => (
                                <tr key={index}>
                                    <td>{elem.name}</td>
                                    <td>{elem.hour}</td>
                                    <td>{elem.hourlywage}</td>
                                    <td>{elem.TotalSalary}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
