import Image from "next/image";

const Logo = () => {
    return (
        <div className="h-fit flex gap-3">
            <Image 
                alt="Logo"
                src={"/logo.png"}
                width={40}
                height={40}
                quality={100}
            />
            <div className="flex flex-col justify-center -space-y-1 text-center uppercase">
                <h1 className="text-3xl font-extrabold text-brand tracking-tighter">CAR WASH</h1>
                <h3 className="text-xs tracking-widest">SERVICES 24/7</h3>
            </div>
        </div>
    );
}

export default Logo;