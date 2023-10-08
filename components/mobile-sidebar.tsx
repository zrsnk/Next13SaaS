'use client'

import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { useEffect, useState } from 'react'
import Sidebar from './siderbar'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

export default function MobileSidebar() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}
