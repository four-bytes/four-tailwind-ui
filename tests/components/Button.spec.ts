import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '../../src/components/buttons/Button.vue'

describe('Button', () => {
  it('renders slot content', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Click me',
      },
    })
    expect(wrapper.text()).toContain('Click me')
  })

  it('emits click event when clicked', async () => {
    const wrapper = mount(Button)
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
    expect(wrapper.emitted('click')).toHaveLength(1)
  })

  it('does not emit click when disabled', async () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeFalsy()
  })

  it('does not emit click when loading', async () => {
    const wrapper = mount(Button, {
      props: { loading: true },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeFalsy()
  })

  it('shows loading spinner when loading', () => {
    const wrapper = mount(Button, {
      props: { loading: true },
    })
    expect(wrapper.find('.animate-spin').exists()).toBe(true)
  })

  it('applies disabled attribute when disabled', () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
    })
    expect(wrapper.attributes('disabled')).toBeDefined()
  })

  it('applies disabled attribute when loading', () => {
    const wrapper = mount(Button, {
      props: { loading: true },
    })
    expect(wrapper.attributes('disabled')).toBeDefined()
  })

  describe('variants', () => {
    it('applies primary variant classes by default', () => {
      const wrapper = mount(Button)
      expect(wrapper.classes()).toContain('bg-brand-500')
    })

    it('applies outline variant classes', () => {
      const wrapper = mount(Button, {
        props: { variant: 'outline' },
      })
      expect(wrapper.classes()).toContain('bg-white')
      expect(wrapper.classes()).toContain('ring-1')
    })

    it('applies danger variant classes', () => {
      const wrapper = mount(Button, {
        props: { variant: 'danger' },
      })
      expect(wrapper.classes()).toContain('bg-error-500')
    })
  })

  describe('sizes', () => {
    it('applies medium size classes by default', () => {
      const wrapper = mount(Button)
      expect(wrapper.classes()).toContain('px-4')
      expect(wrapper.classes()).toContain('py-2.5')
    })

    it('applies small size classes', () => {
      const wrapper = mount(Button, {
        props: { size: 'sm' },
      })
      expect(wrapper.classes()).toContain('px-3')
      expect(wrapper.classes()).toContain('py-2')
    })

    it('applies large size classes', () => {
      const wrapper = mount(Button, {
        props: { size: 'lg' },
      })
      expect(wrapper.classes()).toContain('px-5')
      expect(wrapper.classes()).toContain('py-3')
    })
  })

  it('sets button type attribute', () => {
    const wrapper = mount(Button, {
      props: { type: 'submit' },
    })
    expect(wrapper.attributes('type')).toBe('submit')
  })
})
