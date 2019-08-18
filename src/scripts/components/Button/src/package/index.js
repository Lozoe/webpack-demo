export default {
    name: 'Button',
    props: {
        disabled: Boolean,
        actiontype: {
            validator(value) {
                return ['button', 'submit', 'reset'].indexOf(value) > -1;
            },
            default: 'button'
        },
        type: {
            validator(value) {
                return ['primary', 'gray', 'hollow'].indexOf(value) > -1;
            },
            default: 'primary'
        },
        size: {
            validator(value) {
                return ['small', 'normal'].indexOf(value) > -1;
            },
            default: 'normal'
        },
        bgcolor: String,
        color: String,
        width: {
            type: String
        }
    },
    computed: {
        classes() {
            return `btn-${this.size} btn-${this.type}`;
        }
    },
    methods: {
        buttonClick() {
            this.$emit('button-click', this);
        }
    }
}