import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allData } from "../redux/actions/dataActions";

const RsiParamsOne = () => {
    const dataList = useSelector((state) => state.allDataList);
    const { data } = dataList
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(allData());
    }, [dispatch]);

  return (
    <>{
        data?.map((v, i) => {
          const text = v[0]?.criteria
          return (
            <div key={i} className='container w-50'>
              <div className='jumbotron'>
                <div className="card mt-5">
  
                  <div className="card-body">
  
                    <table className="table table-dark table-hover">
  
                      <tbody >
                        
                        <tr>
                          <th scope='col'><p>1</p>
                          </th>
                        </tr>
  
                        <tr>
                          <th scope='col'><p>2</p>
                          </th>
                        </tr>
  
  
                        <tr>
                          <th scope='col'><p>3</p>
                          </th>
                        </tr>
  
                        <tr>
                          <th scope='col' ><p>5</p>
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
  

export default RsiParamsOne