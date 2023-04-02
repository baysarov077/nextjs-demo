import Link from "next/link";
import { useState } from "react";
import A from "../components/A";

const Users = () => {

  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Petya',
    },
    {
      id: 2,
      name: 'Oleg',
    }
  ])

  return (
    <div>
      <A text={'Главная'} href={'/'}/>
      <h1>Пользователи</h1>
      <div>
        <ul>
          {users.map(item => {
            return <Link key={item.id} href={`/users/${item.id}`}><li>{item.name}</li></Link>
          })}
        </ul>
      </div>
    </div>
  );
};

export default Users;