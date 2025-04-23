export function useTranslation() {
  // This is a simple placeholder for a real translation system
  // In a real app, you would use a proper i18n library

  const translate = (key: string): string => {
    const translations: Record<string, string> = {
      Ethanolamines: "Этаноламины",
      Surfactants: "ПАВы",
      Acids: "Кислоты",
      Alkalis: "Щелочи",
      Glycols: "Гликоли",
      Polymers: "Полимеры",
    }

    return translations[key] || key
  }

  return { translate }
}
