export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-200 p-24">
      <div className="grid grid-cols-6 gap-y-3 gap-x-2 w-2/6">
        <div className="border-2 bg-white border-gray-600 col-span-6 py-20 text-lg font-extrabold text-center">
          The Never Bitcoin Pledge
        </div>
        <div className="py-2 border-2 bg-white border-gray-600 text-center col-span-6 font-semibold cursor-pointer hover:bg-gray-100">
          Sign now
        </div>
        <div className="py-2 border-2 bg-white border-gray-600 text-center col-span-3 font-semibold cursor-pointer hover:bg-gray-100">
          Share
        </div>
        <div className="py-2 border-2 bg-white border-gray-600 text-center col-span-3 font-semibold cursor-pointer hover:bg-gray-100">
          Learn more
        </div>
      </div>
    </main>
  )
}
