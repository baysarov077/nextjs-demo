import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Users = ({users}) => {

  return (
    <MainContainer>
      <h1>Пользователи</h1>
      <div>
        <ul>
          {users.map(item => {
            return <Link key={item.id} href={`/users/${item.id}`}><li>{item.name}</li></Link>
          })}
        </ul>
      </div>
    </MainContainer>
  );
};

export default Users;

export async function getStaticProps(){
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()
  return {
    props: {users},
  }
}