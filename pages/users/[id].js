import { useRouter } from "next/router"
import MainContainer from "../../components/MainContainer"
import styles from '../../styles/user.module.scss'

export default function User({user}) {

  const {query} = useRouter()

  return (
    <MainContainer className={styles.user}>
      <h1>Пользователь c id {query.id}</h1>
      <p>Имя пользователя: {user.name}</p>
    </MainContainer>
  )
}

export async function getServerSideProps({params}) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  const user = await response.json()
  return {
    props: {user},
  }
}