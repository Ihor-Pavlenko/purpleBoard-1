import './sidebar.scss'
import { Link, useNavigate } from 'react-router-dom'

import DashboardIcon from '@material-ui/icons/Dashboard'
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined'
import ShopTwoIcon from '@material-ui/icons/ShopTwo'
import CreditCardIcon from '@material-ui/icons/CreditCard'
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation'
import EqualizerIcon from '@material-ui/icons/Equalizer'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import SettingsSystemDaydreamIcon from '@material-ui/icons/SettingsSystemDaydream'
import CodeIcon from '@material-ui/icons/Code'
import SettingsIcon from '@material-ui/icons/Settings'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { useContext } from 'react'
import { DarkModeContext } from '../../context/darkModeContext'
import { AuthContext } from '../../context/AuthContext'

const Sidebar = () => {
  const { dispatch: darkModeDispatch } = useContext(DarkModeContext)
  const { dispatch: authDispatch } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleLogout = () => {
    authDispatch({ type: 'LOGOUT' })
    navigate('/')
  }

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="logo">logo</span>
        </Link>
      </div>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/">
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: 'none' }}>
            <li>
              <PeopleAltOutlinedIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: 'none' }}>
            <li>
              <ShopTwoIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <EmojiTransportationIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <EqualizerIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <CodeIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <PersonOutlineIcon className="icon" />
            <span>Profile</span>
          </li>
          <li onClick={handleLogout}>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={() => darkModeDispatch({ type: 'LIGHT' })}>{}</div>
        <div className="colorOption" onClick={() => darkModeDispatch({ type: 'DARK' })}>{}</div>
      </div>
    </div>
  )
}

export default Sidebar
