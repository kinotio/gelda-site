'use client'

import { ChevronRight, Github } from 'lucide-react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNightBright } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import { Button } from '@/components/ui/button'
import { BorderBeam } from '@/components/magicui/border-beam'
import BlurFade from '@/components/magicui/blur-fade'

import Ripple from '@/components/magicui/ripple'

export const HeroSection = () => {
  return (
    <section className="w-full relative flex-col items-center justify-center">
      <div className="container relative z-10 grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-28">
        <div className="space-y-8">
          <BlurFade delay={0.1}>
            <div className="mx-auto text-center text-7xl md:text-9xl font-bold">
              <h1>Self-hosted helpdesk assistant</h1>
            </div>
          </BlurFade>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <BlurFade delay={0.2}>
              <CodeBlock />
            </BlurFade>

            <BlurFade delay={0.3}>
              <div className="mt-6 gap-2 flex justify-center">
                <Button
                  className="w-5/6 md:w-1/4 font-bold group/arrow"
                  onClick={() => {
                    window.open('/docs', '_blank')
                  }}
                >
                  Documentation
                  <ChevronRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
                </Button>
                <Button
                  className="w-5/6 md:w-1/4 font-bold group/arrow"
                  variant="outline"
                  onClick={() => {
                    window.open('https://github.com/kinotio/gelda', '_blank')
                  }}
                >
                  <Github className="size-5 mr-2" />
                  Github
                  <ChevronRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
                </Button>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>

      <div>
        <Ripple mainCircleSize={200} />
      </div>
    </section>
  )
}

const CodeBlock = () => {
  const cmd = `docker pull ghcr.io/kinotio/gelda:latest

docker run --name kinotio_gelda -p 3000:3000 -d ghcr.io/kinotio/gelda:latest`

  return (
    <div className="mx-auto max-w-4xl relative p-4 bg-black rounded-lg mt-4 border border-secondary">
      <SyntaxHighlighter
        language="bash"
        style={tomorrowNightBright}
        wrapLongLines
      >
        {cmd}
      </SyntaxHighlighter>
      <BorderBeam colorFrom="#fff" colorTo="#fff" />
    </div>
  )
}

export default CodeBlock
