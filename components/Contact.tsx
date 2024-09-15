import React from "react";
import { Playfair_Display } from "next/font/google";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { sendEmail } from "@/actions/sendEmail";
import Image from "next/image";
import ChirsSnow from "@/public/images/chris-snow.png";

const play = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Contact = () => {
  const spanClass = `${play.className} text-base xl:text-center`;

  const { pending } = useFormStatus();

  return (
    <div className=" mb-96 flex flex-col p-4 relative mt-24">
      <h1 className="text-[#bfea88] text-center text-[14vw] md:text-[16vw] !leading-[0.8]">
        LET'S COLLABORATE
      </h1>

      <div className="flex flex-col lg:flex-row justify-between">
        <form
          className="mt-10 flex flex-col dark:text-black space-y-7 w-[50%] p-16 justify-center "
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);
          }}
        >
          <div className="mb-7">
            <h1 className="text-[#bfea88] text-center text-[3vw] !leading-[0.9]">
              What are you waiting for? <br /> Let's do this.
            </h1>
          </div>
          <input
            className="h-14  transition-all bg-green-800 text-4xl placeholder:text-[#bfea88] text-[#bfea88] focus:outline-none border-b-2 focus:border-2 border-[#bfea88] p-2"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />
          <textarea
            className="transition-all bg-green-800 text-4xl placeholder:text-[#bfea88] text-[#bfea88] focus:outline-none border-b-2 focus:border-2 border-[#bfea88] h-48 p-2"
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
          />
          <button
            type="submit"
            className="group flex items-center justify-center gap-2 bg-[#bfea88] text-green-800 hover:text-[#bfea88] text-4xl p-3 focus:outline-none hover:bg-green-800 transition duration-300 border-2 border-[#bfea88]"
            disabled={pending}
          >
            {pending ? (
              <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
            ) : (
              <>Send it</>
            )}
          </button>
        </form>
        <div className="w-[50%] p-16">
          <Image src={ChirsSnow} alt="Chris in snow" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
