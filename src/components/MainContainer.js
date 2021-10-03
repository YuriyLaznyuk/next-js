import A from './A';
import Head from 'next/head';

const MainContainer = ({children,keywords, description,title}) => {
  return (
    <>
      <Head>
        <meta keywords={'next.js YuraL app '+ keywords}></meta>
        <meta description={'next.js YuraL app about '+ description}></meta>
        <title>{title}</title>

      </Head>


      <div className='navBar'>
        <A href={'/'} text='Main Page'/>
        <span>|</span>
        <A href={'/users'} text='Users'/>
      </div>
      <div>
        {children}
      </div>
      <style jsx>
        {`
          .navBar{
          background-color: #856404;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  
  }
  a{
    text-decoration: none;
    padding: 5px;}`}
      </style>

    </>
  );
};

export default MainContainer;