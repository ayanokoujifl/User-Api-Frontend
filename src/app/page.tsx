import { Inter } from 'next/font/google'
import '../global.css'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const response = await fetch('http://localhost:8080/users', {
    cache: 'no-store'
  })

  const users = await response.json()

  return (
    <>
      {users.map((user: any) => {
        return (
          <div className="bg-black">
            <div className="flex">
              <p>
                <strong>{user.username}</strong>
              </p>
              -<p>{user.email}</p>
            </div>
          </div>
        )
      })}
    </>
  )
}
