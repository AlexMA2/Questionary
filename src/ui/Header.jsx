import { HiOutlineNewspaper } from 'react-icons/hi'
import { CgProfile } from 'react-icons/cg'
import { Link } from 'react-router-dom'
const iconStyle = 'mx-4 cursor-pointer hover:opacity-80'

const Header = () => {
  return (
    <div className="bg-black-100 m-h-10 p-3 shadow-lg mb-4 shadow-slate-400 flex flex-row justify-between align-middle">
      <h1 className="text-left text-slate-50 font-bold text-4xl">
        Questionary
      </h1>
      <div className="flex flex-row text-slate-50 align-middle mt-2 text-3xl">
        <Link to="/tests">
          <HiOutlineNewspaper className={iconStyle} />
        </Link>
        <Link to="/profile">
          <CgProfile className={iconStyle} />
        </Link>
      </div>
    </div>
  )
}

export default Header
