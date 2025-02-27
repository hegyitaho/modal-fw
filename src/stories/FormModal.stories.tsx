import type { Meta, StoryObj } from '@storybook/react'
import { ModalProvider, useModal } from '../'
import { openModal, openModalButtonText } from './utils'
import { useActionState, useEffect, useRef } from 'react'
import { expect, fireEvent, userEvent, within } from '@storybook/test'

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

interface Product {
  name: string
  price: number
}

const formId = 'add-new-product'

export const ConfirmationModalCloses: Story = {
  name: 'confirmation modal closes after confirmed',
  render: FormModal,
  play: async ({ canvasElement }) => {
    const root = canvasElement.parentElement as HTMLElement
    const canvas = within(root)
    const newProduct: Product = { name: 'some new product', price: 12345 }

    await openModal(root)

    await fillProductDetails(root, newProduct)

    await fireEvent.submit(canvas.getByTestId(formId))

    await assertCreatedProductDetailsAreShownInANewModal(root, newProduct)
  },
}

async function assertCreatedProductDetailsAreShownInANewModal(root: HTMLElement, newProduct: Product) {
  const canvas = within(root)

  const priceAnyWayFormatted = canvas.getByLabelText<HTMLInputElement>('price', { exact: false }).value
  await expect(['$12,345.00', '12345']).toContain(priceAnyWayFormatted) // TODO make Intl.NumberFormat/locale consistent in ci
  await expect(canvas.getByLabelText('name', { exact: false })).toHaveValue(newProduct.name)

  await userEvent.click(canvas.getByLabelText('close-modal'))
}

async function fillProductDetails(root: HTMLElement, newProduct: Product) {
  const canvas = within(root)
  await fireEvent.change(canvas.getByLabelText('name', { exact: false }), { target: { value: newProduct.name } })
  await fireEvent.change(canvas.getByLabelText('price', { exact: false }), { target: { value: newProduct.price } })
}

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
              isBlocking: true,
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

const maxCharacterLength = 25
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
    <form data-testid={formId} id={formId} action={formAction}>
      <h2>add new product</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'min-content 1fr', gap: '1rem' }}>
        <label htmlFor="product-name">name*</label>
        <input
          id="product-name"
          ref={input}
          autoComplete="off"
          onInput={customMessage()}
          onInvalid={customMessage(`Please start the name with at least ${minNameCharacters} letters, max ${maxCharacterLength} characters`)}
          required
          maxLength={maxCharacterLength}
          pattern={`\\s*[^\\W\\d]{${minNameCharacters},}.*\\s*`}
          name="name"
          type="text"
        />
        <label htmlFor="product-price" style={{ whiteSpace: 'nowrap' }}>price ($)*</label>
        <input
          id="product-price"
          autoComplete="off"
          required
          name="price"
          type="number"
          min={0}
          step={0.01}
          max={1e6}
        />
      </div>
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
