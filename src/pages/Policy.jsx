/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { useModal } from '../context/ModalContext';
import { Handshake, ShieldCheck, CreditCard, Layers, Clock, Check } from 'lucide-react';

export default function Policy() {
    useRevealOnScroll();
    const { setInfoModal, setIsMouseLoopPaused, setIsChatbotOpen } = useModal();
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const date = new Date();
        setCurrentDate(date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }));
    }, []);

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 md:pb-32 pt-32 md:pt-40">
            {/* Header / Hero */}
            <header className="pt-12 md:pt-24 pb-12 px-6 max-w-4xl mx-auto text-center border-b border-slate-100 dark:border-slate-800 mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6 tracking-tight">Transparency, Trust, and <br/><span className="text-blue-700">Mutual Growth</span></h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    At Docdril™, we believe in ethical partnerships. This document outlines how we protect your data, manage payments, and ensure a seamless creative workflow.
                </p>
                <div className="mt-8 text-sm font-medium text-slate-500 bg-slate-50 dark:bg-slate-900/50 inline-block px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700">
                    Last Updated: <span>{currentDate}</span>
                </div>
            </header>

        {/* 1. The Core Engagement Model */}
        <section className="group">
            <div className="flex items-start gap-5">
                <div className="p-3 rounded-lg bg-blue-50 text-blue-700 mt-1 border border-blue-100 shadow-sm">
                    <Handshake className="w-6 h-6" />
                </div>
                <div className="flex-1">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 group-hover:text-blue-700 transition-colors">1. Engagement &amp; Trust Framework</h2>
                    <div className="prose prose-slate dark:prose-invert text-sm leading-7 text-slate-600 dark:text-slate-400">
                        <p className="mb-4">
                            We prioritize speed and efficiency. While we offer formal <strong>Non-Disclosure Agreements (NDAs)</strong> and contracts for clients who require them, our standard workflow is built on mutual trust to avoid bureaucratic delays.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 marker:text-blue-700">
                            <li><strong className="text-slate-800 dark:text-slate-200">Paid Trials:</strong> All samples created are treated as "Paid Trials." These are authentic works based on your specific requirements. Once approved, we proceed to standard bulk pricing.</li>
                            <li><strong className="text-slate-800 dark:text-slate-200">Seamless Experience:</strong> Whether contract-based or trust-based, our commitment to quality and confidentiality remains absolute.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Divider */}
        <hr className="my-12 border-slate-200 dark:border-slate-700 opacity-50" />

        {/* 2. Data Privacy & Security */}
        <section className="group">
            <div className="flex items-start gap-5">
                <div className="p-3 rounded-lg bg-emerald-50 text-emerald-700 mt-1 border border-emerald-100 shadow-sm">
                    <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="flex-1">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 group-hover:text-emerald-700 transition-colors">2. Data Confidentiality &amp; Deletion</h2>
                    <div className="prose prose-slate dark:prose-invert text-sm leading-7 text-slate-600 dark:text-slate-400">
                        <p className="mb-4">
                            Your assets are safest with us. We strictly adhere to a <strong>"Zero Retention Policy"</strong> post-project.
                        </p>
                        <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg p-5 mb-4 shadow-sm">
                            <h3 className="text-slate-900 dark:text-slate-100 font-semibold text-xs uppercase tracking-wider mb-3">The Protocol</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 bg-white dark:bg-black rounded-full p-0.5 shadow-sm border border-emerald-100">
                                        <Check className="w-3 h-3 text-emerald-600" />
                                    </div>
                                    <span>Docdril™ does <strong>not</strong> store client data or assets after handover.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 bg-white dark:bg-black rounded-full p-0.5 shadow-sm border border-emerald-100">
                                        <Check className="w-3 h-3 text-emerald-600" />
                                    </div>
                                    <span>All data is permanently deleted instantly upon client confirmation of receipt.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 bg-white dark:bg-black rounded-full p-0.5 shadow-sm border border-emerald-100">
                                        <Check className="w-3 h-3 text-emerald-600" />
                                    </div>
                                    <span>We are not accountable for data usage unless explicitly conditioned for collaboration or marketing usage.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Divider */}
        <hr className="my-12 border-slate-200 dark:border-slate-700 opacity-50" />

        {/* 3. Payments & Deliverables */}
        <section className="group">
            <div className="flex items-start gap-5">
                <div className="p-3 rounded-lg bg-purple-50 text-purple-700 mt-1 border border-purple-100 shadow-sm">
                    <CreditCard className="w-6 h-6" />
                </div>
                <div className="flex-1">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 group-hover:text-purple-700 transition-colors">3. Payment &amp; Delivery Structure</h2>
                    <div className="prose prose-slate dark:prose-invert text-sm leading-7 text-slate-600 dark:text-slate-400">
                        <p className="mb-4">
                            To ensure safety for both parties, we utilize a secure watermark workflow and a clear advance structure defined by Docdril™ officials based on order characteristics.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 mb-5">
                            <div className="bg-white dark:bg-black p-5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm hover:border-purple-200 transition-colors">
                                <h4 className="text-slate-900 dark:text-slate-100 font-semibold mb-1">New Clients</h4>
                                <p className="text-slate-500">20% Advance required to commence work.</p>
                            </div>
                            <div className="bg-white dark:bg-black p-5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm hover:border-purple-200 transition-colors">
                                <h4 className="text-slate-900 dark:text-slate-100 font-semibold mb-1">Loyal Partners</h4>
                                <p className="text-slate-500">15% Advance for recurring/bulk orders.</p>
                            </div>
                        </div>
                        <p className="bg-purple-50 text-purple-900 p-4 rounded-lg text-sm border-l-4 border-purple-600">
                            <strong>The Watermark Guarantee:</strong> Drafts are delivered with a security watermark. The final, clean project files are handed over immediately once full payment is received.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Divider */}
        <hr className="my-12 border-slate-200 dark:border-slate-700 opacity-50" />

        {/* 4. Revisions: Human vs AI */}
        <section className="group">
            <div className="flex items-start gap-5">
                <div className="p-3 rounded-lg bg-orange-50 text-orange-700 mt-1 border border-orange-100 shadow-sm">
                    <Layers className="w-6 h-6" />
                </div>
                <div className="flex-1">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 group-hover:text-orange-700 transition-colors">4. Revisions &amp; Vision</h2>
                    <div className="prose prose-slate dark:prose-invert text-sm leading-7 text-slate-600 dark:text-slate-400">
                        <p className="mb-4">
                            Prices fluctuate based on the complexity and effort required. We conduct detailed <strong>Online Vision Meets</strong> before starting work to align with your goals and minimize revisions.
                        </p>
                        <ul className="space-y-3">
                            <li className="bg-white dark:bg-black p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                                <strong className="text-slate-900 dark:text-slate-100 block mb-1">Human-Edited Projects</strong>
                                We offer unlimited revisions (within reasonable scope) to perfect the creative output, provided the initial brief has not completely changed.
                            </li>
                            <li className="bg-white dark:bg-black p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                                <strong className="text-slate-900 dark:text-slate-100 block mb-1">AI-Generated Projects</strong>
                                While AI services may be cheaper initially, <strong className="text-orange-700">revisions are paid</strong>. AI regeneration incurs significant computing costs, so clients must be clear on requirements to minimize costs.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Divider */}
        <hr className="my-12 border-slate-200 dark:border-slate-700 opacity-50" />

        {/* 5. Timelines & Ethics */}
        <section className="group">
            <div className="flex items-start gap-5">
                <div className="p-3 rounded-lg bg-rose-50 text-rose-700 mt-1 border border-rose-100 shadow-sm">
                    <Clock className="w-6 h-6" />
                </div>
                <div className="flex-1">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 group-hover:text-rose-700 transition-colors">5. Timelines, Refunds &amp; Ethics</h2>
                    <div className="prose prose-slate dark:prose-invert text-sm leading-7 text-slate-600 dark:text-slate-400">
                        <p className="mb-4">
                            <strong>Order Acceptance Buffer:</strong> Upon receiving an inquiry, we take up to <strong>3 hours</strong> to confirm acceptance and feasibility. Work commences only after this confirmation.
                        </p>
                        <p className="mb-4">
                            <strong>Refund Policy:</strong> If we fail to deliver the agreed output on time, we will request a grace period. However, if the client prefers, we process a full refund. We value transparency over holding payments.
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/50 p-4 rounded border border-slate-200 dark:border-slate-700">
                            <strong>Compliance:</strong> Docdril™ strictly follows all government regulations. We do not practice or recommend unethical tactics (black-hat editing, manipulation, etc.). We are committed to clean, legal, and high-quality growth.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    
        </main>
    );
}
