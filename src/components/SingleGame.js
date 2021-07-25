import styled from 'styled-components'

const SingleGame = ({GameTitle, GameDescription, GameImage, Topic, Group, Level}) => {
    return (
        <GameContainer>
            <Image>
                <img src={GameImage} alt={GameTitle} />
                <div></div>
            </Image>
            <GameInfo>
                <h3> {GameTitle} </h3>
                <p> Description: {GameDescription} </p>
                {/* <ul>
                    <li> Topic: {Topic} </li>
                    <li> Group: {Group} </li>
                    <li> Level: {Level} </li> 
                </ul> */}
            </GameInfo>
        </GameContainer>
    )
}

export default SingleGame

const GameContainer = styled.div`
    /* border: 1px solid #fff; */
    /* border-radius: 3px; */
    /* box-shadow: 0 0 10px 1px #999; */
    /* background-color: rgba(0, 0, 0, 0.5); */
    border-bottom: 1px solid;
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
        background-color: rgba(0, 0, 0, 0.1);
        cursor: pointer;

        &:hover {
            background-color: rgba(0, 0, 0, 0.8);
        }
    }

`

const GameInfo = styled.div`
    padding: 5px 10px;

    > h3 {
        font-size: 16px;
        font-weight: 500;
    }

    > p {
        color: #444;
        font-size: 11px;
        font-style: italic;
    }

    > ul {
        padding: 0 20px;
        list-style-type: disc;

        > li {
            font-size: 10px;
        }
    }
`
