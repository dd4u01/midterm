
import { useRouter } from "next/router";
import NavBar from "@/components/navigation";

export default function Hello(){
    const router = useRouter();
    const {pid} = router.query;
    return(
    <>
        <NavBar></NavBar>
        post:{pid}
    </>)
}