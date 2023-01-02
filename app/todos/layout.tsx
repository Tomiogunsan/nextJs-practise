import React, { Suspense } from 'react'
import Loading from './loading'
import Todos from './page'

export default function layout() {
  return (
    <div>
        <Suspense fallback={<Loading/>}>
        <Todos />
        </Suspense>
    </div>
  )
}
