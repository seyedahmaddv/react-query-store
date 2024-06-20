import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const client: QueryClient = new QueryClient({
  // تنظیمات مربوط به QueryClient را اینجا وارد کنید
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode> 
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
