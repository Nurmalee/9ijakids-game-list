import styled from 'styled-components'
import BannerImg from '../images/naijakids_green-removebg-preview.png'

const Banner = () => {
    return (
        <BannerContainer>
            <BannerContent>
                <BannerHighlight>
                    <h1>Learning Made Fun</h1>
                    <p>Keep your children learning and entertained all day with our huge selection of fun learning games.</p>

                    <a href="#search">search for games</a>

                </BannerHighlight>

                <BannerImage>
                    <img src={BannerImg} alt="Banner-Img" />
                </BannerImage>
            </BannerContent>
        </BannerContainer>
    )
}

export default Banner

const BannerContainer = styled.div`
    background-color: teal;
    position: relative;
    height: 550px;
    display: flex;
    align-items: center;
`

const BannerContent = styled.div`
    width: 90vw;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
`

const BannerImage = styled.div`
    height: 100%;

    > img {
        height: 100%;
        max-width: 500px;
        object-fit: contain;
    }

    @media screen and (max-width: 900px) {
        position: absolute;
        top: 0;
        right: 20px;
        bottom: 0;
    }
`

const BannerHighlight = styled.div`
    width: 400px;
    color: white;
    z-index: 4;

    > h1 {
        font-size: 3.1rem;
    }

    > p {
        font-size: 17px;
    }

    > a {
        background-color: white;
        padding: 15px 50px;
        display: inline-block;
        text-decoration: none;
        color: black;
        font-weight: 500;
        font-size: 15px;
        margin-top: 30px;
        text-transform: capitalize;
        box-shadow: 2px 3px 20px black;
        transition: 400ms;

        &:hover {
            background-color: #333;
            color: white;
        }
    }

    @media screen and (max-width: 900px) {
        background-color: rgba(0, 0, 0, 0.35);  
        padding: 20px;

        > h1 {
            font-size: 30px;
        }

        > p {
                font-size: 14px;
        }

        > a {
            padding: 10px 35px;
            font-size: 12px;
        }
    }

`