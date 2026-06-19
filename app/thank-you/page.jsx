'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';

export default function ThankYouPage() {
    const router = useRouter();

    useEffect(() => {
        // Redirect to home after 8 seconds
        const timer = setTimeout(() => {
            router.push('/');
        }, 8000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
    <>
            <Header />
            <div className="pt-20 my-20 sm:my-40 flex items-center justify-center bg-gradient-to-b from-[#eff7ff] via-[#f8fbff] to-[#fbfcff] px-4">
                <div className="max-w-2xl w-full text-center">
                    {/* Success Icon */}
                    <div className="mb-8 flex justify-center">
                        <div className="relative">
                            {/* Envelope Background */}
                            <div className="w-24 h-20 bg-gradient-to-b from-slate-300 to-slate-400 rounded-lg shadow-lg flex items-center justify-center relative">
                                {/* Envelope Flap */}
                                <div
                                    className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-slate-400 to-slate-350 rounded-t-lg"
                                    style={{
                                        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 65%, 0 100%)',
                                    }}
                                />
                                {/* Checkmark Badge */}
                                <div className="absolute -top-3 -right-3 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full p-5 shadow-xl flex items-center justify-center w-20 h-20 border-4 border-white">
                                    <svg
                                        className="w-10 h-10 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={3}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="space-y-6 pb-8">
                        {/* Heading */}
                        <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight">
                            Thank You!
                        </h1>

                        {/* Description */}
                        <div className="space-y-4">
                            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto">
                               Your inquiry has been received. <br/>Our team will connect with you shortly.
                            </p>
                        </div>

                        {/* Closing */}
                        {/* <div className="pt-4 space-y-3">
                            <p className="text-lg text-slate-700 font-medium">
                                Best regards,
                            </p>
                            <p className="text-lg text-slate-600">
                                The Digital Xplode Team
                            </p>
                        </div> */}

                        {/* Back to Home Button */}
                        <div className="pt-8">
                            <button
                                onClick={() => router.push('/')}
                                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Back to Home
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            </>
        );
    }
