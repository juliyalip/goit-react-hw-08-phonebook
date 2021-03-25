import Image from 'react-bootstrap/Image';
import book from './book.png'

const HomeView = () => (
    <div className="home" >
        <h1>Твоя записная книжка</h1>
        <Image src={book} fluid />
        </div>
);

export default HomeView;