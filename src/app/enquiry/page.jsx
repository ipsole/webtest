"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Send, AlertCircle, CheckCircle, User, Mail, Phone, MessageCircle, Briefcase, ChevronDown, Loader2, Check } from 'lucide-react';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';

export default function Enquiry() {
    useRevealOnScroll();
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        whatsapp: '',
        serviceType: '',
        otherService: '',
        message: ''
    });
    
    const [sameAsPhone, setSameAsPhone] = useState(false);
    const [formStatus, setFormStatus] = useState('idle'); // 'idle', 'loading', 'success'
    const [alertMsg, setAlertMsg] = useState('');
    
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyKzou2UMGgqt_5d1v9TsiZ_SAPjflaYyKefS6g4QN6Sw9uvWQdsQdCaAmHejq7kcuJ/exec";

    useEffect(() => {
        if (sameAsPhone) {
            setFormData(prev => ({ ...prev, whatsapp: prev.phone }));
        }
    }, [formData.phone, sameAsPhone]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setAlertMsg(''); // hide alert on input
    };

    const checkRateLimit = () => {
        const now = Date.now();
        let submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
        submissions = submissions.filter(time => now - time < 60000);
        if (submissions.length >= 3) return false;
        submissions.push(now);
        localStorage.setItem('formSubmissions', JSON.stringify(submissions));
        return true;
    };

    const validateForm = () => {
        if (!formData.name.trim()) return "Full Name is required.";
        if (!formData.email.trim() && !formData.phone.trim()) return "Please provide either an Email Address or a Phone Number.";
        if (!formData.serviceType) return "Please select a Service Type.";
        if (formData.serviceType === 'Other' && !formData.otherService.trim()) return "Please specify the 'Other' service type.";
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const error = validateForm();
        if (error) {
            setAlertMsg(error);
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        if (!checkRateLimit()) {
            setAlertMsg("Too many requests. Please wait a minute before submitting again.");
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        setFormStatus('loading');
        setAlertMsg('');

        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "text/plain",
                },
                body: JSON.stringify(formData)
            });

            setFormStatus('success');
            setFormData({
                name: '', email: '', phone: '', whatsapp: '', serviceType: '', otherService: '', message: ''
            });
            setSameAsPhone(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (err) {
            setAlertMsg("Failed to submit request. Please try again.");
            setFormStatus('idle');
        }
    };

    return (
        <main className="min-h-screen bg-transparent text-gray-900 dark:text-gray-100 flex flex-col items-center justify-center p-4 md:p-8 pt-32 md:pt-40 pb-20">
            <div className="max-w-2xl w-full space-y-10 mt-8 md:mt-12">
                {formStatus !== 'success' ? (
                    <div className="space-y-10 transition-all duration-300 fade-in">
                        <div className="text-center space-y-3">
                            <h1 className="text-4xl font-black tracking-tight">Project Inquiry.</h1>
                            <p className="text-gray-500 font-medium text-lg">Fill out the details below to request a service.</p>
                        </div>

                        <div className="bg-white dark:bg-zinc-900/50 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgba(255,255,255,0.02)] border border-gray-200 dark:border-gray-800 p-8 md:p-10 backdrop-blur-sm">
                            <div className="flex items-center space-x-3 mb-8 pb-5 border-b border-gray-200 dark:border-gray-800">
                                <div className="p-2.5 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 rounded-lg shadow-sm">
                                    <Send className="w-5 h-5" />
                                </div>
                                <h2 className="text-xl font-bold tracking-tight">Submit Details</h2>
                            </div>

                            {alertMsg && (
                                <div className="mb-8 p-4 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900 text-red-700 dark:text-red-400 rounded-xl text-sm flex items-start space-x-3 transition-all">
                                    <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                    <span className="font-medium">{alertMsg}</span>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2.5">
                                    <label htmlFor="name" className="text-sm font-bold block">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                                            <User className="w-4 h-4" />
                                        </div>
                                        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange}
                                            className="block w-full pl-10 pr-4 py-3 bg-white dark:bg-black border border-gray-200 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-black dark:focus:border-white transition-all text-sm outline-none placeholder:text-gray-400 font-medium"
                                            placeholder="e.g. John Doe" />
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">Contact Info (Fill at least one <span className="text-red-500">*</span>)</p>
                                </div>

                                <div className="space-y-2.5">
                                    <label htmlFor="email" className="text-sm font-bold block">Email Address</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                                            <Mail className="w-4 h-4" />
                                        </div>
                                        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange}
                                            className="block w-full pl-10 pr-4 py-3 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-black dark:focus:ring-white transition-all text-sm outline-none placeholder:text-gray-400 font-medium"
                                            placeholder="e.g. hello@example.com" />
                                    </div>
                                </div>

                                <div className="space-y-2.5">
                                    <label htmlFor="phone" className="text-sm font-bold block">Phone Number</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                                            <Phone className="w-4 h-4" />
                                        </div>
                                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange}
                                            className="block w-full pl-10 pr-4 py-3 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-black dark:focus:ring-white transition-all text-sm outline-none placeholder:text-gray-400 font-medium"
                                            placeholder="+1 (555) 000-0000" />
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3 pt-2 pb-2">
                                    <input type="checkbox" id="sameAsPhone" checked={sameAsPhone} onChange={(e) => setSameAsPhone(e.target.checked)}
                                        className="w-4 h-4 text-black dark:text-white bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 rounded focus:ring-black dark:focus:ring-white cursor-pointer transition-colors accent-black dark:accent-white" />
                                    <label htmlFor="sameAsPhone" className="text-sm font-medium text-gray-600 dark:text-gray-400 cursor-pointer select-none">
                                        WhatsApp is same as Phone Number
                                    </label>
                                </div>

                                <div className="space-y-2.5">
                                    <label htmlFor="whatsapp" className={`text-sm font-bold block transition-colors ${sameAsPhone ? 'text-gray-400 dark:text-gray-600 dark:text-gray-400' : ''}`}>WhatsApp Number</label>
                                    <div className="relative">
                                        <div className={`absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-colors ${sameAsPhone ? 'text-gray-300 dark:text-gray-700 dark:text-gray-300' : 'text-gray-400'}`}>
                                            <MessageCircle className="w-4 h-4" />
                                        </div>
                                        <input type="tel" id="whatsapp" name="whatsapp" value={formData.whatsapp} onChange={handleInputChange} disabled={sameAsPhone}
                                            className="block w-full pl-10 pr-4 py-3 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-black dark:focus:ring-white transition-all text-sm outline-none placeholder:text-gray-400 font-medium disabled:bg-gray-50 dark:bg-black/50 dark:disabled:bg-gray-800 disabled:opacity-60 disabled:cursor-not-allowed"
                                            placeholder="+1 (555) 000-0000" />
                                    </div>
                                </div>

                                <div className="pt-6 pb-2">
                                    <div className="h-px w-full bg-gray-200 dark:bg-gray-800"></div>
                                </div>

                                <div className="space-y-2.5">
                                    <label htmlFor="serviceType" className="text-sm font-bold block">
                                        Type of Service <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                                            <Briefcase className="w-4 h-4" />
                                        </div>
                                        <select id="serviceType" name="serviceType" value={formData.serviceType} onChange={handleInputChange}
                                            className="block w-full pl-10 pr-10 py-3 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-black dark:focus:ring-white transition-all text-sm outline-none font-medium appearance-none cursor-pointer">
                                            <option value="" disabled>Select a service...</option>
                                            <option value="Web design">Web design</option>
                                            <option value="Video edit">Video edit</option>
                                            <option value="Motion design">Motion design</option>
                                            <option value="Graphic design">Graphic design</option>
                                            <option value="AI automation">AI automation</option>
                                            <option value="Song making">Song making</option>
                                            <option value="Script writing">Script writing</option>
                                            <option value="Social media handling">Social media handling</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                                            <ChevronDown className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>

                                {formData.serviceType === 'Other' && (
                                    <div className="space-y-2.5 transition-all duration-300 opacity-100 translate-y-0">
                                        <label htmlFor="otherService" className="text-sm font-bold block">
                                            Please Specify Service <span className="text-red-500">*</span>
                                        </label>
                                        <input type="text" id="otherService" name="otherService" value={formData.otherService} onChange={handleInputChange}
                                            className="block w-full px-4 py-3 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-black dark:focus:ring-white transition-all text-sm outline-none placeholder:text-gray-400 font-medium"
                                            placeholder="e.g. 3D Animation" />
                                    </div>
                                )}

                                <div className="space-y-2.5">
                                    <label htmlFor="message" className="text-sm font-bold block">Additional Message <span className="text-gray-400 font-medium">(Optional)</span></label>
                                    <div className="relative">
                                        <div className="absolute top-3.5 left-3.5 pointer-events-none text-gray-400">
                                            <MessageCircle className="w-4 h-4" />
                                        </div>
                                        <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} rows="4"
                                            className="block w-full pl-10 pr-4 py-3 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-black dark:focus:ring-white transition-all text-sm outline-none placeholder:text-gray-400 font-medium resize-none"
                                            placeholder="Tell us more about your project requirements..."></textarea>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <button type="submit" disabled={formStatus === 'loading'}
                                        className="w-full flex justify-center items-center py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-black hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all shadow-lg shadow-black/10 disabled:opacity-70 disabled:cursor-not-allowed">
                                        {formStatus === 'loading' ? (
                                            <span className="flex items-center space-x-2">
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                                <span>Processing...</span>
                                            </span>
                                        ) : (
                                            <span className="flex items-center space-x-2">
                                                <Send className="w-4 h-4" />
                                                <span>Submit Request</span>
                                            </span>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white dark:bg-black rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-200 dark:border-gray-800 p-10 text-center fade-in">
                        <div className="mx-auto w-16 h-16 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-6">
                            <Check className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-black tracking-tight mb-3">Request Submitted.</h2>
                        <p className="text-gray-500 font-medium mb-10">Thank you! We've successfully received your details and our team will get back to you shortly.</p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/" className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold text-black dark:text-white bg-white dark:bg-black border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:bg-black/50 dark:hover:bg-gray-900 transition-all shadow-sm">
                                Back to Home
                            </Link>
                            <button onClick={() => setFormStatus('idle')} className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-black hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 focus:outline-none transition-all shadow-lg shadow-black/10">
                                Submit Another
                            </button>
                        </div>
                    </div>
                )}
                
                <div className="text-center pb-8">
                    <p className="text-xs font-medium text-gray-400">Secured &amp; Encrypted submission.</p>
                </div>
            </div>
        </main>
    );
}
