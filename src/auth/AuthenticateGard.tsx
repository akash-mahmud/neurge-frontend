// ** React Imports
import { ReactNode, ReactElement, useEffect, useState } from 'react'

// ** Next Imports
import { useRouter } from 'next/router'
import { useSelector } from '@/store'
import { Spin } from 'antd'

// ** Hooks Import

interface AuthGuardProps {
  children: ReactNode
  fallback: ReactElement | null
}



export default function AuthGuard({ children, fallback }: AuthGuardProps) {
  const { isAuthenticated, user } = useSelector((state) => state?.auth);

  const [showAuth, setShowAuth] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const allowed = isAuthenticated;

    if (!allowed) {
      router.push("/login");
    }
    const timeoutId = setTimeout(() => {
      setShowAuth(false);
    }, 500);
    return () => {
      clearTimeout(timeoutId); // Cancel the timeout when the component is unmounted
    };
        // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);

  if (showAuth) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "90vh",
          width: "100%",
        }}
      >
        <Spin spinning={true} />
      </div>
    );
  }
  return <> {children}
  </>;
}
