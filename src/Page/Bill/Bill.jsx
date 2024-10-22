import React, { useEffect, useState } from 'react';
import './bill.css';

const Bill = () => {
    const [data, setData] = useState({
        billName: "สบายโก๋",
        tRoomNumber: "D64",
        roomNumber: "6708-D64",
        room: "D64",
        date: "8/67",
        name: "นาย นราวิชญ์ หาญสุวรรณชัย",
        billDate: "25/8/2567",
        wUsed: "1141-1143",
        wUnit: "2",
        wUnitPrice: "20.00",
        eUsed: "361-392",
        eUnit: "31",
        eUnitPrice: "9.00",
        tAmount: "0",
        rAmount: "1000",
        fAmount: "2200"
    });

    useEffect(() => {
        // คำนวณค่า wAmount
        let wAmount = data.wUnit >= 5 ? data.wUnit * data.wUnitPrice : 100;
        // คำนวณค่า eAmount
        let eAmount = data.eUnit * data.eUnitPrice;
        // คำนวณรวมยอดทั้งหมด
        let allAmount = parseFloat(eAmount) + parseFloat(wAmount) + parseFloat(data.tAmount) + parseFloat(data.rAmount) + parseFloat(data.fAmount);

        setData(prevState => ({
            ...prevState,
            wAmount,
            eAmount,
            allAmount
        }));
    }, [data.wUnit, data.eUnit]);

    return (
        <table style={{ width: '63%' }} className='bill-table'>
            <tbody>
                <tr>
                    <td align="left" style={{ width: '55%' }} rowSpan="4">
                        <b>{data.billName}</b>
                        <p>แขวงเสนานิคม<br /> เขตจตุจักร<br /> กรุงเทพมหานคร 10900</p>
                    </td>
                    <th style={{ fontSize: '36px' }} rowSpan="4">
                        <b>{data.tRoomNumber}</b>
                    </th>
                    <th align="center" style={{ width: '30%' }} colSpan="2" className="border">ใบเสร็จรับเงิน</th>
                </tr>
                <tr>
                    <td className="border" style={{ width: '15%' }}>เลขที่</td>
                    <td className="border" align="right">{data.roomNumber}</td>
                </tr>
                <tr>
                    <td className="border" style={{ width: 'auto' }}>ห้อง</td>
                    <td className="border" align="right">{data.room}</td>
                </tr>
                <tr>
                    <td className="border" style={{ width: 'auto' }}>ประจำเดือน</td>
                    <td className="border" align="right">{data.date}</td>
                </tr>
                <tr>
                    <td align="left" colSpan="2" className="border">{data.name}</td>
                    <td className="border">วันที่แจ้งหนี้</td>
                    <td align="right" className="border">{data.billDate}</td>
                </tr>
                {/* Similar for other rows */}
                <tr style={{ backgroundColor: '#c4c4c4' }}>
                    <td align="center" className="border">รายละเอียด</td>
                    <td align="center" className="border">จำนวนหน่วย</td>
                    <td align="center" className="border">ราคาต่อหน่วย</td>
                    <td align="center" className="border">จำนวนเงิน</td>
                </tr>
                <tr>
                    <td align="left" rowSpan="3" className="border">
                        ค่าน้ำประปา [{data.wUsed}] <br/> ค่าไฟฟ้า [{data.eUsed}] <br/> ค่าอื่นๆ
                    </td>
                    <td align="center" className="border">{data.wUnit}</td>
                    <td align="center" className="border">{data.wUnitPrice}</td>
                    <td align="center" className="border">{data.wAmount}</td>
                </tr>
                <tr>
                    <td align="center" className="border">{data.eUnit}</td>
                    <td align="center" className="border">{data.eUnitPrice}</td>
                    <td align="center" className="border">{data.eAmount}</td>
                </tr>
                <tr>
                    <td align="center" className="border"></td>
                    <td align="center" className="border"></td>
                    <td align="center" className="border">{data.tAmount}</td>
                </tr>
                {/* Similar for other rows */}
                <tr>
                    <td align="center" className="border" rowSpan="3">
                        * หมายเหตุ ค่าน้ำประปา 5 หน่วยแรกเหมาจ่าย 100 บาท <br /> หน่วยต่อไปหน่วยละ 20 บาท
                    </td>
                    <td align="left" className="border" colSpan="2">ค่าเช่าห้อง</td>
                    <td align="right" className="border">{data.rAmount}</td>
                </tr>
                <tr>
                    <td align="left" className="border" colSpan="2">ค่าเฟอร์นิเจอร์และอื่นๆ</td>
                    <td align="right" className="border">{data.fAmount}</td>
                </tr>
                <tr>
                    <td align="center" className="border" colSpan="2">รวมเงินทั้งสิ้น</td>
                    <td align="right" className="border">{data.allAmount}</td>
                </tr>
                <tr>
                    <td align="center">กำหนดชำระเงินภายในวันที่ 5 ของทุกเดือน</td>
                </tr>
            </tbody>
        </table>
    );
};

export default Bill;
