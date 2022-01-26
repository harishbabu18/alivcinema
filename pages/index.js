import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'



export default function Home(props) {
  const items = [<img src="https://picsum.photos/40/40"/>, 
  <img src="https://picsum.photos/40/40"/>, 
  <img src="https://picsum.photos/40/40"/>
 ]; 
  return (
    <div>
      <Head>
        <title>Aliv Cinema</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>   
      <Carousel
          IndicatorIcon={items}

      >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
     
      </main>
    </div>
  )
}




function Item(props)
{
    return (
        <>
            <img
              src="https://picsum.photos/1980/400"
             />
       </>
    )
}
