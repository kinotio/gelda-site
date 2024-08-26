import { SupabaseLogo } from '@/components/logos/supabase-logo'
import { NeonGradientCard } from '@/components/magicui/neon-gradient-card'

export const ServerlessSection = () => {
  return (
    <section id="faq" className="mx-auto container py-24 sm:py-32">
      <div className="flex flex-col gap-4 mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Empowered by Supabase and Serverless Architecture
        </h2>

        <NeonGradientCard
          neonColors={{ firstColor: '#249361', secondColor: '#3ECF8E' }}
          className="flex items-center justify-center text-center"
        >
          <div className="grid grid-flow-row lg:grid-cols-2 gap-4 p-6 lg:p-12 items-center">
            <SupabaseLogo className="size-fit p-6 lg:p-12" />
            <span className="p-6 lg:p-12 font-semibold text-lg">
              Our app uses Supabase for real-time data management and a
              serverless architecture for seamless, scalable performance. This
              setup ensures reliability and speed without the need for managing
              servers.
            </span>
          </div>
        </NeonGradientCard>
      </div>
    </section>
  )
}
