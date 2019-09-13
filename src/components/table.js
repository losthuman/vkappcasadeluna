import  React  from "react";
import { Div } from "@vkontakte/vkui";
import 'bootstrap/dist/css/bootstrap.css';
import './table.sass';
// import Header from '../components/header';
// import Row from '../components/row';

// const arrayDays = ['','Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];


class Table extends React.Component {
    


    render(){
        return (
            <Div className=''>
                <table className='m-auto table w-auto table-bordered tbl'>
                    <thead className='thead-dark'>
                        <tr>
                            <th className='text-center' scope='col' colSpan= '2'>Понедельник</th>
                        </tr>
                    </thead> 
                    <tbody>
                        <tr>
                            <th scope='row'>10:00 - 11:00</th>
                            <td className='solea'>Солеа</td>
                        </tr>
                        <tr>
                            <th scope='row'>18:00 - 19:00</th>
                            <td className='new2'>Начинающие 2-ой набор</td>
                        </tr>
                        <tr>
                            <th scope='row'>19:00 - 20:30</th>
                            <td className='guahira'>Гуахира</td>
                        </tr>
                    </tbody>   
                {/* </table>    
                <table className='m-auto table w-auto table-bordered'> */}
                    <thead className='thead-dark'>
                        <tr>
                            <th className='text-center' scope='col' colSpan= '2'>Вторник</th>
                        </tr>
                    </thead> 
                    <tbody>
                        <tr>
                            <th scope='row'>18:00 - 19:00</th>
                            <td>Техника продолжающие</td>
                        </tr>
                        <tr>
                            <th scope='row'>19:00 - 20:00</th>
                            <td className='sigiria'>Сигирийя</td>
                        </tr>
                        <tr>
                            <th scope='row'>20:00 - 21:00</th>
                            <td className='new1'>Начинающие 1-ый набор</td>
                        </tr>
                    </tbody>   
                {/* </table> 
                <table className='m-auto table w-auto table-bordered'> */}
                    <thead className='thead-dark'>
                        <tr>
                            <th className='text-center' scope='col' colSpan= '2'>Среда</th>
                        </tr>
                    </thead> 
                    <tbody>
                        <tr>
                            <th scope='row'>10:00 - 11:00</th>
                            <td className='solea'>Солеа</td>
                        </tr>
                        <tr>
                            <th scope='row'>19:00 - 20:00</th>
                            <td className='new2'>Начинающие 2-ой набор</td>
                        </tr>
                        <tr>
                            <th scope='row'>20:00 - 21:00</th>
                            <td>Техника баты</td>
                        </tr>
                    </tbody>   
                {/* </table> 
                <table className='m-auto table w-auto table-bordered'> */}
                    <thead className='thead-dark'>
                        <tr>
                            <th className='text-center' scope='col' colSpan= '2'>Четверг</th>
                        </tr>
                    </thead> 
                    <tbody>
                        <tr>
                            <th scope='row'>18:00 - 19:00</th>
                            <td className='sigiria'>Сигирийя</td>
                        </tr>
                        <tr>
                            <th scope='row'>19:00 - 20:00</th>
                            <td className='new1'>Начинающие 1-ый набор</td>
                        </tr>
                    </tbody>

                {/* </table>  */}
                {/* <table className='m-auto table w-auto table-bordered'> */}
                    <thead className='thead-dark'>
                        <tr>
                            <th className='text-center' scope='col' colSpan= '2'>Пятница</th>
                        </tr>
                    </thead> 
                    <tbody>
                        <tr>
                            <th scope='row'>10:00 - 11:00</th>
                            <td className='solea'>Солеа</td>
                        </tr>
                        <tr>
                            <th scope='row'>18:00 - 19:00</th>
                            <td className='sigiria'>Сигирийя</td>
                        </tr>
                        <tr>
                            <th scope='row'>19:00 - 20:30</th>
                            <td className='guahira'>Гуахира</td>
                        </tr>
                    </tbody>   
                </table> 
            
            </Div>
        );
    }
}

export default Table;