import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Modal from '../../src/components/overlays/Modal.vue'

describe('Modal', () => {
  beforeEach(() => {
    // Reset body style before each test
    document.body.style.overflow = ''
  })

  afterEach(() => {
    // Clean up any modals in body
    document.body.innerHTML = ''
    document.body.style.overflow = ''
  })

  it('renders slot content when open', async () => {
    const wrapper = mount(Modal, {
      props: { modelValue: true },
      slots: {
        default: '<div class="test-content">Modal Content</div>',
      },
      global: {
        stubs: {
          Teleport: true, // Stub teleport to render in place
        },
      },
    })

    expect(wrapper.html()).toContain('Modal Content')
  })

  it('does not render content when closed', () => {
    const wrapper = mount(Modal, {
      props: { modelValue: false },
      slots: {
        default: '<div class="test-content">Modal Content</div>',
      },
      global: {
        stubs: {
          Teleport: true,
        },
      },
    })

    expect(wrapper.html()).not.toContain('Modal Content')
  })

  it('emits update:modelValue false when backdrop is clicked', async () => {
    const wrapper = mount(Modal, {
      props: { modelValue: true, closeOnBackdrop: true },
      global: {
        stubs: {
          Teleport: true,
        },
      },
    })

    // Find and click the backdrop (first div with bg-gray-400/50)
    const backdrop = wrapper.find('[aria-hidden="true"]')
    await backdrop.trigger('click')

    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([false])
  })

  it('does not emit on backdrop click when closeOnBackdrop is false', async () => {
    const wrapper = mount(Modal, {
      props: { modelValue: true, closeOnBackdrop: false },
      global: {
        stubs: {
          Teleport: true,
        },
      },
    })

    const backdrop = wrapper.find('[aria-hidden="true"]')
    await backdrop.trigger('click')

    expect(wrapper.emitted('update:modelValue')).toBeFalsy()
  })

  it('closes on Escape key when closeOnEscape is true', async () => {
    const wrapper = mount(Modal, {
      props: { modelValue: true, closeOnEscape: true },
      global: {
        stubs: {
          Teleport: true,
        },
      },
    })

    // Simulate escape key press
    const event = new KeyboardEvent('keydown', { key: 'Escape' })
    document.dispatchEvent(event)

    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([false])
  })

  it('does not close on Escape key when closeOnEscape is false', async () => {
    const wrapper = mount(Modal, {
      props: { modelValue: true, closeOnEscape: false },
      global: {
        stubs: {
          Teleport: true,
        },
      },
    })

    const event = new KeyboardEvent('keydown', { key: 'Escape' })
    document.dispatchEvent(event)

    expect(wrapper.emitted('update:modelValue')).toBeFalsy()
  })

  describe('size variants', () => {
    it.each([
      ['sm', 'max-w-sm'],
      ['md', 'max-w-lg'],
      ['lg', 'max-w-2xl'],
      ['xl', 'max-w-4xl'],
    ])('applies %s size class', async (size, expectedClass) => {
      const wrapper = mount(Modal, {
        props: { modelValue: true, size: size as 'sm' | 'md' | 'lg' | 'xl' },
        global: {
          stubs: {
            Teleport: true,
          },
        },
      })

      expect(wrapper.html()).toContain(expectedClass)
    })
  })

  it('locks body scroll when open', async () => {
    const wrapper = mount(Modal, {
      props: { modelValue: false },
      global: {
        stubs: {
          Teleport: true,
        },
      },
    })

    expect(document.body.style.overflow).toBe('')

    await wrapper.setProps({ modelValue: true })
    expect(document.body.style.overflow).toBe('hidden')

    await wrapper.setProps({ modelValue: false })
    expect(document.body.style.overflow).toBe('')
  })
})
