import FontVars from '@/styles/fonts/font-vars'
import SizeVars from '@/styles/sizes/size-vars'
import '@/styles/reset.css'
import '@/styles/colors.css'
import '@/styles/app.css'

export default function Css({ children }: { children: React.ReactNode }) {
  return (
    <FontVars>
      <SizeVars>{children}</SizeVars>
    </FontVars>
  )
}
