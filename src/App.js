import Button from './Button';

function App(){
    return (
    <div>
        <div>
            <Button success rounded outline>Click me!</Button>
        </div>
        <div>
            <Button danger outline>Buy now!</Button>
        </div>
        <div>
            <Button warning>See deal!</Button>
        </div>
        <div>
            <Button>Rent now!</Button>
        </div>
        <div>
            <Button>Free demo!</Button>
        </div>
    </div>
    );
}

export default App;