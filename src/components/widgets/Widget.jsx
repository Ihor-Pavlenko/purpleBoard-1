import { useEffect, useState } from 'react'

import './widget.scss'

import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined'
import ShopTwoIcon from '@material-ui/icons/ShopTwo'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase'

const Widget = ({ type, onClick }) => {
  const [data, setData] = useState({})
  const [amount, setAmount] = useState(null)
  const [diff, setDiff] = useState(null)

  useEffect(() => {
    switch (type) {
    case 'users':
      setData({
        title: 'USERS',
        isMoney: false,
        link: 'See all users',
        icon: (
          <PersonOutlineOutlinedIcon
            className="icon"
            style={{ color: 'crimson', backgroundColor: 'rgba(250,0,0,0.2)' }}
          />
        ),
      })
      break
    case 'products':
      setData({
        title: 'PRODUCTS',
        isMoney: false,
        link: 'View all products',
        icon: (
          <ShopTwoIcon
            className="icon"
            style={{
              color: 'goldenrod',
              backgroundColor: 'rgba(218,165,32,0.2)',
            }}
          />
        ),
      })
      break
    case 'earning':
      setData({
        title: 'EARNINGS',
        isMoney: true,
        link: 'View all earnings',
        icon: (
          <MonetizationOnIcon
            className="icon"
            style={{ color: 'green', backgroundColor: 'rgba(0,128,0,0.2)' }}
          />
        ),
      })
      break
    case 'balance':
      setData({
        title: 'BALANCE',
        isMoney: true,
        link: 'See details',
        icon: (
          <AccountBalanceWalletIcon
            className="icon"
            style={{
              color: 'purple',
              backgroundColor: 'rgba(128,0,128,0.2)',
            }}
          />
        ),
      })
      break
    default:
      break
    }
  }, [type])

  useEffect(() => {
    const unsub = onSnapshot(collection(db, type), (snapShot) => {
      const totalUsers = snapShot.docs.length
      let activeCount = snapShot.docs.filter((item) => item.data().isActive).length

      setAmount(totalUsers)
      setDiff((activeCount * 100) / totalUsers)
    })

    return () => {
      unsub()
    }
  }, [type])

  return (
    <div className="widget" onClick={onClick}>
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && '$'} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <ExpandLessOutlinedIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget
