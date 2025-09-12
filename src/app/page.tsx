
import Hero from '@/components/Hero'

export default function Home() {
  // This is the home page, but we're treating /nicknames as the default active page
  return (
    <Hero
      title="Удобный, Практичный,"
      titleSecondLine="Единственный."
      subtitle="Ваша уникальность теперь имеет цену, и каждый актив в Skyton подтверждает, что она выше, чем просто символы на экране."
      showSubtitle={true}
      showButton={true}
      buttonText="Начать после авторизации"
    />
  )
}
