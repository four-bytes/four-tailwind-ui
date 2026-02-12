import { onMounted, onUnmounted, type Ref } from 'vue'

/**
 * Composable to detect clicks outside of an element
 *
 * @param elementRef - Ref to the element to watch
 * @param callback - Function to call when click outside is detected
 *
 * @example
 * ```vue
 * <script setup>
 * import { ref } from 'vue'
 * import { useClickOutside } from '@four-bytes/tailwind-ui'
 *
 * const dropdownRef = ref<HTMLElement | null>(null)
 * const isOpen = ref(false)
 *
 * useClickOutside(dropdownRef, () => {
 *   isOpen.value = false
 * })
 * </script>
 *
 * <template>
 *   <div ref="dropdownRef">
 *     <!-- dropdown content -->
 *   </div>
 * </template>
 * ```
 */
export function useClickOutside(
  elementRef: Ref<HTMLElement | null>,
  callback: (event: MouseEvent) => void
) {
  const handleClickOutside = (event: MouseEvent) => {
    if (elementRef.value && !elementRef.value.contains(event.target as Node)) {
      callback(event)
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleClickOutside, true)
  })

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside, true)
  })
}
