import Head from 'next/head'
import Carousel from 'react-material-ui-carousel'

export default function Home(props) {
 
  const items = [{"title":"Connected One Surface Web","description":"","url":"","image":"https://picsum.photos/1980/480","thumbnail":"https://picsum.photos/40/40"},
  {"title":"Connected 2 Dark Web","description":"Connected 2 Dark Web","url":"","image":"https://picsum.photos/1980/480","thumbnail":"https://picsum.photos/40/40"},
  {"title":"Advertisement","description":"","url":"","image":"https://picsum.photos/1980/480","thumbnail":"https://picsum.photos/40/40"},
  {"title":"OTT Consulting","description":"","url":"","image":"https://picsum.photos/1980/480","thumbnail":"https://picsum.photos/40/40"},
]; 

 const thumbs=[]
  items.map((item)=>{thumbs.push(<img
    src={item.thumbnail} />)});

  return (
    <div>
      <Head>
        <title>Aliv Cinema</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>   
      <Carousel
          IndicatorIcon={thumbs} 
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
              src={props.item.image}
             />
       </>
    )
}
