import './NavbarLinks.css'
import avatar from '../../assets/images/avatar.jpg'
import { ReactComponent as HomeSvg } from '../../assets/icons/home.svg'
import { ReactComponent as MessageSvg } from '../../assets/icons/message.svg'
import { ReactComponent as FindSvg } from '../../assets/icons/find.svg'
import { ReactComponent as FlowSvg } from '../../assets/icons/flow.svg'

const NavbarLinks = () => {
  return (
    <div className="navbar__links">
    <a href="/">
      <HomeSvg />
    </a>
    <a href="/">
      <MessageSvg />
    </a>
    <a href="/">
      <FindSvg />
    </a>
    <a href="/">
      <FlowSvg />
    </a>
    <a href="/">
      <img src={avatar} alt="" />
    </a>
  </div>
  )
}

export default NavbarLinks