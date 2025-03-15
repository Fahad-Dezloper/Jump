"use client"
import React, { useState } from 'react'

const FaQs = () => {
    const faqs = [
        {
          question: "How do I join Desizn Bank as a designer?",
          answer:
            "Sign up for early access, upload your portfolio, and get verified. Once the platform launches, you'll be ready to showcase and sell your designs instantly.",
        },
        {
          question: "Are there fees for selling my designs?",
          answer: "No, Desizn Bank does not charge listing fees. However, a small commission is deducted upon successful sales.",
        },
        {
          question: "How are payments secured?",
          answer: "We use industry-standard encryption and secure payment gateways to ensure safe transactions.",
        },
        {
          question: "Can I customize a purchased design?",
          answer: "Yes! Most designs allow customization. Contact the designer for specific modifications.",
        },
        {
          question: "What if I’m not satisfied with a purchase?",
          answer: "We offer refunds under certain conditions. Please check our refund policy for details.",
        },
        {
          question: "Is my personal data safe?",
          answer: "Yes, we prioritize user privacy and comply with GDPR and other data protection regulations.",
        },
      ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
  return (
    <section className="py-12 px-6 max-w-3xl mx-auto font-primary">
      {/* Heading */}
      <h2 className="text-3xl font-medium text-center font-primary">
        Have Any Questions?
      </h2>
      <p className="text-[#707070] text-center mt-2 font-primary">
        Find answers to common queries and get the support you need to make the most of our platform.
      </p>

      {/* FAQ Items */}
      <div className="mt-8 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
              openIndex === index
                ? "border-[#50D669]"
                : "border-[#50D669]"
            }`}
            onClick={() => toggleFAQ(index)}
          >
            {/* Question */}
            <h3
              className={`text-lg font-medium font-primary ${
                openIndex === index ? "text-[#00443B]" : "text-black"
              }`}
            >
              {faq.question}
            </h3>

            {/* Answer (Only visible if open) */}
            {openIndex === index && (
              <p className="text-[#707070] mt-2 font-primary">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default FaQs