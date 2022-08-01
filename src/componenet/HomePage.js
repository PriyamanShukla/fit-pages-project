import { Link } from 'react-router-dom'
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allData } from "../redux/actions/dataActions";

const HomePage = () => {
    const dataList = useSelector((state) => state.allDataList);
    const { data } = dataList
    console.log("data",data)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allData());
    }, [dispatch]);

    return (
        <>

        {data?.map((v,i) => (
            <div key={i} className='container w-50'>
            <div className='jumbotron ' >
                <div className="card mt-5">
                    <div className="card-body " >
                        <h5 className="card-title">Stock Scan Parser</h5>
                        <table className="table table-dark table-hover ">
                            <tbody >
                                <tr>
                                    <th scope='col' >{v[0].name}
                                    <br /> <Link style={{ color:v[0].color, fontSize:"10px" }} to="/top_gainers">
                                        {v[0].tag}</Link> </th>
                                </tr>
                                <tr>
                                    <th scope='col'>{v[1].name}
                                    <br /> <Link style={{ color:v[1].color, fontSize:"10px" }} to="/intraday_buying">
                                        {v[1].tag}</Link> </th>
                                </tr>

                                <tr><th scope='col'>{v[2].name}
                                    <br /> <Link style={{ color: v[2].color, fontSize:"10px" }} to="/open_high">{v[2].tag}</Link>  </th></tr>

                                <tr><th scope='col'>{v[3].name}
                                    <br /> <Link style={{ color: v[3].color, fontSize:"10px" }} to="/cci_reversal">{v[3].tag}</Link>  </th></tr>

                                <tr><th scope='col'>{v[4].name}
                                    <br /> <Link style={{ color: v[4].color, fontSize:"10px" }} to="/rsi_overbought">{v[4].tag}</Link></th> </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
          ))}
                
        </>
);
}
 export default HomePage;



                    {/* {data?.map((v,i) => (
            <div key={i} className='container w-50'>
            <div className='jumbotron'>
                <div className="card mt-5">
                    <div className="card-body">
                        <h5 className="card-title">Stock Scan Parser</h5>
                        <table className="table table-dark table-hover table-bordered">
                            <tbody >
                                <tr>
                                    <th scope='col'>{v[0].name}
                                    <br /> <Link style={{ color:v[0].color, fontSize:"10px" }} to="/top_gainers">
                                        {v[0].tag}</Link> </th>
                                </tr>
                                <tr>
                                    <th scope='col'>{v[1].name}
                                    <br /> <Link style={{ color:v[1].color, fontSize:"10px" }} to="/top_gainers">
                                        {v[1].tag}</Link> </th>
                                </tr>

                                <tr><th scope='col'>{v[2].name}
                                    <br /> <Link style={{ color: v[2].color, fontSize:"10px" }} to="open_high">{v[2].tag}</Link>  </th></tr>

                                <tr><th scope='col'>{void[3].name}
                                    <br /> <Link style={{ color: v[3].color, fontSize:"10px" }} to="cci_reversal">{v[3].tag}</Link>  </th></tr>

                                <tr><th scope='col'>{v[4].name}
                                    <br /> <Link style={{ color: v[4].color, fontSize:"10px" }} to="rsi_overbought">{v[4].tag}</Link></th> </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
          ))} */}