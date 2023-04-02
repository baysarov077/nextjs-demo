import Link from "next/link";
import { useEffect, useState } from "react";
import A from "../components/A";

const Users = ({users}) => {

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

export async function getStaticProps(){
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()
  return {
    props: {users},
  }
}