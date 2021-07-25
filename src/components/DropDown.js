import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { filterGamesByGroups, filterGamesByLevels } from '../redux/actionCreators/games'

const DropDown = ({legend, options, setInput}) => {

    const dispatch = useDispatch()

    const {loading, error} = useSelector(state => state.games)

    const handleSelect = (e) => {

        let selectedOption = e.target.value
        setInput('')

        if(legend === 'groups'){
            dispatch(filterGamesByGroups(selectedOption))
        }

        if(legend === 'levels'){
            dispatch(filterGamesByLevels(selectedOption))
        }
    }

    return (
        <DropDownFieldSet disabled={loading || error}>

            <legend>{legend}</legend>
            
            <select onChange={handleSelect}>
                {options?.map((link, index) => <option key={index} value={link}>{link}</option>)}
            </select>

        </DropDownFieldSet>
    )
}

export default DropDown

const DropDownFieldSet = styled.fieldset`
    font-size: 9px;
    border: 1px solid white;
    border-radius: 2px;

    > legend {
        padding: 0 2px;
        margin-left: 10px;
        margin-right: auto;
        text-transform: capitalize;
        color: #DDD;
    }

    > select {
        border: none;
        outline: none;
        padding: 3px 7px 7px 15px;
        background-color: transparent;
        font-size: 13px;
        width: 96%;
        text-transform: capitalize;
        color: white;
        font-family: 'Poppins', sans-serif;

        > option {
            color: #444;

            &:checked { 
                background-color: #333;
                color: white
            }
        }
    }
`
