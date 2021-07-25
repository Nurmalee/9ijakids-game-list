import styled from 'styled-components'

const GamesSkeleton = () => {
    return (
        <SkeletalBox>
            <SkeletalImage></SkeletalImage>
            <SkeletalTitle></SkeletalTitle>
            <SkeletalDescription></SkeletalDescription>
        </SkeletalBox>
    )
}

export default GamesSkeleton

const SkeletalBox = styled.div`
    border-bottom: 1px solid;
    padding: 1px;
`

const SkeletalImage = styled.div`
    height: 200px;
    background-color: #CCC;
`

const SkeletalTitle = styled.h3`
    height: 30px;
    background-color: #CCC;
    margin: 5px 0;
    padding: 0 20px;
`

const SkeletalDescription = styled.p`
    height: 20px;
    background-color: #CCC;
    margin: 5px 0;
    padding: 0 20px;
`
