import React, { useEffect } from "react";
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from "react-redux";
import { allData } from "../redux/actions/dataActions";

const OpenHigh = () => {

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
                          <th scope='col' style={{ backgroundColor:"#74b9ff" }}>{v[2].name}
                          <br /> 
                          <p style={{ color: v[2].color, fontSize: "10px" }} to="/top_gainers">{v[2].tag}</p> 
                          </th>
                        </tr>
                        <tr>
                          <th scope='col'><p>SToday s open  yesterday s low by <Link to="/open_high_params">(-3)</Link>  %</p>
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


export default OpenHigh;
