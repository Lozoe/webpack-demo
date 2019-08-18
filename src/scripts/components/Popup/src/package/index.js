// import { pageScroll } from '@/scripts/common/utils'
export default {
  name: 'Popup',
  data() {
    return {
      show: this.value
    }
  },
  props: {
    height: {
      type: String,
      default: '60%'
    },
    value: {
      type: Boolean
    },
    closeOnMasker: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    value(val) {
      this.show = val
    },
    show(val) {
      // if(val) {
      //     pageScroll.lock();
      //     setTimeout(()=> {
      //         const $refs = this.$refs;
      //         const topHeight = !!this.$slots.top ? $refs.top.offsetHeight : 0;
      //         const bottomHeight = !!this.$slots.bottom ? $refs.bottom.offsetHeight : 0;
      //         const contentHeight = topHeight + $refs.content.offsetHeight + bottomHeight;
      //         if (contentHeight > $refs.box.offsetHeight) {
      //             $refs.box.addEventListener('touchmove', this.stopPropagation);
      //         }
      //     }, 300)
      // } else{
      //     pageScroll.unlock();
      //     $refs.box.removeEventListener('touchmove', this.stopPropagation);
      // }
    }
  },
  computed: {
    styles() {
      return { width: '100%', height: this.height }
    }
  },
  methods: {
    stopPropagation(e) {
      e.stopPropagation()
    },
    close() {
      if (this.closeOnMasker) {
        this.show = false
        this.$emit('close', this.show)
      }
    }
  }
}
