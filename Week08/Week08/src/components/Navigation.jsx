import { NavLink } from 'react-router-dom'
export default function Navigation() {
  const navItemClass = 'flex w-60 rounded h-9 items-center mb-4 hover:bg-gray-100 px-2'
  const activeClass = 'bg-pink-500 text-white'

  return (
    <div className='border border-gray-400 w-90 justify-items-center h-screen rounded'>
      <ul className='m-4 justify-items-center'>
        <li className='mb-4 w-80 rounded h-20 flex '>
          <img src="/logo.png" alt="logo" />
        </li>

        <li className='w-80 mb-9 justify-items-center flex'>
          <NavLink to="/" className={({ isActive }) => `${navItemClass} ${isActive ? activeClass : ''}`}>
            <img className='brightness-0 ml-2 w-13 h-13' src="/Squares four 1.png" alt="" />
            <span className='text-4xl font-bold ml-2'>DashBoard</span>
          </NavLink>
        </li>

        <li className='w-80 mb-9 justify-items-center flex'> 
          <NavLink to="/project" className={({ isActive }) => `${navItemClass} ${isActive ? activeClass : ''}`}>
            <img className='brightness-0 ml-2 w-13 h-13' src="/Folder.png" alt="" />
            <span className='text-4xl font-bold ml-2'>Project</span>
          </NavLink>
        </li>

        <li className='w-80 mb-9 justify-items-center flex'> 
          <NavLink to="/teams" className={({ isActive }) => `${navItemClass} ${isActive ? activeClass : ''}`}>
            <img className='brightness-0 ml-2 w-13 h-13' src="/Groups.png" alt="" />
            <span className='text-4xl font-bold ml-2'>Teams</span>
          </NavLink>
        </li>

        <li className='w-80 mb-9 justify-items-center flex'> 
          <NavLink to="/overview" className={({ isActive }) => `${navItemClass} ${isActive ? activeClass : ''}`}>
            <img className='brightness-0 ml-2 w-13 h-13' src="/Pie chart.png" alt="" />
            <span className='text-4xl font-bold ml-2'>Analytics</span>
          </NavLink>
        </li>

        <li className='w-80 mb-9 justify-items-center flex'> 
          <NavLink to="/messages" className={({ isActive }) => `${navItemClass} ${isActive ? activeClass : ''}`}>
            <img className='brightness-0 ml-2 w-13 h-13' src="/Chat.png" alt="" />
            <span className='text-4xl font-bold ml-2'>Messages</span>
          </NavLink>
        </li>

        <li className='w-80 mb-9 justify-items-center flex'> 
          <NavLink to="/integrations" className={({ isActive }) => `${navItemClass} ${isActive ? activeClass : ''}`}>
            <img className='brightness-0 ml-2 w-13 h-13' src="/Code.png" alt="" />
            <span className='text-4xl font-bold ml-2'>Integrations</span>
          </NavLink>
        </li>

        <li className='w-70 rounded-2xl h-90 items-center bg-blue-100 p-4 mt-30'>
          <img className='ml-2 mt-0' src="/Group.png" alt="" />
          <p className='text-2xl font-bold mt-2'>V2.0 is available</p>
          <button className='mt-2 w-full border border-blue-300 text-blue-500 bg-white h-8 rounded'>Try now</button>
        </li>
      </ul>
    </div>
  )

}
