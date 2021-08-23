import {
    Link,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface DesktopHeaderLinkProps {
    to: string;
    children: React.ReactNode;
}


function DesktopHeaderLink(props: DesktopHeaderLinkProps) {
    const router = useRouter();
    const selected = router.pathname === props.to;
    return (
        <Link
            href={props.to}
            onClick={e => {
                e.preventDefault();
                router.replace(props.to);
            }}
            textDecor="none"
            borderRadius="10px"
            alignItems="center"
            fontWeight="600"
            px={3}
            py={2}
            ml={4}
            bg={selected ? 'gray.700' : 'none'}
            color={selected ? 'gray.400' : 'gray.200'}
            display="flex"
            transition="none"
            _hover={{
                textDecor: 'none',
                bg: 'gray.700',
                color: selected ? 'gray.400' : 'gray.100'
            }}
        >
            {props.children}
        </Link>
    );
}

export default DesktopHeaderLink