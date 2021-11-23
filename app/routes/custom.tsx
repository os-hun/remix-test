import type { MetaFunction } from 'remix'

export let meta: MetaFunction = () => {
  return {
    title: 'Custom Root'
  }
}

export default function Custom() {
  return (
    <div>
      <h1>Custom</h1>
      <p>custom root.</p>
    </div>
  )
}
