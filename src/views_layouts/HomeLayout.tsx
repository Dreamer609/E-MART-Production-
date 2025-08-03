import  {ReactNode}  from 'react'
import { Outlet } from 'react-router-dom';
import NavMain from "../features/navigation/Nav_Main/NavMain";
import NavSearch from "../features/navigation/Nav_Search/NavSearch";

interface HomeLayoutProps {
  childrenHome?: ReactNode;
}

const HomeLayout = ({ childrenHome }: HomeLayoutProps) => {
  return (
    <div className="homeContainer w-screen flex flex-col">
      <header>
        <NavMain links={["Home", "New Arrivles", "About", "Contact"]}/>
        <NavSearch/>
      </header>
      <main>
        {childrenHome || <Outlet/>}
      </main>
      <footer>
         Footer
      </footer>
    </div>
  );
};

export default HomeLayout;