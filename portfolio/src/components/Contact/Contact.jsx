import React from "react";

const Contact = () => {
  return (
    <div className="mx-20 my-20 p-12">
      <div>
        <h2 className="pt-2.5">Get in Touch</h2>
        <p className="pt-2.5 text-sm">
          Let's Collaborate and Create Something Amazing Together
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="mt-5 contact_form">
          <form
            action="https://formspree.io/f/xzbnnrlk"
            method="POST"
            className="flex flex-col"
          >
            <input
              type="name"
              name="name"
              placeholder="Your Name"
              className="w-60 md:w-96 p-1 text-base cursor-pointer"
              required
            />
            <br />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-60 md:w-96 p-1 text-base cursor-pointer"
              required
            />
            <br />
            <input
              type="phone"
              name="phone"
              placeholder="Your Phone"
              className="w-60 md:w-96 p-1 text-base cursor-pointer"
              required
            />
            <br />
            <textarea
              name="message"
              placeholder="Your Message"
              className="h-24 w-60 md:w-96 p-1 text-base"
              required
            ></textarea>
            <br />

            <button
              type="submit"
              className="bg-[#F25836] text-[#F0F0F0] w-48 py-3.5 px-8 
                 text-lg border-solid border-2 border-custom-[#333] rounded-lg font-bold cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="relative w-full h-96">
          <iframe
            title="Map of Sylhet A Block"
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1809.6187648034277!2d91.89127118855666!3d24.88987822756073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751ab4afc87ed91%3A0xdf7baeec18880ec0!2sA%20Block%2C%20Sylhet!5e0!3m2!1sen!2sbd!4v1720101187268!5m2!1sen!2sbd"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
