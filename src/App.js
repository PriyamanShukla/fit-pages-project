
import './App.css';
import HomePage from './componenet/HomePage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import TopGainer from './componenet/TopGainer';
import IntradayBuying from './componenet/IntradayBuying';
import OpenHigh from './componenet/OpenHigh';
import CciReversal from './componenet/CciReversal';
import RsiOverbought from './componenet/RsiOverbought';
import OpenHighParams from './componenet/OpenHighParams'
import CciPeriodParams from './componenet/CciPeriodParams'; 
import CciArrayParams from './componenet/CciArrayParams'
import RsiParamsOne from './componenet/RsiParamsOne'
import RsiParamsTwo from './componenet/RsiParamsTwo'
import RsiParamsThree from './componenet/RsiParamsThree'
import RsiPeriodParams from './componenet/RsiPeriodParams'

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='top_gainers' element={<TopGainer/>}/> 
    <Route path='intraday_buying' element={<IntradayBuying/>}/>
    <Route path='open_high' element={<OpenHigh/>}/> 
    <Route path='cci_reversal' element={<CciReversal/>}/>
    <Route path='rsi_overbought' element={<RsiOverbought/>}/>
    <Route path='open_high_params' element={<OpenHighParams/>}/>
    <Route path='cci_period_params' element={<CciPeriodParams/>}/>
    <Route path='cci_array_params' element={<CciArrayParams/>}/>
    <Route path='rsi_params_one' element={<RsiParamsOne/>}/>
    <Route path='rsi_params_two' element={<RsiParamsTwo/>}/>
    <Route path='rsi_params_three' element={<RsiParamsThree/>}/>
    <Route path='rsi_period_params' element={<RsiPeriodParams/>}/>

      </Routes>
      </BrowserRouter>
  );
}

export default App;
