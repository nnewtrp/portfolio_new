export default function Home() {
  return (
    <>
      <div className="h-screen bg-white">
        {/* Top Bar */}
        <div className="bg-black text-white text-2xl px-5 py-3">New</div>

        {/* Content */}
        <div className="flex flex-row text-2xl px-36 py-16">
          {/* Text */}
          <div className="basis-5/6">
            <h1 className="text-black font-bold text-8xl mt-4">
              Teerapat Satitporn
            </h1>
            <h2 className="text-neutral-600 overline font-bold text-4xl mt-8">
              Web Developer
            </h2>

            <p className="text-neutral-700 text-2xl font-medium mt-20">
              Welcome to my digital domain, where the art of software development takes center stage,
              seamlessly blending functionality, aesthetics, and flawless user experiences.
            </p>

            <button className="bg-white hover:bg-sky-500 border-4 border-sky-500 text-sky-500 hover:text-white text-2xl font-bold rounded rounded-lg h-[60px] w-[200px] mt-28">
              {"See More >>"}
            </button>
          </div>

          {/* Menu Bar */}
          <div className="basis-1/6">
            <div className="flex flex-row justify-end">
              <div className="flex flex-col mt-16">
                <button className="bg-black border-[5px] border-black rounded rounded-full h-[40px] w-[40px]" />
                <div className="bg-black h-12 w-2 mx-4" />

                <button className="bg-white hover:bg-neutral-300 border-[5px] border-black rounded rounded-full h-[40px] w-[40px]" />
                <div className="bg-black h-12 w-2 mx-4" />

                <button className="bg-white hover:bg-neutral-300 border-[5px] border-black rounded rounded-full h-[40px] w-[40px]" />
                <div className="bg-black h-12 w-2 mx-4" />

                <button className="bg-white hover:bg-neutral-300 border-[5px] border-black rounded rounded-full h-[40px] w-[40px]" />
                <div className="bg-black h-12 w-2 mx-4" />

                <button className="bg-white hover:bg-neutral-300 border-[5px] border-black rounded rounded-full h-[40px] w-[40px]" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
