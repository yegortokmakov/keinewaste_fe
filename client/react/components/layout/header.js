import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import HeaderLogo from './logo';


const Header = React.createClass({
    mixins: [PureRenderMixin],
    render() {
        return (
            <div
                className="main-header"
            >
                <HeaderLogo />
            </div>
        );
    }
});

export default Header;