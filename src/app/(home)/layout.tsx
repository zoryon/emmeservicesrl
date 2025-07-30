// Custom
import Bottombar from "@/components/global/Nav/Bottombar";

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            {children}
            <Bottombar />
        </div>
    );
}
