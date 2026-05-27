import { DayPicker, getDefaultClassNames } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

const Calendar = ({
  selected,
  onSelect
}: {
  selected?: string
  onSelect: (date?: Date) => void
}) => {
  const handleSelect = (date: Date | undefined) => onSelect(date)
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      mode="single"
      selected={selected ? new Date(selected) : undefined}
      onSelect={handleSelect}
      showOutsideDays
      classNames={{
        button_next: `text-purple`,
        button_previous: `text-purple`,
        today: `text-purple`,
        selected: `bg-[#9875CB] rounded-full text-purple`,
        chevron: `rdp-chevron text-purple-line !fill-current`,
        root: `${defaultClassNames.root} px-4`
      }}
    />
  )
}

export default Calendar
