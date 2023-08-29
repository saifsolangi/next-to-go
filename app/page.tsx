
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (

    <div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="bg-red-100">
          Booking
        </div>
        <div className="bg-blue-100 col-span-2">
          map
        </div>
      </div>

    </div>
  )
}
