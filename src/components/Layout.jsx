import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';
 
export const Layout = () => {
  return (
    <>
      <header>
        <div className='container'>
          <h1>Social Media App</h1>
          <Navbar/>
        </div>
      </header>
       
      <main>
        <Outlet />
      </main>
    </>
  );
}
