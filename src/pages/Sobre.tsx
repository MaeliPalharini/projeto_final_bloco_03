export default function Sobre() {
    return (
        <section className="bg-[#fef6ec] min-h-screen flex items-center py-8">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-15">

                <div className="w-full md:w-1/2">
                    <img
                        src="/src/assets/back2.png"
                        alt="Equipe ClickFarma"
                        className="rounded-1xl shadow-lg object-cover w-full h-150"
                    />
                </div>

                {/* Texto */}
                <div className="w-full md:w-1/2 text-[#173F35]">
                    <h1 className="text-4xl font-bold mb-6 text-[#0d2a47] ">Sobre a ClickFarma</h1>
                    <p className="text-lg leading-relaxed">
                        A <span className="font-bold">ClickFarma</span> foi fundada em <span className="font-semibold">2025</span>
                        com o propósito de revolucionar o acesso a medicamentos e produtos de saúde no Brasil.
                        Nossa missão é simplificar a vida das pessoas oferecendo uma experiência digital rápida,
                        segura e acessível para compra de produtos farmacêuticos.
                    </p>
                    <p className="text-lg leading-relaxed mt-4">
                        Desde o início, buscamos unir tecnologia, cuidado e praticidade para garantir que cada cliente
                        encontre exatamente o que precisa, com a confiança e a qualidade que a saúde merece.
                    </p>
                </div>
            </div>
        </section>
    );
}
