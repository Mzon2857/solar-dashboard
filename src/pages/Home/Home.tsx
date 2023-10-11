import './home.scss'
import BatteryChart from "../../components/batteryChart/batteryChart.tsx"
import EnergyChart from '../../components/energyChart/energyChart.tsx'
import Overview from '../../components/overview/overview.tsx'

const Home = () => {
    return (
        <div className="home">
            <div className="box box1"><Overview/></div>
            <div className="box Energy"><EnergyChart/></div>
            <div className="box Battery"><BatteryChart/></div>
            <div className="box Data">Data input</div>
            <div className="box Misc">Misc analytics</div>
            <div className="box ALERTS">ALERTS</div>
        </div>
    )
}

export default Home