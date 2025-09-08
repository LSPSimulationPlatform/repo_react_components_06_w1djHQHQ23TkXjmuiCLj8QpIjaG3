// Import custom Card component for wrapping the form
import Card from './Card'
// Import custom Button component for form actions
import Button from './Button'
// Import custom Input component for text input fields
import Input from './Input'
// Import custom SelectBox component for dropdown selection
import SelectBox from './SelectBox'
// Import custom TextArea component for multi-line text input
import TextArea from './TextArea'

// Define and export the CreateUpdateCrudExample component
export default function CreateUpdateCrudExample({
  categoryOptions, // Array of category options to display in the SelectBox
}: any) {
  return (
    <Card title={'Create New Record'}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Input
          label="Name"
          placeholder="Enter name"
          required
        />

        <SelectBox
          label="Category"
          options={categoryOptions}
          placeholder="Select a category"
          required
        />

        <TextArea
          label="Description"
          placeholder="Enter description"
          rows={4}
          maxLength={500}
          showCount
        />
      </div>
    </Card>
  )
}