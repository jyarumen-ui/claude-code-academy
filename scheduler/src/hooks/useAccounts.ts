import { useState, useEffect } from 'react'
import { loadAccounts, getActiveId, ACCOUNTS_CHANGED, type Account } from '../utils/accountStore'

export function useAccounts() {
  const [accounts, setAccounts] = useState<Account[]>(loadAccounts)
  const [activeId, setActiveId] = useState<string>(getActiveId)

  useEffect(() => {
    const handler = () => { setAccounts(loadAccounts()); setActiveId(getActiveId()) }
    window.addEventListener(ACCOUNTS_CHANGED, handler)
    return () => window.removeEventListener(ACCOUNTS_CHANGED, handler)
  }, [])

  return { accounts, activeId, active: accounts.find(a => a.id === activeId) ?? null }
}
