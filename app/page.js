
export default function Home() {
  return (
    <main className="mx-40 min-h-screen flex flex-wrap">
      <div className="font-bold underline absolute">
        Hello! This is my website.
      </div>
      <ProfileCard/>
    </main>
  )
}

export function ProfileImage() {
  return (
    <img className="w-80 h-80 rounded-full flex-shrink-0 m-2 " src="/ryo.jpg"></img>
  )
}

export function ProfileCard() {
  return (
    <div className=" m-auto content-center flex w-3/5 h-96 justify-left bg-gradient-to-r from-orange-500 to-violet-500">
      <ProfileImage/>
      <p className="w-1/4 h-1/4 flex-shrink-0  w-1/2 h-1/3 text-4xl text-center mt-4">jabbajohnny</p>
    </div>
  )
}