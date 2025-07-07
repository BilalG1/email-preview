import { Container, Head, Html, Tailwind } from '@react-email/components'

export default function LightTheme({ children }: { children: React.ReactNode }) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Container>{children}</Container>
      </Tailwind>
    </Html>
  )
}