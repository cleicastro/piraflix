import React from 'react';

// import { Container } from './styles';

function ButtonLink(props) {
    return (
        <a className={props.className} href={props.link}>
            {props.children}
        </a>
    );
}

export default ButtonLink;