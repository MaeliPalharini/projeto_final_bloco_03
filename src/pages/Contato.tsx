import { Mail, Phone, Headphones } from "lucide-react";

export default function Contato() {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6 text-[#0d2a47]">Nosso time está à disposição: veja abaixo como nos encontrar.</h1>

            <div className="grid md:grid-cols-2 gap-15">
                <div className="space-y-6">
                    <div className="bg-gray-100 rounded-xl p-6 shadow-sm">
                        <h2 className="font-bold text-lg mb-2">Nosso Endereço:</h2>
                        <p className="text-gray-600">
                            Av. Ipiranga, xx – República <br />
                            São Paulo – SP, 01046-925
                        </p>
                    </div>

                    <div className="overflow-hidden rounded-xl shadow-md">
                        <iframe
                            title="Mapa da República"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.9261834347794!2d-46.64265582467133!3d-23.54317846127026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59a85631d5ed%3A0x21d59a070972c17e!2sPra%C3%A7a%20da%20Rep%C3%BAblica%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1694377770077!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="250"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="bg-gray-100 rounded-xl p-6 flex items-start gap-4 shadow-sm">
                        <Headphones className="w-8 h-8 text-[#0d2a47]" />
                        <div>
                            <h2 className="font-bold text-lg">Central de atendimento</h2>
                            <p className="text-gray-600">
                                Confira as dúvidas mais frequentes ou fale com a gente.
                            </p>
                        </div>
                    </div>

                    <div className="bg-gray-100 rounded-xl p-6 flex items-start gap-4 shadow-sm">
                        <Mail className="w-7 h-7 text-[#0d2a47]" />
                        <div>
                            <h2 className="font-bold text-lg">E-mail</h2>
                            <p className="text-gray-600">
                                <a href="mailto:suporte@clickfarma.com" className="hover:underline">
                                    suporte@clickpharma.com
                                </a>
                            </p>
                            <p className="text-gray-600">
                                <a href="mailto:contato@clickfarma.com" className="hover:underline">
                                    contato@clickpharma.com
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="bg-gray-100 rounded-xl p-6 flex items-start gap-4 shadow-sm">
                        <Phone className="w-7 h-7 text-[#0d2a47]" />
                        <div>
                            <h2 className="font-bold text-lg">Telefone</h2>
                            <p className="text-gray-600">
                                <a href="tel:+551140028922" className="hover:underline">
                                    (11) 4002-8922
                                </a>
                            </p>
                            <p className="text-gray-600">
                                <a href="tel:+551112345678" className="hover:underline">
                                    (11) 1234-5678
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


