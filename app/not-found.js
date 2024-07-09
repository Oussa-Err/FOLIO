import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='text-center h-[50dvh]'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className='underline'>Return Home</Link>
    </div>
  )
}