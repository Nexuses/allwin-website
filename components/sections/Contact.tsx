import Icon from "../Icon";
import ContactForm from "./ContactForm";

const contactDetails = [
  { icon: "location_on", title: "Address", value: "Business Bay, Dubai, UAE" },
  { icon: "mail", title: "Email", value: "contact@allwinfinances.com" },
  { icon: "phone", title: "Phone", value: "+971-58-5666955" },
];

export default function Contact() {
  return (
    <section className="w-full py-20 lg:py-28 bg-[#F8F9FA]" id="contact">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
            {contactDetails.map((detail) => (
              <div key={detail.title} className="group flex items-start gap-4">
                <div className="icon-chip w-12 h-12 rounded-xl bg-[#E8F8F5] flex items-center justify-center text-[#55BBB0] shrink-0">
                  <Icon name={detail.icon} className="text-[24px]" />
                </div>
                <div>
                  <h4 className="font-manrope text-base font-bold text-[#212529]">
                    {detail.title}
                  </h4>
                  <p className="font-inter text-sm text-gray-600">
                    {detail.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#E9ECEF] shadow-xs">
            <h3 className="font-manrope text-2xl font-bold text-[#212529] mb-6">
              Get In Touch
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
