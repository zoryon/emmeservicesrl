import { Service } from "@/types";

export const SERVICES: Service[] = [
    {
        name: "Soccorso Stradale",
        icon: "fa-solid fa-car-burst",
        description: "Emmeservice effettua servizio di soccorso stradale senza alcun limite di zona o provincia, qualsiasi sia la Vostra necessità. Recuperiamo il vostro mezzo guasto, fermo o incidentato e possiamo trasportarlo presso officina per riparazione, presso centri di demolizione auto autorizzati o presso il nostro deposito a pagamento."
    },
    {
        name: "Trasporto Conto Terzi",
        icon: "fa-solid fa-trailer",
        description: "Effettuiamo trasporto conto terzi sul territorio nazionale  di vetture, d'epoca, nuove, usate /furgoni/ecc."
    },
    {
        name: "Deposito custodito veicoli",
        icon: "fa-solid fa-warehouse",
        description: "Presso il nostro deposito provvisto di sistemi di sicurezza, è possibile gestire la sosta di vetture/furgoni/camper/ecc. per breve o per lungo tempo, a pagamento."
    },
    {
        name: "",
    }
] as const;