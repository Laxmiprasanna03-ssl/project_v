import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container">
    <h1>🚀 My First Website</h1>
    <h2>By Prasanna</h2>
    <p>Successfully deployed on Vercel 🎉</p>

    <button id="counter" class="btn">Click Me</button>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)