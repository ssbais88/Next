import Link from "next/link";
import { useEffect } from "react";
import {useRouter} from "next/router";
const Error = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3000);
    }, []);
    return (
    <>
        <div>
            <h1>404 Page Not Found !</h1>
        </div>
        <h2>Please go back to Home Page.</h2>
        {/* <Link href="/">
            <a>Home</a>        
        </Link> */}
        <a onClick={() => router.push('/')}>Home</a>
    </>
  )
}
export default Error;