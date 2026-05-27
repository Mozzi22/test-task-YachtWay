import { lazy, Suspense } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import Loader from './components/Loader.tsx'
const CreateVesselPage = lazy(() => import('./pages/create-vessel'))

const App = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      {/*<Route path="/vessels" element={<VesselsPage />} />*/}
      <Route path="/create-vessel" element={<CreateVesselPage />} />
      <Route path="/" element={<Navigate to="/create-vessel" replace />} />
    </Routes>
  </Suspense>
)

export default App
