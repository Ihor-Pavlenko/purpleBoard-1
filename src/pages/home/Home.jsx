import './home.scss'

import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widgets/Widget'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import List from '../../components/table/Table'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="users"
            onClick={() => navigate('/users')}
          />
          <Widget type="products" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={2} title="Last 6 month (Revenue)" />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest transactions</div>
          <List />
        </div>
      </div>
    </div>
  )
}

export default Home
