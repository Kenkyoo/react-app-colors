import randomColor from 'randomcolor';

function RandomColor({ setColor }) {

    function setRandomColor () {
    const randColor = randomColor();
    setColor(randColor)
    }

    return (
        <button onClick={setRandomColor} className="btn btn-primary">Random Color</button>
    )
}

export default RandomColor;