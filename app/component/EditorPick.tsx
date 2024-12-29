import Image from "next/image";

const EditorsPick = () => {
  return (
    <section className="bg-[#FAFAFA] py-10 px-4 md:px-8 lg:px-16">
      <div className="text-center pt-16">
        <h2 className="text-xl mb-2 font-bold text-[#252B42] md:text-2xl">
          EDITOR&apos;S PICK
        </h2>
        <p className="text-[#737373] text-xs md:text-sm">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="py-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:px-48">
        <div className="relative col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2">
          <Image
            src="/31.png"
            alt="Men"
            layout="responsive"
            width={510}
            height={500}
            className="rounded-lg transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute bottom-6 left-7 bg-white py-3 px-16 rounded-lg shadow-md hover:bg-[#252B42] hover:text-white transition-all duration-300">
            <p className="font-bold text-[#252B42] hover:text-white">MEN</p>
          </div>
        </div>
        <div className="relative col-span-1 md:col-span-1 lg:row-span-2">
          <Image
            src="/32.png"
            alt="Women"
            layout="responsive"
            width={240}
            height={500}
            className="rounded-lg transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute bottom-6 left-7 bg-white py-3 px-8 rounded-lg shadow-md hover:bg-[#252B42] hover:text-white transition-all duration-300">
            <p className="font-bold text-[#252B42] hover:text-white">WOMEN</p>
          </div>
        </div>
        <div className="relative col-span-1 lg:row-span-1">
          <Image
            src="/33.png"
            alt="Accessories"
            layout="responsive"
            width={240}
            height={230}
            className="rounded-lg h-full transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute bottom-6 left-4 bg-white py-3 px-6 rounded-lg shadow-md hover:bg-[#252B42] hover:text-white transition-all duration-300">
            <p className="font-bold text-[#252B42] hover:text-white">ACCESSORIES</p>
          </div>
        </div>
        <div className="relative col-span-1 lg:row-span-1">
          <Image
            src="/34.png"
            alt="Kids"
            layout="responsive"
            width={240}
            height={230}
            className="rounded-lg h-full transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute bottom-6 left-4 bg-white py-3 px-10 rounded-lg shadow-md hover:bg-[#252B42] hover:text-white transition-all duration-300">
            <p className="font-bold text-[#252B42] hover:text-white">KIDS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorsPick;
