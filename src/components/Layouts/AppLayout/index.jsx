export default function AppLayout({ children }) {
  return (
    <>
      <nav className="bg-indigo-500">
        <a href="#" className="text-white">
          Questionary
        </a>
      </nav>
      {children}
    </>
  )
}
