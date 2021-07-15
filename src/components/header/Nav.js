import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';


export default class Nav extends React.Component {

    render() {
        return (
            <div className="nav"> 
                <AnchorLink href='#things'>Home</AnchorLink>
                <AnchorLink href='#Photo'>Fotos</AnchorLink>
                <AnchorLink href='#information'>Informações</AnchorLink>
                <AnchorLink href='#contact'>Contatos</AnchorLink>
            </div>
        );
    }
}