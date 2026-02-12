import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount, config } from '@vue/test-utils'
import { defineComponent, h, nextTick } from 'vue'
import { useSidebarProvider, useSidebar, SidebarSymbol } from '../../src/composables/useSidebar'

// Helper to create a test wrapper with provider
const createWrapper = (options = {}) => {
  const ProviderComponent = defineComponent({
    setup() {
      return useSidebarProvider(options)
    },
    render() {
      return h('div', this.$slots.default?.())
    },
  })

  const ConsumerComponent = defineComponent({
    setup() {
      const sidebar = useSidebar()
      return { sidebar }
    },
    template: '<div></div>',
  })

  return mount(ProviderComponent, {
    slots: {
      default: () => h(ConsumerComponent),
    },
  })
}

describe('useSidebar', () => {
  beforeEach(() => {
    // Mock window.innerWidth
    vi.stubGlobal('innerWidth', 1024)
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  describe('useSidebarProvider', () => {
    it('provides default expanded state', () => {
      const TestComponent = defineComponent({
        setup() {
          const context = useSidebarProvider()
          return { context }
        },
        template: '<div>{{ context.isExpanded.value }}</div>',
      })

      const wrapper = mount(TestComponent)
      expect(wrapper.text()).toBe('true')
    })

    it('respects initialExpanded option', () => {
      const TestComponent = defineComponent({
        setup() {
          const context = useSidebarProvider({ initialExpanded: false })
          return { context }
        },
        template: '<div>{{ context.isExpanded.value }}</div>',
      })

      const wrapper = mount(TestComponent)
      // On desktop (>768px), isExpanded should be false
      expect(wrapper.text()).toBe('false')
    })

    it('toggleSidebar toggles expanded state on desktop', async () => {
      const TestComponent = defineComponent({
        setup() {
          const context = useSidebarProvider()
          return { context }
        },
        template: `
          <div>
            <span class="state">{{ context.isExpanded.value }}</span>
            <button @click="context.toggleSidebar">Toggle</button>
          </div>
        `,
      })

      const wrapper = mount(TestComponent)
      expect(wrapper.find('.state').text()).toBe('true')

      await wrapper.find('button').trigger('click')
      expect(wrapper.find('.state').text()).toBe('false')

      await wrapper.find('button').trigger('click')
      expect(wrapper.find('.state').text()).toBe('true')
    })

    it('toggleMobileSidebar toggles mobile open state', async () => {
      const TestComponent = defineComponent({
        setup() {
          const context = useSidebarProvider()
          return { context }
        },
        template: `
          <div>
            <span class="state">{{ context.isMobileOpen.value }}</span>
            <button @click="context.toggleMobileSidebar">Toggle</button>
          </div>
        `,
      })

      const wrapper = mount(TestComponent)
      expect(wrapper.find('.state').text()).toBe('false')

      await wrapper.find('button').trigger('click')
      expect(wrapper.find('.state').text()).toBe('true')
    })

    it('setIsHovered updates hovered state', async () => {
      const TestComponent = defineComponent({
        setup() {
          const context = useSidebarProvider()
          return { context }
        },
        template: `
          <div>
            <span class="state">{{ context.isHovered.value }}</span>
            <button @click="context.setIsHovered(true)">Hover</button>
            <button @click="context.setIsHovered(false)" class="unhover">Unhover</button>
          </div>
        `,
      })

      const wrapper = mount(TestComponent)
      expect(wrapper.find('.state').text()).toBe('false')

      await wrapper.find('button').trigger('click')
      expect(wrapper.find('.state').text()).toBe('true')

      await wrapper.find('.unhover').trigger('click')
      expect(wrapper.find('.state').text()).toBe('false')
    })

    it('toggleSubmenu toggles submenu state', async () => {
      const TestComponent = defineComponent({
        setup() {
          const context = useSidebarProvider()
          return { context }
        },
        template: `
          <div>
            <span class="state">{{ context.openSubmenu.value }}</span>
            <button @click="context.toggleSubmenu('menu1')">Toggle Menu1</button>
          </div>
        `,
      })

      const wrapper = mount(TestComponent)
      expect(wrapper.find('.state').text()).toBe('')

      await wrapper.find('button').trigger('click')
      expect(wrapper.find('.state').text()).toBe('menu1')

      // Toggle again should close it
      await wrapper.find('button').trigger('click')
      expect(wrapper.find('.state').text()).toBe('')
    })
  })

  describe('useSidebar (consumer)', () => {
    it('throws error when used outside provider', () => {
      const TestComponent = defineComponent({
        setup() {
          useSidebar()
        },
        template: '<div></div>',
      })

      expect(() => mount(TestComponent)).toThrow(
        'useSidebar must be used within a component that has SidebarProvider as an ancestor'
      )
    })

    it('can access context from provider', () => {
      const ProviderComponent = defineComponent({
        setup() {
          useSidebarProvider()
        },
        render() {
          return h('div', this.$slots.default?.())
        },
      })

      const ConsumerComponent = defineComponent({
        setup() {
          const { isExpanded } = useSidebar()
          return { isExpanded }
        },
        template: '<span>{{ isExpanded }}</span>',
      })

      const wrapper = mount(ProviderComponent, {
        slots: {
          default: () => h(ConsumerComponent),
        },
      })

      expect(wrapper.text()).toBe('true')
    })
  })
})
