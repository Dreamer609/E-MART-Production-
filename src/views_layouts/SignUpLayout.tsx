import  {ReactNode}  from 'react'
import { Outlet } from 'react-router-dom';
import NavMain from "../features/navigation/Nav_Main/NavMain";

interface HomeLayoutProps {
  childrenHome?: ReactNode;
}

const SignUpLayout = ({ childrenHome }: HomeLayoutProps) => {
  return (
    <div className="homeContainer w-screen flex flex-col">
      <header>
        <NavMain links={["Home", "New Arrivles", "SignUp", "SignIn"]} />
      </header>
      <main>{childrenHome || <Outlet />}</main>
    </div>
  );
};

export default SignUpLayout;