import React, { PropsWithChildren } from 'react'
import { IntlProvider } from 'react-intl'

type Props = {
  lang: 'en' | 'es' | 'fr' | 'de'
}

export const Intl: React.FunctionComponent<PropsWithChildren<Props>> = (props) => {
  const { lang, children } = props
  return (
    <IntlProvider messages={require(`../lang/${lang}.json`)} locale={lang} defaultLocale={lang}>
      {children}
    </IntlProvider>
  )
}
