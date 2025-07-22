import CustomSeparator from "@/components/CustomSeparator";

const ContactsSection = () => {
    return (
        <section id="contatti">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Contatti</h2>
                
                <div className="w-full flex justify-center items-center">
                    <CustomSeparator />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-10">
                {/* Contact Info - Modern Card */}
                <div className="lg:w-1/2 bg-white rounded-2xl p-6 md:p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100">
                    <div className="space-y-5 text-gray-700">
                        <div className="mb-4">
                            <p className="text-xl font-bold text-gray-900">Emmeservice srl</p>
                            <CustomSeparator />
                        </div>

                        <div className="flex items-start">
                            <div className="flex-shrink-0 w-8">
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <div>
                                <p>Via della Casella, 134</p>
                                <p>50142 Firenze (FI)</p>
                            </div>
                        </div>

                        <InfoRow icon="fa-solid fa-fax" text="P. IVA 06486620484" />

                        <div className="flex items-start">
                            <div className="flex-shrink-0 w-8">
                                <i className="fa-solid fa-phone"></i>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900">Tel. e Fax:</p>
                                <p>055.783751</p>
                            </div>
                        </div>

                        <InfoRow
                            icon="fa-solid fa-mobile"
                            label="Cellulare amministrazione (solo orario di ufficio):"
                            text="339-2410384" />

                        <InfoRow
                            icon="fa-solid fa-envelope"
                            label="Email:"
                            text="info@emmeservicesrl.org"
                            link="mailto:info@emmeservicesrl.org"
                        />

                        <InfoRow
                            icon="fa-solid fa-earth-europe"
                            label="Sito web:"
                            text="www.emmeservicesrl.org"
                            link="https://www.emmeservicesrl.org"
                        />
                    </div>
                </div>

                {/* Map - Modern Styling */}
                <div className="lg:w-1/2 h-[350px] sm:h-[500px] rounded-2xl overflow-hidden border border-gray-200 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)]">
                    <iframe
                        title="Emmeservice Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.682705271956!2d11.22859271549851!3d43.7969967791176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a5400288c2b37%3A0xcbbdbb78b012f306!2sVia%20della%20Casella%2C%20134%2C%2050142%20Firenze%20FI%2C%20Italy!5e0!3m2!1sen!2sit!4v1690022000000!5m2!1sen!2sit"
                        width="100%"
                        height="100%"
                        className="border-0"
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </section>
    );
};

// Reusable InfoRow component for cleaner code
const InfoRow = ({ icon, label, text, link }: {
    icon: string,
    text: string,
    label?: string,
    link?: string
}) => (
    <div className="flex items-start">
        <div className="flex-shrink-0 w-8">
            <i className={icon} />
        </div>
        <div>
            {label && <p className="font-semibold text-gray-900">{label}</p>}
            {link ? (
                <a
                    href={link}
                    target={link.startsWith('http') ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-200 hover:underline hover:underline-offset-2"
                >
                    {text}
                </a>
            ) : <p>{text}</p>}
        </div>
    </div>
);

export default ContactsSection;