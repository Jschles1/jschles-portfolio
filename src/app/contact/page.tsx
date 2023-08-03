"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "@/components/pages/Contact/Input";
import Modal from "@/components/pages/Contact/Modal";

const REQUIRED_ERROR_MSG = "This field is required.";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: REQUIRED_ERROR_MSG })
    .max(50, { message: REQUIRED_ERROR_MSG }),
  subject: z
    .string()
    .min(2, { message: REQUIRED_ERROR_MSG })
    .max(50, { message: REQUIRED_ERROR_MSG }),
  email: z
    .string()
    .email({ message: "Please enter a valid email." })
    .min(2, { message: REQUIRED_ERROR_MSG })
    .max(50, { message: REQUIRED_ERROR_MSG }),
  message: z
    .string()
    .min(2, { message: REQUIRED_ERROR_MSG })
    .max(500, { message: REQUIRED_ERROR_MSG }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [showModal, setShowModal] = React.useState(false);
  const formRef = React.useRef<HTMLFormElement>(null);
  const { register, handleSubmit, getValues, reset } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(_: FormValues) {
    setShowModal(true);
  }

  async function sendEmail(captchaValue: string | null) {
    if (!captchaValue) {
      toast.error("Please verify you are not a robot.");
      setShowModal(false);
      return;
    }

    const data: FormValues = getValues();
    const result: EmailJSResponseStatus = await emailjs.send(
      process.env.REACT_EMAIL_JS_SERVICE_ID as string,
      process.env.REACT_EMAIL_JS_TEMPLATE_ID as string,
      {
        from_name: data.name,
        email: data.email,
        to_name: "John Schesinger",
        subject: data.subject,
        message: data.message,
        "g-recaptcha-response": captchaValue,
      },
      process.env.REACT_EMAIL_JS_PUBLIC_KEY as string
    );
    if (result.status === 200) {
      toast.success("Email sent successfully!");
      reset();
    } else {
      toast.error("Something went wrong. Please try again later.");
    }
    setShowModal(false);
  }

  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        <form
          className="p-8 md:mx-4 bg-white rounded-md shadow-md"
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="m-3">
            <h3 className="text-2xl text-gray-800 font-bold mb-6">
              Get in Touch
            </h3>
          </div>
          <div className="w-full flex flex-wrap">
            <div className="w-full md:w-1/2">
              <div className="m-3">
                <Input
                  type="text"
                  placeholder="Your Name"
                  {...register("name")}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="m-3">
                <Input
                  type="email"
                  placeholder="Your Email"
                  {...register("email")}
                />
              </div>
            </div>
            <div className="w-full">
              <div className="m-3">
                <Input
                  type="text"
                  placeholder="Subject"
                  {...register("subject")}
                />
              </div>
            </div>
            <div className="w-full">
              <div className="m-3">
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full border border-gray-100 rounded py-4 px-6 text-sm bg-white text-gray-800"
                  {...register("message")}
                />
              </div>
            </div>
            <div className="w-full">
              <div className="m-3 text-right">
                <input
                  type="submit"
                  role="button"
                  value="Send Message"
                  className="rounded bg-blue-600 text-center border-0 py-3 px-6 text-white leading-7 tracking-wide hover:bg-blue-800 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      {showModal && (
        <Modal>
          <div>
            <ReCAPTCHA
              sitekey={process.env.REACT_RECAPTCHA_SITE_KEY as string}
              onChange={sendEmail}
            />
          </div>
        </Modal>
      )}
    </section>
  );
}
