import Link from "next/link";

const Bottombar = () => {
    return (
        <div className="w-screen h-[90px] flex justify-center items-center gap-5 bg-[rgb(40,40,40,0.9)] mt-10 uppercase text-background text-xs lg:text-base text-center">
            <Link href="/privacy-policy" className="underline font-bold">
                Privacy policy
            </Link>
           
        </div>
    );
}

export default Bottombar;