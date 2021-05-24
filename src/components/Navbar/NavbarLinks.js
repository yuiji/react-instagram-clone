import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'
import { ReactComponent as HomeSvg } from '../../assets/icons/home.svg'
import { ReactComponent as HomeFillSvg } from '../../assets/icons/home-fill.svg'
import { ReactComponent as MessangerSvg } from '../../assets/icons/messanger.svg'
import { ReactComponent as MessangerFillSvg } from '../../assets/icons/messanger-fill.svg'
import { ReactComponent as ExploreSvg } from '../../assets/icons/explore.svg'
import { ReactComponent as ExploreFillSvg } from '../../assets/icons/explore-fill.svg'
import { ReactComponent as LikeSvg } from '../../assets/icons/like.svg'
import { ReactComponent as NavbarLikeFillSvg } from '../../assets/icons/navbar-like-fill.svg'
import '../../styles/NavbarLinks.css'

const NavbarLinks = () => {
  const { user } = useContext(UserContext)
  const location = useLocation()

  return (
    <div className="navbar__links">
      <Link to="/">
        {location.pathname === '/' ? <HomeFillSvg /> : <HomeSvg />}
      </Link>
      <Link to="/direct/inbox">
        {location.pathname === '/direct/inbox' ? <MessangerFillSvg /> : <MessangerSvg />}
      </Link>
      <Link to="/explore">
        {location.pathname === '/explore' ? <ExploreFillSvg /> : <ExploreSvg />}
      </Link>
      <Link to="/like">
        {location.pathname === '/like' ? <NavbarLikeFillSvg /> : <LikeSvg />}        
      </Link>
      <Link to="/profile">
        <img src={user.photo} style={location.pathname === '/profile' ? {border: '1px solid black'}: null} alt="" />
      </Link>
    </div>
  )
}

export default NavbarLinks