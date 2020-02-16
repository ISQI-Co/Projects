import React,{useContext,Fragment} from 'react';
import {Table} from "react-bootstrap";
import ContextProvider from "../stateManagment/Context";
import "./table.css"
function Tables() {
    useContext(ContextProvider);
    return (
        <Fragment>
            <div className='Sherkat'>
                <img src={require("./../assets/img/isqi-logo-revised.png")} alt=""/>
            </div>
            <div className="Neveshte">
                <h1 style={{
                    color:"#0C5CCC"
                }}>فیش حقوقی دی ماه سال 1398</h1>
            </div>
        <div>
        <Table className="Table">
            <thead>
            <tr>
                <th className='Rang1'>کارکرد</th>
                <th className='Rang2'>مزایا</th>
                <th className='Rang3'>کسور</th>
            </tr>
            </thead>
            <tbody>
            <tr>

                <td className='Black'>کارکرد عادی</td>
                <td className='Black'>حقوق پایه</td>
                <td className='Black'>بیمه سهم کارمند</td>

            </tr>
            <tr>

                <td className='Black1'>ساعت اضافه کار</td>
                <td className='Black1'>حق جذب</td>
                <td className='Black1'>مالیات</td>
            </tr>
            <tr>
                <td className='Black'>تعداد ایاب و ذهاب</td>
                <td className='Black'>حق مسکن</td>
                <td className='Black'>روند ماه جاری</td>

            </tr>
            <tr>
                <td className='Black1'>کارکرد موثر</td>
                <td className='Black1'>حق اولاد</td>
                <td className='Black1'>بیمه تکمیلی سهم کارمند</td>

            </tr>

            <tr>
                <td
                 >
                </td>
                <td className='Black'>اضافه کاری</td>
                <td></td>

            </tr>

            <tr>
                <td
                >
                </td>
                <td className='Black1'>ایاب و ذهاب</td>
                <td></td>
            </tr>
            <tr>
                <td
                >
                </td>
                <td className='Black'>مزایای متفرقه</td>
                <td></td>
            </tr>
            <tr>
                <td
                >
                </td>
                <td className='Black1'>روند ماه قبل</td>
                <td></td>
            </tr>
            <tr>
                <td
                >
                </td>
                <td className='Black'>بن کارگری</td>
                <td></td>
            </tr>
            <tr>
                <td
                >
                </td>
                <td className='Black1'>سنوات</td>
                <td></td>
            </tr>
            <tr>
                <td
                    className='Black'
                >
                    دستمزد روزانه (ریال)
                </td>
                <td
                    className='Black'
                >

                 جمع حقوق ومزایا (ریال)
                </td>
                <td
                    className='Black'
                >
جمع کسور(ریال)
                </td>
            </tr>
            <tr>
                <td
                >
                </td>
                <td
                    className='Black1'
                >
                   خالص پرداختی (ریال)
                </td>
                <td>

                </td>
            </tr>
            </tbody>
        </Table>
        </div>
        </Fragment>
    );
}
export default Tables;
