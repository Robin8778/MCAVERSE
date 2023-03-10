'use client';

import { Footer, Navbar } from '../components';


const Photos = () => {
    return (
        <>
            <title>MCA❤️VERSE</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <div className="bg-primary-black overflow-hidden">
                <Navbar />

                <section class="overflow-hidden text-neutral-700">
                    <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
                        <div class="-m-1 flex flex-wrap md:-m-2">
                            <div class="flex w-1/2 flex-wrap">
                                <div class="w-1/2 p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center"
                                        src="/photos/1.png" />
                                </div>
                                <div class="w-1/2 p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center"
                                        src="/photos/2.png" />
                                </div>
                                <div class="w-full p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center"
                                        src="/photos/12.JPG" />
                                </div>
                            </div>
                            <div class="flex w-1/2 flex-wrap">
                                <div class="w-full p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center"
                                        src="/photos/4.png" />
                                </div>
                                <div class="w-1/2 p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center"
                                        src="/photos/5.png" />
                                </div>
                                <div class="w-1/2 p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center"
                                        src="/photos/6.png" />
                                </div>
                            </div>
                            <div class="flex w-1/2 flex-wrap">
                                <div class="w-full p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center"
                                        src="/photos/7.png" />
                                </div>
                                <div class="w-1/2 p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center"
                                        src="/photos/8.png" />
                                </div>
                                <div class="w-1/2 p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center"
                                        src="/photos/9.png" />
                                </div>
                            </div>
                            <div class="flex w-1/2 flex-wrap">
                                <div class="w-full p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center"
                                        src="/photos/10.png" />
                                </div>
                                <div class="w-1/2 p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center"
                                        src="/photos/11.png" />
                                </div>
                                <div class="w-1/2 p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center"
                                        src="/photos/12.JPG" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    )
}

export default Photos;
