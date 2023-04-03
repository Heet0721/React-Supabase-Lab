import { useState } from 'react';
import { supabase } from './supabaseClient';
import './App.css';

function Library() {
  const [myBooks, setMyBooks] = useState([]);
  async function getBooks() {
    let { data: books, error } = await supabase
      .from('books')
      .select ('*')
    setMyBooks (books) ;
  }
  getBooks();
  return (
    <table className="my-table">
    {
      myBooks.map(b => (
        <tr>
          <td>{b.title}</td>
          <td>{b.ISBN}</td>
          <td>{b.Author}</td>
        </tr>
      ))
    }
  </table>
  
  );
}


function Header() {
  return (
    <p> <h3>Hi, My name is Heet</h3>
   My Favourite game is:</p>
    
  );
}  

const games = 
  {
  title: 'Need for Speed: Most Wanted',
  publisher: 'Electronic Arts',
  published: "2007",
  image: 'https://upload.wikimedia.org/wikipedia/en/8/8e/Need_for_Speed_Most_Wanted_Box_Art.jpg',
  width: "264",
  height: '378'
};


function FavGame() {
  return(
  <div>
    <h2> {games.title} ({games.published}) </h2>
    <p>{games.publisher}</p>
    {games.image &&
  <img
    className="gameCover" 
    src={games.image}
    alt={games.title + ' cover'}
    style={{
      width: games.width,
      height: games.height
    }}
    />
    }
    </div>  
  );
}

const GameCollection = [
  { id: 1, title: 'Need for Speed: ProStreet', theme: 'Racing', isAvailable: true },
  { id: 2, title: 'Ludo', theme: 'Board', isAvailable: true },
  { id: 3, title: 'Poker', theme: 'Arcade', isAvailable: false },
];
  
function GameRack() {
  const listGame = GameCollection.map(game =>
    <li
      key={game.id}
      style={{
        color: game.isAvailable ? 'green' : 'red'
      }}
    >
      {game.title}
    </li>
  );
  return (
    <ul>{listGame}</ul>
  ) 
}  

function LikeButton() {
  const [count, setCount] = useState(0);
  function doLike() {
    setCount(count + 1);
  }
  return (
    <>
      <h3>This is a Like Button</h3>
      <button onClick ={doLike}> Like {count} </button>
    </>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Library />
        <Header />
        <FavGame />
        <GameRack />

        <LikeButton />
      </header>
    </div>
  ); 
}

export default App;
