import NotificationButtom from '../NotificationButton';
import './styles.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
function SalesCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    useEffect(() => {
        axios.get("http://localhost:8080/sales")
        .then(response =>{
            console.log(response.data);
        })
    }, []);

    return (<>
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                    <div className="dsmeta-form-control-container">
                        <td className="show576"><DatePicker
                            selected={minDate}
                            onChange={(date: Date) => { setMinDate(date) }}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        /></td>
                    </div>
                    <div className="dsmeta-form-control-container">
                        <td className="show576"><DatePicker
                            selected={maxDate}
                            onChange={(date: Date) => { setMaxDate(date) }}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        /></td>
                    </div>
            </div>
            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show992">Id</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show992">#001</td>
                            <td className="show576">08/07/2022</td>
                            <td>Vendedor 1</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 92.100,00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButtom />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#002</td>
                            <td className="show576">08/07/2022</td>
                            <td>Vendedor 2</td>
                            <td className="show992">18</td>
                            <td className="show992">7</td>
                            <td>R$ 85.200,00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButtom />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#003</td>
                            <td className="show576"> 08/07/2022</td>
                            <td>Vendedor 3</td>
                            <td className="show992">20</td>
                            <td className="show992">15</td>
                            <td>R$ 80.900,00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButtom />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>
    )
}

export default SalesCard;