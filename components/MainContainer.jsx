import Head from "next/head";
import A from "./A";

const MainContainer = ({ children, keywords }) => {
  return (
    <div>
      <Head>
        <meta keywords={'next, spa, react' + keywords}></meta>
        <title>Главная страница</title>
      </Head>
      <div className="navbar">
        <A text={"Главная"} href={"/"} />
        <A text={"Пользователи"} href={"/Users"} />
      </div>
      <div>
        {children}
      </div>
      <style jsx>
        {
          `
            .navbar{
              background-color: orange;
              padding: 15px
            }
          `
        }
      </style>
    </div>
  );
};

export default MainContainer;
