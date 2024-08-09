import React from 'react'
import Link from "next/link"
 
export default function Page() {
  return(
  <div className="bg-slate-500 flex gap-10 px-10 " > <Link href="/homepage">Homepage</Link>

  <Link href="/namepage">Namepage</Link>
  
  </div>
  
  )
  
}
