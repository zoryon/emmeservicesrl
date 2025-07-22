import { NavItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
    {
        label: "home",
        id: "home",
    },
    {
        label: "servizi",
        id: "services",
    },
    {
        label: "photogallery",
        id: "photogallery",
    },
    {
        label: "chi siamo",
        id: "about-us",
    },
    {
        label: "contatti",
        id: "contacts",
    },
    {
        label: "altro",
        id: "other",
    },
] as const;