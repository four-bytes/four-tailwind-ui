import { Ref } from 'vue';

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
export declare function useClickOutside(elementRef: Ref<HTMLElement | null>, callback: (event: MouseEvent) => void): void;
//# sourceMappingURL=useClickOutside.d.ts.map