import React from "react";

// eslint-disable-next-line react/display-name
const LinkEstilizado = React.forwardRef(({onClick, href, children}, ref) => {
    return (
        <a href={href} onClick={onClick} ref={ref} style={{color: 'red'}}>
            {children}
        </a>
    );
});

export default LinkEstilizado;