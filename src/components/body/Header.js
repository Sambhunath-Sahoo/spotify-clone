import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import { useStateProviderValue } from '../../context/StateProvider';


function Header() {
    const [{ user }] = useStateProviderValue();


    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <input
                    placeholder="Search for Artists, Songs, or Podcasts "
                    type="text"
                />
            </div>

            <div className="header_right">
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
