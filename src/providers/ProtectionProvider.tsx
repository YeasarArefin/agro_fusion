'use client';
import Spinner from '@/components/ui/Spinner';
import { useSession } from 'next-auth/react';
import { useRouter } from "next/navigation";
import { useEffect } from 'react';

type Props = {
    children: React.ReactElement;
};

export const ProtectionProvider = ({ children }: Props): JSX.Element => {
    const router = useRouter();
    const { status: sessionStatus } = useSession();
    const authorized = sessionStatus === 'authenticated';
    const unAuthorized = sessionStatus === 'unauthenticated';
    const loading = sessionStatus === 'loading';

    useEffect(() => {
        if (loading || !router) return;

        if (unAuthorized) {
            console.log('not authorized');
            router.push('/sign-in');
        }
    }, [loading, unAuthorized, sessionStatus, router]);


    if (loading) {
        return <Spinner />;

    }

    return authorized ? <div>{children}</div> : <></>;
};