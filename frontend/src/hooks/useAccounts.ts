import { useState, useEffect } from 'react'
import {
  loadAccounts, getActiveAccountId,
  ACCOUNTS_CHANGED_EVENT, type XAccount,
} from '../utils/accountStore'

export interface AccountsState {
  accounts: XAccount[]
  activeId: string
  activeAccount: XAccount | null
}

/** アカウント変更を全コンポーネントにリアクティブに伝えるフック */
export function useAccounts(): AccountsState {
  const [accounts, setAccounts] = useState<XAccount[]>(loadAccounts)
  const [activeId, setActiveId] = useState<string>(getActiveAccountId)

  useEffect(() => {
    const handler = () => {
      setAccounts(loadAccounts())
      setActiveId(getActiveAccountId())
    }
    window.addEventListener(ACCOUNTS_CHANGED_EVENT, handler)
    return () => window.removeEventListener(ACCOUNTS_CHANGED_EVENT, handler)
  }, [])

  return {
    accounts,
    activeId,
    activeAccount: accounts.find(a => a.id === activeId) ?? null,
  }
}
