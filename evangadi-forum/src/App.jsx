import './App.css'
import Routering from './Routering'
import { AuthProvider } from './utilty/AuthProvider'
function App() {

  return (
    <>
      <AuthProvider>
        <Routering />
      </AuthProvider>
    </>
  );

}

export default App
