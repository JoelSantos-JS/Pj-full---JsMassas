import Benefits from "../components/Benetifs/Benefits";
import Header from "../components/Header/Header";
import client from "../sanity";
import ImageText from "../components/ImageText/ImageText";
import Cardapio from "../components/Cardapio/Cardapio";
import Reviews from "../components/Reviews/Reviews";
import Menu from "../components/Menu/Menu";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/NavBar/Navbar";


export default function Home({header, benefits, about,cardapio , reviews, menu}) {

  return (
      <>
      <Navbar/>
  <Header header={header}/>
        <main>
       
       <Benefits benefits={benefits}/>
       <ImageText about={about} />
       <Cardapio cardapio={cardapio}/>
       <Reviews review={reviews} />
       <Menu menu={menu}/>
       <Footer/>
        </main>

        </>
  )
}

export const getStaticProps  = async () => {
  const header = await client.fetch(`*[_type == "header"][0]`)
  const benefits = await client.fetch(`*[_type == "benefits"][0..2]`)
  const about = await client.fetch(`*[_type == "about"][0]`)
  const cardapio = await client.fetch(`*[_type == "cardapio"][0..3]`)
  const reviews = await client.fetch(`*[_type == "reviews"][0..2]`)
  const menu = await client.fetch(`*[_type == "menu"][0..3]`)


  return {
    props: {
      header,
      benefits,
      about,
      cardapio,
      reviews,
      menu
      
    }
  }
}