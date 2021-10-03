import {useRouter} from 'next/router';
import style from "../../style/user.module.scss"
import MainContainer from '../../components/MainContainer';

export default function User({user}) {
  const {query}=useRouter();
  return(

    <MainContainer 
      title={'User Id'}
      keywords={'user id'}
      description={'about user id'}
    >
    <div className={style.user}>
      USER id: {query.id}
      <h1>Name User: {user.name}</h1>
    </div>

    </MainContainer>

  )
}

export async function getServerSideProps({params}) {

  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await response.json();


  return {
    props: {user}, // will be passed to the page component as props
  }
}