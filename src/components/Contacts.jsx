import React from "react";

function Contacts() {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl py-4 font-bold text-center text-[#001b5e]">
        Contacts
      </h1>
      <form action="https://getform.io/f/ba0d700c-2ade-45ac-8b59-4eac4b2de95f" method="POST" encType="multipart/form-data">
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label htmlFor="name" className="uppercase text-sm py-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="border-2 rounded-lg py-3 flex bordeer-gray-300"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="uppercase text-sm py-2">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="border-2 rounded-lg py-3 flex border-gray-300"
            />
          </div>
        </div>

        <div className="flex flex-col py-2">
          <label htmlFor="email" className="uppercase text-sm py-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border-2 rounded-lg py-3 flex border-gray-300"
          />
        </div>
        <div className="flex flex-col py-2">
          <label htmlFor="subject" className="uppercase text-sm py-2">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            className="border-2 rounded-lg py-3 flex border-gray-300"
          />
        </div>
        <div className="flex flex-col py-2">
          <label htmlFor="message" className="uppercase text-sm py-2">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            className="border-2 border-gray-300 py-3"
          ></textarea>

            <button className="bg-[#001b5e] text-gray-100 py-3 mt-4 rounded-lg">
                Send Message
            </button>
            
        </div>
      </form>
    </div>
  );
}

export default Contacts;
