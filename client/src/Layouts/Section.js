import React from "react";
import { BannerLogo } from "../Assets/banner";

function Section() {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                    <div>
                        <div className="max-w-lg md:max-w-none text-center">
                            <h2 className="text-3xl font-extrabold text-sky-400 sm:text-5xl dark:text-white">
                                Welcome to AI source.
                            </h2>

                            <p className="mt-4 text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe <strong className="text-indigo-300">
                                    architecto maiores repudiandae amet perferendis </strong> repellendus, reprehenderit voluptas
                                sequi.
                            </p>

                            <a
                                href="#"
                                className="mt-8 inline-block rounded-full border bg-rose-600 hover:bg-indigo-900 px-12 py-3 text-sm font-medium text-white hover:text-white focus:ring-3 focus:outline-hidden"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>

                    <div>

                        <BannerLogo />

                    </div>

                </div>
            </div>

        </section>
    )
}

export default Section;