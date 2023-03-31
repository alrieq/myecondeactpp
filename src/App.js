import './App.css';
import Navbar from './components/Navbar'
import Hero from "./components/Hero"
import Card from "./components/Card"
import Joke from "./components/Joke"
import jokesData from "./components/JokesData"
import data from "./data"
function App() {
  const jokeElements = jokesData.map(joke => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />
  })
  const dataElement = data.map(data => {
    return <Card
      key={data.id}
      props ={data}
      
      />
  })
  return (

    <>
      <Navbar />
      <Hero />
      <section className='card-list'>{dataElement}</section>

    </>
  );
}

export default App;
{/* <Card
img={girl}
rating="5.0"
reviewCount={6}
country="USA"
title="Life Lessons with Katie Zaferes"
price={136}

/> */}