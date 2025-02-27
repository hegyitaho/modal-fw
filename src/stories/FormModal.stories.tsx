import type { Meta, StoryObj } from '@storybook/react'
import { ModalProvider } from '../Modal/ModalProvider'
import { useModal } from '../Modal/ModalContext'
import { confirmModal, openModal, openModalButtonText } from './utils'
import { Fragment, useActionState, useEffect, useRef } from 'react'
import { expect, userEvent, within } from '@storybook/test'
import { testIds } from '../Modal/utils/testingIds'

const meta = {
  title: 'Form handling modal',
  component: ModalProvider,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ModalProvider>

export default meta
type Story = StoryObj<typeof meta>

export const Modal: Story = {
  render: FormModal,
}

export const ConfirmationModalCloses: Story = {
  name: 'confirmation modal closes after confirmed',
  render: FormModal,
  play: async ({ canvasElement }) => {
    const root = canvasElement.parentElement as HTMLElement
    await openModal(root)
    fireEvent.change()
  },
}

interface Product {
  name: string
  price: number
}
const formId = 'add-new-product'

function FormModal() {
  const Content = () => {
    const formModalId = useRef<string>(null)

    const onNewProduct = (product: Product) => {
      close(formModalId.current!)
      openNewModal({ title: 'successfully created product', children: (
        <ResultSummary product={product} />
      ) })
    }

    const { openNewModal, close } = useModal()
    return (
      <div>
        <button onClick={() => {
          const id = openNewModal(
            {
              children: (
                <NewProduct {...{ onNewProduct, formId }} />
              ),
              buttons: () => <button form={formId} type="submit">Save</button>,
            },
          )
          formModalId.current = id
        }}
        >
          {openModalButtonText}
        </button>
      </div>
    )
  }

  return (
    <ModalProvider>
      <Content />
    </ModalProvider>
  )
}

const maxCharacterLength = 20
const minNameCharacters = 3

function NewProduct({ onNewProduct, formId }: { formId: string, onNewProduct: (product: Product) => void }) {
  const [_item, formAction] = useActionState<Product, FormData>((_prevState: Product, formData: FormData) => {
    const product = { name: (formData.get('name') as string).trim(), price: Number.parseInt(formData.get('price') as string, 10) }
    onNewProduct(product)
    return product
  }, { name: '', price: 0 })
  const input = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (input.current) {
      input.current.focus()
    }
  }, [])

  const customMessage = (message = '') => (e: React.FormEvent<HTMLInputElement>) => e.currentTarget.setCustomValidity(message)
  return (
    <form id={formId} action={formAction}>
      <h2>add new product</h2>
      <p>
        <label>
          name*&nbsp;
          <br />
          <input
            style={{ width: '100%' }}
            ref={input}
            autoComplete="off"
            onInput={customMessage()}
            onInvalid={customMessage(`Please start the name with at least ${minNameCharacters} letters`)}
            required
            maxLength={18}
            pattern={`\\s*[^\\W\\d]{${minNameCharacters},}.*\\s*`}
            name="name"
            type="text"
          />
        </label>
      </p>
      <p>
        <label>
          price ($) *&nbsp;
          <br />
          <input
            style={{ width: '100%' }}
            autoComplete="off"
            required
            name="price"
            type="number"
            min={0}
            step={0.01}
            max={1e6}
          />
        </label>
      </p>
    </form>
  )
}

function ResultSummary({ product }: { product: Product }) {
  const formattedPrice = new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' }).format(
    product.price,
  )
  return (
    <>
      <p>
        <label>
          <b>name:&nbsp;</b>
          <input id="age" name="age" type="text" value={product.name} readOnly style={{ border: 'none' }} />
        </label>
      </p>
      <p>
        <label>
          <b>price:&nbsp;</b>
          <input id="age" name="age" type="text" value={formattedPrice} readOnly style={{ border: 'none' }} />
        </label>
      </p>
    </>
  )
}
