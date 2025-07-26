"use client";

import { ShieldCheck, BarChart, Gauge, ScrollText, UserRound } from "lucide-react";

const PrivacyPolicyPage = () => {
    return (
        <div className="w-screen py-6 md:py-18">
            <main className="max-w-3xl mx-auto px-6 py-16 text-gray-800">
                <header className="mb-12">
                    <h1 className="text-4xl font-bold text-orange-400 mb-4">Privacy Policy</h1>
                    <p className="text-lg text-gray-600">
                        In questa pagina spieghiamo come vengono raccolti e trattati i tuoi dati quando visiti questo sito.
                    </p>
                </header>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-2">
                        <ShieldCheck className="text-orange-400" />
                        <h2 className="text-2xl font-semibold text-orange-400">Titolare del trattamento</h2>
                    </div>
                    <p>
                        Il titolare del trattamento è il gestore di questo sito.
                    </p>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-2">
                        <ScrollText className="text-orange-400" />
                        <h2 className="text-2xl font-semibold text-orange-400">Dati raccolti</h2>
                    </div>
                    <p>
                        Non raccogliamo dati personali identificabili. Alcune informazioni tecniche possono essere raccolte in forma anonima per analisi statistiche e ottimizzazione delle performance.
                    </p>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-2">
                        <BarChart className="text-orange-400" />
                        <h2 className="text-2xl font-semibold text-orange-400">Analisi del traffico</h2>
                    </div>

                    <div className="mb-4">
                        <h3 className="font-semibold text-orange-400 mb-1">📊 Vercel Web Analytics</h3>
                        <p className="text-gray-700">
                            Usiamo <strong>Vercel Web Analytics</strong> per raccogliere statistiche anonime sull’uso del sito. Nessun cookie viene installato e nessun dato personale viene tracciato.
                            <br />
                            <a
                                href="https://vercel.com/docs/analytics"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-orange-400 underline hover:text-yellow-600 transition"
                            >
                                Scopri di più
                            </a>
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-orange-400 mb-1">⚡ Vercel Speed Insights</h3>
                        <p className="text-gray-700">
                            Utilizziamo <strong>Speed Insights</strong> per misurare le performance del sito (es. velocità di caricamento, stabilità visiva). I dati sono anonimi e non comportano l’uso di cookie.
                            <br />
                            <a
                                href="https://vercel.com/docs/speed-insights"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-orange-400 underline hover:text-yellow-600 transition"
                            >
                                Scopri di più
                            </a>
                        </p>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-2">
                        <UserRound className="text-orange-400" />
                        <h2 className="text-2xl font-semibold text-orange-400">Diritti dell’utente</h2>
                    </div>
                    <p>
                        Ai sensi del GDPR, hai diritto di accedere, correggere o cancellare i tuoi dati personali, ove applicabile, nonché di opporti o limitarne il trattamento.
                    </p>
                </section>

                <section>
                    <div className="flex items-center gap-2 mb-2">
                        <Gauge className="text-orange-400" />
                        <h2 className="text-2xl font-semibold text-orange-400">Aggiornamenti della policy</h2>
                    </div>
                    <p>
                        Questa policy può essere aggiornata in futuro. Ti invitiamo a consultarla periodicamente per restare informato su eventuali modifiche.
                    </p>
                </section>
            </main>
        </div>
    );
}

export default PrivacyPolicyPage;