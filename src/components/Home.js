import React, { useState, useEffect } from "react";

const Home = () => {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [textIndex, setTextIndex] = useState(0);
    const texts = ["Programar", "Ler", "Estudar", "Aprender"];

    const typingSpeed = 150;
    const deletingSpeed = 100;
    const delay = 2000;

    useEffect(() => {
        let interval: NodeJS.Timeout;
        let timeout: NodeJS.Timeout;

        if (!isDeleting) {
            interval = setInterval(() => {
                setText((prev) => prev + texts[textIndex].charAt(prev.length));
                if (text.length === texts[textIndex].length) {
                    clearInterval(interval);
                    timeout = setTimeout(() => setIsDeleting(true), delay);
                }
            }, typingSpeed);
        } else {
            interval = setInterval(() => {
                setText((prev) => prev.slice(0, prev.length - 1));
                if (text.length === 0) {
                    clearInterval(interval);
                    setIsDeleting(false);
                    setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
                }
            }, deletingSpeed);
        }

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [text, isDeleting, textIndex, texts]);

    return (
        <div className="min-h-screen text-white">
            <div className="container mx-auto py-12 flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-6 md:px-12">
                <div
                    id="mainbox"
                    className="mt-20 flex flex-col items-center md:items-start md:w-2/3 mb-6 md:mb-0 bg-[#2C2F33] p-6 rounded-lg shadow-lg"
                >
                    <h2 className="text-main text-center md:text-left text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
                        <span className="text-white">Olá, meu nome é</span>{" "}
                        <span className="text-amber-300">João Vitor Rossi</span>!
                    </h2>
                    <p className="text-main text-center text-2xl sm:text-3xl md:text-4xl mb-6">
                        E eu gosto de <span className="text-amber-300">{text}</span>
                    </p>
                    <p className="text-main text-center md:text-left text-lg sm:text-xl md:text-2xl mb-6">
                        Olá, eu sou <span className="text-amber-300">João Vitor Rossi</span>, um estudante apaixonado por tecnologia e desenvolvimento de software. Estou sempre em busca de novos desafios e oportunidades para aprender e crescer. Apesar de ainda estar no início da minha jornada, estou constantemente explorando diferentes ferramentas e linguagens para aprimorar minhas habilidades e criar soluções eficientes. Meu portfólio reflete minha dedicação e vontade de aprender, onde cada projeto é uma chance de me superar e expandir meus conhecimentos no mundo da tecnologia.
                        <br />
                    </p>
                </div>

                <div className="flex justify-center items-center ml-5">
                    <img
                        id="pfp"
                        src="rossi.jpeg"
                        alt="Minha Foto"
                        className="rounded-full object-cover w-80 h-80 sm:w-96 sm:h-96 md:w-[20rem] md:h-[20rem] lg:w-[30rem] lg:h-[30rem]"
                    />
                </div>

            </div>

            {/* Seção de Tecnologias */}
            <div className="container mx-auto px-6 sm:px-8 md:px-12 py-12">
                <div
                    id="techitem"
                    className="items-center justify-center bg-[#2C2F33] p-6 rounded-lg shadow-lg"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-8 text-center">
                        Ferramentas e linguagens que sou capacitado:
                    </h2>

                    <div className="grid grid-cols-3 gap-4 px-6 sm:px-8 md:px-16 lg:px-32">
                        {/* Python */}
                        <div className="flex flex-col items-center">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                                alt="Python"
                                className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain mb-4"
                            />
                        </div>

                        {/* MySQL */}
                        <div className="flex flex-col items-center">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
                                alt="MySQL"
                                className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain mb-4"
                            />
                        </div>

                        {/* GitHub */}
                        <div className="flex flex-col items-center">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                                alt="GitHub"
                                className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain mb-4"
                            />
                        </div>

                        {/* HTML */}
                        <div className="flex flex-col items-center">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
                                alt="HTML"
                                className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain mb-4"
                            />
                        </div>

                        {/* CSS */}
                        <div className="flex flex-col items-center">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
                                alt="CSS"
                                className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain mb-4"
                            />
                        </div>

                        {/* Docker */}
                        <div className="flex flex-col items-center">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg"
                                alt="Docker"
                                className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain mb-4"
                            />
                        </div>

                        {/* React */}
                        <div className="flex flex-col items-center">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
                                alt="React"
                                className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain mb-4"
                            />
                        </div>

                        {/* TypeScript */}
                        <div className="flex flex-col items-center">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                                alt="TypeScript"
                                className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain mb-4"
                            />
                        </div>

                        {/* JavaScript */}
                        <div className="flex flex-col items-center">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                                alt="JavaScript"
                                className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain mb-4"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
