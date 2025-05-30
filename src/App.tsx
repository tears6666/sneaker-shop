import { Layout } from './components/layout/Layout';
import Catalog from './components/catalog/Catalog'
import { Routes ,Route } from "react-router-dom";
export default function App(){
  return(
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Catalog />} />
        </Route>
      </Routes>
    </>
  )
}