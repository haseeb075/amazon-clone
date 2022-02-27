import React from 'react';
import headercss from '../headers/header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header(props) {
    return (
        <div className='header'>
            
            {/* logo */}
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" className='header__logo' />
            
            {/* search bar */}
            <div className='header__search'>

                <input className='header__searchInput' type="text " />
                <SearchIcon className='header__searchIcon'/>
            </div>

            {/* navbar */}
            <div className='header__nav'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Hello Guest</span>
                    <span className='header__optionLineTwo'>Sign In</span>

                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>Orders</span>
                </div>

                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>

                <div className='header__optionBasket'>
                    <ShoppingBasketIcon />
                    
                    <span className='header__optionLineTwo header__basketCount'>0</span>
                </div>

            </div>
        </div>
    );
}

export default Header;