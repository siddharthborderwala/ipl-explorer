import NavLink from './NavLink'

export default function Nav({ activeTab }) {
  return (
    <nav className="p-4 border-none rounded-lg flex flex-wrap space-x-2 items-center">
      <NavLink tabName="players" isActive={activeTab === 'players'} />
      <NavLink tabName="teams" isActive={activeTab === 'teams'} />
      {/* <NavLink tabName="matches" isActive={activeTab === 'matches'} /> */}
      <NavLink tabName="venues" isActive={activeTab === 'venues'} />
    </nav>
  )
}
