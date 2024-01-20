// at least one phote with me
//

export default function Collage() {
  return (
    <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
      <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-first lg:pt-48 xl:order-none xl:pt-52">
        <div className="relative">
          <img
            src="https://res.cloudinary.com/dooa4lvvv/image/upload/v1705639839/Portfolio/headsot_kn1l5x.png"
            alt=""
            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
          />
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
        </div>
      </div>
      <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-16">
        <div className="relative">
          <img
            src="https://res.cloudinary.com/dooa4lvvv/image/upload/v1705644283/Portfolio/Do_what_you_love_bcteat.png"
            alt=""
            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
          />
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
        </div>
        <div className="relative">
          <img
            src="https://res.cloudinary.com/dooa4lvvv/image/upload/v1705640942/Portfolio/Untitled_design_n1wbld.png"
            alt=""
            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
          />
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
        </div>
      </div>
    </div>
  );
}
