import styled from 'styled-components'

const SingleGame = ({GameTitle, GameDescription, GameImage}) => {
    return (
        <GameContainer>
            <Image>
                <img src={GameImage} alt={GameTitle} />
                <div></div>
            </Image>
            <GameInfo>
                <h3> {GameTitle} </h3>
                <p> {GameDescription} </p>
            </GameInfo>
        </GameContainer>
    )
}

export default SingleGame

const GameContainer = styled.div`
    border: 1px solid #999;
    border-radius: 3px;
    box-shadow: 3px 2px 5px #ccc;
    padding: 1px;
`

const Image = styled.div`
    position: relative;
    cursor: pointer;
    z-index: -1;

    > img {
        border-top-right-radius: 3px;
        border-top-left-radius: 3px;
        object-fit: contain;
        width: 100%;
    }

    > div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: 500ms;
        
    }

    &:hover {
        > div {
            background-color: rgba(0, 0, 0, 0.5)
        }
    }

`

const GameInfo = styled.div`
    padding: 10px;

    > h3 {
        font-family: 'Girassol', sans-serif;
        font-size: 18px;
        font-weight: 500;
    }

    > p {
        font-family: 'Poppins', sans-serif;
        color: #444;
        font-size: 13px;
    }
`
