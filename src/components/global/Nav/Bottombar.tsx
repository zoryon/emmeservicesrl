import Link from "next/link";

const Bottombar = () => {
    return (
        <div className="w-screen h-[90px] flex justify-center items-center gap-5 bg-[rgb(40,40,40,0.9)] mt-10 uppercase text-background">
            <Link href="https://www.emmeservicesrl.org" className="underline font-bold">
                Privacy policy
            </Link>
            <span>|</span>
            <span>
                Compliace privacy:{" "}
                <Link href="https://www.privacyofficertoscana.eu" className="underline font-bold" target="_blank">
                    Privacy Officer.
                </Link>
            </span>
        </div>
    );
}

export default Bottombar;