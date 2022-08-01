import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { allData } from "../redux/actions/dataActions";

const IntradayBuying = () => {

  const dataList = useSelector((state) => state.allDataList);
  const { data } = dataList
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(allData());
  }, [dispatch]);



  return (
      <>{
        data?.map((v,i) => {
         const  text = v[0]?.criteria
      return (
            <div  key ={i} className='container w-50'>
              <div className='jumbotron'>
                <div className="card mt-5">

                  <div className="card-body">

                    <table className="table table-dark table-hover ">

                      <tbody >
                        <tr>
                          <th scope='col' style={{ backgroundColor:"#74b9ff" }}>{v[1].name}
                          <br /> 
                          <p style={{ color: v[1].color, fontSize: "10px" }} to="/top_gainers">{v[0].tag}</p> 
                          </th>
                        </tr>
                        <tr>
                          <th scope='col'>Sort - %price change in descending order
                          
                          
                          <p style={{fontSize:"10px"}}>and</p>
                          
                          
                          Previous candle open = previous candle high
                          <p style={{fontSize:"10px"}}>and</p>
                          
                          
                          2 previous candle’s open = 2 previous candle’s high
                          <br/>
                          <br/>
                          </th>
                        </tr>


                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
  </>
  )

}


export default IntradayBuying
