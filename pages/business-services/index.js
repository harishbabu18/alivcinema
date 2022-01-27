import Head from 'next/head'
import Image from 'next/image'
import CardTemplate from '../../src/CardTemplate'
import Grid from '@mui/material/Grid';

export default function BusinessServices() {
  return (
    <div>
      <Head>
        <title>Aliv Cinema - Business Services</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <h1>
      Business Service
        </h1>
        <p>
        We are Aliv Cinema.We are Team of cinephile focused on a mission of releasing best in class Movies in both Online and Offline.
        </p>

       <p> Our Team:-</p>
       <Grid container spacing={2}>
       <Grid item xs={4}>
       <CardTemplate name ="Harish Babu B K" about="Harish is a Web Developer By Profession and Filmaker by passion.Harish has good amount of experience designing websites and Advertisement Strategy" skills="Photoshop,Website Designing,Digital Marketing,Direction"/>
       </Grid>
       <Grid item xs={4}>
       <CardTemplate name ="Praveen Rehan Duraisamy" about="Praveen is a Cinematographer by Profession and has got degree in Cinematography from Australia.He has worked in good amount of Fashon Photography assignments, Short Films and Advertisements." skills="Photography,Cinematography,Direction"/>
       </Grid>
       </Grid>
      </main>
    </div>
  )
}
