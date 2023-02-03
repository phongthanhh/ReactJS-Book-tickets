import React from 'react'

export default function Home() {


    return (
        <div className='home container py-5'>
            <h1>MOVIE SEAT SELECTION</h1>
            <div className="content ">
                <div className="screen">
                    <h2 class="wthree">Screen this way</h2>
                </div>
                <div className="seatStructure">
                    <table id="seatsBlock">
                        <tbody>
                            <tr style={{ color: '#fff' }}>
                                <td />
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                                <td>6</td>
                                <td>7</td>
                                <td>8</td>
                                <td>9</td>
                                <td>10</td>
                                <td>11</td>
                                <td>12</td>
                            </tr>
                            <tr>
                                <td>A</td>
                                <td >
                                    <button className='ghe' />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
            <div className="infoSeats py-5">
                <h2>Danh sách ghế bạn chọn</h2>

            </div>
        </div>
    )
}
