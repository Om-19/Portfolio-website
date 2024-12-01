import ArrowUp from "@/assets/icons/arrow-up-right.svg"
import grainImage from "@/assets/images/grain.jpg"

export const ContactSection = () => {
  return (
    <div id="contact" className="py-6 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center relative overflow-hidden z-0 md:text-left">
          <div
            className="absolute inset-0 opacity-0 -z-10"
            style={{
              backgroundImage:`url(${grainImage})`, 
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="">
              <h2 className="font-serif text-2xl md:text-3xl">Let's create something amazing</h2>
              <p className="text-sm md:text-base mt-2">Ready to bring yournext project to Life? Let's connect and discuss
                how I can help you achieve your goals.
              </p>
            </div>
            <div>
              <button className="text-white bg-gray-900 w-max border border-gray-950 inline-flex items-center px-6 h-12 rounded-xl gap-2">
                <span className="font-semibold">Contact Me</span>
                <ArrowUp className="size-4" />
              </button> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
