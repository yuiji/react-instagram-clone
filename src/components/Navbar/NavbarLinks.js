import { Link, useLocation } from 'react-router-dom'
import './NavbarLinks.css'
import avatar from '../../assets/images/avatar.jpg'
import { ReactComponent as HomeSvg } from '../../assets/icons/home.svg'
import { ReactComponent as HomeFillSvg } from '../../assets/icons/home-fill.svg'
import { ReactComponent as MessangerSvg } from '../../assets/icons/messanger.svg'
import { ReactComponent as MessangerFillSvg } from '../../assets/icons/messanger-fill.svg'
import { ReactComponent as ExploreSvg } from '../../assets/icons/explore.svg'
import { ReactComponent as ExploreFillSvg } from '../../assets/icons/explore-fill.svg'
import { ReactComponent as LikeSvg } from '../../assets/icons/like.svg'
import { ReactComponent as LikeFillSvg } from '../../assets/icons/like-fill.svg'

const NavbarLinks = () => {
  const location = useLocation()
  console.log(location)
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
        {location.pathname === '/like' ? <LikeFillSvg /> : <LikeSvg />}        
      </Link>
      <Link to="/profile">
        <img src={avatar} style={location.pathname === '/profile' ? {border: '1px solid black'}: null} alt="" />
      </Link>
    </div>
  )
}

export default NavbarLinks