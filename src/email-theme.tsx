import { Container, Head, Html, Tailwind } from '@react-email/components'

export function EmailTheme({ children }: { children: React.ReactNode }) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Container>{children}</Container>
      </Tailwind>
    </Html>
  )
}