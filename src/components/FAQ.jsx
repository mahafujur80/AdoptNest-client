'use client';

import { Accordion } from "@heroui/react";
import { FaChevronDown } from "react-icons/fa";

const faqItems = [
    {
        title: "How does pet adoption work?",
        content: "Browse pets → Send request → Get approval → Adopt your new friend.",
    },
    {
        title: "Is login required to adopt a pet?",
        content: "Yes, you must login first. You can register with email or use Google login.",
    },
    {
        title: "Can I add my own pet for adoption?",
        content: "Yes! Go to dashboard → Add Pet → Fill details → Submit listing.",
    },
    {
        title: "How long does it take to get a response?",
        content: "Most owners respond within 24-48 hours. Check 'My Requests' for status updates.",
    },
    {
        title: "Can I cancel my adoption request?",
        content: "Yes, cancel anytime from 'My Requests' dashboard while request is pending.",
    },
    {
        title: "What happens after my request is approved?",
        content: "Schedule meetup, complete paperwork, pay fee, and take your pet home.",
    },
];

const FAQ = () => {
    return (
        <section className="py-10 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <div className="text-center mb-8">
                    <div className="inline-block mb-3 px-4 py-1  bg-emerald-100 text-emerald-600 rounded-full text-sm font-semibold">
                        FAQ
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Quick answers to common questions
                    </p>
                </div>

                {/* Accordion */}
                <Accordion variant="splitted">
                    {faqItems.map((item, index) => (
                        <Accordion.Item key={index} value={index.toString()}>
                            <Accordion.Heading>
                                <Accordion.Trigger className="flex items-center justify-between w-full px-4 py-3">
                                    <span className="text-lg font-medium text-gray-800">
                                        {item.title}
                                    </span>
                                    <Accordion.Indicator>
                                        <FaChevronDown size={14} />
                                    </Accordion.Indicator>
                                </Accordion.Trigger>
                            </Accordion.Heading>
                            <Accordion.Panel>
                                <Accordion.Body className="text-gray-600 text-sm px-4 pb-3">
                                    {item.content}
                                </Accordion.Body>
                            </Accordion.Panel>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default FAQ;