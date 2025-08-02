import CustomSeparator from "@/components/CustomSeparator";

const AboutUsSection = () => {
    return (
        <section id="storia" className="bg-slate-100 py-18 px-6 text-justify">
            <header className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase">
                    Chi Siamo
                </h2>
                <p className="mt-2 text-lg text-gray-600">
                    La nostra storia, la vostra sicurezza.
                </p>
            </header>

            <div className="w-full flex justify-center mb-6 mt-2">
                <CustomSeparator />
            </div>

            <div className="mt-10 max-w-4xl mx-auto text-gray-700 space-y-6">
                <p>
                    La nostra azienda è nata da 10 anni ed è composta da persone che da molto tempo si occupano del soccorso stradale, del trasporto conto terzi e della gestione del parco auto. Questa solida base di esperienza è la garanzia della nostra professionalità.
                </p>
                <p className="font-semibold text-gray-800">
                    Il servizio di carroattrezzi è disponibile solo su prenotazione, senza limite di regione e provincia.
                </p>
                <p>
                    A disposizione della clientela abbiamo due numeri di telefono cellulare direttamente collegati ai nostri operatori, pronti a intervenire per risolvere nel più breve tempo possibile i vostri problemi di mobilità. La sede amministrativa è sempre aperta negli orari di ufficio e mette a disposizione, oltre ai canali tradizionali, una linea cellulare dedicata per garantire massima reperibilità.
                </p>
                <p className="italic mt-8">
                    La qualità dei nostri interventi, unita alla cortesia e professionalità dei nostri operatori, è il nostro biglietto da visita. Non vi resta che testare la veridicità delle nostre parole.
                </p>
            </div>
        </section>
    );
}

export default AboutUsSection;