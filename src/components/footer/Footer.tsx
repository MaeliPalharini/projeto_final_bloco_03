import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full bg-[#0d2a47] text-[#f1cdc5]">
            <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col items-center gap-3">
                <p className="text-lg font-semibold text-center">
                    ClickPharma © {year} — Todos os direitos reservados
                </p>

                <p className="text-sm text-center text-[#d9b2a9]">
                    Acesse nossas redes sociais
                </p>

                <div className="flex gap-6">
                    <a
                        href="https://www.linkedin.com/in/maeli-palharini/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="hover:text-[#d9b2a9] transition-colors"
                    >
                        <LinkedinLogo size={32} weight="fill" />
                    </a>

                    <a
                        href="https://www.instagram.com/meggtrindade/?hl=pt"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"
                        className="hover:text-[#d9b2a9] transition-colors"
                    >
                        <InstagramLogo size={32} weight="fill" />
                    </a>

                    <a
                        href="https://github.com/MaeliPalharini"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="hover:text-[#d9b2a9] transition-colors"
                    >
                        <GithubLogo size={32} weight="fill" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
