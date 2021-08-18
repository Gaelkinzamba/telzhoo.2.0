import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import MicIcon from '@material-ui/icons/Mic';
import { useHistory } from 'react-router-dom';
import './Search.css';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';


const Search = props => {
    
    const term = props?.term
    
    const history = useHistory()
    const [ input, setInput ] = useState(term);
    const [ {}, dispatch ] = useStateValue();
    const [ showCancel, setCancel ] = useState( false );

    const search = event => {
        event.preventDefault();
        dispatch({
            type : actionTypes.SET_SEARCH_TERM,
            term : input
        })

        history.push(`/search?term=${input}`)
    }

    const Delete = event => {
        setInput("");

        if ( input == "" && showCancel ) {
            setCancel( !showCancel );
        }
        // else if ( input != "" && sho ) {
        //     setCancel( !showCancel );
        // }
    }

    const searchText = e =>{
        setInput(e.target.value);

        if ( input == "" && showCancel ) {
            setCancel( !showCancel );
        }
        else if ( input != "" && !showCancel ) {
            setCancel( !showCancel );
        }
        
    }

    return (
        <form className="search" onSubmit={search}>
            <div className="search__input">

                <SearchIcon onClick={search} className="search__inputIcon" />
                {/* <input type="submit" value="Go" /> */}
                <input placeholder="Search" className="search__text" type="text" value={input} onChange={ searchText } autofocus />
                {/* <input className="search__cancel" type="reset" value="Cancel" /> */}
                {
                    showCancel && <CloseIcon onClick={Delete} className="search__cancel" />
                }
                
                {/* <MicIcon /> */}
            </div>
        </form>
    )
}

export default Search;