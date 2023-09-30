import './home.scss'
import BatteryChart from "../../components/batteryChart/batteryChart.tsx"
import EnergyChart from '../../components/energyChart/energyChart.tsx'

const Home = () => {
    return (
        <div className="home">
            <div className="box box1">Misc analytics</div>
            <div className="box box2">Data stream input</div>
            <div className="box box3"><BatteryChart/></div>
            <div className="box box4"><EnergyChart/></div>
            <div className="box box5">Energy Use analytics</div>
            <div className="box box6">ALERTS</div>
        </div>
    )
}

export default Home