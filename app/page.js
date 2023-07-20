
export default function Home() {
  return (
    <main className="mx-40 min-h-500">
      <div className="font-bold underline">
        Hello! This is my website.
      </div>
      <ProfileCard/>

    </main>
  )
}

export function ProfileImage() {
  return (
    <img className="w-1/6 rounded-full" src="/ryo.jpg"></img>
  )
}

export function ProfileCard() {
  return (
    <div className=" content-center flex w-full h-full justify-center bg-gradient-to-r from-orange-500 to-violet-500">
      <ProfileImage/>
      <p className="w-1/4">jabbajohnny</p>
    </div>
  )
}