import A from "../components/A";

const Index = () => {
  return (
    <div>
      <div className="navbar">
        <h1>Главная</h1>
        <A className="link" text={'Пользователи'} href={'/Users'}/>
      </div>
      <style jsx>
        {
          `
            .navbar {
              background: orange;
              padding: 15px;
              
            }
          `
        }
      </style>
    </div>
  );
};

export default Index;