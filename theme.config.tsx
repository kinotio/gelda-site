import Link from 'next/link'
import { DocsThemeConfig } from 'nextra-theme-docs'

import { GeldaLogo } from '@/components/logos/gelda-logo'

import { getCurrentYear } from '@/lib/utils'

import { DATA } from '@/data'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: `%s - ${DATA.name}`,
    }
  },
  darkMode: true,
  banner: {
    key: '0.1.5-release',
    text: <span>🎉 Gelda v0.1.0 is released. Read more →</span>,
  },
  logo: function Logo() {
    return <GeldaLogo width={100} height={100} />
  },
  project: {
    link: DATA.repo,
  },
  chat: {
    link: DATA.social_url.discord,
  },
  docsRepositoryBase: DATA.doc_repo,
  footer: {
    text: (
      <span>
        {`Copyright © ${getCurrentYear()} Developed by `}
        <Link href={'https://kinotio.io'} target={'_blank'}>
          Kinotio
        </Link>
        . All rights reserved.
      </span>
    ),
  },
}

export default config
