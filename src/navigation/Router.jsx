import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../ui/Header.jsx'
import Home from '../pages/Home/Home.jsx'
import Tests from '../pages/tests/Tests.jsx'
import Test from '../pages/tests/Test.jsx'
import Profile from '../pages/profile/Profile.jsx'

import { HOME, TESTS, TEST, PROFILE } from './routes.js'

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path={HOME} element={<Home />} />
        <Route path={TESTS} element={<Tests />} />
        <Route path={TEST} element={<Test />} />
        <Route path={PROFILE} element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
