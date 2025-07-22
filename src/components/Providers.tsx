import { ActiveSectionProvider } from "@/hooks/use-active-section";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ActiveSectionProvider>
            {children}
        </ActiveSectionProvider>
    );
}

export default Providers;