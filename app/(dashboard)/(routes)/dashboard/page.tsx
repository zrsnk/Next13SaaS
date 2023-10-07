import { UserButton } from '@clerk/nextjs'

export default function DashboardPage() {
  return (
    <div>
      <div>dashboard page (Protected)</div>
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}
