import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectSeat, saveSeatsSelected } from 'redux/action'

export default function Home() {

    const dispatch = useDispatch()
    const onCheckedSeat = (seat) => {
        dispatch(selectSeat(seat))
    }
    const onSaveSeatsSelected = () => {
        dispatch(saveSeatsSelected())
    }


    const { seats, seatsSelected } = useSelector(state => state.seatsReducer)
    console.log('PhongThanh 🚀 ~> seatsSelected', seatsSelected)

    const renderSeats = useMemo(() => {
        const renderClassName = (ghe = {}) => {
            if (ghe.daDat) return 'gheDuocChon'
            if (ghe.selecting) return 'gheDangChon'
            return 'ghe'
        }
        return seats.map(seat => <tr key={seat.hang} style={{ color: '#fff' }}>
            {seat.hang === ''
                ? <>
                    <th>{seat.hang}</th>
                    {seat.danhSachGhe.map((ghe) => <th>{ghe.soGhe}</th>)}
                </>
                : <>
                    <td>{seat.hang}</td>
                    {seat.danhSachGhe.map((ghe) => <td><button className={renderClassName(ghe)} onClick={() => onCheckedSeat(ghe)}>{ghe.soGhe}</button></td>)}
                </>
            }
        </tr>)
    }, [seats])

    const renderseatsSelectedInfo = useMemo(() => {
        return seatsSelected.map(seatsOJ => seatsOJ.danhSachGhe.map(seat => {
            return (
                <tr>
                    <td>{seat.soGhe}</td>
                    <td>{seat.gia} VND</td>
                </tr>
            )
        }))
    }, [seatsSelected])

    // const renderseatsSelectedInfo = () => {
    //     seatsSelected.map(seatOj => {
    //         console.log(seatOj)
    //     })
    // }
    // renderseatsSelectedInfo()
    return (
        <div className='home container py-5'>
            <h1>MOVIE SEAT SELECTION</h1>
            <div className="content ">
                <div className="screen">
                    <h2 className="wthree">Screen this way</h2>
                </div>
                <div className="seatStructure">
                    <table id="seatsBlock">
                        {renderSeats}
                    </table>
                    <div className='py-5'>
                        <button onClick={onSaveSeatsSelected} className='btn btn-warning'> Comfirm Selection</button>
                    </div>
                </div>
            </div>
            <div className="infoSeats py-5">
                <h2>Danh sách ghế bạn chọn</h2>
                <div className="infoSeatsSelected">
                    <table style={{ width: '50%' }} className=' text-white'>
                        <tr>
                            <th>Số ghế</th>
                            <th>Giá</th>
                            <th > Hủy</th>
                        </tr>
                        {renderseatsSelectedInfo}
                    </table>
                </div>
            </div>
        </div>
    )
}
