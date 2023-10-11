import './home.scss'
import BatteryChart from "../../components/batteryChart/batteryChart.tsx"
import EnergyChart from '../../components/energyChart/energyChart.tsx'
import Overview from '../../components/overview/overview.tsx'
import Alerts from "../../components/AlertsBox/Alerts.tsx"
import Earnings from "../../components/EarningsBox/Earnings.tsx"

const Home = () => {
    return (
        <div className="home">
            <div className="box box1"><Overview/></div>
            <div className="box Energy"><EnergyChart/></div>
            <div className="box Battery"><BatteryChart/></div>
            <div className="box Data">Data input</div>
            <div className="box Misc"><Earnings/></div>
            <div className="box ALERTS"><Alerts/></div>
        </div>
    )
}

export default Home