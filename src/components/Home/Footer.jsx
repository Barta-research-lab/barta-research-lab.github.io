
const Footer = () => {

  return (
    <section className="p-6 lg:p-8 bg-blue-primary">
      <div className="flex justify-between">
        <div>
          <h2 className="font-nunito text-xl font-bold text-[#CAFEE7]">
            HTTP: The Complete Journey from Beginning to End
          </h2>
          <p className="text-md font-light text-gray-200 mt-2">
            This documentation is created by Members of Cefalo Bangladesh
          </p>
          <div className="h-[1px] w-[500px] bg-white mt-6"></div>
          <img src="/logo/barta.png" alt="BARTA Logo"
            className="mt-8 w-30"
          />
        </div>
        <div className="text-end">
          <h2 className="font-nunito text-xl text-[#CAFEE7] font-bold">References</h2>
          <span className="text-gray-200 text-md">
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP">MDN Docs</a>
          </span>
        </div>
      </div>
      <p className="flex justify-end text-[#CAFEE7] font-thin">
          © 2025 Cefalo Bangladesh LTD.
        </p>
    </section>
  );
};

export default Footer;