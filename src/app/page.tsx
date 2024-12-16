export default function Home() {
  return (
    <div className="max-w-screen-md mx-auto py-20">
      <div className="grid grid-cols-4 grid-rows-4 gap-2">
        <div className="col-span-4 row-span-1 sm:col-span-1 sm:row-span-4 bg-yellow-400  p-4">
          Nav
        </div>
        <div className="col-span-4 sm:col-span-3 row-span-1 bg-yellow-400 p-4">
          Header
        </div>
        <div className="col-span-4 row-span-1 sm:col-span-2 sm:row-span-2 bg-yellow-400 p-4">
          Article
        </div>
        <div className="col-span-4 row-span-1 sm:col-span-1 sm:row-span-2 bg-yellow-400 p-4">
          Ads
        </div>
        <div className="col-span-4 sm:col-span-3 row-span-1 bg-yellow-400 p-4">
          Footer
        </div>
      </div>
    </div>
  );
}
