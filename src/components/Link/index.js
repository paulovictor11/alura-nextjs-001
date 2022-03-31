import NextLink from 'next/link';
import LinkEstilizado from '../LinkEstilizado';

export default function Link({children, href, ...props}) {
    return (
        <NextLink href={href}>
            <a {...props}>{children}</a>
            {/* <LinkEstilizado {...props}>
                {children}
            </LinkEstilizado> */}
        </NextLink>
    );
}