import { useRouter } from 'next/router';
import {
    Link,
    Heading,
} from '@chakra-ui/react';

interface MobileHeaderLinkProps {
    to: string;
    children: React.ReactNode;
    onClick?: () => void;
}

function MobileHeaderLink(props: MobileHeaderLinkProps) {
    const router = useRouter();
    const selected = router.pathname === props.to;
    return (
        <Link
            href={props.to}
            onClick={e => {
                e.preventDefault();
                router.replace(props.to);
                if (props.onClick) {
                    props.onClick();
                }
            }}
            textDecor="none"
        >
            <Heading
                fontWeight={selected ? '600' : 'normal'}
                color="brand.background"
                mb={4}
                pl={selected ? 4 : 0}
                borderLeft={selected ? '5px solid' : 'none'}
                borderColor="brand.blue"
            >
                {props.children}
            </Heading>
        </Link>
    );
}

export default MobileHeaderLink;