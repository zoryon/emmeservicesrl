import { ServiceItem } from "@/types";

export const SERVICE_ITEMS: ServiceItem[] = [
    {
        name: "Soccorso Stradale",
        icon: "fa-solid fa-car-burst",
    },
    {
        name: "Trasporto Conto Terzi",
        icon: "fa-solid fa-trailer",
    },
    {
        name: "Deposito custodito veicoli",
        icon: "fa-solid fa-warehouse",
    },
    {
        name: "",
    }
] as const;