import { Link } from 'react-router-dom';
import './card.css';


const Card = ({ item, buyFunc }) => {


    const textFunc = (str = 'Hello World', length = 10) => {
        return str.length > length
            ? str.substr(0, length - 3).trim() + '...'
            : str
    }






    return (
        <div className='card'>
            <Link to={`/details/${item.id}`}></Link>
            <img src={item.image} alt="" />
            <h2>{textFunc(item.title, 30)}</h2>
            <p>{textFunc(item.description, 40)}</p>
            <p>{item.category}</p>
            <div className="card-bottom">
                <p>${item.price}</p>
                <button onClick={() => {
                    buyFunc(item)
                }}>buy</button>
            </div>
        </div>
    );
}

export default Card;
