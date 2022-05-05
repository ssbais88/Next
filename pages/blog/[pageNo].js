import { useRouter } from "next/router";

//Dynamic Routing
const pageNo = () => {
const router = useRouter();
const pageNumber = router.query.pageNo;
  return (
    <>
        <h1>Hello World from {pageNumber} !</h1>
    </>
  )
}

export default pageNo;