import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is your company's main service?",
    answer: "We specialize in home and office design and renovation services.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can contact customer support via phone or WhatsApp at +971554722980.",
  },
  {
    question: "Where are you located?",
    answer: "Our main office is located in Dubai, UAE.",
  },
  {
    question: "Do you offer international services?",
    answer:
      "Currently, we operate mainly within UAE, but we are looking to expand internationally soon.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the answer on and off
  };

  return (
    <div className="w-full max-w-3xl mx-auto my-8">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <span className="text-xl">{openIndex === index ? "-" : "+"}</span>
            </div>

            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
